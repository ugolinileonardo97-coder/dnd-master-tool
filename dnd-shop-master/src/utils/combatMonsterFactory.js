import { getSuggestedXpByCr } from "../data/combatXpRules";
import { getMonsterAbilityScores } from "./monsterStats";

function createId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function getDexScoreFromActor(actor) {
  const scores = actor?.abilityScores || actor?.stats || {};
  const rawScore =
    actor?.dexScore ??
    actor?.dexterity ??
    actor?.destrezza ??
    actor?.DES ??
    actor?.DEX ??
    scores.dex ??
    scores.des ??
    scores.dexterity ??
    scores.destrezza ??
    scores.DES ??
    scores.DEX;

  const numericScore = Number(rawScore);
  return Number.isFinite(numericScore) ? numericScore : 10;
}

export function getDexModifierFromActor(actor) {
  const rawModifier =
    actor?.dexMod ??
    actor?.desMod ??
    actor?.dexModifier ??
    actor?.initiativeModifier;

  const numericModifier = Number(rawModifier);

  if (Number.isFinite(numericModifier)) {
    return numericModifier;
  }

  return Math.floor((getDexScoreFromActor(actor) - 10) / 2);
}

function rollMonsterInitiative(baseMonster) {
  const initiativeRoll = Math.floor(Math.random() * 20) + 1;
  const initiativeModifier = getDexModifierFromActor(baseMonster);

  return {
    initiativeRoll,
    initiativeModifier,
    initiativeTotal: initiativeRoll + initiativeModifier,
  };
}

export function createEncounterMonsterFromBestiary(baseMonster) {
  const maxHp = Number(baseMonster?.hitPoints) || 1;
  const dexScore = getDexScoreFromActor(baseMonster);
  const dexMod = getDexModifierFromActor(baseMonster);
  const initiative = rollMonsterInitiative(baseMonster);

  return {
    id: createId("monster"),
    monsterId: baseMonster.id,
    name: baseMonster.name,
    cr: baseMonster.cr,
    xp: getSuggestedXpByCr(baseMonster.cr),
    armorClass: Number(baseMonster.armorClass) || 10,
    maxHp,
    currentHp: maxHp,
    initiative: initiative.initiativeTotal,
    initiativeRoll: initiative.initiativeRoll,
    initiativeModifier: initiative.initiativeModifier,
    initiativeTotal: initiative.initiativeTotal,
    dexScore,
    dexMod,
    type: baseMonster.type,
    role: baseMonster.role,
    difficulty: baseMonster.difficulty,
    speed: baseMonster.speed,
    icon: baseMonster.icon,
    image: baseMonster.image,
    combat: baseMonster.combat || null,
    abilityScores: getMonsterAbilityScores(baseMonster),
    conditions: [],
    notes: "",
  };
}