export const planarMonsters = [
  {
    id: "planar-001",
    name: "Imp del Patto Minore",
    biomes: ["planar", "urban", "ruins"],
    difficulty: "Semplice",
    cr: "1",
    type: "Immondo",
    role: "Ingannatore",
    icon: "😈",
    armorClass: 13,
    hitPoints: 32,
    speed: "30 ft., volo 40 ft.",
    tags: ["Diavolo", "Patto", "Inganno"],
    description:
      "Piccolo immondo alato, servitore di contratti minori, maledizioni domestiche e promesse scritte male.",
    story:
      "Non tenta i re. Tenta apprendisti, mercanti disperati e nobili troppo giovani per capire il prezzo di una firma.",
    actions:
      "Artiglio. Puntura velenosa. Può diventare invisibile per fuggire o preparare un inganno.",
    tactics:
      "Non combatte se può mentire. Colpisce bersagli isolati, poi sparisce e torna con rinforzi.",
    resistances: "Fuoco, veleno",
    vulnerabilities: "Radiante, cerchi di protezione",
    combat: {
      attackBonus: "+5",
      damage: "1d6 + 3 + 1d6 veleno",
      averageDamage: 10,
      damageType: "perforanti e veleno",
      damageNote:
        "Puntura velenosa e invisibilità. Più pericoloso come spia o manipolatore che come combattente.",
    },
  },
  {
    id: "planar-002",
    name: "Scheggia di Caos Vivo",
    biomes: ["planar"],
    difficulty: "Semplice",
    cr: "2",
    type: "Aberrazione",
    role: "Disturbo",
    icon: "🌀",
    armorClass: 14,
    hitPoints: 48,
    speed: "0 ft., volo 40 ft.",
    tags: ["Caos", "Aberrazione", "Instabile"],
    description:
      "Frammento fluttuante di materia impossibile, pieno di occhi temporanei, bocche incomplete e geometrie che cambiano forma.",
    story:
      "Nasce quando un portale planare viene chiuso male. Non vuole vivere: vuole continuare l’errore che lo ha creato.",
    actions:
      "Taglio caotico. Implosione minore. Può alterare brevemente posizione, percezione o gravità vicino a sé.",
    tactics:
      "Si muove in modo imprevedibile, interrompe la formazione e crea caos tattico più che danno diretto.",
    resistances: "Psichico, forza",
    vulnerabilities: "Ordine magico, sigilli di stabilizzazione",
    combat: {
      attackBonus: "+5",
      damage: "2d6 + 3",
      averageDamage: 10,
      damageType: "forza o psichici",
      damageNote:
        "Danno instabile. Può spostare, confondere o rompere la posizione del gruppo.",
    },
  },
  {
    id: "planar-003",
    name: "Custode del Varco Spezzato",
    biomes: ["planar", "ruins"],
    difficulty: "Facile",
    cr: "3",
    type: "Costrutto",
    role: "Guardiano",
    icon: "🚪",
    armorClass: 17,
    hitPoints: 86,
    speed: "30 ft.",
    tags: ["Portale", "Costrutto", "Guardiano"],
    description:
      "Guardiano artificiale nato da pietra runica e frammenti di portale. Il suo corpo vibra come una porta che non riesce a chiudersi.",
    story:
      "Era stato creato per proteggere un passaggio tra mondi. Ora protegge solo il punto in cui il passaggio si è rotto.",
    actions:
      "Pugno runico. Spinta dimensionale. Può spostare una creatura di pochi passi o bloccare un accesso.",
    tactics:
      "Protegge il varco, spinge via chi si avvicina e non insegue oltre il luogo assegnato.",
    resistances: "Veleno, psichico, forza",
    vulnerabilities: "Tuono, rune spezzate",
    combat: {
      attackBonus: "+6",
      damage: "2d8 + 4",
      averageDamage: 13,
      damageType: "contundenti e forza",
      damageNote:
        "Pugno runico e spinta dimensionale. Ottimo per difendere portali, soglie e camere rituali.",
    },
  },
  {
    id: "planar-004",
    name: "Angelo Caduto della Cenere",
    biomes: ["planar", "mountain", "ruins"],
    difficulty: "Medio",
    cr: "5",
    type: "Celestiale",
    role: "Duellante",
    icon: "🪽",
    armorClass: 17,
    hitPoints: 118,
    speed: "30 ft., volo 60 ft.",
    tags: ["Celestiale", "Caduto", "Cenere"],
    description:
      "Figura alata con piume grigie e armatura crepata. La luce che emana è calda, ma malata.",
    story:
      "Cadde non per ribellione, ma per obbedienza a un ordine troppo crudele. Ora punisce chiunque parli di giustizia con troppa sicurezza.",
    actions:
      "Lama di cenere. Ali brucianti. Può accecare brevemente con una luce sporca.",
    tactics:
      "Sfida il personaggio più morale o più arrogante, vola sopra il campo e punisce chi cura o protegge.",
    resistances: "Radiante, fuoco",
    vulnerabilities: "Necrotico, perdono sincero",
    combat: {
      attackBonus: "+7",
      damage: "2d10 + 4 + 1d8 radiante",
      averageDamage: 19,
      damageType: "taglienti e radiante",
      damageNote:
        "Lama di cenere e ali brucianti. Duellante planare con forte valore narrativo.",
    },
  },
  {
    id: "planar-005",
    name: "Segugio Infernale delle Braci",
    biomes: ["planar", "desert", "mountain"],
    difficulty: "Medio",
    cr: "5",
    type: "Immondo",
    role: "Predatore",
    icon: "🐺",
    armorClass: 16,
    hitPoints: 120,
    speed: "50 ft.",
    tags: ["Fuoco", "Caccia", "Infernale"],
    description:
      "Creatura canina fatta di muscoli neri, crepe incandescenti e fumo. Segue l’odore della colpa più che quello del sangue.",
    story:
      "Viene liberato dai diavoli quando un debitore prova a scappare da un contratto.",
    actions:
      "Morso ardente. Soffio di braci. Può inseguire una creatura marchiata senza perderne le tracce.",
    tactics:
      "Punta un bersaglio, lo segue senza distrarsi e costringe il gruppo a proteggerlo.",
    resistances: "Fuoco, veleno",
    vulnerabilities: "Freddo, acqua consacrata",
    combat: {
      attackBonus: "+7",
      damage: "2d8 + 5 + 1d6 fuoco",
      averageDamage: 17,
      damageType: "perforanti e fuoco",
      damageNote:
        "Morso ardente e soffio di braci. Perfetto come cacciatore mandato da un patto infernale.",
    },
  },
  {
    id: "planar-006",
    name: "Mangiapensieri Pallido",
    biomes: ["planar", "underdark"],
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
    id: "planar-007",
    name: "Demone della Forgia",
    biomes: ["planar", "mountain", "ruins"],
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
      damageNote:
        "Martello infernale e soffio di scorie. Può spezzare armi, catene o oggetti magici.",
    },
  },
  {
    id: "planar-008",
    name: "Regina dei Ghiacci Vuoti",
    biomes: ["planar", "arctic"],
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
    id: "planar-009",
    name: "Regina delle Nebbie Marce",
    biomes: ["planar", "swamp"],
    difficulty: "Estremo",
    cr: "12",
    type: "Folletto",
    role: "Boss incantatore",
    icon: "👑",
    armorClass: 18,
    hitPoints: 240,
    speed: "30 ft., volo 30 ft.",
    tags: ["Nebbia", "Charme", "Maledizione"],
    description:
      "Sovrana antica di una corte sommersa. Indossa una corona di canne nere e parla con la voce di chi è annegato nella palude.",
    story:
      "La sua corte appare solo quando la nebbia copre ogni sentiero. Chi accetta il suo invito può tornare dopo un’ora, o dopo cent’anni.",
    actions:
      "Tocco della nebbia. Comando fatato. Può evocare nebbia, confondere e imprigionare una creatura in un ricordo.",
    tactics:
      "Divide il gruppo con visibilità ridotta, usa charme e costringe i personaggi a sprecare turni inseguendo illusioni.",
    resistances: "Charme, psichico, veleno",
    vulnerabilities: "Ferro freddo, radiante",
    combat: {
      attackBonus: "+11",
      damage: "4d10 + 6",
      averageDamage: 28,
      damageType: "psichici o necrotici",
      damageNote:
        "Tocco della nebbia e magie di controllo. Boss narrativo per paludi fatate o maledette.",
    },
  },
  {
    id: "planar-010",
    name: "Drago delle Maree Spezzate",
    biomes: ["planar", "coastal", "aquatic"],
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
    id: "planar-011",
    name: "Titano delle Catene",
    biomes: ["planar", "mountain", "ruins"],
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
      damageNote:
        "Catena colossale. Portata lunga, controllo del campo e possibilità di afferrare.",
    },
  },
  {
    id: "planar-012",
    name: "Serpe del Mondo",
    biomes: ["planar"],
    difficulty: "Boss",
    cr: "17",
    type: "Entità",
    role: "Boss mitico",
    icon: "🐍",
    image: "/monsters/17-serpe-mondo.png",
    armorClass: 21,
    hitPoints: 370,
    speed: "40 ft., nuoto 60 ft., volo 40 ft.",
    tags: ["Serpe", "Mitico", "Cosmico"],
    description:
      "Creatura immensa e antichissima, arrotolata tra sogni, oceani e radici del mondo.",
    story:
      "Alcuni popoli credono che il mondo riposi sulle sue spire. Altri sanno che un giorno smetterà di dormire.",
    actions:
      "Morso cosmico. Stretta del mondo. Può alterare gravità, distanza e terreno intorno a sé.",
    tactics:
      "Trasforma il campo di battaglia, separa il gruppo e punisce chi resta nella sua portata.",
    resistances: "Freddo, veleno, psichico, armi non magiche",
    vulnerabilities: "Antichi nomi, rituali cosmici",
    combat: {
      attackBonus: "+13",
      damage: "5d10 + 8",
      averageDamage: 35,
      damageType: "contundenti e forza",
      damageNote:
        "Morso cosmico e stretta del mondo. Boss mitico per campagne ad alto livello.",
    },
  },
  {
    id: "planar-013",
    name: "Lich delle Stelle Morte",
    biomes: ["planar", "ruins", "underdark"],
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
  {
    id: "planar-014",
    name: "Signora della Marea Nera",
    biomes: ["planar", "coastal"],
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
  {
    id: "planar-015",
    name: "Divoratore di Regni",
    biomes: ["planar", "ruins"],
    difficulty: "Boss",
    cr: "25",
    type: "Entità",
    role: "Boss finale",
    icon: "🌑",
    image: "/monsters/20-divoratore-regni.png",
    armorClass: 24,
    hitPoints: 600,
    speed: "40 ft., volo 60 ft.",
    tags: ["Boss Finale", "Entità", "Apocalisse"],
    description:
      "Creatura impossibile, nata dove guerre, carestie e imperi morenti hanno lasciato un vuoto nel mondo.",
    story:
      "Non conquista regni: li consuma. Le mappe si cancellano dove passa e i nomi dei sovrani spariscono dai libri.",
    actions:
      "Divorazione reale. Ondata apocalittica. Presenza del collasso.",
    tactics:
      "È un incontro da finale di campagna. Va affrontato con artefatti, rituali e scelte narrative pesanti.",
    resistances: "Necrotico, fuoco, freddo, fulmine, armi non magiche",
    vulnerabilities: "Artefatti, rituali epici, sacrifici narrativi",
    combat: {
      attackBonus: "+16",
      damage: "6d10 + 10",
      averageDamage: 43,
      damageType: "necrotici e forza",
      damageNote:
        "Divorazione reale e ondata apocalittica. Non è un mostro normale: è un evento di campagna.",
    },
  },
];