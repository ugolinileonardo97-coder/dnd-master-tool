export const shopRules = {
  goldRanges: [
    {
      minPartyLevel: 1,
      maxPartyLevel: 4,
      minGold: 100,
      maxGold: 500,
      shopTier: "Povero",
    },
    {
      minPartyLevel: 5,
      maxPartyLevel: 10,
      minGold: 500,
      maxGold: 1500,
      shopTier: "Medio",
    },
    {
      minPartyLevel: 11,
      maxPartyLevel: 16,
      minGold: 1500,
      maxGold: 3500,
      shopTier: "Ricco",
    },
    {
      minPartyLevel: 17,
      maxPartyLevel: 20,
      minGold: 3500,
      maxGold: 5000,
      shopTier: "Leggendario",
    },
  ],

  inventoryRules: [
    {
      minPartyLevel: 1,
      maxPartyLevel: 4,
      maxWeaponLevel: 3,
      magicalItemsChance: 0,
      rareItemsChance: 5,
    },
    {
      minPartyLevel: 5,
      maxPartyLevel: 10,
      maxWeaponLevel: 7,
      magicalItemsChance: 15,
      rareItemsChance: 20,
    },
    {
      minPartyLevel: 11,
      maxPartyLevel: 16,
      maxWeaponLevel: 15,
      magicalItemsChance: 40,
      rareItemsChance: 50,
    },
    {
      minPartyLevel: 17,
      maxPartyLevel: 20,
      maxWeaponLevel: 20,
      magicalItemsChance: 80,
      rareItemsChance: 90,
    },
  ],

  discountBehavior: {
    low: {
      label: "Basso",
      modifier: 0,
      description:
        "Mercante duro nelle trattative. Prezzi quasi fissi.",
    },

    medium: {
      label: "Medio",
      modifier: 10,
      description:
        "Disposto a trattare con clienti simpatici o abituali.",
    },

    high: {
      label: "Alto",
      modifier: 20,
      description:
        "Molto incline agli sconti e alle contrattazioni.",
    },
  },
};