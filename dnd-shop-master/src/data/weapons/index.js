import { weaponShardLoaders, weaponShardStats } from "./weaponShardLoaders";

export const weaponSortOptions = [
  { id: "name", label: "Nome" },
  { id: "damage", label: "Danno" },
  { id: "price", label: "Prezzo" },
  { id: "rarity", label: "Rarita" },
  { id: "level", label: "Livello" },
];

const rarityOrder = {
  Comune: 1,
  "Non Comune": 2,
  Rara: 3,
  "Molto rara": 4,
  Leggendaria: 5,
};
const WEAPON_DATA_VERSION = "2";
const WEAPON_DATA_URL = `/data/weapons.json?v=${WEAPON_DATA_VERSION}`;

function parseDiceScore(damage) {
  const match = String(damage || "").match(/(\d*)d(\d+)(?:\s*[+]\s*(\d+))?/i);
  if (!match) return 0;

  const diceCount = Number(match[1] || 1);
  const diceSize = Number(match[2] || 0);
  const bonus = Number(match[3] || 0);

  return diceCount * ((diceSize + 1) / 2) + bonus;
}

function normalizeWeaponCatalogPayload(data) {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.weapons)) return data.weapons;
  if (Array.isArray(data?.default)) return data.default;
  if (Array.isArray(data?.default?.weapons)) return data.default.weapons;
  return [];
}

async function loadWeaponCatalogFromShards() {
  const shardResults = await Promise.allSettled(
    Object.values(weaponShardLoaders).map((loadShard) => loadShard())
  );

  const loadedShards = shardResults
    .filter((result) => result.status === "fulfilled" && Array.isArray(result.value))
    .map((result) => result.value);

  if (!loadedShards.length) {
    const firstError = shardResults.find((result) => result.status === "rejected");
    throw new Error(firstError?.reason?.message || "Nessun blocco armi caricato.");
  }

  return loadedShards.flat();
}

async function loadWeaponCatalogFromFetch({ signal, timeoutMs }) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  const abortFromOuterSignal = () => controller.abort();

  if (signal?.aborted) controller.abort();
  signal?.addEventListener?.("abort", abortFromOuterSignal, { once: true });

  try {
    const response = await fetch(WEAPON_DATA_URL, {
      signal: controller.signal,
      cache: "force-cache",
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    const weapons = normalizeWeaponCatalogPayload(data);
    if (!weapons.length) {
      throw new Error("Formato catalogo armi non valido.");
    }

    return weapons;
  } catch (error) {
    if (controller.signal.aborted && !signal?.aborted) {
      throw new Error("Timeout nel caricamento del catalogo armi.");
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
    signal?.removeEventListener?.("abort", abortFromOuterSignal);
  }
}

export async function loadWeaponCatalog({ signal, timeoutMs = 8000 } = {}) {
  if (typeof fetch !== "function") {
    return loadWeaponCatalogFromShards();
  }

  try {
    return await loadWeaponCatalogFromFetch({ signal, timeoutMs });
  } catch (fetchError) {
    if (signal?.aborted) throw fetchError;
    if (String(fetchError?.message || "").includes("Timeout")) throw fetchError;

    try {
      return await loadWeaponCatalogFromShards();
    } catch (shardError) {
      throw new Error(
        `Fetch armi fallito (${fetchError?.message || "errore sconosciuto"}). Fallback shard fallito (${shardError?.message || "errore sconosciuto"}).`
      );
    }
  }
}

export async function loadWeaponStats() {
  return weaponShardStats;
}

export function getWeaponFilterOptions(weapons = []) {
  const safeWeapons = Array.isArray(weapons) ? weapons : [];
  const collect = (field) =>
    [...new Set(safeWeapons.map((weapon) => weapon[field]).filter(Boolean))].sort(
      (a, b) => String(a).localeCompare(String(b), "it")
    );

  return {
    categories: collect("weaponCategory"),
    rarities: collect("rarity"),
    biomes: collect("biome"),
    regions: collect("region"),
    damageTypes: collect("damageType"),
  };
}

export function filterWeapons(weapons = [], filters = {}) {
  const safeWeapons = Array.isArray(weapons) ? weapons : [];
  const search = String(filters.search || "").trim().toLowerCase();
  const minLevel = Number(filters.minLevel) || 0;
  const maxLevel = Number(filters.maxLevel) || 20;

  return safeWeapons.filter((weapon) => {
    const haystack = [
      weapon.name,
      weapon.weaponCategory,
      weapon.rarity,
      weapon.biome,
      weapon.damage,
      weapon.damageType,
      weapon.description,
      weapon.effect,
      ...(weapon.properties || []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return (
      (!search || haystack.includes(search)) &&
      (!filters.category || weapon.weaponCategory === filters.category) &&
      (!filters.rarity || weapon.rarity === filters.rarity) &&
      (!filters.biome || weapon.biome === filters.biome) &&
      (!filters.region || weapon.region === filters.region) &&
      (!filters.damageType || weapon.damageType === filters.damageType) &&
      Number(weapon.minLevel || 1) >= minLevel &&
      Number(weapon.minLevel || 1) <= maxLevel
    );
  });
}

export function sortWeapons(weapons = [], sortBy = "name") {
  const safeWeapons = Array.isArray(weapons) ? weapons : [];
  return [...safeWeapons].sort((a, b) => {
    if (sortBy === "damage") {
      return parseDiceScore(b.damage) - parseDiceScore(a.damage);
    }

    if (sortBy === "price") {
      return Number(a.priceBase || 0) - Number(b.priceBase || 0);
    }

    if (sortBy === "rarity") {
      return (rarityOrder[b.rarity] || 0) - (rarityOrder[a.rarity] || 0);
    }

    if (sortBy === "level") {
      return Number(a.minLevel || 1) - Number(b.minLevel || 1);
    }

    return String(a.name || "").localeCompare(String(b.name || ""), "it");
  });
}

export function toInventoryWeapon(weapon) {
  return {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    sourceId: weapon.sourceId || weapon.id,
    source: "weapon-database",
    name: weapon.name,
    category: "Armi",
    type: weapon.weaponCategory,
    rarity: weapon.rarity,
    price: weapon.price,
    priceBase: weapon.priceBase,
    qty: 1,
    quantity: 1,
    description: weapon.description,
    effect: weapon.effect || "Nessun effetto speciale.",
    damage: weapon.damage || "N/A",
    damageType: weapon.damageType || null,
    details: weapon.details,
    properties: weapon.properties || [],
    minLevel: weapon.minLevel || 1,
    maxLevel: weapon.maxLevel || 20,
    biome: weapon.biome,
    regions: weapon.regions || ["generic"],
    tags: weapon.tags || [],
    notes:
      weapon.curse && weapon.curse !== "nessuna"
        ? `Maledizione: ${weapon.curse}`
        : "",
  };
}
