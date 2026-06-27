export const swampMonsters = [
  {
    id: "swamp-001",
    name: "Ratto delle Cripte",
    biomes: ["swamp", "urban", "ruins"],
    difficulty: "Semplice",
    cr: "1/4",
    type: "Bestia",
    role: "Sciame",
    icon: "🐀",
    image: "/monsters/01-ratto-delle-cripte.png",
    armorClass: 12,
    hitPoints: 22,
    speed: "30 ft.",
    tags: ["Bestia", "Sotterraneo", "Branco"],
    description:
      "Creatura adattata alle tenebre, ai cunicoli umidi e alle cripte allagate. I denti affilati rosicchiano carne e legno con facilità.",
    story:
      "Si dice che questi ratti nascano dove l’acqua filtra nelle tombe e nessuno pronuncia più il nome dei morti.",
    actions:
      "Morso. Attacco in mischia. In gruppo diventa più pericoloso, soprattutto contro bersagli caduti o isolati.",
    tactics:
      "Attacca dalle fessure, circonda, fugge nella melma e ritorna quando sente odore di sangue.",
    resistances: "Nessuna",
    vulnerabilities: "Danni ad area",
    combat: {
      attackBonus: "+4",
      damage: "1d4 + 2",
      averageDamage: 4,
      damageType: "perforanti",
      damageNote:
        "Morso rapido. In branco diventa pericoloso contro bersagli caduti o separati.",
    },
  },
  {
    id: "swamp-002",
    name: "Sanguisuga Gigante",
    biomes: ["swamp", "aquatic"],
    difficulty: "Semplice",
    cr: "1/2",
    type: "Bestia",
    role: "Parassita",
    icon: "🪱",
    armorClass: 12,
    hitPoints: 28,
    speed: "10 ft., nuoto 30 ft.",
    tags: ["Acqua", "Risucchio", "Agguato"],
    description:
      "Creatura molle e scura che si nasconde sotto il fango e si attacca alle prede per nutrirsi lentamente.",
    story:
      "I pescatori riconoscono la sua presenza quando l’acqua diventa calma anche sotto la pioggia.",
    actions:
      "Morso aderente. Se colpisce, può rimanere attaccata e infliggere danno continuato.",
    tactics:
      "Attacca chi entra in acqua, si attacca al bersaglio più pesante e cerca di trascinarlo sotto.",
    resistances: "Veleno naturale",
    vulnerabilities: "Sale, fuoco",
    combat: {
      attackBonus: "+4",
      damage: "1d6 + 2",
      averageDamage: 5,
      damageType: "perforanti",
      damageNote:
        "Morso aderente. Se resta attaccata, può infliggere danno continuato e disturbare il movimento.",
    },
  },
  {
    id: "swamp-003",
    name: "Sciame di Zanzare Cremisi",
    biomes: ["swamp"],
    difficulty: "Semplice",
    cr: "1/2",
    type: "Bestia",
    role: "Sciame",
    icon: "🦟",
    armorClass: 13,
    hitPoints: 30,
    speed: "10 ft., volo 30 ft.",
    tags: ["Sciame", "Sangue", "Malattia"],
    description:
      "Nuvola ronzante di insetti rossi, attratta dal calore del sangue e dall’odore della paura.",
    story:
      "Le tribù della palude bruciano erbe amare per tenerle lontane, ma quando la nube è grande abbastanza il fumo non basta.",
    actions:
      "Punture multiple. Può infliggere danni continui se il bersaglio rimane nello sciame.",
    tactics:
      "Circonda il gruppo, disturba incantatori e costringe a usare fuoco o aree di danno.",
    resistances: "Perforante, tagliente non magico",
    vulnerabilities: "Fuoco, vento forte, danni ad area",
    combat: {
      attackBonus: "+4",
      damage: "2d4",
      averageDamage: 5,
      damageType: "perforanti",
      damageNote:
        "Punture multiple. Più fastidioso che letale, ma ottimo per consumare risorse.",
    },
  },
  {
    id: "swamp-004",
    name: "Cultista della Melma",
    biomes: ["swamp", "urban", "ruins"],
    difficulty: "Facile",
    cr: "1",
    type: "Umanoide",
    role: "Incantatore minore",
    icon: "🕯️",
    armorClass: 13,
    hitPoints: 36,
    speed: "30 ft.",
    tags: ["Culto", "Veleno", "Melma"],
    description:
      "Fanatico coperto di simboli tracciati con fango e sangue. Serve entità che vivono sotto acque ferme.",
    story:
      "Offre piccoli animali, monete e a volte persone alla palude, convinto che qualcosa sotto la superficie risponda.",
    actions:
      "Pugnale rituale. Maledizione fangosa. Può rallentare un bersaglio o avvelenarlo.",
    tactics:
      "Resta dietro creature più robuste e usa il terreno difficile per tenere lontani i nemici.",
    resistances: "Veleno",
    vulnerabilities: "Radiante, fuoco",
    combat: {
      attackBonus: "+4",
      damage: "1d6 + 2 + 1d6 veleno",
      averageDamage: 9,
      damageType: "perforanti e veleno",
      damageNote:
        "Pugnale rituale e maledizione fangosa. Pensato per infastidire e rallentare.",
    },
  },
  {
    id: "swamp-005",
    name: "Coccodrillo delle Acque Nere",
    biomes: ["swamp", "aquatic"],
    difficulty: "Facile",
    cr: "2",
    type: "Bestia",
    role: "Agguato",
    icon: "🐊",
    armorClass: 14,
    hitPoints: 62,
    speed: "20 ft., nuoto 40 ft.",
    tags: ["Acqua", "Agguato", "Stritolamento"],
    description:
      "Predatore massiccio, quasi invisibile sotto il pelo dell’acqua. I suoi occhi sembrano due pietre bagnate.",
    story:
      "Gli abitanti della palude non attraversano mai acque ferme senza lanciare prima un pezzo di carne.",
    actions:
      "Morso serrato. Se colpisce, può afferrare il bersaglio e trascinarlo sott’acqua.",
    tactics:
      "Attacca dal fango, afferra il bersaglio più vicino e tenta di separarlo dal gruppo.",
    resistances: "Nessuna",
    vulnerabilities: "Freddo improvviso, fulmine in acqua",
    combat: {
      attackBonus: "+6",
      damage: "2d8 + 4",
      averageDamage: 13,
      damageType: "perforanti",
      damageNote:
        "Morso serrato. Può afferrare e trascinare una creatura in acqua.",
    },
  },
  {
    id: "swamp-006",
    name: "Fuoco Fatuo della Torbiera",
    biomes: ["swamp", "ruins"],
    difficulty: "Facile",
    cr: "2",
    type: "Non morto",
    role: "Ingannatore",
    icon: "🟢",
    armorClass: 15,
    hitPoints: 40,
    speed: "0 ft., volo 50 ft.",
    tags: ["Spirito", "Luce", "Inganno"],
    description:
      "Piccola luce verdastra che danza sopra pozze profonde e sentieri instabili. Sembra guidare, ma conduce dove la palude vuole.",
    story:
      "Alcuni sono anime perdute. Altri sono soltanto fame travestita da lanterna.",
    actions:
      "Scossa spettrale. Può diventare quasi invisibile e attirare creature verso zone pericolose.",
    tactics:
      "Non affronta frontalmente. Attira, divide e colpisce chi cade o resta solo.",
    resistances: "Necrotico, veleno, armi non magiche",
    vulnerabilities: "Radiante",
    combat: {
      attackBonus: "+6",
      damage: "2d8",
      averageDamage: 9,
      damageType: "fulmine o necrotici",
      damageNote:
        "Scossa spettrale. La vera minaccia è attirare il gruppo in trappole naturali.",
    },
  },
  {
    id: "swamp-007",
    name: "Troll di Palude",
    biomes: ["swamp"],
    difficulty: "Medio",
    cr: "3",
    type: "Gigante",
    role: "Rigeneratore",
    icon: "🧌",
    image: "/monsters/05-troll-palude.png",
    armorClass: 15,
    hitPoints: 95,
    speed: "30 ft., nuoto 20 ft.",
    tags: ["Gigante", "Palude", "Rigenerazione"],
    description:
      "Troll gonfio d’acqua nera, muschio e fango. Le ferite si richiudono lasciando colare liquami verdastri.",
    story:
      "Ogni palude abbastanza antica, dicono i vecchi cacciatori, prima o poi genera il proprio troll.",
    actions:
      "Artigli putridi e morso. Rigenera se non viene colpito da fuoco o acido.",
    tactics:
      "Combatte in acqua bassa, trascina i bersagli nel fango e si ritira per rigenerare.",
    resistances: "Veleno, freddo",
    vulnerabilities: "Fuoco, acido",
    combat: {
      attackBonus: "+7",
      damage: "2d6 + 4",
      averageDamage: 11,
      damageType: "taglienti",
      damageNote:
        "Artigli putridi e morso. Rigenera se non viene contrastato con fuoco o acido.",
    },
  },
  {
    id: "swamp-008",
    name: "Melma Sepolcrale",
    biomes: ["swamp", "ruins", "underdark"],
    difficulty: "Medio",
    cr: "4",
    type: "Melma",
    role: "Corrosione",
    icon: "🫧",
    armorClass: 9,
    hitPoints: 118,
    speed: "20 ft., scalata 20 ft.",
    tags: ["Melma", "Acido", "Corrosione"],
    description:
      "Massa gelatinosa grigio-verde, piena di frammenti d’ossa, monete e piccoli oggetti corrosi.",
    story:
      "Si forma dove cadaveri, acqua stagnante e magie necrotiche rimangono insieme per troppo tempo.",
    actions:
      "Pseudopodo acido. Può corrodere metallo, cuoio e legno se rimane a contatto.",
    tactics:
      "Blocca corridoi e pontili, forza il gruppo a muoversi e punisce chi resta in mischia.",
    resistances: "Acido, contundente",
    vulnerabilities: "Freddo, fulmine",
    combat: {
      attackBonus: "+6",
      damage: "2d8 + 4",
      averageDamage: 13,
      damageType: "acido",
      damageNote:
        "Pseudopodo acido. Ottima per logorare equipaggiamento e bloccare passaggi.",
    },
  },
  {
    id: "swamp-009",
    name: "Strega del Pantano Verde",
    biomes: ["swamp", "forest"],
    difficulty: "Medio",
    cr: "5",
    type: "Folletto",
    role: "Inganno",
    icon: "🧙",
    armorClass: 15,
    hitPoints: 110,
    speed: "30 ft., nuoto 20 ft.",
    tags: ["Strega", "Illusione", "Patto"],
    description:
      "Vecchia creatura dalla pelle verdastra, con capelli come alghe secche e occhi troppo lucidi per essere umani.",
    story:
      "Offre cure, profezie e favori. Ogni dono però lascia una piccola radice dentro il destino di chi accetta.",
    actions:
      "Artigli. Malocchio. Illusione della palude. Può creare duplicati o confondere i sensi.",
    tactics:
      "Non combatte mai in campo aperto. Usa illusioni, ostaggi e terreno infido.",
    resistances: "Charme, veleno",
    vulnerabilities: "Ferro freddo, radiante",
    combat: {
      attackBonus: "+7",
      damage: "2d8 + 4",
      averageDamage: 13,
      damageType: "psichici o taglienti",
      damageNote:
        "Malocchio e artigli. Più pericolosa per controllo e inganno che per danno diretto.",
    },
  },
  {
    id: "swamp-010",
    name: "Idra Nera Minore",
    biomes: ["swamp", "aquatic"],
    difficulty: "Difficile",
    cr: "6",
    type: "Mostruosità",
    role: "Multiattacco",
    icon: "🐍",
    image: "/monsters/08-idra-nera-minore.png",
    armorClass: 15,
    hitPoints: 155,
    speed: "30 ft., nuoto 30 ft.",
    tags: ["Idra", "Acido", "Palude"],
    description:
      "Giovane idra dalle scaglie scure e viscide. Le sue teste litigano tra loro, ma attaccano con ferocia coordinata.",
    story:
      "Nata in acque contaminate da magie antiche, cresce divorando pesci, coccodrilli e viandanti imprudenti.",
    actions:
      "Morsi multipli. Sputo acido a ricarica. Se una testa viene distrutta senza cautela, la creatura può diventare ancora più pericolosa.",
    tactics:
      "Occupa passaggi stretti, attacca più bersagli e costringe il gruppo a dividersi.",
    resistances: "Acido",
    vulnerabilities: "Fuoco concentrato",
    combat: {
      attackBonus: "+8",
      damage: "1d10 + 5",
      averageDamage: 10,
      damageType: "perforanti",
      damageNote:
        "Morsi multipli e sputo acido. Il danno si moltiplica quando può colpire più volte.",
    },
  },
  {
    id: "swamp-011",
    name: "Troll Radiceamara",
    biomes: ["swamp", "forest"],
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
      "Blocca il gruppo nel sottobosco e nel fango, rigenera, e costringe i personaggi a usare fuoco o acido.",
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
    id: "swamp-012",
    name: "Strega del Sangue",
    biomes: ["swamp", "urban", "ruins"],
    difficulty: "Difficile",
    cr: "8",
    type: "Umanoide",
    role: "Incantatore",
    icon: "🧙",
    image: "/monsters/10-strega-sangue.png",
    armorClass: 15,
    hitPoints: 132,
    speed: "30 ft.",
    tags: ["Maga", "Sangue", "Maledizione"],
    description:
      "Incantatrice corrotta che usa il sangue come catalizzatore. Le sue magie lasciano cicatrici rosse anche quando non feriscono.",
    story:
      "Un tempo era guaritrice. Quando il suo villaggio la tradì, imparò che il sangue può chiudere ferite o aprire porte peggiori.",
    actions:
      "Dardo ematico. Maledizione del battito. Incantesimi di controllo e necrosi.",
    tactics:
      "Resta lontana, indebolisce il tank, maledice il guaritore e usa servitori come barriera.",
    resistances: "Necrotico, veleno",
    vulnerabilities: "Radiante",
    combat: {
      attackBonus: "+8",
      damage: "4d8",
      averageDamage: 18,
      damageType: "necrotici",
      damageNote:
        "Dardo ematico e maledizioni. Molto pericolosa contro guaritori e incantatori.",
    },
  },
  {
    id: "swamp-013",
    name: "Signore delle Zanne Sommerse",
    biomes: ["swamp", "aquatic"],
    difficulty: "Estremo",
    cr: "10",
    type: "Mostruosità",
    role: "Boss predatore",
    icon: "🐊",
    armorClass: 18,
    hitPoints: 230,
    speed: "30 ft., nuoto 50 ft.",
    tags: ["Boss", "Acqua", "Stritolamento"],
    description:
      "Enorme predatore rettiliano, più antico delle mappe della regione. Ha corna basse, cicatrici rituali e denti grossi come pugnali.",
    story:
      "Interi villaggi gli hanno offerto bestiame per generazioni. Quando le offerte cessano, il Signore delle Zanne sceglie da solo cosa prendere.",
    actions:
      "Morso devastante. Colpo di coda. Stritolamento. Può trascinare creature sott’acqua.",
    tactics:
      "Usa acqua profonda, fango e vegetazione. Afferra il bersaglio più pericoloso e lo porta dove gli altri non possono aiutarlo.",
    resistances: "Freddo, perforante non magico",
    vulnerabilities: "Fulmine, esche rituali ben preparate",
    combat: {
      attackBonus: "+10",
      damage: "3d10 + 6",
      averageDamage: 22,
      damageType: "perforanti",
      damageNote:
        "Morso devastante e stritolamento. Boss perfetto per uno scontro in acqua o su passerelle fragili.",
    },
  },
  {
    id: "swamp-014",
    name: "Regina delle Nebbie Marce",
    biomes: ["swamp", "planar"],
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
    id: "swamp-015",
    name: "Antico Drago della Torbiera",
    biomes: ["swamp"],
    difficulty: "Boss",
    cr: "17",
    type: "Drago",
    role: "Boss territoriale",
    icon: "🐉",
    armorClass: 21,
    hitPoints: 360,
    speed: "40 ft., nuoto 40 ft., volo 80 ft.",
    tags: ["Drago", "Veleno", "Palude"],
    description:
      "Drago antico dalle scaglie verdi e nere, incrostate di torba, alghe e ossa. Il suo respiro sa di morte vegetale.",
    story:
      "Non vive nella palude: la palude vive intorno a lui. Ogni sentiero sembra piegarsi per proteggere la sua tana.",
    actions:
      "Multiattacco. Morso, artigli e coda. Soffio tossico. Presenza terrificante.",
    tactics:
      "Parla, minaccia e avvelena prima dello scontro. Usa acqua, nebbia e terreno difficile per rendere ogni movimento costoso.",
    resistances: "Veleno, acido",
    vulnerabilities: "Freddo, terra consacrata",
    combat: {
      attackBonus: "+13",
      damage: "2d10 + 8 + 2d8 veleno",
      averageDamage: 28,
      damageType: "perforanti e veleno",
      damageNote:
        "Multiattacco e soffio tossico. Boss da fine arco per campagne in palude.",
    },
  },
];