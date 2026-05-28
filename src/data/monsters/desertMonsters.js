export const desertMonsters = [
  {
    id: "desert-001",
    name: "Sciacallo delle Dune",
    biomes: ["desert"],
    difficulty: "Semplice",
    cr: "1/4",
    type: "Bestia",
    role: "Predatore",
    icon: "🐕",
    armorClass: 12,
    hitPoints: 13,
    speed: "40 ft.",
    tags: ["Deserto", "Branco"],
    description:
      "Creatura sottile e resistente, capace di seguire una carovana per giorni aspettando il momento giusto.",
    story:
      "Quando una carovana perde un animale o un viaggiatore resta indietro, gli sciacalli sono già lì.",
    actions:
      "Morso rapido. Se combatte con altri sciacalli, ottiene vantaggio tattico contro bersagli isolati.",
    tactics:
      "Non combatte fino alla morte. Morde, arretra e aspetta che sete e fatica facciano il resto.",
    resistances: "Caldo naturale",
    vulnerabilities: "Freddo improvviso",
  },
  {
    id: "desert-002",
    name: "Golem di Sale",
    biomes: ["desert", "ruins"],
    difficulty: "Difficile",
    cr: "9",
    type: "Costrutto",
    role: "Guardiano",
    icon: "🧂",
    image: "/monsters/11-golem-sale.png",
    armorClass: 18,
    hitPoints: 190,
    speed: "25 ft.",
    tags: ["Costrutto", "Sale", "Guardiano"],
    description:
      "Massa umanoide di cristalli salini, pesante e scricchiolante. Ogni colpo libera schegge bianche e polvere irritante.",
    story:
      "Creato da sacerdoti del deserto per proteggere tombe, pozzi sacri e segreti lasciati sotto il sole.",
    actions:
      "Pugno cristallino. Nube salina a ricarica, capace di accecare temporaneamente.",
    tactics:
      "Blocca passaggi stretti, acceca il gruppo e protegge un luogo preciso senza inseguire lontano.",
    resistances: "Tagliente, perforante non magico",
    vulnerabilities: "Acqua, fulmine",
  },
];