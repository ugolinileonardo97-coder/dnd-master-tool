export const currencyLabels = {
  copper: "mr",
  silver: "ma",
  gold: "mo",
  platinum: "mp",
};

export const officialStyleRoomPrices = {
  Squallida: "5 mr",
  Povera: "2 ma",
  Modesta: "6 ma",
  Confortevole: "2 mo",
  Ricca: "12 mo",
  Aristocratica: "35 mo",
  Speciale: "60 mo",
};

export const officialStyleMealPrices = {
  Povero: ["1 mr", "3 mr"],
  Modesto: ["1 ma", "3 ma"],
  Confortevole: ["2 ma", "5 ma"],
  Ricco: ["5 ma", "10 ma"],
  Aristocratico: ["1 mo", "3 mo"],
  "Speciale Magico": ["5 mo", "25 mo"],
};

export const balancedMagicPriceRanges = {
  Comune: {
    min: 50,
    max: 150,
    label: "Comune",
  },
  "Non Comune": {
    min: 250,
    max: 900,
    label: "Non Comune",
  },
  Rara: {
    min: 1500,
    max: 6000,
    label: "Rara",
  },
  "Molto Rara": {
    min: 8000,
    max: 30000,
    label: "Molto Rara",
  },
  Leggendaria: {
    min: 50000,
    max: 150000,
    label: "Leggendaria",
  },
};

export const tavernServicePrices = {
  "Bagno caldo privato": "3 ma",
  "Massaggio rilassante": "8 ma",
  "Compagnia riservata": "2 mo",
  "Stalla e cura cavalcatura": "5 ma",
  "Sala privata": "1 mo",
  "Lavaggio abiti": "2 ma",
  "Curatore locale": "5 mo",
  "Informazioni discrete": "3 mo",
};

export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomPriceFromRange(range) {
  const [minPrice, maxPrice] = range;

  const min = Number.parseInt(minPrice, 10);
  const max = Number.parseInt(maxPrice, 10);

  const currency = maxPrice.replace(/[0-9\s]/g, "").trim();

  return `${randomNumber(min, max)} ${currency}`;
}

export function getDishTierByLevel(level) {
  if (level <= 4) return "Modesto";
  if (level <= 8) return "Confortevole";
  if (level <= 12) return "Ricco";
  if (level <= 16) return "Aristocratico";
  return "Speciale Magico";
}

export function getRoomTierByLevel(level) {
  if (level <= 3) return "Povera";
  if (level <= 6) return "Modesta";
  if (level <= 10) return "Confortevole";
  if (level <= 15) return "Ricca";
  return "Aristocratica";
}

export function getDishPriceByLevel(level) {
  const tier = getDishTierByLevel(level);
  return randomPriceFromRange(officialStyleMealPrices[tier]);
}

export function getRoomPriceByTier(tier) {
  return officialStyleRoomPrices[tier] || officialStyleRoomPrices.Modesta;
}

export function getMagicPriceByRarity(rarity) {
  const range = balancedMagicPriceRanges[rarity];

  if (!range) return "Prezzo variabile";

  return `${randomNumber(range.min, range.max)} mo`;
}
