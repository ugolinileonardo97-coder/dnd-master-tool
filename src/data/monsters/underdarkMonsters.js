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
      "Fungo pallido e tremolante che emette un urlo acuto quando percepisce movimento o luce nelle vicinanze.",
    story:
      "Molte creature del sottosuolo lo coltivano vicino ai propri rifugi come sistema d’allarme naturale.",
    actions:
      "Urlo. Quando una creatura si avvicina, emette un grido udibile a grande distanza.",
    tactics:
      "Non combatte, ma può attirare predatori, pattuglie o creature più pericolose.",
    resistances: "Nessuna",
    vulnerabilities: "Fuoco",
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
  },
  {
    id: "underdark-003",
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
      "Predatore silenzioso che si mimetizza tra colonne spezzate e statue cadute.",
    story:
      "Depone uova nelle crepe delle città morte. Quando una rovina tace troppo a lungo, spesso significa che la mantide è già in caccia.",
    actions:
      "Falcata gemella. Balzo predatorio se si muove abbastanza prima dell’attacco.",
    tactics:
      "Colpisce dall’alto, punta gli incantatori e torna a nascondersi tra le rovine.",
    resistances: "Veleno",
    vulnerabilities: "Tuono",
  },
  {
    id: "underdark-004",
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
  },
  {
    id: "underdark-005",
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
  },
];