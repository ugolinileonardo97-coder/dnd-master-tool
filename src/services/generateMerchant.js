import { merchantRegions, getMerchantRegionById } from "../data/merchantRegions";
import { alignmentOptions, getAlignmentById } from "../data/alignments";
import {
  merchantReputations,
  getMerchantReputationById,
} from "../data/merchantReputations";
import { shopRules } from "../data/shopRules";
import {
  applyPrestigeText,
  normalizePrestige,
  pickPrestigeByLevel,
} from "../data/prestige";

import {
  personalities,
} from "../data/descriptions";
import {
  buildRegionalMerchantNarrative,
  buildRegionalShopNarrative,
} from "../data/regionalNarrativeContent";
import { normalizeUniqueName, pickUnique } from "../utils/uniqueNamePicker";

const races = [
  "Umano",
  "Nano",
  "Elfo",
  "Mezzelfo",
  "Halfling",
  "Tiefling",
  "Dragonide",
  "Gnomo",
  "Mezzorco",
  "Tabaxi",
  "Firbolg",
  "Kenku",
];

const shopNames = [
  "La Forgia d’Argento",
  "L’Emporio del Corvo",
  "La Lama Dorata",
  "Le Reliquie Perdute",
  "Il Mercato Cremisi",
  "Il Martello Runico",
  "La Torre delle Merci",
  "Il Baule del Viandante",
  "La Lanterna Spaccata",
  "Il Banco delle Meraviglie",
  "La Cassa del Drago",
  "La Chiave di Bronzo",
  "L’Ancora e la Lama",
  "La Bottega del Gufo",
  "La Sacca del Pellegrino",
  "Il Chiodo d’Oro",
  "La Bussola Storta",
  "Il Sigillo del Mercante",
  "La Corda e il Martello",
  "Il Mantello del Corvo",
  "Le Scaglie del Wyrm",
  "La Bilancia Nera",
  "L’Artiglio d’Ottone",
  "Il Forziere Quieto",
  "La Mappa e la Moneta",
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
  "Maela",
  "Torgar",
  "Iria",
  "Branna",
  "Odrik",
  "Silas",
  "Varyn",
  "Lysa",
  "Garruk",
  "Mirel",
  "Aldren",
  "Kessa",
  "Nerim",
  "Talia",
  "Orven",
  "Sibyl",
  "Morthan",
  "Elira",
  "Grenda",
  "Korin",
  "Ysolde",
  "Pavel",
  "Dagna",
  "Ravik",
  "Sera",
  "Tamsin",
  "Nolric",
  "Velia",
  "Arvik",
  "Maven",
  "Torren",
  "Calira",
  "Osric",
  "Fenra",
  "Jorund",
  "Nelia",
  "Branik",
  "Evara",
];

const extraFirstNames = [
  "Alric",
  "Brenna",
  "Corvin",
  "Dalia",
  "Eldra",
  "Falko",
  "Gavren",
  "Helia",
  "Iskan",
  "Jessa",
  "Kaldor",
  "Liorra",
  "Mavrek",
  "Nalia",
  "Ossian",
  "Perin",
  "Quessa",
  "Rhonel",
  "Sarena",
  "Tovin",
  "Ulmar",
  "Vandis",
  "Wenna",
  "Xavian",
  "Ydris",
  "Zorren",
  "Malvek",
  "Cindrel",
  "Rask",
  "Elowen",
  "Norek",
  "Fariel",
  "Durn",
  "Selka",
  "Vorian",
  "Luneth",
];

const merchantNamePool = [...firstNames, ...extraFirstNames];

const generatedShopNames = [
  "La Moneta del Villaggio",
  "Il Martello del Viandante",
  "La Bussola Storta",
  "L'Ancora e la Lama",
  "Il Cervo Argentato",
  "La Lanterna Bassa",
  "L'Emporio della Soglia",
  "La Sacca del Pellegrino",
  "Il Mercato Cremisi",
  "La Mappa delle Strade",
  "Il Mantello del Crocevia",
  "La Bilancia del Porto",
  "Il Forziere del Passo",
  "La Chiave di Rame",
  "Il Banco del Guado",
  "La Forgia del Valico",
  "L'Armadio delle Spezie",
  "Il Baule del Cartografo",
  "La Corda Cerata",
  "Il Sigillo del Mercato",
  "La Lama del Ponte",
  "Il Chiodo della Frontiera",
  "La Tenda delle Dune",
  "L'Otre e la Bussola",
  "Il Portale delle Merci",
  "La Pietra del Minatore",
  "Il Filo del Tessitore",
  "La Brocca del Pellegrino",
  "L'Arco del Bosco",
  "Il Coltello del Cacciatore",
  "La Rete Salmastra",
  "Il Faro delle Provviste",
  "La Cassa del Molo",
  "L'Officina del Rame",
  "Il Gancio del Marinaio",
  "La Fiala della Palude",
  "Il Sale Nero",
  "La Passerella dei Barattoli",
  "L'Erbario del Guado",
  "Il Calderone di Torba",
  "La Pergamena Cerata",
  "Il Compasso delle Rovine",
  "La Pala degli Scavi",
  "L'Occhio della Colonna",
  "Il Gesso del Dungeon",
  "La Lampada del Sottosuolo",
  "Il Piccone di Basalto",
  "La Maschera dei Cunicoli",
  "L'Archivio dei Minerali",
  "Il Sale della Grotta",
  "La Pelliccia del Nord",
  "Il Braciere della Brina",
  "La Slitta del Mercante",
  "L'Ago del Pellicciaio",
  "Il Mantello Foderato",
  "La Cesta del Raccolto",
  "Il Granaio delle Provviste",
  "La Falce del Villaggio",
  "L'Emporio del Fienile",
  "Il Ferro del Maniscalco",
  "La Tenda della Carovana",
  "Il Velo del Deserto",
  "La Duna delle Spezie",
  "L'Amuleto dell'Oasi",
  "Il Pozzo dei Mercanti",
  "La Soglia dei Contratti",
  "Il Registro della Gilda",
  "La Penna del Notaio",
  "L'Insegna Pulita",
  "Il Banco della Piazza",
  "La Torcia della Frontiera",
  "Il Cancello delle Razioni",
  "La Palizzata delle Lame",
  "L'Ascia del Pioniere",
  "Il Magazzino del Fango",
  "La Cappa del Viaggio",
  "Il Ponte delle Monete",
  "La Stella del Mercato",
  "L'Angolo delle Meraviglie",
  "Il Reliquiario Comune",
  "La Scatola del Baratto",
  "Il Nodo del Sentiero",
  "La Ruota del Carro",
  "L'Ultima Provvista",
];

const merchantEpithets = [
  "il Rosso",
  "delle Monete",
  "Manoferma",
  "di Porto Vecchio",
  "del Crocevia",
  "Serrabanco",
  "Lamafine",
  "Occhio d'Ottone",
  "del Mantello Grigio",
  "Pesamonete",
];

const expandedShopNames = [...shopNames, ...generatedShopNames];

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
  {
    quest: "Scoprire chi sta vendendo imitazioni delle merci della bottega.",
    reward: "Accesso a merce riservata e prezzi migliori.",
  },
  {
    quest: "Scortare un fornitore fino al prossimo insediamento.",
    reward: "Una cassa di equipaggiamento utile e 40 mo.",
  },
];

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomGold(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function applyPrestigeGold(gold, prestige) {
  const normalized = normalizePrestige(prestige);
  if (normalized === "mediocre") return Math.max(5, Math.round(gold * 0.7));
  if (normalized === "lussuosa") return Math.round(gold * 1.5);
  return gold;
}

function getMerchantOptions(partyLevelOrOptions, preferredRegion) {
  if (
    partyLevelOrOptions &&
    typeof partyLevelOrOptions === "object" &&
    !Array.isArray(partyLevelOrOptions)
  ) {
    return {
      partyLevel: Number(partyLevelOrOptions.partyLevel) || 1,
      preferredRegion:
        partyLevelOrOptions.region ||
        partyLevelOrOptions.preferredRegion ||
        partyLevelOrOptions.campaignRegion ||
        preferredRegion ||
        null,
      existingMerchants: Array.isArray(partyLevelOrOptions.existingMerchants)
        ? partyLevelOrOptions.existingMerchants
        : [],
      prestige: partyLevelOrOptions.prestige || null,
    };
  }

  return {
    partyLevel: Number(partyLevelOrOptions) || 1,
    preferredRegion,
    existingMerchants: [],
  };
}

function pickMerchantName(existingMerchants) {
  const usedNames = (existingMerchants || [])
    .filter((merchant) => merchant?.type !== "tavern")
    .map((merchant) => merchant.name);

  return pickUnique(merchantNamePool, usedNames, (used) => {
    const baseName = randomItem(merchantNamePool);
    const epithet =
      merchantEpithets.find(
        (entry) => !used.has(`${baseName} ${entry}`.trim().toLowerCase())
      ) || randomItem(merchantEpithets);

    return `${baseName} ${epithet}`;
  });
}

function pickShopName(existingMerchants) {
  const usedShopNames = (existingMerchants || [])
    .filter((merchant) => merchant?.type !== "tavern")
    .map((merchant) => merchant.shopName || merchant.storeName);

  return pickUnique(expandedShopNames, usedShopNames, (used) => {
    const candidate = `${randomItem(expandedShopNames)} ${used.size + 1}`;

    return used.has(candidate.trim().toLowerCase())
      ? `${candidate} ${used.size + 1}`
      : candidate;
  });
}

function getGoldRuleByLevel(level) {
  return shopRules.goldRanges.find(
    (rule) => level >= rule.minPartyLevel && level <= rule.maxPartyLevel
  );
}

function buildMerchantDescription(
  name,
  race,
  personality,
  regionId,
  alignmentId = "neutral",
  reputationId = "Sconosciuto",
  discountLabel = "Basso",
  shopTier = "Comune",
  level = 1,
  usedTexts = [],
  prestige = "buona",
  descriptionSeed = ""
) {
  const region = getMerchantRegionById(regionId);
  const alignment = getAlignmentById(alignmentId);
  const reputation = getMerchantReputationById(reputationId);

  return applyPrestigeText(buildRegionalMerchantNarrative({
    name,
    race,
    personality: personality.type,
    regionId: region.id,
    alignmentLabel: alignment.label,
    alignmentHint: alignment.roleplayHint,
    reputationLabel: reputation.label,
    reputationTone: reputation.tone,
    discount: discountLabel,
    shopTier,
    level,
    usedTexts,
  }), prestige, "merchant", `${descriptionSeed}-${name}-${region.id}-${alignment.id}-${reputation.id}-${personality.type}-${shopTier}`);
}

function buildShopDescription(
  shopName,
  regionId,
  reputationId = "Sconosciuto",
  level = 1,
  usedTexts = [],
  prestige = "buona",
  descriptionSeed = ""
) {
  const region = getMerchantRegionById(regionId);
  const reputation = getMerchantReputationById(reputationId);

  return applyPrestigeText(buildRegionalShopNarrative({
    shopName,
    regionId: region.id,
    shopHint: region.shopHint,
    reputationLabel: reputation.label,
    level,
    usedTexts,
  }), prestige, "shop", `${descriptionSeed}-${shopName}-${region.id}-${reputation.id}`);
}

function isUsedText(text, usedTexts) {
  return usedTexts.has(normalizeUniqueName(text));
}

function buildUniqueMerchantTexts({
  name,
  race,
  personality,
  regionId,
  alignmentId,
  reputationId,
  discountLabel,
  shopTier,
  shopName,
  partyLevel = 1,
  prestige = "buona",
  descriptionSeed = "",
  existingMerchants = [],
}) {
  const usedStories = new Set(
    existingMerchants
      .filter((merchant) => merchant?.type !== "tavern")
      .map((merchant) => normalizeUniqueName(merchant.story))
  );
  const usedShops = new Set(
    existingMerchants
      .filter((merchant) => merchant?.type !== "tavern")
      .map((merchant) => normalizeUniqueName(merchant.locationDescription))
  );
  let story = "";
  let locationDescription = "";

  for (let attempt = 0; attempt < 30; attempt += 1) {
    story = buildMerchantDescription(
      name,
      race,
      personality,
      regionId,
      alignmentId,
      reputationId,
      discountLabel,
      shopTier,
      partyLevel,
      [...usedStories],
      prestige,
      descriptionSeed
    );
    locationDescription = buildShopDescription(
      shopName,
      regionId,
      reputationId,
      partyLevel,
      [...usedShops],
      prestige,
      descriptionSeed
    );

    if (!isUsedText(story, usedStories) && !isUsedText(locationDescription, usedShops)) {
      break;
    }
  }

  return { story, locationDescription };
}

export function generateMerchantDescriptions(merchant) {
  const personality =
    personalities.find((p) => p.type === merchant.personality) ||
    randomItem(personalities);

  const regionId = merchant.region || "generic";
  const reputationId = merchant.reputation || "Sconosciuto";
  const prestige = normalizePrestige(merchant.prestige);
  const descriptionSeed =
    merchant.descriptionSeed || `${Date.now()}-${Math.random().toString(36).slice(2)}`;

  return {
    descriptionSeed,
    story: buildMerchantDescription(
      merchant.name,
      merchant.race,
      personality,
      regionId,
      merchant.alignment || "neutral",
      reputationId,
      merchant.discount || "Basso",
      merchant.shopTier || "Comune",
      merchant.partyLevel || 1,
      [],
      prestige,
      descriptionSeed
    ),
    locationDescription: buildShopDescription(
      merchant.shopName,
      regionId,
      reputationId,
      merchant.partyLevel || 1,
      [],
      prestige,
      descriptionSeed
    ),
  };
}

export function generateMerchant(partyLevelOrOptions, preferredRegion = null) {
  const options = getMerchantOptions(partyLevelOrOptions, preferredRegion);
  const race = randomItem(races);
  const name = pickMerchantName(options.existingMerchants);
  const shopName = pickShopName(options.existingMerchants);
  const personality = randomItem(personalities);
  const goldRule = getGoldRuleByLevel(options.partyLevel);
  const region = options.preferredRegion
    ? getMerchantRegionById(options.preferredRegion)
    : randomItem(merchantRegions);
  const alignment = randomItem(alignmentOptions);
  const reputation = randomItem(merchantReputations);
  const discountLabel = shopRules.discountBehavior[personality.discount].label;
  const prestige = normalizePrestige(options.prestige || pickPrestigeByLevel(options.partyLevel));

  const descriptionSeed = `${Date.now()}-${Math.random().toString(36).slice(2)}`;

  const hasSideQuest = Math.random() > 0.45;
  const selectedQuest = hasSideQuest ? randomItem(sideQuests) : null;
  const descriptions = buildUniqueMerchantTexts({
    name,
    race,
    personality,
    regionId: region.id,
    alignmentId: alignment.id,
    reputationId: reputation.id,
    discountLabel,
    shopTier: goldRule.shopTier,
    shopName,
    partyLevel: options.partyLevel,
    prestige,
    descriptionSeed,
    existingMerchants: options.existingMerchants,
  });

  return {
    id: Date.now(),
    name,
    race,
    shopName,
    region: region.id,
    reputation: reputation.id,
    alignment: alignment.id,
    personality: personality.type,
    partyLevel: options.partyLevel,
    prestige,
    descriptionSeed,
    story: descriptions.story,
    locationDescription: descriptions.locationDescription,
    discount: discountLabel,
    gold: applyPrestigeGold(randomGold(goldRule.minGold, goldRule.maxGold), prestige),
    shopTier: goldRule.shopTier,
    sideQuest: selectedQuest
      ? `${selectedQuest.quest} La reputazione ${reputation.label.toLowerCase()} del mercante rende il favore piu delicato: ${reputation.quest}.`
      : "Nessuna side quest disponibile.",
    reward: selectedQuest ? selectedQuest.reward : "-",
    inventory: [],
  };
}
