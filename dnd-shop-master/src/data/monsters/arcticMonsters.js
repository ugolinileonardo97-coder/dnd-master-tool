export const arcticMonsters = [
  {
    id: "arctic-001",
    name: "Volpe della Neve Spettrale",
    biomes: ["arctic", "mountain"],
    difficulty: "Semplice",
    cr: "1/4",
    type: "Bestia",
    role: "Furtivo",
    icon: "🦊",
    armorClass: 13,
    hitPoints: 12,
    speed: "40 ft.",
    tags: ["Neve", "Furtivo", "Esploratore"],
    description:
      "Piccola volpe dal pelo bianco-azzurro, quasi invisibile durante le nevicate. I suoi occhi brillano come ghiaccio sotto la luna.",
    story:
      "I cacciatori artici dicono che seguirla porta a due cose: una fonte calda nascosta o una morte silenziosa.",
    actions:
      "Morso rapido. Può disimpegnarsi e nascondersi con facilità tra neve e rocce.",
    tactics:
      "Non combatte frontalmente. Attira, distrae e conduce il gruppo verso predatori più grandi.",
    resistances: "Freddo naturale",
    vulnerabilities: "Fuoco, fame estrema",
    combat: {
      attackBonus: "+4",
      damage: "1d4 + 2",
      averageDamage: 4,
      damageType: "perforanti",
      damageNote:
        "Morso rapido. Più utile come creatura da esplorazione o esca naturale che come minaccia diretta.",
    },
  },
  {
    id: "arctic-002",
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
    combat: {
      attackBonus: "+5",
      damage: "1d8 + 3",
      averageDamage: 7,
      damageType: "perforanti e freddo",
      damageNote:
        "Morso gelido. In branco può buttare a terra il bersaglio e circondarlo.",
    },
  },
  {
    id: "arctic-003",
    name: "Scheletro Congelato",
    biomes: ["arctic", "ruins"],
    difficulty: "Facile",
    cr: "1",
    type: "Non morto",
    role: "Guardia",
    icon: "💀",
    armorClass: 14,
    hitPoints: 38,
    speed: "30 ft.",
    tags: ["Non morto", "Freddo", "Rovina"],
    description:
      "Resti animati coperti di ghiaccio e brandelli di pelliccia. Ogni movimento produce un suono fragile, come vetro che si spezza.",
    story:
      "Molti erano esploratori, soldati o pellegrini morti durante traversate impossibili. Qualcosa nel gelo ha impedito loro di riposare.",
    actions:
      "Lama gelata. Arco incrinato. Può rallentare leggermente una creatura colpita dal freddo.",
    tactics:
      "Tiene posizioni difensive tra rovine ghiacciate, ponti di neve e ingressi sepolti.",
    resistances: "Freddo, veleno",
    vulnerabilities: "Contundente, fuoco",
    combat: {
      attackBonus: "+4",
      damage: "1d8 + 2",
      averageDamage: 6,
      damageType: "taglienti e freddo",
      damageNote:
        "Lama gelata o arco incrinato. Buono come guardia di tombe e forti sepolti.",
    },
  },
  {
    id: "arctic-004",
    name: "Orso Bianco Affamato",
    biomes: ["arctic"],
    difficulty: "Facile",
    cr: "2",
    type: "Bestia",
    role: "Bruto",
    icon: "🐻‍❄️",
    armorClass: 13,
    hitPoints: 70,
    speed: "40 ft., nuoto 30 ft.",
    tags: ["Bestia", "Freddo", "Predatore"],
    description:
      "Grande orso bianco magro e feroce, spinto dalla fame oltre la normale prudenza.",
    story:
      "Quando il ghiaccio si rompe troppo presto, questi predatori iniziano a seguire villaggi e accampamenti.",
    actions:
      "Morso e artigli. Se ferito o affamato, continua a combattere finché può muoversi.",
    tactics:
      "Carica frontalmente, punta creature isolate e tenta di trascinare la preda nella neve profonda.",
    resistances: "Freddo",
    vulnerabilities: "Fuoco, rumori metallici intensi",
    combat: {
      attackBonus: "+6",
      damage: "2d6 + 4",
      averageDamage: 11,
      damageType: "taglienti e perforanti",
      damageNote:
        "Morso e artigli. Minaccia semplice ma brutale, ideale per viaggi artici.",
    },
  },
  {
    id: "arctic-005",
    name: "Cacciatore delle Zanne Bianche",
    biomes: ["arctic"],
    difficulty: "Facile",
    cr: "2",
    type: "Umanoide",
    role: "Cacciatore",
    icon: "🏹",
    armorClass: 14,
    hitPoints: 52,
    speed: "30 ft.",
    tags: ["Cacciatore", "Neve", "Imboscata"],
    description:
      "Guerriero tribale avvolto in pellicce, armato di lancia d’osso, arco corto e coltelli ricavati da zanne.",
    story:
      "Non tutti sono ostili. Alcuni difendono terre sacre, altri sono stati spinti alla razzia da fame e gelo.",
    actions:
      "Lancia d’osso. Arco corto. Può piazzare trappole nella neve o inseguire tracce per giorni.",
    tactics:
      "Attacca da copertura, punta provviste e animali da soma, evita combattimenti inutili.",
    resistances: "Freddo naturale",
    vulnerabilities: "Fuoco, diplomazia fallita",
    combat: {
      attackBonus: "+5",
      damage: "1d8 + 3",
      averageDamage: 7,
      damageType: "perforanti",
      damageNote:
        "Lancia o arco corto. Diventa più interessante se usa trappole, neve e inseguimento.",
    },
  },
  {
    id: "arctic-006",
    name: "Elementale della Brina",
    biomes: ["arctic", "planar"],
    difficulty: "Medio",
    cr: "4",
    type: "Elementale",
    role: "Controllo area",
    icon: "🧊",
    armorClass: 15,
    hitPoints: 96,
    speed: "30 ft.",
    tags: ["Elementale", "Freddo", "Controllo"],
    description:
      "Figura semitrasparente fatta di gelo, vento e aghi di ghiaccio. Il terreno congela lentamente dove passa.",
    story:
      "Nasce quando un luogo rimane sotto una tormenta magica per troppo tempo.",
    actions:
      "Tocco gelido. Raffica di brina. Può creare terreno difficile ghiacciato.",
    tactics:
      "Rallenta il gruppo, isola chi cade indietro e protegge aree già pericolose.",
    resistances: "Freddo, veleno",
    vulnerabilities: "Fuoco",
    combat: {
      attackBonus: "+6",
      damage: "2d8 + 4",
      averageDamage: 13,
      damageType: "freddo",
      damageNote:
        "Tocco gelido e raffiche. Ottimo per rendere un campo di battaglia scivoloso e lento.",
    },
  },
  {
    id: "arctic-007",
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
    combat: {
      attackBonus: "+7",
      damage: "2d8 + 5",
      averageDamage: 14,
      damageType: "freddo e contundenti",
      damageNote:
        "Schianto gelido e raffica. Crea terreno difficile intorno a sé.",
    },
  },
  {
    id: "arctic-008",
    name: "Troll della Neve Marcia",
    biomes: ["arctic", "mountain"],
    difficulty: "Difficile",
    cr: "6",
    type: "Gigante",
    role: "Rigeneratore",
    icon: "🧌",
    armorClass: 16,
    hitPoints: 150,
    speed: "30 ft.",
    tags: ["Troll", "Freddo", "Rigenerazione"],
    description:
      "Troll pallido coperto di ghiaccio sporco, licheni e cicatrici annerite. Le sue ferite si richiudono sotto una crosta gelida.",
    story:
      "Le leggende dicono che siano troll morti congelati e poi risvegliati dalla fame.",
    actions:
      "Artigli gelidi. Morso. Rigenera se non viene colpito da fuoco o acido.",
    tactics:
      "Attacca in zone innevate, si ritira nella tormenta e torna rigenerato.",
    resistances: "Freddo, veleno",
    vulnerabilities: "Fuoco, acido",
    combat: {
      attackBonus: "+8",
      damage: "2d8 + 5",
      averageDamage: 14,
      damageType: "taglienti e freddo",
      damageNote:
        "Artigli gelidi e rigenerazione. Richiede fuoco o acido per essere gestito bene.",
    },
  },
  {
    id: "arctic-009",
    name: "Strega Bianca del Crepaccio",
    biomes: ["arctic"],
    difficulty: "Difficile",
    cr: "7",
    type: "Folletto",
    role: "Incantatore",
    icon: "🧙",
    armorClass: 16,
    hitPoints: 135,
    speed: "30 ft.",
    tags: ["Strega", "Freddo", "Illusione"],
    description:
      "Creatura pallida e antica, avvolta in veli ghiacciati. Parla con la voce di amici morti nella neve.",
    story:
      "Aspetta nei crepacci e offre riparo a chi sta morendo di freddo. Il prezzo arriva dopo.",
    actions:
      "Tocco gelido. Illusione della tormenta. Può confondere e separare il gruppo.",
    tactics:
      "Usa visibilità ridotta, illusioni e terreno pericoloso. Raramente combatte da sola.",
    resistances: "Freddo, charme",
    vulnerabilities: "Fuoco, ferro freddo",
    combat: {
      attackBonus: "+8",
      damage: "3d8 + 4",
      averageDamage: 17,
      damageType: "freddo o psichici",
      damageNote:
        "Tocco gelido e illusioni. Minaccia più tattica che puramente fisica.",
    },
  },
  {
    id: "arctic-010",
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
    combat: {
      attackBonus: "+9",
      damage: "3d12 + 6",
      averageDamage: 25,
      damageType: "taglienti o contundenti",
      damageNote:
        "Ascia enorme e rocce scagliate. Può spingere i nemici nella neve profonda.",
    },
  },
  {
    id: "arctic-011",
    name: "Mammut delle Rune Gelate",
    biomes: ["arctic"],
    difficulty: "Difficile",
    cr: "9",
    type: "Bestia",
    role: "Carica colossale",
    icon: "🐘",
    armorClass: 17,
    hitPoints: 210,
    speed: "40 ft.",
    tags: ["Mammut", "Rune", "Carica"],
    description:
      "Mammut gigantesco con zanne incise da rune azzurre. Ogni passo vibra come un tamburo sotto la neve.",
    story:
      "Alcuni clan lo venerano come spirito ancestrale. Altri lo temono come giudice dei cacciatori indegni.",
    actions:
      "Zanne. Travolgere. Può caricare e buttare a terra più creature in linea.",
    tactics:
      "Protegge branchi e luoghi sacri. Usa massa, carica e terreno aperto.",
    resistances: "Freddo, paura",
    vulnerabilities: "Fuoco, magia delle rune infrante",
    combat: {
      attackBonus: "+10",
      damage: "3d10 + 6",
      averageDamage: 23,
      damageType: "perforanti e contundenti",
      damageNote:
        "Zanne e travolgimento. Minaccia devastante in campo aperto innevato.",
    },
  },
  {
    id: "arctic-012",
    name: "Regina dei Ghiacci Vuoti",
    biomes: ["arctic", "planar"],
    difficulty: "Estremo",
    cr: "12",
    type: "Folletto",
    role: "Boss incantatore",
    icon: "👑",
    armorClass: 18,
    hitPoints: 240,
    speed: "30 ft., volo 40 ft.",
    tags: ["Ghiaccio", "Charme", "Boss"],
    description:
      "Sovrana fatata di un regno che appare solo durante le aurore fredde. Il suo sorriso non scalda mai.",
    story:
      "Colleziona promesse non mantenute e lacrime congelate. Chi accetta la sua ospitalità dimentica lentamente il calore.",
    actions:
      "Tocco del gelo vuoto. Comando fatato. Può imprigionare una creatura in cristallo per un breve periodo.",
    tactics:
      "Divide il gruppo, usa charme e crea barriere di ghiaccio per controllare la scena.",
    resistances: "Freddo, charme, psichico",
    vulnerabilities: "Fuoco puro, ferro freddo",
    combat: {
      attackBonus: "+11",
      damage: "4d10 + 6",
      averageDamage: 28,
      damageType: "freddo o psichici",
      damageNote:
        "Tocco del gelo vuoto e controllo. Boss ottimo per fiabe oscure in ambiente artico.",
    },
  },
  {
    id: "arctic-013",
    name: "Drago Bianco Adulto",
    biomes: ["arctic", "mountain"],
    difficulty: "Boss",
    cr: "13",
    type: "Drago",
    role: "Boss territoriale",
    icon: "🐉",
    armorClass: 19,
    hitPoints: 285,
    speed: "40 ft., scavare 30 ft., volo 80 ft.",
    tags: ["Drago", "Freddo", "Adulto"],
    description:
      "Drago feroce e brutale, padrone di ghiacciai, grotte azzurre e canyon pieni di neve.",
    story:
      "Non dimentica odori, voci o ferite. Se una preda fugge oggi, potrebbe essere cacciata per anni.",
    actions:
      "Multiattacco. Morso, artigli e coda. Soffio gelido a ricarica.",
    tactics:
      "Attacca dal cielo, usa neve e ghiaccio come copertura, e trascina il combattimento nella propria tana.",
    resistances: "Freddo",
    vulnerabilities: "Fuoco",
    combat: {
      attackBonus: "+11",
      damage: "2d10 + 6 + 2d8 freddo",
      averageDamage: 26,
      damageType: "perforanti e freddo",
      damageNote:
        "Multiattacco e soffio gelido. Boss classico per ghiacciai e tane artiche.",
    },
  },
  {
    id: "arctic-014",
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
    combat: {
      attackBonus: "+14",
      damage: "2d10 + 8 + 2d8 freddo",
      averageDamage: 28,
      damageType: "perforanti e freddo",
      damageNote:
        "Multiattacco e soffio gelido. Boss antico, adatto a fine campagna o arco artico.",
    },
  },
  {
    id: "arctic-015",
    name: "Cuore dell’Inverno Eterno",
    biomes: ["arctic", "planar"],
    difficulty: "Boss",
    cr: "23",
    type: "Elementale",
    role: "Boss ambientale",
    icon: "❄️",
    armorClass: 24,
    hitPoints: 520,
    speed: "30 ft., volo 40 ft.",
    tags: ["Inverno", "Elementale", "Boss"],
    description:
      "Entità immensa di ghiaccio, vento e silenzio. Non vive nel freddo: è il freddo che decide di avere forma.",
    story:
      "Secondo le leggende, nacque dal primo inverno del mondo e tornerà quando l’ultimo fuoco si spegnerà.",
    actions:
      "Frattura glaciale. Silenzio bianco. Tempesta finale. Può trasformare l’intero campo in una zona letale.",
    tactics:
      "Controlla il terreno, riduce visibilità, spegne fiamme e costringe il gruppo a combattere contro l’ambiente stesso.",
    resistances: "Freddo, veleno, psichico, armi non magiche",
    vulnerabilities: "Fuoco primordiale, sole consacrato",
    combat: {
      attackBonus: "+15",
      damage: "5d10 + 10",
      averageDamage: 38,
      damageType: "freddo e forza",
      damageNote:
        "Frattura glaciale e tempesta finale. Boss ambientale da apocalisse invernale.",
    },
  },
];