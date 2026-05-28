export const mountainMonsters = [
  {
    id: "mountain-001",
    name: "Orco Spezzascudi",
    biomes: ["mountain", "hill", "ruins"],
    difficulty: "Facile",
    cr: "2",
    type: "Umanoide",
    role: "Bruto",
    icon: "🪓",
    image: "/monsters/04-orco-spezzascudi.png",
    armorClass: 15,
    hitPoints: 68,
    speed: "30 ft.",
    tags: ["Orco", "Assalto", "Bruto"],
    description:
      "Orco addestrato a rompere linee nemiche, porte e scudi. La sua ascia è più un attrezzo da demolizione che un’arma.",
    story:
      "Gli Spezzascudi vengono mandati per primi nelle cariche tribali. Sopravvivere a tre assalti significa guadagnare rispetto.",
    actions:
      "Ascia frantumante. Se colpisce un bersaglio con scudo, può sbilanciarlo o ridurre la sua difesa temporaneamente.",
    tactics:
      "Carica il fronte, punta il difensore più pesante e apre spazio agli alleati.",
    resistances: "Paura",
    vulnerabilities: "Magia mentale",
  },
  {
    id: "mountain-002",
    name: "Drago Giovane di Cenere",
    biomes: ["mountain", "desert", "ruins"],
    difficulty: "Difficile",
    cr: "7",
    type: "Drago",
    role: "Assalitore",
    icon: "🐉",
    image: "/monsters/09-drago-giovane-cenere.png",
    armorClass: 17,
    hitPoints: 178,
    speed: "40 ft., volo 80 ft.",
    tags: ["Drago", "Fuoco", "Cenere"],
    description:
      "Drago giovane nato tra vulcani spenti e campi bruciati. Le ali sollevano nuvole di cenere soffocante.",
    story:
      "Non custodisce oro, ma resti carbonizzati: armi fuse, corone annerite e ossa fragili come carbone.",
    actions:
      "Morso e artigli. Soffio di cenere a ricarica, con danni da fuoco e possibile accecamento.",
    tactics:
      "Vola, separa il gruppo con il soffio e atterra solo quando ha un bersaglio isolato.",
    resistances: "Fuoco",
    vulnerabilities: "Freddo",
  },
];