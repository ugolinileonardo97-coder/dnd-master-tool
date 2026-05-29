import { useMemo, useState } from "react";
import { biomeMonsters } from "../../data/biomeMonsters";
import {
  getEncounterDifficulty,
  getPartyXpThresholds,
  getSuggestedXpByCr,
} from "../../data/combatXpRules";

const emptyCharacter = {
  name: "",
  level: 1,
  armorClass: 10,
  maxHp: 10,
  currentHp: 10,
  initiative: 0,
};

function createId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function clampHp(value, max) {
  const numericValue = Number(value) || 0;
  const numericMax = Number(max) || 0;

  return Math.max(0, Math.min(numericValue, numericMax));
}

export function CombatPanel() {
  const [round, setRound] = useState(1);

  const [party, setParty] = useState([]);
  const [characterDraft, setCharacterDraft] = useState(emptyCharacter);

  const [selectedMonsterId, setSelectedMonsterId] = useState(
    biomeMonsters[0]?.id || ""
  );
  const [encounterMonsters, setEncounterMonsters] = useState([]);

  const [activeActorId, setActiveActorId] = useState("");
  const [selectedTargetId, setSelectedTargetId] = useState("");
  const [damageAmount, setDamageAmount] = useState(5);
  const [combatLog, setCombatLog] = useState([]);

  const totalMonsterXp = useMemo(() => {
    return encounterMonsters.reduce(
      (total, monster) => total + Number(monster.xp || 0),
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
    const partyActors = party.map((character) => ({
      ...character,
      actorType: "character",
    }));

    const monsterActors = encounterMonsters.map((monster) => ({
      ...monster,
      actorType: "monster",
    }));

    return [...partyActors, ...monsterActors].sort(
      (a, b) => Number(b.initiative || 0) - Number(a.initiative || 0)
    );
  }, [party, encounterMonsters]);

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

    const newCharacter = {
      id: createId("pc"),
      name: trimmedName,
      level: Number(characterDraft.level) || 1,
      armorClass: Number(characterDraft.armorClass) || 10,
      maxHp,
      currentHp: clampHp(characterDraft.currentHp || maxHp, maxHp),
      initiative: Number(characterDraft.initiative) || 0,
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

        if (["level", "armorClass", "initiative"].includes(field)) {
          updated[field] = Number(value) || 0;
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

    const suggestedXp = getSuggestedXpByCr(baseMonster.cr);
    const maxHp = Number(baseMonster.hitPoints) || 1;

    const encounterMonster = {
      id: createId("monster"),
      monsterId: baseMonster.id,
      name: baseMonster.name,
      cr: baseMonster.cr,
      xp: suggestedXp,
      armorClass: Number(baseMonster.armorClass) || 10,
      maxHp,
      currentHp: maxHp,
      initiative: 0,
      type: baseMonster.type,
      role: baseMonster.role,
      difficulty: baseMonster.difficulty,
      icon: baseMonster.icon,
      image: baseMonster.image,
      conditions: [],
      notes: "",
    };

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

  function nextRound() {
    setRound((current) => current + 1);
    setCombatLog((current) => [
      {
        id: createId("log"),
        text: `Round ${round + 1} · Inizia un nuovo round.`,
      },
      ...current,
    ]);
  }

  function previousRound() {
    setRound((current) => Math.max(1, current - 1));
  }

  function resetCombat() {
    setRound(1);
    setEncounterMonsters([]);
    setActiveActorId("");
    setSelectedTargetId("");
    setCombatLog([]);
  }

  return (
    <>
      <section className="combat-hero fantasy-card">
        <div>
          <div className="section-kicker">Strumento del Dungeon Master</div>
          <h1>Combattimento</h1>
          <p>
            Prepara il party, scegli i mostri dal bestiario, assegna XP,
            iniziativa, PF e gestisci rapidamente danni, cure, round e
            bersagli.
          </p>
        </div>

        <div className="combat-hero-mark">⚔️</div>
      </section>

      <section className="combat-summary-grid">
        <div className="combat-summary-card fantasy-card">
          <span>Round</span>
          <strong>{round}</strong>
          <small>Turno corrente della scena</small>
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
      </section>

      <section className="combat-grid">
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
          </div>

          <button
            className="primary-button combat-full-button"
            onClick={addCharacter}
          >
            Aggiungi personaggio
          </button>

          <div className="combat-list">
            {party.map((character) => (
              <div className="combat-row" key={character.id}>
                <div className="combat-row-main">
                  <strong>{character.name}</strong>
                  <span>
                    Liv. {character.level} · CA {character.armorClass} · Iniz.{" "}
                    {character.initiative}
                  </span>
                </div>

                <div className="combat-hp-box">
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
                  <span>/ {character.maxHp} PF</span>
                </div>

                <button
                  className="icon-button"
                  onClick={() => removeCharacter(character.id)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="combat-panel fantasy-card">
          <div className="card-title-row">
            <div>
              <div className="card-icon">🐉</div>
              <h2>Mostri</h2>
            </div>
          </div>

          <div className="combat-add-monster">
            <select
              value={selectedMonsterId}
              onChange={(event) => setSelectedMonsterId(event.target.value)}
            >
              {biomeMonsters.map((monster) => (
                <option key={monster.id} value={monster.id}>
                  {monster.name} · CR {monster.cr}
                </option>
              ))}
            </select>

            <button className="primary-button" onClick={addMonsterToEncounter}>
              Aggiungi
            </button>
          </div>

          <div className="combat-list">
            {encounterMonsters.map((monster) => (
              <div className="combat-row monster" key={monster.id}>
                <div className="combat-row-main">
                  <strong>{monster.name}</strong>
                  <span>
                    CR {monster.cr} · CA {monster.armorClass} · {monster.role}
                  </span>
                </div>

                <div className="combat-monster-mini-grid">
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
                </div>

                <button
                  className="icon-button"
                  onClick={() => removeEncounterMonster(monster.id)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="combat-grid lower">
        <div className="combat-panel fantasy-card">
          <div className="card-title-row">
            <div>
              <div className="card-icon">📜</div>
              <h2>Ordine iniziativa</h2>
            </div>
          </div>

          <div className="round-controls">
            <button className="secondary-button" onClick={previousRound}>
              − Round
            </button>
            <strong>Round {round}</strong>
            <button className="primary-button" onClick={nextRound}>
              + Round
            </button>
          </div>

          <div className="initiative-list">
            {initiativeOrder.map((actor, index) => (
              <button
                key={actor.id}
                className={
                  activeActorId === actor.id
                    ? "initiative-row active"
                    : "initiative-row"
                }
                onClick={() => setActiveActorId(actor.id)}
              >
                <span>{index + 1}</span>
                <strong>{actor.name}</strong>
                <em>{actor.actorType === "monster" ? "Mostro" : "Party"}</em>
                <small>Iniz. {actor.initiative}</small>
              </button>
            ))}
          </div>
        </div>

        <div className="combat-panel fantasy-card">
          <div className="card-title-row">
            <div>
              <div className="card-icon">🎯</div>
              <h2>Interazione rapida</h2>
            </div>
          </div>

          <div className="combat-action-grid">
            <label>
              Personaggio / creatura attiva
              <select
                value={activeActorId}
                onChange={(event) => setActiveActorId(event.target.value)}
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

            <label>
              Valore PF
              <input
                type="number"
                min="1"
                value={damageAmount}
                onChange={(event) => setDamageAmount(event.target.value)}
              />
            </label>
          </div>

          <div className="combat-action-buttons">
            <button
              className="danger-button"
              onClick={() => applyHpChange("damage")}
            >
              Infliggi danno
            </button>

            <button
              className="secondary-button"
              onClick={() => applyHpChange("heal")}
            >
              Cura
            </button>

            <button className="secondary-button" onClick={resetCombat}>
              Reset incontro
            </button>
          </div>

          <div className="combat-log">
            {combatLog.length === 0 ? (
              <p>Nessuna azione registrata.</p>
            ) : (
              combatLog.map((entry) => <p key={entry.id}>{entry.text}</p>)
            )}
          </div>
        </div>
      </section>
    </>
  );
}