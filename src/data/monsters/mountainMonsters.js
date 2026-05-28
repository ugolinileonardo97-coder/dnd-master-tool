export const mountainMonsters = [
  {
    id: "mountain-001",
    name: "Capra delle Rupi Crudeli",
    biomes: ["mountain", "hill"],
    difficulty: "Semplice",
    cr: "1/4",
    type: "Bestia",
    role: "Carica",
    icon: "🐐",
    armorClass: 12,
    hitPoints: 16,
    speed: "40 ft., scalata 20 ft.",
    tags: ["Rupe", "Carica", "Bestia"],
    description:
      "Capra montana aggressiva, con corna consumate dalla roccia e occhi gialli sempre vigili.",
    story:
      "I pastori sanno che non è il lupo il primo pericolo dei passi alti, ma una capra spaventata che carica sul bordo di un dirupo.",
    actions:
      "Cornata. Se prende rincorsa, può spingere o buttare a terra il bersaglio.",
    tactics:
      "Carica vicino a burroni, ponti naturali e pendii instabili.",
    resistances: "Freddo naturale",
    vulnerabilities: "Tuono, terreno fangoso",
    combat: {
      attackBonus: "+4",
      damage: "1d6 + 2",
      averageDamage: 5,
      damageType: "contundenti",
      damageNote:
        "Cornata in carica. Il vero pericolo è essere spinti vicino a un precipizio.",
    },
  },
  {
    id: "mountain-002",
    name: "Kobold delle Miniere Alte",
    biomes: ["mountain", "hill", "ruins"],
    difficulty: "Semplice",
    cr: "1/4",
    type: "Umanoide",
    role: "Trappolatore",
    icon: "⛏️",
    armorClass: 13,
    hitPoints: 10,
    speed: "30 ft.",
    tags: ["Kobold", "Trappole", "Miniera"],
    description:
      "Piccolo umanoide astuto che vive in vecchie miniere e tunnel scavati sotto i passi montani.",
    story:
      "Non possiede grandi tesori, ma sa dove cederebbe il soffitto con un colpo ben piazzato.",
    actions:
      "Pugnale. Fionda. Può attivare trappole di pietra, corde o carrelli minerari.",
    tactics:
      "Non combatte frontalmente. Attira gli intrusi verso crolli, buche e passaggi troppo stretti.",
    resistances: "Nessuna",
    vulnerabilities: "Luce intensa, paura",
    combat: {
      attackBonus: "+4",
      damage: "1d4 + 2",
      averageDamage: 4,
      damageType: "perforanti",
      damageNote:
        "Pugnale o fionda. La vera minaccia sono trappole, crolli e imboscate.",
    },
  },
  {
    id: "mountain-003",
    name: "Aquila Rocciosa Gigante",
    biomes: ["mountain", "grassland"],
    difficulty: "Facile",
    cr: "1",
    type: "Bestia",
    role: "Predatore volante",
    icon: "🦅",
    armorClass: 13,
    hitPoints: 38,
    speed: "10 ft., volo 80 ft.",
    tags: ["Volante", "Rupe", "Rapimento"],
    description:
      "Grande rapace che nidifica su pareti impossibili. La sua ombra passa sulle rocce prima del suo grido.",
    story:
      "Le tribù di montagna lasciano ossa dipinte sui sentieri per indicare i territori di caccia delle aquile giganti.",
    actions:
      "Artigli. Becco. Può afferrare creature piccole o isolate.",
    tactics:
      "Colpisce dall’alto, afferra e tenta di portare la preda verso il nido.",
    resistances: "Vento naturale",
    vulnerabilities: "Fulmine, ali ferite",
    combat: {
      attackBonus: "+5",
      damage: "1d8 + 3",
      averageDamage: 7,
      damageType: "taglienti",
      damageNote:
        "Artigli in picchiata. Può afferrare bersagli piccoli o già feriti.",
    },
  },
  {
    id: "mountain-004",
    name: "Brigante del Passo Gelato",
    biomes: ["mountain", "hill"],
    difficulty: "Facile",
    cr: "1",
    type: "Umanoide",
    role: "Predone",
    icon: "🏹",
    armorClass: 14,
    hitPoints: 34,
    speed: "30 ft.",
    tags: ["Bandito", "Passo", "Imboscata"],
    description:
      "Predone abituato ad assaltare carovane nei punti dove la strada si stringe tra roccia e neve.",
    story:
      "Lascia bandierine rosse sui picchi per indicare ai complici quando una carovana è troppo carica per fuggire.",
    actions:
      "Arco corto. Ascia leggera. Può far rotolare pietre o tagliare corde.",
    tactics:
      "Attacca dall’alto, prende di mira animali da soma e fugge se perde il vantaggio del terreno.",
    resistances: "Freddo leggero",
    vulnerabilities: "Cavalleria, magia del vento",
    combat: {
      attackBonus: "+5",
      damage: "1d8 + 3",
      averageDamage: 7,
      damageType: "perforanti o taglienti",
      damageNote:
        "Arco o ascia. Usa altezza e pietre cadenti per rendere l’incontro più pericoloso.",
    },
  },
  {
    id: "mountain-005",
    name: "Orco Spezzascudi",
    biomes: ["mountain", "hill", "ruins"],
    difficulty: "Facile",
    cr: "2",
    type: "Umanoide",
    role: "Bruto",
    icon: "🪓",
    image: "/monsters/04-orco-spezzascudi.png",
    armorClass: 15,
    hitPoints: 68,
    speed: "30 ft.",
    tags: ["Orco", "Assalto", "Bruto"],
    description:
      "Orco addestrato a rompere linee nemiche, porte e scudi. La sua ascia è più un attrezzo da demolizione che un’arma.",
    story:
      "Gli Spezzascudi vengono mandati per primi nelle cariche tribali. Sopravvivere a tre assalti significa guadagnare rispetto.",
    actions:
      "Ascia frantumante. Se colpisce un bersaglio con scudo, può sbilanciarlo o ridurre la sua difesa temporaneamente.",
    tactics:
      "Carica il fronte, punta il difensore più pesante e apre spazio agli alleati.",
    resistances: "Paura",
    vulnerabilities: "Magia mentale",
    combat: {
      attackBonus: "+6",
      damage: "1d12 + 6",
      averageDamage: 13,
      damageType: "taglienti",
      damageNote:
        "Ascia frantumante. Ottimo contro bersagli con scudo o armatura.",
    },
  },
  {
    id: "mountain-006",
    name: "Ogre Spaccamassi",
    biomes: ["mountain", "hill"],
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
      "Ogre massiccio che usa pietre grezze come armi e considera le gole montane il proprio territorio.",
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
    id: "mountain-007",
    name: "Grifone del Nido Spezzato",
    biomes: ["mountain", "grassland"],
    difficulty: "Medio",
    cr: "4",
    type: "Mostruosità",
    role: "Assalitore volante",
    icon: "🦅",
    armorClass: 15,
    hitPoints: 110,
    speed: "30 ft., volo 80 ft.",
    tags: ["Volante", "Nido", "Predatore"],
    description:
      "Creatura maestosa e feroce, metà rapace e metà leone, resa aggressiva dalla perdita del proprio nido.",
    story:
      "Quando un grifone perde le uova, ogni cavallo, mulo o viaggiatore sul passo diventa potenziale colpevole.",
    actions:
      "Becco e artigli. Picchiata. Può afferrare e sollevare creature medie o inferiori.",
    tactics:
      "Attacca cavalcature, separa il gruppo e sfrutta l’altezza per restare fuori portata.",
    resistances: "Vento, caduta",
    vulnerabilities: "Fulmine, reti pesanti",
    combat: {
      attackBonus: "+7",
      damage: "2d8 + 5",
      averageDamage: 14,
      damageType: "taglienti",
      damageNote:
        "Becco, artigli e picchiata. Molto efficace contro cavalcature e bersagli isolati.",
    },
  },
  {
    id: "mountain-008",
    name: "Chimera dei Tre Dirupi",
    biomes: ["mountain", "hill"],
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
    id: "mountain-009",
    name: "Drago Giovane di Cenere",
    biomes: ["mountain", "desert", "ruins"],
    difficulty: "Difficile",
    cr: "7",
    type: "Drago",
    role: "Assalitore",
    icon: "🐉",
    image: "/monsters/09-drago-giovane-cenere.png",
    armorClass: 17,
    hitPoints: 178,
    speed: "40 ft., volo 80 ft.",
    tags: ["Drago", "Fuoco", "Cenere"],
    description:
      "Drago giovane nato tra vulcani spenti e campi bruciati. Le ali sollevano nuvole di cenere soffocante.",
    story:
      "Non custodisce oro, ma resti carbonizzati: armi fuse, corone annerite e ossa fragili come carbone.",
    actions:
      "Morso e artigli. Soffio di cenere a ricarica, con danni da fuoco e possibile accecamento.",
    tactics:
      "Vola, separa il gruppo con il soffio e atterra solo quando ha un bersaglio isolato.",
    resistances: "Fuoco",
    vulnerabilities: "Freddo",
    combat: {
      attackBonus: "+8",
      damage: "2d10 + 5",
      averageDamage: 16,
      damageType: "perforanti o fuoco",
      damageNote: "Morso, artigli e soffio di cenere a ricarica.",
    },
  },
  {
    id: "mountain-010",
    name: "Gigante del Gelo Esiliato",
    biomes: ["mountain", "arctic"],
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
    id: "mountain-011",
    name: "Demone della Forgia",
    biomes: ["mountain", "planar", "ruins"],
    difficulty: "Estremo",
    cr: "11",
    type: "Immondo",
    role: "Bruto magico",
    icon: "🔥",
    image: "/monsters/13-demone-forgia.png",
    armorClass: 18,
    hitPoints: 230,
    speed: "30 ft.",
    tags: ["Demone", "Fuoco", "Forgia"],
    description:
      "Demone nato nel cuore di una fucina infernale. Pelle di ferro scuro, vene di lava e scorie.",
    story:
      "Forgiava catene per anime ribelli. Ora cerca metalli rari, cuori coraggiosi e armi leggendarie da spezzare.",
    actions:
      "Martello infernale. Soffio di scorie. Danni contundenti e fuoco.",
    tactics:
      "Distrugge armi, punta chi porta oggetti magici e combatte vicino a fuoco o metallo fuso.",
    resistances: "Fuoco, veleno, armi non magiche",
    vulnerabilities: "Freddo sacro",
    combat: {
      attackBonus: "+10",
      damage: "2d8 + 6 + 2d6 fuoco",
      averageDamage: 22,
      damageType: "contundenti e fuoco",
      damageNote: "Martello infernale e soffio di scorie.",
    },
  },
  {
    id: "mountain-012",
    name: "Titano delle Catene",
    biomes: ["mountain", "planar", "ruins"],
    difficulty: "Estremo",
    cr: "16",
    type: "Gigante",
    role: "Controllo",
    icon: "⛓️",
    image: "/monsters/16-titano-catene.png",
    armorClass: 19,
    hitPoints: 330,
    speed: "40 ft.",
    tags: ["Titano", "Gigante", "Catene"],
    description:
      "Colosso coperto da catene antiche, ognuna incisa con il nome di un prigioniero dimenticato.",
    story:
      "Un tempo sorvegliava porte divine. Quando gli dei caddero in guerra, rimase incatenato al proprio dovere fino a impazzire.",
    actions:
      "Catena colossale. Portata lunga, danni contundenti e possibilità di afferrare il bersaglio.",
    tactics:
      "Tiene lontani i combattenti, afferra i fragili e usa l’ambiente come arma.",
    resistances: "Tuono, contundente non magico",
    vulnerabilities: "Fulmine divino",
    combat: {
      attackBonus: "+13",
      damage: "3d12 + 8",
      averageDamage: 27,
      damageType: "contundenti",
      damageNote: "Catena colossale. Portata lunga e possibilità di afferrare.",
    },
  },
  {
    id: "mountain-013",
    name: "Drago Cremisi Adulto",
    biomes: ["mountain", "desert"],
    difficulty: "Boss",
    cr: "13",
    type: "Drago",
    role: "Boss territoriale",
    icon: "🐉",
    image: "/monsters/14-drago-cremisi-adulto.png",
    armorClass: 19,
    hitPoints: 280,
    speed: "40 ft., volo 80 ft.",
    tags: ["Drago", "Fuoco", "Adulto"],
    description:
      "Drago adulto dalle scaglie rosso scuro e dalle corna annerite. Ogni suo respiro porta odore di pietra fusa.",
    story:
      "Ha conquistato montagne, città e culti. Non accumula solo oro: pretende giuramenti, statue e nomi cancellati dalla storia.",
    actions:
      "Multiattacco. Morso e due artigli. Soffio cremisi a ricarica.",
    tactics:
      "Domina dall’alto, brucia coperture e costringe il gruppo a dividersi.",
    resistances: "Fuoco",
    vulnerabilities: "Freddo",
    combat: {
      attackBonus: "+11",
      damage: "2d10 + 6 + 2d8 fuoco",
      averageDamage: 26,
      damageType: "perforanti e fuoco",
      damageNote:
        "Multiattacco e soffio cremisi. Boss classico da vulcano o montagna.",
    },
  },
  {
    id: "mountain-014",
    name: "Drago Antico d’Ossidiana",
    biomes: ["mountain", "ruins", "planar"],
    difficulty: "Boss",
    cr: "20",
    type: "Drago",
    role: "Boss finale",
    icon: "🐉",
    image: "/monsters/19-drago-antico-ossidiana.png",
    armorClass: 22,
    hitPoints: 430,
    speed: "40 ft., volo 80 ft.",
    tags: ["Drago", "Ossidiana", "Antico"],
    description:
      "Drago dalle scaglie nere e lucide come vetro vulcanico. Riflette fiamme, volti e paure sulla propria corazza.",
    story:
      "Dorme sotto montagne morte, circondato da statue fuse. I suoi tesori sono imperi falliti e profezie mai compiute.",
    actions:
      "Multiattacco antico. Morso, artigli e coda. Soffio d’ossidiana con fuoco e schegge taglienti.",
    tactics:
      "Controlla il campo, distrugge coperture e costringe il gruppo a muoversi.",
    resistances: "Fuoco, tagliente, perforante",
    vulnerabilities: "Freddo antico",
    combat: {
      attackBonus: "+14",
      damage: "2d10 + 8 + 2d8 fuoco",
      averageDamage: 28,
      damageType: "perforanti e fuoco",
      damageNote:
        "Multiattacco antico e soffio d’ossidiana. Incontro da fine arco narrativo.",
    },
  },
  {
    id: "mountain-015",
    name: "Cuore della Montagna Caduta",
    biomes: ["mountain", "planar"],
    difficulty: "Boss",
    cr: "22",
    type: "Elementale",
    role: "Boss ambientale",
    icon: "🌋",
    armorClass: 23,
    hitPoints: 500,
    speed: "30 ft., scavare 30 ft.",
    tags: ["Elementale", "Vulcano", "Boss"],
    description:
      "Entità immensa di pietra, magma e pressione sotterranea. Non cammina: la montagna si muove con lei.",
    story:
      "Nacque quando un dio o un titano cadde dentro un vulcano e il mondo cercò di richiudersi sopra il suo cuore.",
    actions:
      "Pugno lavico. Frattura del terreno. Eruzione minore. Può trasformare il campo in una zona instabile.",
    tactics:
      "Non rincorre: altera il terreno, crea fratture, separa il gruppo e costringe a scegliere dove stare.",
    resistances: "Fuoco, veleno, contundente, perforante",
    vulnerabilities: "Freddo primordiale, rituali tellurici",
    combat: {
      attackBonus: "+15",
      damage: "5d10 + 10",
      averageDamage: 38,
      damageType: "contundenti e fuoco",
      damageNote:
        "Pugno lavico, fratture e ondate di magma. Boss ambientale da finale in vulcano o montagna sacra.",
    },
  },
];