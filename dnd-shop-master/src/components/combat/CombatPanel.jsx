import { useEffect, useMemo, useState } from "react";
import { biomeMonsters } from "../../data/biomeMonsters";
import { combatConditions } from "../../data/combatConditions";
import { combatItems } from "../../data/combatItems";
import { mergeCombatItemsWithInventory } from "../../utils/combatItemMapper";
import { splitDamageOptions } from "../../utils/diceRoller";
import { buildPlayableMonsterActions, formatActionMeta } from "../../utils/monsterRules";
import {
  formatAbilityModifier,
  getAbilityLabel,
  getAbilityModifier,
} from "../../utils/monsterStats";
import {
  getEncounterDifficulty,
  getPartyXpThresholds,
} from "../../data/combatXpRules";
import {
  createEncounterMonsterFromBestiary,
  getDexModifierFromActor,
  getDexScoreFromActor,
} from "../../utils/combatMonsterFactory";
import {
  clearCombatState,
  readCombatState,
  writeCombatState,
} from "../../utils/combatStorage";
import { getMonsterXp } from "../../utils/monsterXpTable";

const emptyCharacter = {
  name: "",
  level: 1,
  armorClass: 10,
  maxHp: 10,
  currentHp: 10,
  initiative: "",
  dexScore: 10,
};

const CONDITION_DURATION_OPTIONS = [
  { value: "manual", label: "Manuale" },
  { value: "turnEnd", label: "Fino a fine turno" },
  { value: "1", label: "1 round" },
  { value: "3", label: "3 round" },
  { value: "10", label: "10 round" },
];

function createId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function clampHp(value, max) {
  const numericValue = Number(value) || 0;
  const numericMax = Number(max) || 0;

  return Math.max(0, Math.min(numericValue, numericMax));
}

function normalizeConditionEntry(condition) {
  if (typeof condition === "string") {
    return {
      name: condition,
      duration: "manual",
      remainingRounds: null,
    };
  }

  return {
    name: condition?.name || String(condition || ""),
    duration: condition?.duration || "manual",
    remainingRounds:
      condition?.remainingRounds === undefined ||
      condition?.remainingRounds === null
        ? null
        : Number(condition.remainingRounds),
  };
}

function getConditionName(condition) {
  return normalizeConditionEntry(condition).name;
}

function formatConditionLabel(condition) {
  const normalized = normalizeConditionEntry(condition);

  if (normalized.duration === "turnEnd") {
    return `${normalized.name} (fine turno)`;
  }

  if (Number.isFinite(normalized.remainingRounds)) {
    return `${normalized.name} (${normalized.remainingRounds} round)`;
  }

  return normalized.name;
}

function getCombatStatus(actor) {
  if (!actor || Number(actor.currentHp || 0) > 0) {
    return "";
  }

  return actor.actorType === "monster" || actor.monsterId
    ? "Sconfitto"
    : "A terra";
}

function getPassivePerception(actor) {
  return (
    actor?.passivePerception ||
    actor?.passivePerceptionScore ||
    actor?.passiveWisdom ||
    actor?.pp ||
    null
  );
}

function getActorTypeLabel(actor) {
  return actor?.actorType === "monster" || actor?.monsterId
    ? "Mostro"
    : "Party";
}

function getInitiativeTotal(actor) {
  const total = Number(actor?.initiativeTotal ?? actor?.initiative ?? 0);
  return Number.isFinite(total) ? total : 0;
}

function getInitiativeBreakdown(actor) {
  const total = getInitiativeTotal(actor);
  const roll = Number(actor?.initiativeRoll);
  const modifier = Number(actor?.initiativeModifier ?? getDexModifierFromActor(actor));

  if (Number.isFinite(roll) && actor?.actorType === "monster") {
    return `Iniz. ${total} (${roll} ${modifier >= 0 ? "+" : "-"} ${Math.abs(modifier)})`;
  }

  return `Iniz. ${total}`;
}

function getActorOrder(actor, fallbackOrder) {
  const value = Number(actor?.insertionOrder ?? actor?.createdAt ?? fallbackOrder);
  return Number.isFinite(value) ? value : fallbackOrder;
}

export function CombatPanel({ selectedMerchant, combatEntryKey = 0 }) {
  const savedCombatState = useMemo(() => readCombatState(), []);

  const [round, setRound] = useState(savedCombatState?.round || 1);
  const [currentTurnIndex, setCurrentTurnIndex] = useState(
    savedCombatState?.currentTurnIndex || 0
  );

  const [party, setParty] = useState(savedCombatState?.party || []);
  const [characterDraft, setCharacterDraft] = useState(emptyCharacter);

  const [selectedMonsterId, setSelectedMonsterId] = useState(
    biomeMonsters[0]?.id || ""
  );
  const [monsterSearch, setMonsterSearch] = useState("");

  const [encounterMonsters, setEncounterMonsters] = useState(
    savedCombatState?.encounterMonsters || []
  );

  const [activeActorId, setActiveActorId] = useState(
    savedCombatState?.activeActorId || ""
  );
  const [selectedTargetId, setSelectedTargetId] = useState(
    savedCombatState?.selectedTargetId || ""
  );
  const [damageAmount, setDamageAmount] = useState(
    savedCombatState?.damageAmount || 5
  );
  const [selectedCombatItemId, setSelectedCombatItemId] = useState(
    savedCombatState?.selectedCombatItemId || combatItems[0]?.id || ""
  );
  const [combatItemSearch, setCombatItemSearch] = useState(
    savedCombatState?.combatItemSearch || ""
  );
  const [combatItemManualValue, setCombatItemManualValue] = useState(
    savedCombatState?.combatItemManualValue || ""
  );
  const [selectedConditionDuration, setSelectedConditionDuration] =
    useState("manual");
  const [activeActionTab, setActiveActionTab] = useState("damage");
  const [combatPanelMode, setCombatPanelMode] = useState("prep");
  const [combatStartWarning, setCombatStartWarning] = useState("");
  const [combatItemSaveSucceeded, setCombatItemSaveSucceeded] = useState(false);
  const [combatLog, setCombatLog] = useState(
    savedCombatState?.combatLog || []
  );

  useEffect(() => {
    setCombatPanelMode("prep");
    setActiveActionTab("damage");
    setCombatStartWarning("");
  }, [combatEntryKey]);

  const totalMonsterXp = useMemo(() => {
    return encounterMonsters.reduce(
      (total, monster) => total + Number(monster.xp ?? getMonsterXp(monster)),
      0
    );
  }, [encounterMonsters]);

  const averagePartyLevel = useMemo(() => {
    if (party.length === 0) return 0;

    const totalLevel = party.reduce(
      (total, character) => total + Number(character.level || 0),
      0
    );

    return Math.round((totalLevel / party.length) * 10) / 10;
  }, [party]);

  const xpPerCharacter = useMemo(() => {
    if (party.length === 0) return 0;
    return Math.round(totalMonsterXp / party.length);
  }, [party.length, totalMonsterXp]);

  const partyThresholds = useMemo(() => {
    return getPartyXpThresholds(party);
  }, [party]);

  const encounterDifficulty = useMemo(() => {
    return getEncounterDifficulty(totalMonsterXp, party);
  }, [totalMonsterXp, party]);

  const initiativeOrder = useMemo(() => {
    const partyActors = party.map((character, index) => ({
      ...character,
      actorType: "character",
      initiativeTotal: getInitiativeTotal(character),
      dexScore: getDexScoreFromActor(character),
      dexMod: getDexModifierFromActor(character),
      insertionOrder: getActorOrder(character, index),
    }));

    const monsterActors = encounterMonsters.map((monster, index) => ({
      ...monster,
      actorType: "monster",
      initiativeTotal: getInitiativeTotal(monster),
      dexScore: getDexScoreFromActor(monster),
      dexMod: getDexModifierFromActor(monster),
      insertionOrder: getActorOrder(monster, party.length + index),
    }));

    return [...partyActors, ...monsterActors].sort((a, b) => {
      const initiativeDifference =
        getInitiativeTotal(b) - getInitiativeTotal(a);

      if (initiativeDifference !== 0) return initiativeDifference;

      const dexDifference =
        getDexModifierFromActor(b) - getDexModifierFromActor(a);

      if (dexDifference !== 0) return dexDifference;

      if (a.actorType !== b.actorType) {
        return a.actorType === "character" ? -1 : 1;
      }

      return getActorOrder(a, 0) - getActorOrder(b, 0);
    });
  }, [party, encounterMonsters]);

  const currentTurnActor = initiativeOrder[currentTurnIndex] || null;

  const allTargets = useMemo(() => {
    return [
      ...party.map((character) => ({
        id: character.id,
        name: character.name,
        type: "character",
      })),
      ...encounterMonsters.map((monster) => ({
        id: monster.id,
        name: monster.name,
        type: "monster",
      })),
    ];
  }, [party, encounterMonsters]);

  const selectedTarget =
    party.find((character) => character.id === selectedTargetId) ||
    encounterMonsters.find((monster) => monster.id === selectedTargetId);

  const filteredMonsters = useMemo(() => {
    const search = monsterSearch.trim().toLowerCase();

    if (!search) {
      return biomeMonsters;
    }

    return biomeMonsters.filter((monster) => {
      return (
        monster.name.toLowerCase().includes(search) ||
        String(monster.cr).toLowerCase().includes(search) ||
        String(monster.type || "").toLowerCase().includes(search) ||
        String(monster.role || "").toLowerCase().includes(search) ||
        String(monster.difficulty || "").toLowerCase().includes(search) ||
        (monster.tags || []).join(" ").toLowerCase().includes(search)
      );
    });
  }, [monsterSearch]);

  useEffect(() => {
    if (filteredMonsters.length === 0) {
      setSelectedMonsterId("");
      return;
    }

    const selectedStillExists = filteredMonsters.some(
      (monster) => monster.id === selectedMonsterId
    );

    if (!selectedStillExists) {
      setSelectedMonsterId(filteredMonsters[0].id);
    }
  }, [filteredMonsters, selectedMonsterId]);

  useEffect(() => {
    const combatState = {
      round,
      currentTurnIndex,
      party,
      encounterMonsters,
      activeActorId,
      selectedTargetId,
      damageAmount,
      selectedCombatItemId,
      combatItemSearch,
      combatItemManualValue,
      combatLog,
    };

    writeCombatState(combatState);
  }, [
    round,
    currentTurnIndex,
    party,
    encounterMonsters,
    activeActorId,
    selectedTargetId,
    damageAmount,
    selectedCombatItemId,
    combatItemSearch,
    combatItemManualValue,
    combatLog,
  ]);

  useEffect(() => {
    if (initiativeOrder.length === 0) {
      setCurrentTurnIndex(0);
      setActiveActorId("");
      return;
    }

    if (currentTurnIndex >= initiativeOrder.length) {
      setCurrentTurnIndex(0);
      return;
    }

    const currentActor = initiativeOrder[currentTurnIndex];

    if (currentActor) {
      setActiveActorId(currentActor.id);
    }
  }, [initiativeOrder, currentTurnIndex]);

  function addLogEntry(text) {
    setCombatLog((current) => [
      {
        id: createId("log"),
        text: `Round ${round} · ${text}`,
      },
      ...current,
    ]);
  }

  function updateCharacterDraft(field, value) {
    setCharacterDraft((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function addCharacter() {
    const trimmedName = characterDraft.name.trim();

    if (!trimmedName) return;

    const maxHp = Number(characterDraft.maxHp) || 1;
    const dexScore = getDexScoreFromActor(characterDraft);
    const dexMod = getDexModifierFromActor({ dexScore });
    const initiativeTotal = Number(characterDraft.initiative);

    const newCharacter = {
      id: createId("pc"),
      name: trimmedName,
      level: Number(characterDraft.level) || 1,
      armorClass: Number(characterDraft.armorClass) || 10,
      maxHp,
      currentHp: clampHp(characterDraft.currentHp || maxHp, maxHp),
      initiative: Number.isFinite(initiativeTotal) ? initiativeTotal : 0,
      initiativeTotal: Number.isFinite(initiativeTotal) ? initiativeTotal : 0,
      initiativeModifier: dexMod,
      dexScore,
      dexMod,
      insertionOrder: party.length,
      conditions: [],
      notes: "",
    };

    setParty((current) => [...current, newCharacter]);
    setCharacterDraft(emptyCharacter);

    if (!activeActorId) {
      setActiveActorId(newCharacter.id);
    }
  }

  function removeCharacter(characterId) {
    setParty((current) =>
      current.filter((character) => character.id !== characterId)
    );

    if (activeActorId === characterId) {
      setActiveActorId("");
    }

    if (selectedTargetId === characterId) {
      setSelectedTargetId("");
    }
  }

  function updateCharacter(characterId, field, value) {
    setParty((current) =>
      current.map((character) => {
        if (character.id !== characterId) return character;

        const updated = {
          ...character,
          [field]: value,
        };

        if (field === "maxHp") {
          updated.maxHp = Number(value) || 1;
          updated.currentHp = clampHp(character.currentHp, updated.maxHp);
        }

        if (field === "currentHp") {
          updated.currentHp = clampHp(value, character.maxHp);
        }

        if (["level", "armorClass", "initiative", "dexScore"].includes(field)) {
          updated[field] = Number(value) || 0;
        }

        if (field === "initiative") {
          updated.initiativeTotal = Number(value) || 0;
        }

        if (field === "dexScore") {
          updated.dexMod = getDexModifierFromActor({ dexScore: updated.dexScore });
          updated.initiativeModifier = updated.dexMod;
        }

        return updated;
      })
    );
  }

  function addMonsterToEncounter() {
    const baseMonster = biomeMonsters.find(
      (monster) => monster.id === selectedMonsterId
    );

    if (!baseMonster) return;

    const encounterMonster = createEncounterMonsterFromBestiary(baseMonster);

    setEncounterMonsters((current) => [...current, encounterMonster]);

    if (!selectedTargetId) {
      setSelectedTargetId(encounterMonster.id);
    }
  }

  function removeEncounterMonster(monsterId) {
    setEncounterMonsters((current) =>
      current.filter((monster) => monster.id !== monsterId)
    );

    if (activeActorId === monsterId) {
      setActiveActorId("");
    }

    if (selectedTargetId === monsterId) {
      setSelectedTargetId("");
    }
  }

  function updateEncounterMonster(monsterId, field, value) {
    setEncounterMonsters((current) =>
      current.map((monster) => {
        if (monster.id !== monsterId) return monster;

        const updated = {
          ...monster,
          [field]: value,
        };

        if (field === "maxHp") {
          updated.maxHp = Number(value) || 1;
          updated.currentHp = clampHp(monster.currentHp, updated.maxHp);
        }

        if (field === "currentHp") {
          updated.currentHp = clampHp(value, monster.maxHp);
        }

        if (["armorClass", "initiative", "xp"].includes(field)) {
          updated[field] = Number(value) || 0;
        }

        if (field === "initiative") {
          updated.initiativeTotal = Number(value) || 0;
        }

        return updated;
      })
    );
  }

  function findActorName(actorId) {
    const actor = initiativeOrder.find((item) => item.id === actorId);
    return actor?.name || "DM";
  }

  function applyHpChange(mode) {
    const amount = Number(damageAmount) || 0;

    if (!selectedTargetId || amount <= 0) return;

    const target =
      party.find((character) => character.id === selectedTargetId) ||
      encounterMonsters.find((monster) => monster.id === selectedTargetId);

    if (!target) return;

    const signedAmount = mode === "heal" ? amount : -amount;
    const nextHp = clampHp(target.currentHp + signedAmount, target.maxHp);

    setParty((current) =>
      current.map((character) =>
        character.id === selectedTargetId
          ? { ...character, currentHp: nextHp }
          : character
      )
    );

    setEncounterMonsters((current) =>
      current.map((monster) =>
        monster.id === selectedTargetId
          ? { ...monster, currentHp: nextHp }
          : monster
      )
    );

    const actorName = findActorName(activeActorId);
    const targetName = target.name;

    const logText =
      mode === "heal"
        ? `${actorName} cura ${targetName} di ${amount} PF.`
        : `${actorName} infligge ${amount} danni a ${targetName}.`;

    addLogEntry(logText);
  }

  function toggleCondition(targetId, condition) {
    const rounds = Number(selectedConditionDuration);
    const nextCondition = {
      name: condition,
      duration: Number.isFinite(rounds) ? "rounds" : selectedConditionDuration,
      remainingRounds: Number.isFinite(rounds) ? rounds : null,
    };

    setParty((current) =>
      current.map((character) => {
        if (character.id !== targetId) return character;

        const currentConditions = character.conditions || [];
        const hasCondition = currentConditions.some(
          (item) => getConditionName(item) === condition
        );

        return {
          ...character,
          conditions: hasCondition
            ? currentConditions.filter(
                (item) => getConditionName(item) !== condition
              )
            : [...currentConditions, nextCondition],
        };
      })
    );

    setEncounterMonsters((current) =>
      current.map((monster) => {
        if (monster.id !== targetId) return monster;

        const currentConditions = monster.conditions || [];
        const hasCondition = currentConditions.some(
          (item) => getConditionName(item) === condition
        );

        return {
          ...monster,
          conditions: hasCondition
            ? currentConditions.filter(
                (item) => getConditionName(item) !== condition
              )
            : [...currentConditions, nextCondition],
        };
      })
    );

    const target =
      party.find((character) => character.id === targetId) ||
      encounterMonsters.find((monster) => monster.id === targetId);

    if (target) {
      const durationLabel =
        CONDITION_DURATION_OPTIONS.find(
          (option) => option.value === selectedConditionDuration
        )?.label || "Manuale";

      addLogEntry(
        `Condizione aggiornata su ${target.name}: ${condition} (${durationLabel}).`
      );
    }
  }

  function updateActorNotes(targetId, value) {
    setParty((current) =>
      current.map((character) =>
        character.id === targetId ? { ...character, notes: value } : character
      )
    );

    setEncounterMonsters((current) =>
      current.map((monster) =>
        monster.id === targetId ? { ...monster, notes: value } : monster
      )
    );
  }

  function expireEndOfTurnConditions() {
    const expiredNames = [];

    function removeTurnEndConditions(actor) {
      const keptConditions = (actor.conditions || []).filter((condition) => {
        const normalized = normalizeConditionEntry(condition);
        const shouldExpire = normalized.duration === "turnEnd";

        if (shouldExpire) {
          expiredNames.push(`${actor.name}: ${normalized.name}`);
        }

        return !shouldExpire;
      });

      return {
        ...actor,
        conditions: keptConditions,
      };
    }

    const nextParty = party.map(removeTurnEndConditions);
    const nextEncounterMonsters =
      encounterMonsters.map(removeTurnEndConditions);

    setParty(nextParty);
    setEncounterMonsters(nextEncounterMonsters);

    if (expiredNames.length > 0) {
      setCombatLog((current) => [
        {
          id: createId("log"),
          text: `Round ${round} · Condizioni fino a fine turno scadute: ${expiredNames.join(", ")}.`,
        },
        ...current,
      ]);
    }
  }

  function advanceConditionRounds() {
    const expiredNames = [];

    function tickActorConditions(actor) {
      const nextConditions = (actor.conditions || [])
        .map((condition) => {
          const normalized = normalizeConditionEntry(condition);

          if (normalized.duration !== "rounds") {
            return condition;
          }

          return {
            ...normalized,
            remainingRounds: Number(normalized.remainingRounds || 0) - 1,
          };
        })
        .filter((condition) => {
          const normalized = normalizeConditionEntry(condition);
          const shouldExpire =
            normalized.duration === "rounds" &&
            Number(normalized.remainingRounds || 0) <= 0;

          if (shouldExpire) {
            expiredNames.push(`${actor.name}: ${normalized.name}`);
          }

          return !shouldExpire;
        });

      return {
        ...actor,
        conditions: nextConditions,
      };
    }

    const nextParty = party.map(tickActorConditions);
    const nextEncounterMonsters = encounterMonsters.map(tickActorConditions);

    setParty(nextParty);
    setEncounterMonsters(nextEncounterMonsters);

    return expiredNames.length > 0
      ? ` Condizioni scadute: ${expiredNames.join(", ")}.`
      : "";
  }

  function startNewRound() {
    const nextRoundNumber = round + 1;
    const expiredText = advanceConditionRounds();

    setRound(nextRoundNumber);
    setCurrentTurnIndex(0);
    setCombatLog((current) => [
      {
        id: createId("log"),
        text: `Round ${nextRoundNumber} · Inizia un nuovo round.${expiredText}`,
      },
      ...current,
    ]);
  }

  function nextTurn() {
    if (initiativeOrder.length === 0) return;

    expireEndOfTurnConditions();

    const isLastTurn = currentTurnIndex >= initiativeOrder.length - 1;

    if (isLastTurn) {
      startNewRound();
      return;
    }

    setCurrentTurnIndex((current) => current + 1);
  }

  function previousTurn() {
    if (initiativeOrder.length === 0) return;

    if (currentTurnIndex <= 0) {
      setCurrentTurnIndex(initiativeOrder.length - 1);
      setRound((current) => Math.max(1, current - 1));
      return;
    }

    setCurrentTurnIndex((current) => current - 1);
  }

  function nextRound() {
    startNewRound();
  }

  function previousRound() {
    setRound((current) => Math.max(1, current - 1));
    setCurrentTurnIndex(0);
  }

  function resetCombat() {
    const confirmed = window.confirm(
      "Sei sicuro di voler resettare l'incontro? Round, turno attivo e mostri dell'incontro verranno azzerati. Il party resta disponibile."
    );

    if (!confirmed) return;

    setRound(1);
    setCurrentTurnIndex(0);
    setEncounterMonsters([]);
    setActiveActorId("");
    setSelectedTargetId("");
    setCombatLog([]);

    clearCombatState();
  }

  function resetEverything() {
    const confirmed = window.confirm(
      "Reset totale? Verranno eliminati party, mostri, round, condizioni e log del combattimento."
    );

    if (!confirmed) return;

    setRound(1);
    setCurrentTurnIndex(0);
    setParty([]);
    setEncounterMonsters([]);
    setActiveActorId("");
    setSelectedTargetId("");
    setDamageAmount(5);
    setSelectedCombatItemId(combatItems[0]?.id || "");
    setCombatItemSearch("");
    setCombatItemManualValue("");
    setCombatItemSaveSucceeded(false);
    setCombatLog([]);

    clearCombatState();
  }

  function getTargetSavingThrowModifier(target, ability) {
    const scores = target?.abilityScores || {};
    return getAbilityModifier(scores[ability] ?? 10);
  }

  function rollSavingThrow(target, savingThrow) {
    if (!savingThrow) return null;

    const d20 = Math.floor(Math.random() * 20) + 1;
    const modifier = getTargetSavingThrowModifier(target, savingThrow.ability);
    const total = d20 + modifier;

    return {
      d20,
      modifier,
      total,
      success: total >= savingThrow.dc,
    };
  }

  function applyCombatItem() {
    const item = availableCombatItems.find((entry) => entry.id === selectedCombatItemId);

    if (!item || !selectedTarget) return;

    const manualValue = Number(combatItemManualValue);
    const actorName = findActorName(activeActorId);
    const targetName = selectedTarget.name;

    const needsManualValue = item.type === "heal" || item.type === "damage";

    if (needsManualValue && (!Number.isFinite(manualValue) || manualValue <= 0)) {
      addLogEntry(
        `${actorName} prova a usare ${item.name}, ma manca il risultato dei dadi.`
      );
      return;
    }

    if (item.type === "note") {
      addLogEntry(
        `${actorName} usa ${item.name}${selectedTarget ? ` su ${targetName}` : ""}: ${item.description || "oggetto usato in scena"}.`
      );
      return;
    }

    if (item.type === "heal") {
      const nextHp = clampHp(
        selectedTarget.currentHp + manualValue,
        selectedTarget.maxHp
      );

      setParty((current) =>
        current.map((character) =>
          character.id === selectedTarget.id
            ? { ...character, currentHp: nextHp }
            : character
        )
      );

      setEncounterMonsters((current) =>
        current.map((monster) =>
          monster.id === selectedTarget.id
            ? { ...monster, currentHp: nextHp }
            : monster
        )
      );

      addLogEntry(
        `${actorName} usa ${item.name} su ${targetName}: cura ${manualValue} PF.`
      );
      setCombatItemManualValue("");
      return;
    }

    if (item.type === "condition") {
      const saveText = item.savingThrow
        ? ` TS ${getAbilityLabel(item.savingThrow.ability)} CD ${item.savingThrow.dc}${combatItemSaveSucceeded ? ": riuscito, effetto evitato" : ": fallito"}`
        : "";

      if (item.savingThrow && combatItemSaveSucceeded) {
        addLogEntry(
          `${actorName} usa ${item.name} su ${targetName}.${saveText}.`
        );
        setCombatItemSaveSucceeded(false);
        return;
      }

      if (item.condition) {
        toggleCondition(selectedTarget.id, item.condition);
      }

      addLogEntry(
        `${actorName} usa ${item.name} su ${targetName}: ${item.condition || "effetto applicato"}.${saveText}.`
      );
      setCombatItemSaveSucceeded(false);
      return;
    }

    if (item.type === "damage") {
      let finalDamage = manualValue;
      let saveText = "";

      if (item.savingThrow) {
        const abilityLabel = getAbilityLabel(item.savingThrow.ability);
        saveText = ` TS ${abilityLabel} CD ${item.savingThrow.dc}`;

        if (combatItemSaveSucceeded && item.savingThrow.success === "half") {
          finalDamage = Math.floor(finalDamage / 2);
          saveText += ": riuscito, danno dimezzato";
        } else if (combatItemSaveSucceeded && item.savingThrow.success === "none") {
          finalDamage = 0;
          saveText += ": riuscito, nessun danno";
        } else {
          saveText += ": fallito";
        }
      }

      const nextHp = clampHp(
        selectedTarget.currentHp - finalDamage,
        selectedTarget.maxHp
      );

      setParty((current) =>
        current.map((character) =>
          character.id === selectedTarget.id
            ? { ...character, currentHp: nextHp }
            : character
        )
      );

      setEncounterMonsters((current) =>
        current.map((monster) =>
          monster.id === selectedTarget.id
            ? { ...monster, currentHp: nextHp }
            : monster
        )
      );

      const damageType = item.damageType ? ` ${item.damageType}` : "";
      const conditionText = item.condition && finalDamage > 0 && !combatItemSaveSucceeded
        ? ` Condizione applicata: ${item.condition}.`
        : "";

      if (item.condition && finalDamage > 0 && !combatItemSaveSucceeded) {
        toggleCondition(selectedTarget.id, item.condition);
      }

      addLogEntry(
        `${actorName} usa ${item.name} su ${targetName}: ${finalDamage} danni${damageType}.${saveText}${conditionText}`
      );
      setCombatItemManualValue("");
      setCombatItemSaveSucceeded(false);
    }
  }

  function selectInitiativeActor(actorId, index) {
    setCurrentTurnIndex(index);
    setActiveActorId(actorId);
  }

  function startCombat() {
    const hasMissingPlayerInitiative = party.some(
      (character) =>
        character.initiative === "" ||
        character.initiative === null ||
        character.initiative === undefined
    );

    if (hasMissingPlayerInitiative) {
      setCombatStartWarning(
        "Inserisci l'iniziativa di tutti i personaggi prima di iniziare."
      );
      setCombatPanelMode("prep");
      return;
    }

    setCombatStartWarning("");
    setCurrentTurnIndex(0);

    if (initiativeOrder[0]) {
      setActiveActorId(initiativeOrder[0].id);
      setSelectedTargetId((currentTarget) => currentTarget || initiativeOrder[0].id);
    }

    setActiveActionTab("damage");
    setCombatPanelMode("combat");
  }

  const availableCombatItems = useMemo(() => {
    return mergeCombatItemsWithInventory(
      combatItems,
      selectedMerchant?.type === "shop" ? selectedMerchant.inventory || [] : []
    );
  }, [selectedMerchant]);

  const filteredCombatItems = useMemo(() => {
    const search = combatItemSearch.trim().toLowerCase();

    if (!search) return availableCombatItems;

    return availableCombatItems.filter((item) => {
      return [
        item.name,
        item.category,
        item.type,
        item.damageType,
        item.condition,
        item.formula,
        item.description,
        item.rarity,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(search);
    });
  }, [availableCombatItems, combatItemSearch]);

  useEffect(() => {
    if (availableCombatItems.length === 0) {
      setSelectedCombatItemId("");
      return;
    }

    const selectedStillExists = availableCombatItems.some(
      (item) => item.id === selectedCombatItemId
    );

    if (!selectedStillExists) {
      setSelectedCombatItemId(availableCombatItems[0].id);
    }
  }, [availableCombatItems, selectedCombatItemId]);

  useEffect(() => {
    if (filteredCombatItems.length === 0) return;

    const selectedStillVisible = filteredCombatItems.some(
      (item) => item.id === selectedCombatItemId
    );

    if (!selectedStillVisible) {
      setSelectedCombatItemId(filteredCombatItems[0].id);
    }
  }, [filteredCombatItems, selectedCombatItemId]);

  const selectedCombatItem =
    availableCombatItems.find((item) => item.id === selectedCombatItemId) ||
    availableCombatItems[0];

  const activeActor = initiativeOrder.find((actor) => actor.id === activeActorId);

  const activeMonster =
    activeActor?.actorType === "monster"
      ? encounterMonsters.find((monster) => monster.id === activeActor.id)
      : null;

  const activeMonsterTechnicalActions = activeMonster
    ? activeMonster.technicalActions || buildPlayableMonsterActions(activeMonster)
    : [];

  const activeMonsterDamageOptions = activeMonsterTechnicalActions.length > 0
    ? []
    : splitDamageOptions(activeMonster?.combat?.damage);

  const activeTurnActor = currentTurnActor || activeActor;
  const activeTurnStatus = getCombatStatus(activeTurnActor);
  const activeTurnConditions = activeTurnActor?.conditions || [];
  const activeTurnPassivePerception = getPassivePerception(activeTurnActor);
  const activeTurnIsMonster =
    activeTurnActor?.actorType === "monster" || activeTurnActor?.monsterId;
  const activeTurnAbilities = activeTurnActor?.abilityScores || {};
  const activeTurnActions = activeTurnIsMonster
    ? activeTurnActor?.technicalActions ||
      buildPlayableMonsterActions(activeTurnActor)
    : [];
  const activeTurnSavingThrows =
    activeTurnActor?.savingThrows ||
    activeTurnActor?.saves ||
    activeTurnActor?.savingThrowProficiencies ||
    null;
  const selectedTargetWithType = selectedTarget
    ? {
        ...selectedTarget,
        actorType: selectedTarget.monsterId ? "monster" : "character",
      }
    : null;
  const selectedTargetStatus = getCombatStatus(selectedTargetWithType);
  const selectedTargetPassivePerception =
    getPassivePerception(selectedTargetWithType);
  const isSelfTarget =
    Boolean(activeActorId) &&
    Boolean(selectedTargetId) &&
    activeActorId === selectedTargetId;

  return (
    <>
      <section className="combat-hero fantasy-card">
        <div>
          <div className="section-kicker">Strumento del Dungeon Master</div>
          <h1>Combattimento</h1>
          <p>
            Prepara il party, scegli i mostri dal bestiario, assegna XP,
            iniziativa, PF e gestisci rapidamente danni, cure, condizioni,
            round e bersagli.
          </p>
        </div>

        <div className="combat-hero-mark">⚔️</div>
      </section>

      <section className="combat-summary-grid">
        <div className="combat-summary-card fantasy-card">
          <span>Round</span>
          <strong>{round}</strong>
          <small>
            {currentTurnActor
              ? `Turno: ${currentTurnActor.name}`
              : "Nessun turno attivo"}
          </small>
        </div>

        <div className="combat-summary-card fantasy-card">
          <span>Party</span>
          <strong>{party.length}</strong>
          <small>Livello medio {averagePartyLevel || "—"}</small>
        </div>

        <div className="combat-summary-card fantasy-card">
          <span>XP Totali</span>
          <strong>{totalMonsterXp}</strong>
          <small>{xpPerCharacter} XP per personaggio</small>
        </div>
      </section>

      <div className="combat-mode-tabs">
        <button
          className={
            combatPanelMode === "prep"
              ? "combat-mode-tab active"
              : "combat-mode-tab"
          }
          onClick={() => setCombatPanelMode("prep")}
        >
          Preparazione
        </button>

        <button
          className={
            combatPanelMode === "combat"
              ? "combat-mode-tab active"
              : "combat-mode-tab"
          }
          onClick={startCombat}
        >
          Combattimento
        </button>
      </div>

      {combatPanelMode === "prep" && (
      <section className="combat-difficulty-card fantasy-card">
        <div>
          <div className="section-kicker">Analisi incontro</div>
          <h2 className={`combat-difficulty-title ${encounterDifficulty.tone}`}>
            {encounterDifficulty.label}
          </h2>
          <p>{encounterDifficulty.description}</p>
        </div>

        <div className="combat-threshold-grid">
          <div>
            <span>Facile</span>
            <strong>{partyThresholds.easy}</strong>
          </div>
          <div>
            <span>Medio</span>
            <strong>{partyThresholds.medium}</strong>
          </div>
          <div>
            <span>Difficile</span>
            <strong>{partyThresholds.hard}</strong>
          </div>
          <div>
            <span>Mortale</span>
            <strong>{partyThresholds.deadly}</strong>
          </div>
        </div>

        <div className="combat-start-panel">
          {combatStartWarning && (
            <div className="combat-warning-box">
              {combatStartWarning}
            </div>
          )}

          <button
            className="primary-button combat-start-button"
            type="button"
            onClick={startCombat}
          >
            Avvia combattimento
          </button>
        </div>
      </section>
      )}

      {combatPanelMode === "combat" && (
      <>
      <section className="combat-active-bar fantasy-card">
        {activeTurnActor ? (
          <div className="combat-active-dashboard">
            <div className="combat-active-topline">
              <div className="combat-active-main">
                <span>Round {round}</span>
                <strong>{activeTurnActor.name}</strong>
                <em>{getActorTypeLabel(activeTurnActor)}</em>
              </div>

              <button
                className="primary-button combat-end-turn-button"
                onClick={nextTurn}
              >
                Prossimo turno &rarr;
              </button>
            </div>

            <div className="combat-active-stat-grid">
              <div>
                <span>CA</span>
                <strong>{activeTurnActor.armorClass || "?"}</strong>
              </div>
              <div>
                <span>PF</span>
                <strong>
                  {activeTurnActor.currentHp} / {activeTurnActor.maxHp}
                </strong>
              </div>
              <div>
                <span>Iniziativa</span>
                <strong>{getInitiativeTotal(activeTurnActor)}</strong>
                <small>{getInitiativeBreakdown(activeTurnActor)}</small>
              </div>
              <div>
                <span>Velocita</span>
                <strong>{activeTurnActor.speed || "-"}</strong>
              </div>
              <div>
                <span>PP</span>
                <strong>{activeTurnPassivePerception || "-"}</strong>
              </div>
            </div>

            <div className="combat-active-condition-row">
              <span>Condizioni</span>
              <strong>
                {activeTurnConditions.length > 0
                  ? activeTurnConditions.map(formatConditionLabel).join(", ")
                  : "Nessuna condizione"}
              </strong>
              {activeTurnStatus && (
                <span className="combat-status-pill danger">
                  {activeTurnStatus}
                </span>
              )}
            </div>

            {activeTurnIsMonster && (
              <div className="combat-active-monster-block">
                <div className="combat-active-abilities">
                  {["str", "dex", "con", "int", "wis", "cha"].map((ability) => {
                    const score = Number(activeTurnAbilities[ability] ?? 10);

                    return (
                      <span key={`${activeTurnActor.id}-${ability}`}>
                        <em>{getAbilityLabel(ability)}</em>
                        <strong>{score}</strong>
                        <small>{formatAbilityModifier(score)}</small>
                      </span>
                    );
                  })}
                </div>

                {activeTurnActions.length > 0 && (
                  <div className="combat-active-actions">
                    <span>Promemoria azioni</span>
                    <div>
                      {activeTurnActions.slice(0, 3).map((action, index) => (
                        <small key={`${action.name}-${index}`}>
                          <strong>{action.name}</strong>
                          {action.damage
                            ? ` - ${action.damage} ${action.damageType || ""}`
                            : action.hit
                              ? ` - ${action.hit}`
                              : action.savingThrow
                                ? ` - TS ${String(action.savingThrow.ability).toUpperCase()} CD ${action.savingThrow.dc}`
                                : ` - ${action.type}`}
                        </small>
                      ))}
                    </div>
                  </div>
                )}

                {activeTurnSavingThrows && (
                  <div className="combat-active-actions">
                    <span>Tiri salvezza</span>
                    <div>
                      {Array.isArray(activeTurnSavingThrows) ? (
                        activeTurnSavingThrows.map((save) => (
                          <small key={String(save)}>{String(save)}</small>
                        ))
                      ) : (
                        Object.entries(activeTurnSavingThrows).map(([ability, value]) => (
                          <small key={ability}>
                            <strong>{getAbilityLabel(ability)}</strong> {String(value)}
                          </small>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="combat-active-empty">
            <strong>Nessun turno attivo</strong>
            <span>Aggiungi party e mostri in Preparazione</span>
          </div>
        )}
      </section>

      <section className="combat-console fantasy-card">
        <div className="combat-console-pane initiative-pane">
          <div className="combat-console-heading">
            <h2>Iniziativa</h2>
            <span>{initiativeOrder.length} attori</span>
          </div>

          <div className="initiative-list combat-console-initiative">
            {initiativeOrder.length === 0 ? (
              <p className="combat-empty-state">
                Nessun partecipante. Apri Preparazione per aggiungere party e mostri.
              </p>
            ) : (
              initiativeOrder.map((actor, index) => (
                <button
                  key={actor.id}
                  className={[
                    "initiative-row",
                    index === currentTurnIndex ? "active current-turn" : "",
                    getCombatStatus(actor) ? "is-defeated" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => selectInitiativeActor(actor.id, index)}
                >
                  <span className="initiative-position">{index + 1}</span>
                  <span className="initiative-total">{getInitiativeTotal(actor)}</span>
                  <strong>{actor.name}</strong>
                  <em>{actor.actorType === "monster" ? "Mostro" : "Party"}</em>
                  <small>PF {actor.currentHp} / {actor.maxHp}</small>
                  <small>CA {actor.armorClass}</small>
                  <small>{getInitiativeBreakdown(actor)}</small>
                  {actor.conditions?.length > 0 && (
                    <small>{actor.conditions.map(formatConditionLabel).join(", ")}</small>
                  )}
                  {index === currentTurnIndex && (
                    <b className="initiative-active-badge">Turno attivo</b>
                  )}
                  {getCombatStatus(actor) && (
                    <b className="combat-status-pill danger">
                      {getCombatStatus(actor)}
                    </b>
                  )}
                </button>
              ))
            )}
          </div>
        </div>

        <div className="combat-console-pane action-pane">
          <div className="combat-console-heading">
            <h2>Azione rapida</h2>
            <span>bersaglio - valore - azione</span>
          </div>

          <div className="combat-action-grid compact-console">
            <label>
              Creatura attiva
              <select
                value={activeActorId}
                onChange={(event) => {
                  const actorId = event.target.value;
                  const actorIndex = initiativeOrder.findIndex(
                    (actor) => actor.id === actorId
                  );

                  if (actorIndex >= 0) {
                    selectInitiativeActor(actorId, actorIndex);
                  } else {
                    setActiveActorId(actorId);
                  }
                }}
              >
                <option value="">DM / Nessuno</option>
                {initiativeOrder.map((actor) => (
                  <option key={actor.id} value={actor.id}>
                    {actor.name}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Bersaglio
              <select
                value={selectedTargetId}
                onChange={(event) => setSelectedTargetId(event.target.value)}
              >
                <option value="">Seleziona bersaglio</option>
                {allTargets.map((target) => (
                  <option key={target.id} value={target.id}>
                    {target.name}
                  </option>
                ))}
              </select>
            </label>

          </div>

          <div className="combat-target-preview">
            {selectedTargetWithType ? (
              <>
                <strong>{selectedTargetWithType.name}</strong>
                <span>
                  PF {selectedTargetWithType.currentHp} / {selectedTargetWithType.maxHp} - CA {selectedTargetWithType.armorClass || "?"}
                </span>
                <small>PP {selectedTargetPassivePerception || "-"}</small>
                <small>
                  {selectedTargetWithType.conditions?.length > 0
                    ? selectedTargetWithType.conditions.map(formatConditionLabel).join(", ")
                    : "Nessuna condizione"}
                </small>
                {selectedTargetStatus && (
                  <small className="combat-status-pill danger">
                    {selectedTargetStatus}
                  </small>
                )}
              </>
            ) : (
              <span>Nessun bersaglio selezionato</span>
            )}
          </div>

          {isSelfTarget && (
            <div className="combat-warning-box">
              Attenzione: la creatura attiva e il bersaglio sono lo stesso elemento.
            </div>
          )}

          {activeActionTab === "damage" && (
            <>
            <label className="combat-manual-value-field">
              Risultato dadi / valore
              <input
                type="number"
                min="1"
                value={damageAmount}
                onChange={(event) => setDamageAmount(event.target.value)}
              />
            </label>

            <div className="combat-action-buttons compact-console">
              <button
                className="danger-button"
                onClick={() => applyHpChange("damage")}
              >
                Danno
              </button>

              <button
                className="secondary-button"
                onClick={() => applyHpChange("heal")}
              >
                Cura
              </button>
            </div>
            </>
          )}

          <div className="combat-action-tabs compact-console">
            {[
              ["damage", "Danno/Cura"],
              ["item", "Oggetto"],
              ["conditions", "Condizioni"],
              ["notes", "Note"],
            ].map(([tab, label]) => (
              <button
                key={tab}
                className={
                  activeActionTab === tab
                    ? "combat-action-tab active"
                    : "combat-action-tab"
                }
                onClick={() => setActiveActionTab(tab)}
              >
                {label}
              </button>
            ))}
          </div>

          {activeActionTab === "damage" &&
            activeMonster &&
            (activeMonsterTechnicalActions.length > 0 ||
              activeMonsterDamageOptions.length > 0) && (
              <div className="monster-quick-attack-panel compact-console">
                <div className="monster-quick-attack-header">
                  <span>Promemoria attacchi</span>
                  <strong>{activeMonster.name}</strong>
                </div>

                <div className="monster-quick-attack-grid">
                  {activeMonsterTechnicalActions.length > 0
                    ? activeMonsterTechnicalActions.map((action, index) => (
                        <div
                          key={`${activeMonster.id}-${action.name}-${index}`}
                          className="monster-quick-attack-note technical-reminder"
                        >
                          <span>{action.name}</span>
                          <strong>
                            {action.hit ||
                              (action.damage
                                ? `${action.damage} ${action.damageType || ""}`
                                : action.savingThrow
                                  ? `TS ${String(action.savingThrow.ability).toUpperCase()} CD ${action.savingThrow.dc}`
                                  : action.type)}
                          </strong>
                          <small>{formatActionMeta(action)}</small>
                          <small>
                            Promemoria tecnico: tira i dadi reali, poi inserisci
                            il risultato finale nel campo valore.
                          </small>
                        </div>
                      ))
                    : activeMonsterDamageOptions.map((damageFormula, index) => (
                        <div
                          key={activeMonster.id + "-" + damageFormula + "-" + index}
                          className="monster-quick-attack-note"
                        >
                          <span>{index === 0 ? "Attacco" : `Attacco ${index + 1}`}</span>
                          <strong>
                            {damageFormula}
                            {activeMonster.combat?.damageType
                              ? ` ${activeMonster.combat.damageType}`
                              : ""}
                          </strong>
                          {activeMonster.combat?.damageType && (
                            <small>Inserisci il risultato tirato nel campo valore.</small>
                          )}
                        </div>
                      ))}
                </div>
              </div>
            )}

          {activeActionTab === "item" && (
            <div className="combat-item-panel manual-item-panel compact-console">
              <div className="combat-item-header">
                <span>Oggetto rapido</span>
                <strong>{selectedCombatItem?.name || "Nessun oggetto"}</strong>
              </div>

              <div className="combat-item-form inventory-item-form compact-console">
                <label className="combat-item-search-field">
                  Cerca oggetto
                  <input
                    value={combatItemSearch}
                    onChange={(event) => setCombatItemSearch(event.target.value)}
                    placeholder="Pozione, arma, veleno..."
                  />
                </label>

                <label>
                  Oggetto
                  <select
                    value={selectedCombatItemId}
                    onChange={(event) => {
                      setSelectedCombatItemId(event.target.value);
                      setCombatItemManualValue("");
                      setCombatItemSaveSucceeded(false);
                    }}
                    disabled={filteredCombatItems.length === 0}
                  >
                    {filteredCombatItems.length === 0 ? (
                      <option value="">Nessun oggetto trovato</option>
                    ) : (
                      filteredCombatItems.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.source === "inventory" ? "Inventario - " : "Rapido - "}{item.name}
                          {item.qty ? " x" + item.qty : ""}
                        </option>
                      ))
                    )}
                  </select>
                </label>

                {(selectedCombatItem?.type === "heal" || selectedCombatItem?.type === "damage") && (
                  <label>
                    Risultato dadi
                    <input
                      type="number"
                      min="0"
                      value={combatItemManualValue}
                      onChange={(event) => setCombatItemManualValue(event.target.value)}
                      placeholder="Es. 16"
                    />
                  </label>
                )}
              </div>

              {selectedCombatItem?.savingThrow && (
                <label className="combat-item-save-toggle">
                  <input
                    type="checkbox"
                    checked={combatItemSaveSucceeded}
                    onChange={(event) => setCombatItemSaveSucceeded(event.target.checked)}
                  />
                  <span>
                    TS superato: {getAbilityLabel(selectedCombatItem.savingThrow.ability)} CD {selectedCombatItem.savingThrow.dc}
                  </span>
                </label>
              )}

              {selectedCombatItem?.description && <p>{selectedCombatItem.description}</p>}

              <button
                className="primary-button combat-item-apply-button"
                onClick={applyCombatItem}
                disabled={!selectedTarget || ((selectedCombatItem?.type === "heal" || selectedCombatItem?.type === "damage") && !combatItemManualValue)}
              >
                Applica oggetto
              </button>
            </div>
          )}

          {activeActionTab === "conditions" && selectedTargetId && selectedTarget && (
            <div className="combat-condition-panel compact-console">
              <div className="combat-condition-header">
                <span>Condizioni</span>
                <strong>{selectedTarget.name}</strong>
              </div>

              <label className="combat-condition-duration-row">
                Durata
                <select
                  value={selectedConditionDuration}
                  onChange={(event) =>
                    setSelectedConditionDuration(event.target.value)
                  }
                >
                  {CONDITION_DURATION_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <div className="combat-condition-grid compact-console">
                {combatConditions.map((condition) => {
                  const isActive =
                    selectedTarget.conditions?.some(
                      (item) => getConditionName(item) === condition
                    ) || false;

                  return (
                    <button
                      key={condition}
                      className={
                        isActive
                          ? "combat-condition-chip active"
                          : "combat-condition-chip"
                      }
                      onClick={() =>
                        toggleCondition(selectedTargetId, condition)
                      }
                    >
                      {condition}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {activeActionTab === "conditions" && (!selectedTargetId || !selectedTarget) && (
            <p className="combat-empty-state compact-console">
              Seleziona un bersaglio per gestire le condizioni.
            </p>
          )}

          {activeActionTab === "notes" && selectedTargetId && selectedTarget && (
            <div className="combat-condition-panel compact-notes compact-console">
              <div className="combat-condition-header">
                <span>Note</span>
                <strong>{selectedTarget.name}</strong>
              </div>

              <label className="combat-notes-field">
                Note bersaglio
                <textarea
                  value={selectedTarget.notes || ""}
                  onChange={(event) =>
                    updateActorNotes(selectedTargetId, event.target.value)
                  }
                  placeholder="Concentrazione, copertura, intenzioni..."
                />
              </label>
            </div>
          )}

          {activeActionTab === "notes" && (!selectedTargetId || !selectedTarget) && (
            <p className="combat-empty-state compact-console">
              Seleziona un bersaglio per scrivere note rapide.
            </p>
          )}
        </div>
      </section>
      </>
      )}

      {combatPanelMode === "prep" && (
      <section className="combat-grid combat-prep-grid">
        <div className="combat-panel fantasy-card">
          <div className="card-title-row">
            <div>
              <div className="card-icon">🧙</div>
              <h2>Party</h2>
            </div>
          </div>

          <div className="combat-form-grid">
            <label>
              Nome
              <input
                value={characterDraft.name}
                onChange={(event) =>
                  updateCharacterDraft("name", event.target.value)
                }
                placeholder="Es. Lorian"
              />
            </label>

            <label>
              Livello
              <input
                type="number"
                min="1"
                value={characterDraft.level}
                onChange={(event) =>
                  updateCharacterDraft("level", event.target.value)
                }
              />
            </label>

            <label>
              CA
              <input
                type="number"
                min="1"
                value={characterDraft.armorClass}
                onChange={(event) =>
                  updateCharacterDraft("armorClass", event.target.value)
                }
              />
            </label>

            <label>
              PF Max
              <input
                type="number"
                min="1"
                value={characterDraft.maxHp}
                onChange={(event) =>
                  updateCharacterDraft("maxHp", event.target.value)
                }
              />
            </label>

            <label>
              PF Attuali
              <input
                type="number"
                min="0"
                value={characterDraft.currentHp}
                onChange={(event) =>
                  updateCharacterDraft("currentHp", event.target.value)
                }
              />
            </label>

            <label>
              Iniziativa
              <input
                type="number"
                value={characterDraft.initiative}
                onChange={(event) =>
                  updateCharacterDraft("initiative", event.target.value)
                }
              />
            </label>

            <label>
              Destrezza
              <input
                type="number"
                value={characterDraft.dexScore}
                onChange={(event) =>
                  updateCharacterDraft("dexScore", event.target.value)
                }
              />
            </label>
          </div>

          <button
            className="primary-button combat-full-button"
            onClick={addCharacter}
          >
            Aggiungi personaggio
          </button>

          <div className="combat-list">
            {party.map((character) => {
              const characterStatus = getCombatStatus({
                ...character,
                actorType: "character",
              });

              return (
                <div
                  className={`party-combatant-card${characterStatus ? " is-down" : ""}`}
                  key={character.id}
                >
                  <div className="party-combatant-header">
                    <strong className="party-combatant-name">
                      {character.name}
                    </strong>
                    <button
                      className="icon-button party-combatant-remove"
                      onClick={() => removeCharacter(character.id)}
                      aria-label={`Rimuovi ${character.name}`}
                    >
                      ×
                    </button>
                  </div>

                  <div className="party-combatant-meta">
                    <div className="party-combatant-meta-item">
                      <span>Liv.</span>
                      <strong>{character.level}</strong>
                    </div>
                    <div className="party-combatant-meta-item">
                      <span>CA</span>
                      <strong>{character.armorClass}</strong>
                    </div>
                    <label className="party-combatant-meta-item">
                      <span>Iniz.</span>
                      <input
                        type="number"
                        value={character.initiative}
                        onChange={(event) =>
                          updateCharacter(
                            character.id,
                            "initiative",
                            event.target.value
                          )
                        }
                      />
                    </label>
                    <label className="party-combatant-meta-item">
                      <span>DES</span>
                      <input
                        type="number"
                        value={getDexScoreFromActor(character)}
                        onChange={(event) =>
                          updateCharacter(
                            character.id,
                            "dexScore",
                            event.target.value
                          )
                        }
                      />
                    </label>
                  </div>

                  <div className="party-combatant-hp">
                    <span>PF</span>
                    <input
                      type="number"
                      value={character.currentHp}
                      onChange={(event) =>
                        updateCharacter(
                          character.id,
                          "currentHp",
                          event.target.value
                        )
                      }
                    />
                    <strong>/ {character.maxHp} PF</strong>
                  </div>

                  {characterStatus && (
                    <small className="party-combatant-status is-down">
                      {characterStatus}
                    </small>
                  )}

                  {character.conditions?.length > 0 && (
                    <small className="combat-row-conditions">
                      {character.conditions.map(formatConditionLabel).join(", ")}
                    </small>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="combat-panel fantasy-card">
          <div className="card-title-row">
            <div>
              <div className="card-icon">🐉</div>
              <h2>Mostri</h2>
            </div>
          </div>

          <div className="combat-monster-search-row">
            <label>
              Cerca mostro
              <input
                value={monsterSearch}
                onChange={(event) => setMonsterSearch(event.target.value)}
                placeholder="Cerca per nome, CR, tipo, ruolo..."
              />
            </label>
          </div>

          <div className="combat-add-monster">
            <select
              value={selectedMonsterId}
              onChange={(event) => setSelectedMonsterId(event.target.value)}
              disabled={filteredMonsters.length === 0}
            >
              {filteredMonsters.length === 0 ? (
                <option value="">Nessun mostro trovato</option>
              ) : (
                filteredMonsters.map((monster) => (
                  <option key={monster.id} value={monster.id}>
                    {monster.name} · CR {monster.cr}
                  </option>
                ))
              )}
            </select>

            <button
              className="primary-button"
              onClick={addMonsterToEncounter}
              disabled={filteredMonsters.length === 0}
            >
              Aggiungi
            </button>
          </div>

          <div className="combat-list">
            {encounterMonsters.map((monster) => (
              <div className="monster-combat-card" key={monster.id}>
                <div className="monster-combat-main">
                  <strong className="monster-combat-name">{monster.name}</strong>
                  <span className="monster-combat-meta">
                    CR {monster.cr} · CA {monster.armorClass} · {monster.type} ·{" "}
                    {monster.role}
                  </span>

                  <small className="combat-row-conditions">
                    {getInitiativeBreakdown({
                      ...monster,
                      actorType: "monster",
                    })}
                  </small>

                  {getCombatStatus({
                    ...monster,
                    actorType: "monster",
                  }) && (
                    <small className="combat-status-pill danger">
                      {getCombatStatus({
                        ...monster,
                        actorType: "monster",
                      })}
                    </small>
                  )}

                  {monster.conditions?.length > 0 && (
                    <small className="combat-row-conditions">
                      {monster.conditions.map(formatConditionLabel).join(", ")}
                    </small>
                  )}
                </div>

                <div className="monster-combat-controls">
                  <label>
                    PF
                    <input
                      type="number"
                      value={monster.currentHp}
                      onChange={(event) =>
                        updateEncounterMonster(
                          monster.id,
                          "currentHp",
                          event.target.value
                        )
                      }
                    />
                  </label>

                  <label>
                    XP
                    <input
                      type="number"
                      value={monster.xp}
                      onChange={(event) =>
                        updateEncounterMonster(
                          monster.id,
                          "xp",
                          event.target.value
                        )
                      }
                    />
                  </label>

                  <label>
                    Iniz.
                    <input
                      type="number"
                      value={monster.initiative}
                      onChange={(event) =>
                        updateEncounterMonster(
                          monster.id,
                          "initiative",
                          event.target.value
                        )
                      }
                    />
                  </label>

                  <button
                    className="icon-button monster-combat-remove"
                    onClick={() => removeEncounterMonster(monster.id)}
                    aria-label={`Rimuovi ${monster.name}`}
                  >
                    ×
                  </button>
                </div>

                {monster.abilityScores && (
                  <div className="monster-ability-grid">
                    {Object.entries(monster.abilityScores).map(([ability, score]) => (
                      <span
                        className="monster-ability-pill"
                        key={`${monster.id}-${ability}`}
                      >
                        {getAbilityLabel(ability)} {formatAbilityModifier(score)}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      )}
    </>
  );
}
