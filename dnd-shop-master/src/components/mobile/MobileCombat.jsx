import { useEffect, useMemo, useState } from "react";
import { biomeMonsters } from "../../data/biomeMonsters";
import { createEncounterMonsterFromBestiary } from "../../utils/combatMonsterFactory";
import { readCombatState, writeCombatState } from "../../utils/combatStorage";

const emptyCharacter = {
  name: "",
  level: 1,
  armorClass: 10,
  maxHp: 10,
  currentHp: 10,
  initiative: "",
  dexScore: 10,
};

function createId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function clampHp(value, max) {
  const numericValue = Number(value) || 0;
  const numericMax = Number(max) || 0;
  return Math.max(0, Math.min(numericValue, numericMax));
}

function initiativeValue(actor) {
  return Number(actor?.initiativeTotal ?? actor?.initiative ?? 0) || 0;
}

function actorType(actor) {
  return actor?.actorType === "monster" || actor?.monsterId ? "Mostro" : "Party";
}

function statusLabel(actor) {
  if (!actor || Number(actor.currentHp || 0) > 0) return "";
  return actorType(actor) === "Mostro" ? "Sconfitto" : "A terra";
}

function conditionsText(actor) {
  const conditions = Array.isArray(actor?.conditions) ? actor.conditions : [];
  if (!conditions.length) return "Nessuna";
  return conditions.map((condition) => condition.name || condition).join(", ");
}

export function MobileCombat({ activeTab = "prep", onTabChange }) {
  const savedState = useMemo(() => readCombatState(), []);
  const [party, setParty] = useState(savedState?.party || []);
  const [encounterMonsters, setEncounterMonsters] = useState(
    savedState?.encounterMonsters || []
  );
  const [round, setRound] = useState(savedState?.round || 1);
  const [currentTurnIndex, setCurrentTurnIndex] = useState(
    savedState?.currentTurnIndex || 0
  );
  const [activeActorId, setActiveActorId] = useState(savedState?.activeActorId || "");
  const [selectedTargetId, setSelectedTargetId] = useState(
    savedState?.selectedTargetId || ""
  );
  const [damageAmount, setDamageAmount] = useState(savedState?.damageAmount || "");
  const [characterDraft, setCharacterDraft] = useState(emptyCharacter);
  const [selectedMonsterId, setSelectedMonsterId] = useState(biomeMonsters[0]?.id || "");

  const initiativeOrder = useMemo(() => {
    return [
      ...party.map((character, index) => ({
        ...character,
        actorType: "character",
        initiativeTotal: initiativeValue(character),
        insertionOrder: index,
      })),
      ...encounterMonsters.map((monster, index) => ({
        ...monster,
        actorType: "monster",
        initiativeTotal: initiativeValue(monster),
        insertionOrder: party.length + index,
      })),
    ].sort((a, b) => {
      const diff = initiativeValue(b) - initiativeValue(a);
      return diff || Number(a.insertionOrder || 0) - Number(b.insertionOrder || 0);
    });
  }, [encounterMonsters, party]);

  const activeActor =
    initiativeOrder.find((actor) => actor.id === activeActorId) ||
    initiativeOrder[currentTurnIndex] ||
    null;
  const selectedTarget =
    initiativeOrder.find((actor) => actor.id === selectedTargetId) || null;

  useEffect(() => {
    const state = {
      round,
      currentTurnIndex,
      party,
      encounterMonsters,
      activeActorId,
      selectedTargetId,
      damageAmount,
      combatLog: savedState?.combatLog || [],
    };

    writeCombatState(state);
  }, [
    activeActorId,
    currentTurnIndex,
    damageAmount,
    encounterMonsters,
    party,
    round,
    savedState?.combatLog,
    selectedTargetId,
  ]);

  function addCharacter() {
    const name = characterDraft.name.trim();
    if (!name) return;

    const maxHp = Number(characterDraft.maxHp) || 1;
    setParty((currentParty) => [
      ...currentParty,
      {
        ...characterDraft,
        id: createId("character"),
        name,
        armorClass: Number(characterDraft.armorClass) || 10,
        maxHp,
        currentHp: clampHp(characterDraft.currentHp || maxHp, maxHp),
        initiative: Number(characterDraft.initiative) || 0,
        initiativeTotal: Number(characterDraft.initiative) || 0,
        conditions: [],
        notes: "",
      },
    ]);
    setCharacterDraft(emptyCharacter);
  }

  function addMonster() {
    const monster = biomeMonsters.find((item) => item.id === selectedMonsterId);
    if (!monster) return;
    setEncounterMonsters((currentMonsters) => [
      ...currentMonsters,
      createEncounterMonsterFromBestiary(monster),
    ]);
  }

  function startCombat() {
    if (!initiativeOrder.length) return;
    setCurrentTurnIndex(0);
    setRound(1);
    setActiveActorId(initiativeOrder[0].id);
    setSelectedTargetId(initiativeOrder[1]?.id || initiativeOrder[0].id);
    onTabChange?.("turn");
  }

  function updateActorHp(actorId, nextHp) {
    setParty((currentParty) =>
      currentParty.map((actor) =>
        actor.id === actorId
          ? { ...actor, currentHp: clampHp(nextHp, actor.maxHp) }
          : actor
      )
    );
    setEncounterMonsters((currentMonsters) =>
      currentMonsters.map((actor) =>
        actor.id === actorId
          ? { ...actor, currentHp: clampHp(nextHp, actor.maxHp) }
          : actor
      )
    );
  }

  function applyManualValue(multiplier) {
    if (!selectedTarget) return;
    const value = Number(damageAmount);
    if (!Number.isFinite(value) || value <= 0) return;
    updateActorHp(
      selectedTarget.id,
      Number(selectedTarget.currentHp || 0) + value * multiplier
    );
  }

  function nextTurn() {
    if (!initiativeOrder.length) return;
    const nextIndex = (currentTurnIndex + 1) % initiativeOrder.length;
    if (nextIndex === 0) {
      setRound((currentRound) => currentRound + 1);
    }
    setCurrentTurnIndex(nextIndex);
    setActiveActorId(initiativeOrder[nextIndex].id);
  }

  return (
    <div className="mobile-combat-console">
      {activeTab === "prep" && <section className="mobile-combat-card fantasy-card">
        <div className="mobile-combat-card-title">Preparazione</div>
        <div className="mobile-combat-form-grid">
          <input
            value={characterDraft.name}
            onChange={(event) =>
              setCharacterDraft((draft) => ({ ...draft, name: event.target.value }))
            }
            placeholder="Nome PG"
          />
          <input
            type="number"
            value={characterDraft.level}
            onChange={(event) =>
              setCharacterDraft((draft) => ({ ...draft, level: event.target.value }))
            }
            placeholder="Liv."
          />
          <input
            type="number"
            value={characterDraft.armorClass}
            onChange={(event) =>
              setCharacterDraft((draft) => ({
                ...draft,
                armorClass: event.target.value,
              }))
            }
            placeholder="CA"
          />
          <input
            type="number"
            value={characterDraft.maxHp}
            onChange={(event) =>
              setCharacterDraft((draft) => ({
                ...draft,
                maxHp: event.target.value,
                currentHp: event.target.value,
              }))
            }
            placeholder="PF max"
          />
          <input
            type="number"
            value={characterDraft.initiative}
            onChange={(event) =>
              setCharacterDraft((draft) => ({
                ...draft,
                initiative: event.target.value,
              }))
            }
            placeholder="Iniz."
          />
          <button type="button" onClick={addCharacter}>
            + Party
          </button>
        </div>

        <div className="mobile-combat-monster-add">
          <select
            value={selectedMonsterId}
            onChange={(event) => setSelectedMonsterId(event.target.value)}
          >
            {biomeMonsters.slice(0, 160).map((monster) => (
              <option key={monster.id} value={monster.id}>
                {monster.name} GS {monster.cr}
              </option>
            ))}
          </select>
          <button type="button" onClick={addMonster}>
            + Mostro
          </button>
        </div>

        <button
          className="mobile-primary-wide"
          type="button"
          onClick={startCombat}
        >
          Avvia combattimento
        </button>
      </section>}

      {activeTab === "turn" && <section className="mobile-combat-card fantasy-card">
        <div className="mobile-combat-card-title">Turno</div>
        {activeActor ? (
          <>
            <div className="mobile-active-turn">
              <span>Round {round}</span>
              <strong>{activeActor.name}</strong>
              <small>
                {actorType(activeActor)} · PF {activeActor.currentHp}/{activeActor.maxHp} ·
                CA {activeActor.armorClass}
              </small>
              <small>Iniziativa {initiativeValue(activeActor)}</small>
              <small>Condizioni: {conditionsText(activeActor)}</small>
              {statusLabel(activeActor) && <em>{statusLabel(activeActor)}</em>}
            </div>

            <label className="mobile-combat-field">
              Bersaglio
              <select
                value={selectedTargetId}
                onChange={(event) => setSelectedTargetId(event.target.value)}
              >
                {initiativeOrder.map((actor) => (
                  <option key={actor.id} value={actor.id}>
                    {actor.name} · PF {actor.currentHp}/{actor.maxHp} · CA{" "}
                    {actor.armorClass}
                  </option>
                ))}
              </select>
            </label>

            {selectedTarget && (
              <div className="mobile-target-preview">
                <strong>{selectedTarget.name}</strong>
                <span>
                  PF {selectedTarget.currentHp}/{selectedTarget.maxHp} · CA{" "}
                  {selectedTarget.armorClass}
                </span>
                <small>{conditionsText(selectedTarget)}</small>
              </div>
            )}

            <label className="mobile-combat-field">
              Risultato dadi / valore
              <input
                type="number"
                min="0"
                value={damageAmount}
                onChange={(event) => setDamageAmount(event.target.value)}
              />
            </label>

            <div className="mobile-combat-actions">
              <button type="button" onClick={() => applyManualValue(-1)}>
                Danno
              </button>
              <button type="button" onClick={() => applyManualValue(1)}>
                Cura
              </button>
              <button type="button" onClick={nextTurn}>
                Prossimo turno
              </button>
            </div>
          </>
        ) : (
          <p>Aggiungi party e mostri, poi avvia il combattimento.</p>
        )}
      </section>}

      {activeTab === "order" && <section className="mobile-combat-card fantasy-card">
        <div className="mobile-combat-card-title">Ordine</div>
        <div className="mobile-combat-order">
          {initiativeOrder.map((actor, index) => (
            <button
              type="button"
              key={actor.id}
              className={activeActor?.id === actor.id ? "active" : ""}
              onClick={() => {
                setCurrentTurnIndex(index);
                setActiveActorId(actor.id);
              }}
            >
              <span>{index + 1}</span>
              <strong>{actor.name}</strong>
              <small>
                {actorType(actor)} · Iniz. {initiativeValue(actor)} · PF{" "}
                {actor.currentHp}/{actor.maxHp} · CA {actor.armorClass}
              </small>
            </button>
          ))}
        </div>
      </section>}
    </div>
  );
}
