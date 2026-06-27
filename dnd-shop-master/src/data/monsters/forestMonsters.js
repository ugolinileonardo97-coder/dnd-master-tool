export const forestMonsters = [
  {
    id: "forest-001",
    name: "Lupo Affamato",
    biomes: ["forest", "grassland", "hill"],
    difficulty: "Semplice",
    cr: "1/4",
    type: "Bestia",
    role: "Predatore",
    icon: "🐺",
    armorClass: 13,
    hitPoints: 11,
    speed: "40 ft.",
    tags: ["Branco", "Caccia", "Notturno"],
    description:
      "Predatore magro e nervoso, abituato a seguire l’odore del sangue tra alberi e sentieri isolati.",
    story:
      "I villaggi ai margini del bosco raccontano che alcuni branchi imparino a riconoscere il suono delle campane e il passo dei bambini.",
    actions:
      "Morso. Attacco in mischia. Se combatte insieme ad altri lupi, cerca di circondare e buttare a terra il bersaglio.",
    tactics:
      "Attacca in branco, isola il personaggio più fragile e si ritira se subisce troppe perdite.",
    resistances: "Nessuna",
    vulnerabilities: "Fuoco, rumori forti, intimidazione animale",
    combat: {
      attackBonus: "+4",
      damage: "1d6 + 2",
      averageDamage: 5,
      damageType: "perforanti",
      damageNote: "Morso rapido. Più pericoloso se combatte in branco.",
    },
  },
  {
    id: "forest-002",
    name: "Goblin dei Rovi",
    biomes: ["forest", "hill", "ruins"],
    difficulty: "Semplice",
    cr: "1/4",
    type: "Umanoide",
    role: "Predone",
    icon: "👺",
    armorClass: 14,
    hitPoints: 12,
    speed: "30 ft.",
    tags: ["Goblin", "Trappole", "Bosco"],
    description:
      "Piccolo predone coperto di foglie, spine e pezzi di cuoio rubati. Conosce sentieri che non compaiono su nessuna mappa.",
    story:
      "I Goblin dei Rovi non costruiscono veri villaggi: scavano tane sotto radici contorte e lasciano trappole dove gli umani camminano più spesso.",
    actions:
      "Lama ricurva. Attacco in mischia. Arco corto. Attacco a distanza. Può disimpegnarsi o nascondersi rapidamente.",
    tactics:
      "Colpisce da lontano, fugge, attira gli avventurieri verso trappole e usa il terreno a proprio vantaggio.",
    resistances: "Nessuna",
    vulnerabilities: "Luce improvvisa, intimidazione, fuoco nei rovi",
    combat: {
      attackBonus: "+4",
      damage: "1d6 + 2",
      averageDamage: 5,
      damageType: "taglienti o perforanti",
      damageNote: "Lama ricurva o arco corto. Usa spesso imboscate e trappole.",
    },
  },
  {
    id: "forest-003",
    name: "Cinghiale Zannaspezzate",
    biomes: ["forest", "grassland", "hill"],
    difficulty: "Semplice",
    cr: "1/2",
    type: "Bestia",
    role: "Carica",
    icon: "🐗",
    armorClass: 12,
    hitPoints: 26,
    speed: "40 ft.",
    tags: ["Carica", "Territoriale", "Bestia"],
    description:
      "Cinghiale enorme, coperto di fango secco e vecchie cicatrici. Le sue zanne sono spezzate ma ancora letali.",
    story:
      "I boscaioli lasciano sempre una via di fuga quando trovano alberi scortecciati: significa che il branco è vicino.",
    actions:
      "Zannata. Se prende rincorsa, infligge danni extra e può buttare a terra il bersaglio.",
    tactics:
      "Carica in linea retta, difende il branco e non arretra finché non viene ferito gravemente.",
    resistances: "Paura leggera",
    vulnerabilities: "Fuoco, terreno scivoloso",
    combat: {
      attackBonus: "+4",
      damage: "1d8 + 2",
      averageDamage: 6,
      damageType: "perforanti",
      damageNote:
        "Zannata in carica. Se ha spazio per correre, può buttare a terra il bersaglio.",
    },
  },
  {
    id: "forest-004",
    name: "Ragno dei Rami Cavi",
    biomes: ["forest", "ruins", "underdark"],
    difficulty: "Facile",
    cr: "1",
    type: "Bestia",
    role: "Imboscata",
    icon: "🕷️",
    armorClass: 14,
    hitPoints: 32,
    speed: "30 ft., scalata 30 ft.",
    tags: ["Veleno", "Ragnatela", "Imboscata"],
    description:
      "Grande ragno dal corpo sottile che vive dentro tronchi vuoti e rovine invase dalle radici.",
    story:
      "Le sue tele non brillano alla luce: sembrano capelli neri tesi tra un ramo e l’altro.",
    actions:
      "Morso velenoso. Può rallentare o intrappolare una creatura con filamenti appiccicosi.",
    tactics:
      "Attacca dall’alto, immobilizza il bersaglio più isolato e torna a nascondersi.",
    resistances: "Veleno naturale",
    vulnerabilities: "Fuoco",
    combat: {
      attackBonus: "+5",
      damage: "1d8 + 3 + 2d6 veleno",
      averageDamage: 15,
      damageType: "perforanti e veleno",
      damageNote:
        "Morso velenoso. Può rallentare o bloccare una creatura con ragnatele.",
    },
  },
  {
    id: "forest-005",
    name: "Orso Brumoso",
    biomes: ["forest", "mountain", "hill"],
    difficulty: "Facile",
    cr: "1",
    type: "Bestia",
    role: "Bruto",
    icon: "🐻",
    armorClass: 12,
    hitPoints: 38,
    speed: "40 ft.",
    tags: ["Bestia", "Territoriale"],
    description:
      "Grande orso dal pelo scuro, spesso avvolto da vapore nelle mattine fredde. Non caccia per crudeltà, ma difende il proprio territorio.",
    story:
      "I cacciatori lo chiamano Brumoso perché appare tra la nebbia prima ancora che si senta il suo ruggito.",
    actions:
      "Multiattacco. Morso e artiglio. Se ferito gravemente, diventa più aggressivo e punta il nemico più vicino.",
    tactics:
      "Carica frontalmente, protegge cuccioli o tana, e non insegue a lungo se il gruppo si ritira.",
    resistances: "Freddo leggero",
    vulnerabilities: "Fuoco, rumori metallici intensi",
    combat: {
      attackBonus: "+5",
      damage: "1d8 + 4 / 2d6 + 4",
      averageDamage: 20,
      damageType: "perforanti e taglienti",
      damageNote: "Multiattacco: morso e artiglio.",
    },
  },
  {
    id: "forest-006",
    name: "Brigante del Sentiero Verde",
    biomes: ["forest", "hill", "urban"],
    difficulty: "Facile",
    cr: "1",
    type: "Umanoide",
    role: "Predone",
    icon: "🏹",
    armorClass: 14,
    hitPoints: 34,
    speed: "30 ft.",
    tags: ["Bandito", "Imboscata", "Sentiero"],
    description:
      "Predone abituato ad assaltare pellegrini, mercanti e corrieri lungo strade nascoste dal fogliame.",
    story:
      "Lascia nastri verdi sui rami per indicare ai compagni dove tendere l’imboscata successiva.",
    actions:
      "Arco corto. Lama curva. Può nascondersi se ottiene copertura tra alberi e rocce.",
    tactics:
      "Attacca da distanza, punta cavalli e portatori, fugge appena il gruppo reagisce con forza.",
    resistances: "Nessuna",
    vulnerabilities: "Autorità locali, cani da caccia",
    combat: {
      attackBonus: "+5",
      damage: "1d8 + 3",
      averageDamage: 7,
      damageType: "perforanti o taglienti",
      damageNote:
        "Arco corto o lama curva. Funziona bene in imboscate con copertura.",
    },
  },
  {
    id: "forest-007",
    name: "Cervo dalle Corna Spezzate",
    biomes: ["forest", "grassland"],
    difficulty: "Medio",
    cr: "3",
    type: "Bestia",
    role: "Carica",
    icon: "🦌",
    armorClass: 15,
    hitPoints: 75,
    speed: "50 ft.",
    tags: ["Carica", "Territoriale", "Selvatico"],
    description:
      "Creatura enorme e inquieta, con corna fratturate coperte di muschio e sangue secco.",
    story:
      "I druidi dicono che appare quando un bosco è stato ferito troppo a lungo.",
    actions:
      "Carica con corna. Se percorre abbastanza distanza prima di colpire, infligge danni extra e può buttare a terra.",
    tactics:
      "Usa la velocità, colpisce in linea retta e difende una radura o un branco.",
    resistances: "Paura",
    vulnerabilities: "Controllo mentale, fuoco",
    combat: {
      attackBonus: "+6",
      damage: "2d8 + 4",
      averageDamage: 13,
      damageType: "contundenti",
      damageNote:
        "Carica con corna. Se prende rincorsa può buttare a terra il bersaglio.",
    },
  },
  {
    id: "forest-008",
    name: "Manticora delle Fronde",
    biomes: ["forest", "hill", "mountain"],
    difficulty: "Medio",
    cr: "3",
    type: "Mostruosità",
    role: "Assalitore volante",
    icon: "🦁",
    armorClass: 14,
    hitPoints: 90,
    speed: "30 ft., volo 50 ft.",
    tags: ["Volante", "Spine", "Predatore"],
    description:
      "Mostro leonino con ali scure e coda irta di spine velenose, abituato a cacciare sopra le chiome.",
    story:
      "Le tribù di confine appendono campanelli agli alberi per sentire il vento cambiato dal suo volo.",
    actions:
      "Artigli e morso. Spine caudali a distanza. Può restare fuori portata e logorare il gruppo.",
    tactics:
      "Attacca dall’alto, punta incantatori e arcieri, poi si allontana tra gli alberi.",
    resistances: "Caduta, vento naturale",
    vulnerabilities: "Fulmine, reti, spazi chiusi",
    combat: {
      attackBonus: "+6",
      damage: "1d8 + 4 / 1d10 + 4",
      averageDamage: 19,
      damageType: "taglienti e perforanti",
      damageNote:
        "Artigli, morso e spine caudali. Preferisce colpire dall’alto.",
    },
  },
  {
    id: "forest-009",
    name: "Driade del Patto Marcio",
    biomes: ["forest"],
    difficulty: "Medio",
    cr: "4",
    type: "Folletto",
    role: "Controllo",
    icon: "🌿",
    armorClass: 15,
    hitPoints: 88,
    speed: "30 ft.",
    tags: ["Charme", "Radici", "Inganno"],
    description:
      "Spirito del bosco corrotto da un patto antico. Bella, triste e pericolosa.",
    story:
      "Protegge un albero malato dove qualcuno ha inciso un nome che non dovrebbe essere pronunciato.",
    actions:
      "Charme naturale. Radici vincolanti. Può muoversi attraverso alberi vicini.",
    tactics:
      "Non combatte frontalmente: divide il gruppo, immobilizza e usa il bosco come scudo.",
    resistances: "Charme, veleno",
    vulnerabilities: "Fuoco, ferro freddo",
    combat: {
      attackBonus: "+6",
      damage: "2d8 + 4",
      averageDamage: 13,
      damageType: "psichici o perforanti",
      damageNote:
        "Charme naturale e radici vincolanti. Più pericolosa come controllo che come danno puro.",
    },
  },
  {
    id: "forest-010",
    name: "Lupo Mannaro dei Tronchi Neri",
    biomes: ["forest", "urban", "hill"],
    difficulty: "Difficile",
    cr: "5",
    type: "Mostruosità",
    role: "Predatore maledetto",
    icon: "🌕",
    armorClass: 15,
    hitPoints: 130,
    speed: "40 ft.",
    tags: ["Maledizione", "Branco", "Rigenerazione"],
    description:
      "Creatura umanoide deformata dalla luna e dal sangue. Lascia artigliate profonde sui tronchi per segnare il territorio.",
    story:
      "Nei villaggi vicini si dice che nessuno venga morso per caso: la bestia sceglie chi dovrà diventare come lei.",
    actions:
      "Morso maledetto. Artigli. Può rigenerare ferite non inflitte da argento o magia.",
    tactics:
      "Colpisce di notte, fugge tra gli alberi, torna quando il gruppo è esausto.",
    resistances: "Armi non magiche",
    vulnerabilities: "Argento, radiante",
    combat: {
      attackBonus: "+7",
      damage: "2d8 + 5",
      averageDamage: 14,
      damageType: "taglienti o perforanti",
      damageNote:
        "Morso maledetto e artigli. Può diventare una minaccia ricorrente di campagna.",
    },
  },
  {
    id: "forest-011",
    name: "Cacciatore Silvano Corrotto",
    biomes: ["forest"],
    difficulty: "Difficile",
    cr: "6",
    type: "Folletto",
    role: "Arciere boss",
    icon: "🧝",
    armorClass: 17,
    hitPoints: 136,
    speed: "35 ft.",
    tags: ["Arciere", "Folletto", "Maledizione"],
    description:
      "Antico guardiano del bosco trasformato in persecutore. Le sue frecce portano spine vive che crescono nella carne.",
    story:
      "Un tempo proteggeva i viandanti. Ora lascia che entrino solo per cacciare qualcosa che parli, preghi o sanguini.",
    actions:
      "Arco di spine. Passo tra gli alberi. Può marchiare un bersaglio e seguirlo ovunque nel bosco.",
    tactics:
      "Resta lontano, cambia posizione, obbliga il gruppo a inseguirlo in terreno svantaggioso.",
    resistances: "Charme, veleno",
    vulnerabilities: "Fuoco, ferro freddo",
    combat: {
      attackBonus: "+8",
      damage: "2d8 + 5 + 1d6 veleno",
      averageDamage: 17,
      damageType: "perforanti e veleno",
      damageNote:
        "Arco di spine. Ottimo per boss da inseguimento nella foresta.",
    },
  },
  {
    id: "forest-012",
    name: "Troll Radiceamara",
    biomes: ["forest", "swamp"],
    difficulty: "Difficile",
    cr: "7",
    type: "Gigante",
    role: "Rigeneratore",
    icon: "🧌",
    armorClass: 16,
    hitPoints: 168,
    speed: "30 ft.",
    tags: ["Rigenerazione", "Radici", "Bruto"],
    description:
      "Troll coperto di radici, funghi e muschio nero. Quando sanguina, il sangue sembra linfa scura.",
    story:
      "I druidi lo considerano un errore della natura: qualcosa che il bosco prova continuamente a guarire senza riuscirci.",
    actions:
      "Artigli radicati. Morso. Può rigenerare e creare terreno difficile intorno a sé.",
    tactics:
      "Blocca il gruppo nel sottobosco, rigenera, e costringe i personaggi a usare fuoco o acido.",
    resistances: "Veleno, freddo",
    vulnerabilities: "Fuoco, acido",
    combat: {
      attackBonus: "+8",
      damage: "2d8 + 6",
      averageDamage: 15,
      damageType: "taglienti",
      damageNote:
        "Artigli radicati e morso. Rigenera se non viene contrastato con fuoco o acido.",
    },
  },
  {
    id: "forest-013",
    name: "Treant Spezzarami",
    biomes: ["forest", "ruins"],
    difficulty: "Difficile",
    cr: "9",
    type: "Pianta",
    role: "Guardiano",
    icon: "🌳",
    armorClass: 16,
    hitPoints: 138,
    speed: "30 ft.",
    tags: ["Pianta", "Guardiano", "Antico"],
    description:
      "Albero senziente antico e colossale. I suoi rami si muovono come braccia e la corteccia porta cicatrici di guerre dimenticate.",
    story:
      "Veglia su un tratto di foresta che considera sacro. Per lui gli uomini passano come stagioni, ma le ferite lasciate dalle loro asce restano.",
    actions:
      "Schianto. Attacco poderoso con ramo. Roccia scagliata. Può animare radici e arbusti vicini.",
    tactics:
      "Blocca il movimento, separa il gruppo con radici e concentra gli attacchi su chi usa fuoco o asce.",
    resistances: "Contundente, perforante",
    vulnerabilities: "Fuoco",
    combat: {
      attackBonus: "+10",
      damage: "3d6 + 6",
      averageDamage: 16,
      damageType: "contundenti",
      damageNote:
        "Schianto con ramo. Può usare radici e terreno come controllo.",
    },
  },
  {
    id: "forest-014",
    name: "Cervo Reale della Luna Rossa",
    biomes: ["forest", "planar"],
    difficulty: "Estremo",
    cr: "11",
    type: "Folletto",
    role: "Boss mistico",
    icon: "🦌",
    armorClass: 18,
    hitPoints: 210,
    speed: "60 ft.",
    tags: ["Folletto", "Luna", "Boss"],
    description:
      "Creatura regale e aliena, con corna simili a rami sanguigni e occhi che riflettono una luna che non appartiene a questo cielo.",
    story:
      "Appare quando un patto antico viene infranto. Non caccia per fame, ma per ristabilire un equilibrio incomprensibile ai mortali.",
    actions:
      "Carica lunare. Sguardo della Luna Rossa. Può teletrasportarsi tra ombre di alberi.",
    tactics:
      "Non resta mai fermo. Colpisce, scompare e costringe il gruppo a combattere contro il bosco stesso.",
    resistances: "Charme, psichico, veleno",
    vulnerabilities: "Ferro freddo, luce solare pura",
    combat: {
      attackBonus: "+10",
      damage: "3d10 + 6",
      averageDamage: 22,
      damageType: "radiante o psichici",
      damageNote:
        "Carica lunare e sguardo mistico. Boss adatto a foreste fatate o maledette.",
    },
  },
  {
    id: "forest-015",
    name: "Drago Verde delle Fronde",
    biomes: ["forest"],
    difficulty: "Boss",
    cr: "15",
    type: "Drago",
    role: "Manipolatore",
    icon: "🐉",
    armorClass: 19,
    hitPoints: 280,
    speed: "40 ft., volo 80 ft.",
    tags: ["Drago", "Veleno", "Inganno"],
    description:
      "Drago antico delle foreste profonde, maestro di bugie, promesse e veleni sottili.",
    story:
      "Non brucia villaggi: li convince a tradirsi. Le sue tane sono piene di accordi firmati, corone spezzate e ossa coperte di muschio.",
    actions:
      "Multiattacco. Morso, artigli e coda. Soffio velenoso. Presenza terrificante.",
    tactics:
      "Parla prima di combattere, divide gli alleati, usa servitori e colpisce quando il gruppo è già logorato.",
    resistances: "Veleno",
    vulnerabilities: "Freddo, verità magica, giuramenti infranti",
    combat: {
      attackBonus: "+11",
      damage: "2d10 + 6 + 2d6 veleno",
      averageDamage: 24,
      damageType: "perforanti e veleno",
      damageNote: "Multiattacco e soffio velenoso a ricarica.",
    },
  },
];