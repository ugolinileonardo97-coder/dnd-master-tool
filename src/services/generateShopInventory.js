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

function isMagicWeapon(item) {
  return (
    item.category === "Armi" &&
    (item.type === "Arma Magica" ||
      item.type === "Arma Leggendaria" ||
      item.rarity !== "Comune")
  );
}

function getInventoryPlan(level) {
  if (level <= 4) {
    return {
      weapons: randomNumber(4, 6),
      magicWeapons: 0,
      armor: randomNumber(1, 3),
      potions: randomNumber(1, 2),
      generalItems: randomNumber(2, 4),
    };
  }

  if (level <= 10) {
    return {
      weapons: randomNumber(4, 6),
      magicWeapons: 1,
      armor: randomNumber(2, 4),
      potions: randomNumber(2, 4),
      generalItems: randomNumber(3, 5),
    };
  }

  if (level <= 15) {
    return {
      weapons: randomNumber(5, 7),
      magicWeapons: randomNumber(1, 2),
      armor: randomNumber(3, 5),
      potions: randomNumber(3, 5),
      generalItems: randomNumber(4, 6),
    };
  }

  return {
    weapons: randomNumber(6, 8),
    magicWeapons: randomNumber(2, 3),
    armor: randomNumber(4, 6),
    potions: randomNumber(4, 7),
    generalItems: randomNumber(5, 8),
  };
}

function getQuantity(item) {
  if (item.category === "Pozioni") return randomNumber(1, 4);

  if (isMagicWeapon(item)) return 1;

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

  const levelWeapons = filterByLevel(weapons, numericLevel);
  const normalWeapons = levelWeapons.filter((item) => !isMagicWeapon(item));
  const magicWeapons = levelWeapons.filter((item) => isMagicWeapon(item));

  const selectedItems = [
    ...pickItems(normalWeapons, plan.weapons),
    ...pickItems(magicWeapons, plan.magicWeapons),
    ...pickItems(filterByLevel(armor, numericLevel), plan.armor),
    ...pickItems(filterByLevel(potions, numericLevel), plan.potions),
    ...pickItems(filterByLevel(generalItems, numericLevel), plan.generalItems),
  ];

  return shuffle(selectedItems).map((item, index) =>
    formatInventoryItem(item, index)
  );
}