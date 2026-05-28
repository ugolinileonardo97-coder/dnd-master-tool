export const grasslandMonsters = [
  {
    id: "grassland-001",
    name: "Iena delle Pianure",
    biomes: ["grassland", "desert", "hill"],
    difficulty: "Semplice",
    cr: "1/4",
    type: "Bestia",
    role: "Branco",
    icon: "🐕",
    armorClass: 12,
    hitPoints: 14,
    speed: "50 ft.",
    tags: ["Branco", "Prateria", "Caccia"],
    description:
      "Predatore rapido e rumoroso che segue mandrie, carovane e battaglie in attesa di resti.",
    story:
      "Quando le iene ridono di notte, qualcuno nel campo di solito smette di dormire.",
    actions:
      "Morso. Se un alleato è vicino al bersaglio, diventa più pericolosa.",
    tactics:
      "Attacca in gruppo, punta bersagli caduti e fugge se il branco viene disperso.",
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
    id: "grassland-002",
    name: "Lupo delle Erbe Alte",
    biomes: ["grassland", "forest", "hill"],
    difficulty: "Semplice",
    cr: "1/2",
    type: "Bestia",
    role: "Predatore",
    icon: "🐺",
    armorClass: 13,
    hitPoints: 26,
    speed: "40 ft.",
    tags: ["Branco", "Erba alta", "Agguato"],
    description:
      "Lupo dal manto giallo-grigio, quasi invisibile quando si abbassa tra erba secca e sterpaglie.",
    story:
      "Le guide delle pianure dicono che il vento non dovrebbe mai muovere l’erba controvento.",
    actions:
      "Morso. Se prende di sorpresa una creatura, può buttarla a terra.",
    tactics:
      "Si nasconde nell’erba alta, circonda e punta chi si allontana dal gruppo.",
    resistances: "Nessuna",
    vulnerabilities: "Fuoco, terreno bruciato",
    combat: {
      attackBonus: "+4",
      damage: "1d8 + 2",
      averageDamage: 6,
      damageType: "perforanti",
      damageNote:
        "Morso da agguato. Funziona bene in erba alta, nebbia o durante inseguimenti.",
    },
  },
  {
    id: "grassland-003",
    name: "Sciacallo delle Dune",
    biomes: ["grassland", "desert"],
    difficulty: "Semplice",
    cr: "1/4",
    type: "Bestia",
    role: "Predatore",
    icon: "🐕",
    armorClass: 12,
    hitPoints: 13,
    speed: "40 ft.",
    tags: ["Branco", "Caccia", "Resistenza"],
    description:
      "Creatura sottile e resistente, capace di seguire una carovana per giorni aspettando il momento giusto.",
    story:
      "Quando una carovana perde un animale o un viaggiatore resta indietro, gli sciacalli sono già lì.",
    actions:
      "Morso rapido. Se combatte con altri sciacalli, ottiene vantaggio tattico contro bersagli isolati.",
    tactics:
      "Non combatte fino alla morte. Morde, arretra e aspetta che sete e fatica facciano il resto.",
    resistances: "Caldo naturale",
    vulnerabilities: "Freddo improvviso, fuoco intenso",
    combat: {
      attackBonus: "+4",
      damage: "1d4 + 2",
      averageDamage: 4,
      damageType: "perforanti",
      damageNote:
        "Morso rapido. Diventa più efficace in branco o contro bersagli esausti dalla marcia.",
    },
  },
  {
    id: "grassland-004",
    name: "Predone delle Carovane",
    biomes: ["grassland", "desert", "hill"],
    difficulty: "Facile",
    cr: "1",
    type: "Umanoide",
    role: "Predone",
    icon: "🏹",
    armorClass: 14,
    hitPoints: 34,
    speed: "30 ft.",
    tags: ["Bandito", "Carovana", "Imboscata"],
    description:
      "Assalitore delle pianure, abituato a colpire convogli lenti e campi montati in fretta.",
    story:
      "Non ruba sempre tutto. Spesso lascia abbastanza cibo perché la vittima sopravviva e racconti quanto sia pericolosa la strada.",
    actions:
      "Arco corto. Sciabola. Può tagliare finimenti, rubare provviste o ferire animali da tiro.",
    tactics:
      "Attacca a distanza, punta carri e animali, fugge se la carovana reagisce compatta.",
    resistances: "Nessuna",
    vulnerabilities: "Cavalleria, inseguimento organizzato",
    combat: {
      attackBonus: "+5",
      damage: "1d8 + 3",
      averageDamage: 7,
      damageType: "perforanti o taglienti",
      damageNote:
        "Arco corto o sciabola. Utile per incontri con carovane, razzie e inseguimenti.",
    },
  },
  {
    id: "grassland-005",
    name: "Centauro Errante",
    biomes: ["grassland", "forest", "hill"],
    difficulty: "Facile",
    cr: "2",
    type: "Mostruosità",
    role: "Arciere mobile",
    icon: "🏹",
    armorClass: 14,
    hitPoints: 62,
    speed: "50 ft.",
    tags: ["Mobile", "Arco", "Prateria"],
    description:
      "Guerriero delle pianure, rapido e orgoglioso, capace di colpire da lontano senza farsi raggiungere.",
    story:
      "Non tutti sono ostili. Alcuni mettono alla prova gli stranieri prima di lasciarli attraversare le terre sacre.",
    actions:
      "Arco lungo. Lancia. Carica con zoccoli se entra in mischia.",
    tactics:
      "Mantiene distanza, colpisce in movimento e sfrutta ampi spazi aperti.",
    resistances: "Nessuna",
    vulnerabilities: "Terreno difficile, spazi stretti",
    combat: {
      attackBonus: "+6",
      damage: "1d8 + 4",
      averageDamage: 8,
      damageType: "perforanti",
      damageNote:
        "Arco lungo, lancia e carica con zoccoli. Ottimo in campo aperto.",
    },
  },
  {
    id: "grassland-006",
    name: "Cinghiale Zannaspezzate",
    biomes: ["grassland", "forest", "hill"],
    difficulty: "Facile",
    cr: "2",
    type: "Bestia",
    role: "Carica",
    icon: "🐗",
    armorClass: 14,
    hitPoints: 66,
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
    id: "grassland-007",
    name: "Rinoceronte Corazzato",
    biomes: ["grassland"],
    difficulty: "Medio",
    cr: "4",
    type: "Bestia",
    role: "Carica",
    icon: "🦏",
    armorClass: 16,
    hitPoints: 115,
    speed: "40 ft.",
    tags: ["Carica", "Corazzato", "Bestia"],
    description:
      "Bestia enorme con placche naturali dure come scudi consumati. Quando carica, il terreno trema.",
    story:
      "Le tribù delle pianure lo rispettano come incarnazione della testardaggine della terra.",
    actions:
      "Corno. Carica devastante se percorre abbastanza distanza prima di colpire.",
    tactics:
      "Sceglie una linea retta, travolge il bersaglio e difende il branco.",
    resistances: "Contundente leggero",
    vulnerabilities: "Illusioni, terreno fangoso",
    combat: {
      attackBonus: "+7",
      damage: "2d10 + 5",
      averageDamage: 16,
      damageType: "perforanti",
      damageNote:
        "Corno e carica devastante. Travolge bersagli in linea retta.",
    },
  },
  {
    id: "grassland-008",
    name: "Sciamano della Mandria",
    biomes: ["grassland", "hill"],
    difficulty: "Medio",
    cr: "4",
    type: "Umanoide",
    role: "Supporto",
    icon: "🪶",
    armorClass: 14,
    hitPoints: 88,
    speed: "30 ft.",
    tags: ["Sciamano", "Mandria", "Supporto"],
    description:
      "Mistico delle pianure che parla con spiriti animali, vento caldo e ossa lasciate sotto il sole.",
    story:
      "Protegge mandrie e clan nomadi, ma può diventare nemico terribile se un gruppo profana terre sacre.",
    actions:
      "Bastone rituale. Richiamo della mandria. Può potenziare alleati bestiali o ostacolare il movimento dei nemici.",
    tactics:
      "Resta dietro creature più robuste, usa vento e polvere per coprire le ritirate.",
    resistances: "Paura, charme leggero",
    vulnerabilities: "Silenzio magico, distruzione dei totem",
    combat: {
      attackBonus: "+6",
      damage: "3d6 + 4",
      averageDamage: 14,
      damageType: "psichici o contundenti",
      damageNote:
        "Bastone rituale e richiamo spirituale. Più forte come supporto che come danno diretto.",
    },
  },
  {
    id: "grassland-009",
    name: "Leone delle Pianure Rosse",
    biomes: ["grassland"],
    difficulty: "Medio",
    cr: "5",
    type: "Bestia",
    role: "Predatore alfa",
    icon: "🦁",
    armorClass: 15,
    hitPoints: 130,
    speed: "50 ft.",
    tags: ["Predatore", "Branco", "Carica"],
    description:
      "Leone enorme dal manto rossastro, capo di branchi che dominano intere regioni erbose.",
    story:
      "Alcuni clan misurano il valore dei propri guerrieri dalla capacità di restare immobili quando il leone ruggisce.",
    actions:
      "Morso. Artigli. Balzo predatorio. Può buttare a terra una creatura colpita dopo una corsa.",
    tactics:
      "Punta il bersaglio più isolato, colpisce con balzo e arretra se il branco non lo segue.",
    resistances: "Paura",
    vulnerabilities: "Fuoco, rumori metallici intensi",
    combat: {
      attackBonus: "+7",
      damage: "2d8 + 5",
      averageDamage: 14,
      damageType: "taglienti e perforanti",
      damageNote:
        "Balzo, artigli e morso. Ottimo come predatore alfa o prova tribale.",
    },
  },
  {
    id: "grassland-010",
    name: "Cavaliere della Steppa Spezzata",
    biomes: ["grassland"],
    difficulty: "Difficile",
    cr: "6",
    type: "Umanoide",
    role: "Cavaliere mobile",
    icon: "🐎",
    armorClass: 17,
    hitPoints: 140,
    speed: "30 ft.",
    tags: ["Cavalleria", "Lancia", "Nomade"],
    description:
      "Guerriero nomade in armatura leggera, addestrato a colpire da cavallo e sparire oltre l’orizzonte.",
    story:
      "Ogni cavaliere porta una fascia strappata da una bandiera nemica. Alcuni ne hanno così tante da non ricordarne più l’origine.",
    actions:
      "Lancia da carica. Arco composito. Può muoversi dopo aver attaccato se ha spazio.",
    tactics:
      "Non resta fermo. Carica, colpisce, arretra e costringe il gruppo a rompere la formazione.",
    resistances: "Paura",
    vulnerabilities: "Terreno difficile, spazi chiusi",
    combat: {
      attackBonus: "+8",
      damage: "2d10 + 5",
      averageDamage: 16,
      damageType: "perforanti",
      damageNote:
        "Lancia da carica e arco composito. Molto forte su campo aperto.",
    },
  },
  {
    id: "grassland-011",
    name: "Mandria Furiosa",
    biomes: ["grassland"],
    difficulty: "Difficile",
    cr: "7",
    type: "Bestia",
    role: "Pericolo ambientale",
    icon: "🐃",
    armorClass: 15,
    hitPoints: 170,
    speed: "50 ft.",
    tags: ["Mandria", "Travolgere", "Ambiente"],
    description:
      "Massa compatta di grandi erbivori terrorizzati o guidati da magia, capace di travolgere tutto sul proprio percorso.",
    story:
      "A volte la mandria fugge da un incendio. A volte da un predatore. A volte da qualcosa che gli avventurieri non hanno ancora visto.",
    actions:
      "Travolgere. Calpestare. Può colpire più creature in linea o in un’area stretta.",
    tactics:
      "Non ragiona come un nemico normale: crea pressione, panico e scelte rapide.",
    resistances: "Paura durante la fuga",
    vulnerabilities: "Controllo animale, barriere solide",
    combat: {
      attackBonus: "+8",
      damage: "3d8 + 5",
      averageDamage: 18,
      damageType: "contundenti",
      damageNote:
        "Travolgimento di massa. Da usare come incontro ambientale più che come singolo mostro.",
    },
  },
  {
    id: "grassland-012",
    name: "Grifone del Cielo Aperto",
    biomes: ["grassland", "mountain"],
    difficulty: "Difficile",
    cr: "8",
    type: "Mostruosità",
    role: "Predatore volante",
    icon: "🦅",
    armorClass: 17,
    hitPoints: 165,
    speed: "30 ft., volo 80 ft.",
    tags: ["Volante", "Rapimento", "Predatore"],
    description:
      "Grifone grande e feroce, abituato a cacciare cavalli, bisonti e viaggiatori isolati.",
    story:
      "Le popolazioni delle pianure lasciano bandiere rumorose sui carri per non sembrare prede silenziose.",
    actions:
      "Becco. Artigli. Picchiata. Può afferrare creature e sollevarle brevemente.",
    tactics:
      "Attacca dall’alto, punta cavalcature e bersagli piccoli, poi si rialza fuori portata.",
    resistances: "Caduta, vento naturale",
    vulnerabilities: "Fulmine, reti pesanti",
    combat: {
      attackBonus: "+9",
      damage: "2d10 + 5",
      averageDamage: 16,
      damageType: "taglienti",
      damageNote:
        "Picchiata e artigli. Pericoloso perché può separare bersagli dal gruppo.",
    },
  },
  {
    id: "grassland-013",
    name: "Roc delle Tempeste",
    biomes: ["grassland", "mountain", "coastal"],
    difficulty: "Estremo",
    cr: "11",
    type: "Mostruosità",
    role: "Predatore volante",
    icon: "🦅",
    armorClass: 17,
    hitPoints: 248,
    speed: "20 ft., volo 120 ft.",
    tags: ["Volante", "Gigante", "Rapimento"],
    description:
      "Uccello titanico che oscura il sole per un istante quando passa sopra la pianura.",
    story:
      "Le carovane coprono gli animali con teli mimetici quando vedono la sua ombra sulle nuvole.",
    actions:
      "Artigli. Becco. Può afferrare creature grandi e sollevarle in aria.",
    tactics:
      "Afferra un bersaglio, sale di quota e lo lascia cadere o lo porta al nido.",
    resistances: "Vento, caduta",
    vulnerabilities: "Fulmine, ali ferite",
    combat: {
      attackBonus: "+10",
      damage: "4d8 + 7",
      averageDamage: 25,
      damageType: "taglienti",
      damageNote:
        "Artigli e becco. Può afferrare creature e lasciarle cadere dall’alto.",
    },
  },
  {
    id: "grassland-014",
    name: "Khan delle Pianure Sanguigne",
    biomes: ["grassland"],
    difficulty: "Estremo",
    cr: "12",
    type: "Umanoide",
    role: "Comandante",
    icon: "👑",
    armorClass: 18,
    hitPoints: 250,
    speed: "30 ft.",
    tags: ["Comandante", "Cavalleria", "Boss"],
    description:
      "Capo di una grande orda nomade, stratega feroce e carismatico, capace di trasformare una pianura in un campo di morte.",
    story:
      "Ogni vittoria viene incisa su una lamina appesa alla sua sella. Il vento della steppa suona attraverso quei metalli come un canto di guerra.",
    actions:
      "Lama curva. Arco composito. Ordine di carica. Può far muovere o attaccare un alleato vicino.",
    tactics:
      "Non combatte mai come un solitario. Usa cavalleria, arcieri e finte ritirate.",
    resistances: "Paura, charme",
    vulnerabilities: "Disonore pubblico, perdita dello stendardo",
    combat: {
      attackBonus: "+11",
      damage: "4d10 + 6",
      averageDamage: 28,
      damageType: "taglienti o perforanti",
      damageNote:
        "Lama, arco e ordini tattici. Boss umanoide perfetto per guerre e invasioni.",
    },
  },
  {
    id: "grassland-015",
    name: "Spirito della Grande Mandria",
    biomes: ["grassland", "planar"],
    difficulty: "Boss",
    cr: "17",
    type: "Entità",
    role: "Boss spirituale",
    icon: "🐂",
    armorClass: 21,
    hitPoints: 360,
    speed: "60 ft.",
    tags: ["Spirito", "Mandria", "Boss"],
    description:
      "Entità colossale formata da corna, zoccoli, polvere e migliaia di ombre animali sovrapposte.",
    story:
      "Appare quando le pianure vengono devastate senza rispetto: mandrie sterminate, fiumi avvelenati, terre sacre profanate.",
    actions:
      "Carica ancestrale. Calpestare spirituale. Può evocare sagome di bisonti e cavalli spettrali.",
    tactics:
      "Non protegge sé stesso: protegge la pianura. Travolge, divide e costringe il gruppo a rispettare il territorio.",
    resistances: "Contundente, paura, psichico, armi non magiche",
    vulnerabilities: "Rito di pace, restituzione delle ossa sacre",
    combat: {
      attackBonus: "+13",
      damage: "5d10 + 8",
      averageDamage: 35,
      damageType: "contundenti e forza",
      damageNote:
        "Carica ancestrale e mandria spettrale. Boss perfetto per campagne tribali o territori sacri.",
    },
  },
];