import { shopRules } from "../data/shopRules";

import {
  merchantLooks,
  merchantAges,
  merchantVoices,
  merchantBehaviors,
  merchantDetails,
  merchantMottos,
  shopLocations,
  shopAtmospheres,
  shopVisuals,
  personalities,
} from "../data/descriptions";

const races = [
  "Umano",
  "Nano",
  "Elfo",
  "Mezzelfo",
  "Halfling",
  "Tiefling",
  "Dragonide",
  "Gnomo",
];

const shopNames = [
  "La Forgia d’Argento",
  "L’Emporio del Corvo",
  "La Lama Dorata",
  "Le Reliquie Perdute",
  "Il Mercato Cremisi",
  "Il Martello Runico",
  "La Torre delle Merci",
];

const firstNames = [
  "Borin",
  "Birdolin",
  "Theren",
  "Kael",
  "Luthor",
  "Seraphina",
  "Vex",
  "Doran",
  "Mira",
  "Rurik",
  "Eldrin",
  "Nym",
];

const sideQuests = [
  {
    quest: "Recuperare un carico rubato dai banditi sulla strada principale.",
    reward: "Sconto permanente del 10% nel negozio.",
  },
  {
    quest: "Indagare sulla sparizione di un apprendista.",
    reward: "Oggetto raro gratuito.",
  },
  {
    quest: "Consegnare una reliquia a un contatto segreto.",
    reward: "Ricompensa in oro e informazioni.",
  },
];

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomGold(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getGoldRuleByLevel(level) {
  return shopRules.goldRanges.find(
    (rule) => level >= rule.minPartyLevel && level <= rule.maxPartyLevel
  );
}

function buildMerchantDescription(name, race, personality) {
  return `${name} è un ${race.toLowerCase()} ${personality.type.toLowerCase()} che ${randomItem(
    merchantAges
  )}. ${randomItem(merchantLooks)} e ${randomItem(
    merchantVoices
  )}. Mentre vi parla, ${randomItem(
    merchantBehaviors
  )}. ${randomItem(merchantDetails)} Il suo motto è: "${randomItem(
    merchantMottos
  )}".`;
}

function buildShopDescription(shopName) {
  return `${shopName} si trova ${randomItem(
    shopLocations
  )}. ${randomItem(shopVisuals)} ${randomItem(
    shopVisuals
  )} ${randomItem(shopAtmospheres)} ${randomItem(
    shopAtmospheres
  )} Appena entrate avete la sensazione che ogni oggetto sia stato scelto con cura, come se il negozio avesse una storia propria da raccontare.`;
}

export function generateMerchantDescriptions(merchant) {
  const personality =
    personalities.find((p) => p.type === merchant.personality) ||
    randomItem(personalities);

  return {
    story: buildMerchantDescription(merchant.name, merchant.race, personality),
    locationDescription: buildShopDescription(merchant.shopName),
  };
}

export function generateMerchant(partyLevel) {
  const race = randomItem(races);
  const name = randomItem(firstNames);
  const shopName = randomItem(shopNames);
  const personality = randomItem(personalities);
  const goldRule = getGoldRuleByLevel(partyLevel);

  const hasSideQuest = Math.random() > 0.45;
  const selectedQuest = hasSideQuest ? randomItem(sideQuests) : null;

  return {
    id: Date.now(),
    name,
    race,
    shopName,
    personality: personality.type,
    story: buildMerchantDescription(name, race, personality),
    locationDescription: buildShopDescription(shopName),
    discount: shopRules.discountBehavior[personality.discount].label,
    gold: randomGold(goldRule.minGold, goldRule.maxGold),
    shopTier: goldRule.shopTier,
    sideQuest: selectedQuest
      ? selectedQuest.quest
      : "Nessuna side quest disponibile.",
    reward: selectedQuest ? selectedQuest.reward : "-",
    inventory: [],
  };
}