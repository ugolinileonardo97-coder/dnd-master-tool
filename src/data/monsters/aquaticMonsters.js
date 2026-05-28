export const aquaticMonsters = [
  {
    id: "aquatic-001",
    name: "Sciame di Piranha Neri",
    biomes: ["aquatic", "swamp"],
    difficulty: "Semplice",
    cr: "1/2",
    type: "Bestia",
    role: "Sciame",
    icon: "🐟",
    armorClass: 13,
    hitPoints: 28,
    speed: "nuoto 40 ft.",
    tags: ["Sciame", "Acqua", "Sangue"],
    description:
      "Piccoli pesci scuri che si muovono come una macchia viva. Reagiscono al sangue in pochi istanti.",
    story:
      "I barcaioli gettano carne lontano dalle rive prima di attraversare certe acque.",
    actions:
      "Morsi multipli. Infligge più danni contro creature ferite o immerse nell’acqua.",
    tactics:
      "Circonda creature in acqua e si disperde se colpito da grandi esplosioni.",
    resistances: "Perforante non magico",
    vulnerabilities: "Danni ad area, fulmine",
  },
  {
    id: "aquatic-002",
    name: "Guardiano di Corallo",
    biomes: ["aquatic", "coastal"],
    difficulty: "Medio",
    cr: "4",
    type: "Costrutto",
    role: "Guardiano",
    icon: "🪸",
    armorClass: 17,
    hitPoints: 102,
    speed: "20 ft., nuoto 30 ft.",
    tags: ["Corallo", "Guardiano", "Tempio sommerso"],
    description:
      "Figura umanoide composta da corallo, conchiglie e pietra marina. Protegge luoghi sacri sommersi.",
    story:
      "Si attiva solo quando qualcuno ruba da un santuario o spezza coralli consacrati.",
    actions:
      "Pugno corallino. Schegge taglienti. Può rallentare creature che nuotano vicino a lui.",
    tactics:
      "Rimane vicino all’obiettivo da proteggere e usa il terreno sommerso a proprio vantaggio.",
    resistances: "Freddo, perforante",
    vulnerabilities: "Fulmine, contundente pesante",
  },
  {
    id: "aquatic-003",
    name: "Serpe degli Abissi",
    biomes: ["aquatic"],
    difficulty: "Difficile",
    cr: "8",
    type: "Mostruosità",
    role: "Predatore",
    icon: "🐍",
    armorClass: 17,
    hitPoints: 168,
    speed: "nuoto 60 ft.",
    tags: ["Abisso", "Serpente", "Stritolamento"],
    description:
      "Serpente marino lungo e pallido che vive in acque profonde, dove la luce non arriva.",
    story:
      "I marinai dicono che alcune correnti non siano correnti, ma il passaggio lento della sua coda.",
    actions:
      "Morso. Avvolgimento. Può trattenere e trascinare una creatura verso il basso.",
    tactics:
      "Attacca dal basso, afferra un bersaglio e tenta di separarlo dal gruppo.",
    resistances: "Freddo, pressione abissale",
    vulnerabilities: "Fulmine",
  },
  {
    id: "aquatic-004",
    name: "Leviatano Giovane",
    biomes: ["aquatic", "coastal"],
    difficulty: "Estremo",
    cr: "13",
    type: "Mostruosità",
    role: "Boss acquatico",
    icon: "🐋",
    armorClass: 18,
    hitPoints: 290,
    speed: "nuoto 80 ft.",
    tags: ["Colosso", "Onde", "Boss"],
    description:
      "Creatura marina colossale, ancora giovane ma già capace di spezzare navi leggere.",
    story:
      "Quando compare vicino alla costa, i pescatori tirano le barche in secca e pregano che non cerchi cibo.",
    actions:
      "Morso devastante. Colpo di coda. Ondata. Può sbalzare creature e imbarcazioni.",
    tactics:
      "Usa massa e acqua come armi, colpisce navi e costringe i personaggi a combattere in condizioni sfavorevoli.",
    resistances: "Freddo, contundente non magico",
    vulnerabilities: "Fulmine, arpioni ben piazzati",
  },
];