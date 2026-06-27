import {
  innkeeperLooks,
  dishBonuses,
  dishMaluses,
} from "../data/generationPools/tavernPools";

import { tavernServices } from "../data/tavernData";
import { getMerchantRegionById } from "../data/merchantRegions";
import {
  getRegionalTavernDishes,
  getRegionalTavernSideQuests,
} from "../data/tavernRegionalContent";
import {
  buildRegionalInnkeeperNarrative,
  buildRegionalTavernNarrative,
} from "../data/regionalNarrativeContent";
import {
  normalizePrestige,
  pickPrestigeByLevel,
} from "../data/prestige";
import { normalizeUniqueName, pickUnique } from "../utils/uniqueNamePicker";

import {
  getDishPriceByLevel,
  getDishTierByLevel,
  getRoomPriceByTier,
  getRoomTierByLevel,
  randomNumber,
} from "../data/pricingRules";

const races = [
  "Umano",
  "Nano",
  "Elfo",
  "Mezzelfo",
  "Halfling",
  "Tiefling",
  "Dragonide",
  "Gnomo",
  "Mezzorco",
  "Tabaxi",
];

const names = [
  "Borin",
  "Mira",
  "Doran",
  "Seraphina",
  "Rurik",
  "Nym",
  "Kael",
  "Eldrin",
  "Vex",
  "Maela",
  "Torgar",
  "Iria",
  "Branna",
  "Odrik",
  "Silas",
  "Varyn",
  "Lysa",
  "Garruk",
  "Mirel",
  "Aldren",
  "Kessa",
  "Nerim",
  "Talia",
  "Orven",
  "Sibyl",
  "Morthan",
  "Elira",
  "Grenda",
  "Korin",
  "Ysolde",
  "Pavel",
  "Dagna",
  "Ravik",
  "Sera",
  "Tamsin",
  "Nolric",
  "Velia",
  "Arvik",
  "Maven",
  "Torren",
  "Calira",
  "Osric",
  "Fenra",
  "Jorund",
  "Nelia",
  "Branik",
  "Evara",
];

const extraInnkeeperNames = [
  "Alric",
  "Brenna",
  "Corvin",
  "Dalia",
  "Eldra",
  "Falko",
  "Gavren",
  "Helia",
  "Iskan",
  "Jessa",
  "Kaldor",
  "Liorra",
  "Mavrek",
  "Nalia",
  "Ossian",
  "Perin",
  "Quessa",
  "Rhonel",
  "Sarena",
  "Tovin",
  "Ulmar",
  "Vandis",
  "Wenna",
  "Xavian",
  "Ydris",
  "Zorren",
  "Marella",
  "Durnik",
  "Felra",
  "Osvan",
  "Selka",
  "Brond",
  "Elyra",
  "Tavik",
  "Nerra",
  "Valcor",
];

const innkeeperNamePool = [...names, ...extraInnkeeperNames];

const innkeeperEpithets = [
  "il Paziente",
  "della Soglia",
  "Boccalesto",
  "del Focolare",
  "Manocalda",
  "di Porto Vecchio",
  "della Chiave",
  "Scodellaforte",
  "del Camino Basso",
  "Vinoscuro",
];

const generatedTavernNames = [
  "La Lanterna Bassa",
  "Il Cervo Argentato",
  "Il Gallo e la Bruma",
  "La Rosa del Porto",
  "Il Mantello Verde",
  "La Chiave di Rame",
  "L'Orso Addormentato",
  "Il Ponte Spezzato",
  "La Luna nel Boccale",
  "Il Viandante Stanco",
  "L'Ancora del Molo",
  "La Campana del Porto",
  "Il Boccale del Passo",
  "La Soglia del Bosco",
  "L'Orso del Focolare",
  "Il Drappo Cremisi",
  "La Stella del Viandante",
  "Il Ramo Verde",
  "La Porta della Brina",
  "Il Focolare del Villaggio",
  "La Rosa delle Dune",
  "L'Ombra del Pozzo",
  "Il Ponte dei Pellegrini",
  "La Chiave del Cortile",
  "Il Mantello del Mercante",
  "La Luna del Guado",
  "L'Ultimo Bicchiere",
  "Il Boccale Stanco",
  "La Taverna del Sale Nero",
  "Il Camino del Minatore",
  "La Bruma del Cacciatore",
  "L'Insegna del Corvo",
  "Il Gallo Dorato",
  "La Locanda della Soglia",
  "Il Rifugio delle Guide",
  "La Casa del Ponte Basso",
  "L'Osteria delle Tre Chiavi",
  "Il Fienile Caldo",
  "La Stanza del Cartografo",
  "Il Tavolo del Porto Vecchio",
  "La Brocca della Frontiera",
  "L'Arpa del Vicolo",
  "Il Sale e la Candela",
  "La Nave Senza Vela",
  "Il Letto del Valico",
  "La Tana del Boccale",
  "L'Oca del Mercato",
  "Il Cigno della Piazza",
  "La Locanda dei Chiodi Rossi",
  "Il Riposo del Pellegrino",
  "La Mensa della Palafitta",
  "L'Albero e il Ferro",
  "Il Fuoco della Ronda",
  "La Volpe del Sentiero",
  "Il Mulo della Carovana",
  "La Tazza del Notaio",
  "L'Osteria del Campanile",
  "Il Granaio delle Lanterne",
  "La Pietra e il Pane",
  "Il Rifugio del Vento",
  "La Sedia del Capitano",
  "L'Angolo dei Canti",
  "Il Bicchiere del Doganiere",
  "La Locanda della Porta Nord",
  "Il Calderone del Guado",
  "La Botte del Quartiere Alto",
  "L'Ospizio delle Colonne",
  "Il Pane della Brina",
  "La Sala del Fungo Pallido",
  "Il Focolare dei Cunicoli",
  "La Tenda del Miraggio",
  "L'Osteria del Cammelliere",
  "Il Cervo del Sottobosco",
  "La Quercia del Riposo",
  "Il Bivacco del Pioniere",
  "La Palizzata e il Boccale",
  "L'Approdo delle Tre Corde",
  "Il Rifugio del Fanale",
  "La Casa delle Mappe Bagnate",
  "Il Camino di Pietra Nera",
  "La Locanda dei Ramponi",
  "L'Ultima Sedia Calda",
  "Il Boccale della Strada Bassa",
  "La Soglia dei Viaggiatori",
  "L'Osteria delle Coperte Pulite",
  "Il Tavolo dei Debiti Buoni",
  "La Locanda del Vino Scuro",
  "Il Cortile del Mercante",
  "La Scala del Vecchio Ponte",
  "L'Insegna del Focolare",
  "Il Riparo della Campana",
  "La Taverna del Silenzio Breve",
];

const personalities = [
  "cordiale ma furbo",
  "burbero ma protettivo",
  "elegante e calcolatore",
  "rumoroso e sempre sorridente",
  "silenzioso e sospettoso",
  "materno ma severo",
  "gentile solo con chi paga in anticipo",
  "allegro in pubblico ma cupo quando resta solo",
  "raffinato nei modi e spietato negli affari",
];

// eslint-disable-next-line no-unused-vars
const sideQuests = [
  {
    quest:
      "Un cliente abituale è sparito dopo aver preso una stanza al secondo piano.",
    reward:
      "Alloggio gratuito per tre notti e informazioni su una figura sospetta.",
  },
  {
    quest:
      "Una banda locale pretende denaro dalla locanda ogni settimana.",
    reward:
      "Sconto permanente sui servizi e accesso a una stanza privata.",
  },
  {
    quest:
      "Nel seminterrato si sentono rumori durante la notte, ma nessuno osa scendere.",
    reward: "Una chiave antica trovata sotto il bancone e 50 mo.",
  },
  {
    quest:
      "Un ospite incappucciato ha lasciato una borsa sigillata chiedendo di non aprirla fino all’alba.",
    reward: "Una pozione rara e il favore del locandiere.",
  },
  {
    quest:
      "Qualcuno sta avvelenando lentamente le botti migliori della cantina.",
    reward: "Vitto gratuito per una settimana e 75 mo.",
  },
];

// eslint-disable-next-line no-unused-vars
const roomDescriptions = [
  "Minimalista e pulita, perfetta per chi vuole solo dormire in pace.",
  "Camera con scrivania, scaffale e un candeliere a tre braccia.",
  "Camera accogliente con un piccolo camino, coperte calde e un tappeto di pelle.",
  "Descrizione legacy non usata dalla nuova generazione regionale.",
  "Stanza spaziosa con letto a baldacchino e una vasca per lavarsi.",
  "Camera ordinata, con baule ai piedi del letto e una brocca d’acqua fresca.",
  "Stanza profumata di cera, legno antico e lavanda secca.",
  "Una piccola stanza calda, con travi scure e una finestra sulla strada.",
];

// eslint-disable-next-line no-unused-vars
const roomNamesByTier = {
  Squallida: ["Pagliericcio", "Stanza Umida", "Branda Comune"],
  Povera: ["Stanza Comune", "Stanza Stretta", "Branda del Viandante"],
  Modesta: ["Stanza Singola", "Stanza Doppia", "Camera del Viandante"],
  Confortevole: ["Camera Privata", "Stanza Doppia", "Camera con Camino"],
  Ricca: ["Suite del Mercante", "Camera Padronale", "Appartamento Riservato"],
  Aristocratica: [
    "Suite Aristocratica",
    "Appartamento Privato",
    "Camera del Conte",
  ],
};

const defaultRoomProfile = {
  descriptionsByTier: {
    Squallida: [
      "Una branda semplice dietro una tenda pesante, con spazio appena sufficiente per zaino e stivali.",
      "Paglia asciutta, coperta ruvida e un gancio alla parete: poco comfort, ma riparo sicuro per la notte.",
    ],
    Povera: [
      "Stanza stretta ma chiusa da una porta solida, con catino, candela corta e coperta pulita.",
      "Letto basso, assi robuste e una finestra alta schermata da tela grezza.",
    ],
    Modesta: [
      "Camera ordinata con letto stabile, brocca d'acqua, sgabello e piccola mensola per l'equipaggiamento.",
      "Pareti calde di legno scuro, coperta pesante e una lanterna controllata dal locandiere.",
    ],
    Confortevole: [
      "Letto ampio, baule con serratura, tappeto spesso e braciere mantenuto acceso fino a sera.",
      "Camera silenziosa con lenzuola morbide, tavolino da scrittura e acqua calda su richiesta.",
    ],
    Ricca: [
      "Suite privata con letto grande, paravento, vasca portatile e servitore disponibile al piano.",
      "Stanza elegante con arredi lucidati, tende pesanti e chiave numerata in ottone.",
    ],
    Aristocratica: [
      "Appartamento riservato con anticamera, letto a baldacchino, biancheria fine e guardia discreta nel corridoio.",
      "Camera lussuosa con servizio privato, vino in caraffa e finestre schermate per proteggere la privacy.",
    ],
    Speciale: [
      "Alloggio raro custodito da sigilli discreti, con dettagli rituali e comodita pensate per ospiti importanti.",
      "Suite preparata solo su richiesta, con letto cerimoniale, servizio dedicato e un piccolo privilegio locale.",
    ],
  },
};

const regionalRoomProfiles = {
  generic: {
    namesByTier: {
      Squallida: ["Pagliericcio della Sala Comune", "Branda della Soglia"],
      Povera: ["Stanza del Viandante", "Camera Stretta"],
      Modesta: ["Camera Pulita", "Stanza della Candela"],
      Confortevole: ["Camera del Focolare", "Stanza con Baule"],
      Ricca: ["Suite del Mercante", "Camera Padronale"],
      Aristocratica: ["Appartamento Alto", "Suite della Chiave Dorata"],
      Speciale: ["Camera del Giuramento", "Suite del Sigillo"],
    },
    descriptionsByTier: {
      Squallida: [
        "Una branda semplice dietro una tenda pesante, con spazio appena sufficiente per zaino e stivali.",
        "Paglia asciutta, coperta ruvida e un gancio alla parete: poco comfort, ma riparo sicuro per la notte.",
      ],
      Povera: [
        "Stanza stretta ma chiusa da una porta solida, con catino, candela corta e coperta pulita.",
        "Letto basso, assi robuste e una finestra alta schermata da tela grezza.",
      ],
      Modesta: [
        "Camera ordinata con letto stabile, brocca d'acqua, sgabello e piccola mensola per l'equipaggiamento.",
        "Pareti calde di legno scuro, coperta pesante e una lanterna controllata dal locandiere.",
      ],
      Confortevole: [
        "Letto ampio, baule con serratura, tappeto spesso e braciere mantenuto acceso fino a sera.",
        "Camera silenziosa con lenzuola morbide, tavolino da scrittura e acqua calda su richiesta.",
      ],
      Ricca: [
        "Suite privata con letto grande, paravento, vasca portatile e servitore disponibile al piano.",
        "Stanza elegante con arredi lucidati, tende pesanti e chiave numerata in ottone.",
      ],
      Aristocratica: [
        "Appartamento riservato con anticamera, letto a baldacchino, biancheria fine e guardia discreta nel corridoio.",
        "Camera lussuosa con servizio privato, vino in caraffa e finestre schermate per proteggere la privacy.",
      ],
      Speciale: [
        "Alloggio raro custodito da sigilli discreti, con dettagli rituali e comodita pensate per ospiti importanti.",
        "Suite preparata solo su richiesta, con letto cerimoniale, servizio dedicato e un piccolo privilegio locale.",
      ],
    },
  },
  desert: {
    namesByTier: {
      Squallida: ["Stuoia della Carovana", "Tenda del Pozzo"],
      Povera: ["Cella d'Ombra", "Branda dell'Otre"],
      Modesta: ["Camera del Cortile Fresco", "Stanza delle Anfore"],
      Confortevole: ["Camera dei Tappeti", "Tenda del Mercante"],
      Ricca: ["Suite delle Dune Rosse", "Camera del Miraggio"],
      Aristocratica: ["Padiglione dell'Oasi", "Suite della Carovana Dorata"],
      Speciale: ["Padiglione delle Stelle Secche", "Camera del Vento Quieto"],
    },
    descriptionsByTier: {
      Squallida: ["Stuoia pulita sotto un telo spesso, con poca ombra e un otre condiviso sorvegliato dal personale."],
      Povera: ["Stanza piccola con pareti imbiancate, brocca sigillata e tenda pesante contro la sabbia."],
      Modesta: ["Camera affacciata su un cortile ombreggiato, con anfore d'acqua, cuscini bassi e tappeti battuti."],
      Confortevole: ["Alloggio fresco con tappeti doppi, catino d'acqua riservato e braciere spento carico di incenso."],
      Ricca: ["Suite privata con vasca di rame, tappeti spessi e servitore incaricato di tenere lontana la sabbia."],
      Aristocratica: ["Padiglione interno con giardino d'ombra, acqua profumata e guardia notturna pagata dalla locanda."],
      Speciale: ["Padiglione silenzioso dove il vento non entra, custodito da lampade azzurre e mappe delle piste segrete."],
    },
  },
  coastal: {
    namesByTier: {
      Squallida: ["Branda del Molo", "Cuccetta del Magazzino"],
      Povera: ["Stanza della Rete", "Camera del Sale"],
      Modesta: ["Camera del Fanale", "Stanza del Marinaio"],
      Confortevole: ["Camera Asciutta", "Stanza della Finestra sul Porto"],
      Ricca: ["Suite del Capitano", "Camera del Molo Alto"],
      Aristocratica: ["Appartamento del Faro", "Suite dell'Ammiraglio"],
      Speciale: ["Camera delle Maree Quietate", "Suite del Vento Buono"],
    },
    descriptionsByTier: {
      Squallida: ["Cuccetta stretta sopra assi asciutte, con odore di catrame e corde appese a prendere il sale."],
      Povera: ["Stanza piccola con coperta ruvida, rete arrotolata al muro e finestra schermata dal vento salmastro."],
      Modesta: ["Camera pulita con baule rialzato, lanterna schermata e brocca d'acqua dolce inclusa."],
      Confortevole: ["Alloggio asciutto e ben ventilato, raro in zona portuale, con letto ampio e coperte profumate di cedro."],
      Ricca: ["Suite del piano alto con finestre sul porto, tappeti lontani dall'umidita e servizio di asciugatura incluso."],
      Aristocratica: ["Appartamento privato con vista sul faro, vetri spessi, letto grande e guardia discreta sulle scale."],
      Speciale: ["Suite riservata a ospiti d'alto rango, con carte nautiche segrete e servizio personale fino all'alba."],
    },
  },
  mountain: {
    namesByTier: {
      Squallida: ["Branda del Passo", "Pagliaio del Mulo"],
      Povera: ["Stanza dei Ramponi", "Camera della Pietra Fredda"],
      Modesta: ["Camera della Lana", "Stanza del Focolare Basso"],
      Confortevole: ["Camera del Camino", "Stanza delle Pelli"],
      Ricca: ["Suite del Valico", "Camera della Guida Maestra"],
      Aristocratica: ["Appartamento della Cresta", "Suite della Pietra Calda"],
      Speciale: ["Camera della Vetta Silenziosa", "Suite del Passo Segreto"],
    },
    descriptionsByTier: {
      Squallida: ["Giaciglio asciutto vicino alla stalla interna, riparato dal vento ma attraversato dal rumore degli zoccoli."],
      Povera: ["Stanza spartana con branda, chiodi per ramponi e una feritoia chiusa da pelle cerata."],
      Modesta: ["Camera di pietra con tappeto spesso, coperte di lana e piccola riserva di legna per la notte."],
      Confortevole: ["Alloggio caldo con camino privato, pelli al pavimento e finestra stretta sul sentiero innevato."],
      Ricca: ["Suite rivestita di legno scuro, con camino grande, pelli pregiate e servizio per asciugare mantelli e stivali."],
      Aristocratica: ["Appartamento alto con vista sulle creste, letto ampio, bagno caldo e guardia al corridoio durante le bufere."],
      Speciale: ["Suite segreta per delegazioni alpine, con mappe dei valichi chiusi e servizio di guida incluso."],
    },
  },
  swamp: {
    namesByTier: {
      Squallida: ["Branda della Palafitta", "Stuoia del Guado"],
      Povera: ["Stanza della Zanzariera", "Camera del Legno Umido"],
      Modesta: ["Camera della Lanterna Fumosa", "Stanza del Pontile"],
      Confortevole: ["Camera Alta sul Fango", "Stanza delle Reti Pulite"],
      Ricca: ["Suite del Barcaiolo Ricco", "Camera della Palafitta Alta"],
      Aristocratica: ["Appartamento delle Acque Ferme", "Suite del Ponte Coperto"],
      Speciale: ["Camera della Nebbia Buona", "Suite del Guado Segreto"],
    },
    descriptionsByTier: {
      Squallida: ["Stuoia rialzata sopra assi umide, con fumo d'erbe per tenere lontani gli insetti."],
      Povera: ["Stanza piccola con zanzariera rattoppata, lanterna fumosa e pavimento che scricchiola sull'acqua."],
      Modesta: ["Camera su palafitta con reti pulite, finestra schermata e corde per asciugare mantelli e stivali."],
      Confortevole: ["Alloggio alto sopra il fango, con zanzariera fine, letto stabile e braciere d'erbe acceso al tramonto."],
      Ricca: ["Suite rialzata con passerella privata, reti pregiate, acqua bollita e barcaiolo disponibile all'alba."],
      Aristocratica: ["Suite lussuosa e sorprendentemente asciutta, con zanzariere fini, servizio privato e pavimento sigillato."],
      Speciale: ["Suite del guado segreto, affittata a emissari e contrabbandieri facoltosi che vogliono sparire per una notte."],
    },
  },
  arctic: {
    namesByTier: {
      Squallida: ["Branda della Brina", "Giaciglio del Magazzino Caldo"],
      Povera: ["Camera delle Pelli Grezze", "Stanza della Neve Battuta"],
      Modesta: ["Camera del Braciere", "Stanza della Lana Bianca"],
      Confortevole: ["Camera del Focolare Lungo", "Stanza delle Coperte Doppie"],
      Ricca: ["Suite della Slitta Dorata", "Camera della Notte Chiara"],
      Aristocratica: ["Appartamento della Brina Alta", "Suite dell'Aurora"],
      Speciale: ["Camera dell'Aurora Quieta", "Suite del Sole Pallido"],
    },
    descriptionsByTier: {
      ...defaultRoomProfile.descriptionsByTier,
      Confortevole: ["Camera calda con focolare controllato, tappeti di pelle e zuppa serale inclusa."],
      Ricca: ["Suite per capi carovana con letto alto, vino caldo, pelli pregiate e servitore al fuoco."],
      Aristocratica: ["Appartamento lussuoso con vista sull'aurora, stufa privata e guardia incaricata della soglia."],
    },
  },
  forest: {
    namesByTier: {
      Squallida: ["Branda del Taglialegna", "Giaciglio del Capanno"],
      Povera: ["Stanza delle Radici", "Camera della Foglia Secca"],
      Modesta: ["Camera del Sottobosco", "Stanza del Ramo Verde"],
      Confortevole: ["Camera della Quercia", "Stanza delle Erbe Calde"],
      Ricca: ["Suite del Cacciatore Nobile", "Camera del Bosco Alto"],
      Aristocratica: ["Appartamento della Radura", "Suite della Quercia Antica"],
      Speciale: ["Camera del Cerchio Verde", "Suite del Sentiero Segreto"],
    },
    descriptionsByTier: {
      ...defaultRoomProfile.descriptionsByTier,
      Modesta: ["Camera pulita con legno vivo alle pareti, lanterna schermata e mensola per archi o bastoni."],
      Confortevole: ["Alloggio caldo con letto robusto, tappeto di pelle e infuso d'erbe lasciato al comodino."],
      Ricca: ["Suite in legno scolpito, con vasca profumata, baule intarsiato e vista sulle chiome alte."],
    },
  },
  urban: {
    namesByTier: {
      Squallida: ["Branda del Vicolo", "Cuccetta della Scala"],
      Povera: ["Stanza del Retro", "Camera del Garzone"],
      Modesta: ["Camera del Quartiere", "Stanza della Chiave di Ferro"],
      Confortevole: ["Camera della Piazza", "Stanza del Notaio"],
      Ricca: ["Suite della Gilda", "Camera del Mercante Alto"],
      Aristocratica: ["Appartamento del Palazzo", "Suite del Magistrato"],
      Speciale: ["Camera del Patto Segreto", "Suite delle Maschere"],
    },
    descriptionsByTier: {
      ...defaultRoomProfile.descriptionsByTier,
      Confortevole: ["Alloggio comodo con tende pesanti, tavolino da lavoro e servizio di colazione al piano."],
      Ricca: ["Suite della gilda con arredi lucidati, contratto di custodia bagagli e servitore su chiamata."],
      Aristocratica: ["Appartamento privato con anticamera, guardia discreta e biancheria degna dei palazzi cittadini."],
    },
  },
  rural: {
    namesByTier: {
      Squallida: ["Branda del Fienile", "Giaciglio della Stalla Pulita"],
      Povera: ["Stanza del Contadino", "Camera del Granaio"],
      Modesta: ["Camera del Cortile", "Stanza del Pane Caldo"],
      Confortevole: ["Camera del Camino Basso", "Stanza delle Coperte Pulite"],
      Ricca: ["Suite del Podere", "Camera del Mastro"],
      Aristocratica: ["Appartamento del Signore Locale", "Suite del Granaio Alto"],
      Speciale: ["Camera della Festa del Raccolto", "Suite del Vecchio Melo"],
    },
    descriptionsByTier: defaultRoomProfile.descriptionsByTier,
  },
  frontier: {
    namesByTier: {
      Squallida: ["Branda della Palizzata", "Giaciglio del Bivacco"],
      Povera: ["Stanza del Pioniere", "Camera della Strada Lunga"],
      Modesta: ["Camera della Frontiera", "Stanza del Carro Coperto"],
      Confortevole: ["Camera del Fuoco di Guardia", "Stanza della Sella Asciutta"],
      Ricca: ["Suite del Capoposto", "Camera del Cartografo"],
      Aristocratica: ["Appartamento della Palizzata Alta", "Suite della Via Nuova"],
      Speciale: ["Camera del Confine Segreto", "Suite della Bandiera Nuova"],
    },
    descriptionsByTier: defaultRoomProfile.descriptionsByTier,
  },
  underdark: {
    namesByTier: {
      Squallida: ["Nicchia del Cunicolo", "Branda della Roccia Fredda"],
      Povera: ["Stanza del Fungo Pallido", "Camera della Lanterna Bassa"],
      Modesta: ["Camera della Grotta Asciutta", "Stanza del Sale Nero"],
      Confortevole: ["Camera della Pietra Tiepida", "Stanza delle Lampade Blu"],
      Ricca: ["Suite della Vena d'Argento", "Camera del Mercante Profondo"],
      Aristocratica: ["Appartamento della Caverna Alta", "Suite dell'Eco Lungo"],
      Speciale: ["Camera della Luce Sepolta", "Suite del Silenzio Profondo"],
    },
    descriptionsByTier: defaultRoomProfile.descriptionsByTier,
  },
  ruins: {
    namesByTier: {
      Squallida: ["Branda tra le Colonne", "Giaciglio dell'Archivio Rotto"],
      Povera: ["Stanza della Pietra Crepata", "Camera del Mosaico Spento"],
      Modesta: ["Camera delle Colonne", "Stanza del Cortile Antico"],
      Confortevole: ["Camera del Mosaico Ripulito", "Stanza della Chiave Antica"],
      Ricca: ["Suite dell'Archeologo", "Camera delle Statue Velate"],
      Aristocratica: ["Appartamento del Tempio Restaurato", "Suite delle Colonne Alte"],
      Speciale: ["Camera del Sigillo Antico", "Suite della Porta Murata"],
    },
    descriptionsByTier: defaultRoomProfile.descriptionsByTier,
  },
};

const roomRegionAliases = {
  port: "coastal",
  sea: "coastal",
  city: "urban",
  "grande-citta": "urban",
  village: "rural",
  rural: "rural",
  forest: "forest",
  desert: "desert",
  mountain: "mountain",
  swamp: "swamp",
  arctic: "arctic",
  underdark: "underdark",
  ruins: "ruins",
  frontier: "frontier",
};

const tavernRegionProfiles = {
  coastal: {
    atmosphere:
      "Fuori si sentono gabbiani, carrucole e marinai; dentro si parla di moli, contrabbando e spezie.",
    dishName: "Zuppa salmastra del molo",
    dishDescription:
      "Pesce bianco, alghe croccanti e pane nero immerso in brodo pepato.",
    service: { name: "Passaggio in barca", price: "8 ma", icon: "⛵" },
    quest: "Una cassa sigillata e sparita tra le barche prima dell'alba.",
  },
  mountain: {
    atmosphere:
      "La pietra trattiene il freddo, la legna arde lenta e le guide alpine bevono vicino alla porta.",
    dishName: "Stufato del passo alto",
    dishDescription:
      "Selvaggina, radici e formaggio duro sciolto in una scodella fumante.",
    service: { name: "Guida alpina", price: "2 mo", icon: "⛰" },
    quest: "Una guida non e tornata dal sentiero dei picchetti rossi.",
  },
  forest: {
    atmosphere:
      "Cacciatori, boscaioli e druidi discreti lasciano fango, foglie e piume vicino al focolare.",
    dishName: "Padella del sottobosco",
    dishDescription:
      "Funghi, erbe amare e carne di lepre rosolata con bacche scure.",
    service: { name: "Guida boschiva", price: "1 mo", icon: "🌲" },
    quest:
      "Qualcosa spaventa i cacciatori e lascia frecce spezzate appese agli alberi.",
  },
  desert: {
    atmosphere:
      "Le tende filtrano sabbia sottile, l'acqua viene contata prima del vino e le carovane parlano a bassa voce.",
    dishName: "Riso speziato della carovana",
    dishDescription:
      "Riso, datteri, carne secca e spezie conservanti serviti con acqua misurata.",
    service: { name: "Otri e guida del deserto", price: "3 mo", icon: "☀" },
    quest:
      "Una carovana e arrivata senza la sua guida e con le mappe bruciate.",
  },
  urban: {
    atmosphere:
      "Informatori, artigiani e nobili minori si scambiano favori tra stanze private e vicoli sorvegliati.",
    dishName: "Arrosto del quartiere alto",
    dishDescription:
      "Tagli sottili in salsa scura, pane lucido e verdure al burro.",
    service: { name: "Contatto informato", price: "5 mo", icon: "🗝" },
    quest:
      "Un informatore ha lasciato un nome inciso sotto un tavolo privato.",
  },
  swamp: {
    atmosphere:
      "Passerelle umide, zanzare, pescatori cupi e barcaioli taciturni danno alla sala un'aria sospesa.",
    dishName: "Zuppa torbida del guado",
    dishDescription:
      "Pesce di palude, radici amare e sale nero in brodo spesso.",
    service: { name: "Barca piatta", price: "1 mo", icon: "🛶" },
    quest:
      "Una barca e tornata vuota, legata con nodi che nessuno del villaggio usa.",
  },
};

// eslint-disable-next-line no-unused-vars
const extraGenericDishes = [
  {
    name: "Minestra dei tre camini",
    description:
      "Legumi, carne affumicata e croste di pane immersi in un fondo caldo e speziato.",
  },
  {
    name: "Focaccia del pellegrino stanco",
    description:
      "Focaccia spessa con erbe secche, sale grosso e formaggio fuso lungo i bordi.",
  },
  {
    name: "Spezzatino della porta nord",
    description:
      "Verdure, sugo scuro e bocconi teneri tagliati grossolanamente per chi arriva tardi.",
  },
  {
    name: "Tegame del mercato vecchio",
    description:
      "Cipolle dorate, pezzi di arrosto e verdure al burro raccolte dai banchi migliori.",
  },
  {
    name: "Uova speziate del cambio guardia",
    description:
      "Uova morbide, pepe scuro e pane tostato serviti con salsa agra da taverna.",
  },
  {
    name: "Pasticcio del bardo affamato",
    description:
      "Sfoglia rustica, carne tritata, erbe e formaggio in una porzione generosa.",
  },
  {
    name: "Brodo del ponte coperto",
    description:
      "Una scodella chiara con radici, pepe, funghi secchi e strisce di carne salata.",
  },
  {
    name: "Salsicce alla brace e mele scure",
    description:
      "Salsicce speziate, mele cotte e pane ruvido lucidato dal grasso caldo.",
  },
];

const extraDishBonuses = [
  "+1 alla prossima prova di Atletica effettuata entro 4 ore.",
  "La prossima prova di Intuizione sociale entro la serata ottiene +1.",
  "Durante il prossimo riposo breve puoi ignorare un piccolo disagio narrativo da fatica.",
  "+1 alla prima prova di Medicina o Natura effettuata prima dell'alba.",
];

const extraDishMaluses = [
  "La prima prova di Rapidita di mano entro 2 ore subisce -1 per dita unte e spezie forti.",
  "Per la prossima ora il personaggio deve gestire un leggero fastidio di stomaco nelle scene tese.",
  "-1 alla prima prova di Percezione basata sull'olfatto: il piatto copre ogni altro odore.",
  "Il personaggio diventa assetato e consuma il doppio dell'acqua nella prossima ora.",
];

// eslint-disable-next-line no-unused-vars
const regionalDishPools = {
  coastal: [
    {
      name: "Zuppa salmastra del molo",
      description:
        "Pesce bianco, alghe croccanti e pane nero immerso in brodo pepato da porto.",
    },
    {
      name: "Molluschi alla brace del fanale",
      description:
        "Conchiglie aperte sul fuoco, burro alle erbe marine e sale grosso scuro.",
    },
    {
      name: "Pane salato dei contrabbandieri",
      description:
        "Pagnotta compatta con sardine affumicate, cipolle dolci e spezie comprate ai moli.",
    },
    {
      name: "Tegame d'alghe e merluzzo",
      description:
        "Filetti teneri, alghe verdi e patate schiacciate in una salsa densa e pungente.",
    },
    {
      name: "Brodo della bassa marea",
      description:
        "Crostacei piccoli, pepe nero e verdure da stiva serviti in ciotole calde.",
    },
  ],
  mountain: [
    {
      name: "Polenta del passo alto",
      description:
        "Polenta ruvida con funghi scuri, formaggio stagionato e sugo di selvaggina.",
    },
    {
      name: "Brodo caldo dello scalatore",
      description:
        "Radici, carne secca e grasso aromatico in un brodo pensato per scaldare le ossa.",
    },
    {
      name: "Cervo affumicato alle bacche",
      description:
        "Fette sottili di selvaggina con bacche aspre e pane duro tostato sul fuoco.",
    },
    {
      name: "Fonduta della pietra nera",
      description:
        "Formaggi intensi sciolti con funghi di grotta e croste di pane scuro.",
    },
    {
      name: "Stufato dei picchetti rossi",
      description:
        "Carne lenta, tuberi e vino speziato serviti in una scodella pesante.",
    },
  ],
  forest: [
    {
      name: "Padella del sottobosco",
      description:
        "Funghi, erbe amare e carne di lepre rosolata con bacche scure.",
    },
    {
      name: "Radici dolci del capanno",
      description:
        "Radici glassate, nocciole pestate e salsa di erbe verdi raccolte all'alba.",
    },
    {
      name: "Lepre alle bacche notturne",
      description:
        "Carne tenera cotta lentamente con bacche viola, funghi e cipolle selvatiche.",
    },
    {
      name: "Frittata del cerchio antico",
      description:
        "Uova, funghi chiari e germogli speziati serviti con pane di segale.",
    },
    {
      name: "Zuppa verde dei taglialegna",
      description:
        "Erbe, porri, radici e pezzi di carne affumicata in brodo spesso.",
    },
  ],
  desert: [
    {
      name: "Riso speziato della carovana",
      description:
        "Riso, datteri, carne secca e spezie conservanti serviti con acqua misurata.",
    },
    {
      name: "Cuscus delle dune rosse",
      description:
        "Granelli dorati, ceci speziati, datteri tritati e olio profumato di mercato.",
    },
    {
      name: "Spiedi secchi del pozzo",
      description:
        "Carne marinata nel sale, arrostita rapida e servita con salsa piccante.",
    },
    {
      name: "Latte fermentato e focaccia calda",
      description:
        "Una ciotola aspra e rinfrescante con focaccia piatta, miele e semi tostati.",
    },
    {
      name: "Tegame del miraggio",
      description:
        "Datteri, cipolle, carne secca e spezie scure in una salsa dolce e bruciante.",
    },
  ],
  swamp: [
    {
      name: "Zuppa torbida del guado",
      description:
        "Pesce di palude, radici amare e sale nero in brodo spesso.",
    },
    {
      name: "Crostacei del canneto",
      description:
        "Piccoli crostacei speziati, tuberi schiacciati e olio alle erbe amare.",
    },
    {
      name: "Pesce fangoso alla piastra",
      description:
        "Filetti robusti cotti su ferro caldo con limone selvatico e pepe umido.",
    },
    {
      name: "Tuberi neri in brodo verde",
      description:
        "Tuberi dolciastri, alghe basse e cipolle in una zuppa densa e scura.",
    },
    {
      name: "Stufato dei barcaioli muti",
      description:
        "Pesce affumicato, erbe amare e pane bagnato in un tegame da viaggio.",
    },
  ],
  urban: [
    {
      name: "Arrosto del quartiere alto",
      description:
        "Tagli sottili in salsa scura, pane lucido e verdure al burro.",
    },
    {
      name: "Dolce speziato dei notabili",
      description:
        "Sfoglia calda con miele, cannella scura e noci servita con vino dolce.",
    },
    {
      name: "Anatra al vino di vicolo",
      description:
        "Carne ricca, salsa al vino rosso e cipolle caramellate da cucina cittadina.",
    },
    {
      name: "Piatto freddo del banchiere",
      description:
        "Formaggi fini, olive, pane bianco e carne speziata disposti con cura.",
    },
    {
      name: "Torta salata della gilda",
      description:
        "Sfoglia dorata con verdure al burro, funghi costosi e spezie leggere.",
    },
  ],
  underdark: [
    {
      name: "Funghi pallidi in crema minerale",
      description:
        "Funghi luminescenti, sale di grotta e panna densa in una ciotola fredda.",
    },
    {
      name: "Radici cieche affumicate",
      description:
        "Radici sotterranee, carne affumicata e salsa amara servite su pietra calda.",
    },
    {
      name: "Razione del cunicolo profondo",
      description:
        "Pane nero, funghi secchi e grasso speziato pensati per lunghi passaggi bui.",
    },
  ],
  ruins: [
    {
      name: "Razione degli scavi antichi",
      description:
        "Carne affumicata, radici dure e pane cerato preparati per esploratori prudenti.",
    },
    {
      name: "Zuppa delle colonne spezzate",
      description:
        "Funghi chiari, tuberi e spezie polverose in un brodo servito tra mappe aperte.",
    },
    {
      name: "Tegame del campo archeologico",
      description:
        "Legumi, carne secca e cipolle bruciate in una salsa semplice ma sostanziosa.",
    },
  ],
  arctic: [
    {
      name: "Brodo bianco del focolare",
      description:
        "Pesce essiccato, grasso caldo e radici chiare in una zuppa contro il gelo.",
    },
    {
      name: "Carne secca alla brina",
      description:
        "Strisce affumicate, bacche aspre e pane duro scaldato vicino alle braci.",
    },
  ],
};

const recentDishesByRegion = {};
const recentSideQuestsByRegion = {};

function getTavernRegionProfile(regionId) {
  return tavernRegionProfiles[regionId] || null;
}

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getTavernOptions(levelOrOptions, preferredRegion) {
  if (
    levelOrOptions &&
    typeof levelOrOptions === "object" &&
    !Array.isArray(levelOrOptions)
  ) {
    return {
      level: Number(levelOrOptions.partyLevel || levelOrOptions.level) || 1,
      preferredRegion:
        levelOrOptions.region ||
        levelOrOptions.preferredRegion ||
        levelOrOptions.campaignRegion ||
        preferredRegion ||
        "generic",
      existingTaverns: Array.isArray(levelOrOptions.existingTaverns)
        ? levelOrOptions.existingTaverns
        : [],
      prestige: levelOrOptions.prestige || null,
    };
  }

  return {
    level: Number(levelOrOptions) || 1,
    preferredRegion: preferredRegion || "generic",
    existingTaverns: [],
    prestige: null,
  };
}

function pickInnkeeperName(existingTaverns) {
  const usedNames = (existingTaverns || [])
    .filter((tavern) => tavern?.type === "tavern")
    .map((tavern) => tavern.name);

  return pickUnique(innkeeperNamePool, usedNames, (used) => {
    const baseName = randomItem(innkeeperNamePool);
    const epithet =
      innkeeperEpithets.find(
        (entry) => !used.has(`${baseName} ${entry}`.trim().toLowerCase())
      ) || randomItem(innkeeperEpithets);

    return `${baseName} ${epithet}`;
  });
}

function pickTavernName(existingTaverns) {
  const usedTavernNames = (existingTaverns || [])
    .filter((tavern) => tavern?.type === "tavern")
    .map((tavern) => tavern.tavernName || tavern.innName || tavern.shopName);
  const tavernNamePool = generatedTavernNames;

  return pickUnique(tavernNamePool, usedTavernNames, (used) => {
    const candidate = `${randomItem(generatedTavernNames)} ${used.size + 1}`;

    return used.has(candidate.trim().toLowerCase())
      ? `${candidate} ${used.size + 1}`
      : candidate;
  });
}

function getRoomCountByLevel(level) {
  if (level <= 4) return randomNumber(3, 5);
  if (level <= 8) return randomNumber(4, 6);
  if (level <= 12) return randomNumber(5, 7);
  if (level <= 16) return randomNumber(6, 8);
  return randomNumber(7, 10);
}

function getRoomTierPoolByLevel(level) {
  if (level <= 4) {
    return ["Squallida", "Povera", "Povera", "Modesta", "Modesta"];
  }

  if (level <= 10) {
    return ["Povera", "Modesta", "Modesta", "Confortevole", "Confortevole"];
  }

  if (level <= 16) {
    return ["Modesta", "Confortevole", "Confortevole", "Ricca", "Ricca", "Aristocratica"];
  }

  return ["Confortevole", "Ricca", "Ricca", "Aristocratica", "Aristocratica", "Speciale"];
}

function normalizeRoomRegion(regionId = "generic") {
  return roomRegionAliases[regionId] || (regionalRoomProfiles[regionId] ? regionId : "generic");
}

function getRoomPool(profile, poolType, tier) {
  const fallbackProfile = regionalRoomProfiles.generic;

  return (
    profile?.[poolType]?.[tier] ||
    fallbackProfile[poolType]?.[tier] ||
    fallbackProfile[poolType].Modesta
  );
}

function pickRoomValue(pool, usedValues) {
  const available = pool.filter((value) => !usedValues.has(value));
  const selected = randomItem(available.length ? available : pool);
  usedValues.add(selected);

  return selected;
}

function getPrestigeRoomTierPool(level, prestige) {
  const normalized = normalizePrestige(prestige);
  if (normalized === "mediocre") {
    return ["Povera", "Povera", "Modesta", "Modesta", "Essenziale"];
  }
  if (normalized === "lussuosa") {
    return ["Confortevole", "Ricca", "Ricca", "Aristocratica", "Aristocratica", "Speciale"];
  }
  return getRoomTierPoolByLevel(level);
}

function getPrestigeRoomCount(level, prestige) {
  const base = getRoomCountByLevel(level);
  const normalized = normalizePrestige(prestige);
  if (normalized === "mediocre") return Math.max(2, base - 2);
  if (normalized === "lussuosa") return base + 1;
  return base;
}

function getPrestigeRoomPrice(tier, prestige) {
  const normalized = normalizePrestige(prestige);
  const basePrice = getRoomPriceByTier(tier);
  const numeric = Number(String(basePrice).match(/\d+/)?.[0] || 5);
  const currency = basePrice.includes("mo") ? "mo" : "ma";
  if (normalized === "mediocre") return `${Math.max(1, Math.round(numeric * 0.7))} ${currency}`;
  if (normalized === "lussuosa") return `${Math.max(8, Math.round(numeric * 1.7))} ${currency}`;
  return basePrice;
}

function tuneRoomDescription(description, prestige) {
  const normalized = normalizePrestige(prestige);
  if (normalized === "mediocre") {
    return `${description} Le coperte sono ruvide, il legno porta segni vecchi e il silenzio dipende dai vicini.`;
  }
  if (normalized === "lussuosa") {
    return `${description} Include biancheria pulita, privacy curata, luci calde e un servizio discreto.`;
  }
  return `${description} Pulita, pratica e abbastanza confortevole per un riposo affidabile.`;
}

function buildRooms(level, regionId = "generic", prestige = "buona") {
  const roomCount = getPrestigeRoomCount(level, prestige);
  const tierPool = getPrestigeRoomTierPool(level, prestige);
  const roomRegion = normalizeRoomRegion(regionId);
  const roomProfile = regionalRoomProfiles[roomRegion] || regionalRoomProfiles.generic;
  const usedNames = new Set();
  const usedDescriptions = new Set();

  return Array.from({ length: roomCount }, () => {
    const tier = randomItem(tierPool);
    const name = pickRoomValue(
      getRoomPool(roomProfile, "namesByTier", tier),
      usedNames
    );
    const description = pickRoomValue(
      getRoomPool(roomProfile, "descriptionsByTier", tier),
      usedDescriptions
    );
    const isOccupied = Math.random() < 0.25;

    return {
      name,
      tier,
      description: tuneRoomDescription(description, prestige),
      status: isOccupied ? "Occupata" : "Disponibile",
      price: getPrestigeRoomPrice(tier, prestige),
    };
  });
}

const prestigeServices = {
  mediocre: [
    { name: "Pagliericcio in sala comune", price: "5 mr", description: "Un posto asciutto vicino al muro, senza promesse sul rumore." },
    { name: "Brocca d'acqua tiepida", price: "2 mr", description: "Acqua pulita quanto basta, servita senza cerimonie." },
    { name: "Stalla condivisa", price: "1 ma", description: "Spazio al coperto tra corde, fieno vecchio e animali inquieti." },
    { name: "Informazioni da avventori ubriachi", price: "3 mr", description: "Voci confuse, ma a volte utili." },
  ],
  buona: [],
  lussuosa: [
    { name: "Massaggio con oli rari", price: "8 mo", description: "Un trattamento privato per sciogliere fatica e tensione." },
    { name: "Bagno caldo privato con sali profumati", price: "5 mo", description: "Vasca pulita, acqua nuova e asciugamani morbidi." },
    { name: "Cena privata con menu scelto", price: "12 mo", description: "Sala riservata, servizio attento e piatti su richiesta." },
    { name: "Stalla privata sorvegliata", price: "6 mo", description: "Box pulito, guardia e foraggio selezionato." },
    { name: "Musici privati", price: "10 mo", description: "Intrattenimento discreto per ospiti che vogliono essere ricordati." },
  ],
};

function randomServices(level, prestige = "buona") {
  const serviceCount =
    level <= 5
      ? randomNumber(2, 3)
      : level <= 10
        ? randomNumber(3, 4)
        : level <= 15
          ? randomNumber(4, 5)
          : randomNumber(5, 6);

  const normalized = normalizePrestige(prestige);
  const source = normalized === "buona" ? tavernServices : prestigeServices[normalized];

  return [...source]
    .sort(() => Math.random() - 0.5)
    .slice(0, normalized === "mediocre" ? Math.max(2, serviceCount - 2) : serviceCount);
}

function getReputationByLevel(level) {
  if (level <= 5) {
    return randomItem(["Malfamata", "Neutrale", "Neutrale"]);
  }

  if (level <= 10) {
    return randomItem(["Neutrale", "Ben frequentata", "Malfamata"]);
  }

  if (level <= 15) {
    return randomItem(["Ben frequentata", "Neutrale"]);
  }

  return randomItem(["Ben frequentata", "Ben frequentata", "Neutrale"]);
}

function getGoldByLevel(level) {
  if (level <= 5) return randomNumber(80, 250);
  if (level <= 10) return randomNumber(250, 700);
  if (level <= 15) return randomNumber(700, 1400);
  return randomNumber(1400, 3000);
}

function applyPrestigeGold(gold, prestige) {
  const normalized = normalizePrestige(prestige);
  if (normalized === "mediocre") return Math.max(20, Math.round(gold * 0.65));
  if (normalized === "lussuosa") return Math.round(gold * 1.7);
  return gold;
}

const recentTavernPrestigeIntros = {
  tavern: {},
  innkeeper: {},
};

const tavernPrestigeIntros = {
  mediocre: [
    "Qui il conforto arriva dopo il prezzo: il pavimento scricchiola, il vino è aspro e nessuno finge il contrario.",
    "La sala vive di rumore, fumo e sedie spaiate; chi entra cerca un tetto, non eleganza.",
    "Questa locanda sembra resistere più per abitudine che per cura: banchi consumati, candele corte e piatti scheggiati.",
    "Il posto ha l'aria di chi ha visto troppi inverni e pochi restauri.",
    "La promessa è semplice: un pasto caldo, un letto qualunque e poche domande.",
    "Le pareti trattengono odore di stalla, birra vecchia e legna umida.",
    "Il servizio è rapido solo quando conviene, ma nessuno resta fuori se ha monete sufficienti.",
    "Una locanda ruvida, adatta a carrettieri, mercenari stanchi e viaggiatori senza alternative.",
    "Le stoviglie non combaciano, il fuoco fuma e il pavimento ha più memoria dei clienti.",
    "Qui si paga poco perché si pretende poco.",
    "Ogni tavolo ha un graffio, ogni coperta una storia, ogni cliente un motivo per non lamentarsi.",
    "Il locale è povero ma vivo, più utile che accogliente.",
  ],
  buona: [
    "La locanda dà subito l'impressione di un posto tenuto con attenzione: tavoli puliti, fuoco acceso e personale presente.",
    "Non ostenta ricchezza, ma ogni cosa sembra al proprio posto.",
    "È il tipo di locanda che un viaggiatore ricorda con gratitudine dopo giorni di strada.",
    "La sala è calda, ordinata e abbastanza rumorosa da sembrare viva senza diventare caotica.",
    "Qui il servizio è pratico, le stanze sono pulite e il cibo arriva caldo.",
    "La locanda ha costruito la propria reputazione su affidabilità, discrezione e pasti onesti.",
    "Non è un luogo nobile, ma ha la solidità delle cose fatte bene.",
    "I clienti entrano con la polvere addosso e spesso escono con un motivo per tornare.",
    "Il banco è consumato ma lucidato, il fuoco è curato e l'odore della cucina riempie la sala.",
    "Questa locanda non cerca di stupire: preferisce funzionare.",
    "Ogni dettaglio suggerisce gestione attenta, dal registro delle camere al modo in cui vengono serviti i pasti.",
    "La clientela è varia, ma l'atmosfera resta controllata e accogliente.",
  ],
  lussuosa: [
    "La locanda sembra progettata per chi considera il silenzio, la privacy e il servizio parte del prezzo.",
    "Qui l'ospitalità diventa quasi cerimonia: luci calde, personale discreto e dettagli curati.",
    "Ogni superficie pare scelta per comunicare prestigio senza bisogno di alzare la voce.",
    "L'ingresso separa immediatamente il rumore della strada da un mondo di tappeti, profumi e conversazioni basse.",
    "La sala accoglie ospiti che non chiedono il costo prima di sedersi.",
    "Candele profumate, coppe lucidate e tende pesanti rendono chiaro che il comfort qui è una regola.",
    "Il personale anticipa le richieste prima ancora che vengano formulate.",
    "Questa locanda non vende solo camere: vende sicurezza, reputazione e riservatezza.",
    "Ogni tavolo sembra abbastanza lontano dagli altri da proteggere un segreto.",
    "L'arredamento non è appariscente, ma ogni dettaglio parla di denaro ben speso.",
    "Le porte si chiudono senza cigolare, i passi si attutiscono sui tappeti e nessuno alza la voce senza motivo.",
    "È il genere di luogo dove nobili, emissari e avventurieri ricchi fingono di non studiarsi a vicenda.",
  ],
};

const innkeeperPrestigeIntros = {
  mediocre: [
    "{name} asciuga il banco con uno straccio già stanco e guarda ogni nuovo cliente come una possibile spesa.",
    "La voce di {name} è ruvida, diretta e poco incline alle cerimonie.",
    "{name} porta addosso la fatica di troppe notti lunghe e troppi conti pagati tardi.",
    "Prima di sorridere, {name} controlla mani, stivali e borsa del viaggiatore.",
    "{name} non promette cortesia: promette una chiave se il pagamento arriva prima.",
    "Una cicatrice, un grembiule macchiato o uno sguardo duro rendono {name} difficile da fraintendere.",
    "{name} tratta i clienti rumorosi come mobili scomodi: li sposta solo quando serve.",
    "La reputazione di {name} nasce dalla capacità di sopravvivere a risse, debiti e pessimi ospiti.",
    "{name} parla poco, ma ogni parola sembra pesata contro il costo della legna.",
    "Con {name}, la gentilezza è rara ma non falsa.",
    "Il primo gesto di {name} è sempre pratico: chiudere una porta, contare monete, indicare un tavolo.",
    "{name} conosce abbastanza guai da non stupirsi quasi mai.",
  ],
  buona: [
    "{name} accoglie gli ospiti con attenzione concreta, senza confondere cordialità e ingenuità.",
    "Il modo in cui {name} sistema bicchieri e chiavi basta a spiegare perché il locale funziona.",
    "{name} ricorda nomi, debiti piccoli e preferenze di chi torna spesso.",
    "Un cenno di {name} manda il personale al posto giusto prima che la sala perda ordine.",
    "{name} parla con tono calmo, ma le domande arrivano sempre al punto.",
    "La reputazione di {name} si regge su pasti puntuali, camere pulite e promesse mantenute.",
    "{name} sa quando ascoltare un cliente e quando interrompere una storia prima che diventi rissa.",
    "Il sorriso di {name} è caldo, ma gli occhi restano attenti alla porta.",
    "{name} tiene insieme cucina, camere e voci locali con una disciplina quasi invisibile.",
    "Chi cerca una guida, una stanza o un consiglio onesto finisce spesso davanti a {name}.",
    "{name} ha modi semplici e memoria lunga.",
    "Ogni gesto di {name} suggerisce esperienza: servire, osservare, prevenire.",
  ],
  lussuosa: [
    "{name} non alza quasi mai la voce: non ne ha bisogno.",
    "Il sorriso di {name} è misurato, professionale e difficile da leggere.",
    "{name} sembra sapere quale stanza assegnare prima che l'ospite finisca di presentarsi.",
    "Un guanto pulito, una chiave lucidata e un inchino breve definiscono {name} più di molte parole.",
    "{name} protegge segreti con la stessa cura con cui protegge vini rari e lenzuola fini.",
    "Nobili ed emissari trattano con {name} come con un intermediario, non solo con un locandiere.",
    "{name} parla piano, sceglie bene le pause e lascia che siano gli ospiti a rivelare fretta.",
    "La reputazione di {name} nasce da discrezione, precisione e favori mai annotati due volte.",
    "{name} conosce il valore di una porta chiusa al momento giusto.",
    "Ogni cameriere sembra muoversi secondo un ordine che {name} ha dato senza farsi notare.",
    "{name} accoglie la ricchezza senza inchinarsi alla vanità.",
    "Il dettaglio più inquietante di {name} è la capacità di non sembrare mai sorpreso.",
  ],
};

const tavernRegionalDetails = {
  generic: [
    "Fuori passano carri, guardie e viaggiatori; dentro le notizie arrivano prima delle lettere.",
    "Il legno del banco porta segni di anni di mani, monete e racconti gonfiati.",
    "La cucina manda in sala odore di pane scuro, zuppa densa e brace lenta.",
    "Ogni sera il locale raccoglie gente diversa, ma le regole non scritte restano le stesse.",
  ],
  desert: [
    "La sabbia si raccoglie negli angoli nonostante i tappeti battuti ogni mattina.",
    "L'aria porta odore di spezie, cuoio caldo e polvere di carovana.",
    "Fuori, il sole brucia le insegne; dentro, l'ombra è trattata come una merce preziosa.",
    "Gli ospiti parlano di pozzi, piste e tempeste più spesso che di politica.",
  ],
  mountain: [
    "Il vento preme contro le imposte mentre guide e minatori scaldano mani e stivali.",
    "Odore di lana umida, funghi, brodo caldo e pietra fredda accompagna ogni conversazione.",
    "Le finestre guardano sentieri ripidi, ponti stretti e creste che cambiano umore in fretta.",
    "Chi entra scuote neve, fango o polvere di roccia prima ancora di chiedere da bere.",
  ],
  swamp: [
    "Le lanterne fumano contro insetti ostinati e l'acqua sotto le assi risponde a ogni passo.",
    "Odore di fango, erbe amare e pesce affumicato resta addosso ai mantelli.",
    "I clienti ascoltano il buio fuori dalle finestre come se potesse bussare da un momento all'altro.",
    "Barcaioli e raccoglitori parlano piano di guadi, febbri e luci sbagliate nella nebbia.",
  ],
  coastal: [
    "Il sale resta sulle soglie e le corde bagnate pendono vicino alle finestre.",
    "Quando cambia il vento, la sala capisce prima della campana del porto che arriveranno guai.",
    "Marinai, doganieri e contrabbandieri fingono di ignorarsi tra rum, pesce e mappe umide.",
    "La marea scandisce i pasti quasi quanto le campane del molo.",
  ],
  forest: [
    "Fuori gli alberi chiudono la strada; dentro resina, funghi e legna bagnata addolciscono l'aria.",
    "Guide e cacciatori siedono con le spalle al muro, ascoltando più il bosco che i clienti.",
    "Le foglie arrivano fin sotto la porta e nessuno sembra stupirsene.",
    "Al tramonto, ogni finestra diventa più scura della sala.",
  ],
  urban: [
    "Carrozze, messaggeri e guardie passano fuori, ma le conversazioni migliori restano dietro tende pesanti.",
    "La sala mescola notai, informatori, artigiani e clienti che scelgono tavoli lontani dalla strada.",
    "Il rumore della città copre molte parole, ma non tutte.",
    "Qui ogni stanza può diventare ufficio, rifugio o luogo di trattativa.",
  ],
  ruins: [
    "Colonne spezzate e pietre antiche fanno da vicini silenziosi alla sala comune.",
    "Gli ospiti discutono di mappe, tombe e iscrizioni come altri parlerebbero del tempo.",
    "La polvere delle rovine entra con gli stivali e resta nelle pieghe dei mantelli.",
    "Di notte, alcune ombre sembrano appartenere a muri che non esistono più.",
  ],
  underdark: [
    "La luce dei funghi pallidi rende la sala quieta anche quando è piena.",
    "Gocce lontane, pietra fredda e odore minerale sostituiscono il rumore della strada.",
    "Ogni voce rimbalza male nei corridoi, perciò molti parlano più piano del necessario.",
    "Gli ospiti guardano spesso il soffitto, come se la roccia potesse rispondere.",
  ],
  arctic: [
    "Le porte doppie tengono fuori il vento, ma non il suo lamento.",
    "Brodo bollente, pelli asciutte e lampade a grasso valgono più di molte cortesie.",
    "Chi entra porta neve sulle spalle e silenzio negli occhi.",
    "La notte artica preme contro i vetri come una bestia paziente.",
  ],
  frontier: [
    "La palizzata vicina, gli stivali infangati e le armi a portata di mano ricordano che la strada non è sicura.",
    "I clienti parlano di pozzi, pattuglie, banditi e bestie prima ancora di parlare del tempo.",
    "Ogni tavolo sembra abbastanza robusto da reggere una mappa o una rissa.",
    "Fuori la frontiera resta buia; dentro nessuno dà per scontata la pace.",
  ],
  rural: [
    "Odore di pane, stalla pulita e verdure stufate riempie la sala nelle ore giuste.",
    "Le conversazioni passano da raccolti a matrimoni, poi scivolano verso debiti e vecchie promesse.",
    "Chi entra conosce spesso metà dei presenti e teme l'altra metà.",
    "La locanda vive al ritmo del villaggio, dei campi e delle campane.",
  ],
};

const tavernClientDetails = [
  "La clientela pesa i forestieri con curiosità, ma lascia parlare l'oste prima di giudicare.",
  "I clienti abituali conoscono i tavoli migliori e quelli da evitare dopo il tramonto.",
  "Chi porta notizie riceve attenzione più rapidamente di chi porta soltanto monete.",
  "Un gruppo armato non passa inosservato, ma qui nessuno fa domande gratis.",
  "La sala offre riposo, pettegolezzi e almeno una pista per chi sa ascoltare.",
  "Le conversazioni si abbassano quando entrano sconosciuti troppo puliti.",
];

const tavernFinalDetails = [
  "Un avventuriero prudente può uscirne con riposo, informazioni e un problema nuovo.",
  "Il locale non racconta tutto subito: preferisce vedere chi resta fino a tardi.",
  "Di notte, il corridoio sembra sempre contenere una porta in più.",
  "La reputazione del posto si capisce più dalle pause che dagli elogi.",
  "Chi paga bene ottiene servizio; chi ascolta bene ottiene storia.",
  "La prossima complicazione sembra già seduta da qualche parte nella sala.",
];

function pickNonRepeating(pool, key, usedTexts = [], attempts = 10) {
  const recent = recentTavernPrestigeIntros.tavern[key] || [];
  let selected = randomItem(pool);

  for (let attempt = 0; attempt < attempts; attempt += 1) {
    const candidate = randomItem(pool);
    const normalized = normalizeUniqueName(candidate);
    const blocked =
      recent.some((entry) => normalizeUniqueName(entry) === normalized) ||
      usedTexts.some((entry) => normalizeUniqueName(entry).includes(normalized));

    if (!blocked) {
      selected = candidate;
      break;
    }
  }

  recentTavernPrestigeIntros.tavern[key] = [
    selected,
    ...recent.filter((entry) => normalizeUniqueName(entry) !== normalizeUniqueName(selected)),
  ].slice(0, 3);

  return selected;
}

function pickNonRepeatingInnkeeper(pool, key, usedTexts = [], attempts = 10) {
  const recent = recentTavernPrestigeIntros.innkeeper[key] || [];
  let selected = randomItem(pool);

  for (let attempt = 0; attempt < attempts; attempt += 1) {
    const candidate = randomItem(pool);
    const normalized = normalizeUniqueName(candidate);
    const blocked =
      recent.some((entry) => normalizeUniqueName(entry) === normalized) ||
      usedTexts.some((entry) => normalizeUniqueName(entry).includes(normalized));

    if (!blocked) {
      selected = candidate;
      break;
    }
  }

  recentTavernPrestigeIntros.innkeeper[key] = [
    selected,
    ...recent.filter((entry) => normalizeUniqueName(entry) !== normalizeUniqueName(selected)),
  ].slice(0, 3);

  return selected;
}

function cleanGeneratedText(text) {
  return String(text || "")
    .replace(/\s+/g, " ")
    .replace(/\s+\./g, ".")
    .trim();
}

function buildInnkeeperDescription(
  name,
  race,
  personality,
  regionId,
  reputation,
  level,
  usedTexts = [],
  prestige = "buona"
) {
  const normalized = normalizePrestige(prestige);
  const intro = pickNonRepeatingInnkeeper(
    innkeeperPrestigeIntros[normalized],
    `${regionId}:${normalized}`,
    usedTexts
  ).replaceAll("{name}", name);
  const regional = buildRegionalInnkeeperNarrative({
    name,
    race,
    personality,
    regionId,
    reputation,
    level,
    usedTexts,
  });

  return cleanGeneratedText(`${intro} ${regional} ${randomItem(innkeeperLooks)}.`);
}

function buildTavernDescription(
  tavernName,
  reputation,
  regionId,
  level,
  usedTexts = [],
  prestige = "buona"
) {
  const normalized = normalizePrestige(prestige);
  const intro = pickNonRepeating(
    tavernPrestigeIntros[normalized],
    `${regionId}:${normalized}`,
    usedTexts
  );
  const regionalDetail =
    randomItem(tavernRegionalDetails[regionId] || tavernRegionalDetails.generic);
  const clientDetail = randomItem(tavernClientDetails);
  const finalDetail = randomItem(tavernFinalDetails);
  const regionalNarrative = buildRegionalTavernNarrative({
    tavernName,
    reputation,
    regionId,
    level,
    usedTexts,
  });
  const orders = [
    [intro, regionalDetail, clientDetail, finalDetail],
    [regionalDetail, intro, regionalNarrative, finalDetail],
    [clientDetail, intro, regionalDetail, finalDetail],
    [regionalDetail, clientDetail, intro, regionalNarrative],
  ];

  return cleanGeneratedText(randomItem(orders).join(" "));
}

function buildUniqueTavernTexts({
  tavernName,
  reputation,
  regionId,
  level,
  name,
  race,
  personality,
  prestige = "buona",
  existingTaverns = [],
}) {
  const usedTaverns = new Set(
    existingTaverns
      .filter((tavern) => tavern?.type === "tavern")
      .map((tavern) => normalizeUniqueName(tavern.locationDescription))
  );
  const usedInnkeepers = new Set(
    existingTaverns
      .filter((tavern) => tavern?.type === "tavern")
      .map((tavern) => normalizeUniqueName(tavern.story))
  );
  let locationDescription = "";
  let story = "";

  for (let attempt = 0; attempt < 30; attempt += 1) {
    locationDescription = buildTavernDescription(
      tavernName,
      reputation,
      regionId,
      level,
      [...usedTaverns],
      prestige
    );
    story = buildInnkeeperDescription(
      name,
      race,
      personality,
      regionId,
      reputation,
      level,
      [...usedInnkeepers],
      prestige
    );

    if (
      !usedTaverns.has(normalizeUniqueName(locationDescription)) &&
      !usedInnkeepers.has(normalizeUniqueName(story))
    ) {
      break;
    }
  }

  return { locationDescription, story };
}

function getDishCandidates(regionId) {
  return getRegionalTavernDishes(regionId);
}

function pickDish(regionId) {
  const pool = getDishCandidates(regionId);
  const recentDishNames = recentDishesByRegion[regionId] || [];
  const candidates =
    pool.length > recentDishNames.length
      ? pool.filter((dish) => !recentDishNames.includes(dish.name))
      : pool;
  const selectedDish = randomItem(candidates.length ? candidates : pool);

  recentDishesByRegion[regionId] = [
    selectedDish.name,
    ...recentDishNames.filter((name) => name !== selectedDish.name),
  ].slice(0, 4);

  return selectedDish;
}

function buildDish(level, regionId = "generic", prestige = "buona") {
  const tier = getDishTierByLevel(level);
  const selectedDish = pickDish(regionId);
  const normalized = normalizePrestige(prestige);
  const price = getDishPriceByLevel(level);
  const numericPrice = Number(String(price).match(/\d+/)?.[0] || 2);
  const currency = price.includes("mo") ? "mo" : "ma";

  return {
    name:
      normalized === "mediocre"
        ? `${selectedDish.name} del Calderone Stanco`
        : normalized === "lussuosa"
          ? `${selectedDish.name} della Sala Riservata`
          : selectedDish.name,
    description:
      normalized === "mediocre"
        ? `${selectedDish.description} Porzione abbondante ma grezza, servita in stoviglie consumate.`
        : normalized === "lussuosa"
          ? `${selectedDish.description} Ingredienti scelti, impiattamento curato e profumo di spezie rare.`
          : selectedDish.description,
    bonus:
      normalized === "mediocre"
        ? "Recuperi 1 PF durante il prossimo riposo breve."
        : normalized === "lussuosa"
          ? "Recuperi 1d6 PF e ottieni +1 al prossimo tiro salvezza entro 1 ora."
          : selectedDish.bonus || randomItem([...dishBonuses, ...extraDishBonuses]),
    malus:
      normalized === "mediocre"
        ? randomItem(["N/A", "Il sapore pesante impone svantaggio alla prossima prova di Carisma conviviale."])
        : normalized === "lussuosa"
          ? "N/A"
          : selectedDish.malus || randomItem([...dishMaluses, ...extraDishMaluses]),
    tier,
    price:
      normalized === "mediocre"
        ? `${Math.max(1, Math.round(numericPrice * 0.65))} ${currency}`
        : normalized === "lussuosa"
          ? `${Math.max(5, Math.round(numericPrice * 2))} ${currency}`
          : price,
  };
}

function pickSideQuest(regionId, level) {
  const pool = getRegionalTavernSideQuests(regionId, level);
  const recentQuestNames = recentSideQuestsByRegion[regionId] || [];
  const candidates =
    pool.length > recentQuestNames.length
      ? pool.filter((quest) => !recentQuestNames.includes(quest.summary))
      : pool;
  const selectedQuest = randomItem(candidates.length ? candidates : pool);

  recentSideQuestsByRegion[regionId] = [
    selectedQuest.summary,
    ...recentQuestNames.filter((name) => name !== selectedQuest.summary),
  ].slice(0, 3);

  return selectedQuest;
}

function formatSideQuest(quest, prestige = "buona") {
  const normalized = normalizePrestige(prestige);
  const hook =
    normalized === "mediocre"
      ? "Debiti, risse e piccoli crimini rendono la richiesta urgente."
      : normalized === "lussuosa"
        ? "Ospiti importanti, discrezione e intrighi nobiliari rendono la questione delicata."
        : "Favori locali e tensioni tra clienti rendono la richiesta gestibile ma concreta.";

  return `${quest.summary}: ${quest.description} ${hook} Rischio: ${quest.complication}`;
}

export function generateTavern(levelOrOptions = 1, preferredRegion = "generic") {
  const options = getTavernOptions(levelOrOptions, preferredRegion);
  const numericLevel = Number(options.level);
  const regionId = options.preferredRegion || "generic";
  const region = getMerchantRegionById(regionId);
  const regionProfile = getTavernRegionProfile(regionId);
  const name = pickInnkeeperName(options.existingTaverns);
  const race = randomItem(races);
  const tavernName = pickTavernName(options.existingTaverns);
  const reputation = getReputationByLevel(numericLevel);
  const personality = randomItem(personalities);
  const prestige = normalizePrestige(options.prestige || pickPrestigeByLevel(numericLevel));
  const dish = buildDish(numericLevel, region.id, prestige);
  const rooms = buildRooms(numericLevel, region.id, prestige);

  const selectedQuest = pickSideQuest(region.id, numericLevel);
  const regionalServices = regionProfile?.service
    ? [regionProfile.service]
    : [];
  const descriptions = buildUniqueTavernTexts({
    tavernName,
    reputation,
    regionId: region.id,
    level: numericLevel,
    name,
    race,
    personality,
    prestige,
    existingTaverns: options.existingTaverns,
  });

  return {
    id: Date.now(),
    type: "tavern",

    name,
    race,
    shopName: tavernName,
    tavernName,
    region: region.id,
    prestige,
    reputation,
    personality,

    discount: randomItem(["Basso", "Medio", "Alto"]),

    gold: applyPrestigeGold(getGoldByLevel(numericLevel), prestige),
    shopTier: reputation,

    roomsAvailable: rooms.filter((room) => room.status === "Disponibile")
      .length,
    roomPrice: getRoomPriceByTier(getRoomTierByLevel(numericLevel)),
    rooms,

    dishName: dish.name,
    dishDescription: dish.description,
    dishBonus: dish.bonus,
    dishMalus: dish.malus,
    dishTier: dish.tier,
    dishPrice: dish.price,

    services: [...regionalServices, ...randomServices(numericLevel, prestige)].slice(
      0,
      prestige === "lussuosa" ? 7 : prestige === "mediocre" ? 4 : 6
    ),

    story: descriptions.story,

    locationDescription: `${descriptions.locationDescription} Zona: ${region.label}. ${regionProfile?.atmosphere || ""}`,

    sideQuest: formatSideQuest(selectedQuest, prestige),
    reward: selectedQuest.reward,

    notes: "",
    inventory: [],
  };
}
