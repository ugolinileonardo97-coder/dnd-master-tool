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
    combat: {
      attackBonus: "+4",
      damage: "1d8 + 2",
      averageDamage: 6,
      damageType: "contundenti",
      damageNote:
        "Chela potente. Può afferrare creature piccole o medie e trascinarle verso l’acqua.",
    },
  },
  {
    id: "coastal-002",
    name: "Gabbiano Beccomorto",
    biomes: ["coastal", "urban"],
    difficulty: "Semplice",
    cr: "1/4",
    type: "Bestia",
    role: "Sciame",
    icon: "🕊️",
    armorClass: 12,
    hitPoints: 14,
    speed: "10 ft., volo 50 ft.",
    tags: ["Volante", "Sciame", "Porto"],
    description:
      "Gabbiano aggressivo, sporco di sale e sangue, abituato a nutrirsi nei porti e sui campi di battaglia costieri.",
    story:
      "Nei porti superstiziosi si dice che quando i gabbiani smettono di rubare pesce e iniziano a seguire una nave, qualcuno morirà in mare.",
    actions:
      "Beccata. Può distrarre, accecare per un istante o disturbare incantatori e arcieri.",
    tactics:
      "Attacca in gruppo, disturba e fugge. Non combatte se non ha vantaggio numerico.",
    resistances: "Caduta, vento naturale",
    vulnerabilities: "Danni ad area, tuono",
    combat: {
      attackBonus: "+4",
      damage: "1d4 + 2",
      averageDamage: 4,
      damageType: "perforanti",
      damageNote:
        "Beccata rapida. Più utile per caos, distrazione e scene portuali che per danno puro.",
    },
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
    combat: {
      attackBonus: "+4",
      damage: "1d8 + 2",
      averageDamage: 6,
      damageType: "taglienti o perforanti",
      damageNote:
        "Sciabola o balestra leggera. Ottimo per imboscate tra relitti, moli e scogli.",
    },
  },
  {
    id: "coastal-004",
    name: "Cane Marino Randagio",
    biomes: ["coastal"],
    difficulty: "Facile",
    cr: "1",
    type: "Bestia",
    role: "Predatore anfibio",
    icon: "🦭",
    armorClass: 13,
    hitPoints: 38,
    speed: "30 ft., nuoto 40 ft.",
    tags: ["Anfibio", "Branco", "Scogli"],
    description:
      "Creatura simile a una foca muscolosa con muso canino e denti affilati. Si muove goffamente a terra, ma in acqua diventa rapidissima.",
    story:
      "I pescatori li chiamano randagi del mare perché seguono le barche per giorni, aspettando che qualcosa cada fuori bordo.",
    actions:
      "Morso. Se combatte in acqua, può trascinare una creatura verso il basso.",
    tactics:
      "Attacca vicino a scogli, moli e rive basse. Cerca di portare la preda in acqua.",
    resistances: "Freddo naturale",
    vulnerabilities: "Fuoco, reti pesanti",
    combat: {
      attackBonus: "+5",
      damage: "1d8 + 3",
      averageDamage: 7,
      damageType: "perforanti",
      damageNote:
        "Morso anfibio. Più pericoloso se può trascinare la preda in acqua.",
    },
  },
  {
    id: "coastal-005",
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
    combat: {
      attackBonus: "+6",
      damage: "2d8 + 3",
      averageDamage: 12,
      damageType: "psichici o taglienti",
      damageNote:
        "Canto ammaliante e artiglio marino. Molto pericolosa vicino all’acqua.",
    },
  },
  {
    id: "coastal-006",
    name: "Contrabbandiere della Nebbia",
    biomes: ["coastal", "urban"],
    difficulty: "Facile",
    cr: "2",
    type: "Umanoide",
    role: "Schermagliatore",
    icon: "🧥",
    armorClass: 15,
    hitPoints: 56,
    speed: "30 ft.",
    tags: ["Contrabbando", "Nebbia", "Porto"],
    description:
      "Navigatore clandestino e criminale da porto, esperto nel muoversi tra magazzini, banchine e baie nascoste.",
    story:
      "Dice di trasportare solo merci. Ma alcune casse respirano, altre sussurrano, altre ancora non devono mai essere aperte.",
    actions:
      "Stocco. Coltello da lancio. Bomba fumogena. Può nascondersi se c’è nebbia o fumo.",
    tactics:
      "Crea copertura, colpisce e fugge verso una barca o un vicolo preparato.",
    resistances: "Nessuna",
    vulnerabilities: "Luce intensa, autorità portuale",
    combat: {
      attackBonus: "+5",
      damage: "1d8 + 3",
      averageDamage: 7,
      damageType: "perforanti",
      damageNote:
        "Stocco e coltelli. Usa fumo o nebbia per sparire e riposizionarsi.",
    },
  },
  {
    id: "coastal-007",
    name: "Medusa delle Pozze Basse",
    biomes: ["coastal", "aquatic"],
    difficulty: "Medio",
    cr: "3",
    type: "Bestia",
    role: "Veleno",
    icon: "🪼",
    armorClass: 13,
    hitPoints: 72,
    speed: "5 ft., nuoto 30 ft.",
    tags: ["Veleno", "Acqua", "Contatto"],
    description:
      "Grande medusa trasparente che si nasconde nelle pozze di marea. I suoi filamenti sembrano alghe illuminate.",
    story:
      "I bambini dei villaggi costieri imparano presto che non tutte le luci sott’acqua sono riflessi del sole.",
    actions:
      "Tentacoli urticanti. Può paralizzare o rallentare una creatura colpita.",
    tactics:
      "Resta in acqua bassa, punisce chi entra nelle pozze e blocca passaggi naturali tra gli scogli.",
    resistances: "Veleno, freddo",
    vulnerabilities: "Fulmine, fuoco fuori dall’acqua",
    combat: {
      attackBonus: "+6",
      damage: "2d6 + 3 + 1d6 veleno",
      averageDamage: 13,
      damageType: "veleno e contundenti",
      damageNote:
        "Tentacoli urticanti. Può rallentare o paralizzare temporaneamente.",
    },
  },
  {
    id: "coastal-008",
    name: "Guardiano di Corallo",
    biomes: ["coastal", "aquatic"],
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
    combat: {
      attackBonus: "+7",
      damage: "2d8 + 4",
      averageDamage: 13,
      damageType: "contundenti e taglienti",
      damageNote:
        "Pugno corallino e schegge. Può rallentare creature che nuotano vicino a lui.",
    },
  },
  {
    id: "coastal-009",
    name: "Capitano dei Relitti Neri",
    biomes: ["coastal", "urban"],
    difficulty: "Difficile",
    cr: "6",
    type: "Umanoide",
    role: "Comandante",
    icon: "☠️",
    armorClass: 16,
    hitPoints: 140,
    speed: "30 ft.",
    tags: ["Pirata", "Comando", "Relitti"],
    description:
      "Capitano pirata con cappotto nero incrostato di sale e una lama curva decorata con denti di squalo.",
    story:
      "Non affonda le navi: le lascia arenare dove i suoi uomini possono saccheggiarle con calma.",
    actions:
      "Sciabola del capitano. Pistola o balestra. Può ordinare a un alleato di muoversi o attaccare.",
    tactics:
      "Usa sottoposti, terreno e coperture. Combatte meglio se ha equipaggio vicino.",
    resistances: "Paura",
    vulnerabilities: "Duello leale, ammutinamento",
    combat: {
      attackBonus: "+8",
      damage: "2d8 + 5",
      averageDamage: 14,
      damageType: "taglienti o perforanti",
      damageNote:
        "Sciabola del capitano e ordini tattici. Più pericoloso con alleati intorno.",
    },
  },
  {
    id: "coastal-010",
    name: "Fantasma del Faro Spento",
    biomes: ["coastal", "ruins"],
    difficulty: "Difficile",
    cr: "7",
    type: "Non morto",
    role: "Maledizione",
    icon: "🏮",
    armorClass: 15,
    hitPoints: 138,
    speed: "0 ft., volo 40 ft.",
    tags: ["Fantasma", "Faro", "Paura"],
    description:
      "Spirito pallido di un vecchio guardiano del faro. Porta una lanterna spenta che non riflette alcuna luce.",
    story:
      "Lasciò spegnere il faro durante una tempesta e una nave piena di innocenti si schiantò sugli scogli. Da allora richiama altre navi verso la stessa sorte.",
    actions:
      "Tocco spettrale. Lamento della tempesta. Può spaventare o attirare creature verso il bordo di scogliere.",
    tactics:
      "Combatte in alto, vicino a scale, balconi e precipizi. Spinge i nemici dove cadere è peggio che essere colpiti.",
    resistances: "Necrotico, freddo, armi non magiche",
    vulnerabilities: "Radiante, riaccendere il faro",
    combat: {
      attackBonus: "+8",
      damage: "3d8 + 4",
      averageDamage: 17,
      damageType: "necrotici",
      damageNote:
        "Tocco spettrale e lamento. La minaccia vera è spingere o attirare verso gli scogli.",
    },
  },
  {
    id: "coastal-011",
    name: "Serpe delle Scogliere",
    biomes: ["coastal", "aquatic"],
    difficulty: "Difficile",
    cr: "8",
    type: "Mostruosità",
    role: "Predatore",
    icon: "🐍",
    armorClass: 17,
    hitPoints: 168,
    speed: "30 ft., nuoto 60 ft.",
    tags: ["Serpente", "Scogli", "Stritolamento"],
    description:
      "Serpente marino lungo e scuro, capace di arrampicarsi tra scogliere e relitti con movimenti fluidi e innaturali.",
    story:
      "I marinai lo chiamano la corda viva. Quando lo vedi avvolto all’albero maestro, la nave è già sua.",
    actions:
      "Morso. Avvolgimento. Può trattenere e trascinare una creatura verso acqua profonda.",
    tactics:
      "Attacca da sotto, afferra il bersaglio più isolato e usa scogli o relitti come copertura.",
    resistances: "Freddo, pressione marina",
    vulnerabilities: "Fulmine",
    combat: {
      attackBonus: "+8",
      damage: "2d10 + 5",
      averageDamage: 16,
      damageType: "perforanti",
      damageNote:
        "Morso e avvolgimento. Può trattenere e trascinare una creatura in acqua.",
    },
  },
  {
    id: "coastal-012",
    name: "Kraken Minore della Baia",
    biomes: ["coastal", "aquatic"],
    difficulty: "Estremo",
    cr: "11",
    type: "Mostruosità",
    role: "Boss acquatico",
    icon: "🐙",
    armorClass: 18,
    hitPoints: 250,
    speed: "nuoto 60 ft.",
    tags: ["Tentacoli", "Baia", "Boss"],
    description:
      "Creatura tentacolare che vive sotto una baia apparentemente tranquilla. Le sue braccia sembrano radici nere sotto l’acqua.",
    story:
      "I pescatori non nominano mai la baia a voce alta. Dicono che il fondale ascolti.",
    actions:
      "Tentacolo. Stritolamento. Getto d’acqua. Può afferrare più creature o danneggiare piccole imbarcazioni.",
    tactics:
      "Afferra, separa e trascina sotto. Usa barche, moli e rocce come ostacoli contro il gruppo.",
    resistances: "Freddo, contundente non magico",
    vulnerabilities: "Fulmine, rituali marini",
    combat: {
      attackBonus: "+10",
      damage: "3d10 + 6",
      averageDamage: 22,
      damageType: "contundenti",
      damageNote:
        "Tentacoli e stritolamento. Boss perfetto per porti, baie e moli durante una tempesta.",
    },
  },
  {
    id: "coastal-013",
    name: "Leviatano Giovane",
    biomes: ["coastal", "aquatic"],
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
    combat: {
      attackBonus: "+12",
      damage: "4d10 + 8",
      averageDamage: 30,
      damageType: "perforanti o contundenti",
      damageNote:
        "Morso devastante, colpo di coda e ondata. Può colpire anche imbarcazioni.",
    },
  },
  {
    id: "coastal-014",
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
    combat: {
      attackBonus: "+11",
      damage: "2d10 + 6 + 2d8 freddo",
      averageDamage: 26,
      damageType: "perforanti e freddo",
      damageNote:
        "Multiattacco, soffio salmastro e controllo delle onde costiere.",
    },
  },
  {
    id: "coastal-015",
    name: "Signora della Marea Nera",
    biomes: ["coastal", "planar"],
    difficulty: "Boss",
    cr: "18",
    type: "Entità",
    role: "Boss rituale",
    icon: "🌑",
    armorClass: 21,
    hitPoints: 390,
    speed: "30 ft., nuoto 80 ft.",
    tags: ["Marea", "Entità", "Rituale"],
    description:
      "Entità antica che appare quando il mare diventa nero e la luna sembra troppo vicina all’acqua.",
    story:
      "Alcuni culti costieri la venerano come madre delle tempeste. Altri sanno che non è madre di nulla: è fame con una corona.",
    actions:
      "Tocco della marea nera. Evocazione delle acque. Può sommergere parte del campo o richiamare servitori marini.",
    tactics:
      "Controlla acqua e terreno, isola i personaggi e rende ogni round una lotta contro il mare stesso.",
    resistances: "Freddo, necrotico, veleno, armi non magiche",
    vulnerabilities: "Luce lunare consacrata, rituali di bassa marea",
    combat: {
      attackBonus: "+13",
      damage: "5d10 + 8",
      averageDamage: 35,
      damageType: "necrotici e freddo",
      damageNote:
        "Tocco della marea nera e controllo dell’acqua. Boss rituale perfetto per campagne costiere oscure.",
    },
  },
];