export const hillMonsters = [
  {
    id: "hill-001",
    name: "Kobold delle Pietre",
    biomes: ["hill", "mountain", "ruins"],
    difficulty: "Semplice",
    cr: "1/4",
    type: "Umanoide",
    role: "Trappolatore",
    icon: "🪨",
    armorClass: 13,
    hitPoints: 9,
    speed: "30 ft.",
    tags: ["Kobold", "Trappole", "Colline"],
    description:
      "Piccolo umanoide codardo ma ingegnoso, esperto nel far rotolare pietre e preparare buche coperte.",
    story:
      "I pastori dicono che quando le pietre cambiano posto durante la notte, i kobold sono vicini.",
    actions:
      "Pugnale. Fionda. Può attivare piccole trappole preparate.",
    tactics:
      "Non combatte frontalmente. Attira i nemici su pendii, pietre instabili e strettoie.",
    resistances: "Nessuna",
    vulnerabilities: "Luce intensa, paura",
  },
  {
    id: "hill-002",
    name: "Brigante del Passo",
    biomes: ["hill", "grassland", "urban"],
    difficulty: "Facile",
    cr: "1",
    type: "Umanoide",
    role: "Predone",
    icon: "🏹",
    armorClass: 14,
    hitPoints: 32,
    speed: "30 ft.",
    tags: ["Bandito", "Imboscata", "Strada"],
    description:
      "Predone armato di arco e lama corta, abituato ad assaltare carovane su strade isolate.",
    story:
      "Conosce le curve dove le ruote rallentano e i punti dove una carrozza non può girarsi.",
    actions:
      "Arco corto. Lama. Può usare coperture naturali e fumo per fuggire.",
    tactics:
      "Attacca dall’alto, punta animali da tiro e merci, non combatte fino alla morte.",
    resistances: "Nessuna",
    vulnerabilities: "Cavalleria, autorità locali",
  },
  {
    id: "hill-003",
    name: "Ogre Spaccamassi",
    biomes: ["hill", "mountain"],
    difficulty: "Medio",
    cr: "3",
    type: "Gigante",
    role: "Bruto",
    icon: "👹",
    armorClass: 12,
    hitPoints: 95,
    speed: "40 ft.",
    tags: ["Gigante", "Bruto", "Rocce"],
    description:
      "Ogre massiccio che usa pietre grezze come armi e considera le colline il proprio territorio.",
    story:
      "Ha inciso simboli rozzi sulle rocce attorno alla tana per ricordare ai viandanti chi comanda.",
    actions:
      "Clava di pietra. Roccia scagliata. Può spingere creature giù da pendii.",
    tactics:
      "Usa altezza, massi e forza bruta. Punta chi sembra più piccolo o rumoroso.",
    resistances: "Contundente leggero",
    vulnerabilities: "Magia mentale",
  },
  {
    id: "hill-004",
    name: "Chimera dei Tre Dirupi",
    biomes: ["hill", "mountain"],
    difficulty: "Difficile",
    cr: "6",
    type: "Mostruosità",
    role: "Assalitore",
    icon: "🦁",
    armorClass: 15,
    hitPoints: 142,
    speed: "30 ft., volo 60 ft.",
    tags: ["Volante", "Multiattacco", "Fuoco"],
    description:
      "Mostro feroce che nidifica su dirupi difficili da raggiungere e attacca chiunque entri nel suo territorio.",
    story:
      "I tre dirupi portano segni diversi: artigli, zoccoli e bruciature.",
    actions:
      "Morso, corna e artigli. Soffio infuocato a ricarica.",
    tactics:
      "Alterna attacchi in volo e cariche terrestri, cercando di far cadere i nemici dai pendii.",
    resistances: "Fuoco",
    vulnerabilities: "Freddo, reti pesanti",
  },
];