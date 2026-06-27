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
    combat: {
      attackBonus: "+5",
      damage: "2d6 + 2",
      averageDamage: 9,
      damageType: "perforanti",
      damageNote:
        "Morsi multipli. Più pericoloso contro creature ferite o immerse in acqua.",
    },
  },
  {
    id: "aquatic-002",
    name: "Anguilla Fulminante",
    biomes: ["aquatic", "swamp"],
    difficulty: "Semplice",
    cr: "1/2",
    type: "Bestia",
    role: "Controllo leggero",
    icon: "⚡",
    armorClass: 13,
    hitPoints: 26,
    speed: "nuoto 40 ft.",
    tags: ["Fulmine", "Acqua", "Agguato"],
    description:
      "Anguilla lunga e scura, capace di scaricare impulsi elettrici attraverso l’acqua.",
    story:
      "I pescatori imparano a riconoscerla quando i piccoli pesci morti salgono in superficie senza ferite visibili.",
    actions:
      "Morso elettrico. Scarica breve. Può rendere difficile reagire o muoversi per un istante.",
    tactics:
      "Attacca creature immerse, resta vicino a rocce sommerse e fugge se viene portata fuori dall’acqua.",
    resistances: "Fulmine",
    vulnerabilities: "Fuori dall’acqua, freddo intenso",
    combat: {
      attackBonus: "+4",
      damage: "1d6 + 2 + 1d6 fulmine",
      averageDamage: 9,
      damageType: "perforanti e fulmine",
      damageNote:
        "Morso elettrico. Più efficace se il gruppo combatte immerso o su terreno bagnato.",
    },
  },
  {
    id: "aquatic-003",
    name: "Sanguisuga Gigante",
    biomes: ["aquatic", "swamp"],
    difficulty: "Semplice",
    cr: "1/2",
    type: "Bestia",
    role: "Parassita",
    icon: "🪱",
    armorClass: 12,
    hitPoints: 28,
    speed: "10 ft., nuoto 30 ft.",
    tags: ["Acqua", "Risucchio", "Agguato"],
    description:
      "Creatura molle e scura che si nasconde sotto il fango e si attacca alle prede per nutrirsi lentamente.",
    story:
      "I pescatori riconoscono la sua presenza quando l’acqua diventa calma anche sotto la pioggia.",
    actions:
      "Morso aderente. Se colpisce, può rimanere attaccata e infliggere danno continuato.",
    tactics:
      "Attacca chi entra in acqua, si attacca al bersaglio più pesante e cerca di trascinarlo sotto.",
    resistances: "Veleno naturale",
    vulnerabilities: "Sale, fuoco",
    combat: {
      attackBonus: "+4",
      damage: "1d6 + 2",
      averageDamage: 5,
      damageType: "perforanti",
      damageNote:
        "Morso aderente. Se resta attaccata, può infliggere danno continuato e disturbare il movimento.",
    },
  },
  {
    id: "aquatic-004",
    name: "Granchio Spaccaossa",
    biomes: ["aquatic", "coastal"],
    difficulty: "Semplice",
    cr: "1/2",
    type: "Bestia",
    role: "Difensore",
    icon: "🦀",
    armorClass: 15,
    hitPoints: 24,
    speed: "30 ft., nuoto 20 ft.",
    tags: ["Chele", "Carapace", "Fondale"],
    description:
      "Grande granchio dal carapace scuro, capace di spezzare remi, ossa e piccoli scudi.",
    story:
      "Le sue tane si trovano vicino a relitti, scogli sommersi e depositi di conchiglie frantumate.",
    actions:
      "Chela. Può afferrare una creatura piccola o media se colpisce.",
    tactics:
      "Si piazza tra la preda e la via di fuga, afferra e trascina verso rocce sommerse.",
    resistances: "Tagliente leggero",
    vulnerabilities: "Tuono, cadute dall’alto",
    combat: {
      attackBonus: "+4",
      damage: "1d8 + 2",
      averageDamage: 6,
      damageType: "contundenti",
      damageNote:
        "Chela potente. Può afferrare creature piccole o medie e trascinarle verso fondali pericolosi.",
    },
  },
  {
    id: "aquatic-005",
    name: "Predatore delle Alghe",
    biomes: ["aquatic", "coastal"],
    difficulty: "Facile",
    cr: "1",
    type: "Bestia",
    role: "Agguato",
    icon: "🌿",
    armorClass: 14,
    hitPoints: 42,
    speed: "nuoto 40 ft.",
    tags: ["Alghe", "Agguato", "Mimetismo"],
    description:
      "Predatore sottile e verdeggiante, quasi indistinguibile da un groviglio di alghe quando resta immobile.",
    story:
      "I pescatori lo chiamano mantello vivo, perché spesso la vittima crede di essersi impigliata prima di sparire sott’acqua.",
    actions:
      "Morso. Frusta d’alga. Può rallentare o trattenere una creatura.",
    tactics:
      "Si nasconde tra piante acquatiche, blocca il movimento e punta chi resta separato.",
    resistances: "Veleno naturale",
    vulnerabilities: "Fuoco fuori dall’acqua, tagliente pesante",
    combat: {
      attackBonus: "+5",
      damage: "1d8 + 3",
      averageDamage: 7,
      damageType: "perforanti o contundenti",
      damageNote:
        "Morso e fruste d’alga. Utile per bloccare movimenti in laghi, fiumi o paludi profonde.",
    },
  },
  {
    id: "aquatic-006",
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
    id: "aquatic-007",
    name: "Medusa delle Pozze Basse",
    biomes: ["aquatic", "coastal"],
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
    id: "aquatic-008",
    name: "Cavallo Marino da Guerra",
    biomes: ["aquatic", "coastal"],
    difficulty: "Medio",
    cr: "3",
    type: "Bestia",
    role: "Cavalcatura",
    icon: "🐴",
    armorClass: 15,
    hitPoints: 88,
    speed: "nuoto 60 ft.",
    tags: ["Cavalcatura", "Carica", "Acqua"],
    description:
      "Grande creatura acquatica addestrata da popoli marini, forte abbastanza da portare un cavaliere corazzato sott’acqua.",
    story:
      "Le sue briglie sono spesso decorate con conchiglie e ossa di mostri marini abbattuti.",
    actions:
      "Testata. Carica acquatica. Può spingere una creatura indietro se prende velocità.",
    tactics:
      "Usato in carica da cavalieri acquatici. Da solo cerca di allontanare il pericolo dal branco.",
    resistances: "Freddo naturale",
    vulnerabilities: "Fulmine, reti pesanti",
    combat: {
      attackBonus: "+6",
      damage: "2d8 + 3",
      averageDamage: 12,
      damageType: "contundenti",
      damageNote:
        "Carica acquatica. Molto più efficace se usato con un cavaliere o in campo aperto subacqueo.",
    },
  },
  {
    id: "aquatic-009",
    name: "Idra Nera Minore",
    biomes: ["aquatic", "swamp"],
    difficulty: "Difficile",
    cr: "6",
    type: "Mostruosità",
    role: "Multiattacco",
    icon: "🐍",
    image: "/monsters/08-idra-nera-minore.png",
    armorClass: 15,
    hitPoints: 155,
    speed: "30 ft., nuoto 30 ft.",
    tags: ["Idra", "Acido", "Palude"],
    description:
      "Giovane idra dalle scaglie scure e viscide. Le sue teste litigano tra loro, ma attaccano con ferocia coordinata.",
    story:
      "Nata in acque contaminate da magie antiche, cresce divorando pesci, coccodrilli e viandanti imprudenti.",
    actions:
      "Morsi multipli. Sputo acido a ricarica. Se una testa viene distrutta senza cautela, la creatura può diventare ancora più pericolosa.",
    tactics:
      "Occupa passaggi stretti, attacca più bersagli e costringe il gruppo a dividersi.",
    resistances: "Acido",
    vulnerabilities: "Fuoco concentrato",
    combat: {
      attackBonus: "+8",
      damage: "1d10 + 5",
      averageDamage: 10,
      damageType: "perforanti",
      damageNote:
        "Morsi multipli e sputo acido. Il danno si moltiplica quando può colpire più volte.",
    },
  },
  {
    id: "aquatic-010",
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
    combat: {
      attackBonus: "+8",
      damage: "2d10 + 5",
      averageDamage: 16,
      damageType: "perforanti",
      damageNote:
        "Morso e avvolgimento. Può trattenere e trascinare una creatura verso il basso.",
    },
  },
  {
    id: "aquatic-011",
    name: "Sacerdote degli Abissi",
    biomes: ["aquatic", "coastal", "planar"],
    difficulty: "Difficile",
    cr: "7",
    type: "Umanoide",
    role: "Incantatore",
    icon: "🔱",
    armorClass: 16,
    hitPoints: 135,
    speed: "30 ft., nuoto 40 ft.",
    tags: ["Culto", "Abisso", "Incantatore"],
    description:
      "Predicatore sommerso che serve entità marine antiche. La sua voce arriva ovattata anche fuori dall’acqua.",
    story:
      "Promette protezione da tempeste e naufragi, ma ogni promessa lega il villaggio a qualcosa che dorme sul fondale.",
    actions:
      "Tridente rituale. Invocazione abissale. Può evocare tentacoli d’acqua o imporre paura.",
    tactics:
      "Resta in acqua, usa servitori e cerca di trascinare lo scontro in profondità.",
    resistances: "Freddo, necrotico",
    vulnerabilities: "Radiante, silenzio magico",
    combat: {
      attackBonus: "+8",
      damage: "3d8 + 4",
      averageDamage: 17,
      damageType: "necrotici o perforanti",
      damageNote:
        "Tridente rituale e invocazioni. Pericoloso se protetto da servitori acquatici.",
    },
  },
  {
    id: "aquatic-012",
    name: "Kraken Minore della Baia",
    biomes: ["aquatic", "coastal"],
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
    id: "aquatic-013",
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
    id: "aquatic-014",
    name: "Drago delle Maree Spezzate",
    biomes: ["aquatic", "coastal"],
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
    id: "aquatic-015",
    name: "Abisso che Cammina",
    biomes: ["aquatic", "planar"],
    difficulty: "Boss",
    cr: "22",
    type: "Entità",
    role: "Boss abissale",
    icon: "🌊",
    armorClass: 23,
    hitPoints: 510,
    speed: "nuoto 100 ft.",
    tags: ["Abisso", "Entità", "Boss"],
    description:
      "Entità immensa composta da pressione, oscurità e acqua antica. La sua sagoma appare solo quando è troppo vicina.",
    story:
      "Non è nato nel mare: è il ricordo di un oceano morto su un altro piano, entrato nel mondo attraverso una fossa senza fondo.",
    actions:
      "Pressione abissale. Morso dell’oscurità. Onda gravitazionale. Può schiacciare, trascinare e spegnere la luce.",
    tactics:
      "Controlla profondità e pressione. Costringe il gruppo a combattere contro acqua, buio e panico.",
    resistances: "Freddo, necrotico, veleno, armi non magiche",
    vulnerabilities: "Luce solare pura, fulmine rituale",
    combat: {
      attackBonus: "+15",
      damage: "5d10 + 10",
      averageDamage: 38,
      damageType: "contundenti e necrotici",
      damageNote:
        "Pressione abissale e onde gravitazionali. Boss da finale subacqueo o portale planare sommerso.",
    },
  },
];