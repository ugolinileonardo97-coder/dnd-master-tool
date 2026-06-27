/**
 * Database pozioni per bioma mercante.
 * 16 pozioni uniche per ognuna delle 12 zone shop, più 8 generiche extra.
 */

export const biomePotions = [
  {
    "id": "potion-generic-pozione-della-crocevia",
    "name": "Pozione della Crocevia",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "generic",
    "rarity": "Comune",
    "price": "26 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "tagliente"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Resistenza: tagliente. Durata: 1 ora.",
    "description": "Una fiala comune pensata per ogni viaggio e per ogni banco di mercato."
  },
  {
    "id": "potion-generic-elisir-del-viandante",
    "name": "Elisir del Viandante",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "generic",
    "rarity": "Comune",
    "price": "26 mo",
    "effectType": "sopravvivenza",
    "bonuses": [
      "+1 ai tiri salvezza"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +1 ai tiri salvezza. Durata: 1 ora.",
    "description": "Una fiala comune pensata per ogni viaggio e per ogni banco di mercato."
  },
  {
    "id": "potion-generic-tonico-della-gilda",
    "name": "Tonico della Gilda",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "generic",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+1 a colpire"
    ],
    "penalties": [
      "-1 DES"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +1 a colpire. Malus: -1 DES. Durata: 10 minuti.",
    "description": "Una fiala non comune pensata per ogni viaggio e per ogni banco di mercato."
  },
  {
    "id": "potion-generic-fiala-del-mercato",
    "name": "Fiala del Mercato",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "generic",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "contundente"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Resistenza: contundente. Durata: 1 ora.",
    "description": "Una fiala non comune pensata per ogni viaggio e per ogni banco di mercato."
  },
  {
    "id": "potion-generic-balsamo-del-strada",
    "name": "Balsamo del Strada",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "generic",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "cura",
    "bonuses": [
      "recupera 2d4+2 PF"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "Istante",
    "mechanicalEffect": "Bonus: recupera 2d4+2 PF. Durata: Istante.",
    "description": "Una fiala non comune pensata per ogni viaggio e per ogni banco di mercato."
  },
  {
    "id": "potion-generic-distillato-della-crocevia",
    "name": "Distillato della Crocevia",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "generic",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+2 danni"
    ],
    "penalties": [
      "-1 INT"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +2 danni. Malus: -1 INT. Durata: 10 minuti.",
    "description": "Una fiala rara pensata per ogni viaggio e per ogni banco di mercato."
  },
  {
    "id": "potion-generic-infuso-del-viandante",
    "name": "Infuso del Viandante",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "generic",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "difesa",
    "bonuses": [
      "+1 CA"
    ],
    "penalties": [],
    "resistances": [
      "tagliente"
    ],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +1 CA. Resistenza: tagliente. Durata: 10 minuti.",
    "description": "Una fiala rara pensata per ogni viaggio e per ogni banco di mercato."
  },
  {
    "id": "potion-generic-essenza-della-gilda",
    "name": "Essenza della Gilda",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "generic",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "esplorazione",
    "bonuses": [
      "+2 a Persuasione"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 a Persuasione. Durata: 1 ora.",
    "description": "Una fiala rara pensata per ogni viaggio e per ogni banco di mercato."
  },
  {
    "id": "potion-generic-ampolla-del-mercato",
    "name": "Ampolla del Mercato",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "generic",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "difesa",
    "bonuses": [
      "+2 CA"
    ],
    "penalties": [
      "velocità -3 m"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +2 CA. Malus: velocità -3 m. Durata: 10 minuti.",
    "description": "Una fiala molto rara pensata per ogni viaggio e per ogni banco di mercato."
  },
  {
    "id": "potion-generic-siero-della-strada",
    "name": "Siero della Strada",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "generic",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+5 a colpire",
      "+2 danni"
    ],
    "penalties": [
      "-3 INT"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +5 a colpire, +2 danni. Malus: -3 INT. Durata: 10 minuti.",
    "description": "Una fiala molto rara pensata per ogni viaggio e per ogni banco di mercato."
  },
  {
    "id": "potion-generic-gocce-del-crocevia",
    "name": "Gocce del Crocevia",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "generic",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "percezione",
    "bonuses": [
      "+2 a Percezione"
    ],
    "penalties": [
      "-1 CAR"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 a Percezione. Malus: -1 CAR. Durata: 1 ora.",
    "description": "Una fiala molto rara pensata per ogni viaggio e per ogni banco di mercato."
  },
  {
    "id": "potion-generic-lacrima-della-viandante",
    "name": "Lacrima della Viandante",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "generic",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "tagliente",
      "contundente"
    ],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Resistenza: tagliente, contundente. Durata: 10 minuti.",
    "description": "Una fiala leggendaria pensata per ogni viaggio e per ogni banco di mercato."
  },
  {
    "id": "potion-generic-ambrosia-del-gilda",
    "name": "Ambrosia del Gilda",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "generic",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "potenziamento",
    "bonuses": [
      "+2 ai tiri salvezza"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 ai tiri salvezza. Durata: 1 ora.",
    "description": "Una fiala leggendaria pensata per ogni viaggio e per ogni banco di mercato."
  },
  {
    "id": "potion-generic-sangue-della-mercato",
    "name": "Sangue della Mercato",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "generic",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "furia",
    "bonuses": [
      "+3 danni"
    ],
    "penalties": [
      "svantaggio alle prove di Saggezza"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +3 danni. Malus: svantaggio alle prove di Saggezza. Durata: 10 minuti.",
    "description": "Una fiala leggendaria pensata per ogni viaggio e per ogni banco di mercato."
  },
  {
    "id": "potion-generic-olio-del-strada",
    "name": "Olio del Strada",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "generic",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "protezione",
    "bonuses": [
      "+1 CA"
    ],
    "penalties": [],
    "resistances": [
      "tagliente"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +1 CA. Resistenza: tagliente. Durata: 1 ora.",
    "description": "Una fiala rara pensata per ogni viaggio e per ogni banco di mercato."
  },
  {
    "id": "potion-generic-filtro-della-crocevia",
    "name": "Filtro della Crocevia",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "generic",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "utilità",
    "bonuses": [
      "+1 CA"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +1 CA. Durata: 1 ora.",
    "description": "Una fiala non comune pensata per ogni viaggio e per ogni banco di mercato."
  },
  {
    "id": "potion-coastal-pozione-della-risacca",
    "name": "Pozione della Risacca",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "coastal",
    "rarity": "Comune",
    "price": "26 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "freddo"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Resistenza: freddo. Durata: 1 ora.",
    "description": "Una fiala comune segnata da sale, corde bagnate e legno di nave."
  },
  {
    "id": "potion-coastal-elisir-del-molo",
    "name": "Elisir del Molo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "coastal",
    "rarity": "Comune",
    "price": "26 mo",
    "effectType": "sopravvivenza",
    "bonuses": [
      "respirare sott’acqua"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: respirare sott’acqua. Durata: 1 ora.",
    "description": "Una fiala comune segnata da sale, corde bagnate e legno di nave."
  },
  {
    "id": "potion-coastal-tonico-della-capitano",
    "name": "Tonico della Capitano",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "coastal",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+1 a colpire"
    ],
    "penalties": [
      "-1 DES su terreno asciutto"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +1 a colpire. Malus: -1 DES su terreno asciutto. Durata: 10 minuti.",
    "description": "Una fiala non comune segnata da sale, corde bagnate e legno di nave."
  },
  {
    "id": "potion-coastal-fiala-del-sale",
    "name": "Fiala del Sale",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "coastal",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "fulmine"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Resistenza: fulmine. Durata: 1 ora.",
    "description": "Una fiala non comune segnata da sale, corde bagnate e legno di nave."
  },
  {
    "id": "potion-coastal-balsamo-del-faro",
    "name": "Balsamo del Faro",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "coastal",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "cura",
    "bonuses": [
      "recupera 2d4+2 PF"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "Istante",
    "mechanicalEffect": "Bonus: recupera 2d4+2 PF. Durata: Istante.",
    "description": "Una fiala non comune segnata da sale, corde bagnate e legno di nave."
  },
  {
    "id": "potion-coastal-distillato-della-risacca",
    "name": "Distillato della Risacca",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "coastal",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+2 danni"
    ],
    "penalties": [
      "-1 INT"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +2 danni. Malus: -1 INT. Durata: 10 minuti.",
    "description": "Una fiala rara segnata da sale, corde bagnate e legno di nave."
  },
  {
    "id": "potion-coastal-infuso-del-molo",
    "name": "Infuso del Molo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "coastal",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "difesa",
    "bonuses": [
      "+1 CA"
    ],
    "penalties": [],
    "resistances": [
      "freddo"
    ],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +1 CA. Resistenza: freddo. Durata: 10 minuti.",
    "description": "Una fiala rara segnata da sale, corde bagnate e legno di nave."
  },
  {
    "id": "potion-coastal-essenza-della-capitano",
    "name": "Essenza della Capitano",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "coastal",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "esplorazione",
    "bonuses": [
      "+2 a Nuotare"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 a Nuotare. Durata: 1 ora.",
    "description": "Una fiala rara segnata da sale, corde bagnate e legno di nave."
  },
  {
    "id": "potion-coastal-ampolla-del-sale",
    "name": "Ampolla del Sale",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "coastal",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "difesa",
    "bonuses": [
      "+2 CA"
    ],
    "penalties": [
      "velocità -3 m"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +2 CA. Malus: velocità -3 m. Durata: 10 minuti.",
    "description": "Una fiala molto rara segnata da sale, corde bagnate e legno di nave."
  },
  {
    "id": "potion-coastal-siero-della-faro",
    "name": "Siero della Faro",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "coastal",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+5 a colpire",
      "+2 danni"
    ],
    "penalties": [
      "-3 INT"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +5 a colpire, +2 danni. Malus: -3 INT. Durata: 10 minuti.",
    "description": "Una fiala molto rara segnata da sale, corde bagnate e legno di nave."
  },
  {
    "id": "potion-coastal-gocce-del-risacca",
    "name": "Gocce del Risacca",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "coastal",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "percezione",
    "bonuses": [
      "+2 a Percezione"
    ],
    "penalties": [
      "-1 CAR"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 a Percezione. Malus: -1 CAR. Durata: 1 ora.",
    "description": "Una fiala molto rara segnata da sale, corde bagnate e legno di nave."
  },
  {
    "id": "potion-coastal-lacrima-della-molo",
    "name": "Lacrima della Molo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "coastal",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "freddo",
      "fulmine"
    ],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Resistenza: freddo, fulmine. Durata: 10 minuti.",
    "description": "Una fiala leggendaria segnata da sale, corde bagnate e legno di nave."
  },
  {
    "id": "potion-coastal-ambrosia-del-capitano",
    "name": "Ambrosia del Capitano",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "coastal",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "potenziamento",
    "bonuses": [
      "+2 ai tiri salvezza"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 ai tiri salvezza. Durata: 1 ora.",
    "description": "Una fiala leggendaria segnata da sale, corde bagnate e legno di nave."
  },
  {
    "id": "potion-coastal-sangue-della-sale",
    "name": "Sangue della Sale",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "coastal",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "furia",
    "bonuses": [
      "+3 danni"
    ],
    "penalties": [
      "svantaggio alle prove di Saggezza"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +3 danni. Malus: svantaggio alle prove di Saggezza. Durata: 10 minuti.",
    "description": "Una fiala leggendaria segnata da sale, corde bagnate e legno di nave."
  },
  {
    "id": "potion-coastal-olio-del-faro",
    "name": "Olio del Faro",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "coastal",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "protezione",
    "bonuses": [
      "+1 CA"
    ],
    "penalties": [],
    "resistances": [
      "freddo"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +1 CA. Resistenza: freddo. Durata: 1 ora.",
    "description": "Una fiala rara segnata da sale, corde bagnate e legno di nave."
  },
  {
    "id": "potion-coastal-filtro-della-risacca",
    "name": "Filtro della Risacca",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "coastal",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "utilità",
    "bonuses": [
      "non subisce penalità in acqua"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: non subisce penalità in acqua. Durata: 1 ora.",
    "description": "Una fiala non comune segnata da sale, corde bagnate e legno di nave."
  },
  {
    "id": "potion-mountain-pozione-della-valico",
    "name": "Pozione della Valico",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "mountain",
    "rarity": "Comune",
    "price": "26 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "freddo"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Resistenza: freddo. Durata: 1 ora.",
    "description": "Una fiala comune dura come pietra e nata per sentieri ripidi."
  },
  {
    "id": "potion-mountain-elisir-del-cima",
    "name": "Elisir del Cima",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "mountain",
    "rarity": "Comune",
    "price": "26 mo",
    "effectType": "sopravvivenza",
    "bonuses": [
      "+2 ad Atletica"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 ad Atletica. Durata: 1 ora.",
    "description": "Una fiala comune dura come pietra e nata per sentieri ripidi."
  },
  {
    "id": "potion-mountain-tonico-della-roccia",
    "name": "Tonico della Roccia",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "mountain",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+1 a colpire"
    ],
    "penalties": [
      "velocità -3 m"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +1 a colpire. Malus: velocità -3 m. Durata: 10 minuti.",
    "description": "Una fiala non comune dura come pietra e nata per sentieri ripidi."
  },
  {
    "id": "potion-mountain-fiala-del-frana",
    "name": "Fiala del Frana",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "mountain",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "contundente"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Resistenza: contundente. Durata: 1 ora.",
    "description": "Una fiala non comune dura come pietra e nata per sentieri ripidi."
  },
  {
    "id": "potion-mountain-balsamo-del-vetta",
    "name": "Balsamo del Vetta",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "mountain",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "cura",
    "bonuses": [
      "recupera 2d4+2 PF"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "Istante",
    "mechanicalEffect": "Bonus: recupera 2d4+2 PF. Durata: Istante.",
    "description": "Una fiala non comune dura come pietra e nata per sentieri ripidi."
  },
  {
    "id": "potion-mountain-distillato-della-valico",
    "name": "Distillato della Valico",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "mountain",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+2 danni"
    ],
    "penalties": [
      "-1 INT"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +2 danni. Malus: -1 INT. Durata: 10 minuti.",
    "description": "Una fiala rara dura come pietra e nata per sentieri ripidi."
  },
  {
    "id": "potion-mountain-infuso-del-cima",
    "name": "Infuso del Cima",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "mountain",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "difesa",
    "bonuses": [
      "+1 CA"
    ],
    "penalties": [],
    "resistances": [
      "freddo"
    ],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +1 CA. Resistenza: freddo. Durata: 10 minuti.",
    "description": "Una fiala rara dura come pietra e nata per sentieri ripidi."
  },
  {
    "id": "potion-mountain-essenza-della-roccia",
    "name": "Essenza della Roccia",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "mountain",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "esplorazione",
    "bonuses": [
      "vantaggio contro essere spinto"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: vantaggio contro essere spinto. Durata: 1 ora.",
    "description": "Una fiala rara dura come pietra e nata per sentieri ripidi."
  },
  {
    "id": "potion-mountain-ampolla-del-frana",
    "name": "Ampolla del Frana",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "mountain",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "difesa",
    "bonuses": [
      "+2 CA"
    ],
    "penalties": [
      "velocità -3 m"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +2 CA. Malus: velocità -3 m. Durata: 10 minuti.",
    "description": "Una fiala molto rara dura come pietra e nata per sentieri ripidi."
  },
  {
    "id": "potion-mountain-siero-della-vetta",
    "name": "Siero della Vetta",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "mountain",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+5 a colpire",
      "+2 danni"
    ],
    "penalties": [
      "-3 INT"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +5 a colpire, +2 danni. Malus: -3 INT. Durata: 10 minuti.",
    "description": "Una fiala molto rara dura come pietra e nata per sentieri ripidi."
  },
  {
    "id": "potion-mountain-gocce-del-valico",
    "name": "Gocce del Valico",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "mountain",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "percezione",
    "bonuses": [
      "+2 a Percezione"
    ],
    "penalties": [
      "-1 CAR"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 a Percezione. Malus: -1 CAR. Durata: 1 ora.",
    "description": "Una fiala molto rara dura come pietra e nata per sentieri ripidi."
  },
  {
    "id": "potion-mountain-lacrima-della-cima",
    "name": "Lacrima della Cima",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "mountain",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "freddo",
      "contundente"
    ],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Resistenza: freddo, contundente. Durata: 10 minuti.",
    "description": "Una fiala leggendaria dura come pietra e nata per sentieri ripidi."
  },
  {
    "id": "potion-mountain-ambrosia-del-roccia",
    "name": "Ambrosia del Roccia",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "mountain",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "potenziamento",
    "bonuses": [
      "+2 ai tiri salvezza"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 ai tiri salvezza. Durata: 1 ora.",
    "description": "Una fiala leggendaria dura come pietra e nata per sentieri ripidi."
  },
  {
    "id": "potion-mountain-sangue-della-frana",
    "name": "Sangue della Frana",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "mountain",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "furia",
    "bonuses": [
      "+3 danni"
    ],
    "penalties": [
      "svantaggio alle prove di Saggezza"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +3 danni. Malus: svantaggio alle prove di Saggezza. Durata: 10 minuti.",
    "description": "Una fiala leggendaria dura come pietra e nata per sentieri ripidi."
  },
  {
    "id": "potion-mountain-olio-del-vetta",
    "name": "Olio del Vetta",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "mountain",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "protezione",
    "bonuses": [
      "+1 CA"
    ],
    "penalties": [],
    "resistances": [
      "freddo"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +1 CA. Resistenza: freddo. Durata: 1 ora.",
    "description": "Una fiala rara dura come pietra e nata per sentieri ripidi."
  },
  {
    "id": "potion-mountain-filtro-della-valico",
    "name": "Filtro della Valico",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "mountain",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "utilità",
    "bonuses": [
      "+1 CA"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +1 CA. Durata: 1 ora.",
    "description": "Una fiala non comune dura come pietra e nata per sentieri ripidi."
  },
  {
    "id": "potion-forest-pozione-della-radice",
    "name": "Pozione della Radice",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "forest",
    "rarity": "Comune",
    "price": "26 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "veleno"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Resistenza: veleno. Durata: 1 ora.",
    "description": "Una fiala comune profumata di linfa, muschio e sentieri nascosti."
  },
  {
    "id": "potion-forest-elisir-del-fronda",
    "name": "Elisir del Fronda",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "forest",
    "rarity": "Comune",
    "price": "26 mo",
    "effectType": "sopravvivenza",
    "bonuses": [
      "vantaggio a Furtività"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: vantaggio a Furtività. Durata: 1 ora.",
    "description": "Una fiala comune profumata di linfa, muschio e sentieri nascosti."
  },
  {
    "id": "potion-forest-tonico-della-cervo",
    "name": "Tonico della Cervo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "forest",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+1 a colpire"
    ],
    "penalties": [
      "-1 CAR in città"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +1 a colpire. Malus: -1 CAR in città. Durata: 10 minuti.",
    "description": "Una fiala non comune profumata di linfa, muschio e sentieri nascosti."
  },
  {
    "id": "potion-forest-fiala-del-muschio",
    "name": "Fiala del Muschio",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "forest",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "perforante"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Resistenza: perforante. Durata: 1 ora.",
    "description": "Una fiala non comune profumata di linfa, muschio e sentieri nascosti."
  },
  {
    "id": "potion-forest-balsamo-del-cacciatore",
    "name": "Balsamo del Cacciatore",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "forest",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "cura",
    "bonuses": [
      "recupera 2d4+2 PF"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "Istante",
    "mechanicalEffect": "Bonus: recupera 2d4+2 PF. Durata: Istante.",
    "description": "Una fiala non comune profumata di linfa, muschio e sentieri nascosti."
  },
  {
    "id": "potion-forest-distillato-della-radice",
    "name": "Distillato della Radice",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "forest",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+2 danni"
    ],
    "penalties": [
      "-1 INT"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +2 danni. Malus: -1 INT. Durata: 10 minuti.",
    "description": "Una fiala rara profumata di linfa, muschio e sentieri nascosti."
  },
  {
    "id": "potion-forest-infuso-del-fronda",
    "name": "Infuso del Fronda",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "forest",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "difesa",
    "bonuses": [
      "+1 CA"
    ],
    "penalties": [],
    "resistances": [
      "veleno"
    ],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +1 CA. Resistenza: veleno. Durata: 10 minuti.",
    "description": "Una fiala rara profumata di linfa, muschio e sentieri nascosti."
  },
  {
    "id": "potion-forest-essenza-della-cervo",
    "name": "Essenza della Cervo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "forest",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "esplorazione",
    "bonuses": [
      "+2 a Sopravvivenza"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 a Sopravvivenza. Durata: 1 ora.",
    "description": "Una fiala rara profumata di linfa, muschio e sentieri nascosti."
  },
  {
    "id": "potion-forest-ampolla-del-muschio",
    "name": "Ampolla del Muschio",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "forest",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "difesa",
    "bonuses": [
      "+2 CA"
    ],
    "penalties": [
      "velocità -3 m"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +2 CA. Malus: velocità -3 m. Durata: 10 minuti.",
    "description": "Una fiala molto rara profumata di linfa, muschio e sentieri nascosti."
  },
  {
    "id": "potion-forest-siero-della-cacciatore",
    "name": "Siero della Cacciatore",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "forest",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+5 a colpire",
      "+2 danni"
    ],
    "penalties": [
      "-3 INT"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +5 a colpire, +2 danni. Malus: -3 INT. Durata: 10 minuti.",
    "description": "Una fiala molto rara profumata di linfa, muschio e sentieri nascosti."
  },
  {
    "id": "potion-forest-gocce-del-radice",
    "name": "Gocce del Radice",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "forest",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "percezione",
    "bonuses": [
      "+2 a Percezione"
    ],
    "penalties": [
      "-1 CAR"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 a Percezione. Malus: -1 CAR. Durata: 1 ora.",
    "description": "Una fiala molto rara profumata di linfa, muschio e sentieri nascosti."
  },
  {
    "id": "potion-forest-lacrima-della-fronda",
    "name": "Lacrima della Fronda",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "forest",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "veleno",
      "perforante"
    ],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Resistenza: veleno, perforante. Durata: 10 minuti.",
    "description": "Una fiala leggendaria profumata di linfa, muschio e sentieri nascosti."
  },
  {
    "id": "potion-forest-ambrosia-del-cervo",
    "name": "Ambrosia del Cervo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "forest",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "potenziamento",
    "bonuses": [
      "+2 ai tiri salvezza"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 ai tiri salvezza. Durata: 1 ora.",
    "description": "Una fiala leggendaria profumata di linfa, muschio e sentieri nascosti."
  },
  {
    "id": "potion-forest-sangue-della-muschio",
    "name": "Sangue della Muschio",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "forest",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "furia",
    "bonuses": [
      "+3 danni"
    ],
    "penalties": [
      "svantaggio alle prove di Saggezza"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +3 danni. Malus: svantaggio alle prove di Saggezza. Durata: 10 minuti.",
    "description": "Una fiala leggendaria profumata di linfa, muschio e sentieri nascosti."
  },
  {
    "id": "potion-forest-olio-del-cacciatore",
    "name": "Olio del Cacciatore",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "forest",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "protezione",
    "bonuses": [
      "+1 CA"
    ],
    "penalties": [],
    "resistances": [
      "veleno"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +1 CA. Resistenza: veleno. Durata: 1 ora.",
    "description": "Una fiala rara profumata di linfa, muschio e sentieri nascosti."
  },
  {
    "id": "potion-forest-filtro-della-radice",
    "name": "Filtro della Radice",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "forest",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "utilità",
    "bonuses": [
      "ignora rovi leggeri"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: ignora rovi leggeri. Durata: 1 ora.",
    "description": "Una fiala non comune profumata di linfa, muschio e sentieri nascosti."
  },
  {
    "id": "potion-desert-pozione-della-duna",
    "name": "Pozione della Duna",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "desert",
    "rarity": "Comune",
    "price": "26 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "fuoco"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Resistenza: fuoco. Durata: 1 ora.",
    "description": "Una fiala comune lucente come sabbia arroventata e vetro dorato."
  },
  {
    "id": "potion-desert-elisir-del-oasi",
    "name": "Elisir del Oasi",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "desert",
    "rarity": "Comune",
    "price": "26 mo",
    "effectType": "sopravvivenza",
    "bonuses": [
      "ignora caldo estremo"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: ignora caldo estremo. Durata: 1 ora.",
    "description": "Una fiala comune lucente come sabbia arroventata e vetro dorato."
  },
  {
    "id": "potion-desert-tonico-della-sole-freddo",
    "name": "Tonico della Sole Freddo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "desert",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+1 a colpire"
    ],
    "penalties": [
      "-1 COS al freddo"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +1 a colpire. Malus: -1 COS al freddo. Durata: 10 minuti.",
    "description": "Una fiala non comune lucente come sabbia arroventata e vetro dorato."
  },
  {
    "id": "potion-desert-fiala-del-carovana",
    "name": "Fiala del Carovana",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "desert",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "radiante"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Resistenza: radiante. Durata: 1 ora.",
    "description": "Una fiala non comune lucente come sabbia arroventata e vetro dorato."
  },
  {
    "id": "potion-desert-balsamo-del-miraggio",
    "name": "Balsamo del Miraggio",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "desert",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "cura",
    "bonuses": [
      "recupera 2d4+2 PF"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "Istante",
    "mechanicalEffect": "Bonus: recupera 2d4+2 PF. Durata: Istante.",
    "description": "Una fiala non comune lucente come sabbia arroventata e vetro dorato."
  },
  {
    "id": "potion-desert-distillato-della-duna",
    "name": "Distillato della Duna",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "desert",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+2 danni"
    ],
    "penalties": [
      "-1 INT"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +2 danni. Malus: -1 INT. Durata: 10 minuti.",
    "description": "Una fiala rara lucente come sabbia arroventata e vetro dorato."
  },
  {
    "id": "potion-desert-infuso-del-oasi",
    "name": "Infuso del Oasi",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "desert",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "difesa",
    "bonuses": [
      "+1 CA"
    ],
    "penalties": [],
    "resistances": [
      "fuoco"
    ],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +1 CA. Resistenza: fuoco. Durata: 10 minuti.",
    "description": "Una fiala rara lucente come sabbia arroventata e vetro dorato."
  },
  {
    "id": "potion-desert-essenza-della-sole-freddo",
    "name": "Essenza della Sole Freddo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "desert",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "esplorazione",
    "bonuses": [
      "+2 a Sopravvivenza nel deserto"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 a Sopravvivenza nel deserto. Durata: 1 ora.",
    "description": "Una fiala rara lucente come sabbia arroventata e vetro dorato."
  },
  {
    "id": "potion-desert-ampolla-del-carovana",
    "name": "Ampolla del Carovana",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "desert",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "difesa",
    "bonuses": [
      "+2 CA"
    ],
    "penalties": [
      "velocità -3 m"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +2 CA. Malus: velocità -3 m. Durata: 10 minuti.",
    "description": "Una fiala molto rara lucente come sabbia arroventata e vetro dorato."
  },
  {
    "id": "potion-desert-siero-della-miraggio",
    "name": "Siero della Miraggio",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "desert",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+5 a colpire",
      "+2 danni"
    ],
    "penalties": [
      "-3 INT"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +5 a colpire, +2 danni. Malus: -3 INT. Durata: 10 minuti.",
    "description": "Una fiala molto rara lucente come sabbia arroventata e vetro dorato."
  },
  {
    "id": "potion-desert-gocce-del-duna",
    "name": "Gocce del Duna",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "desert",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "percezione",
    "bonuses": [
      "+2 a Percezione"
    ],
    "penalties": [
      "-1 CAR"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 a Percezione. Malus: -1 CAR. Durata: 1 ora.",
    "description": "Una fiala molto rara lucente come sabbia arroventata e vetro dorato."
  },
  {
    "id": "potion-desert-lacrima-della-oasi",
    "name": "Lacrima della Oasi",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "desert",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "fuoco",
      "radiante"
    ],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Resistenza: fuoco, radiante. Durata: 10 minuti.",
    "description": "Una fiala leggendaria lucente come sabbia arroventata e vetro dorato."
  },
  {
    "id": "potion-desert-ambrosia-del-sole-freddo",
    "name": "Ambrosia del Sole Freddo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "desert",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "potenziamento",
    "bonuses": [
      "+2 ai tiri salvezza"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 ai tiri salvezza. Durata: 1 ora.",
    "description": "Una fiala leggendaria lucente come sabbia arroventata e vetro dorato."
  },
  {
    "id": "potion-desert-sangue-della-carovana",
    "name": "Sangue della Carovana",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "desert",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "furia",
    "bonuses": [
      "+3 danni"
    ],
    "penalties": [
      "svantaggio alle prove di Saggezza"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +3 danni. Malus: svantaggio alle prove di Saggezza. Durata: 10 minuti.",
    "description": "Una fiala leggendaria lucente come sabbia arroventata e vetro dorato."
  },
  {
    "id": "potion-desert-olio-del-miraggio",
    "name": "Olio del Miraggio",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "desert",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "protezione",
    "bonuses": [
      "+1 CA"
    ],
    "penalties": [],
    "resistances": [
      "fuoco"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +1 CA. Resistenza: fuoco. Durata: 1 ora.",
    "description": "Una fiala rara lucente come sabbia arroventata e vetro dorato."
  },
  {
    "id": "potion-desert-filtro-della-duna",
    "name": "Filtro della Duna",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "desert",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "utilità",
    "bonuses": [
      "+1 danni da fuoco"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +1 danni da fuoco. Durata: 1 ora.",
    "description": "Una fiala non comune lucente come sabbia arroventata e vetro dorato."
  },
  {
    "id": "potion-city-pozione-della-vicolo",
    "name": "Pozione della Vicolo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "city",
    "rarity": "Comune",
    "price": "26 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "psichico"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Resistenza: psichico. Durata: 1 ora.",
    "description": "Una fiala comune raffinata, sottile e adatta a intrighi urbani."
  },
  {
    "id": "potion-city-elisir-del-duellante",
    "name": "Elisir del Duellante",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "city",
    "rarity": "Comune",
    "price": "26 mo",
    "effectType": "sopravvivenza",
    "bonuses": [
      "+2 a Inganno"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 a Inganno. Durata: 1 ora.",
    "description": "Una fiala comune raffinata, sottile e adatta a intrighi urbani."
  },
  {
    "id": "potion-city-tonico-della-corte",
    "name": "Tonico della Corte",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "city",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+1 a colpire"
    ],
    "penalties": [
      "-1 Saggezza in natura"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +1 a colpire. Malus: -1 Saggezza in natura. Durata: 10 minuti.",
    "description": "Una fiala non comune raffinata, sottile e adatta a intrighi urbani."
  },
  {
    "id": "potion-city-fiala-del-notaio",
    "name": "Fiala del Notaio",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "city",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "perforante"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Resistenza: perforante. Durata: 1 ora.",
    "description": "Una fiala non comune raffinata, sottile e adatta a intrighi urbani."
  },
  {
    "id": "potion-city-balsamo-del-gilda",
    "name": "Balsamo del Gilda",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "city",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "cura",
    "bonuses": [
      "recupera 2d4+2 PF"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "Istante",
    "mechanicalEffect": "Bonus: recupera 2d4+2 PF. Durata: Istante.",
    "description": "Una fiala non comune raffinata, sottile e adatta a intrighi urbani."
  },
  {
    "id": "potion-city-distillato-della-vicolo",
    "name": "Distillato della Vicolo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "city",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+2 danni"
    ],
    "penalties": [
      "-1 INT"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +2 danni. Malus: -1 INT. Durata: 10 minuti.",
    "description": "Una fiala rara raffinata, sottile e adatta a intrighi urbani."
  },
  {
    "id": "potion-city-infuso-del-duellante",
    "name": "Infuso del Duellante",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "city",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "difesa",
    "bonuses": [
      "+1 CA"
    ],
    "penalties": [],
    "resistances": [
      "psichico"
    ],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +1 CA. Resistenza: psichico. Durata: 10 minuti.",
    "description": "Una fiala rara raffinata, sottile e adatta a intrighi urbani."
  },
  {
    "id": "potion-city-essenza-della-corte",
    "name": "Essenza della Corte",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "city",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "esplorazione",
    "bonuses": [
      "+2 a Persuasione"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 a Persuasione. Durata: 1 ora.",
    "description": "Una fiala rara raffinata, sottile e adatta a intrighi urbani."
  },
  {
    "id": "potion-city-ampolla-del-notaio",
    "name": "Ampolla del Notaio",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "city",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "difesa",
    "bonuses": [
      "+2 CA"
    ],
    "penalties": [
      "velocità -3 m"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +2 CA. Malus: velocità -3 m. Durata: 10 minuti.",
    "description": "Una fiala molto rara raffinata, sottile e adatta a intrighi urbani."
  },
  {
    "id": "potion-city-siero-della-gilda",
    "name": "Siero della Gilda",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "city",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+5 a colpire",
      "+2 danni"
    ],
    "penalties": [
      "-3 INT"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +5 a colpire, +2 danni. Malus: -3 INT. Durata: 10 minuti.",
    "description": "Una fiala molto rara raffinata, sottile e adatta a intrighi urbani."
  },
  {
    "id": "potion-city-gocce-del-vicolo",
    "name": "Gocce del Vicolo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "city",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "percezione",
    "bonuses": [
      "+2 a Percezione"
    ],
    "penalties": [
      "-1 CAR"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 a Percezione. Malus: -1 CAR. Durata: 1 ora.",
    "description": "Una fiala molto rara raffinata, sottile e adatta a intrighi urbani."
  },
  {
    "id": "potion-city-lacrima-della-duellante",
    "name": "Lacrima della Duellante",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "city",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "psichico",
      "perforante"
    ],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Resistenza: psichico, perforante. Durata: 10 minuti.",
    "description": "Una fiala leggendaria raffinata, sottile e adatta a intrighi urbani."
  },
  {
    "id": "potion-city-ambrosia-del-corte",
    "name": "Ambrosia del Corte",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "city",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "potenziamento",
    "bonuses": [
      "+2 ai tiri salvezza"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 ai tiri salvezza. Durata: 1 ora.",
    "description": "Una fiala leggendaria raffinata, sottile e adatta a intrighi urbani."
  },
  {
    "id": "potion-city-sangue-della-notaio",
    "name": "Sangue della Notaio",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "city",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "furia",
    "bonuses": [
      "+3 danni"
    ],
    "penalties": [
      "svantaggio alle prove di Saggezza"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +3 danni. Malus: svantaggio alle prove di Saggezza. Durata: 10 minuti.",
    "description": "Una fiala leggendaria raffinata, sottile e adatta a intrighi urbani."
  },
  {
    "id": "potion-city-olio-del-gilda",
    "name": "Olio del Gilda",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "city",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "protezione",
    "bonuses": [
      "+1 CA"
    ],
    "penalties": [],
    "resistances": [
      "psichico"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +1 CA. Resistenza: psichico. Durata: 1 ora.",
    "description": "Una fiala rara raffinata, sottile e adatta a intrighi urbani."
  },
  {
    "id": "potion-city-filtro-della-vicolo",
    "name": "Filtro della Vicolo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "city",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "utilità",
    "bonuses": [
      "vantaggio a iniziativa in città"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: vantaggio a iniziativa in città. Durata: 1 ora.",
    "description": "Una fiala non comune raffinata, sottile e adatta a intrighi urbani."
  },
  {
    "id": "potion-frontier-pozione-della-pioniere",
    "name": "Pozione della Pioniere",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "frontier",
    "rarity": "Comune",
    "price": "26 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "tagliente"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Resistenza: tagliente. Durata: 1 ora.",
    "description": "Una fiala comune ruvida, pratica e costruita per sopravvivere lontano dalle mura."
  },
  {
    "id": "potion-frontier-elisir-del-palizzata",
    "name": "Elisir del Palizzata",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "frontier",
    "rarity": "Comune",
    "price": "26 mo",
    "effectType": "sopravvivenza",
    "bonuses": [
      "+1 a colpire"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +1 a colpire. Durata: 1 ora.",
    "description": "Una fiala comune ruvida, pratica e costruita per sopravvivere lontano dalle mura."
  },
  {
    "id": "potion-frontier-tonico-della-guado",
    "name": "Tonico della Guado",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "frontier",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+1 a colpire"
    ],
    "penalties": [
      "-1 INT"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +1 a colpire. Malus: -1 INT. Durata: 10 minuti.",
    "description": "Una fiala non comune ruvida, pratica e costruita per sopravvivere lontano dalle mura."
  },
  {
    "id": "potion-frontier-fiala-del-sentiero",
    "name": "Fiala del Sentiero",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "frontier",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "veleno"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Resistenza: veleno. Durata: 1 ora.",
    "description": "Una fiala non comune ruvida, pratica e costruita per sopravvivere lontano dalle mura."
  },
  {
    "id": "potion-frontier-balsamo-del-branco",
    "name": "Balsamo del Branco",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "frontier",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "cura",
    "bonuses": [
      "recupera 2d4+2 PF"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "Istante",
    "mechanicalEffect": "Bonus: recupera 2d4+2 PF. Durata: Istante.",
    "description": "Una fiala non comune ruvida, pratica e costruita per sopravvivere lontano dalle mura."
  },
  {
    "id": "potion-frontier-distillato-della-pioniere",
    "name": "Distillato della Pioniere",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "frontier",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+2 danni"
    ],
    "penalties": [
      "-1 INT"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +2 danni. Malus: -1 INT. Durata: 10 minuti.",
    "description": "Una fiala rara ruvida, pratica e costruita per sopravvivere lontano dalle mura."
  },
  {
    "id": "potion-frontier-infuso-del-palizzata",
    "name": "Infuso del Palizzata",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "frontier",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "difesa",
    "bonuses": [
      "+1 CA"
    ],
    "penalties": [],
    "resistances": [
      "tagliente"
    ],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +1 CA. Resistenza: tagliente. Durata: 10 minuti.",
    "description": "Una fiala rara ruvida, pratica e costruita per sopravvivere lontano dalle mura."
  },
  {
    "id": "potion-frontier-essenza-della-guado",
    "name": "Essenza della Guado",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "frontier",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "esplorazione",
    "bonuses": [
      "+2 a Sopravvivenza"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 a Sopravvivenza. Durata: 1 ora.",
    "description": "Una fiala rara ruvida, pratica e costruita per sopravvivere lontano dalle mura."
  },
  {
    "id": "potion-frontier-ampolla-del-sentiero",
    "name": "Ampolla del Sentiero",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "frontier",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "difesa",
    "bonuses": [
      "+2 CA"
    ],
    "penalties": [
      "velocità -3 m"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +2 CA. Malus: velocità -3 m. Durata: 10 minuti.",
    "description": "Una fiala molto rara ruvida, pratica e costruita per sopravvivere lontano dalle mura."
  },
  {
    "id": "potion-frontier-siero-della-branco",
    "name": "Siero della Branco",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "frontier",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+5 a colpire",
      "+2 danni"
    ],
    "penalties": [
      "-3 INT"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +5 a colpire, +2 danni. Malus: -3 INT. Durata: 10 minuti.",
    "description": "Una fiala molto rara ruvida, pratica e costruita per sopravvivere lontano dalle mura."
  },
  {
    "id": "potion-frontier-gocce-del-pioniere",
    "name": "Gocce del Pioniere",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "frontier",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "percezione",
    "bonuses": [
      "+2 a Percezione"
    ],
    "penalties": [
      "-1 CAR"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 a Percezione. Malus: -1 CAR. Durata: 1 ora.",
    "description": "Una fiala molto rara ruvida, pratica e costruita per sopravvivere lontano dalle mura."
  },
  {
    "id": "potion-frontier-lacrima-della-palizzata",
    "name": "Lacrima della Palizzata",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "frontier",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "tagliente",
      "veleno"
    ],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Resistenza: tagliente, veleno. Durata: 10 minuti.",
    "description": "Una fiala leggendaria ruvida, pratica e costruita per sopravvivere lontano dalle mura."
  },
  {
    "id": "potion-frontier-ambrosia-del-guado",
    "name": "Ambrosia del Guado",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "frontier",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "potenziamento",
    "bonuses": [
      "+2 ai tiri salvezza"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 ai tiri salvezza. Durata: 1 ora.",
    "description": "Una fiala leggendaria ruvida, pratica e costruita per sopravvivere lontano dalle mura."
  },
  {
    "id": "potion-frontier-sangue-della-sentiero",
    "name": "Sangue della Sentiero",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "frontier",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "furia",
    "bonuses": [
      "+3 danni"
    ],
    "penalties": [
      "svantaggio alle prove di Saggezza"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +3 danni. Malus: svantaggio alle prove di Saggezza. Durata: 10 minuti.",
    "description": "Una fiala leggendaria ruvida, pratica e costruita per sopravvivere lontano dalle mura."
  },
  {
    "id": "potion-frontier-olio-del-branco",
    "name": "Olio del Branco",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "frontier",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "protezione",
    "bonuses": [
      "+1 CA"
    ],
    "penalties": [],
    "resistances": [
      "tagliente"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +1 CA. Resistenza: tagliente. Durata: 1 ora.",
    "description": "Una fiala rara ruvida, pratica e costruita per sopravvivere lontano dalle mura."
  },
  {
    "id": "potion-frontier-filtro-della-pioniere",
    "name": "Filtro della Pioniere",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "frontier",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "utilità",
    "bonuses": [
      "+1 ai TS"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +1 ai TS. Durata: 1 ora.",
    "description": "Una fiala non comune ruvida, pratica e costruita per sopravvivere lontano dalle mura."
  },
  {
    "id": "potion-rural-pozione-della-granaio",
    "name": "Pozione della Granaio",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "rural",
    "rarity": "Comune",
    "price": "26 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "contundente"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Resistenza: contundente. Durata: 1 ora.",
    "description": "Una fiala comune semplice, robusta e legata a campi e villaggi."
  },
  {
    "id": "potion-rural-elisir-del-raccolto",
    "name": "Elisir del Raccolto",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "rural",
    "rarity": "Comune",
    "price": "26 mo",
    "effectType": "sopravvivenza",
    "bonuses": [
      "+2 a Natura"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 a Natura. Durata: 1 ora.",
    "description": "Una fiala comune semplice, robusta e legata a campi e villaggi."
  },
  {
    "id": "potion-rural-tonico-della-maniscalco",
    "name": "Tonico della Maniscalco",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "rural",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+1 a colpire"
    ],
    "penalties": [
      "-1 DES"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +1 a colpire. Malus: -1 DES. Durata: 10 minuti.",
    "description": "Una fiala non comune semplice, robusta e legata a campi e villaggi."
  },
  {
    "id": "potion-rural-fiala-del-campo",
    "name": "Fiala del Campo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "rural",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "veleno"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Resistenza: veleno. Durata: 1 ora.",
    "description": "Una fiala non comune semplice, robusta e legata a campi e villaggi."
  },
  {
    "id": "potion-rural-balsamo-del-fienile",
    "name": "Balsamo del Fienile",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "rural",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "cura",
    "bonuses": [
      "recupera 2d4+2 PF"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "Istante",
    "mechanicalEffect": "Bonus: recupera 2d4+2 PF. Durata: Istante.",
    "description": "Una fiala non comune semplice, robusta e legata a campi e villaggi."
  },
  {
    "id": "potion-rural-distillato-della-granaio",
    "name": "Distillato della Granaio",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "rural",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+2 danni"
    ],
    "penalties": [
      "-1 INT"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +2 danni. Malus: -1 INT. Durata: 10 minuti.",
    "description": "Una fiala rara semplice, robusta e legata a campi e villaggi."
  },
  {
    "id": "potion-rural-infuso-del-raccolto",
    "name": "Infuso del Raccolto",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "rural",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "difesa",
    "bonuses": [
      "+1 CA"
    ],
    "penalties": [],
    "resistances": [
      "contundente"
    ],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +1 CA. Resistenza: contundente. Durata: 10 minuti.",
    "description": "Una fiala rara semplice, robusta e legata a campi e villaggi."
  },
  {
    "id": "potion-rural-essenza-della-maniscalco",
    "name": "Essenza della Maniscalco",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "rural",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "esplorazione",
    "bonuses": [
      "recupera +2 PF durante riposo breve"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: recupera +2 PF durante riposo breve. Durata: 1 ora.",
    "description": "Una fiala rara semplice, robusta e legata a campi e villaggi."
  },
  {
    "id": "potion-rural-ampolla-del-campo",
    "name": "Ampolla del Campo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "rural",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "difesa",
    "bonuses": [
      "+2 CA"
    ],
    "penalties": [
      "velocità -3 m"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +2 CA. Malus: velocità -3 m. Durata: 10 minuti.",
    "description": "Una fiala molto rara semplice, robusta e legata a campi e villaggi."
  },
  {
    "id": "potion-rural-siero-della-fienile",
    "name": "Siero della Fienile",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "rural",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+5 a colpire",
      "+2 danni"
    ],
    "penalties": [
      "-3 INT"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +5 a colpire, +2 danni. Malus: -3 INT. Durata: 10 minuti.",
    "description": "Una fiala molto rara semplice, robusta e legata a campi e villaggi."
  },
  {
    "id": "potion-rural-gocce-del-granaio",
    "name": "Gocce del Granaio",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "rural",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "percezione",
    "bonuses": [
      "+2 a Percezione"
    ],
    "penalties": [
      "-1 CAR"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 a Percezione. Malus: -1 CAR. Durata: 1 ora.",
    "description": "Una fiala molto rara semplice, robusta e legata a campi e villaggi."
  },
  {
    "id": "potion-rural-lacrima-della-raccolto",
    "name": "Lacrima della Raccolto",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "rural",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "contundente",
      "veleno"
    ],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Resistenza: contundente, veleno. Durata: 10 minuti.",
    "description": "Una fiala leggendaria semplice, robusta e legata a campi e villaggi."
  },
  {
    "id": "potion-rural-ambrosia-del-maniscalco",
    "name": "Ambrosia del Maniscalco",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "rural",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "potenziamento",
    "bonuses": [
      "+2 ai tiri salvezza"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 ai tiri salvezza. Durata: 1 ora.",
    "description": "Una fiala leggendaria semplice, robusta e legata a campi e villaggi."
  },
  {
    "id": "potion-rural-sangue-della-campo",
    "name": "Sangue della Campo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "rural",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "furia",
    "bonuses": [
      "+3 danni"
    ],
    "penalties": [
      "svantaggio alle prove di Saggezza"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +3 danni. Malus: svantaggio alle prove di Saggezza. Durata: 10 minuti.",
    "description": "Una fiala leggendaria semplice, robusta e legata a campi e villaggi."
  },
  {
    "id": "potion-rural-olio-del-fienile",
    "name": "Olio del Fienile",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "rural",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "protezione",
    "bonuses": [
      "+1 CA"
    ],
    "penalties": [],
    "resistances": [
      "contundente"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +1 CA. Resistenza: contundente. Durata: 1 ora.",
    "description": "Una fiala rara semplice, robusta e legata a campi e villaggi."
  },
  {
    "id": "potion-rural-filtro-della-granaio",
    "name": "Filtro della Granaio",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "rural",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "utilità",
    "bonuses": [
      "+1 a prove fisiche"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +1 a prove fisiche. Durata: 1 ora.",
    "description": "Una fiala non comune semplice, robusta e legata a campi e villaggi."
  },
  {
    "id": "potion-underdark-pozione-della-basalto",
    "name": "Pozione della Basalto",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "underdark",
    "rarity": "Comune",
    "price": "26 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "veleno"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Resistenza: veleno. Durata: 1 ora.",
    "description": "Una fiala comune nata nel buio profondo tra funghi luminosi e pietra umida."
  },
  {
    "id": "potion-underdark-elisir-del-cunicolo",
    "name": "Elisir del Cunicolo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "underdark",
    "rarity": "Comune",
    "price": "26 mo",
    "effectType": "sopravvivenza",
    "bonuses": [
      "scurovisione 18 m"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: scurovisione 18 m. Durata: 1 ora.",
    "description": "Una fiala comune nata nel buio profondo tra funghi luminosi e pietra umida."
  },
  {
    "id": "potion-underdark-tonico-della-fungo-stellato",
    "name": "Tonico della Fungo Stellato",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "underdark",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+1 a colpire"
    ],
    "penalties": [
      "sensibilità alla luce per 10 minuti"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +1 a colpire. Malus: sensibilità alla luce per 10 minuti. Durata: 10 minuti.",
    "description": "Una fiala non comune nata nel buio profondo tra funghi luminosi e pietra umida."
  },
  {
    "id": "potion-underdark-fiala-del-grotta",
    "name": "Fiala del Grotta",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "underdark",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "acido"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Resistenza: acido. Durata: 1 ora.",
    "description": "Una fiala non comune nata nel buio profondo tra funghi luminosi e pietra umida."
  },
  {
    "id": "potion-underdark-balsamo-del-occhio-cieco",
    "name": "Balsamo del Occhio Cieco",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "underdark",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "cura",
    "bonuses": [
      "recupera 2d4+2 PF"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "Istante",
    "mechanicalEffect": "Bonus: recupera 2d4+2 PF. Durata: Istante.",
    "description": "Una fiala non comune nata nel buio profondo tra funghi luminosi e pietra umida."
  },
  {
    "id": "potion-underdark-distillato-della-basalto",
    "name": "Distillato della Basalto",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "underdark",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+2 danni"
    ],
    "penalties": [
      "-1 INT"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +2 danni. Malus: -1 INT. Durata: 10 minuti.",
    "description": "Una fiala rara nata nel buio profondo tra funghi luminosi e pietra umida."
  },
  {
    "id": "potion-underdark-infuso-del-cunicolo",
    "name": "Infuso del Cunicolo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "underdark",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "difesa",
    "bonuses": [
      "+1 CA"
    ],
    "penalties": [],
    "resistances": [
      "veleno"
    ],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +1 CA. Resistenza: veleno. Durata: 10 minuti.",
    "description": "Una fiala rara nata nel buio profondo tra funghi luminosi e pietra umida."
  },
  {
    "id": "potion-underdark-essenza-della-fungo-stellato",
    "name": "Essenza della Fungo Stellato",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "underdark",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "esplorazione",
    "bonuses": [
      "+2 a Furtività al buio"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 a Furtività al buio. Durata: 1 ora.",
    "description": "Una fiala rara nata nel buio profondo tra funghi luminosi e pietra umida."
  },
  {
    "id": "potion-underdark-ampolla-del-grotta",
    "name": "Ampolla del Grotta",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "underdark",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "difesa",
    "bonuses": [
      "+2 CA"
    ],
    "penalties": [
      "velocità -3 m"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +2 CA. Malus: velocità -3 m. Durata: 10 minuti.",
    "description": "Una fiala molto rara nata nel buio profondo tra funghi luminosi e pietra umida."
  },
  {
    "id": "potion-underdark-siero-della-occhio-cieco",
    "name": "Siero della Occhio Cieco",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "underdark",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+5 a colpire",
      "+2 danni"
    ],
    "penalties": [
      "-3 INT"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +5 a colpire, +2 danni. Malus: -3 INT. Durata: 10 minuti.",
    "description": "Una fiala molto rara nata nel buio profondo tra funghi luminosi e pietra umida."
  },
  {
    "id": "potion-underdark-gocce-del-basalto",
    "name": "Gocce del Basalto",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "underdark",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "percezione",
    "bonuses": [
      "+2 a Percezione"
    ],
    "penalties": [
      "-1 CAR"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 a Percezione. Malus: -1 CAR. Durata: 1 ora.",
    "description": "Una fiala molto rara nata nel buio profondo tra funghi luminosi e pietra umida."
  },
  {
    "id": "potion-underdark-lacrima-della-cunicolo",
    "name": "Lacrima della Cunicolo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "underdark",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "veleno",
      "acido"
    ],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Resistenza: veleno, acido. Durata: 10 minuti.",
    "description": "Una fiala leggendaria nata nel buio profondo tra funghi luminosi e pietra umida."
  },
  {
    "id": "potion-underdark-ambrosia-del-fungo-stellato",
    "name": "Ambrosia del Fungo Stellato",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "underdark",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "potenziamento",
    "bonuses": [
      "+2 ai tiri salvezza"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 ai tiri salvezza. Durata: 1 ora.",
    "description": "Una fiala leggendaria nata nel buio profondo tra funghi luminosi e pietra umida."
  },
  {
    "id": "potion-underdark-sangue-della-grotta",
    "name": "Sangue della Grotta",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "underdark",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "furia",
    "bonuses": [
      "+3 danni"
    ],
    "penalties": [
      "svantaggio alle prove di Saggezza"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +3 danni. Malus: svantaggio alle prove di Saggezza. Durata: 10 minuti.",
    "description": "Una fiala leggendaria nata nel buio profondo tra funghi luminosi e pietra umida."
  },
  {
    "id": "potion-underdark-olio-del-occhio-cieco",
    "name": "Olio del Occhio Cieco",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "underdark",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "protezione",
    "bonuses": [
      "+1 CA"
    ],
    "penalties": [],
    "resistances": [
      "veleno"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +1 CA. Resistenza: veleno. Durata: 1 ora.",
    "description": "Una fiala rara nata nel buio profondo tra funghi luminosi e pietra umida."
  },
  {
    "id": "potion-underdark-filtro-della-basalto",
    "name": "Filtro della Basalto",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "underdark",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "utilità",
    "bonuses": [
      "non si perde nei cunicoli"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: non si perde nei cunicoli. Durata: 1 ora.",
    "description": "Una fiala non comune nata nel buio profondo tra funghi luminosi e pietra umida."
  },
  {
    "id": "potion-ruins-pozione-della-sigillo",
    "name": "Pozione della Sigillo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "ruins",
    "rarity": "Comune",
    "price": "26 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "forza"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Resistenza: forza. Durata: 1 ora.",
    "description": "Una fiala comune coperta di polvere antica, glifi spezzati e memoria perduta."
  },
  {
    "id": "potion-ruins-elisir-del-colonna",
    "name": "Elisir del Colonna",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "ruins",
    "rarity": "Comune",
    "price": "26 mo",
    "effectType": "sopravvivenza",
    "bonuses": [
      "+2 TS contro magia"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 TS contro magia. Durata: 1 ora.",
    "description": "Una fiala comune coperta di polvere antica, glifi spezzati e memoria perduta."
  },
  {
    "id": "potion-ruins-tonico-della-scavo",
    "name": "Tonico della Scavo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "ruins",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+1 a colpire"
    ],
    "penalties": [
      "-1 DES"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +1 a colpire. Malus: -1 DES. Durata: 10 minuti.",
    "description": "Una fiala non comune coperta di polvere antica, glifi spezzati e memoria perduta."
  },
  {
    "id": "potion-ruins-fiala-del-tempio-rotto",
    "name": "Fiala del Tempio Rotto",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "ruins",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "necrotico"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Resistenza: necrotico. Durata: 1 ora.",
    "description": "Una fiala non comune coperta di polvere antica, glifi spezzati e memoria perduta."
  },
  {
    "id": "potion-ruins-balsamo-del-runa",
    "name": "Balsamo del Runa",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "ruins",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "cura",
    "bonuses": [
      "recupera 2d4+2 PF"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "Istante",
    "mechanicalEffect": "Bonus: recupera 2d4+2 PF. Durata: Istante.",
    "description": "Una fiala non comune coperta di polvere antica, glifi spezzati e memoria perduta."
  },
  {
    "id": "potion-ruins-distillato-della-sigillo",
    "name": "Distillato della Sigillo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "ruins",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+2 danni"
    ],
    "penalties": [
      "-1 INT"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +2 danni. Malus: -1 INT. Durata: 10 minuti.",
    "description": "Una fiala rara coperta di polvere antica, glifi spezzati e memoria perduta."
  },
  {
    "id": "potion-ruins-infuso-del-colonna",
    "name": "Infuso del Colonna",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "ruins",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "difesa",
    "bonuses": [
      "+1 CA"
    ],
    "penalties": [],
    "resistances": [
      "forza"
    ],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +1 CA. Resistenza: forza. Durata: 10 minuti.",
    "description": "Una fiala rara coperta di polvere antica, glifi spezzati e memoria perduta."
  },
  {
    "id": "potion-ruins-essenza-della-scavo",
    "name": "Essenza della Scavo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "ruins",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "esplorazione",
    "bonuses": [
      "legge rune antiche comuni"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: legge rune antiche comuni. Durata: 1 ora.",
    "description": "Una fiala rara coperta di polvere antica, glifi spezzati e memoria perduta."
  },
  {
    "id": "potion-ruins-ampolla-del-tempio-rotto",
    "name": "Ampolla del Tempio Rotto",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "ruins",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "difesa",
    "bonuses": [
      "+2 CA"
    ],
    "penalties": [
      "velocità -3 m"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +2 CA. Malus: velocità -3 m. Durata: 10 minuti.",
    "description": "Una fiala molto rara coperta di polvere antica, glifi spezzati e memoria perduta."
  },
  {
    "id": "potion-ruins-siero-della-runa",
    "name": "Siero della Runa",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "ruins",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+5 a colpire",
      "+2 danni"
    ],
    "penalties": [
      "-3 INT"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +5 a colpire, +2 danni. Malus: -3 INT. Durata: 10 minuti.",
    "description": "Una fiala molto rara coperta di polvere antica, glifi spezzati e memoria perduta."
  },
  {
    "id": "potion-ruins-gocce-del-sigillo",
    "name": "Gocce del Sigillo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "ruins",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "percezione",
    "bonuses": [
      "+2 a Percezione"
    ],
    "penalties": [
      "-1 CAR"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 a Percezione. Malus: -1 CAR. Durata: 1 ora.",
    "description": "Una fiala molto rara coperta di polvere antica, glifi spezzati e memoria perduta."
  },
  {
    "id": "potion-ruins-lacrima-della-colonna",
    "name": "Lacrima della Colonna",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "ruins",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "forza",
      "necrotico"
    ],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Resistenza: forza, necrotico. Durata: 10 minuti.",
    "description": "Una fiala leggendaria coperta di polvere antica, glifi spezzati e memoria perduta."
  },
  {
    "id": "potion-ruins-ambrosia-del-scavo",
    "name": "Ambrosia del Scavo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "ruins",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "potenziamento",
    "bonuses": [
      "+2 ai tiri salvezza"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 ai tiri salvezza. Durata: 1 ora.",
    "description": "Una fiala leggendaria coperta di polvere antica, glifi spezzati e memoria perduta."
  },
  {
    "id": "potion-ruins-sangue-della-tempio-rotto",
    "name": "Sangue della Tempio Rotto",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "ruins",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "furia",
    "bonuses": [
      "+3 danni"
    ],
    "penalties": [
      "svantaggio alle prove di Saggezza"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +3 danni. Malus: svantaggio alle prove di Saggezza. Durata: 10 minuti.",
    "description": "Una fiala leggendaria coperta di polvere antica, glifi spezzati e memoria perduta."
  },
  {
    "id": "potion-ruins-olio-del-runa",
    "name": "Olio del Runa",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "ruins",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "protezione",
    "bonuses": [
      "+1 CA"
    ],
    "penalties": [],
    "resistances": [
      "forza"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +1 CA. Resistenza: forza. Durata: 1 ora.",
    "description": "Una fiala rara coperta di polvere antica, glifi spezzati e memoria perduta."
  },
  {
    "id": "potion-ruins-filtro-della-sigillo",
    "name": "Filtro della Sigillo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "ruins",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "utilità",
    "bonuses": [
      "+1 CA contro trappole"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +1 CA contro trappole. Durata: 1 ora.",
    "description": "Una fiala non comune coperta di polvere antica, glifi spezzati e memoria perduta."
  },
  {
    "id": "potion-arctic-pozione-della-brina",
    "name": "Pozione della Brina",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "arctic",
    "rarity": "Comune",
    "price": "26 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "freddo"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Resistenza: freddo. Durata: 1 ora.",
    "description": "Una fiala comune fredda al tatto e attraversata da riflessi d’aurora."
  },
  {
    "id": "potion-arctic-elisir-del-nord",
    "name": "Elisir del Nord",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "arctic",
    "rarity": "Comune",
    "price": "26 mo",
    "effectType": "sopravvivenza",
    "bonuses": [
      "ignora freddo estremo"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: ignora freddo estremo. Durata: 1 ora.",
    "description": "Una fiala comune fredda al tatto e attraversata da riflessi d’aurora."
  },
  {
    "id": "potion-arctic-tonico-della-vento-polare",
    "name": "Tonico della Vento Polare",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "arctic",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+1 a colpire"
    ],
    "penalties": [
      "vulnerabilità lieve al fuoco narrativo"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +1 a colpire. Malus: vulnerabilità lieve al fuoco narrativo. Durata: 10 minuti.",
    "description": "Una fiala non comune fredda al tatto e attraversata da riflessi d’aurora."
  },
  {
    "id": "potion-arctic-fiala-del-ghiaccio",
    "name": "Fiala del Ghiaccio",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "arctic",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "necrotico"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Resistenza: necrotico. Durata: 1 ora.",
    "description": "Una fiala non comune fredda al tatto e attraversata da riflessi d’aurora."
  },
  {
    "id": "potion-arctic-balsamo-del-aurora",
    "name": "Balsamo del Aurora",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "arctic",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "cura",
    "bonuses": [
      "recupera 2d4+2 PF"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "Istante",
    "mechanicalEffect": "Bonus: recupera 2d4+2 PF. Durata: Istante.",
    "description": "Una fiala non comune fredda al tatto e attraversata da riflessi d’aurora."
  },
  {
    "id": "potion-arctic-distillato-della-brina",
    "name": "Distillato della Brina",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "arctic",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+2 danni"
    ],
    "penalties": [
      "-1 INT"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +2 danni. Malus: -1 INT. Durata: 10 minuti.",
    "description": "Una fiala rara fredda al tatto e attraversata da riflessi d’aurora."
  },
  {
    "id": "potion-arctic-infuso-del-nord",
    "name": "Infuso del Nord",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "arctic",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "difesa",
    "bonuses": [
      "+1 CA"
    ],
    "penalties": [],
    "resistances": [
      "freddo"
    ],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +1 CA. Resistenza: freddo. Durata: 10 minuti.",
    "description": "Una fiala rara fredda al tatto e attraversata da riflessi d’aurora."
  },
  {
    "id": "potion-arctic-essenza-della-vento-polare",
    "name": "Essenza della Vento Polare",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "arctic",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "esplorazione",
    "bonuses": [
      "+2 a Sopravvivenza artica"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 a Sopravvivenza artica. Durata: 1 ora.",
    "description": "Una fiala rara fredda al tatto e attraversata da riflessi d’aurora."
  },
  {
    "id": "potion-arctic-ampolla-del-ghiaccio",
    "name": "Ampolla del Ghiaccio",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "arctic",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "difesa",
    "bonuses": [
      "+2 CA"
    ],
    "penalties": [
      "velocità -3 m"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +2 CA. Malus: velocità -3 m. Durata: 10 minuti.",
    "description": "Una fiala molto rara fredda al tatto e attraversata da riflessi d’aurora."
  },
  {
    "id": "potion-arctic-siero-della-aurora",
    "name": "Siero della Aurora",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "arctic",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+5 a colpire",
      "+2 danni"
    ],
    "penalties": [
      "-3 INT"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +5 a colpire, +2 danni. Malus: -3 INT. Durata: 10 minuti.",
    "description": "Una fiala molto rara fredda al tatto e attraversata da riflessi d’aurora."
  },
  {
    "id": "potion-arctic-gocce-del-brina",
    "name": "Gocce del Brina",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "arctic",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "percezione",
    "bonuses": [
      "+2 a Percezione"
    ],
    "penalties": [
      "-1 CAR"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 a Percezione. Malus: -1 CAR. Durata: 1 ora.",
    "description": "Una fiala molto rara fredda al tatto e attraversata da riflessi d’aurora."
  },
  {
    "id": "potion-arctic-lacrima-della-nord",
    "name": "Lacrima della Nord",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "arctic",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "freddo",
      "necrotico"
    ],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Resistenza: freddo, necrotico. Durata: 10 minuti.",
    "description": "Una fiala leggendaria fredda al tatto e attraversata da riflessi d’aurora."
  },
  {
    "id": "potion-arctic-ambrosia-del-vento-polare",
    "name": "Ambrosia del Vento Polare",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "arctic",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "potenziamento",
    "bonuses": [
      "+2 ai tiri salvezza"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 ai tiri salvezza. Durata: 1 ora.",
    "description": "Una fiala leggendaria fredda al tatto e attraversata da riflessi d’aurora."
  },
  {
    "id": "potion-arctic-sangue-della-ghiaccio",
    "name": "Sangue della Ghiaccio",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "arctic",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "furia",
    "bonuses": [
      "+3 danni"
    ],
    "penalties": [
      "svantaggio alle prove di Saggezza"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +3 danni. Malus: svantaggio alle prove di Saggezza. Durata: 10 minuti.",
    "description": "Una fiala leggendaria fredda al tatto e attraversata da riflessi d’aurora."
  },
  {
    "id": "potion-arctic-olio-del-aurora",
    "name": "Olio del Aurora",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "arctic",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "protezione",
    "bonuses": [
      "+1 CA"
    ],
    "penalties": [],
    "resistances": [
      "freddo"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +1 CA. Resistenza: freddo. Durata: 1 ora.",
    "description": "Una fiala rara fredda al tatto e attraversata da riflessi d’aurora."
  },
  {
    "id": "potion-arctic-filtro-della-brina",
    "name": "Filtro della Brina",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "arctic",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "utilità",
    "bonuses": [
      "cammina su ghiaccio senza scivolare"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: cammina su ghiaccio senza scivolare. Durata: 1 ora.",
    "description": "Una fiala non comune fredda al tatto e attraversata da riflessi d’aurora."
  },
  {
    "id": "potion-swamp-pozione-della-miasma",
    "name": "Pozione della Miasma",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "swamp",
    "rarity": "Comune",
    "price": "26 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "veleno"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Resistenza: veleno. Durata: 1 ora.",
    "description": "Una fiala comune densa, verdastra e impregnata di torba e acque ferme."
  },
  {
    "id": "potion-swamp-elisir-del-torba",
    "name": "Elisir del Torba",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "swamp",
    "rarity": "Comune",
    "price": "26 mo",
    "effectType": "sopravvivenza",
    "bonuses": [
      "vantaggio contro veleno"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: vantaggio contro veleno. Durata: 1 ora.",
    "description": "Una fiala comune densa, verdastra e impregnata di torba e acque ferme."
  },
  {
    "id": "potion-swamp-tonico-della-canneto",
    "name": "Tonico della Canneto",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "swamp",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+1 a colpire"
    ],
    "penalties": [
      "-1 DES"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +1 a colpire. Malus: -1 DES. Durata: 10 minuti.",
    "description": "Una fiala non comune densa, verdastra e impregnata di torba e acque ferme."
  },
  {
    "id": "potion-swamp-fiala-del-rospo",
    "name": "Fiala del Rospo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "swamp",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "necrotico"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Resistenza: necrotico. Durata: 1 ora.",
    "description": "Una fiala non comune densa, verdastra e impregnata di torba e acque ferme."
  },
  {
    "id": "potion-swamp-balsamo-del-acqua-morta",
    "name": "Balsamo del Acqua Morta",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "swamp",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "cura",
    "bonuses": [
      "recupera 2d4+2 PF"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "Istante",
    "mechanicalEffect": "Bonus: recupera 2d4+2 PF. Durata: Istante.",
    "description": "Una fiala non comune densa, verdastra e impregnata di torba e acque ferme."
  },
  {
    "id": "potion-swamp-distillato-della-miasma",
    "name": "Distillato della Miasma",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "swamp",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+2 danni"
    ],
    "penalties": [
      "-1 INT"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +2 danni. Malus: -1 INT. Durata: 10 minuti.",
    "description": "Una fiala rara densa, verdastra e impregnata di torba e acque ferme."
  },
  {
    "id": "potion-swamp-infuso-del-torba",
    "name": "Infuso del Torba",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "swamp",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "difesa",
    "bonuses": [
      "+1 CA"
    ],
    "penalties": [],
    "resistances": [
      "veleno"
    ],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +1 CA. Resistenza: veleno. Durata: 10 minuti.",
    "description": "Una fiala rara densa, verdastra e impregnata di torba e acque ferme."
  },
  {
    "id": "potion-swamp-essenza-della-canneto",
    "name": "Essenza della Canneto",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "swamp",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "esplorazione",
    "bonuses": [
      "+2 a Natura in palude"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 a Natura in palude. Durata: 1 ora.",
    "description": "Una fiala rara densa, verdastra e impregnata di torba e acque ferme."
  },
  {
    "id": "potion-swamp-ampolla-del-rospo",
    "name": "Ampolla del Rospo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "swamp",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "difesa",
    "bonuses": [
      "+2 CA"
    ],
    "penalties": [
      "velocità -3 m"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +2 CA. Malus: velocità -3 m. Durata: 10 minuti.",
    "description": "Una fiala molto rara densa, verdastra e impregnata di torba e acque ferme."
  },
  {
    "id": "potion-swamp-siero-della-acqua-morta",
    "name": "Siero della Acqua Morta",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "swamp",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+5 a colpire",
      "+2 danni"
    ],
    "penalties": [
      "-3 INT"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +5 a colpire, +2 danni. Malus: -3 INT. Durata: 10 minuti.",
    "description": "Una fiala molto rara densa, verdastra e impregnata di torba e acque ferme."
  },
  {
    "id": "potion-swamp-gocce-del-miasma",
    "name": "Gocce del Miasma",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "swamp",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "percezione",
    "bonuses": [
      "+2 a Percezione"
    ],
    "penalties": [
      "-1 CAR"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 a Percezione. Malus: -1 CAR. Durata: 1 ora.",
    "description": "Una fiala molto rara densa, verdastra e impregnata di torba e acque ferme."
  },
  {
    "id": "potion-swamp-lacrima-della-torba",
    "name": "Lacrima della Torba",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "swamp",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "resistenza",
    "bonuses": [],
    "penalties": [],
    "resistances": [
      "veleno",
      "necrotico"
    ],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Resistenza: veleno, necrotico. Durata: 10 minuti.",
    "description": "Una fiala leggendaria densa, verdastra e impregnata di torba e acque ferme."
  },
  {
    "id": "potion-swamp-ambrosia-del-canneto",
    "name": "Ambrosia del Canneto",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "swamp",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "potenziamento",
    "bonuses": [
      "+2 ai tiri salvezza"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +2 ai tiri salvezza. Durata: 1 ora.",
    "description": "Una fiala leggendaria densa, verdastra e impregnata di torba e acque ferme."
  },
  {
    "id": "potion-swamp-sangue-della-rospo",
    "name": "Sangue della Rospo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "swamp",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "furia",
    "bonuses": [
      "+3 danni"
    ],
    "penalties": [
      "svantaggio alle prove di Saggezza"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Bonus: +3 danni. Malus: svantaggio alle prove di Saggezza. Durata: 10 minuti.",
    "description": "Una fiala leggendaria densa, verdastra e impregnata di torba e acque ferme."
  },
  {
    "id": "potion-swamp-olio-del-acqua-morta",
    "name": "Olio del Acqua Morta",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "swamp",
    "rarity": "Rara",
    "price": "675 mo",
    "effectType": "protezione",
    "bonuses": [
      "+1 CA"
    ],
    "penalties": [],
    "resistances": [
      "veleno"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: +1 CA. Resistenza: veleno. Durata: 1 ora.",
    "description": "Una fiala rara densa, verdastra e impregnata di torba e acque ferme."
  },
  {
    "id": "potion-swamp-filtro-della-miasma",
    "name": "Filtro della Miasma",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "swamp",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "utilità",
    "bonuses": [
      "respira miasmi senza tossire"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Bonus: respira miasmi senza tossire. Durata: 1 ora.",
    "description": "Una fiala non comune densa, verdastra e impregnata di torba e acque ferme."
  },
  {
    "id": "potion-generic-extra-ira-mercante",
    "name": "Pozione dell’Ira del Mercante",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "generic",
    "rarity": "Rara",
    "price": "900 mo",
    "effectType": "combattimento",
    "bonuses": [
      "+5 a colpire",
      "+2 danni"
    ],
    "penalties": [
      "-3 INT"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "+5 a colpire e +2 danni per 10 minuti. -3 INT per la durata.",
    "description": "Un distillato rosso vivo venduto solo a chi sa pagarne le conseguenze."
  },
  {
    "id": "potion-generic-extra-pelle-pietra",
    "name": "Pozione della Pelle di Pietra",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "generic",
    "rarity": "Rara",
    "price": "900 mo",
    "effectType": "difesa",
    "bonuses": [
      "+2 CA"
    ],
    "penalties": [
      "velocità -3 m"
    ],
    "resistances": [
      "contundente"
    ],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "+2 CA e resistenza a contundente per 10 minuti. Velocità -3 m.",
    "description": "Una fiala grigia e densa come malta liquida."
  },
  {
    "id": "potion-generic-extra-fiamma-chiara",
    "name": "Pozione della Fiamma Chiara",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "generic",
    "rarity": "Non Comune",
    "price": "135 mo",
    "effectType": "resistenza",
    "bonuses": [
      "+1 danni da fuoco"
    ],
    "penalties": [],
    "resistances": [
      "fuoco"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Resistenza al fuoco per 1 ora. +1 danni da fuoco in mischia.",
    "description": "Una fiala ambrata con una scintilla sospesa al centro."
  },
  {
    "id": "potion-generic-extra-mente-lucida",
    "name": "Elisir della Mente Lucida",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "generic",
    "rarity": "Rara",
    "price": "900 mo",
    "effectType": "mentale",
    "bonuses": [
      "+2 INT",
      "+2 ai TS contro charme"
    ],
    "penalties": [
      "-1 FOR"
    ],
    "resistances": [
      "psichico"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "+2 INT e resistenza a psichico per 1 ora. -1 FOR per la durata.",
    "description": "Liquido azzurro che lascia la lingua fredda e i pensieri ordinati."
  },
  {
    "id": "potion-generic-extra-sangue-rapido",
    "name": "Fiala del Sangue Rapido",
    "category": "Pozioni",
    "type": "movimento",
    "biome": "generic",
    "rarity": "Non Comune",
    "price": "135 mo",
    "bonuses": [
      "velocità +3 m",
      "+1 iniziativa"
    ],
    "penalties": [
      "-1 SAG"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Velocità +3 m e +1 iniziativa per 10 minuti. -1 SAG.",
    "description": "Un liquido scarlatto che vibra appena viene agitato."
  },
  {
    "id": "potion-generic-extra-ombra-breve",
    "name": "Fiala dell’Ombra Breve",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "generic",
    "rarity": "Molto rara",
    "price": "3375 mo",
    "effectType": "furtività",
    "bonuses": [
      "vantaggio a Furtività"
    ],
    "penalties": [
      "-2 Percezione"
    ],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Vantaggio a Furtività per 10 minuti. -2 Percezione.",
    "description": "Sembra assorbire la luce attorno al vetro."
  },
  {
    "id": "potion-generic-extra-salto-lungo",
    "name": "Tonico del Salto Lungo",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "generic",
    "rarity": "Comune",
    "price": "26 mo",
    "effectType": "movimento",
    "bonuses": [
      "salto triplicato"
    ],
    "penalties": [],
    "resistances": [],
    "immunities": [],
    "duration": "10 minuti",
    "mechanicalEffect": "Distanza di salto triplicata per 10 minuti.",
    "description": "Odora di erbe amare e cuoio bagnato."
  },
  {
    "id": "potion-generic-extra-fenice-minore",
    "name": "Goccia della Fenice Minore",
    "category": "Pozioni",
    "type": "Pozione",
    "biome": "generic",
    "rarity": "Leggendaria",
    "price": "21000 mo",
    "effectType": "rinascita",
    "bonuses": [
      "se scendi a 0 PF torni a 1 PF"
    ],
    "penalties": [
      "un livello di indebolimento narrativo"
    ],
    "resistances": [
      "fuoco"
    ],
    "immunities": [],
    "duration": "1 ora",
    "mechanicalEffect": "Per 1 ora, la prima volta che scendi a 0 PF torni a 1 PF. Resistenza al fuoco.",
    "description": "Una goccia dorata che pulsa come un cuore minuscolo."
  }
];
