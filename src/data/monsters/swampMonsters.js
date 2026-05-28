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
  },
  {
    id: "swamp-003",
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
  },
  {
    id: "swamp-004",
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
  },
  {
    id: "swamp-005",
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
  },
  {
    id: "swamp-006",
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
  },
];