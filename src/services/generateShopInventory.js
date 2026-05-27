import { weapons } from "../data/items/weapons";
import { armor } from "../data/items/armor";
import { potions } from "../data/items/potions";
import { generalItems } from "../data/items/generalItems";

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function filterByLevel(items, level) {
  return items.filter(
    (item) => level >= item.minLevel && level <= item.maxLevel
  );
}

function pickItems(items, count) {
  return shuffle(items).slice(0, Math.min(count, items.length));
}

function getInventoryPlan(level) {
  if (level <= 4) {
    return {
      weapons: randomNumber(4, 6),
      armor: randomNumber(1, 3),
      potions: randomNumber(1, 2),
      generalItems: randomNumber(2, 4),
    };
  }

  if (level <= 10) {
    return {
      weapons: randomNumber(5, 8),
      armor: randomNumber(2, 4),
      potions: randomNumber(2, 4),
      generalItems: randomNumber(3, 5),
    };
  }

  if (level <= 15) {
    return {
      weapons: randomNumber(6, 9),
      armor: randomNumber(3, 5),
      potions: randomNumber(3, 5),
      generalItems: randomNumber(4, 6),
    };
  }

  return {
    weapons: randomNumber(8, 12),
    armor: randomNumber(4, 6),
    potions: randomNumber(4, 7),
    generalItems: randomNumber(5, 8),
  };
}

function getQuantity(item) {
  if (item.category === "Pozioni") return randomNumber(1, 4);
  if (item.category === "Oggetti" && item.rarity === "Comune") {
    return randomNumber(1, 6);
  }
  if (item.rarity === "Comune") return randomNumber(1, 3);
  return 1;
}

function formatInventoryItem(item, index) {
  return {
    id: Date.now() + index + Math.random(),

    category: item.category,

    name: item.name,

    qty: getQuantity(item),

    price: item.price,

    notes: `${item.details} — ${item.description}`,

    type: item.type,

    rarity: item.rarity,

    description: item.description,
  };
}

export function generateShopInventory(level = 1) {
  const numericLevel = Number(level);
  const plan = getInventoryPlan(numericLevel);

  const selectedItems = [
    ...pickItems(filterByLevel(weapons, numericLevel), plan.weapons),
    ...pickItems(filterByLevel(armor, numericLevel), plan.armor),
    ...pickItems(filterByLevel(potions, numericLevel), plan.potions),
    ...pickItems(filterByLevel(generalItems, numericLevel), plan.generalItems),
  ];

  return shuffle(selectedItems).map((item, index) =>
    formatInventoryItem(item, index)
  );
}