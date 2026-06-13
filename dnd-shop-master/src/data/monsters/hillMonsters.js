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
    combat: {
      attackBonus: "+4",
      damage: "1d4 + 2",
      averageDamage: 4,
      damageType: "perforanti",
      damageNote:
        "Pugnale o fionda. La vera minaccia sono trappole e terreno preparato.",
    },
  },
  {
    id: "hill-002",
    name: "Iena delle Rocce",
    biomes: ["hill", "grassland", "desert"],
    difficulty: "Semplice",
    cr: "1/4",
    type: "Bestia",
    role: "Branco",
    icon: "🐕",
    armorClass: 12,
    hitPoints: 14,
    speed: "50 ft.",
    tags: ["Branco", "Predatore", "Colline"],
    description:
      "Predatore magro e nervoso che vive tra rocce basse, tane abbandonate e vecchie strade.",
    story:
      "Seguono carovane, eserciti e mandrie malate. Quando ridono nella notte, spesso qualcuno è già rimasto indietro.",
    actions:
      "Morso. Diventa più pericolosa se un alleato è vicino al bersaglio.",
    tactics:
      "Attacca in gruppo, punta creature cadute e fugge se il branco viene disperso.",
    resistances: "Nessuna",
    vulnerabilities: "Fuoco, rumori forti",
    combat: {
      attackBonus: "+4",
      damage: "1d6 + 2",
      averageDamage: 5,
      damageType: "perforanti",
      damageNote:
        "Morso in branco. Più efficace contro bersagli caduti o circondati.",
    },
  },
  {
    id: "hill-003",
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
    combat: {
      attackBonus: "+5",
      damage: "1d8 + 3",
      averageDamage: 7,
      damageType: "perforanti o taglienti",
      damageNote:
        "Arco corto e lama. Attacca dall’alto e tenta la fuga se perde vantaggio.",
    },
  },
  {
    id: "hill-004",
    name: "Lupo delle Alture",
    biomes: ["hill", "forest", "mountain"],
    difficulty: "Facile",
    cr: "1",
    type: "Bestia",
    role: "Predatore",
    icon: "🐺",
    armorClass: 13,
    hitPoints: 36,
    speed: "40 ft.",
    tags: ["Branco", "Caccia", "Alture"],
    description:
      "Lupo robusto, abituato a muoversi tra pendii, cespugli bassi e vecchi muretti a secco.",
    story:
      "Gli allevatori li temono perché non attaccano subito: aspettano che la nebbia salga dalle valli.",
    actions:
      "Morso. Se combatte con altri lupi, può buttare a terra il bersaglio.",
    tactics:
      "Circonda, taglia vie di fuga e spinge le prede verso rocce o pendii.",
    resistances: "Freddo leggero",
    vulnerabilities: "Fuoco, rumori metallici intensi",
    combat: {
      attackBonus: "+5",
      damage: "1d8 + 3",
      averageDamage: 7,
      damageType: "perforanti",
      damageNote:
        "Morso coordinato. In branco può buttare a terra e isolare i personaggi.",
    },
  },
  {
    id: "hill-005",
    name: "Capra delle Rupi Crudeli",
    biomes: ["hill", "mountain"],
    difficulty: "Facile",
    cr: "1",
    type: "Bestia",
    role: "Carica",
    icon: "🐐",
    armorClass: 13,
    hitPoints: 40,
    speed: "40 ft., scalata 20 ft.",
    tags: ["Carica", "Rupe", "Territoriale"],
    description:
      "Capra enorme e aggressiva, con corna rovinate da anni di scontri sulle rocce.",
    story:
      "Molti viaggiatori sopravvivono ai mostri, ma muoiono per una cornata presa vicino a un burrone.",
    actions:
      "Cornata. Se prende rincorsa, può spingere o buttare a terra il bersaglio.",
    tactics:
      "Carica vicino a burroni, ponti naturali e pendii instabili.",
    resistances: "Freddo naturale",
    vulnerabilities: "Tuono, terreno fangoso",
    combat: {
      attackBonus: "+5",
      damage: "1d8 + 3",
      averageDamage: 7,
      damageType: "contundenti",
      damageNote:
        "Cornata in carica. Il vero pericolo è essere spinti vicino a un precipizio.",
    },
  },
  {
    id: "hill-006",
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
    combat: {
      attackBonus: "+7",
      damage: "2d8 + 5",
      averageDamage: 14,
      damageType: "contundenti",
      damageNote:
        "Clava di pietra e rocce scagliate. Usa pendii e massi come armi.",
    },
  },
  {
    id: "hill-007",
    name: "Cinghiale Zannaspezzate",
    biomes: ["hill", "forest", "grassland"],
    difficulty: "Medio",
    cr: "3",
    type: "Bestia",
    role: "Carica",
    icon: "🐗",
    armorClass: 15,
    hitPoints: 78,
    speed: "40 ft.",
    tags: ["Carica", "Territoriale", "Bestia"],
    description:
      "Cinghiale enorme, coperto di fango secco e vecchie cicatrici. Le sue zanne sono spezzate ma ancora letali.",
    story:
      "Quando un campo viene trovato arato da solchi profondi e sangue secco, spesso non è passato un esercito: è passato lui.",
    actions:
      "Zannata. Se prende rincorsa, infligge danni extra e può buttare a terra il bersaglio.",
    tactics:
      "Carica in linea retta, difende il branco e non arretra finché non viene ferito gravemente.",
    resistances: "Paura leggera",
    vulnerabilities: "Fuoco, terreno scivoloso",
    combat: {
      attackBonus: "+6",
      damage: "2d8 + 4",
      averageDamage: 13,
      damageType: "perforanti",
      damageNote:
        "Zannata in carica. Se ha spazio per correre, può buttare a terra il bersaglio.",
    },
  },
  {
    id: "hill-008",
    name: "Sciamano dei Cerchi di Pietra",
    biomes: ["hill", "forest"],
    difficulty: "Medio",
    cr: "4",
    type: "Umanoide",
    role: "Incantatore",
    icon: "🪬",
    armorClass: 14,
    hitPoints: 86,
    speed: "30 ft.",
    tags: ["Sciamano", "Pietre", "Rituale"],
    description:
      "Mistico delle alture che legge vento, ossa e crepe nelle pietre antiche.",
    story:
      "Alcuni proteggono i villaggi. Altri parlano con cose sepolte sotto i cerchi di pietra e ne eseguono la volontà.",
    actions:
      "Bastone rituale. Vincolo di pietra. Può rallentare, spingere o confondere una creatura.",
    tactics:
      "Resta vicino a pietre rituali, usa copertura e lascia che bruti o animali tengano il fronte.",
    resistances: "Psichico leggero",
    vulnerabilities: "Silenzio magico, rottura del cerchio rituale",
    combat: {
      attackBonus: "+6",
      damage: "3d6 + 4",
      averageDamage: 14,
      damageType: "psichici o contundenti",
      damageNote:
        "Vincoli rituali e bastone. Più utile per controllo e supporto che per danno puro.",
    },
  },
  {
    id: "hill-009",
    name: "Manticora delle Fronde",
    biomes: ["hill", "forest", "mountain"],
    difficulty: "Medio",
    cr: "4",
    type: "Mostruosità",
    role: "Assalitore volante",
    icon: "🦁",
    armorClass: 14,
    hitPoints: 100,
    speed: "30 ft., volo 50 ft.",
    tags: ["Volante", "Spine", "Predatore"],
    description:
      "Mostro leonino con ali scure e coda irta di spine velenose, abituato a cacciare sopra alberi bassi e rupi.",
    story:
      "Le tribù di confine appendono campanelli agli alberi per sentire il vento cambiato dal suo volo.",
    actions:
      "Artigli e morso. Spine caudali a distanza. Può restare fuori portata e logorare il gruppo.",
    tactics:
      "Attacca dall’alto, punta incantatori e arcieri, poi si allontana tra alberi e rocce.",
    resistances: "Caduta, vento naturale",
    vulnerabilities: "Fulmine, reti, spazi chiusi",
    combat: {
      attackBonus: "+6",
      damage: "1d8 + 4 / 1d10 + 4",
      averageDamage: 19,
      damageType: "taglienti e perforanti",
      damageNote:
        "Artigli, morso e spine caudali. Preferisce colpire dall’alto e da distanza.",
    },
  },
  {
    id: "hill-010",
    name: "Troll delle Colline Cave",
    biomes: ["hill", "mountain"],
    difficulty: "Difficile",
    cr: "6",
    type: "Gigante",
    role: "Rigeneratore",
    icon: "🧌",
    armorClass: 16,
    hitPoints: 155,
    speed: "30 ft.",
    tags: ["Troll", "Rigenerazione", "Caverna"],
    description:
      "Troll che vive in colline scavate da vecchie tane. La sua pelle è dura, coperta di terra e radici morte.",
    story:
      "Si dice che alcune colline siano cave non per natura, ma perché il troll ha divorato tutto ciò che c’era dentro.",
    actions:
      "Artigli terrosi. Morso. Può rigenerare se non viene colpito da fuoco o acido.",
    tactics:
      "Blocca passaggi, trascina creature nelle tane e torna in combattimento dopo essersi rigenerato.",
    resistances: "Veleno, freddo",
    vulnerabilities: "Fuoco, acido",
    combat: {
      attackBonus: "+8",
      damage: "2d8 + 5",
      averageDamage: 14,
      damageType: "taglienti",
      damageNote:
        "Artigli e morso. Rigenera se non viene contrastato con fuoco o acido.",
    },
  },
  {
    id: "hill-011",
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
    combat: {
      attackBonus: "+8",
      damage: "2d6 + 5 + 2d6 fuoco",
      averageDamage: 19,
      damageType: "taglienti e fuoco",
      damageNote:
        "Morso, corna, artigli e soffio infuocato. Minaccia mobile e aggressiva.",
    },
  },
  {
    id: "hill-012",
    name: "Viverna delle Rocce Rosse",
    biomes: ["hill", "mountain", "desert"],
    difficulty: "Difficile",
    cr: "8",
    type: "Dragoide",
    role: "Predatore volante",
    icon: "🐉",
    armorClass: 17,
    hitPoints: 168,
    speed: "30 ft., volo 80 ft.",
    tags: ["Veleno", "Volante", "Rupe"],
    description:
      "Creatura draconica minore che nidifica su rocce rossastre e attacca dall’alto con un pungiglione velenoso.",
    story:
      "Le vecchie torri sulle colline spesso non sono abbandonate: sono diventate nidi.",
    actions:
      "Morso. Artigli. Pungiglione velenoso. Può afferrare e lasciare cadere creature leggere.",
    tactics:
      "Colpisce in picchiata, avvelena, poi resta in volo finché la preda si indebolisce.",
    resistances: "Veleno leggero",
    vulnerabilities: "Fulmine, ali ferite",
    combat: {
      attackBonus: "+9",
      damage: "2d10 + 5 + 3d6 veleno",
      averageDamage: 26,
      damageType: "perforanti e veleno",
      damageNote:
        "Pungiglione velenoso e picchiata. Fortissima se può usare altezza e cadute.",
    },
  },
  {
    id: "hill-013",
    name: "Gigante delle Alture Spezzate",
    biomes: ["hill", "mountain"],
    difficulty: "Estremo",
    cr: "10",
    type: "Gigante",
    role: "Bruto ambientale",
    icon: "🪨",
    armorClass: 17,
    hitPoints: 240,
    speed: "40 ft.",
    tags: ["Gigante", "Rocce", "Bruto"],
    description:
      "Gigante massiccio che indossa lastre di pietra come armatura e usa tronchi interi come armi.",
    story:
      "Considera le colline il proprio gregge. Sposta massi come un pastore sposta pecore.",
    actions:
      "Tronco colossale. Masso scagliato. Può creare frane minori o distruggere coperture.",
    tactics:
      "Combatte da distanza con massi, poi chiude la mischia quando il gruppo è già diviso.",
    resistances: "Contundente non magico",
    vulnerabilities: "Fulmine, terreno instabile preparato",
    combat: {
      attackBonus: "+10",
      damage: "3d10 + 7",
      averageDamage: 24,
      damageType: "contundenti",
      damageNote:
        "Massi e tronchi. Molto forte in scenari con pendii, frane e coperture distruttibili.",
    },
  },
  {
    id: "hill-014",
    name: "Re dei Tumuli Antichi",
    biomes: ["hill", "ruins"],
    difficulty: "Estremo",
    cr: "12",
    type: "Non morto",
    role: "Boss sepolcrale",
    icon: "👑",
    armorClass: 18,
    hitPoints: 250,
    speed: "30 ft.",
    tags: ["Non morto", "Tumulo", "Re"],
    description:
      "Sovrano morto sepolto sotto una collina sacra, ancora avvolto in armatura verde di rame e terra.",
    story:
      "Fu sepolto con guerrieri, cavalli e promesse. Quando i tumuli vengono profanati, quelle promesse si risvegliano con lui.",
    actions:
      "Lama del tumulo. Comando dei morti. Può evocare antichi guerrieri o far tremare la collina.",
    tactics:
      "Combatte vicino alla propria tomba, usa servitori e punisce chi porta via reliquie.",
    resistances: "Necrotico, veleno, armi non magiche",
    vulnerabilities: "Radiante, restituzione del corredo funebre",
    combat: {
      attackBonus: "+11",
      damage: "4d10 + 6",
      averageDamage: 28,
      damageType: "taglienti e necrotici",
      damageNote:
        "Lama del tumulo e comando dei morti. Boss perfetto per colline sacre e tombe antiche.",
    },
  },
  {
    id: "hill-015",
    name: "Serpe della Collina Dormiente",
    biomes: ["hill", "planar"],
    difficulty: "Boss",
    cr: "16",
    type: "Entità",
    role: "Boss mitico",
    icon: "🐍",
    armorClass: 21,
    hitPoints: 350,
    speed: "40 ft., scavare 40 ft.",
    tags: ["Serpe", "Mitico", "Terra"],
    description:
      "Creatura immensa arrotolata sotto una catena di colline. Quando si muove, il paesaggio cambia forma.",
    story:
      "Le colline non sono colline: sono le spire visibili della creatura addormentata. I villaggi sopra di lei pregano ogni anno che continui a dormire.",
    actions:
      "Morso tellurico. Stretta della terra. Può creare fratture, rialzare rocce e inghiottire parte del campo.",
    tactics:
      "Non insegue: trasforma il terreno, divide il gruppo e punisce chi resta vicino alle fratture.",
    resistances: "Contundente, veleno, armi non magiche",
    vulnerabilities: "Tuono rituale, nomi antichi pronunciati correttamente",
    combat: {
      attackBonus: "+13",
      damage: "5d10 + 8",
      averageDamage: 35,
      damageType: "contundenti e forza",
      damageNote:
        "Morso tellurico e fratture. Boss mitico per campagne legate a colline sacre o terre vive.",
    },
  },
];