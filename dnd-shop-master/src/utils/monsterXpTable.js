/**
 * Heroic Monster Level XP Table
 *
 * XP assegnati per livello del mostro.
 * Usata centralmente per calcolare XP in modo dinamico
 * senza duplicare valori su ogni creatura del bestiario.
 */

export const MONSTER_XP_BY_LEVEL = {
  1: 100,
  2: 200,
  3: 400,
  4: 600,
  5: 800,
  6: 1000,
  7: 1800,
  8: 2000,
  9: 2800,
  10: 3600,
  11: 4400,
  12: 5200,
  13: 6000,
  14: 7200,
  15: 8400,
  16: 9600,
  17: 10800,
  18: 12000,
  19: 13200,
  20: 14400,
  21: 11300,
  22: 12100,
  23: 12900,
  24: 13700,
  25: 15000,
  26: 16000,
  27: 17000,
  28: 18000,
  29: 19000,
  30: 20000,
};

/**
 * CR → XP table for fractional / standard Challenge Ratings.
 * Used when a monster has cr/challengeRating but no level.
 */
const CR_XP_TABLE = {
  "0": 10,
  "1/8": 25,
  "1/4": 50,
  "1/2": 100,
  "1": 200,
  "2": 450,
  "3": 700,
  "4": 1100,
  "5": 1800,
  "6": 2300,
  "7": 2900,
  "8": 3900,
  "9": 5000,
  "10": 5900,
  "11": 7200,
  "12": 8400,
  "13": 10000,
  "14": 11500,
  "15": 13000,
  "16": 15000,
  "17": 18000,
  "18": 20000,
  "19": 22000,
  "20": 25000,
  "21": 33000,
  "22": 41000,
  "23": 50000,
  "24": 62000,
  "25": 75000,
  "26": 90000,
  "27": 105000,
  "28": 120000,
  "29": 135000,
  "30": 155000,
};

/**
 * Converte un valore CR in un numero.
 * Gestisce stringhe frazionali come "1/4", "1/2", "1/8".
 *
 * @param {string|number} cr
 * @returns {number}
 */
function parseCrNumeric(cr) {
  if (cr === undefined || cr === null) return NaN;
  const value = String(cr).trim();
  if (value.includes("/")) {
    const parts = value.split("/");
    const num = Number(parts[0]);
    const den = Number(parts[1]);
    return den ? num / den : NaN;
  }
  return Number(value);
}

/**
 * Restituisce gli XP che un mostro assegna quando viene sconfitto.
 *
 * Regole (in ordine di priorità):
 * 1. Se il mostro ha già `xp` esplicito, usa quello (immutato)
 * 2. Se ha `level` (o `monsterLevel`) numerico, cerca nella tabella dei livelli
 * 3. Se ha `cr` (o `challengeRating`) come stringa frazionale, usa CR_XP_TABLE
 * 4. Se ha `cr` numerico (es. 3), usa CR_XP_TABLE
 * 5. Fallback: 0 XP
 *
 * @param {object} monster Oggetto mostro
 * @returns {number}
 */
export function getMonsterXp(monster) {
  if (!monster) return 0;

  // 1. XP esplicito sul mostro
  if (monster.xp !== undefined && monster.xp !== null) {
    const explicitXp = Number(monster.xp);
    if (Number.isFinite(explicitXp) && explicitXp > 0) return explicitXp;
  }

  // 2. Level numerico
  const level = Number(
    monster.level ?? monster.monsterLevel ?? 0
  );
  if (level > 0 && MONSTER_XP_BY_LEVEL[level]) {
    return MONSTER_XP_BY_LEVEL[level];
  }

  // 3. CR / ChallengeRating (può essere stringa frazionale es. "1/4")
  const crRaw = monster.cr ?? monster.challengeRating ?? null;
  if (crRaw !== null) {
    // Prima prova lookup diretto con la stringa originale (es. "1/4")
    const crKey = String(crRaw).trim();
    if (CR_XP_TABLE[crKey]) return CR_XP_TABLE[crKey];

    // Poi prova come numero (es. 3 → "3")
    const crNumeric = parseCrNumeric(crRaw);
    if (Number.isFinite(crNumeric) && crNumeric > 0) {
      // Prova match esatto su MONSTER_XP_BY_LEVEL (per CR interi)
      if (crNumeric === Math.floor(crNumeric) && MONSTER_XP_BY_LEVEL[crNumeric]) {
        return MONSTER_XP_BY_LEVEL[crNumeric];
      }
      // Per frazionari guarda CR_XP_TABLE tramite la stringa originale
      if (CR_XP_TABLE[crKey]) return CR_XP_TABLE[crKey];
    }
  }

  // 4. Fallback
  return 0;
}