export const urbanMonsters = [
  {
    id: "urban-001",
    name: "Ladro dei Tetti",
    biomes: ["urban"],
    difficulty: "Semplice",
    cr: "1/2",
    type: "Umanoide",
    role: "Schermagliatore",
    icon: "🗡️",
    armorClass: 14,
    hitPoints: 22,
    speed: "30 ft., scalata 20 ft.",
    tags: ["Urbano", "Furtivo"],
    description:
      "Criminale agile che conosce tetti, vicoli e finestre meglio delle guardie cittadine.",
    story:
      "Non cerca sempre lo scontro: spesso vuole solo rubare una chiave, un sigillo o una borsa al momento giusto.",
    actions:
      "Pugnale. Balestrino. Attacco furtivo se ha vantaggio o un alleato vicino al bersaglio.",
    tactics:
      "Usa altezza, copertura, folla e fuga. Combatte solo se costretto.",
    resistances: "Nessuna",
    vulnerabilities: "Magia di blocco, luce improvvisa",
  },
  {
    id: "urban-002",
    name: "Guardia Corrotta",
    biomes: ["urban"],
    difficulty: "Facile",
    cr: "1",
    type: "Umanoide",
    role: "Guardia",
    icon: "🛡️",
    armorClass: 16,
    hitPoints: 38,
    speed: "30 ft.",
    tags: ["Città", "Corruzione", "Milizia"],
    description:
      "Soldato cittadino che vende informazioni, chiude occhi al momento giusto e combatte meglio se protetto dalla legge.",
    story:
      "In pubblico parla di ordine. In privato conosce il prezzo di ogni porta chiusa.",
    actions:
      "Lancia o spada corta. Può chiamare rinforzi se il combattimento si svolge in città.",
    tactics:
      "Tiene la linea, protegge alleati più importanti e cerca di arrestare invece di uccidere.",
    resistances: "Nessuna",
    vulnerabilities: "Ricatto, prove compromettenti",
  },
  {
    id: "urban-003",
    name: "Mimic da Mercato",
    biomes: ["urban", "ruins"],
    difficulty: "Medio",
    cr: "2",
    type: "Mostruosità",
    role: "Imboscata",
    icon: "📦",
    armorClass: 13,
    hitPoints: 58,
    speed: "15 ft.",
    tags: ["Mimetismo", "Adesivo", "Trappola"],
    description:
      "Creatura capace di imitare casse, bauli, bancarelle o oggetti comuni in luoghi affollati.",
    story:
      "Alcuni mercanti giurano di aver perso interi carichi senza che nessuno vedesse ladri entrare.",
    actions:
      "Morso adesivo. Pseudopodo. Può trattenere una creatura se la colpisce.",
    tactics:
      "Aspetta che qualcuno tocchi l’oggetto, poi blocca il bersaglio e lo trascina lontano dalla folla.",
    resistances: "Acido",
    vulnerabilities: "Fuoco, freddo intenso",
  },
  {
    id: "urban-004",
    name: "Assassino della Maschera Nera",
    biomes: ["urban"],
    difficulty: "Difficile",
    cr: "8",
    type: "Umanoide",
    role: "Eliminatore",
    icon: "🎭",
    armorClass: 16,
    hitPoints: 120,
    speed: "30 ft.",
    tags: ["Assassino", "Veleno", "Furtivo"],
    description:
      "Killer professionista che agisce durante feste, processioni e mercati rumorosi.",
    story:
      "La maschera nera non indica una persona, ma un contratto accettato. Chi la vede troppo da vicino spesso non sopravvive.",
    actions:
      "Lama avvelenata. Balestra nascosta. Colpo critico contro bersagli sorpresi.",
    tactics:
      "Colpisce da invisibilità sociale: folla, travestimenti, diversivi e vie di fuga preparate.",
    resistances: "Veleno",
    vulnerabilities: "Individuazione del magico, trappole luminose",
  },
  {
    id: "urban-005",
    name: "Re Vampiro Esiliato",
    biomes: ["urban", "ruins"],
    difficulty: "Estremo",
    cr: "14",
    type: "Non morto",
    role: "Boss",
    icon: "🧛",
    image: "/monsters/15-re-vampiro-esiliato.png",
    armorClass: 18,
    hitPoints: 255,
    speed: "30 ft., arrampicata 30 ft.",
    tags: ["Vampiro", "Boss", "Nobile"],
    description:
      "Sovrano decaduto, elegante e terribile. Il suo carisma è un’arma quanto le sue zanne.",
    story:
      "Fu tradito dalla propria corte e bandito dal castello ancestrale. Ora ricostruisce il regno nell’ombra.",
    actions:
      "Artigli nobili. Morso regale. Comando oscuro. Può affascinare una creatura vicina.",
    tactics:
      "Non combatte mai da solo se può evitarlo. Usa servitori, ostaggi e promesse.",
    resistances: "Necrotico, armi non magiche",
    vulnerabilities: "Luce solare, acqua corrente",
  },
];