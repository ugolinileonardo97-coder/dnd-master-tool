import { biomeMonsters } from "../data/biomeMonsters";
import { getMonsterAbilityScores } from "./monsterStats";
import { getMonsterXp } from "./monsterXpTable";

const LEVEL_CR_RANGES = {
  low: [0, 2],
  mid: [0.25, 5],
  high: [3, 10],
  boss: [5, 30],
};

const ENVIRONMENT_HINTS = {
  dungeon: ["ruins", "underdark", "non morto", "costrutto", "guardiano"],
  cave: ["underdark", "mountain", "bestia", "mostruosita", "predatore"],
  ruin: ["ruins", "non morto", "costrutto", "guardiano", "antico"],
  camp: ["urban", "grassland", "umanoide", "predone", "bandito"],
  city: ["urban", "umanoide", "assalitore", "controllo", "guardiano"],
  wild: ["bestia", "predatore", "sciame", "pianta", "mostruosita"],
};

const BOSS_EPITHETS = {
  desert: ["delle Dune Sepolte", "del Pozzo Solare", "della Stele Cremisi", "dell'Arenaria Spezzata"],
  mountain: ["della Cengia Nera", "del Picco Infranto", "della Corona di Gelo", "del Valico Perduto"],
  ruins: ["del Trono Crollato", "della Cripta Senza Sole", "del Sigillo Antico", "delle Colonne Spezzate"],
  forest: ["delle Radici Marce", "del Bosco Cavo", "della Corteccia Nera", "della Luna Verde"],
  swamp: ["delle Acque Nere", "del Fango Profondo", "delle Canne Morte", "della Nebbia Amara"],
  coastal: ["della Marea Scura", "del Faro Spento", "della Stiva Allagata", "degli Scogli Rossi"],
  underdark: ["del Lago Cieco", "delle Spore Pallide", "del Crepaccio Muto", "della Pietra Vuota"],
  arctic: ["della Tormenta", "del Ghiaccio Nero", "della Notte Bianca", "della Brina Eterna"],
};

const recentSelections = new Map();

function hashSeed(value) {
  let hash = 2166136261;
  const text = String(value || "map-seed");
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function createSeededRandom(seed) {
  let state = hashSeed(seed) || 1;
  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

export function pickSeeded(items, seed) {
  if (!Array.isArray(items) || items.length === 0) return null;
  const random = createSeededRandom(seed);
  return items[Math.floor(random() * items.length)] || items[0];
}

function parseCr(cr) {
  const text = String(cr ?? "0").trim();
  if (text.includes("/")) {
    const [numerator, denominator] = text.split("/").map(Number);
    return denominator ? numerator / denominator : 0;
  }
  const numeric = Number(text);
  return Number.isFinite(numeric) ? numeric : 0;
}

function normalizeText(monster) {
  return [
    monster?.name,
    monster?.type,
    monster?.role,
    monster?.difficulty,
    ...(monster?.biomes || []),
    ...(monster?.tags || []),
  ]
    .join(" ")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function isBossMonster(monster) {
  const text = normalizeText(monster);
  return (
    text.includes("boss") ||
    text.includes("comandante") ||
    text.includes("signore") ||
    text.includes("regina") ||
    text.includes("titano") ||
    parseCr(monster?.cr) >= 5
  );
}

function matchesLevel(monster, level, role) {
  const cr = parseCr(monster?.cr);
  const [minimum, maximum] = LEVEL_CR_RANGES[level] || LEVEL_CR_RANGES.mid;
  if (role === "boss") return isBossMonster(monster) && cr >= minimum && cr <= maximum;
  return cr >= minimum && cr <= maximum && !String(monster?.difficulty).toLowerCase().includes("boss");
}

function scoreEnvironment(monster, environment) {
  const text = normalizeText(monster);
  return (ENVIRONMENT_HINTS[environment] || []).reduce(
    (score, hint) => score + (text.includes(hint) ? 2 : 0),
    0
  );
}

function getBiomePool(biome) {
  const exact = biomeMonsters.filter((monster) => monster?.biomes?.includes(biome));
  if (exact.length) return exact;
  const genericBiomes = ["grassland", "hill", "urban", "ruins"];
  const generic = biomeMonsters.filter((monster) =>
    monster?.biomes?.some((monsterBiome) => genericBiomes.includes(monsterBiome))
  );
  return generic.length ? generic : biomeMonsters;
}

function getCandidatePool({ biome, environment, level, role }) {
  const biomePool = getBiomePool(biome);
  const levelPool = biomePool.filter((monster) => matchesLevel(monster, level, role));
  const rolePool =
    levelPool.length >= 3
      ? levelPool
      : biomePool.filter((monster) => (role === "boss" ? isBossMonster(monster) : !isBossMonster(monster)));
  const source = rolePool.length ? rolePool : biomePool;

  return [...source].sort((left, right) => {
    const environmentDifference =
      scoreEnvironment(right, environment) - scoreEnvironment(left, environment);
    if (environmentDifference) return environmentDifference;
    return String(left.id || left.name).localeCompare(String(right.id || right.name));
  });
}

function getScaledDifficulty(level, role) {
  if (role === "boss") return "Boss";
  if (level === "low") return "Facile";
  if (level === "high" || level === "boss") return "Difficile";
  return "Medio";
}

function scaleProfile(monster, biome, level, role, environment, seed) {
  const levelScale = { low: 0.9, mid: 1, high: 1.15, boss: 1.3 }[level] || 1;
  const roleScale = role === "boss" ? 1.25 : 1;
  const hpScale = levelScale * roleScale;
  const combat = monster.combat || {};
  const attackBonus = Number(String(combat.attackBonus || "").replace("+", ""));
  const attackAdjustment = level === "high" ? 1 : level === "boss" ? 2 : 0;
  const baseName = monster.name || "Creatura sconosciuta";
  const epithet =
    role === "boss" && !isBossMonster(monster)
      ? pickSeeded(BOSS_EPITHETS[biome] || BOSS_EPITHETS.ruins, `${seed}-epithet`)
      : "";
  const name = epithet ? `${baseName} ${epithet}` : baseName;

  return {
    ...monster,
    name,
    sourceMonsterId: monster.id,
    mapVariantSeed: seed,
    environment,
    difficulty: getScaledDifficulty(level, role),
    armorClass: Math.max(
      10,
      Math.round((Number(monster.armorClass ?? monster.ac) || 10) + (role === "boss" ? 1 : 0))
    ),
    hitPoints: Math.max(
      1,
      Math.round((Number(monster.hitPoints ?? monster.hp) || 1) * hpScale)
    ),
    abilityScores: getMonsterAbilityScores(monster),
    xp: getMonsterXp(monster),
    attack: Number.isFinite(attackBonus)
      ? `${attackBonus + attackAdjustment >= 0 ? "+" : ""}${attackBonus + attackAdjustment} a colpire`
      : combat.damageNote || monster.actions || "Attacco della creatura",
    attackBonus: Number.isFinite(attackBonus) ? attackBonus + attackAdjustment : combat.attackBonus,
    damage: combat.damage || monster.damage || "—",
    damageType: combat.damageType || monster.damageType || "—",
    special:
      combat.damageNote ||
      monster.resistances ||
      (Array.isArray(monster.tags) ? monster.tags.join(", ") : "") ||
      "Tratto legato al terreno.",
    tactics: monster.tactics || "Sfrutta il terreno e protegge la propria via di fuga.",
  };
}

export function pickMapMonster({
  biome,
  environment = "dungeon",
  difficulty = "mid",
  partyLevel = 1,
  zoneIndex = 0,
  mapSeed = "map-seed",
  role = "random",
  usedNames,
  avoidRecent = false,
} = {}) {
  const resolvedRole = role === "random" ? (difficulty === "boss" ? "elite" : "minion") : role;
  const seed = `${mapSeed}-${biome}-${environment}-${difficulty}-${partyLevel}-${zoneIndex}-${resolvedRole}`;
  const recentKey = `${biome}-${environment}-${difficulty}-${resolvedRole}`;
  const recentNames = avoidRecent ? recentSelections.get(recentKey) || [] : [];
  const candidates = getCandidatePool({
    biome,
    environment,
    level: difficulty,
    role: resolvedRole,
  });
  const freshCandidates = candidates.filter(
    (monster) => !usedNames?.has(monster.name) && !recentNames.includes(monster.name)
  );
  const unusedCandidates = candidates.filter((monster) => !usedNames?.has(monster.name));
  const availableWithHistory = freshCandidates.length ? freshCandidates : unusedCandidates;
  const available = availableWithHistory.length ? availableWithHistory : candidates;
  const shortlistLength = Math.min(available.length, resolvedRole === "boss" ? 12 : 20);
  const selected = pickSeeded(available.slice(0, shortlistLength), seed) || available[0];

  if (!selected) return null;
  usedNames?.add(selected.name);
  if (avoidRecent) {
    const historyLimit = Math.min(5, Math.max(1, candidates.length - 1));
    recentSelections.set(
      recentKey,
      [selected.name, ...recentNames.filter((name) => name !== selected.name)].slice(0, historyLimit)
    );
  }
  return scaleProfile(selected, biome, difficulty, resolvedRole, environment, seed);
}
