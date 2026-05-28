export const coastalMonsters = [
  {
    id: "coastal-001",
    name: "Granchio Spaccaossa",
    biomes: ["coastal", "aquatic"],
    difficulty: "Semplice",
    cr: "1/2",
    type: "Bestia",
    role: "Difensore",
    icon: "🦀",
    armorClass: 15,
    hitPoints: 24,
    speed: "30 ft., nuoto 20 ft.",
    tags: ["Costa", "Chele", "Carapace"],
    description:
      "Grande granchio dal carapace scuro, capace di spezzare remi, ossa e piccoli scudi.",
    story:
      "I pescatori riconoscono la sua tana dalle conchiglie frantumate sparse sulla spiaggia.",
    actions:
      "Chela. Può afferrare una creatura piccola o media se colpisce.",
    tactics:
      "Si piazza tra la preda e l’acqua, afferra e trascina verso gli scogli.",
    resistances: "Tagliente leggero",
    vulnerabilities: "Tuono, cadute dall’alto",
  },
  {
    id: "coastal-002",
    name: "Sirenide delle Scogliere",
    biomes: ["coastal", "aquatic"],
    difficulty: "Medio",
    cr: "4",
    type: "Folletto",
    role: "Controllo",
    icon: "🧜",
    armorClass: 14,
    hitPoints: 82,
    speed: "20 ft., nuoto 40 ft.",
    tags: ["Canto", "Charme", "Scogli"],
    description:
      "Creatura elegante e pericolosa che usa il canto per attirare marinai, guardie e avventurieri verso le rocce.",
    story:
      "Non tutte le sirenidi sono crudeli, ma questa ha imparato che gli annegati custodiscono bene i segreti.",
    actions:
      "Canto ammaliante. Artiglio marino. Può spingere o attirare creature verso l’acqua.",
    tactics:
      "Controlla il movimento, sfrutta le scogliere e combatte meglio vicino al mare.",
    resistances: "Charme, freddo",
    vulnerabilities: "Silenzio magico, fulmine",
  },
  {
    id: "coastal-003",
    name: "Predone dei Relitti",
    biomes: ["coastal", "urban"],
    difficulty: "Facile",
    cr: "1",
    type: "Umanoide",
    role: "Predone",
    icon: "🏴‍☠️",
    armorClass: 14,
    hitPoints: 36,
    speed: "30 ft.",
    tags: ["Pirata", "Relitti", "Costa"],
    description:
      "Bandito costiero che saccheggia navi arenate, fari isolati e piccoli villaggi di pescatori.",
    story:
      "Conosce le maree meglio delle leggi e sa quando un naufragio diventa una miniera d’oro.",
    actions:
      "Sciabola. Balestra leggera. Può lanciare sabbia o usare l’ambiente per distrarre.",
    tactics:
      "Combatte sporco, sfrutta coperture e tenta la fuga se perde il vantaggio numerico.",
    resistances: "Nessuna",
    vulnerabilities: "Autorità locali, intimidazione",
  },
  {
    id: "coastal-004",
    name: "Drago delle Maree Spezzate",
    biomes: ["coastal", "aquatic"],
    difficulty: "Boss",
    cr: "15",
    type: "Drago",
    role: "Boss territoriale",
    icon: "🐉",
    armorClass: 19,
    hitPoints: 285,
    speed: "40 ft., nuoto 60 ft., volo 80 ft.",
    tags: ["Drago", "Marea", "Costa"],
    description:
      "Drago marino che domina grotte costiere, fari in rovina e tratti di mare dove le correnti sembrano obbedirgli.",
    story:
      "Pretende tributi dai porti vicini e conserva nella tana campane sommerse, ancore spezzate e mappe marcite.",
    actions:
      "Multiattacco. Soffio salmastro. Colpo di coda. Può creare onde violente vicino alla costa.",
    tactics:
      "Alterna aria, acqua e scogli. Se minacciato, trascina il combattimento in mare.",
    resistances: "Freddo, fulmine",
    vulnerabilities: "Terra consacrata, siccità magica",
  },
];