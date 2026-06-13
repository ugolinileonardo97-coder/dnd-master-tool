export const underdarkMonsters = [
  {
    id: "underdark-001",
    name: "Fungo Urlante",
    biomes: ["underdark"],
    difficulty: "Semplice",
    cr: "0",
    type: "Pianta",
    role: "Allarme",
    icon: "🍄",
    armorClass: 5,
    hitPoints: 7,
    speed: "0 ft.",
    tags: ["Fungo", "Allarme", "Sottosuolo"],
    description:
      "Fungo pallido e tremolante che emette un urlo acuto quando percepisce movimento, calore o luce nelle vicinanze.",
    story:
      "Molte creature del sottosuolo lo coltivano vicino ai propri rifugi come sistema d’allarme naturale. Dove cresce in cerchio, quasi sempre qualcosa lo sta usando.",
    actions:
      "Urlo. Quando una creatura si avvicina, emette un grido udibile a grande distanza.",
    tactics:
      "Non combatte, ma può attirare predatori, pattuglie o creature più pericolose.",
    resistances: "Nessuna",
    vulnerabilities: "Fuoco",
    combat: {
      attackBonus: "—",
      damage: "0",
      averageDamage: 0,
      damageType: "nessuno",
      damageNote:
        "Non infligge danno diretto. Serve come allarme vivente e può attirare incontri vicini.",
    },
  },
  {
    id: "underdark-002",
    name: "Cieco delle Caverne",
    biomes: ["underdark"],
    difficulty: "Semplice",
    cr: "1/4",
    type: "Bestia",
    role: "Predatore",
    icon: "🦇",
    armorClass: 13,
    hitPoints: 18,
    speed: "20 ft., volo 40 ft.",
    tags: ["Cieco", "Eco", "Branco"],
    description:
      "Creatura simile a un pipistrello gigante, priva di occhi ma capace di orientarsi con suoni secchi e rapidissimi.",
    story:
      "I minatori li temono perché quando smettono di stridere significa che qualcosa di più grande è entrato nella caverna.",
    actions:
      "Morso. Attacco rapido in volo. Può avere vantaggio se il bersaglio non riesce a vederlo bene.",
    tactics:
      "Attacca in gruppo, colpisce e si ritira verso il soffitto.",
    resistances: "Oscurità naturale",
    vulnerabilities: "Tuono, luce intensa",
    combat: {
      attackBonus: "+4",
      damage: "1d6 + 2",
      averageDamage: 5,
      damageType: "perforanti",
      damageNote:
        "Morso in volo. Più pericoloso se attacca in branco o da zone buie sopra il gruppo.",
    },
  },
  {
    id: "underdark-003",
    name: "Scarabeo delle Vene Blu",
    biomes: ["underdark"],
    difficulty: "Semplice",
    cr: "1/2",
    type: "Bestia",
    role: "Corazzato",
    icon: "🪲",
    armorClass: 15,
    hitPoints: 30,
    speed: "30 ft., scalata 20 ft.",
    tags: ["Insetto", "Minerale", "Corazza"],
    description:
      "Insetto grande quanto un cane, con carapace scuro attraversato da linee blu luminescenti. Si nutre di minerali e ossa.",
    story:
      "I nani dicono che quando questi scarabei migrano, presto una vena mineraria crollerà o verrà aperta da qualcosa sotto.",
    actions:
      "Mandibole. Può rosicchiare metallo tenero, cuoio e legno.",
    tactics:
      "Attacca in piccoli gruppi, punta equipaggiamento e si rifugia nelle crepe.",
    resistances: "Perforante leggero",
    vulnerabilities: "Tuono, fuoco",
    combat: {
      attackBonus: "+4",
      damage: "1d8 + 2",
      averageDamage: 6,
      damageType: "taglienti",
      damageNote:
        "Mandibole minerali. Può essere usato anche per danneggiare equipaggiamento o corde.",
    },
  },
  {
    id: "underdark-004",
    name: "Larva Pallida",
    biomes: ["underdark", "swamp"],
    difficulty: "Semplice",
    cr: "1/2",
    type: "Aberrazione",
    role: "Parassita",
    icon: "🪱",
    armorClass: 12,
    hitPoints: 34,
    speed: "20 ft., scalata 20 ft.",
    tags: ["Parassita", "Buio", "Paura"],
    description:
      "Larva lunga e molle, con bocca circolare piena di piccoli denti. Vive sotto cadaveri, funghi e pozze sotterranee.",
    story:
      "Chi dorme nelle caverne senza fuoco si sveglia spesso con segni circolari sulla pelle. Alcuni non si svegliano affatto.",
    actions:
      "Morso aderente. Può attaccarsi a una creatura e continuare a nutrirsi.",
    tactics:
      "Non affronta gruppi forti. Attacca creature cadute, addormentate o isolate.",
    resistances: "Nessuna",
    vulnerabilities: "Fuoco, sale",
    combat: {
      attackBonus: "+4",
      damage: "1d6 + 2",
      averageDamage: 5,
      damageType: "perforanti",
      damageNote:
        "Morso aderente. Se non viene rimossa, può continuare a infliggere danno o debilitare.",
    },
  },
  {
    id: "underdark-005",
    name: "Ragno di Cristallo",
    biomes: ["underdark", "ruins"],
    difficulty: "Facile",
    cr: "1",
    type: "Bestia",
    role: "Imboscata",
    icon: "🕷️",
    armorClass: 15,
    hitPoints: 42,
    speed: "30 ft., scalata 30 ft.",
    tags: ["Ragno", "Cristallo", "Veleno"],
    description:
      "Ragno traslucido che riflette la luce delle torce in mille frammenti. Quando resta immobile, sembra una formazione minerale.",
    story:
      "I cercatori di gemme inesperti spesso allungano la mano verso ciò che credono quarzo. Il quarzo, però, non morde.",
    actions:
      "Morso velenoso. Ragnatela cristallina. Può intrappolare una creatura in fili taglienti.",
    tactics:
      "Attende vicino a cristalli veri, colpisce il primo che si avvicina e si arrampica fuori portata.",
    resistances: "Veleno leggero",
    vulnerabilities: "Tuono, contundente",
    combat: {
      attackBonus: "+5",
      damage: "1d8 + 3 + 1d6 veleno",
      averageDamage: 11,
      damageType: "perforanti e veleno",
      damageNote:
        "Morso velenoso e ragnatela cristallina. Ottimo per imboscate in caverne luminose.",
    },
  },
  {
    id: "underdark-006",
    name: "Goblin delle Caverne Blu",
    biomes: ["underdark", "ruins"],
    difficulty: "Facile",
    cr: "1",
    type: "Umanoide",
    role: "Predone",
    icon: "👺",
    armorClass: 14,
    hitPoints: 36,
    speed: "30 ft.",
    tags: ["Goblin", "Caverna", "Imboscata"],
    description:
      "Goblin dalla pelle grigio-bluastra, abituato a muoversi senza luce tra cunicoli, funghi e ponti di corda.",
    story:
      "Rubano metallo, candele, scarpe e mappe. Non perché servano sempre, ma perché sanno che ai viaggiatori mancheranno.",
    actions:
      "Lama curva. Balestrino. Può nascondersi come azione rapida se si trova in oscurità o copertura.",
    tactics:
      "Colpisce da lontano, taglia corde, spegne torce e fugge verso passaggi troppo stretti per creature grandi.",
    resistances: "Oscurità naturale",
    vulnerabilities: "Luce intensa, paura",
    combat: {
      attackBonus: "+5",
      damage: "1d6 + 3",
      averageDamage: 6,
      damageType: "taglienti o perforanti",
      damageNote:
        "Lama curva o balestrino. Molto efficace se può spegnere luci o sfruttare cunicoli stretti.",
    },
  },
  {
    id: "underdark-007",
    name: "Miconide Sussurrante",
    biomes: ["underdark"],
    difficulty: "Facile",
    cr: "2",
    type: "Pianta",
    role: "Supporto",
    icon: "🍄",
    armorClass: 13,
    hitPoints: 58,
    speed: "20 ft.",
    tags: ["Fungo", "Spore", "Comunicazione"],
    description:
      "Creatura fungina umanoide che comunica con spore e gesti lenti. Non sempre è ostile, ma difende la propria colonia con ferocia.",
    story:
      "Le sue colonie ricordano eventi avvenuti secoli prima. Parlare con loro è come parlare con una foresta sotterranea.",
    actions:
      "Spore irritanti. Bastone fungino. Può confondere o rallentare creature vicine.",
    tactics:
      "Resta vicino agli alleati, diffonde spore e protegge la colonia invece di inseguire.",
    resistances: "Veleno",
    vulnerabilities: "Fuoco, aria secca",
    combat: {
      attackBonus: "+5",
      damage: "1d8 + 3",
      averageDamage: 7,
      damageType: "contundenti o veleno",
      damageNote:
        "Spore irritanti e bastone fungino. Utile come supporto e controllo leggero.",
    },
  },
  {
    id: "underdark-008",
    name: "Melma d’Ossa",
    biomes: ["underdark", "ruins"],
    difficulty: "Medio",
    cr: "3",
    type: "Melma",
    role: "Corrosione",
    icon: "🫧",
    armorClass: 8,
    hitPoints: 92,
    speed: "20 ft., scalata 20 ft.",
    tags: ["Melma", "Ossa", "Acido"],
    description:
      "Massa semitrasparente piena di ossa digerite a metà. Si muove lentamente lungo muri e soffitti, gocciolando acido lattiginoso.",
    story:
      "Nasce nelle fosse comuni sotterranee, dove l’umidità e la necromanzia rendono persino la decomposizione aggressiva.",
    actions:
      "Pseudopodo acido. Può inglobare piccoli oggetti e corrodere armature leggere.",
    tactics:
      "Blocca passaggi, cade dal soffitto e costringe il gruppo a muoversi.",
    resistances: "Acido, contundente",
    vulnerabilities: "Freddo, fulmine",
    combat: {
      attackBonus: "+6",
      damage: "2d8 + 4",
      averageDamage: 13,
      damageType: "acido",
      damageNote:
        "Pseudopodo acido. Ottima creatura per corridoi stretti e sale con soffitti bassi.",
    },
  },
  {
    id: "underdark-009",
    name: "Mantide delle Rovine",
    biomes: ["underdark", "ruins", "desert"],
    difficulty: "Medio",
    cr: "5",
    type: "Mostruosità",
    role: "Predatore",
    icon: "🦗",
    image: "/monsters/07-mantide-rovine.png",
    armorClass: 16,
    hitPoints: 125,
    speed: "40 ft., scalata 30 ft.",
    tags: ["Insettoide", "Rovine", "Predatore"],
    description:
      "Predatore silenzioso che si mimetizza tra colonne spezzate, statue cadute e stalagmiti.",
    story:
      "Depone uova nelle crepe delle città morte. Quando una rovina tace troppo a lungo, spesso significa che la mantide è già in caccia.",
    actions:
      "Falcata gemella. Balzo predatorio se si muove abbastanza prima dell’attacco.",
    tactics:
      "Colpisce dall’alto, punta gli incantatori e torna a nascondersi tra rocce e rovine.",
    resistances: "Veleno",
    vulnerabilities: "Tuono",
    combat: {
      attackBonus: "+7",
      damage: "2d6 + 5",
      averageDamage: 12,
      damageType: "taglienti",
      damageNote:
        "Falcata gemella. Ottima nelle imboscate dall’alto e nei corridoi rotti.",
    },
  },
  {
    id: "underdark-010",
    name: "Occhio della Fossa",
    biomes: ["underdark", "planar"],
    difficulty: "Difficile",
    cr: "6",
    type: "Aberrazione",
    role: "Controllo",
    icon: "👁️",
    armorClass: 16,
    hitPoints: 135,
    speed: "0 ft., volo 30 ft.",
    tags: ["Aberrazione", "Occhio", "Raggi"],
    description:
      "Sfera carnosa sospesa nell’aria, con un grande occhio centrale e piccoli peduncoli tremanti.",
    story:
      "Secondo alcuni saggi, non nasce: viene sognato da qualcosa che dorme più in basso della pietra.",
    actions:
      "Raggio oculare. Può accecare, spingere, rallentare o ferire una creatura a distanza.",
    tactics:
      "Resta sospeso sopra voragini, usa raggi per controllare il campo e si protegge con servitori.",
    resistances: "Psichico",
    vulnerabilities: "Luce radiante concentrata",
    combat: {
      attackBonus: "+8",
      damage: "3d8 + 4",
      averageDamage: 17,
      damageType: "psichici o forza",
      damageNote:
        "Raggi oculari variabili. Più utile come controllo che come picchiatore puro.",
    },
  },
  {
    id: "underdark-011",
    name: "Mangiapensieri Pallido",
    biomes: ["underdark", "planar"],
    difficulty: "Difficile",
    cr: "7",
    type: "Aberrazione",
    role: "Controllo mentale",
    icon: "🧠",
    armorClass: 16,
    hitPoints: 132,
    speed: "30 ft.",
    tags: ["Aberrazione", "Psionico", "Terrore"],
    description:
      "Essere umanoide dalla pelle grigia e tesa, con occhi liquidi e dita troppo lunghe. Si nutre di ricordi prima ancora che di carne.",
    story:
      "Le comunità sotterranee lo chiamano il Ladro del Nome, perché le vittime sopravvissute dimenticano chi erano.",
    actions:
      "Artiglio psichico. Onda mentale. Può confondere o stordire creature vicine.",
    tactics:
      "Isola il personaggio con Saggezza bassa, spezza la formazione e usa servitori dominati.",
    resistances: "Psichico",
    vulnerabilities: "Radiante, silenzio magico",
    combat: {
      attackBonus: "+8",
      damage: "3d8 + 4",
      averageDamage: 17,
      damageType: "psichici",
      damageNote:
        "Artiglio psichico e onda mentale. Molto pericoloso contro personaggi con bassa Saggezza.",
    },
  },
  {
    id: "underdark-012",
    name: "Regina Ragno di Basalto",
    biomes: ["underdark"],
    difficulty: "Difficile",
    cr: "8",
    type: "Mostruosità",
    role: "Boss minore",
    icon: "🕷️",
    armorClass: 18,
    hitPoints: 178,
    speed: "30 ft., scalata 40 ft.",
    tags: ["Ragno", "Boss", "Veleno"],
    description:
      "Enorme ragno nero con zampe simili a ossidiana e addome segnato da rune naturali color porpora.",
    story:
      "Le sue ragnatele coprono ponti, statue e intere sale. Ogni filo vibra con il ricordo di chi vi è morto intrappolato.",
    actions:
      "Morso velenoso. Ragnatela di basalto. Può evocare piccoli ragni o chiudere passaggi.",
    tactics:
      "Crea zone proibite, isola i bersagli e combatte dal soffitto.",
    resistances: "Veleno, tagliente non magico",
    vulnerabilities: "Fuoco, tuono",
    combat: {
      attackBonus: "+9",
      damage: "2d10 + 5 + 2d6 veleno",
      averageDamage: 23,
      damageType: "perforanti e veleno",
      damageNote:
        "Morso velenoso e ragnatele resistenti. Boss perfetto per una sala verticale.",
    },
  },
  {
    id: "underdark-013",
    name: "Custode del Labirinto",
    biomes: ["underdark", "ruins"],
    difficulty: "Estremo",
    cr: "10",
    type: "Mostruosità",
    role: "Boss",
    icon: "🐂",
    image: "/monsters/12-custode-labirinto.png",
    armorClass: 17,
    hitPoints: 215,
    speed: "40 ft.",
    tags: ["Minotauro", "Boss", "Labirinto"],
    description:
      "Guardiano taurino di corridoi impossibili. Conosce ogni eco, ogni svolta e ogni odore del proprio labirinto.",
    story:
      "Non è prigioniero del labirinto: ne è il cuore. Ogni muro sembra muoversi per condurre le vittime verso di lui.",
    actions:
      "Ascia labirintica. Carica. Può spingere e separare i bersagli.",
    tactics:
      "Sfrutta corridoi stretti, divide il gruppo e combatte meglio quando conosce il terreno.",
    resistances: "Paura, charme",
    vulnerabilities: "Illusioni sonore",
    combat: {
      attackBonus: "+10",
      damage: "2d12 + 6",
      averageDamage: 19,
      damageType: "taglienti",
      damageNote:
        "Ascia labirintica e carica. Spinge, separa e punisce chi resta isolato.",
    },
  },
  {
    id: "underdark-014",
    name: "Colosso di Stalattiti",
    biomes: ["underdark"],
    difficulty: "Estremo",
    cr: "12",
    type: "Elementale",
    role: "Bruto ambientale",
    icon: "⛰️",
    armorClass: 19,
    hitPoints: 265,
    speed: "30 ft., scalata 20 ft.",
    tags: ["Pietra", "Colosso", "Caverna"],
    description:
      "Massa elementale composta da stalattiti, pietra umida e cristalli spezzati. Quando si muove, l’intera caverna geme.",
    story:
      "Non protegge un tesoro, ma l’equilibrio geologico della caverna. Ogni piccone, incantesimo o esplosione è per lui un’offesa.",
    actions:
      "Pugno di pietra. Pioggia di stalattiti. Può far crollare frammenti dal soffitto.",
    tactics:
      "Costringe il gruppo a muoversi, distrugge coperture e crea zone di crollo.",
    resistances: "Contundente, perforante, veleno",
    vulnerabilities: "Tuono, fulmine",
    combat: {
      attackBonus: "+11",
      damage: "3d10 + 7",
      averageDamage: 24,
      damageType: "contundenti",
      damageNote:
        "Pugno di pietra e crolli. Boss ambientale ideale per una grande caverna.",
    },
  },
  {
    id: "underdark-015",
    name: "Lich delle Stelle Morte",
    biomes: ["underdark", "ruins", "planar"],
    difficulty: "Boss",
    cr: "18",
    type: "Non morto",
    role: "Arcincantatore",
    icon: "⭐",
    image: "/monsters/18-lich-stelle-morte.png",
    armorClass: 19,
    hitPoints: 310,
    speed: "30 ft., volo 40 ft.",
    tags: ["Lich", "Necromanzia", "Cosmico"],
    description:
      "Arcimago non morto che ha studiato la luce di stelle ormai spente. La sua magia è fredda, antica e quasi silenziosa.",
    story:
      "Cercava l’immortalità tra costellazioni morenti. Ora conserva frammenti di stelle morte nel proprio filatterio.",
    actions:
      "Tocco della stella spenta. Incantesimi di alto livello legati a morte, gelo e controllo mentale.",
    tactics:
      "Non si espone. Usa magie preparate, servitori, trappole e piani di fuga.",
    resistances: "Necrotico, freddo, veleno",
    vulnerabilities: "Radiante celestiale",
    combat: {
      attackBonus: "+12",
      damage: "4d8 + 5",
      averageDamage: 23,
      damageType: "necrotici e freddo",
      damageNote:
        "Tocco della stella spenta e incantesimi di alto livello. Boss da usare con preparazione narrativa.",
    },
  },
];