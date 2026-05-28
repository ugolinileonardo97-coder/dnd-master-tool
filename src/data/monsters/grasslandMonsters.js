export const grasslandMonsters = [
  {
    id: "grassland-001",
    name: "Iena delle Pianure",
    biomes: ["grassland", "desert"],
    difficulty: "Semplice",
    cr: "1/4",
    type: "Bestia",
    role: "Branco",
    icon: "🐕",
    armorClass: 12,
    hitPoints: 14,
    speed: "50 ft.",
    tags: ["Branco", "Prateria", "Caccia"],
    description:
      "Predatore rapido e rumoroso che segue mandrie, carovane e battaglie in attesa di resti.",
    story:
      "Quando le iene ridono di notte, qualcuno nel campo di solito smette di dormire.",
    actions:
      "Morso. Se un alleato è vicino al bersaglio, diventa più pericolosa.",
    tactics:
      "Attacca in gruppo, punta bersagli caduti e fugge se il branco viene disperso.",
    resistances: "Nessuna",
    vulnerabilities: "Fuoco, rumori forti",
  },
  {
    id: "grassland-002",
    name: "Centauro Errante",
    biomes: ["grassland", "forest", "hill"],
    difficulty: "Facile",
    cr: "2",
    type: "Mostruosità",
    role: "Arciere mobile",
    icon: "🏹",
    armorClass: 14,
    hitPoints: 62,
    speed: "50 ft.",
    tags: ["Mobile", "Arco", "Prateria"],
    description:
      "Guerriero delle pianure, rapido e orgoglioso, capace di colpire da lontano senza farsi raggiungere.",
    story:
      "Non tutti sono ostili. Alcuni mettono alla prova gli stranieri prima di lasciarli attraversare le terre sacre.",
    actions:
      "Arco lungo. Lancia. Carica con zoccoli se entra in mischia.",
    tactics:
      "Mantiene distanza, colpisce in movimento e sfrutta ampi spazi aperti.",
    resistances: "Nessuna",
    vulnerabilities: "Terreno difficile, spazi stretti",
  },
  {
    id: "grassland-003",
    name: "Rinoceronte Corazzato",
    biomes: ["grassland"],
    difficulty: "Medio",
    cr: "4",
    type: "Bestia",
    role: "Carica",
    icon: "🦏",
    armorClass: 16,
    hitPoints: 115,
    speed: "40 ft.",
    tags: ["Carica", "Corazzato", "Bestia"],
    description:
      "Bestia enorme con placche naturali dure come scudi consumati. Quando carica, il terreno trema.",
    story:
      "Le tribù delle pianure lo rispettano come incarnazione della testardaggine della terra.",
    actions:
      "Corno. Carica devastante se percorre abbastanza distanza prima di colpire.",
    tactics:
      "Sceglie una linea retta, travolge il bersaglio e difende il branco.",
    resistances: "Contundente leggero",
    vulnerabilities: "Illusioni, terreno fangoso",
  },
  {
    id: "grassland-004",
    name: "Roc delle Tempeste",
    biomes: ["grassland", "mountain", "coastal"],
    difficulty: "Estremo",
    cr: "11",
    type: "Mostruosità",
    role: "Predatore volante",
    icon: "🦅",
    armorClass: 17,
    hitPoints: 248,
    speed: "20 ft., volo 120 ft.",
    tags: ["Volante", "Gigante", "Rapimento"],
    description:
      "Uccello titanico che oscura il sole per un istante quando passa sopra la pianura.",
    story:
      "Le carovane coprono gli animali con teli mimetici quando vedono la sua ombra sulle nuvole.",
    actions:
      "Artigli. Becco. Può afferrare creature grandi e sollevarle in aria.",
    tactics:
      "Afferra un bersaglio, sale di quota e lo lascia cadere o lo porta al nido.",
    resistances: "Vento, caduta",
    vulnerabilities: "Fulmine, ali ferite",
  },
];