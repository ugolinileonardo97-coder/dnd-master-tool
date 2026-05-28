export const arcticMonsters = [
  {
    id: "arctic-001",
    name: "Lupo della Brina",
    biomes: ["arctic", "mountain"],
    difficulty: "Facile",
    cr: "1",
    type: "Bestia",
    role: "Predatore",
    icon: "🐺",
    armorClass: 13,
    hitPoints: 34,
    speed: "40 ft.",
    tags: ["Freddo", "Branco", "Neve"],
    description:
      "Lupo dal pelo bianco-grigio che scompare nella tormenta e attacca quando la preda è stanca.",
    story:
      "I viaggiatori artici non temono il primo ululato, ma quando gli ululati cessano.",
    actions:
      "Morso gelido. Se combatte in branco, può buttare a terra il bersaglio.",
    tactics:
      "Insegue a lungo, colpisce chi resta indietro e usa la neve come copertura.",
    resistances: "Freddo",
    vulnerabilities: "Fuoco",
  },
  {
    id: "arctic-002",
    name: "Spirito della Valanga",
    biomes: ["arctic", "mountain"],
    difficulty: "Medio",
    cr: "5",
    type: "Elementale",
    role: "Controllo area",
    icon: "🌨️",
    armorClass: 15,
    hitPoints: 118,
    speed: "40 ft.",
    tags: ["Freddo", "Neve", "Elementale"],
    description:
      "Massa semisenziente di neve, pietre e vento. Si manifesta prima delle grandi valanghe.",
    story:
      "Le popolazioni di montagna lasciano offerte di sale e lana ai piedi dei pendii per placarlo.",
    actions:
      "Schianto gelido. Raffica. Può creare terreno difficile intorno a sé.",
    tactics:
      "Blocca il movimento, separa il gruppo e spinge i bersagli verso burroni o zone instabili.",
    resistances: "Freddo, contundente non magico",
    vulnerabilities: "Fuoco",
  },
  {
    id: "arctic-003",
    name: "Gigante del Gelo Esiliato",
    biomes: ["arctic", "mountain"],
    difficulty: "Difficile",
    cr: "8",
    type: "Gigante",
    role: "Bruto",
    icon: "🧊",
    armorClass: 16,
    hitPoints: 165,
    speed: "40 ft.",
    tags: ["Gigante", "Freddo", "Esiliato"],
    description:
      "Gigante coperto di pellicce ghiacciate, bandito dal proprio clan e reso ancora più crudele dalla solitudine.",
    story:
      "Porta con sé un corno spezzato: ciò che resta del suo rango perduto.",
    actions:
      "Ascia enorme. Roccia scagliata. Può spingere i nemici nella neve profonda.",
    tactics:
      "Colpisce duro, usa distanza con massi e cerca di spezzare il gruppo con la forza.",
    resistances: "Freddo",
    vulnerabilities: "Fuoco, orgoglio ferito",
  },
  {
    id: "arctic-004",
    name: "Drago Bianco Antico",
    biomes: ["arctic", "mountain"],
    difficulty: "Boss",
    cr: "20",
    type: "Drago",
    role: "Boss primordiale",
    icon: "🐉",
    armorClass: 22,
    hitPoints: 420,
    speed: "40 ft., scavare 40 ft., volo 80 ft.",
    tags: ["Drago", "Freddo", "Antico"],
    description:
      "Drago primordiale che vive tra ghiacciai, caverne azzurre e ossa congelate di creature gigantesche.",
    story:
      "Non dimentica nessuna offesa. Anche dopo secoli può riconoscere l’odore del sangue di una stirpe nemica.",
    actions:
      "Multiattacco. Soffio gelido. Presenza terrificante. Può combattere dentro nebbia e neve come se fosse casa.",
    tactics:
      "Colpisce dal cielo, usa il ghiaccio come copertura e trascina lo scontro in ambienti ostili.",
    resistances: "Freddo",
    vulnerabilities: "Fuoco",
  },
];