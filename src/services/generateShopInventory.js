import { weapons } from "../data/weapons";
import { shopRules } from "../data/shopRules";

function getInventoryRuleByLevel(level) {
  return shopRules.inventoryRules.find(
    (rule) => level >= rule.minPartyLevel && level <= rule.maxPartyLevel
  );
}

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export function generateShopInventory(partyLevel) {
  const rule = getInventoryRuleByLevel(partyLevel);

  const availableWeapons = weapons.filter(
    (weapon) => weapon.minLevel <= rule.maxWeaponLevel
  );

  const quantity = Math.min(8, availableWeapons.length);

  return shuffleArray(availableWeapons)
    .slice(0, quantity)
    .map((weapon) => ({
      id: crypto.randomUUID(),
      category: weapon.category,
      name: `${weapon.icon} ${weapon.name}`,
      qty: Math.floor(Math.random() * 3) + 1,
      price: weapon.price,
      notes: `${weapon.damage} — ${weapon.properties}`,
    }));
}