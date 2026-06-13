export const COMBAT_STORAGE_KEY = "dnd-shop-combat-state-v1";

export function normalizeCombatState(state) {
  if (!state || typeof state !== "object") return null;

  return {
    round: Number(state.round) || 1,
    currentTurnIndex: Number(state.currentTurnIndex) || 0,
    party: Array.isArray(state.party) ? state.party : [],
    encounterMonsters: Array.isArray(state.encounterMonsters)
      ? state.encounterMonsters
      : [],
    activeActorId: state.activeActorId || "",
    selectedTargetId: state.selectedTargetId || "",
    damageAmount: state.damageAmount ?? "",
    selectedCombatItemId: state.selectedCombatItemId || "",
    combatItemSearch: state.combatItemSearch || "",
    combatItemManualValue: state.combatItemManualValue || "",
    combatLog: Array.isArray(state.combatLog) ? state.combatLog : [],
  };
}

export function readCombatState() {
  if (typeof window === "undefined" || !window.localStorage) return null;

  try {
    const savedCombat = window.localStorage.getItem(COMBAT_STORAGE_KEY);
    return normalizeCombatState(savedCombat ? JSON.parse(savedCombat) : null);
  } catch {
    return null;
  }
}

export function writeCombatState(combatState) {
  if (typeof window === "undefined" || !window.localStorage) return;

  try {
    const normalizedState = normalizeCombatState(combatState);

    if (normalizedState) {
      window.localStorage.setItem(
        COMBAT_STORAGE_KEY,
        JSON.stringify(normalizedState)
      );
    } else {
      window.localStorage.removeItem(COMBAT_STORAGE_KEY);
    }
  } catch {
    // Lo storage puo essere bloccato o pieno: il tracker resta usabile in memoria.
  }
}

export function clearCombatState() {
  writeCombatState(null);
}
