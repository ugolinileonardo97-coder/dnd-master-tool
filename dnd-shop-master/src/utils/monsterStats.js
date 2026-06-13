const DEFAULT_SCORES = {
  str: 10,
  dex: 10,
  con: 10,
  int: 10,
  wis: 10,
  cha: 10,
};

const TYPE_PRESETS = {
  bestia: { str: 14, dex: 14, con: 13, int: 3, wis: 12, cha: 7 },
  umanoide: { str: 12, dex: 12, con: 12, int: 10, wis: 10, cha: 10 },
  nonmorto: { str: 14, dex: 10, con: 15, int: 8, wis: 10, cha: 9 },
  costrutto: { str: 16, dex: 8, con: 16, int: 5, wis: 10, cha: 6 },
  gigante: { str: 19, dex: 9, con: 17, int: 8, wis: 10, cha: 8 },
  drago: { str: 18, dex: 12, con: 17, int: 13, wis: 12, cha: 15 },
  dragoide: { str: 17, dex: 12, con: 15, int: 9, wis: 11, cha: 10 },
  immondo: { str: 16, dex: 14, con: 15, int: 12, wis: 11, cha: 14 },
  celestiale: { str: 16, dex: 14, con: 15, int: 12, wis: 14, cha: 16 },
  folletto: { str: 8, dex: 16, con: 12, int: 13, wis: 13, cha: 17 },
  aberrazione: { str: 13, dex: 13, con: 14, int: 15, wis: 13, cha: 10 },
  mostruosità: { str: 16, dex: 13, con: 15, int: 6, wis: 11, cha: 8 },
  entità: { str: 20, dex: 14, con: 20, int: 16, wis: 16, cha: 18 },
};

const ROLE_BONUSES = [
  { match: ["bruto", "carica", "gigante", "boss"], bonus: { str: 3, con: 2 } },
  { match: ["predatore", "assalitore", "mobile", "volante"], bonus: { dex: 3, str: 1 } },
  { match: ["incantatore", "mago", "arcincantatore", "sciamano"], bonus: { int: 3, wis: 2, cha: 1 } },
  { match: ["supporto", "controllo", "rituale"], bonus: { wis: 2, cha: 2, int: 1 } },
  { match: ["guardiano", "corazzato", "difensore"], bonus: { con: 3, str: 1 } },
  { match: ["ingannatore", "comandante"], bonus: { cha: 3, int: 1 } },
];

const DIFFICULTY_BONUS = {
  Semplice: 0,
  Facile: 1,
  Medio: 2,
  Difficile: 3,
  Estremo: 4,
  Boss: 5,
};

function clampScore(score) {
  return Math.max(1, Math.min(30, Number(score) || 10));
}

function normalizeType(type) {
  return String(type || "")
    .toLowerCase()
    .replace(/[^a-zàèéìòù]/gi, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function addScores(base, bonus) {
  return Object.keys(DEFAULT_SCORES).reduce((scores, key) => {
    scores[key] = clampScore((base[key] ?? 10) + (bonus[key] ?? 0));
    return scores;
  }, {});
}

export function getAbilityModifier(score) {
  return Math.floor((Number(score) - 10) / 2);
}

export function formatAbilityModifier(score) {
  const modifier = getAbilityModifier(score);
  return modifier >= 0 ? `+${modifier}` : String(modifier);
}

export function getAbilityLabel(ability) {
  const labels = {
    str: "FOR",
    dex: "DES",
    con: "COS",
    int: "INT",
    wis: "SAG",
    cha: "CAR",
  };

  return labels[ability] || String(ability).toUpperCase();
}

export function normalizeAbilityScores(scores) {
  return Object.keys(DEFAULT_SCORES).reduce((normalized, key) => {
    normalized[key] = clampScore(scores?.[key] ?? DEFAULT_SCORES[key]);
    return normalized;
  }, {});
}

export function getMonsterAbilityScores(monster) {
  if (monster?.abilityScores) {
    return normalizeAbilityScores(monster.abilityScores);
  }

  const normalizedType = normalizeType(monster?.type);
  const typePreset =
    Object.entries(TYPE_PRESETS).find(([key]) => normalizedType.includes(key))?.[1] ||
    DEFAULT_SCORES;

  let scores = { ...typePreset };
  const roleText = `${monster?.role || ""} ${(monster?.tags || []).join(" ")}`.toLowerCase();

  ROLE_BONUSES.forEach((rule) => {
    if (rule.match.some((word) => roleText.includes(word))) {
      scores = addScores(scores, rule.bonus);
    }
  });

  const difficultyBonus = DIFFICULTY_BONUS[monster?.difficulty] ?? 0;
  scores = addScores(scores, {
    str: difficultyBonus,
    dex: Math.max(0, difficultyBonus - 2),
    con: difficultyBonus,
    int: Math.max(0, difficultyBonus - 3),
    wis: Math.max(0, difficultyBonus - 2),
    cha: Math.max(0, difficultyBonus - 2),
  });

  return normalizeAbilityScores(scores);
}
