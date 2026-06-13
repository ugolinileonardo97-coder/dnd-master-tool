function normalizeText(value) {
  return String(value || "").toLowerCase();
}

function getItemText(item) {
  return [
    item?.name,
    item?.category,
    item?.type,
    item?.rarity,
    item?.details,
    item?.description,
    item?.notes,
  ]
    .filter(Boolean)
    .join(" ");
}

function getFirstDiceFormula(text) {
  const match = String(text || "").match(/\d*d\d+(?:\s*[+-]\s*\d+)?/i);
  return match ? match[0].replace(/\s+/g, " ") : "";
}

function getDamageType(text) {
  const normalized = normalizeText(text);

  if (normalized.includes("fuoco") || normalized.includes("fiamma")) return "fuoco";
  if (normalized.includes("acido")) return "acido";
  if (normalized.includes("veleno")) return "veleno";
  if (normalized.includes("freddo") || normalized.includes("ghiaccio")) return "freddo";
  if (normalized.includes("fulmine") || normalized.includes("tempesta")) return "fulmine";
  if (normalized.includes("radioso") || normalized.includes("santa") || normalized.includes("sacro")) return "radioso";
  if (normalized.includes("necrotico")) return "necrotico";
  if (normalized.includes("psichico")) return "psichico";
  if (normalized.includes("tuono")) return "tuono";
  if (normalized.includes("tagliente")) return "tagliente";
  if (normalized.includes("perforante")) return "perforante";
  if (normalized.includes("contundente")) return "contundente";

  return "";
}

function getPotionCondition(itemText) {
  const text = normalizeText(itemText);

  if (text.includes("invisibil")) return "Invisibile";
  if (text.includes("velocità") || text.includes("velocita")) return "Velocizzato";
  if (text.includes("volare") || text.includes("volo")) return "In volo";
  if (text.includes("scalare") || text.includes("scalata")) return "Scalata";
  if (text.includes("respirare") || text.includes("subacque")) return "Respirazione subacquea";
  if (text.includes("resistenza")) return "Resistente";
  if (text.includes("forza")) return "Forza aumentata";

  return "Effetto pozione";
}

function makeInventoryCombatId(item, index) {
  const rawId = item?.id ?? `${item?.name || "oggetto"}-${index}`;
  return `inventory-${rawId}`;
}

export function mapInventoryItemToCombatItem(item, index = 0) {
  const itemText = getItemText(item);
  const normalized = normalizeText(itemText);
  const category = item?.category || "Oggetti";
  const name = item?.name || "Oggetto senza nome";
  const formula = getFirstDiceFormula(itemText);
  const damageType = getDamageType(itemText);

  const baseItem = {
    id: makeInventoryCombatId(item, index),
    source: "inventory",
    sourceItemId: item?.id,
    name,
    category,
    rarity: item?.rarity || "Comune",
    qty: item?.qty || 1,
    formula,
    description: item?.notes || item?.description || item?.details || "Oggetto dell’inventario del mercante.",
    originalItem: item,
  };

  if (item?.combatEffect) {
    return {
      ...baseItem,
      ...item.combatEffect,
      type: item.combatEffect.type || item.combatEffect.kind || "note",
      formula: item.combatEffect.formula || formula,
      description: item.combatEffect.description || baseItem.description,
    };
  }

  if (
    normalized.includes("cura") ||
    normalized.includes("guarigione") ||
    normalized.includes("recupera") ||
    normalized.includes("pf") && category === "Pozioni"
  ) {
    return {
      ...baseItem,
      type: "heal",
      formula: formula || "cura manuale",
      description: baseItem.description || "Cura un bersaglio. Inserisci il risultato dei dadi reali.",
    };
  }

  if (category === "Pozioni") {
    return {
      ...baseItem,
      type: "condition",
      condition: getPotionCondition(itemText),
      description: baseItem.description || "Applica l’effetto narrativo della pozione al bersaglio.",
    };
  }

  if (category === "Armi") {
    return {
      ...baseItem,
      type: "damage",
      damageType: damageType || "arma",
      formula: formula || "danno manuale",
      description: baseItem.description || "Arma dell’inventario. Inserisci il danno reale tirato al tavolo.",
    };
  }

  if (
    normalized.includes("bomba") ||
    normalized.includes("esplos") ||
    normalized.includes("fiala esplosiva")
  ) {
    return {
      ...baseItem,
      type: "damage",
      damageType: damageType || "fuoco",
      formula: formula || "danno manuale",
      savingThrow: {
        ability: "dex",
        dc: 12,
        success: "half",
      },
      description: baseItem.description || "Esplosione. Inserisci il danno tirato; se il TS riesce viene dimezzato.",
    };
  }

  if (normalized.includes("acido")) {
    return {
      ...baseItem,
      type: "damage",
      damageType: "acido",
      formula: formula || "danno manuale",
      description: baseItem.description || "Acido alchemico. Inserisci il danno reale tirato al tavolo.",
    };
  }

  if (normalized.includes("acqua santa") || normalized.includes("santa")) {
    return {
      ...baseItem,
      type: "damage",
      damageType: "radioso",
      formula: formula || "2d6",
      description: baseItem.description || "Utile contro non morti e creature empie. Inserisci il danno reale.",
    };
  }

  if (normalized.includes("veleno")) {
    return {
      ...baseItem,
      type: "damage",
      damageType: "veleno",
      formula: formula || "danno manuale",
      condition: "Avvelenato",
      savingThrow: {
        ability: "con",
        dc: 10,
        success: "none",
      },
      description: baseItem.description || "Veleno. Inserisci il danno reale; se il TS riesce può annullare l’effetto.",
    };
  }

  if (normalized.includes("olio") || normalized.includes("fuoco alchemico")) {
    return {
      ...baseItem,
      type: "damage",
      damageType: "fuoco",
      formula: formula || "danno manuale",
      description: baseItem.description || "Oggetto incendiario o infiammabile. Inserisci il danno reale.",
    };
  }

  if (normalized.includes("borsa da guaritore") || normalized.includes("stabilizz")) {
    return {
      ...baseItem,
      type: "condition",
      condition: "Stabile",
      description: baseItem.description || "Stabilizza un bersaglio a 0 PF.",
    };
  }

  if (category === "Armature") {
    return {
      ...baseItem,
      type: "note",
      description: baseItem.description || "Armatura o protezione: annota l’utilizzo nel log del combattimento.",
    };
  }

  return {
    ...baseItem,
    type: "note",
    description: baseItem.description || "Oggetto narrativo: registra l’utilizzo nel log del combattimento.",
  };
}

export function getInventoryCombatItems(inventory = []) {
  return inventory
    .filter((item) => item && item.name)
    .map((item, index) => mapInventoryItemToCombatItem(item, index));
}

export function mergeCombatItemsWithInventory(baseItems = [], inventory = []) {
  const inventoryItems = getInventoryCombatItems(inventory);
  const fallbackItems = baseItems.map((item) => ({
    ...item,
    source: item.source || "base",
    category: item.category || "Oggetti rapidi",
    qty: item.qty || 1,
  }));

  return [...inventoryItems, ...fallbackItems];
}
