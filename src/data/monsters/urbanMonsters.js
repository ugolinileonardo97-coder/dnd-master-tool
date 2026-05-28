export const urbanMonsters = [
  {
    id: "urban-001",
    name: "Ladro dei Tetti",
    biomes: ["urban"],
    difficulty: "Semplice",
    cr: "1/2",
    type: "Umanoide",
    role: "Schermagliatore",
    icon: "🗡️",
    armorClass: 14,
    hitPoints: 22,
    speed: "30 ft., scalata 20 ft.",
    tags: ["Urbano", "Furtivo", "Ladro"],
    description:
      "Criminale agile che conosce tetti, vicoli e finestre meglio delle guardie cittadine.",
    story:
      "Non cerca sempre lo scontro: spesso vuole solo rubare una chiave, un sigillo o una borsa al momento giusto.",
    actions:
      "Pugnale. Balestrino. Attacco furtivo se ha vantaggio o un alleato vicino al bersaglio.",
    tactics:
      "Usa altezza, copertura, folla e fuga. Combatte solo se costretto.",
    resistances: "Nessuna",
    vulnerabilities: "Magia di blocco, luce improvvisa",
    combat: {
      attackBonus: "+5",
      damage: "1d6 + 3",
      averageDamage: 6,
      damageType: "perforanti",
      damageNote:
        "Pugnale o balestrino. Può infliggere danni extra se ha vantaggio.",
    },
  },
  {
    id: "urban-002",
    name: "Guardia Corrotta",
    biomes: ["urban"],
    difficulty: "Facile",
    cr: "1",
    type: "Umanoide",
    role: "Guardia",
    icon: "🛡️",
    armorClass: 16,
    hitPoints: 38,
    speed: "30 ft.",
    tags: ["Città", "Corruzione", "Milizia"],
    description:
      "Soldato cittadino che vende informazioni, chiude occhi al momento giusto e combatte meglio se protetto dalla legge.",
    story:
      "In pubblico parla di ordine. In privato conosce il prezzo di ogni porta chiusa.",
    actions:
      "Lancia o spada corta. Può chiamare rinforzi se il combattimento si svolge in città.",
    tactics:
      "Tiene la linea, protegge alleati più importanti e cerca di arrestare invece di uccidere.",
    resistances: "Nessuna",
    vulnerabilities: "Ricatto, prove compromettenti",
    combat: {
      attackBonus: "+5",
      damage: "1d8 + 3",
      averageDamage: 7,
      damageType: "perforanti o taglienti",
      damageNote:
        "Lancia o spada corta. Può chiamare rinforzi se combatte in città.",
    },
  },
  {
    id: "urban-003",
    name: "Mimic da Mercato",
    biomes: ["urban", "ruins"],
    difficulty: "Medio",
    cr: "2",
    type: "Mostruosità",
    role: "Imboscata",
    icon: "📦",
    armorClass: 13,
    hitPoints: 58,
    speed: "15 ft.",
    tags: ["Mimetismo", "Adesivo", "Trappola"],
    description:
      "Creatura capace di imitare casse, bauli, bancarelle o oggetti comuni in luoghi affollati.",
    story:
      "Alcuni mercanti giurano di aver perso interi carichi senza che nessuno vedesse ladri entrare.",
    actions:
      "Morso adesivo. Pseudopodo. Può trattenere una creatura se la colpisce.",
    tactics:
      "Aspetta che qualcuno tocchi l’oggetto, poi blocca il bersaglio e lo trascina lontano dalla folla.",
    resistances: "Acido",
    vulnerabilities: "Fuoco, freddo intenso",
    combat: {
      attackBonus: "+5",
      damage: "1d8 + 3",
      averageDamage: 7,
      damageType: "acido o contundenti",
      damageNote:
        "Morso adesivo e pseudopodo. Può trattenere una creatura colpita.",
    },
  },
  {
    id: "urban-004",
    name: "Assassino della Maschera Nera",
    biomes: ["urban"],
    difficulty: "Difficile",
    cr: "8",
    type: "Umanoide",
    role: "Eliminatore",
    icon: "🎭",
    armorClass: 16,
    hitPoints: 120,
    speed: "30 ft.",
    tags: ["Assassino", "Veleno", "Furtivo"],
    description:
      "Killer professionista che agisce durante feste, processioni e mercati rumorosi.",
    story:
      "La maschera nera non indica una persona, ma un contratto accettato. Chi la vede troppo da vicino spesso non sopravvive.",
    actions:
      "Lama avvelenata. Balestra nascosta. Colpo critico contro bersagli sorpresi.",
    tactics:
      "Colpisce da invisibilità sociale: folla, travestimenti, diversivi e vie di fuga preparate.",
    resistances: "Veleno",
    vulnerabilities: "Individuazione del magico, trappole luminose",
    combat: {
      attackBonus: "+8",
      damage: "1d8 + 4 + 4d6 veleno",
      averageDamage: 23,
      damageType: "perforanti e veleno",
      damageNote:
        "Lama avvelenata. Letale contro bersagli sorpresi o isolati.",
    },
  },
  {
    id: "urban-005",
    name: "Re Vampiro Esiliato",
    biomes: ["urban", "ruins"],
    difficulty: "Estremo",
    cr: "14",
    type: "Non morto",
    role: "Boss",
    icon: "🧛",
    image: "/monsters/15-re-vampiro-esiliato.png",
    armorClass: 18,
    hitPoints: 255,
    speed: "30 ft., arrampicata 30 ft.",
    tags: ["Vampiro", "Boss", "Nobile"],
    description:
      "Sovrano decaduto, elegante e terribile. Il suo carisma è un’arma quanto le sue zanne.",
    story:
      "Fu tradito dalla propria corte e bandito dal castello ancestrale. Ora ricostruisce il regno nell’ombra.",
    actions:
      "Artigli nobili. Morso regale. Comando oscuro. Può affascinare una creatura vicina.",
    tactics:
      "Non combatte mai da solo se può evitarlo. Usa servitori, ostaggi e promesse.",
    resistances: "Necrotico, armi non magiche",
    vulnerabilities: "Luce solare, acqua corrente",
    combat: {
      attackBonus: "+11",
      damage: "1d8 + 5 + 3d6 necrotici",
      averageDamage: 20,
      damageType: "taglienti e necrotici",
      damageNote: "Artigli, morso regale e comando oscuro.",
    },
  },
  {
    id: "urban-006",
    name: "Topo di Fogna Gigante",
    biomes: ["urban", "swamp", "ruins"],
    difficulty: "Semplice",
    cr: "1/4",
    type: "Bestia",
    role: "Branco",
    icon: "🐀",
    armorClass: 12,
    hitPoints: 14,
    speed: "30 ft., nuoto 20 ft.",
    tags: ["Fogna", "Branco", "Malattia"],
    description:
      "Ratto enorme e gonfio, abituato a vivere tra scarichi, cantine e cunicoli sotto la città.",
    story:
      "Quando iniziano a sparire gatti e cani nei quartieri bassi, spesso è il primo segno di una colonia troppo grande.",
    actions:
      "Morso infetto. In gruppo può circondare e sopraffare bersagli caduti.",
    tactics:
      "Attacca in numero, fugge nei condotti e torna quando il gruppo è distratto.",
    resistances: "Veleno leggero",
    vulnerabilities: "Fuoco, danni ad area",
    combat: {
      attackBonus: "+4",
      damage: "1d4 + 2",
      averageDamage: 4,
      damageType: "perforanti",
      damageNote:
        "Morso infetto. Diventa pericoloso soprattutto in gruppo o in spazi stretti.",
    },
  },
  {
    id: "urban-007",
    name: "Mendicante Maledetto",
    biomes: ["urban"],
    difficulty: "Semplice",
    cr: "1/2",
    type: "Umanoide",
    role: "Maledizione",
    icon: "🕯️",
    armorClass: 12,
    hitPoints: 24,
    speed: "30 ft.",
    tags: ["Maledizione", "Città", "Inganno"],
    description:
      "Figura apparentemente innocua, avvolta in stracci e parole sussurrate. Chi rifiuta la sua richiesta può attirare sfortuna.",
    story:
      "Nessuno sa se sia davvero povero, posseduto o semplicemente il volto usato da qualcosa che vive nei vicoli.",
    actions:
      "Coltello nascosto. Malocchio. Può imporre svantaggio a una prova o a un attacco vicino.",
    tactics:
      "Evita lo scontro diretto, usa pietà e confusione, poi fugge tra la folla.",
    resistances: "Nessuna",
    vulnerabilities: "Radiante, verità magica",
    combat: {
      attackBonus: "+4",
      damage: "1d4 + 2",
      averageDamage: 4,
      damageType: "perforanti o psichici",
      damageNote:
        "Coltello nascosto e malocchio. Più utile come disturbo narrativo che come minaccia fisica.",
    },
  },
  {
    id: "urban-008",
    name: "Cane da Guardia Corazzato",
    biomes: ["urban"],
    difficulty: "Facile",
    cr: "1",
    type: "Bestia",
    role: "Guardiano",
    icon: "🐕",
    armorClass: 15,
    hitPoints: 34,
    speed: "40 ft.",
    tags: ["Guardia", "Branco", "Inseguimento"],
    description:
      "Mastino addestrato con pettorale di cuoio bollito e placche metalliche. Non abbaia per avvertire: abbaia per bloccare.",
    story:
      "Le case nobili li usano nei cortili interni, dove nessun ladro può correre abbastanza veloce.",
    actions:
      "Morso. Se colpisce durante una corsa può buttare a terra il bersaglio.",
    tactics:
      "Insegue, blocca, morde gambe e braccia. Lavora bene con guardie o padroni armati.",
    resistances: "Paura leggera",
    vulnerabilities: "Charme animale, cibo drogato",
    combat: {
      attackBonus: "+5",
      damage: "1d8 + 3",
      averageDamage: 7,
      damageType: "perforanti",
      damageNote:
        "Morso da inseguimento. Può buttare a terra chi prova a fuggire.",
    },
  },
  {
    id: "urban-009",
    name: "Spia del Casato Rosso",
    biomes: ["urban"],
    difficulty: "Facile",
    cr: "1",
    type: "Umanoide",
    role: "Infiltratore",
    icon: "🕵️",
    armorClass: 14,
    hitPoints: 30,
    speed: "30 ft.",
    tags: ["Spia", "Nobile", "Furtivo"],
    description:
      "Informatore elegante e discreto, addestrato a sopravvivere abbastanza a lungo da vendere ciò che ha scoperto.",
    story:
      "Lavora per un casato, una gilda o forse per chi paga meglio. In città, la verità ha sempre più di un compratore.",
    actions:
      "Stocco leggero. Dardo nascosto. Può disimpegnarsi come azione rapida in ambienti affollati.",
    tactics:
      "Non cerca duelli. Colpisce, crea confusione e fugge verso un punto d’incontro preparato.",
    resistances: "Nessuna",
    vulnerabilities: "Zone aperte, divinazione",
    combat: {
      attackBonus: "+5",
      damage: "1d8 + 3",
      averageDamage: 7,
      damageType: "perforanti",
      damageNote:
        "Stocco o dardo nascosto. Pericolosa soprattutto se agisce di sorpresa.",
    },
  },
  {
    id: "urban-010",
    name: "Alchimista del Vicolo Cieco",
    biomes: ["urban"],
    difficulty: "Medio",
    cr: "3",
    type: "Umanoide",
    role: "Supporto",
    icon: "⚗️",
    armorClass: 13,
    hitPoints: 70,
    speed: "30 ft.",
    tags: ["Alchimia", "Fuoco", "Veleno"],
    description:
      "Studioso autodidatta che vende pozioni, acidi e bombe instabili da un laboratorio nascosto dietro un muro falso.",
    story:
      "Dice di curare i poveri, ma le sue cantine sono piene di esperimenti che urlano dentro bottiglie sigillate.",
    actions:
      "Bomba alchemica. Fiala acida. Fumo irritante. Può curare o potenziare un alleato.",
    tactics:
      "Resta dietro copertura, usa fumo e fuoco, e prova a trasformare il campo in un laboratorio esploso.",
    resistances: "Veleno, acido",
    vulnerabilities: "Fuoco incontrollato, silenzio magico",
    combat: {
      attackBonus: "+6",
      damage: "2d6 + 3",
      averageDamage: 10,
      damageType: "fuoco o acido",
      damageNote:
        "Bombe e fiale. Può colpire più bersagli piccoli o creare zone pericolose.",
    },
  },
  {
    id: "urban-011",
    name: "Bruto della Gilda",
    biomes: ["urban"],
    difficulty: "Medio",
    cr: "3",
    type: "Umanoide",
    role: "Bruto",
    icon: "🥊",
    armorClass: 15,
    hitPoints: 92,
    speed: "30 ft.",
    tags: ["Gilda", "Estorsione", "Bruto"],
    description:
      "Picchiatore professionista, mandato a riscuotere debiti, rompere porte o convincere testimoni a dimenticare.",
    story:
      "Non porta stemmi ufficiali, ma tutti nel quartiere sanno per chi lavora.",
    actions:
      "Mazza ferrata. Presa brutale. Può spingere una creatura contro muri, tavoli o bancarelle.",
    tactics:
      "Entra in mischia, blocca il più fragile e usa l’ambiente urbano come arma.",
    resistances: "Paura",
    vulnerabilities: "Magia mentale, terreno aperto",
    combat: {
      attackBonus: "+6",
      damage: "2d8 + 4",
      averageDamage: 13,
      damageType: "contundenti",
      damageNote:
        "Mazza ferrata e prese. Molto efficace in taverne, vicoli e interni stretti.",
    },
  },
  {
    id: "urban-012",
    name: "Cultista della Cantina Nera",
    biomes: ["urban", "ruins"],
    difficulty: "Medio",
    cr: "4",
    type: "Umanoide",
    role: "Incantatore",
    icon: "🔮",
    armorClass: 14,
    hitPoints: 86,
    speed: "30 ft.",
    tags: ["Culto", "Occulto", "Paura"],
    description:
      "Adepto di un culto cittadino che si riunisce sotto magazzini, terme abbandonate e case nobiliari.",
    story:
      "Il culto non conquista con eserciti, ma con favori, ricatti e promesse sussurrate durante cene eleganti.",
    actions:
      "Dardo occulto. Sussurro del vuoto. Può spaventare o confondere un bersaglio.",
    tactics:
      "Si nasconde dietro fedeli minori, manipola il morale e fugge se il rituale fallisce.",
    resistances: "Psichico",
    vulnerabilities: "Radiante, silenzio magico",
    combat: {
      attackBonus: "+6",
      damage: "3d6 + 4",
      averageDamage: 14,
      damageType: "psichici o necrotici",
      damageNote:
        "Dardo occulto e sussurri. Forte contro gruppi già divisi o spaventati.",
    },
  },
  {
    id: "urban-013",
    name: "Gargolla del Campanile",
    biomes: ["urban", "ruins"],
    difficulty: "Medio",
    cr: "5",
    type: "Costrutto",
    role: "Predatore verticale",
    icon: "🗿",
    armorClass: 17,
    hitPoints: 118,
    speed: "30 ft., volo 60 ft.",
    tags: ["Volante", "Pietra", "Campanile"],
    description:
      "Statua mostruosa che dorme tra guglie, tetti sacri e torri di guardia. Di notte scende a caccia.",
    story:
      "Alcuni templi le scolpirono come protettori. Poi qualcuno dimenticò quali nomi pronunciare per farle obbedire.",
    actions:
      "Artigli di pietra. Morso. Picchiata dal campanile.",
    tactics:
      "Attacca dall’alto, afferra bersagli isolati e li trascina verso tetti o cornicioni.",
    resistances: "Veleno, perforante non magico",
    vulnerabilities: "Tuono, martelli pesanti",
    combat: {
      attackBonus: "+7",
      damage: "2d8 + 5",
      averageDamage: 14,
      damageType: "taglienti",
      damageNote:
        "Artigli di pietra e picchiata. Fortissima in verticale, tra tetti e torri.",
    },
  },
  {
    id: "urban-014",
    name: "Boia Senza Nome",
    biomes: ["urban", "ruins"],
    difficulty: "Difficile",
    cr: "6",
    type: "Non morto",
    role: "Esecutore",
    icon: "🪓",
    armorClass: 17,
    hitPoints: 145,
    speed: "30 ft.",
    tags: ["Non morto", "Esecuzione", "Paura"],
    description:
      "Figura incappucciata che appare nei luoghi dove sono state compiute troppe condanne ingiuste.",
    story:
      "Non parla mai. Indica soltanto il colpevole, anche quando nessuno sa quale colpa abbia commesso.",
    actions:
      "Ascia del patibolo. Sentenza oscura. Infligge più danni a bersagli spaventati o trattenuti.",
    tactics:
      "Avanza lentamente, spaventa, isola e colpisce chi non può fuggire.",
    resistances: "Necrotico, paura, veleno",
    vulnerabilities: "Radiante, assoluzione rituale",
    combat: {
      attackBonus: "+8",
      damage: "2d12 + 5",
      averageDamage: 18,
      damageType: "taglienti e necrotici",
      damageNote:
        "Ascia del patibolo. Diventa devastante contro bersagli spaventati o immobilizzati.",
    },
  },
  {
    id: "urban-015",
    name: "Nobile Posseduto",
    biomes: ["urban", "planar"],
    difficulty: "Difficile",
    cr: "7",
    type: "Umanoide",
    role: "Manipolatore",
    icon: "👑",
    armorClass: 16,
    hitPoints: 138,
    speed: "30 ft.",
    tags: ["Nobile", "Possessione", "Politica"],
    description:
      "Aristocratico elegante il cui corpo è abitato da una presenza antica. Sorride troppo lentamente e non sbatte mai le palpebre.",
    story:
      "Le sue decisioni hanno rovinato quartieri interi, ma ogni atto porta un sigillo perfettamente legale.",
    actions:
      "Comando mentale. Lama cerimoniale. Può costringere un servitore o una guardia ad agire per lui.",
    tactics:
      "Usa protezioni sociali, guardie e magia mentale. Combatte solo quando il potere politico non basta più.",
    resistances: "Psichico, charme",
    vulnerabilities: "Esorcismo, radiante",
    combat: {
      attackBonus: "+8",
      damage: "3d8 + 4",
      averageDamage: 17,
      damageType: "psichici o perforanti",
      damageNote:
        "Comando mentale e lama cerimoniale. Pericoloso perché controlla altri nemici.",
    },
  },
  {
    id: "urban-016",
    name: "Demone sotto il Teatro",
    biomes: ["urban", "planar"],
    difficulty: "Estremo",
    cr: "10",
    type: "Immondo",
    role: "Boss occulto",
    icon: "🎭",
    armorClass: 18,
    hitPoints: 210,
    speed: "40 ft.",
    tags: ["Demone", "Teatro", "Inganno"],
    description:
      "Creatura infernale che vive sotto un teatro antico, nutrendosi di applausi, tragedie e desideri non confessati.",
    story:
      "Gli attori credono di recitare meglio grazie alla fortuna del teatro. In realtà, ogni grande interpretazione gli consegna un pezzo d’anima.",
    actions:
      "Artigli teatrali. Risata infernale. Può creare illusioni o costringere una creatura a recitare una parte.",
    tactics:
      "Trasforma il combattimento in scena: divide ruoli, isola protagonisti e punisce chi rompe la finzione.",
    resistances: "Fuoco, charme, psichico",
    vulnerabilities: "Radiante, verità pronunciata davanti al pubblico",
    combat: {
      attackBonus: "+10",
      damage: "2d10 + 6 + 2d6 psichici",
      averageDamage: 24,
      damageType: "taglienti e psichici",
      damageNote:
        "Artigli teatrali e illusioni. Boss perfetto per una sessione urbana investigativa.",
    },
  },
];