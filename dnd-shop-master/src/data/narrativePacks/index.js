import { coastalShopNarratives } from "./shop/coastal";
import { mountainShopNarratives } from "./shop/mountain";
import { cityShopNarratives } from "./shop/city";
import { ruralShopNarratives } from "./shop/rural";
import { forestShopNarratives } from "./shop/forest";
import { desertShopNarratives } from "./shop/desert";
import { swampShopNarratives } from "./shop/swamp";
import { ruinsShopNarratives } from "./shop/ruins";
import { underdarkShopNarratives } from "./shop/underdark";
import { arcticShopNarratives } from "./shop/arctic";
import { frontierShopNarratives } from "./shop/frontier";
import { genericShopNarratives } from "./shop/generic";

import { coastalMerchantNarratives } from "./merchant/coastal";
import { mountainMerchantNarratives } from "./merchant/mountain";
import { cityMerchantNarratives } from "./merchant/city";
import { ruralMerchantNarratives } from "./merchant/rural";
import { forestMerchantNarratives } from "./merchant/forest";
import { desertMerchantNarratives } from "./merchant/desert";
import { swampMerchantNarratives } from "./merchant/swamp";
import { ruinsMerchantNarratives } from "./merchant/ruins";
import { underdarkMerchantNarratives } from "./merchant/underdark";
import { arcticMerchantNarratives } from "./merchant/arctic";
import { frontierMerchantNarratives } from "./merchant/frontier";
import { genericMerchantNarratives } from "./merchant/generic";

import { coastalTavernNarratives } from "./tavern/coastal";
import { mountainTavernNarratives } from "./tavern/mountain";
import { cityTavernNarratives } from "./tavern/city";
import { ruralTavernNarratives } from "./tavern/rural";
import { forestTavernNarratives } from "./tavern/forest";
import { desertTavernNarratives } from "./tavern/desert";
import { swampTavernNarratives } from "./tavern/swamp";
import { ruinsTavernNarratives } from "./tavern/ruins";
import { underdarkTavernNarratives } from "./tavern/underdark";
import { arcticTavernNarratives } from "./tavern/arctic";
import { frontierTavernNarratives } from "./tavern/frontier";
import { genericTavernNarratives } from "./tavern/generic";

import { coastalInnkeeperNarratives } from "./innkeeper/coastal";
import { mountainInnkeeperNarratives } from "./innkeeper/mountain";
import { cityInnkeeperNarratives } from "./innkeeper/city";
import { ruralInnkeeperNarratives } from "./innkeeper/rural";
import { forestInnkeeperNarratives } from "./innkeeper/forest";
import { desertInnkeeperNarratives } from "./innkeeper/desert";
import { swampInnkeeperNarratives } from "./innkeeper/swamp";
import { ruinsInnkeeperNarratives } from "./innkeeper/ruins";
import { underdarkInnkeeperNarratives } from "./innkeeper/underdark";
import { arcticInnkeeperNarratives } from "./innkeeper/arctic";
import { frontierInnkeeperNarratives } from "./innkeeper/frontier";
import { genericInnkeeperNarratives } from "./innkeeper/generic";

export function normalizeNarrativeRegion(regionId = "generic") {
  const value = String(regionId || "generic").trim().toLowerCase();
  const aliases = {
    porto: "coastal",
    "città di mare": "coastal",
    "citta di mare": "coastal",
    coastal: "coastal",
    montagna: "mountain",
    mountain: "mountain",
    "grande città": "city",
    "grande citta": "city",
    urban: "city",
    city: "city",
    "villaggio rurale": "rural",
    rural: "rural",
    foresta: "forest",
    forest: "forest",
    palude: "swamp",
    swamp: "swamp",
    deserto: "desert",
    desert: "desert",
    "rovine antiche": "ruins",
    ruins: "ruins",
    artico: "arctic",
    arctic: "arctic",
    sottosuolo: "underdark",
    underdark: "underdark",
    "frontiera selvaggia": "frontier",
    frontier: "frontier",
    generica: "generic",
    generic: "generic",
  };

  return aliases[value] || "generic";
}

export const narrativePacks = {
  shop: {
    coastal: coastalShopNarratives,
    mountain: mountainShopNarratives,
    city: cityShopNarratives,
    rural: ruralShopNarratives,
    forest: forestShopNarratives,
    desert: desertShopNarratives,
    swamp: swampShopNarratives,
    ruins: ruinsShopNarratives,
    underdark: underdarkShopNarratives,
    arctic: arcticShopNarratives,
    frontier: frontierShopNarratives,
    generic: genericShopNarratives,
  },
  merchant: {
    coastal: coastalMerchantNarratives,
    mountain: mountainMerchantNarratives,
    city: cityMerchantNarratives,
    rural: ruralMerchantNarratives,
    forest: forestMerchantNarratives,
    desert: desertMerchantNarratives,
    swamp: swampMerchantNarratives,
    ruins: ruinsMerchantNarratives,
    underdark: underdarkMerchantNarratives,
    arctic: arcticMerchantNarratives,
    frontier: frontierMerchantNarratives,
    generic: genericMerchantNarratives,
  },
  tavern: {
    coastal: coastalTavernNarratives,
    mountain: mountainTavernNarratives,
    city: cityTavernNarratives,
    rural: ruralTavernNarratives,
    forest: forestTavernNarratives,
    desert: desertTavernNarratives,
    swamp: swampTavernNarratives,
    ruins: ruinsTavernNarratives,
    underdark: underdarkTavernNarratives,
    arctic: arcticTavernNarratives,
    frontier: frontierTavernNarratives,
    generic: genericTavernNarratives,
  },
  innkeeper: {
    coastal: coastalInnkeeperNarratives,
    mountain: mountainInnkeeperNarratives,
    city: cityInnkeeperNarratives,
    rural: ruralInnkeeperNarratives,
    forest: forestInnkeeperNarratives,
    desert: desertInnkeeperNarratives,
    swamp: swampInnkeeperNarratives,
    ruins: ruinsInnkeeperNarratives,
    underdark: underdarkInnkeeperNarratives,
    arctic: arcticInnkeeperNarratives,
    frontier: frontierInnkeeperNarratives,
    generic: genericInnkeeperNarratives,
  },
};

function normalizeText(value) {
  return String(value || "").trim().replace(/\s+/g, " ").toLowerCase();
}

function getCandidates(type, regionId, level) {
  const region = normalizeNarrativeRegion(regionId);
  const pack = narrativePacks[type]?.[region] || narrativePacks[type]?.generic;
  return pack?.[level] || [];
}

function renderText(text, context = {}) {
  return text
    .replaceAll("{name}", context.name || "Il mercante")
    .replaceAll("{race}", String(context.race || "umano").toLowerCase())
    .replaceAll("{shopName}", context.shopName || "La bottega")
    .replaceAll("{tavernName}", context.tavernName || "La locanda")
    .replaceAll("{reputation}", String(context.reputationLabel || context.reputation || "incerta").toLowerCase());
}

function orderedLevels(level) {
  const numeric = Math.min(20, Math.max(1, Number(level) || 1));
  const values = [numeric];
  for (let offset = 1; offset <= 19; offset += 1) {
    if (numeric - offset >= 1) values.push(numeric - offset);
    if (numeric + offset <= 20) values.push(numeric + offset);
  }
  return values;
}

export function pickNarrativeFromPacks(type, options = {}) {
  const level = Math.min(20, Math.max(1, Number(options.level) || 1));
  const used = new Set((options.usedTexts || []).map(normalizeText));
  const region = normalizeNarrativeRegion(options.regionId);
  const regionOrder = [region, "generic"].filter((item, index, array) => array.indexOf(item) === index);

  for (const nextRegion of regionOrder) {
    for (const nextLevel of orderedLevels(level)) {
      const candidates = getCandidates(type, nextRegion, nextLevel).map((text) => renderText(text, options.context));
      const available = candidates.filter((text) => !used.has(normalizeText(text)));

      if (available.length) {
        return available[Math.floor(Math.random() * available.length)];
      }
    }
  }

  const fallback = getCandidates(type, "generic", level).map((text) => renderText(text, options.context));
  return fallback[Math.floor(Math.random() * fallback.length)] || "";
}
