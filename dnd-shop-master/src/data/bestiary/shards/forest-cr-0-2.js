export const bestiaryShard_forest_cr_0_2 = [
  {
    "id": "best-db-foresta_antica_0001",
    "sourceId": "foresta_antica_0001",
    "name": "Assassino delle Spine",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Foresta Antica",
    "difficulty": "Semplice",
    "cr": 0,
    "xp": 10,
    "type": "Non morto",
    "role": "Sciame",
    "size": "Piccola",
    "icon": "??",
    "armorClass": 14,
    "hitPoints": 6,
    "speed": "12 m",
    "alignment": "Neutrale buono",
    "tags": [
      "Non morto",
      "Minion",
      "Foresta Antica",
      "forest",
      "Piccola",
      "Acrobazia",
      "Inganno",
      "Furtività"
    ],
    "description": "Creatura legata a querce, sentieri perduti e radici, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come minion, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Passo Silenzioso: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Spina Lanciata. +3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2.",
    "tactics": "apre lo scontro colpendo il bersaglio più isolato",
    "resistances": "nessuna",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "vista cieca 9 m",
    "languages": "Comune, Celestiale",
    "loot": "artiglio inciso, pelle resistente, frammento rituale",
    "combat": {
      "attackBonus": "+3",
      "damage": "1d12+2",
      "averageDamage": 9,
      "damageType": "necrotici",
      "damageNote": "Spina Lanciata. +3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2."
    },
    "abilityScores": {
      "str": 13,
      "dex": 8,
      "con": 13,
      "int": 3,
      "wis": 8,
      "cha": 10
    },
    "technicalActions": [
      {
        "name": "Spina Lanciata",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 3,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d12+2",
        "damageType": "necrotici",
        "hit": "+3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-foresta_antica_0002",
    "sourceId": "foresta_antica_0002",
    "name": "Spettro del Muschio Antico",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Foresta Antica",
    "difficulty": "Semplice",
    "cr": 0,
    "xp": 10,
    "type": "Elementale",
    "role": "Bruto",
    "size": "Minuscola",
    "icon": "??",
    "armorClass": 10,
    "hitPoints": 6,
    "speed": "12 m",
    "alignment": "Caotico malvagio",
    "tags": [
      "Elementale",
      "Bruto",
      "Foresta Antica",
      "forest",
      "Minuscola",
      "Furtività",
      "Sopravvivenza"
    ],
    "description": "Creatura legata a querce, sentieri perduti e radici, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come bruto, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Sangue Innaturale: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Morso. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d8+2.",
    "tactics": "cerca di separare il party con pressione costante",
    "resistances": "necrotico",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 18 m",
    "languages": "Draconico",
    "loot": "occhio cristallizzato, dente raro, moneta antica",
    "combat": {
      "attackBonus": "+7",
      "damage": "2d8+2",
      "averageDamage": 11,
      "damageType": "variabili",
      "damageNote": "Morso. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d8+2."
    },
    "abilityScores": {
      "str": 18,
      "dex": 9,
      "con": 13,
      "int": 7,
      "wis": 12,
      "cha": 11
    },
    "technicalActions": [
      {
        "name": "Morso",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 7,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "2d8+2",
        "damageType": "variabili",
        "hit": "+7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d8+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-foresta_antica_0003",
    "sourceId": "foresta_antica_0003",
    "name": "Aquila delle Spine",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Foresta Antica",
    "difficulty": "Semplice",
    "cr": 0.125,
    "xp": 25,
    "type": "Drago",
    "role": "Guardiano",
    "size": "Piccola",
    "icon": "??",
    "armorClass": 13,
    "hitPoints": 8,
    "speed": "9 m, nuotare 9 m",
    "alignment": "Legale buono",
    "tags": [
      "Drago",
      "Guardiano",
      "Foresta Antica",
      "forest",
      "Piccola",
      "Natura",
      "Atletica"
    ],
    "description": "Creatura legata a sentieri perduti, linfa e querce, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come guardiano, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Vista del Predatore: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Spina Lanciata. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
    "tactics": "protegge il terreno favorevole e costringe il gruppo a muoversi",
    "resistances": "veleno",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "percezione tellurica 18 m",
    "languages": "Comune, Silvano",
    "loot": "occhio cristallizzato, dente raro, moneta antica",
    "combat": {
      "attackBonus": "+7",
      "damage": "1d10+2",
      "averageDamage": 8,
      "damageType": "variabili",
      "damageNote": "Spina Lanciata. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2."
    },
    "abilityScores": {
      "str": 16,
      "dex": 8,
      "con": 13,
      "int": 9,
      "wis": 8,
      "cha": 10
    },
    "technicalActions": [
      {
        "name": "Spina Lanciata",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 7,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d10+2",
        "damageType": "variabili",
        "hit": "+7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-foresta_antica_0004",
    "sourceId": "foresta_antica_0004",
    "name": "Mastino del Crepuscolo",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Foresta Antica",
    "difficulty": "Semplice",
    "cr": 0,
    "xp": 10,
    "type": "Drago",
    "role": "Sciame",
    "size": "Piccola",
    "icon": "??",
    "armorClass": 12,
    "hitPoints": 9,
    "speed": "9 m",
    "alignment": "Caotico malvagio",
    "tags": [
      "Drago",
      "Minion",
      "Foresta Antica",
      "forest",
      "Piccola",
      "Acrobazia",
      "Arcano",
      "Inganno"
    ],
    "description": "Creatura legata a querce, muschio e sentieri perduti, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come minion, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Pelle Rinforzata: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Colpo Pesante. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2.",
    "tactics": "difende una tana o una reliquia e non insegue lontano",
    "resistances": "necrotico",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "percezione tellurica 18 m",
    "languages": "Comune",
    "loot": "scheggia elementale, sangue denso, reliquia consumata",
    "combat": {
      "attackBonus": "+7",
      "damage": "1d6+2",
      "averageDamage": 6,
      "damageType": "variabili",
      "damageNote": "Colpo Pesante. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2."
    },
    "abilityScores": {
      "str": 18,
      "dex": 12,
      "con": 11,
      "int": 12,
      "wis": 16,
      "cha": 10
    },
    "technicalActions": [
      {
        "name": "Colpo Pesante",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 7,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d6+2",
        "damageType": "variabili",
        "hit": "+7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-foresta_antica_0005",
    "sourceId": "foresta_antica_0005",
    "name": "Basilisco delle Ossa",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Foresta Antica",
    "difficulty": "Semplice",
    "cr": 0.125,
    "xp": 25,
    "type": "Costrutto",
    "role": "Bruto",
    "size": "Minuscola",
    "icon": "??",
    "armorClass": 13,
    "hitPoints": 12,
    "speed": "12 m, volare 18 m",
    "alignment": "Legale buono",
    "tags": [
      "Costrutto",
      "Bruto",
      "Foresta Antica",
      "forest",
      "Minuscola",
      "Atletica"
    ],
    "description": "Creatura legata a muschio, sentieri perduti e querce, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come bruto, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Sangue Innaturale: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Soffio Minore. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d12+2.",
    "tactics": "difende una tana o una reliquia e non insegue lontano",
    "resistances": "necrotico",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "vista cieca 9 m",
    "languages": "Comune, Silvano",
    "loot": "cuore annerito, scaglia intatta, polvere arcana",
    "combat": {
      "attackBonus": "+7",
      "damage": "2d12+2",
      "averageDamage": 15,
      "damageType": "variabili",
      "damageNote": "Soffio Minore. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d12+2."
    },
    "abilityScores": {
      "str": 16,
      "dex": 8,
      "con": 14,
      "int": 6,
      "wis": 8,
      "cha": 6
    },
    "technicalActions": [
      {
        "name": "Soffio Minore",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 7,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "2d12+2",
        "damageType": "variabili",
        "hit": "+7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d12+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-foresta_antica_0006",
    "sourceId": "foresta_antica_0006",
    "name": "Flagello della Corona Spezzata",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Foresta Antica",
    "difficulty": "Semplice",
    "cr": 0.5,
    "xp": 100,
    "type": "Umanoide",
    "role": "Sciame",
    "size": "Media",
    "icon": "??",
    "armorClass": 13,
    "hitPoints": 13,
    "speed": "12 m",
    "alignment": "Legale buono",
    "tags": [
      "Umanoide",
      "Minion",
      "Foresta Antica",
      "forest",
      "Media",
      "Natura",
      "Sopravvivenza"
    ],
    "description": "Creatura legata a muschio, radici e linfa, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come minion, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Vista del Predatore: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Spina Lanciata. +4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2.",
    "tactics": "concentra gli attacchi sui personaggi feriti",
    "resistances": "contundente/perforante/tagliente da armi non magiche",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "Percezione passiva",
    "languages": "Comune, Silvano",
    "loot": "osso lavorabile, ghiandola alchemica, trofeo minore",
    "combat": {
      "attackBonus": "+4",
      "damage": "1d12+2",
      "averageDamage": 9,
      "damageType": "variabili",
      "damageNote": "Spina Lanciata. +4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2."
    },
    "abilityScores": {
      "str": 12,
      "dex": 11,
      "con": 11,
      "int": 3,
      "wis": 8,
      "cha": 6
    },
    "technicalActions": [
      {
        "name": "Spina Lanciata",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 4,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d12+2",
        "damageType": "variabili",
        "hit": "+4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-foresta_antica_0007",
    "sourceId": "foresta_antica_0007",
    "name": "Occhio del Pozzo Cieco",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Foresta Antica",
    "difficulty": "Semplice",
    "cr": 0,
    "xp": 10,
    "type": "Umanoide",
    "role": "Assalitore",
    "size": "Minuscola",
    "icon": "??",
    "armorClass": 14,
    "hitPoints": 8,
    "speed": "9 m",
    "alignment": "Neutrale buono",
    "tags": [
      "Umanoide",
      "Assassino",
      "Foresta Antica",
      "forest",
      "Minuscola",
      "Acrobazia",
      "Furtività"
    ],
    "description": "Creatura legata a linfa, sentieri perduti e muschio, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come assassino, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Passo Silenzioso: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Soffio Minore. +3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d8+2.",
    "tactics": "apre lo scontro colpendo il bersaglio più isolato",
    "resistances": "freddo",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 18 m",
    "languages": "—",
    "loot": "occhio cristallizzato, dente raro, moneta antica",
    "combat": {
      "attackBonus": "+3",
      "damage": "1d8+2",
      "averageDamage": 7,
      "damageType": "variabili",
      "damageNote": "Soffio Minore. +3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d8+2."
    },
    "abilityScores": {
      "str": 13,
      "dex": 13,
      "con": 11,
      "int": 11,
      "wis": 10,
      "cha": 8
    },
    "technicalActions": [
      {
        "name": "Soffio Minore",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 3,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d8+2",
        "damageType": "variabili",
        "hit": "+3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d8+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-foresta_antica_0008",
    "sourceId": "foresta_antica_0008",
    "name": "Ragno del Trono Sepolto",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Foresta Antica",
    "difficulty": "Semplice",
    "cr": 0,
    "xp": 10,
    "type": "Gigante",
    "role": "Guardiano",
    "size": "Grande",
    "icon": "??",
    "armorClass": 19,
    "hitPoints": 6,
    "speed": "9 m, scalare 9 m",
    "alignment": "Caotico malvagio",
    "tags": [
      "Gigante",
      "Guardiano",
      "Foresta Antica",
      "forest",
      "Grande",
      "Percezione"
    ],
    "description": "Creatura legata a radici, sentieri perduti e querce, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come guardiano, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Passo Silenzioso: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Soffio Minore. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d8+2.",
    "tactics": "apre lo scontro colpendo il bersaglio più isolato",
    "resistances": "fuoco",
    "immunities": "nessuna",
    "vulnerabilities": "fuoco",
    "senses": "Percezione passiva",
    "languages": "comprende una lingua ma non parla",
    "loot": "scheggia elementale, sangue denso, reliquia consumata",
    "combat": {
      "attackBonus": "+5",
      "damage": "1d8+2",
      "averageDamage": 7,
      "damageType": "variabili",
      "damageNote": "Soffio Minore. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d8+2."
    },
    "abilityScores": {
      "str": 14,
      "dex": 16,
      "con": 20,
      "int": 6,
      "wis": 9,
      "cha": 8
    },
    "technicalActions": [
      {
        "name": "Soffio Minore",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 5,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d8+2",
        "damageType": "variabili",
        "hit": "+5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d8+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-foresta_antica_0009",
    "sourceId": "foresta_antica_0009",
    "name": "Guardiano del Sangue Pallido",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Foresta Antica",
    "difficulty": "Semplice",
    "cr": 0,
    "xp": 10,
    "type": "Drago",
    "role": "Predatore",
    "size": "Media",
    "icon": "??",
    "armorClass": 14,
    "hitPoints": 8,
    "speed": "12 m, volare 18 m",
    "alignment": "Neutrale",
    "tags": [
      "Drago",
      "Predatore",
      "Foresta Antica",
      "forest",
      "Media",
      "Furtività"
    ],
    "description": "Creatura legata a muschio, querce e sentieri perduti, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come predatore, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Furia del Bioma: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Urto Brutale. +6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2.",
    "tactics": "cerca di separare il party con pressione costante",
    "resistances": "necrotico",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "Percezione passiva",
    "languages": "Comune, Infernale",
    "loot": "cuore annerito, scaglia intatta, polvere arcana",
    "combat": {
      "attackBonus": "+6",
      "damage": "1d6+2",
      "averageDamage": 6,
      "damageType": "variabili",
      "damageNote": "Urto Brutale. +6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2."
    },
    "abilityScores": {
      "str": 9,
      "dex": 17,
      "con": 12,
      "int": 5,
      "wis": 11,
      "cha": 7
    },
    "technicalActions": [
      {
        "name": "Urto Brutale",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 6,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d6+2",
        "damageType": "variabili",
        "hit": "+6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-foresta_antica_0010",
    "sourceId": "foresta_antica_0010",
    "name": "Araldo della Stanza Infinita",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Foresta Antica",
    "difficulty": "Semplice",
    "cr": 0.25,
    "xp": 50,
    "type": "Mostruosità",
    "role": "Assalitore",
    "size": "Media",
    "icon": "??",
    "armorClass": 18,
    "hitPoints": 13,
    "speed": "9 m, scalare 9 m",
    "alignment": "Legale neutrale",
    "tags": [
      "Mostruosità",
      "Assassino",
      "Foresta Antica",
      "forest",
      "Media",
      "Furtività"
    ],
    "description": "Creatura legata a muschio, linfa e querce, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come assassino, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Vista del Predatore: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Artiglio. +9 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
    "tactics": "apre lo scontro colpendo il bersaglio più isolato",
    "resistances": "nessuna",
    "immunities": "nessuna",
    "vulnerabilities": "radiante",
    "senses": "vista cieca 9 m",
    "languages": "Comune, Celestiale",
    "loot": "artiglio inciso, pelle resistente, frammento rituale",
    "combat": {
      "attackBonus": "+9",
      "damage": "1d10+2",
      "averageDamage": 8,
      "damageType": "variabili",
      "damageNote": "Artiglio. +9 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2."
    },
    "abilityScores": {
      "str": 8,
      "dex": 20,
      "con": 12,
      "int": 12,
      "wis": 10,
      "cha": 11
    },
    "technicalActions": [
      {
        "name": "Artiglio",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 9,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d10+2",
        "damageType": "variabili",
        "hit": "+9 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-foresta_antica_0011",
    "sourceId": "foresta_antica_0011",
    "name": "Titano del Sole Morto",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Foresta Antica",
    "difficulty": "Facile",
    "cr": 1,
    "xp": 200,
    "type": "Mostruosità",
    "role": "Assalitore",
    "size": "Grande",
    "icon": "??",
    "armorClass": 17,
    "hitPoints": 31,
    "speed": "12 m",
    "alignment": "Caotico malvagio",
    "tags": [
      "Mostruosità",
      "Assassino",
      "Foresta Antica",
      "forest",
      "Grande",
      "Atletica"
    ],
    "description": "Creatura legata a muschio, querce e radici, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come assassino, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Pelle Rinforzata: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Soffio Minore. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2.",
    "tactics": "apre lo scontro colpendo il bersaglio più isolato",
    "resistances": "fuoco",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "vista cieca 9 m",
    "languages": "—",
    "loot": "osso lavorabile, ghiandola alchemica, trofeo minore",
    "combat": {
      "attackBonus": "+5",
      "damage": "1d12+2",
      "averageDamage": 9,
      "damageType": "variabili",
      "damageNote": "Soffio Minore. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2."
    },
    "abilityScores": {
      "str": 8,
      "dex": 14,
      "con": 10,
      "int": 6,
      "wis": 8,
      "cha": 12
    },
    "technicalActions": [
      {
        "name": "Soffio Minore",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 5,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d12+2",
        "damageType": "variabili",
        "hit": "+5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-foresta_antica_0012",
    "sourceId": "foresta_antica_0012",
    "name": "Spettro del Vetro",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Foresta Antica",
    "difficulty": "Facile",
    "cr": 2,
    "xp": 450,
    "type": "Gigante",
    "role": "Supporto",
    "size": "Piccola",
    "icon": "??",
    "armorClass": 15,
    "hitPoints": 41,
    "speed": "9 m",
    "alignment": "Neutrale buono",
    "tags": [
      "Gigante",
      "Supporto",
      "Foresta Antica",
      "forest",
      "Piccola",
      "Arcano"
    ],
    "description": "Creatura legata a linfa, radici e muschio, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come supporto, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Aura Minore: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Dardo Spirituale. +3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+3.",
    "tactics": "usa coperture, ombre e ostacoli prima di esporsi",
    "resistances": "nessuna",
    "immunities": "nessuna",
    "vulnerabilities": "tuono",
    "senses": "scurovisione 36 m",
    "languages": "Comune, Celestiale",
    "loot": "artiglio inciso, pelle resistente, frammento rituale",
    "combat": {
      "attackBonus": "+3",
      "damage": "1d10+3",
      "averageDamage": 9,
      "damageType": "variabili",
      "damageNote": "Dardo Spirituale. +3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+3."
    },
    "abilityScores": {
      "str": 8,
      "dex": 11,
      "con": 12,
      "int": 8,
      "wis": 12,
      "cha": 12
    },
    "technicalActions": [
      {
        "name": "Dardo Spirituale",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 3,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d10+3",
        "damageType": "variabili",
        "hit": "+3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+3.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-foresta_antica_0013",
    "sourceId": "foresta_antica_0013",
    "name": "Cantore della Notte Verde",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Foresta Antica",
    "difficulty": "Facile",
    "cr": 1,
    "xp": 200,
    "type": "Pianta",
    "role": "Boss",
    "size": "Piccola",
    "icon": "??",
    "armorClass": 15,
    "hitPoints": 44,
    "speed": "6 m, scavare 9 m",
    "alignment": "Legale malvagio",
    "tags": [
      "Pianta",
      "Elite",
      "Foresta Antica",
      "forest",
      "Piccola",
      "Acrobazia",
      "Atletica"
    ],
    "description": "Creatura legata a linfa, radici e muschio, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come elite, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Sangue Innaturale: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Dardo Spirituale. +2 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d10+2.",
    "tactics": "concentra gli attacchi sui personaggi feriti",
    "resistances": "psichico",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 36 m",
    "languages": "Draconico",
    "loot": "scheggia elementale, sangue denso, reliquia consumata",
    "combat": {
      "attackBonus": "+2",
      "damage": "2d10+2",
      "averageDamage": 13,
      "damageType": "variabili",
      "damageNote": "Dardo Spirituale. +2 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d10+2."
    },
    "abilityScores": {
      "str": 11,
      "dex": 10,
      "con": 12,
      "int": 8,
      "wis": 12,
      "cha": 11
    },
    "technicalActions": [
      {
        "name": "Dardo Spirituale",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 2,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "2d10+2",
        "damageType": "variabili",
        "hit": "+2 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d10+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-foresta_antica_0015",
    "sourceId": "foresta_antica_0015",
    "name": "Apostolo della Corona Spezzata",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Foresta Antica",
    "difficulty": "Facile",
    "cr": 1,
    "xp": 200,
    "type": "Mostruosità",
    "role": "Assalitore",
    "size": "Grande",
    "icon": "??",
    "armorClass": 16,
    "hitPoints": 32,
    "speed": "12 m, volare 18 m",
    "alignment": "Neutrale malvagio",
    "tags": [
      "Mostruosità",
      "Schermagliatore",
      "Foresta Antica",
      "forest",
      "Grande",
      "Acrobazia",
      "Natura"
    ],
    "description": "Creatura legata a sentieri perduti, linfa e querce, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come schermagliatore, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Passo Silenzioso: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Colpo Pesante. +3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
    "tactics": "concentra gli attacchi sui personaggi feriti",
    "resistances": "contundente/perforante/tagliente da armi non magiche",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 36 m",
    "languages": "comprende una lingua ma non parla",
    "loot": "artiglio inciso, pelle resistente, frammento rituale",
    "combat": {
      "attackBonus": "+3",
      "damage": "1d10+2",
      "averageDamage": 8,
      "damageType": "variabili",
      "damageNote": "Colpo Pesante. +3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2."
    },
    "abilityScores": {
      "str": 12,
      "dex": 12,
      "con": 11,
      "int": 13,
      "wis": 16,
      "cha": 13
    },
    "technicalActions": [
      {
        "name": "Colpo Pesante",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 3,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d10+2",
        "damageType": "variabili",
        "hit": "+3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-foresta_antica_0016",
    "sourceId": "foresta_antica_0016",
    "name": "Draco della Fiamma Fredda",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Foresta Antica",
    "difficulty": "Facile",
    "cr": 2,
    "xp": 450,
    "type": "Costrutto",
    "role": "Predatore",
    "size": "Minuscola",
    "icon": "??",
    "armorClass": 16,
    "hitPoints": 34,
    "speed": "9 m, nuotare 9 m",
    "alignment": "Neutrale",
    "tags": [
      "Costrutto",
      "Predatore",
      "Foresta Antica",
      "forest",
      "Minuscola",
      "Percezione",
      "Inganno"
    ],
    "description": "Creatura legata a sentieri perduti, muschio e linfa, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come predatore, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Passo Silenzioso: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Colpo Pesante. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+3.",
    "tactics": "concentra gli attacchi sui personaggi feriti",
    "resistances": "radiante",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "vista cieca 9 m",
    "languages": "—",
    "loot": "osso lavorabile, ghiandola alchemica, trofeo minore",
    "combat": {
      "attackBonus": "+5",
      "damage": "1d12+3",
      "averageDamage": 10,
      "damageType": "variabili",
      "damageNote": "Colpo Pesante. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+3."
    },
    "abilityScores": {
      "str": 9,
      "dex": 15,
      "con": 12,
      "int": 4,
      "wis": 14,
      "cha": 13
    },
    "technicalActions": [
      {
        "name": "Colpo Pesante",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 5,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d12+3",
        "damageType": "variabili",
        "hit": "+5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+3.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-foresta_antica_0019",
    "sourceId": "foresta_antica_0019",
    "name": "Cantore del Sangue Pallido",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Foresta Antica",
    "difficulty": "Facile",
    "cr": 1,
    "xp": 200,
    "type": "Drago",
    "role": "Assalitore",
    "size": "Media",
    "icon": "??",
    "armorClass": 17,
    "hitPoints": 22,
    "speed": "12 m, volare 18 m",
    "alignment": "Legale buono",
    "tags": [
      "Drago",
      "Assassino",
      "Foresta Antica",
      "forest",
      "Media",
      "Arcano",
      "Natura",
      "Sopravvivenza"
    ],
    "description": "Creatura legata a linfa, muschio e sentieri perduti, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come assassino, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Aura Minore: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Soffio Minore. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
    "tactics": "usa coperture, ombre e ostacoli prima di esporsi",
    "resistances": "radiante",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "vista cieca 9 m",
    "languages": "Comune, Celestiale",
    "loot": "artiglio inciso, pelle resistente, frammento rituale",
    "combat": {
      "attackBonus": "+5",
      "damage": "1d10+2",
      "averageDamage": 8,
      "damageType": "variabili",
      "damageNote": "Soffio Minore. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2."
    },
    "abilityScores": {
      "str": 12,
      "dex": 17,
      "con": 11,
      "int": 4,
      "wis": 13,
      "cha": 8
    },
    "technicalActions": [
      {
        "name": "Soffio Minore",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 5,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d10+2",
        "damageType": "variabili",
        "hit": "+5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-foresta_antica_0022",
    "sourceId": "foresta_antica_0022",
    "name": "Lupo dei Cristalli",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Foresta Antica",
    "difficulty": "Boss",
    "cr": 1,
    "xp": 200,
    "type": "Celestiale",
    "role": "Boss",
    "size": "Grande",
    "icon": "??",
    "armorClass": 16,
    "hitPoints": 49,
    "speed": "9 m",
    "alignment": "Neutrale buono",
    "tags": [
      "Celestiale",
      "Boss",
      "Foresta Antica",
      "forest",
      "Grande",
      "Atletica"
    ],
    "description": "Creatura legata a sentieri perduti, muschio e querce, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come boss, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Vista del Predatore: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Urto Brutale. +3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d12+2.",
    "tactics": "concentra gli attacchi sui personaggi feriti",
    "resistances": "freddo",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "Percezione passiva",
    "languages": "Comune, Celestiale",
    "loot": "cuore annerito, scaglia intatta, polvere arcana",
    "combat": {
      "attackBonus": "+3",
      "damage": "2d12+2",
      "averageDamage": 15,
      "damageType": "radiosi",
      "damageNote": "Urto Brutale. +3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d12+2."
    },
    "abilityScores": {
      "str": 12,
      "dex": 10,
      "con": 20,
      "int": 9,
      "wis": 9,
      "cha": 7
    },
    "technicalActions": [
      {
        "name": "Urto Brutale",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 3,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "2d12+2",
        "damageType": "radiosi",
        "hit": "+3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d12+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-foresta_antica_0024",
    "sourceId": "foresta_antica_0024",
    "name": "Colosso delle Ceneri",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Foresta Antica",
    "difficulty": "Facile",
    "cr": 2,
    "xp": 450,
    "type": "Bestia",
    "role": "Predatore",
    "size": "Piccola",
    "icon": "??",
    "armorClass": 18,
    "hitPoints": 47,
    "speed": "9 m, nuotare 9 m",
    "alignment": "Neutrale buono",
    "tags": [
      "Bestia",
      "Predatore",
      "Foresta Antica",
      "forest",
      "Piccola",
      "Percezione"
    ],
    "description": "Creatura legata a querce, radici e linfa, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come predatore, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Odio Territoriale: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Urto Brutale. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+3.",
    "tactics": "usa coperture, ombre e ostacoli prima di esporsi",
    "resistances": "necrotico",
    "immunities": "nessuna",
    "vulnerabilities": "radiante",
    "senses": "vista cieca 9 m",
    "languages": "Comune, Sottocomune",
    "loot": "occhio cristallizzato, dente raro, moneta antica",
    "combat": {
      "attackBonus": "+7",
      "damage": "1d6+3",
      "averageDamage": 7,
      "damageType": "variabili",
      "damageNote": "Urto Brutale. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+3."
    },
    "abilityScores": {
      "str": 12,
      "dex": 16,
      "con": 10,
      "int": 14,
      "wis": 13,
      "cha": 10
    },
    "technicalActions": [
      {
        "name": "Urto Brutale",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 7,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d6+3",
        "damageType": "variabili",
        "hit": "+7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+3.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-foresta_antica_0027",
    "sourceId": "foresta_antica_0027",
    "name": "Sovrano della Fiamma Fredda",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Foresta Antica",
    "difficulty": "Facile",
    "cr": 1,
    "xp": 200,
    "type": "Gigante",
    "role": "Predatore",
    "size": "Media",
    "icon": "??",
    "armorClass": 16,
    "hitPoints": 28,
    "speed": "12 m, volare 18 m",
    "alignment": "Legale buono",
    "tags": [
      "Gigante",
      "Predatore",
      "Foresta Antica",
      "forest",
      "Media",
      "Natura",
      "Intimidire"
    ],
    "description": "Creatura legata a querce, linfa e sentieri perduti, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come predatore, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Vista del Predatore: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Soffio Minore. +6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2.",
    "tactics": "difende una tana o una reliquia e non insegue lontano",
    "resistances": "psichico",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 36 m",
    "languages": "Comune, Infernale",
    "loot": "occhio cristallizzato, dente raro, moneta antica",
    "combat": {
      "attackBonus": "+6",
      "damage": "1d6+2",
      "averageDamage": 6,
      "damageType": "variabili",
      "damageNote": "Soffio Minore. +6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2."
    },
    "abilityScores": {
      "str": 8,
      "dex": 17,
      "con": 14,
      "int": 5,
      "wis": 16,
      "cha": 11
    },
    "technicalActions": [
      {
        "name": "Soffio Minore",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 6,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d6+2",
        "damageType": "variabili",
        "hit": "+6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-foresta_antica_0028",
    "sourceId": "foresta_antica_0028",
    "name": "Mirmidone delle Catene",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Foresta Antica",
    "difficulty": "Facile",
    "cr": 1,
    "xp": 200,
    "type": "Folletto",
    "role": "Bruto",
    "size": "Minuscola",
    "icon": "??",
    "armorClass": 13,
    "hitPoints": 29,
    "speed": "9 m, nuotare 9 m",
    "alignment": "Neutrale buono",
    "tags": [
      "Folletto",
      "Bruto",
      "Foresta Antica",
      "forest",
      "Minuscola",
      "Furtività",
      "Intimidire",
      "Inganno"
    ],
    "description": "Creatura legata a sentieri perduti, radici e linfa, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come bruto, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Sangue Innaturale: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Dardo Spirituale. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d6+2.",
    "tactics": "difende una tana o una reliquia e non insegue lontano",
    "resistances": "radiante",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "Percezione passiva",
    "languages": "Draconico",
    "loot": "artiglio inciso, pelle resistente, frammento rituale",
    "combat": {
      "attackBonus": "+7",
      "damage": "2d6+2",
      "averageDamage": 9,
      "damageType": "variabili",
      "damageNote": "Dardo Spirituale. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d6+2."
    },
    "abilityScores": {
      "str": 18,
      "dex": 11,
      "con": 15,
      "int": 9,
      "wis": 8,
      "cha": 10
    },
    "technicalActions": [
      {
        "name": "Dardo Spirituale",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 7,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "2d6+2",
        "damageType": "variabili",
        "hit": "+7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d6+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-foresta_antica_0029",
    "sourceId": "foresta_antica_0029",
    "name": "Cervo delle Ossa",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Foresta Antica",
    "difficulty": "Facile",
    "cr": 1,
    "xp": 200,
    "type": "Pianta",
    "role": "Assalitore",
    "size": "Media",
    "icon": "??",
    "armorClass": 16,
    "hitPoints": 30,
    "speed": "12 m",
    "alignment": "Legale buono",
    "tags": [
      "Pianta",
      "Schermagliatore",
      "Foresta Antica",
      "forest",
      "Media",
      "Atletica"
    ],
    "description": "Creatura legata a muschio, linfa e querce, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come schermagliatore, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Sangue Innaturale: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Urto Brutale. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d8+2.",
    "tactics": "usa coperture, ombre e ostacoli prima di esporsi",
    "resistances": "veleno",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 18 m",
    "languages": "Draconico",
    "loot": "artiglio inciso, pelle resistente, frammento rituale",
    "combat": {
      "attackBonus": "+5",
      "damage": "1d8+2",
      "averageDamage": 7,
      "damageType": "variabili",
      "damageNote": "Urto Brutale. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d8+2."
    },
    "abilityScores": {
      "str": 8,
      "dex": 12,
      "con": 12,
      "int": 9,
      "wis": 9,
      "cha": 12
    },
    "technicalActions": [
      {
        "name": "Urto Brutale",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 5,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d8+2",
        "damageType": "variabili",
        "hit": "+5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d8+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-bosco_oscuro_0101",
    "sourceId": "bosco_oscuro_0101",
    "name": "Sovrano del Sole Morto",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Bosco Oscuro",
    "difficulty": "Semplice",
    "cr": 0.5,
    "xp": 100,
    "type": "Drago",
    "role": "Predatore",
    "size": "Grande",
    "icon": "??",
    "armorClass": 16,
    "hitPoints": 14,
    "speed": "12 m",
    "alignment": "Neutrale buono",
    "tags": [
      "Drago",
      "Predatore",
      "Bosco Oscuro",
      "forest",
      "Grande",
      "Sopravvivenza"
    ],
    "description": "Creatura legata a tronchi contorti, corvi e rovi, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come predatore, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Pelle Rinforzata: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Morso. +4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d8+2.",
    "tactics": "concentra gli attacchi sui personaggi feriti",
    "resistances": "psichico",
    "immunities": "nessuna",
    "vulnerabilities": "tuono",
    "senses": "scurovisione 36 m",
    "languages": "—",
    "loot": "scheggia elementale, sangue denso, reliquia consumata",
    "combat": {
      "attackBonus": "+4",
      "damage": "1d8+2",
      "averageDamage": 7,
      "damageType": "variabili",
      "damageNote": "Morso. +4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d8+2."
    },
    "abilityScores": {
      "str": 11,
      "dex": 14,
      "con": 11,
      "int": 7,
      "wis": 17,
      "cha": 6
    },
    "technicalActions": [
      {
        "name": "Morso",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 4,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d8+2",
        "damageType": "variabili",
        "hit": "+4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d8+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-bosco_oscuro_0102",
    "sourceId": "bosco_oscuro_0102",
    "name": "Profanatore della Soglia",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Bosco Oscuro",
    "difficulty": "Semplice",
    "cr": 0.25,
    "xp": 50,
    "type": "Bestia",
    "role": "Bruto",
    "size": "Grande",
    "icon": "??",
    "armorClass": 13,
    "hitPoints": 11,
    "speed": "6 m, scavare 9 m",
    "alignment": "Neutrale malvagio",
    "tags": [
      "Bestia",
      "Bruto",
      "Bosco Oscuro",
      "forest",
      "Grande",
      "Natura",
      "Percezione"
    ],
    "description": "Creatura legata a ombre, nebbia nera e rovi, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come bruto, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Passo Silenzioso: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Artiglio. +6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d12+2.",
    "tactics": "difende una tana o una reliquia e non insegue lontano",
    "resistances": "psichico",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 36 m",
    "languages": "Comune, Celestiale",
    "loot": "osso lavorabile, ghiandola alchemica, trofeo minore",
    "combat": {
      "attackBonus": "+6",
      "damage": "2d12+2",
      "averageDamage": 15,
      "damageType": "variabili",
      "damageNote": "Artiglio. +6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d12+2."
    },
    "abilityScores": {
      "str": 14,
      "dex": 9,
      "con": 17,
      "int": 3,
      "wis": 9,
      "cha": 11
    },
    "technicalActions": [
      {
        "name": "Artiglio",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 6,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "2d12+2",
        "damageType": "variabili",
        "hit": "+6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d12+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-bosco_oscuro_0103",
    "sourceId": "bosco_oscuro_0103",
    "name": "Draco della Ruggine",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Bosco Oscuro",
    "difficulty": "Semplice",
    "cr": 0.25,
    "xp": 50,
    "type": "Gigante",
    "role": "Sciame",
    "size": "Media",
    "icon": "??",
    "armorClass": 15,
    "hitPoints": 14,
    "speed": "12 m, volare 18 m",
    "alignment": "Neutrale",
    "tags": [
      "Gigante",
      "Minion",
      "Bosco Oscuro",
      "forest",
      "Media",
      "Furtività",
      "Sopravvivenza",
      "Natura"
    ],
    "description": "Creatura legata a tronchi contorti, rovi e ombre, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come minion, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Sangue Innaturale: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Soffio Minore. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2.",
    "tactics": "protegge il terreno favorevole e costringe il gruppo a muoversi",
    "resistances": "contundente/perforante/tagliente da armi non magiche",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 36 m",
    "languages": "Draconico",
    "loot": "scheggia elementale, sangue denso, reliquia consumata",
    "combat": {
      "attackBonus": "+5",
      "damage": "1d6+2",
      "averageDamage": 6,
      "damageType": "variabili",
      "damageNote": "Soffio Minore. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2."
    },
    "abilityScores": {
      "str": 10,
      "dex": 15,
      "con": 11,
      "int": 5,
      "wis": 13,
      "cha": 11
    },
    "technicalActions": [
      {
        "name": "Soffio Minore",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 5,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d6+2",
        "damageType": "variabili",
        "hit": "+5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-bosco_oscuro_0104",
    "sourceId": "bosco_oscuro_0104",
    "name": "Cavaliere della Ruggine",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Bosco Oscuro",
    "difficulty": "Semplice",
    "cr": 0.125,
    "xp": 25,
    "type": "Bestia",
    "role": "Assalitore",
    "size": "Piccola",
    "icon": "??",
    "armorClass": 13,
    "hitPoints": 9,
    "speed": "9 m, nuotare 9 m",
    "alignment": "Caotico malvagio",
    "tags": [
      "Bestia",
      "Schermagliatore",
      "Bosco Oscuro",
      "forest",
      "Piccola",
      "Natura",
      "Atletica",
      "Inganno"
    ],
    "description": "Creatura legata a corvi, ombre e rovi, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come schermagliatore, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Agguato Naturale: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Lama Ricurva. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2.",
    "tactics": "cerca di separare il party con pressione costante",
    "resistances": "radiante",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "vista cieca 9 m",
    "languages": "Comune, Sottocomune",
    "loot": "occhio cristallizzato, dente raro, moneta antica",
    "combat": {
      "attackBonus": "+5",
      "damage": "1d6+2",
      "averageDamage": 6,
      "damageType": "variabili",
      "damageNote": "Lama Ricurva. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2."
    },
    "abilityScores": {
      "str": 11,
      "dex": 14,
      "con": 13,
      "int": 8,
      "wis": 16,
      "cha": 7
    },
    "technicalActions": [
      {
        "name": "Lama Ricurva",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 5,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d6+2",
        "damageType": "variabili",
        "hit": "+5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-bosco_oscuro_0105",
    "sourceId": "bosco_oscuro_0105",
    "name": "Bestia delle Spine",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Bosco Oscuro",
    "difficulty": "Semplice",
    "cr": 0.125,
    "xp": 25,
    "type": "Drago",
    "role": "Assalitore",
    "size": "Grande",
    "icon": "??",
    "armorClass": 14,
    "hitPoints": 10,
    "speed": "9 m, nuotare 9 m",
    "alignment": "Neutrale malvagio",
    "tags": [
      "Drago",
      "Assassino",
      "Bosco Oscuro",
      "forest",
      "Grande",
      "Natura",
      "Arcano"
    ],
    "description": "Creatura legata a tronchi contorti, ombre e nebbia nera, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come assassino, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Istinto di Branco: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Spina Lanciata. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2.",
    "tactics": "cerca di separare il party con pressione costante",
    "resistances": "necrotico",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 36 m",
    "languages": "comprende una lingua ma non parla",
    "loot": "scheggia elementale, sangue denso, reliquia consumata",
    "combat": {
      "attackBonus": "+5",
      "damage": "1d12+2",
      "averageDamage": 9,
      "damageType": "variabili",
      "damageNote": "Spina Lanciata. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2."
    },
    "abilityScores": {
      "str": 8,
      "dex": 12,
      "con": 11,
      "int": 3,
      "wis": 10,
      "cha": 11
    },
    "technicalActions": [
      {
        "name": "Spina Lanciata",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 5,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d12+2",
        "damageType": "variabili",
        "hit": "+5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-bosco_oscuro_0106",
    "sourceId": "bosco_oscuro_0106",
    "name": "Araldo dei Cristalli",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Bosco Oscuro",
    "difficulty": "Semplice",
    "cr": 0.25,
    "xp": 50,
    "type": "Umanoide",
    "role": "Assalitore",
    "size": "Media",
    "icon": "??",
    "armorClass": 16,
    "hitPoints": 14,
    "speed": "6 m, scavare 9 m",
    "alignment": "Neutrale malvagio",
    "tags": [
      "Umanoide",
      "Assassino",
      "Bosco Oscuro",
      "forest",
      "Media",
      "Percezione"
    ],
    "description": "Creatura legata a ombre, rovi e nebbia nera, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come assassino, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Passo Silenzioso: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Urto Brutale. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2.",
    "tactics": "difende una tana o una reliquia e non insegue lontano",
    "resistances": "necrotico",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "vista cieca 9 m",
    "languages": "Comune, Celestiale",
    "loot": "cuore annerito, scaglia intatta, polvere arcana",
    "combat": {
      "attackBonus": "+5",
      "damage": "1d12+2",
      "averageDamage": 9,
      "damageType": "variabili",
      "damageNote": "Urto Brutale. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2."
    },
    "abilityScores": {
      "str": 13,
      "dex": 14,
      "con": 12,
      "int": 5,
      "wis": 11,
      "cha": 8
    },
    "technicalActions": [
      {
        "name": "Urto Brutale",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 5,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d12+2",
        "damageType": "variabili",
        "hit": "+5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-bosco_oscuro_0107",
    "sourceId": "bosco_oscuro_0107",
    "name": "Mietitore delle Ossa",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Bosco Oscuro",
    "difficulty": "Semplice",
    "cr": 0.125,
    "xp": 25,
    "type": "Elementale",
    "role": "Assalitore",
    "size": "Minuscola",
    "icon": "??",
    "armorClass": 16,
    "hitPoints": 10,
    "speed": "9 m, scalare 9 m",
    "alignment": "Neutrale buono",
    "tags": [
      "Elementale",
      "Assassino",
      "Bosco Oscuro",
      "forest",
      "Minuscola",
      "Arcano",
      "Acrobazia"
    ],
    "description": "Creatura legata a nebbia nera, rovi e corvi, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come assassino, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Pelle Rinforzata: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Soffio Minore. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2.",
    "tactics": "cerca di separare il party con pressione costante",
    "resistances": "contundente/perforante/tagliente da armi non magiche",
    "immunities": "nessuna",
    "vulnerabilities": "fuoco",
    "senses": "vista cieca 9 m",
    "languages": "Comune",
    "loot": "cuore annerito, scaglia intatta, polvere arcana",
    "combat": {
      "attackBonus": "+7",
      "damage": "1d6+2",
      "averageDamage": 6,
      "damageType": "variabili",
      "damageNote": "Soffio Minore. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2."
    },
    "abilityScores": {
      "str": 10,
      "dex": 16,
      "con": 12,
      "int": 13,
      "wis": 8,
      "cha": 9
    },
    "technicalActions": [
      {
        "name": "Soffio Minore",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 7,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d6+2",
        "damageType": "variabili",
        "hit": "+7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-bosco_oscuro_0108",
    "sourceId": "bosco_oscuro_0108",
    "name": "Serpe del Sale Nero",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Bosco Oscuro",
    "difficulty": "Semplice",
    "cr": 0,
    "xp": 10,
    "type": "Folletto",
    "role": "Assalitore",
    "size": "Grande",
    "icon": "??",
    "armorClass": 13,
    "hitPoints": 6,
    "speed": "9 m, scalare 9 m",
    "alignment": "Neutrale buono",
    "tags": [
      "Folletto",
      "Schermagliatore",
      "Bosco Oscuro",
      "forest",
      "Grande",
      "Atletica"
    ],
    "description": "Creatura legata a tronchi contorti, nebbia nera e corvi, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come schermagliatore, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Vista del Predatore: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Soffio Minore. +4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d8+2.",
    "tactics": "concentra gli attacchi sui personaggi feriti",
    "resistances": "contundente/perforante/tagliente da armi non magiche",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "Percezione passiva",
    "languages": "Comune, Silvano",
    "loot": "osso lavorabile, ghiandola alchemica, trofeo minore",
    "combat": {
      "attackBonus": "+4",
      "damage": "1d8+2",
      "averageDamage": 7,
      "damageType": "variabili",
      "damageNote": "Soffio Minore. +4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d8+2."
    },
    "abilityScores": {
      "str": 15,
      "dex": 14,
      "con": 12,
      "int": 6,
      "wis": 13,
      "cha": 8
    },
    "technicalActions": [
      {
        "name": "Soffio Minore",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 4,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d8+2",
        "damageType": "variabili",
        "hit": "+4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d8+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-bosco_oscuro_0109",
    "sourceId": "bosco_oscuro_0109",
    "name": "Cantore del Sale Nero",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Bosco Oscuro",
    "difficulty": "Semplice",
    "cr": 0,
    "xp": 10,
    "type": "Pianta",
    "role": "Sciame",
    "size": "Media",
    "icon": "??",
    "armorClass": 15,
    "hitPoints": 6,
    "speed": "12 m, volare 18 m",
    "alignment": "Neutrale buono",
    "tags": [
      "Pianta",
      "Minion",
      "Bosco Oscuro",
      "forest",
      "Media",
      "Arcano",
      "Atletica",
      "Percezione"
    ],
    "description": "Creatura legata a nebbia nera, rovi e tronchi contorti, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come minion, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Odio Territoriale: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Spina Lanciata. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
    "tactics": "protegge il terreno favorevole e costringe il gruppo a muoversi",
    "resistances": "necrotico",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 18 m",
    "languages": "Comune, Celestiale",
    "loot": "occhio cristallizzato, dente raro, moneta antica",
    "combat": {
      "attackBonus": "+7",
      "damage": "1d10+2",
      "averageDamage": 8,
      "damageType": "variabili",
      "damageNote": "Spina Lanciata. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2."
    },
    "abilityScores": {
      "str": 10,
      "dex": 16,
      "con": 10,
      "int": 8,
      "wis": 9,
      "cha": 10
    },
    "technicalActions": [
      {
        "name": "Spina Lanciata",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 7,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d10+2",
        "damageType": "variabili",
        "hit": "+7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-bosco_oscuro_0110",
    "sourceId": "bosco_oscuro_0110",
    "name": "Veggente della Tempesta",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Bosco Oscuro",
    "difficulty": "Semplice",
    "cr": 0,
    "xp": 10,
    "type": "Mostruosità",
    "role": "Assalitore",
    "size": "Piccola",
    "icon": "??",
    "armorClass": 13,
    "hitPoints": 9,
    "speed": "6 m, scavare 9 m",
    "alignment": "Neutrale malvagio",
    "tags": [
      "Mostruosità",
      "Schermagliatore",
      "Bosco Oscuro",
      "forest",
      "Piccola",
      "Percezione"
    ],
    "description": "Creatura legata a nebbia nera, rovi e ombre, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come schermagliatore, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Agguato Naturale: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Colpo Pesante. +6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
    "tactics": "concentra gli attacchi sui personaggi feriti",
    "resistances": "contundente/perforante/tagliente da armi non magiche",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 18 m",
    "languages": "Draconico",
    "loot": "artiglio inciso, pelle resistente, frammento rituale",
    "combat": {
      "attackBonus": "+6",
      "damage": "1d10+2",
      "averageDamage": 8,
      "damageType": "variabili",
      "damageNote": "Colpo Pesante. +6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2."
    },
    "abilityScores": {
      "str": 8,
      "dex": 14,
      "con": 11,
      "int": 6,
      "wis": 12,
      "cha": 8
    },
    "technicalActions": [
      {
        "name": "Colpo Pesante",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 6,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d10+2",
        "damageType": "variabili",
        "hit": "+6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-bosco_oscuro_0111",
    "sourceId": "bosco_oscuro_0111",
    "name": "Araldo delle Campane Mute",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Bosco Oscuro",
    "difficulty": "Facile",
    "cr": 2,
    "xp": 450,
    "type": "Pianta",
    "role": "Incantatore",
    "size": "Minuscola",
    "icon": "??",
    "armorClass": 12,
    "hitPoints": 37,
    "speed": "12 m, volare 18 m",
    "alignment": "Legale buono",
    "tags": [
      "Pianta",
      "Incantatore",
      "Bosco Oscuro",
      "forest",
      "Minuscola",
      "Sopravvivenza",
      "Natura"
    ],
    "description": "Creatura legata a rovi, ombre e corvi, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come incantatore, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Pelle Rinforzata: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Morso. +1 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+3.",
    "tactics": "usa coperture, ombre e ostacoli prima di esporsi",
    "resistances": "nessuna",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "percezione tellurica 18 m",
    "languages": "Comune, Infernale",
    "loot": "occhio cristallizzato, dente raro, moneta antica",
    "combat": {
      "attackBonus": "+1",
      "damage": "1d12+3",
      "averageDamage": 10,
      "damageType": "variabili",
      "damageNote": "Morso. +1 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+3."
    },
    "abilityScores": {
      "str": 9,
      "dex": 9,
      "con": 11,
      "int": 11,
      "wis": 13,
      "cha": 12
    },
    "technicalActions": [
      {
        "name": "Morso",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 1,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d12+3",
        "damageType": "variabili",
        "hit": "+1 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+3.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-bosco_oscuro_0113",
    "sourceId": "bosco_oscuro_0113",
    "name": "Serpe della Lama Cava",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Bosco Oscuro",
    "difficulty": "Facile",
    "cr": 2,
    "xp": 450,
    "type": "Pianta",
    "role": "Assalitore",
    "size": "Minuscola",
    "icon": "??",
    "armorClass": 14,
    "hitPoints": 45,
    "speed": "9 m, nuotare 9 m",
    "alignment": "Legale buono",
    "tags": [
      "Pianta",
      "Schermagliatore",
      "Bosco Oscuro",
      "forest",
      "Minuscola",
      "Inganno"
    ],
    "description": "Creatura legata a tronchi contorti, rovi e corvi, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come schermagliatore, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Resistenza Antica: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Morso. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+3.",
    "tactics": "concentra gli attacchi sui personaggi feriti",
    "resistances": "freddo",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "vista cieca 9 m",
    "languages": "—",
    "loot": "occhio cristallizzato, dente raro, moneta antica",
    "combat": {
      "attackBonus": "+5",
      "damage": "1d6+3",
      "averageDamage": 7,
      "damageType": "variabili",
      "damageNote": "Morso. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+3."
    },
    "abilityScores": {
      "str": 10,
      "dex": 15,
      "con": 17,
      "int": 5,
      "wis": 13,
      "cha": 8
    },
    "technicalActions": [
      {
        "name": "Morso",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 5,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d6+3",
        "damageType": "variabili",
        "hit": "+5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+3.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-bosco_oscuro_0115",
    "sourceId": "bosco_oscuro_0115",
    "name": "Idra del Sangue Pallido",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Bosco Oscuro",
    "difficulty": "Facile",
    "cr": 1,
    "xp": 200,
    "type": "Bestia",
    "role": "Assalitore",
    "size": "Minuscola",
    "icon": "??",
    "armorClass": 18,
    "hitPoints": 32,
    "speed": "12 m",
    "alignment": "Neutrale",
    "tags": [
      "Bestia",
      "Schermagliatore",
      "Bosco Oscuro",
      "forest",
      "Minuscola",
      "Intimidire",
      "Natura"
    ],
    "description": "Creatura legata a corvi, tronchi contorti e nebbia nera, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come schermagliatore, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Istinto di Branco: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Spina Lanciata. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
    "tactics": "difende una tana o una reliquia e non insegue lontano",
    "resistances": "freddo",
    "immunities": "nessuna",
    "vulnerabilities": "radiante",
    "senses": "percezione tellurica 18 m",
    "languages": "comprende una lingua ma non parla",
    "loot": "artiglio inciso, pelle resistente, frammento rituale",
    "combat": {
      "attackBonus": "+7",
      "damage": "1d10+2",
      "averageDamage": 8,
      "damageType": "variabili",
      "damageNote": "Spina Lanciata. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2."
    },
    "abilityScores": {
      "str": 9,
      "dex": 21,
      "con": 15,
      "int": 11,
      "wis": 11,
      "cha": 11
    },
    "technicalActions": [
      {
        "name": "Spina Lanciata",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 7,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d10+2",
        "damageType": "variabili",
        "hit": "+7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-bosco_oscuro_0116",
    "sourceId": "bosco_oscuro_0116",
    "name": "Serpe della Ruggine",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Bosco Oscuro",
    "difficulty": "Facile",
    "cr": 2,
    "xp": 450,
    "type": "Pianta",
    "role": "Supporto",
    "size": "Grande",
    "icon": "??",
    "armorClass": 14,
    "hitPoints": 34,
    "speed": "6 m, scavare 9 m",
    "alignment": "Caotico neutrale",
    "tags": [
      "Pianta",
      "Supporto",
      "Bosco Oscuro",
      "forest",
      "Grande",
      "Furtività",
      "Natura",
      "Sopravvivenza"
    ],
    "description": "Creatura legata a tronchi contorti, nebbia nera e corvi, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come supporto, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Furia del Bioma: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Lama Ricurva. +4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+3.",
    "tactics": "difende una tana o una reliquia e non insegue lontano",
    "resistances": "contundente/perforante/tagliente da armi non magiche",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "Percezione passiva",
    "languages": "Comune, Silvano",
    "loot": "occhio cristallizzato, dente raro, moneta antica",
    "combat": {
      "attackBonus": "+4",
      "damage": "1d12+3",
      "averageDamage": 10,
      "damageType": "variabili",
      "damageNote": "Lama Ricurva. +4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+3."
    },
    "abilityScores": {
      "str": 10,
      "dex": 11,
      "con": 10,
      "int": 10,
      "wis": 13,
      "cha": 7
    },
    "technicalActions": [
      {
        "name": "Lama Ricurva",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 4,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d12+3",
        "damageType": "variabili",
        "hit": "+4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+3.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-bosco_oscuro_0121",
    "sourceId": "bosco_oscuro_0121",
    "name": "Profanatore dei Cristalli",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Bosco Oscuro",
    "difficulty": "Boss",
    "cr": 2,
    "xp": 450,
    "type": "Costrutto",
    "role": "Boss",
    "size": "Minuscola",
    "icon": "??",
    "armorClass": 14,
    "hitPoints": 67,
    "speed": "9 m, scalare 9 m",
    "alignment": "Caotico malvagio",
    "tags": [
      "Costrutto",
      "Boss",
      "Bosco Oscuro",
      "forest",
      "Minuscola",
      "Acrobazia"
    ],
    "description": "Creatura legata a ombre, rovi e corvi, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come boss, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Istinto di Branco: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Artiglio. +6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d6+3.",
    "tactics": "difende una tana o una reliquia e non insegue lontano",
    "resistances": "contundente/perforante/tagliente da armi non magiche",
    "immunities": "nessuna",
    "vulnerabilities": "radiante",
    "senses": "percezione tellurica 18 m",
    "languages": "comprende una lingua ma non parla",
    "loot": "artiglio inciso, pelle resistente, frammento rituale",
    "combat": {
      "attackBonus": "+6",
      "damage": "2d6+3",
      "averageDamage": 10,
      "damageType": "variabili",
      "damageNote": "Artiglio. +6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d6+3."
    },
    "abilityScores": {
      "str": 16,
      "dex": 11,
      "con": 17,
      "int": 3,
      "wis": 11,
      "cha": 9
    },
    "technicalActions": [
      {
        "name": "Artiglio",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 6,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "2d6+3",
        "damageType": "variabili",
        "hit": "+6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d6+3.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-bosco_oscuro_0122",
    "sourceId": "bosco_oscuro_0122",
    "name": "Araldo del Sale Nero",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Bosco Oscuro",
    "difficulty": "Facile",
    "cr": 2,
    "xp": 450,
    "type": "Costrutto",
    "role": "Incantatore",
    "size": "Grande",
    "icon": "??",
    "armorClass": 13,
    "hitPoints": 47,
    "speed": "12 m, volare 18 m",
    "alignment": "Caotico neutrale",
    "tags": [
      "Costrutto",
      "Incantatore",
      "Bosco Oscuro",
      "forest",
      "Grande",
      "Arcano"
    ],
    "description": "Creatura legata a ombre, nebbia nera e corvi, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come incantatore, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Pelle Rinforzata: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Artiglio. +3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+3.",
    "tactics": "difende una tana o una reliquia e non insegue lontano",
    "resistances": "contundente/perforante/tagliente da armi non magiche",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "vista cieca 9 m",
    "languages": "Draconico",
    "loot": "scheggia elementale, sangue denso, reliquia consumata",
    "combat": {
      "attackBonus": "+3",
      "damage": "1d10+3",
      "averageDamage": 9,
      "damageType": "variabili",
      "damageNote": "Artiglio. +3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+3."
    },
    "abilityScores": {
      "str": 9,
      "dex": 10,
      "con": 13,
      "int": 7,
      "wis": 10,
      "cha": 6
    },
    "technicalActions": [
      {
        "name": "Artiglio",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 3,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d10+3",
        "damageType": "variabili",
        "hit": "+3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+3.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-bosco_oscuro_0123",
    "sourceId": "bosco_oscuro_0123",
    "name": "Spettro del Trono Sepolto",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Bosco Oscuro",
    "difficulty": "Facile",
    "cr": 1,
    "xp": 200,
    "type": "Costrutto",
    "role": "Assalitore",
    "size": "Minuscola",
    "icon": "??",
    "armorClass": 15,
    "hitPoints": 27,
    "speed": "12 m",
    "alignment": "Caotico neutrale",
    "tags": [
      "Costrutto",
      "Schermagliatore",
      "Bosco Oscuro",
      "forest",
      "Minuscola",
      "Inganno",
      "Arcano",
      "Intimidire"
    ],
    "description": "Creatura legata a ombre, tronchi contorti e nebbia nera, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come schermagliatore, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Aura Minore: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Soffio Minore. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d8+2.",
    "tactics": "cerca di separare il party con pressione costante",
    "resistances": "radiante",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 36 m",
    "languages": "Comune, Celestiale",
    "loot": "scheggia elementale, sangue denso, reliquia consumata",
    "combat": {
      "attackBonus": "+5",
      "damage": "1d8+2",
      "averageDamage": 7,
      "damageType": "variabili",
      "damageNote": "Soffio Minore. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d8+2."
    },
    "abilityScores": {
      "str": 14,
      "dex": 16,
      "con": 10,
      "int": 10,
      "wis": 14,
      "cha": 7
    },
    "technicalActions": [
      {
        "name": "Soffio Minore",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 5,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d8+2",
        "damageType": "variabili",
        "hit": "+5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d8+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-bosco_oscuro_0125",
    "sourceId": "bosco_oscuro_0125",
    "name": "Sanguisuga della Soglia",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Bosco Oscuro",
    "difficulty": "Facile",
    "cr": 2,
    "xp": 450,
    "type": "Folletto",
    "role": "Assalitore",
    "size": "Media",
    "icon": "??",
    "armorClass": 15,
    "hitPoints": 51,
    "speed": "6 m, scavare 9 m",
    "alignment": "Caotico malvagio",
    "tags": [
      "Folletto",
      "Assassino",
      "Bosco Oscuro",
      "forest",
      "Media",
      "Arcano",
      "Intimidire"
    ],
    "description": "Creatura legata a nebbia nera, ombre e tronchi contorti, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come assassino, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Aura Minore: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Morso. +6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+3.",
    "tactics": "usa coperture, ombre e ostacoli prima di esporsi",
    "resistances": "contundente/perforante/tagliente da armi non magiche",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 36 m",
    "languages": "Comune, Sottocomune",
    "loot": "occhio cristallizzato, dente raro, moneta antica",
    "combat": {
      "attackBonus": "+6",
      "damage": "1d10+3",
      "averageDamage": 9,
      "damageType": "variabili",
      "damageNote": "Morso. +6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+3."
    },
    "abilityScores": {
      "str": 17,
      "dex": 16,
      "con": 15,
      "int": 9,
      "wis": 8,
      "cha": 9
    },
    "technicalActions": [
      {
        "name": "Morso",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 6,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d10+3",
        "damageType": "variabili",
        "hit": "+6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+3.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-bosco_oscuro_0128",
    "sourceId": "bosco_oscuro_0128",
    "name": "Ragno delle Mille Bocche",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Bosco Oscuro",
    "difficulty": "Facile",
    "cr": 1,
    "xp": 200,
    "type": "Non morto",
    "role": "Boss",
    "size": "Grande",
    "icon": "??",
    "armorClass": 13,
    "hitPoints": 47,
    "speed": "9 m, scalare 9 m",
    "alignment": "Legale buono",
    "tags": [
      "Non morto",
      "Elite",
      "Bosco Oscuro",
      "forest",
      "Grande",
      "Atletica"
    ],
    "description": "Creatura legata a nebbia nera, corvi e tronchi contorti, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come elite, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Pelle Rinforzata: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Urto Brutale. +4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d8+2.",
    "tactics": "difende una tana o una reliquia e non insegue lontano",
    "resistances": "radiante",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 36 m",
    "languages": "Comune, Silvano",
    "loot": "osso lavorabile, ghiandola alchemica, trofeo minore",
    "combat": {
      "attackBonus": "+4",
      "damage": "2d8+2",
      "averageDamage": 11,
      "damageType": "necrotici",
      "damageNote": "Urto Brutale. +4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d8+2."
    },
    "abilityScores": {
      "str": 14,
      "dex": 13,
      "con": 13,
      "int": 7,
      "wis": 11,
      "cha": 7
    },
    "technicalActions": [
      {
        "name": "Urto Brutale",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 4,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "2d8+2",
        "damageType": "necrotici",
        "hit": "+4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d8+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-bosco_oscuro_0129",
    "sourceId": "bosco_oscuro_0129",
    "name": "Sentinella del Pozzo Cieco",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Bosco Oscuro",
    "difficulty": "Boss",
    "cr": 2,
    "xp": 450,
    "type": "Immondo",
    "role": "Boss",
    "size": "Minuscola",
    "icon": "??",
    "armorClass": 14,
    "hitPoints": 66,
    "speed": "9 m, nuotare 9 m",
    "alignment": "Legale buono",
    "tags": [
      "Immondo",
      "Boss",
      "Bosco Oscuro",
      "forest",
      "Minuscola",
      "Percezione",
      "Arcano",
      "Acrobazia"
    ],
    "description": "Creatura legata a nebbia nera, rovi e corvi, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come boss, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Furia del Bioma: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Colpo Pesante. +3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d8+3.",
    "tactics": "protegge il terreno favorevole e costringe il gruppo a muoversi",
    "resistances": "contundente/perforante/tagliente da armi non magiche",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 36 m",
    "languages": "comprende una lingua ma non parla",
    "loot": "cuore annerito, scaglia intatta, polvere arcana",
    "combat": {
      "attackBonus": "+3",
      "damage": "2d8+3",
      "averageDamage": 12,
      "damageType": "variabili",
      "damageNote": "Colpo Pesante. +3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d8+3."
    },
    "abilityScores": {
      "str": 11,
      "dex": 12,
      "con": 15,
      "int": 3,
      "wis": 8,
      "cha": 8
    },
    "technicalActions": [
      {
        "name": "Colpo Pesante",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 3,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "2d8+3",
        "damageType": "variabili",
        "hit": "+3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d8+3.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-bosco_oscuro_0130",
    "sourceId": "bosco_oscuro_0130",
    "name": "Aquila delle Mille Bocche",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Bosco Oscuro",
    "difficulty": "Facile",
    "cr": 1,
    "xp": 200,
    "type": "Mostruosità",
    "role": "Guardiano",
    "size": "Minuscola",
    "icon": "??",
    "armorClass": 14,
    "hitPoints": 20,
    "speed": "6 m, scavare 9 m",
    "alignment": "Neutrale malvagio",
    "tags": [
      "Mostruosità",
      "Guardiano",
      "Bosco Oscuro",
      "forest",
      "Minuscola",
      "Acrobazia"
    ],
    "description": "Creatura legata a rovi, nebbia nera e tronchi contorti, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come guardiano, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Resistenza Antica: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Morso. +4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2.",
    "tactics": "concentra gli attacchi sui personaggi feriti",
    "resistances": "psichico",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 18 m",
    "languages": "Draconico",
    "loot": "occhio cristallizzato, dente raro, moneta antica",
    "combat": {
      "attackBonus": "+4",
      "damage": "1d12+2",
      "averageDamage": 9,
      "damageType": "variabili",
      "damageNote": "Morso. +4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2."
    },
    "abilityScores": {
      "str": 12,
      "dex": 14,
      "con": 15,
      "int": 4,
      "wis": 8,
      "cha": 14
    },
    "technicalActions": [
      {
        "name": "Morso",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 4,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d12+2",
        "damageType": "variabili",
        "hit": "+4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-feywild_1101",
    "sourceId": "feywild_1101",
    "name": "Sovrano del Sangue Pallido",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Feywild",
    "difficulty": "Semplice",
    "cr": 0,
    "xp": 10,
    "type": "Folletto",
    "role": "Sciame",
    "size": "Minuscola",
    "icon": "??",
    "armorClass": 13,
    "hitPoints": 6,
    "speed": "12 m, volare 18 m",
    "alignment": "Legale neutrale",
    "tags": [
      "Folletto",
      "Minion",
      "Feywild",
      "forest",
      "Minuscola",
      "Inganno",
      "Atletica",
      "Furtività"
    ],
    "description": "Creatura legata a specchi d'acqua, lucciole e sogni, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come minion, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Sangue Innaturale: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Dardo Spirituale. +4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
    "tactics": "usa coperture, ombre e ostacoli prima di esporsi",
    "resistances": "contundente/perforante/tagliente da armi non magiche",
    "immunities": "nessuna",
    "vulnerabilities": "freddo",
    "senses": "scurovisione 36 m",
    "languages": "Comune, Sottocomune",
    "loot": "cuore annerito, scaglia intatta, polvere arcana",
    "combat": {
      "attackBonus": "+4",
      "damage": "1d10+2",
      "averageDamage": 8,
      "damageType": "variabili",
      "damageNote": "Dardo Spirituale. +4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2."
    },
    "abilityScores": {
      "str": 13,
      "dex": 8,
      "con": 13,
      "int": 7,
      "wis": 9,
      "cha": 9
    },
    "technicalActions": [
      {
        "name": "Dardo Spirituale",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 4,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d10+2",
        "damageType": "variabili",
        "hit": "+4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-feywild_1102",
    "sourceId": "feywild_1102",
    "name": "Araldo della Soglia 4",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Feywild",
    "difficulty": "Semplice",
    "cr": 0,
    "xp": 10,
    "type": "Pianta",
    "role": "Sciame",
    "size": "Media",
    "icon": "??",
    "armorClass": 14,
    "hitPoints": 7,
    "speed": "12 m, volare 18 m",
    "alignment": "Legale buono",
    "tags": [
      "Pianta",
      "Minion",
      "Feywild",
      "forest",
      "Media",
      "Intimidire"
    ],
    "description": "Creatura legata a danze, fiori impossibili e sogni, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come minion, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Vista del Predatore: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Colpo Pesante. +4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
    "tactics": "protegge il terreno favorevole e costringe il gruppo a muoversi",
    "resistances": "freddo",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 18 m",
    "languages": "Comune, Silvano",
    "loot": "scheggia elementale, sangue denso, reliquia consumata",
    "combat": {
      "attackBonus": "+4",
      "damage": "1d10+2",
      "averageDamage": 8,
      "damageType": "variabili",
      "damageNote": "Colpo Pesante. +4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2."
    },
    "abilityScores": {
      "str": 13,
      "dex": 13,
      "con": 11,
      "int": 8,
      "wis": 16,
      "cha": 7
    },
    "technicalActions": [
      {
        "name": "Colpo Pesante",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 4,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d10+2",
        "damageType": "variabili",
        "hit": "+4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-feywild_1103",
    "sourceId": "feywild_1103",
    "name": "Cervo della Tempesta",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Feywild",
    "difficulty": "Semplice",
    "cr": 0.125,
    "xp": 25,
    "type": "Umanoide",
    "role": "Bruto",
    "size": "Media",
    "icon": "??",
    "armorClass": 12,
    "hitPoints": 13,
    "speed": "6 m, scavare 9 m",
    "alignment": "Caotico malvagio",
    "tags": [
      "Umanoide",
      "Bruto",
      "Feywild",
      "forest",
      "Media",
      "Acrobazia"
    ],
    "description": "Creatura legata a lucciole, specchi d'acqua e fiori impossibili, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come bruto, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Istinto di Branco: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Lama Ricurva. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d8+2.",
    "tactics": "usa coperture, ombre e ostacoli prima di esporsi",
    "resistances": "contundente/perforante/tagliente da armi non magiche",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 36 m",
    "languages": "Comune, Celestiale",
    "loot": "cuore annerito, scaglia intatta, polvere arcana",
    "combat": {
      "attackBonus": "+7",
      "damage": "2d8+2",
      "averageDamage": 11,
      "damageType": "variabili",
      "damageNote": "Lama Ricurva. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d8+2."
    },
    "abilityScores": {
      "str": 21,
      "dex": 9,
      "con": 14,
      "int": 3,
      "wis": 13,
      "cha": 8
    },
    "technicalActions": [
      {
        "name": "Lama Ricurva",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 7,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "2d8+2",
        "damageType": "variabili",
        "hit": "+7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d8+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-feywild_1104",
    "sourceId": "feywild_1104",
    "name": "Alchimista delle Campane Mute 2",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Feywild",
    "difficulty": "Semplice",
    "cr": 0,
    "xp": 10,
    "type": "Umanoide",
    "role": "Sciame",
    "size": "Media",
    "icon": "??",
    "armorClass": 15,
    "hitPoints": 6,
    "speed": "9 m, nuotare 9 m",
    "alignment": "Neutrale buono",
    "tags": [
      "Umanoide",
      "Minion",
      "Feywild",
      "forest",
      "Media",
      "Inganno",
      "Furtività",
      "Intimidire"
    ],
    "description": "Creatura legata a sogni, lucciole e danze, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come minion, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Pelle Rinforzata: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Urto Brutale. +4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
    "tactics": "cerca di separare il party con pressione costante",
    "resistances": "psichico",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 18 m",
    "languages": "Draconico",
    "loot": "artiglio inciso, pelle resistente, frammento rituale",
    "combat": {
      "attackBonus": "+4",
      "damage": "1d10+2",
      "averageDamage": 8,
      "damageType": "variabili",
      "damageNote": "Urto Brutale. +4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2."
    },
    "abilityScores": {
      "str": 13,
      "dex": 12,
      "con": 16,
      "int": 7,
      "wis": 8,
      "cha": 8
    },
    "technicalActions": [
      {
        "name": "Urto Brutale",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 4,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d10+2",
        "damageType": "variabili",
        "hit": "+4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-feywild_1105",
    "sourceId": "feywild_1105",
    "name": "Apostolo delle Ceneri 4",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Feywild",
    "difficulty": "Semplice",
    "cr": 0.25,
    "xp": 50,
    "type": "Umanoide",
    "role": "Sciame",
    "size": "Minuscola",
    "icon": "??",
    "armorClass": 10,
    "hitPoints": 9,
    "speed": "9 m, scalare 9 m",
    "alignment": "Neutrale malvagio",
    "tags": [
      "Umanoide",
      "Minion",
      "Feywild",
      "forest",
      "Minuscola",
      "Atletica"
    ],
    "description": "Creatura legata a fiori impossibili, lucciole e danze, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come minion, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Agguato Naturale: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Soffio Minore. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d8+2.",
    "tactics": "apre lo scontro colpendo il bersaglio più isolato",
    "resistances": "psichico",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "vista cieca 9 m",
    "languages": "Comune, Silvano",
    "loot": "cuore annerito, scaglia intatta, polvere arcana",
    "combat": {
      "attackBonus": "+5",
      "damage": "1d8+2",
      "averageDamage": 7,
      "damageType": "variabili",
      "damageNote": "Soffio Minore. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d8+2."
    },
    "abilityScores": {
      "str": 12,
      "dex": 8,
      "con": 10,
      "int": 3,
      "wis": 9,
      "cha": 9
    },
    "technicalActions": [
      {
        "name": "Soffio Minore",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 5,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d8+2",
        "damageType": "variabili",
        "hit": "+5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d8+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-feywild_1106",
    "sourceId": "feywild_1106",
    "name": "Divoratore del Fiore Marcio",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Feywild",
    "difficulty": "Semplice",
    "cr": 0.125,
    "xp": 25,
    "type": "Umanoide",
    "role": "Bruto",
    "size": "Grande",
    "icon": "??",
    "armorClass": 12,
    "hitPoints": 10,
    "speed": "6 m, scavare 9 m",
    "alignment": "Legale buono",
    "tags": [
      "Umanoide",
      "Bruto",
      "Feywild",
      "forest",
      "Grande",
      "Sopravvivenza",
      "Natura"
    ],
    "description": "Creatura legata a fiori impossibili, specchi d'acqua e danze, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come bruto, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Aura Minore: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Colpo Pesante. +6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d10+2.",
    "tactics": "concentra gli attacchi sui personaggi feriti",
    "resistances": "psichico",
    "immunities": "nessuna",
    "vulnerabilities": "freddo",
    "senses": "scurovisione 36 m",
    "languages": "Comune, Infernale",
    "loot": "cuore annerito, scaglia intatta, polvere arcana",
    "combat": {
      "attackBonus": "+6",
      "damage": "2d10+2",
      "averageDamage": 13,
      "damageType": "variabili",
      "damageNote": "Colpo Pesante. +6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d10+2."
    },
    "abilityScores": {
      "str": 15,
      "dex": 8,
      "con": 15,
      "int": 5,
      "wis": 9,
      "cha": 7
    },
    "technicalActions": [
      {
        "name": "Colpo Pesante",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 6,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "2d10+2",
        "damageType": "variabili",
        "hit": "+6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d10+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-feywild_1107",
    "sourceId": "feywild_1107",
    "name": "Basilisco della Stanza Infinita 2",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Feywild",
    "difficulty": "Semplice",
    "cr": 0.5,
    "xp": 100,
    "type": "Bestia",
    "role": "Assalitore",
    "size": "Piccola",
    "icon": "??",
    "armorClass": 16,
    "hitPoints": 12,
    "speed": "9 m, scalare 9 m",
    "alignment": "Neutrale buono",
    "tags": [
      "Bestia",
      "Schermagliatore",
      "Feywild",
      "forest",
      "Piccola",
      "Furtività",
      "Percezione",
      "Atletica"
    ],
    "description": "Creatura legata a specchi d'acqua, lucciole e fiori impossibili, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come schermagliatore, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Passo Silenzioso: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Artiglio. +6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2.",
    "tactics": "protegge il terreno favorevole e costringe il gruppo a muoversi",
    "resistances": "necrotico",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "Percezione passiva",
    "languages": "Comune, Infernale",
    "loot": "cuore annerito, scaglia intatta, polvere arcana",
    "combat": {
      "attackBonus": "+6",
      "damage": "1d6+2",
      "averageDamage": 6,
      "damageType": "variabili",
      "damageNote": "Artiglio. +6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2."
    },
    "abilityScores": {
      "str": 10,
      "dex": 15,
      "con": 14,
      "int": 13,
      "wis": 11,
      "cha": 13
    },
    "technicalActions": [
      {
        "name": "Artiglio",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 6,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d6+2",
        "damageType": "variabili",
        "hit": "+6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-feywild_1108",
    "sourceId": "feywild_1108",
    "name": "Profanatore dell'Ossidiana 2",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Feywild",
    "difficulty": "Semplice",
    "cr": 0,
    "xp": 10,
    "type": "Umanoide",
    "role": "Assalitore",
    "size": "Grande",
    "icon": "??",
    "armorClass": 18,
    "hitPoints": 10,
    "speed": "12 m",
    "alignment": "Legale neutrale",
    "tags": [
      "Umanoide",
      "Schermagliatore",
      "Feywild",
      "forest",
      "Grande",
      "Percezione"
    ],
    "description": "Creatura legata a danze, specchi d'acqua e sogni, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come schermagliatore, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Sangue Innaturale: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Morso. +9 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d8+2.",
    "tactics": "cerca di separare il party con pressione costante",
    "resistances": "fuoco",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 18 m",
    "languages": "Comune, Celestiale",
    "loot": "artiglio inciso, pelle resistente, frammento rituale",
    "combat": {
      "attackBonus": "+9",
      "damage": "1d8+2",
      "averageDamage": 7,
      "damageType": "variabili",
      "damageNote": "Morso. +9 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d8+2."
    },
    "abilityScores": {
      "str": 8,
      "dex": 21,
      "con": 11,
      "int": 7,
      "wis": 14,
      "cha": 7
    },
    "technicalActions": [
      {
        "name": "Morso",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 9,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d8+2",
        "damageType": "variabili",
        "hit": "+9 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d8+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-feywild_1109",
    "sourceId": "feywild_1109",
    "name": "Titano del Vetro",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Feywild",
    "difficulty": "Semplice",
    "cr": 0.25,
    "xp": 50,
    "type": "Bestia",
    "role": "Bruto",
    "size": "Media",
    "icon": "??",
    "armorClass": 14,
    "hitPoints": 16,
    "speed": "9 m, scalare 9 m",
    "alignment": "Neutrale malvagio",
    "tags": [
      "Bestia",
      "Bruto",
      "Feywild",
      "forest",
      "Media",
      "Natura",
      "Sopravvivenza"
    ],
    "description": "Creatura legata a specchi d'acqua, lucciole e danze, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come bruto, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Furia del Bioma: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Spina Lanciata. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d8+2.",
    "tactics": "difende una tana o una reliquia e non insegue lontano",
    "resistances": "radiante",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "vista cieca 9 m",
    "languages": "Comune, Celestiale",
    "loot": "scheggia elementale, sangue denso, reliquia consumata",
    "combat": {
      "attackBonus": "+7",
      "damage": "2d8+2",
      "averageDamage": 11,
      "damageType": "variabili",
      "damageNote": "Spina Lanciata. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d8+2."
    },
    "abilityScores": {
      "str": 16,
      "dex": 10,
      "con": 15,
      "int": 10,
      "wis": 13,
      "cha": 7
    },
    "technicalActions": [
      {
        "name": "Spina Lanciata",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 7,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "2d8+2",
        "damageType": "variabili",
        "hit": "+7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d8+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-feywild_1110",
    "sourceId": "feywild_1110",
    "name": "Titano del Fiore Marcio",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Feywild",
    "difficulty": "Semplice",
    "cr": 0.5,
    "xp": 100,
    "type": "Umanoide",
    "role": "Guardiano",
    "size": "Media",
    "icon": "??",
    "armorClass": 16,
    "hitPoints": 16,
    "speed": "9 m, scalare 9 m",
    "alignment": "Neutrale buono",
    "tags": [
      "Umanoide",
      "Guardiano",
      "Feywild",
      "forest",
      "Media",
      "Percezione",
      "Atletica",
      "Acrobazia"
    ],
    "description": "Creatura legata a lucciole, specchi d'acqua e danze, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come guardiano, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Pelle Rinforzata: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Lama Ricurva. +3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
    "tactics": "usa coperture, ombre e ostacoli prima di esporsi",
    "resistances": "necrotico",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 36 m",
    "languages": "Comune, Sottocomune",
    "loot": "occhio cristallizzato, dente raro, moneta antica",
    "combat": {
      "attackBonus": "+3",
      "damage": "1d10+2",
      "averageDamage": 8,
      "damageType": "variabili",
      "damageNote": "Lama Ricurva. +3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2."
    },
    "abilityScores": {
      "str": 13,
      "dex": 10,
      "con": 20,
      "int": 7,
      "wis": 13,
      "cha": 7
    },
    "technicalActions": [
      {
        "name": "Lama Ricurva",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 3,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d10+2",
        "damageType": "variabili",
        "hit": "+3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-feywild_1113",
    "sourceId": "feywild_1113",
    "name": "Veggente dei Cristalli",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Feywild",
    "difficulty": "Facile",
    "cr": 2,
    "xp": 450,
    "type": "Folletto",
    "role": "Assalitore",
    "size": "Piccola",
    "icon": "??",
    "armorClass": 17,
    "hitPoints": 39,
    "speed": "9 m, nuotare 9 m",
    "alignment": "Caotico malvagio",
    "tags": [
      "Folletto",
      "Schermagliatore",
      "Feywild",
      "forest",
      "Piccola",
      "Natura",
      "Inganno"
    ],
    "description": "Creatura legata a fiori impossibili, specchi d'acqua e danze, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come schermagliatore, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Pelle Rinforzata: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Spina Lanciata. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+3.",
    "tactics": "difende una tana o una reliquia e non insegue lontano",
    "resistances": "radiante",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "percezione tellurica 18 m",
    "languages": "Comune, Sottocomune",
    "loot": "cuore annerito, scaglia intatta, polvere arcana",
    "combat": {
      "attackBonus": "+7",
      "damage": "1d6+3",
      "averageDamage": 7,
      "damageType": "variabili",
      "damageNote": "Spina Lanciata. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+3."
    },
    "abilityScores": {
      "str": 9,
      "dex": 16,
      "con": 13,
      "int": 14,
      "wis": 15,
      "cha": 13
    },
    "technicalActions": [
      {
        "name": "Spina Lanciata",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 7,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d6+3",
        "damageType": "variabili",
        "hit": "+7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+3.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-feywild_1116",
    "sourceId": "feywild_1116",
    "name": "Cantore delle Ossa 3",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Feywild",
    "difficulty": "Facile",
    "cr": 2,
    "xp": 450,
    "type": "Folletto",
    "role": "Assalitore",
    "size": "Media",
    "icon": "??",
    "armorClass": 15,
    "hitPoints": 50,
    "speed": "9 m, scalare 9 m",
    "alignment": "Neutrale buono",
    "tags": [
      "Folletto",
      "Assassino",
      "Feywild",
      "forest",
      "Media",
      "Inganno",
      "Arcano"
    ],
    "description": "Creatura legata a specchi d'acqua, lucciole e fiori impossibili, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come assassino, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Furia del Bioma: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Colpo Pesante. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+3.",
    "tactics": "protegge il terreno favorevole e costringe il gruppo a muoversi",
    "resistances": "veleno",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "percezione tellurica 18 m",
    "languages": "Comune, Silvano",
    "loot": "scheggia elementale, sangue denso, reliquia consumata",
    "combat": {
      "attackBonus": "+5",
      "damage": "1d6+3",
      "averageDamage": 7,
      "damageType": "variabili",
      "damageNote": "Colpo Pesante. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+3."
    },
    "abilityScores": {
      "str": 17,
      "dex": 12,
      "con": 15,
      "int": 12,
      "wis": 10,
      "cha": 8
    },
    "technicalActions": [
      {
        "name": "Colpo Pesante",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 5,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d6+3",
        "damageType": "variabili",
        "hit": "+5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+3.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-feywild_1118",
    "sourceId": "feywild_1118",
    "name": "Araldo del Sangue Pallido",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Feywild",
    "difficulty": "Facile",
    "cr": 1,
    "xp": 200,
    "type": "Pianta",
    "role": "Guardiano",
    "size": "Minuscola",
    "icon": "??",
    "armorClass": 15,
    "hitPoints": 24,
    "speed": "6 m, scavare 9 m",
    "alignment": "Caotico neutrale",
    "tags": [
      "Pianta",
      "Guardiano",
      "Feywild",
      "forest",
      "Minuscola",
      "Acrobazia"
    ],
    "description": "Creatura legata a lucciole, specchi d'acqua e danze, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come guardiano, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Agguato Naturale: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Soffio Minore. +8 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
    "tactics": "concentra gli attacchi sui personaggi feriti",
    "resistances": "psichico",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 36 m",
    "languages": "Comune, Silvano",
    "loot": "scheggia elementale, sangue denso, reliquia consumata",
    "combat": {
      "attackBonus": "+8",
      "damage": "1d10+2",
      "averageDamage": 8,
      "damageType": "variabili",
      "damageNote": "Soffio Minore. +8 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2."
    },
    "abilityScores": {
      "str": 18,
      "dex": 10,
      "con": 14,
      "int": 7,
      "wis": 11,
      "cha": 8
    },
    "technicalActions": [
      {
        "name": "Soffio Minore",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 8,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d10+2",
        "damageType": "variabili",
        "hit": "+8 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-feywild_1120",
    "sourceId": "feywild_1120",
    "name": "Colosso dell'Ossidiana",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Feywild",
    "difficulty": "Facile",
    "cr": 1,
    "xp": 200,
    "type": "Folletto",
    "role": "Boss",
    "size": "Piccola",
    "icon": "??",
    "armorClass": 18,
    "hitPoints": 47,
    "speed": "12 m, volare 18 m",
    "alignment": "Caotico neutrale",
    "tags": [
      "Folletto",
      "Elite",
      "Feywild",
      "forest",
      "Piccola",
      "Inganno",
      "Sopravvivenza",
      "Percezione"
    ],
    "description": "Creatura legata a specchi d'acqua, fiori impossibili e danze, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come elite, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Aura Minore: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Lama Ricurva. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d6+2.",
    "tactics": "protegge il terreno favorevole e costringe il gruppo a muoversi",
    "resistances": "veleno",
    "immunities": "nessuna",
    "vulnerabilities": "radiante",
    "senses": "Percezione passiva",
    "languages": "Draconico",
    "loot": "cuore annerito, scaglia intatta, polvere arcana",
    "combat": {
      "attackBonus": "+5",
      "damage": "2d6+2",
      "averageDamage": 9,
      "damageType": "variabili",
      "damageNote": "Lama Ricurva. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d6+2."
    },
    "abilityScores": {
      "str": 9,
      "dex": 14,
      "con": 13,
      "int": 11,
      "wis": 15,
      "cha": 10
    },
    "technicalActions": [
      {
        "name": "Lama Ricurva",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 5,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "2d6+2",
        "damageType": "variabili",
        "hit": "+5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d6+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-feywild_1123",
    "sourceId": "feywild_1123",
    "name": "Cantore delle Radici",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Feywild",
    "difficulty": "Facile",
    "cr": 1,
    "xp": 200,
    "type": "Pianta",
    "role": "Guardiano",
    "size": "Grande",
    "icon": "??",
    "armorClass": 16,
    "hitPoints": 19,
    "speed": "12 m",
    "alignment": "Legale malvagio",
    "tags": [
      "Pianta",
      "Guardiano",
      "Feywild",
      "forest",
      "Grande",
      "Inganno",
      "Acrobazia",
      "Sopravvivenza"
    ],
    "description": "Creatura legata a danze, fiori impossibili e specchi d'acqua, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come guardiano, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Pelle Rinforzata: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Dardo Spirituale. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
    "tactics": "protegge il terreno favorevole e costringe il gruppo a muoversi",
    "resistances": "psichico",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "vista cieca 9 m",
    "languages": "Comune, Infernale",
    "loot": "osso lavorabile, ghiandola alchemica, trofeo minore",
    "combat": {
      "attackBonus": "+7",
      "damage": "1d10+2",
      "averageDamage": 8,
      "damageType": "variabili",
      "damageNote": "Dardo Spirituale. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2."
    },
    "abilityScores": {
      "str": 16,
      "dex": 10,
      "con": 13,
      "int": 3,
      "wis": 8,
      "cha": 13
    },
    "technicalActions": [
      {
        "name": "Dardo Spirituale",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 7,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d10+2",
        "damageType": "variabili",
        "hit": "+7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-feywild_1128",
    "sourceId": "feywild_1128",
    "name": "Predone delle Rune Vive 3",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Feywild",
    "difficulty": "Facile",
    "cr": 1,
    "xp": 200,
    "type": "Umanoide",
    "role": "Bruto",
    "size": "Grande",
    "icon": "??",
    "armorClass": 12,
    "hitPoints": 27,
    "speed": "9 m, nuotare 9 m",
    "alignment": "Neutrale buono",
    "tags": [
      "Umanoide",
      "Bruto",
      "Feywild",
      "forest",
      "Grande",
      "Inganno",
      "Natura"
    ],
    "description": "Creatura legata a specchi d'acqua, danze e sogni, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come bruto, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Resistenza Antica: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Urto Brutale. +8 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d6+2.",
    "tactics": "usa coperture, ombre e ostacoli prima di esporsi",
    "resistances": "freddo",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 18 m",
    "languages": "comprende una lingua ma non parla",
    "loot": "occhio cristallizzato, dente raro, moneta antica",
    "combat": {
      "attackBonus": "+8",
      "damage": "2d6+2",
      "averageDamage": 9,
      "damageType": "variabili",
      "damageNote": "Urto Brutale. +8 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d6+2."
    },
    "abilityScores": {
      "str": 18,
      "dex": 9,
      "con": 14,
      "int": 4,
      "wis": 11,
      "cha": 12
    },
    "technicalActions": [
      {
        "name": "Urto Brutale",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 8,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "2d6+2",
        "damageType": "variabili",
        "hit": "+8 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d6+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-giungla_1701",
    "sourceId": "giungla_1701",
    "name": "Colosso delle Ceneri #1701",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Giungla",
    "difficulty": "Semplice",
    "cr": 0.5,
    "xp": 100,
    "type": "Bestia",
    "role": "Bruto",
    "size": "Media",
    "icon": "??",
    "armorClass": 12,
    "hitPoints": 19,
    "speed": "6 m, scavare 9 m",
    "alignment": "Legale buono",
    "tags": [
      "Bestia",
      "Bruto",
      "Giungla",
      "forest",
      "Media",
      "Intimidire",
      "Arcano",
      "Atletica"
    ],
    "description": "Creatura legata a fronde, pioggia calda e templi verdi, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come bruto, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Passo Silenzioso: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Soffio Minore. +6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d8+2.",
    "tactics": "cerca di separare il party con pressione costante",
    "resistances": "freddo",
    "immunities": "nessuna",
    "vulnerabilities": "tuono",
    "senses": "scurovisione 18 m",
    "languages": "comprende una lingua ma non parla",
    "loot": "artiglio inciso, pelle resistente, frammento rituale",
    "combat": {
      "attackBonus": "+6",
      "damage": "2d8+2",
      "averageDamage": 11,
      "damageType": "variabili",
      "damageNote": "Soffio Minore. +6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d8+2."
    },
    "abilityScores": {
      "str": 17,
      "dex": 10,
      "con": 15,
      "int": 9,
      "wis": 14,
      "cha": 7
    },
    "technicalActions": [
      {
        "name": "Soffio Minore",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 6,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "2d8+2",
        "damageType": "variabili",
        "hit": "+6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d8+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-giungla_1702",
    "sourceId": "giungla_1702",
    "name": "Ragno della Notte Verde 3",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Giungla",
    "difficulty": "Semplice",
    "cr": 0,
    "xp": 10,
    "type": "Celestiale",
    "role": "Guardiano",
    "size": "Piccola",
    "icon": "??",
    "armorClass": 14,
    "hitPoints": 6,
    "speed": "9 m, nuotare 9 m",
    "alignment": "Legale neutrale",
    "tags": [
      "Celestiale",
      "Guardiano",
      "Giungla",
      "forest",
      "Piccola",
      "Percezione",
      "Acrobazia"
    ],
    "description": "Creatura legata a pioggia calda, insetti e liane, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come guardiano, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Furia del Bioma: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Spina Lanciata. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2.",
    "tactics": "usa coperture, ombre e ostacoli prima di esporsi",
    "resistances": "nessuna",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "percezione tellurica 18 m",
    "languages": "Comune, Infernale",
    "loot": "occhio cristallizzato, dente raro, moneta antica",
    "combat": {
      "attackBonus": "+5",
      "damage": "1d12+2",
      "averageDamage": 9,
      "damageType": "radiosi",
      "damageNote": "Spina Lanciata. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2."
    },
    "abilityScores": {
      "str": 14,
      "dex": 12,
      "con": 16,
      "int": 13,
      "wis": 8,
      "cha": 11
    },
    "technicalActions": [
      {
        "name": "Spina Lanciata",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 5,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d12+2",
        "damageType": "radiosi",
        "hit": "+5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-giungla_1703",
    "sourceId": "giungla_1703",
    "name": "Orso del Sale Nero 2",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Giungla",
    "difficulty": "Semplice",
    "cr": 0.5,
    "xp": 100,
    "type": "Mostruosità",
    "role": "Assalitore",
    "size": "Grande",
    "icon": "??",
    "armorClass": 14,
    "hitPoints": 21,
    "speed": "6 m, scavare 9 m",
    "alignment": "Legale malvagio",
    "tags": [
      "Mostruosità",
      "Assassino",
      "Giungla",
      "forest",
      "Grande",
      "Atletica",
      "Sopravvivenza",
      "Inganno"
    ],
    "description": "Creatura legata a insetti, fronde e pioggia calda, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come assassino, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Agguato Naturale: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Dardo Spirituale. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
    "tactics": "cerca di separare il party con pressione costante",
    "resistances": "necrotico",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 18 m",
    "languages": "Comune",
    "loot": "artiglio inciso, pelle resistente, frammento rituale",
    "combat": {
      "attackBonus": "+5",
      "damage": "1d10+2",
      "averageDamage": 8,
      "damageType": "variabili",
      "damageNote": "Dardo Spirituale. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2."
    },
    "abilityScores": {
      "str": 10,
      "dex": 14,
      "con": 10,
      "int": 6,
      "wis": 12,
      "cha": 9
    },
    "technicalActions": [
      {
        "name": "Dardo Spirituale",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 5,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d10+2",
        "damageType": "variabili",
        "hit": "+5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-giungla_1704",
    "sourceId": "giungla_1704",
    "name": "Cantore della Fiamma Fredda 2",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Giungla",
    "difficulty": "Semplice",
    "cr": 0.25,
    "xp": 50,
    "type": "Bestia",
    "role": "Sciame",
    "size": "Piccola",
    "icon": "??",
    "armorClass": 12,
    "hitPoints": 15,
    "speed": "12 m, volare 18 m",
    "alignment": "Neutrale malvagio",
    "tags": [
      "Bestia",
      "Minion",
      "Giungla",
      "forest",
      "Piccola",
      "Percezione",
      "Sopravvivenza",
      "Inganno"
    ],
    "description": "Creatura legata a insetti, templi verdi e fronde, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come minion, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Istinto di Branco: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Soffio Minore. +4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2.",
    "tactics": "usa coperture, ombre e ostacoli prima di esporsi",
    "resistances": "psichico",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "percezione tellurica 18 m",
    "languages": "—",
    "loot": "cuore annerito, scaglia intatta, polvere arcana",
    "combat": {
      "attackBonus": "+4",
      "damage": "1d12+2",
      "averageDamage": 9,
      "damageType": "variabili",
      "damageNote": "Soffio Minore. +4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2."
    },
    "abilityScores": {
      "str": 15,
      "dex": 8,
      "con": 11,
      "int": 5,
      "wis": 9,
      "cha": 6
    },
    "technicalActions": [
      {
        "name": "Soffio Minore",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 4,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d12+2",
        "damageType": "variabili",
        "hit": "+4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-giungla_1705",
    "sourceId": "giungla_1705",
    "name": "Spettro delle Ossa",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Giungla",
    "difficulty": "Semplice",
    "cr": 0.125,
    "xp": 25,
    "type": "Celestiale",
    "role": "Assalitore",
    "size": "Grande",
    "icon": "??",
    "armorClass": 15,
    "hitPoints": 7,
    "speed": "12 m, volare 18 m",
    "alignment": "Legale malvagio",
    "tags": [
      "Celestiale",
      "Schermagliatore",
      "Giungla",
      "forest",
      "Grande",
      "Atletica"
    ],
    "description": "Creatura legata a pioggia calda, fronde e liane, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come schermagliatore, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Pelle Rinforzata: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Soffio Minore. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
    "tactics": "concentra gli attacchi sui personaggi feriti",
    "resistances": "psichico",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "percezione tellurica 18 m",
    "languages": "Comune, Silvano",
    "loot": "artiglio inciso, pelle resistente, frammento rituale",
    "combat": {
      "attackBonus": "+5",
      "damage": "1d10+2",
      "averageDamage": 8,
      "damageType": "radiosi",
      "damageNote": "Soffio Minore. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2."
    },
    "abilityScores": {
      "str": 13,
      "dex": 14,
      "con": 13,
      "int": 7,
      "wis": 9,
      "cha": 13
    },
    "technicalActions": [
      {
        "name": "Soffio Minore",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 5,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d10+2",
        "damageType": "radiosi",
        "hit": "+5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-giungla_1706",
    "sourceId": "giungla_1706",
    "name": "Mirmidone del Branco Grigio 4",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Giungla",
    "difficulty": "Semplice",
    "cr": 0.125,
    "xp": 25,
    "type": "Elementale",
    "role": "Assalitore",
    "size": "Grande",
    "icon": "??",
    "armorClass": 13,
    "hitPoints": 9,
    "speed": "9 m, scalare 9 m",
    "alignment": "Legale buono",
    "tags": [
      "Elementale",
      "Schermagliatore",
      "Giungla",
      "forest",
      "Grande",
      "Sopravvivenza",
      "Inganno",
      "Intimidire"
    ],
    "description": "Creatura legata a templi verdi, fronde e liane, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come schermagliatore, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Passo Silenzioso: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Urto Brutale. +3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2.",
    "tactics": "protegge il terreno favorevole e costringe il gruppo a muoversi",
    "resistances": "fuoco",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 36 m",
    "languages": "Draconico",
    "loot": "cuore annerito, scaglia intatta, polvere arcana",
    "combat": {
      "attackBonus": "+3",
      "damage": "1d12+2",
      "averageDamage": 9,
      "damageType": "variabili",
      "damageNote": "Urto Brutale. +3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2."
    },
    "abilityScores": {
      "str": 10,
      "dex": 12,
      "con": 13,
      "int": 10,
      "wis": 15,
      "cha": 6
    },
    "technicalActions": [
      {
        "name": "Urto Brutale",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 3,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d12+2",
        "damageType": "variabili",
        "hit": "+3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-giungla_1707",
    "sourceId": "giungla_1707",
    "name": "Apostolo del Sale Nero 2",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Giungla",
    "difficulty": "Semplice",
    "cr": 0.5,
    "xp": 100,
    "type": "Gigante",
    "role": "Assalitore",
    "size": "Grande",
    "icon": "??",
    "armorClass": 16,
    "hitPoints": 19,
    "speed": "12 m, volare 18 m",
    "alignment": "Legale buono",
    "tags": [
      "Gigante",
      "Assassino",
      "Giungla",
      "forest",
      "Grande",
      "Natura",
      "Sopravvivenza",
      "Intimidire"
    ],
    "description": "Creatura legata a templi verdi, fronde e insetti, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come assassino, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Furia del Bioma: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Dardo Spirituale. +6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2.",
    "tactics": "concentra gli attacchi sui personaggi feriti",
    "resistances": "contundente/perforante/tagliente da armi non magiche",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 18 m",
    "languages": "Comune, Infernale",
    "loot": "scheggia elementale, sangue denso, reliquia consumata",
    "combat": {
      "attackBonus": "+6",
      "damage": "1d6+2",
      "averageDamage": 6,
      "damageType": "variabili",
      "damageNote": "Dardo Spirituale. +6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2."
    },
    "abilityScores": {
      "str": 12,
      "dex": 16,
      "con": 13,
      "int": 8,
      "wis": 13,
      "cha": 7
    },
    "technicalActions": [
      {
        "name": "Dardo Spirituale",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 6,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d6+2",
        "damageType": "variabili",
        "hit": "+6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-giungla_1708",
    "sourceId": "giungla_1708",
    "name": "Arconte delle Radici",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Giungla",
    "difficulty": "Semplice",
    "cr": 0.5,
    "xp": 100,
    "type": "Bestia",
    "role": "Sciame",
    "size": "Media",
    "icon": "??",
    "armorClass": 15,
    "hitPoints": 19,
    "speed": "9 m",
    "alignment": "Legale buono",
    "tags": [
      "Bestia",
      "Minion",
      "Giungla",
      "forest",
      "Media",
      "Acrobazia",
      "Inganno",
      "Natura"
    ],
    "description": "Creatura legata a liane, insetti e fronde, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come minion, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Istinto di Branco: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Urto Brutale. +4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2.",
    "tactics": "protegge il terreno favorevole e costringe il gruppo a muoversi",
    "resistances": "freddo",
    "immunities": "nessuna",
    "vulnerabilities": "fuoco",
    "senses": "Percezione passiva",
    "languages": "Draconico",
    "loot": "scheggia elementale, sangue denso, reliquia consumata",
    "combat": {
      "attackBonus": "+4",
      "damage": "1d6+2",
      "averageDamage": 6,
      "damageType": "variabili",
      "damageNote": "Urto Brutale. +4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2."
    },
    "abilityScores": {
      "str": 9,
      "dex": 10,
      "con": 15,
      "int": 4,
      "wis": 9,
      "cha": 12
    },
    "technicalActions": [
      {
        "name": "Urto Brutale",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 4,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d6+2",
        "damageType": "variabili",
        "hit": "+4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-giungla_1709",
    "sourceId": "giungla_1709",
    "name": "Alchimista delle Ossa 2",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Giungla",
    "difficulty": "Semplice",
    "cr": 0,
    "xp": 10,
    "type": "Costrutto",
    "role": "Sciame",
    "size": "Piccola",
    "icon": "??",
    "armorClass": 11,
    "hitPoints": 7,
    "speed": "9 m, nuotare 9 m",
    "alignment": "Legale neutrale",
    "tags": [
      "Costrutto",
      "Minion",
      "Giungla",
      "forest",
      "Piccola",
      "Percezione",
      "Intimidire"
    ],
    "description": "Creatura legata a liane, templi verdi e insetti, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come minion, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Odio Territoriale: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Morso. +3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d8+2.",
    "tactics": "cerca di separare il party con pressione costante",
    "resistances": "radiante",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "percezione tellurica 18 m",
    "languages": "Comune, Infernale",
    "loot": "artiglio inciso, pelle resistente, frammento rituale",
    "combat": {
      "attackBonus": "+3",
      "damage": "1d8+2",
      "averageDamage": 7,
      "damageType": "variabili",
      "damageNote": "Morso. +3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d8+2."
    },
    "abilityScores": {
      "str": 9,
      "dex": 11,
      "con": 12,
      "int": 3,
      "wis": 8,
      "cha": 7
    },
    "technicalActions": [
      {
        "name": "Morso",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 3,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d8+2",
        "damageType": "variabili",
        "hit": "+3 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d8+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-giungla_1710",
    "sourceId": "giungla_1710",
    "name": "Sanguisuga della Lama Cava",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Giungla",
    "difficulty": "Semplice",
    "cr": 0.125,
    "xp": 25,
    "type": "Pianta",
    "role": "Assalitore",
    "size": "Grande",
    "icon": "??",
    "armorClass": 15,
    "hitPoints": 10,
    "speed": "12 m, volare 18 m",
    "alignment": "Legale buono",
    "tags": [
      "Pianta",
      "Schermagliatore",
      "Giungla",
      "forest",
      "Grande",
      "Percezione",
      "Intimidire",
      "Sopravvivenza"
    ],
    "description": "Creatura legata a templi verdi, insetti e liane, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come schermagliatore, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Pelle Rinforzata: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Morso. +4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2.",
    "tactics": "cerca di separare il party con pressione costante",
    "resistances": "freddo",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "percezione tellurica 18 m",
    "languages": "Comune, Infernale",
    "loot": "osso lavorabile, ghiandola alchemica, trofeo minore",
    "combat": {
      "attackBonus": "+4",
      "damage": "1d6+2",
      "averageDamage": 6,
      "damageType": "variabili",
      "damageNote": "Morso. +4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2."
    },
    "abilityScores": {
      "str": 11,
      "dex": 14,
      "con": 12,
      "int": 4,
      "wis": 9,
      "cha": 6
    },
    "technicalActions": [
      {
        "name": "Morso",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 4,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d6+2",
        "damageType": "variabili",
        "hit": "+4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-giungla_1711",
    "sourceId": "giungla_1711",
    "name": "Incubo del Sole Morto",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Giungla",
    "difficulty": "Facile",
    "cr": 1,
    "xp": 200,
    "type": "Non morto",
    "role": "Assalitore",
    "size": "Media",
    "icon": "??",
    "armorClass": 14,
    "hitPoints": 25,
    "speed": "9 m, nuotare 9 m",
    "alignment": "Legale buono",
    "tags": [
      "Non morto",
      "Schermagliatore",
      "Giungla",
      "forest",
      "Media",
      "Natura"
    ],
    "description": "Creatura legata a templi verdi, fronde e insetti, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come schermagliatore, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Agguato Naturale: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Urto Brutale. +6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2.",
    "tactics": "concentra gli attacchi sui personaggi feriti",
    "resistances": "freddo",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 36 m",
    "languages": "Comune, Celestiale",
    "loot": "cuore annerito, scaglia intatta, polvere arcana",
    "combat": {
      "attackBonus": "+6",
      "damage": "1d6+2",
      "averageDamage": 6,
      "damageType": "necrotici",
      "damageNote": "Urto Brutale. +6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2."
    },
    "abilityScores": {
      "str": 10,
      "dex": 14,
      "con": 14,
      "int": 4,
      "wis": 9,
      "cha": 6
    },
    "technicalActions": [
      {
        "name": "Urto Brutale",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 6,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d6+2",
        "damageType": "necrotici",
        "hit": "+6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-giungla_1712",
    "sourceId": "giungla_1712",
    "name": "Bruto delle Mille Bocche 3",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Giungla",
    "difficulty": "Facile",
    "cr": 1,
    "xp": 200,
    "type": "Drago",
    "role": "Boss",
    "size": "Media",
    "icon": "??",
    "armorClass": 11,
    "hitPoints": 51,
    "speed": "12 m",
    "alignment": "Legale buono",
    "tags": [
      "Drago",
      "Elite",
      "Giungla",
      "forest",
      "Media",
      "Natura"
    ],
    "description": "Creatura legata a templi verdi, fronde e liane, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come elite, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Furia del Bioma: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Lama Ricurva. +4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d10+2.",
    "tactics": "protegge il terreno favorevole e costringe il gruppo a muoversi",
    "resistances": "radiante",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "Percezione passiva",
    "languages": "Comune, Celestiale",
    "loot": "osso lavorabile, ghiandola alchemica, trofeo minore",
    "combat": {
      "attackBonus": "+4",
      "damage": "2d10+2",
      "averageDamage": 13,
      "damageType": "variabili",
      "damageNote": "Lama Ricurva. +4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d10+2."
    },
    "abilityScores": {
      "str": 11,
      "dex": 9,
      "con": 10,
      "int": 8,
      "wis": 12,
      "cha": 10
    },
    "technicalActions": [
      {
        "name": "Lama Ricurva",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 4,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "2d10+2",
        "damageType": "variabili",
        "hit": "+4 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d10+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-giungla_1714",
    "sourceId": "giungla_1714",
    "name": "Ragno delle Ossa 2",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Giungla",
    "difficulty": "Facile",
    "cr": 1,
    "xp": 200,
    "type": "Pianta",
    "role": "Boss",
    "size": "Media",
    "icon": "??",
    "armorClass": 14,
    "hitPoints": 54,
    "speed": "9 m, nuotare 9 m",
    "alignment": "Neutrale malvagio",
    "tags": [
      "Pianta",
      "Elite",
      "Giungla",
      "forest",
      "Media",
      "Acrobazia",
      "Sopravvivenza",
      "Furtività"
    ],
    "description": "Creatura legata a insetti, fronde e pioggia calda, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come elite, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Vista del Predatore: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Artiglio. +2 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d8+2.",
    "tactics": "protegge il terreno favorevole e costringe il gruppo a muoversi",
    "resistances": "veleno",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 36 m",
    "languages": "Comune, Sottocomune",
    "loot": "occhio cristallizzato, dente raro, moneta antica",
    "combat": {
      "attackBonus": "+2",
      "damage": "2d8+2",
      "averageDamage": 11,
      "damageType": "variabili",
      "damageNote": "Artiglio. +2 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d8+2."
    },
    "abilityScores": {
      "str": 9,
      "dex": 11,
      "con": 11,
      "int": 6,
      "wis": 12,
      "cha": 8
    },
    "technicalActions": [
      {
        "name": "Artiglio",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 2,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "2d8+2",
        "damageType": "variabili",
        "hit": "+2 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d8+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-giungla_1716",
    "sourceId": "giungla_1716",
    "name": "Serpe della Luna Rossa 3",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Giungla",
    "difficulty": "Facile",
    "cr": 1,
    "xp": 200,
    "type": "Pianta",
    "role": "Sciame",
    "size": "Grande",
    "icon": "??",
    "armorClass": 15,
    "hitPoints": 33,
    "speed": "12 m, volare 18 m",
    "alignment": "Neutrale buono",
    "tags": [
      "Pianta",
      "Minion",
      "Giungla",
      "forest",
      "Grande",
      "Natura"
    ],
    "description": "Creatura legata a templi verdi, fronde e insetti, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come minion, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Resistenza Antica: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Dardo Spirituale. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
    "tactics": "difende una tana o una reliquia e non insegue lontano",
    "resistances": "freddo",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "Percezione passiva",
    "languages": "Comune, Sottocomune",
    "loot": "occhio cristallizzato, dente raro, moneta antica",
    "combat": {
      "attackBonus": "+5",
      "damage": "1d10+2",
      "averageDamage": 8,
      "damageType": "variabili",
      "damageNote": "Dardo Spirituale. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2."
    },
    "abilityScores": {
      "str": 12,
      "dex": 11,
      "con": 13,
      "int": 6,
      "wis": 13,
      "cha": 12
    },
    "technicalActions": [
      {
        "name": "Dardo Spirituale",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 5,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d10+2",
        "damageType": "variabili",
        "hit": "+5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-giungla_1722",
    "sourceId": "giungla_1722",
    "name": "Sentinella delle Campane Mute",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Giungla",
    "difficulty": "Facile",
    "cr": 1,
    "xp": 200,
    "type": "Gigante",
    "role": "Bruto",
    "size": "Piccola",
    "icon": "??",
    "armorClass": 14,
    "hitPoints": 28,
    "speed": "9 m",
    "alignment": "Caotico malvagio",
    "tags": [
      "Gigante",
      "Bruto",
      "Giungla",
      "forest",
      "Piccola",
      "Percezione"
    ],
    "description": "Creatura legata a fronde, templi verdi e pioggia calda, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come bruto, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Aura Minore: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Urto Brutale. +6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d8+2.",
    "tactics": "protegge il terreno favorevole e costringe il gruppo a muoversi",
    "resistances": "necrotico",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "percezione tellurica 18 m",
    "languages": "Comune, Silvano",
    "loot": "osso lavorabile, ghiandola alchemica, trofeo minore",
    "combat": {
      "attackBonus": "+6",
      "damage": "2d8+2",
      "averageDamage": 11,
      "damageType": "variabili",
      "damageNote": "Urto Brutale. +6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d8+2."
    },
    "abilityScores": {
      "str": 18,
      "dex": 8,
      "con": 15,
      "int": 8,
      "wis": 12,
      "cha": 6
    },
    "technicalActions": [
      {
        "name": "Urto Brutale",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 6,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "2d8+2",
        "damageType": "variabili",
        "hit": "+6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d8+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-giungla_1723",
    "sourceId": "giungla_1723",
    "name": "Sciamano delle Campane Mute 2",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Giungla",
    "difficulty": "Facile",
    "cr": 1,
    "xp": 200,
    "type": "Costrutto",
    "role": "Assalitore",
    "size": "Grande",
    "icon": "??",
    "armorClass": 14,
    "hitPoints": 29,
    "speed": "9 m, nuotare 9 m",
    "alignment": "Caotico neutrale",
    "tags": [
      "Costrutto",
      "Assassino",
      "Giungla",
      "forest",
      "Grande",
      "Atletica",
      "Acrobazia"
    ],
    "description": "Creatura legata a insetti, liane e templi verdi, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come assassino, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Vista del Predatore: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Colpo Pesante. +6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2.",
    "tactics": "cerca di separare il party con pressione costante",
    "resistances": "necrotico",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 36 m",
    "languages": "Comune, Sottocomune",
    "loot": "cuore annerito, scaglia intatta, polvere arcana",
    "combat": {
      "attackBonus": "+6",
      "damage": "1d12+2",
      "averageDamage": 9,
      "damageType": "variabili",
      "damageNote": "Colpo Pesante. +6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2."
    },
    "abilityScores": {
      "str": 15,
      "dex": 12,
      "con": 11,
      "int": 13,
      "wis": 8,
      "cha": 8
    },
    "technicalActions": [
      {
        "name": "Colpo Pesante",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 6,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d12+2",
        "damageType": "variabili",
        "hit": "+6 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-giungla_1724",
    "sourceId": "giungla_1724",
    "name": "Colosso della Corona Spezzata 4",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Giungla",
    "difficulty": "Facile",
    "cr": 2,
    "xp": 450,
    "type": "Immondo",
    "role": "Assalitore",
    "size": "Minuscola",
    "icon": "??",
    "armorClass": 18,
    "hitPoints": 40,
    "speed": "12 m",
    "alignment": "Neutrale malvagio",
    "tags": [
      "Immondo",
      "Schermagliatore",
      "Giungla",
      "forest",
      "Minuscola",
      "Furtività",
      "Acrobazia"
    ],
    "description": "Creatura legata a insetti, pioggia calda e templi verdi, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come schermagliatore, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Istinto di Branco: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Colpo Pesante. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+3.",
    "tactics": "concentra gli attacchi sui personaggi feriti",
    "resistances": "nessuna",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 36 m",
    "languages": "comprende una lingua ma non parla",
    "loot": "cuore annerito, scaglia intatta, polvere arcana",
    "combat": {
      "attackBonus": "+7",
      "damage": "1d6+3",
      "averageDamage": 7,
      "damageType": "variabili",
      "damageNote": "Colpo Pesante. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+3."
    },
    "abilityScores": {
      "str": 11,
      "dex": 19,
      "con": 13,
      "int": 10,
      "wis": 9,
      "cha": 8
    },
    "technicalActions": [
      {
        "name": "Colpo Pesante",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 7,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d6+3",
        "damageType": "variabili",
        "hit": "+7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d6+3.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-giungla_1726",
    "sourceId": "giungla_1726",
    "name": "Aquila della Tempesta #1726",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Giungla",
    "difficulty": "Facile",
    "cr": 2,
    "xp": 450,
    "type": "Gigante",
    "role": "Bruto",
    "size": "Grande",
    "icon": "??",
    "armorClass": 15,
    "hitPoints": 52,
    "speed": "9 m",
    "alignment": "Neutrale buono",
    "tags": [
      "Gigante",
      "Bruto",
      "Giungla",
      "forest",
      "Grande",
      "Sopravvivenza",
      "Natura",
      "Percezione"
    ],
    "description": "Creatura legata a insetti, templi verdi e pioggia calda, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come bruto, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Pelle Rinforzata: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Lama Ricurva. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d6+3.",
    "tactics": "apre lo scontro colpendo il bersaglio più isolato",
    "resistances": "psichico",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "vista cieca 9 m",
    "languages": "Comune",
    "loot": "cuore annerito, scaglia intatta, polvere arcana",
    "combat": {
      "attackBonus": "+7",
      "damage": "2d6+3",
      "averageDamage": 10,
      "damageType": "variabili",
      "damageNote": "Lama Ricurva. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d6+3."
    },
    "abilityScores": {
      "str": 16,
      "dex": 13,
      "con": 18,
      "int": 5,
      "wis": 11,
      "cha": 9
    },
    "technicalActions": [
      {
        "name": "Lama Ricurva",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 7,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "2d6+3",
        "damageType": "variabili",
        "hit": "+7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d6+3.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-giungla_1728",
    "sourceId": "giungla_1728",
    "name": "Strega della Corona Spezzata 5",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Giungla",
    "difficulty": "Facile",
    "cr": 1,
    "xp": 200,
    "type": "Gigante",
    "role": "Assalitore",
    "size": "Grande",
    "icon": "??",
    "armorClass": 14,
    "hitPoints": 28,
    "speed": "12 m, volare 18 m",
    "alignment": "Neutrale malvagio",
    "tags": [
      "Gigante",
      "Schermagliatore",
      "Giungla",
      "forest",
      "Grande",
      "Atletica",
      "Acrobazia",
      "Percezione"
    ],
    "description": "Creatura legata a templi verdi, insetti e pioggia calda, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come schermagliatore, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Agguato Naturale: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Spina Lanciata. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
    "tactics": "apre lo scontro colpendo il bersaglio più isolato",
    "resistances": "veleno",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "scurovisione 18 m",
    "languages": "Comune, Infernale",
    "loot": "osso lavorabile, ghiandola alchemica, trofeo minore",
    "combat": {
      "attackBonus": "+7",
      "damage": "1d10+2",
      "averageDamage": 8,
      "damageType": "variabili",
      "damageNote": "Spina Lanciata. +7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2."
    },
    "abilityScores": {
      "str": 17,
      "dex": 15,
      "con": 17,
      "int": 14,
      "wis": 12,
      "cha": 6
    },
    "technicalActions": [
      {
        "name": "Spina Lanciata",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 7,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d10+2",
        "damageType": "variabili",
        "hit": "+7 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d10+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-giungla_1729",
    "sourceId": "giungla_1729",
    "name": "Veggente del Muschio Antico 2",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Giungla",
    "difficulty": "Facile",
    "cr": 1,
    "xp": 200,
    "type": "Mostruosità",
    "role": "Assalitore",
    "size": "Piccola",
    "icon": "??",
    "armorClass": 15,
    "hitPoints": 23,
    "speed": "9 m",
    "alignment": "Neutrale buono",
    "tags": [
      "Mostruosità",
      "Schermagliatore",
      "Giungla",
      "forest",
      "Piccola",
      "Percezione",
      "Sopravvivenza",
      "Furtività"
    ],
    "description": "Creatura legata a pioggia calda, insetti e liane, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come schermagliatore, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Sangue Innaturale: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Artiglio. +8 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2.",
    "tactics": "usa coperture, ombre e ostacoli prima di esporsi",
    "resistances": "veleno",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "Percezione passiva",
    "languages": "Comune, Infernale",
    "loot": "osso lavorabile, ghiandola alchemica, trofeo minore",
    "combat": {
      "attackBonus": "+8",
      "damage": "1d12+2",
      "averageDamage": 9,
      "damageType": "variabili",
      "damageNote": "Artiglio. +8 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2."
    },
    "abilityScores": {
      "str": 14,
      "dex": 18,
      "con": 14,
      "int": 11,
      "wis": 11,
      "cha": 9
    },
    "technicalActions": [
      {
        "name": "Artiglio",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 8,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "1d12+2",
        "damageType": "variabili",
        "hit": "+8 a colpire, portata/gittata appropriata, un bersaglio. Danni: 1d12+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  },
  {
    "id": "best-db-giungla_1730",
    "sourceId": "giungla_1730",
    "name": "Lupo della Stanza Infinita",
    "biomes": [
      "forest"
    ],
    "sourceBiome": "Giungla",
    "difficulty": "Boss",
    "cr": 1,
    "xp": 200,
    "type": "Immondo",
    "role": "Boss",
    "size": "Minuscola",
    "icon": "??",
    "armorClass": 12,
    "hitPoints": 42,
    "speed": "12 m",
    "alignment": "Legale neutrale",
    "tags": [
      "Immondo",
      "Boss",
      "Giungla",
      "forest",
      "Minuscola",
      "Natura"
    ],
    "description": "Creatura legata a liane, fronde e templi verdi, appare dove il territorio diventa ostile e le vecchie piste scompaiono. Combatte come boss, scegliendo il momento più crudele per colpire e ritirarsi.",
    "story": "Istinto di Branco: Quando si trova nel proprio bioma, ottiene vantaggio alla prima prova di Furtività o Percezione del combattimento. Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m.",
    "actions": "Morso. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d6+2.",
    "tactics": "apre lo scontro colpendo il bersaglio più isolato",
    "resistances": "veleno",
    "immunities": "nessuna",
    "vulnerabilities": "nessuna",
    "senses": "Percezione passiva",
    "languages": "Comune, Sottocomune",
    "loot": "osso lavorabile, ghiandola alchemica, trofeo minore",
    "combat": {
      "attackBonus": "+5",
      "damage": "2d6+2",
      "averageDamage": 9,
      "damageType": "variabili",
      "damageNote": "Morso. +5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d6+2."
    },
    "abilityScores": {
      "str": 16,
      "dex": 9,
      "con": 13,
      "int": 3,
      "wis": 12,
      "cha": 10
    },
    "technicalActions": [
      {
        "name": "Morso",
        "type": "Attacco con arma o naturale",
        "actionCost": "Azione",
        "attackBonus": 5,
        "reach": "5 ft.",
        "range": null,
        "target": "un bersaglio",
        "damage": "2d6+2",
        "damageType": "variabili",
        "hit": "+5 a colpire, portata/gittata appropriata, un bersaglio. Danni: 2d6+2.",
        "description": "Una volta per riposo breve dell'incontro può imporre svantaggio al prossimo attacco di un nemico entro 9 m."
      }
    ]
  }
];
