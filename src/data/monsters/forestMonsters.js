export const forestMonsters = [
  {
    id: "forest-001",
    name: "Lupo Affamato",
    biomes: ["forest", "grassland", "hill"],
    difficulty: "Semplice",
    cr: "1/4",
    type: "Bestia",
    role: "Predatore",
    icon: "🐺",
    armorClass: 13,
    hitPoints: 11,
    speed: "40 ft.",
    tags: ["Branco", "Caccia", "Notturno"],
    description:
      "Predatore magro e nervoso, abituato a seguire l’odore del sangue tra alberi e sentieri isolati.",
    story:
      "I villaggi ai margini del bosco raccontano che alcuni branchi imparino a riconoscere il suono delle campane e il passo dei bambini.",
    actions:
      "Morso. Attacco in mischia. Se combatte insieme ad altri lupi, cerca di circondare e buttare a terra il bersaglio.",
    tactics:
      "Attacca in branco, isola il personaggio più fragile e si ritira se subisce troppe perdite.",
    resistances: "Nessuna",
    vulnerabilities: "Fuoco, rumori forti, intimidazione animale",
  },
  {
    id: "forest-002",
    name: "Goblin dei Rovi",
    biomes: ["forest", "hill", "ruins"],
    difficulty: "Semplice",
    cr: "1/4",
    type: "Umanoide",
    role: "Predone",
    icon: "👺",
    armorClass: 14,
    hitPoints: 12,
    speed: "30 ft.",
    tags: ["Goblin", "Trappole", "Bosco"],
    description:
      "Piccolo predone coperto di foglie, spine e pezzi di cuoio rubati. Conosce sentieri che non compaiono su nessuna mappa.",
    story:
      "I Goblin dei Rovi non costruiscono veri villaggi: scavano tane sotto radici contorte e lasciano trappole dove gli umani camminano più spesso.",
    actions:
      "Lama ricurva. Attacco in mischia. Arco corto. Attacco a distanza. Può disimpegnarsi o nascondersi rapidamente.",
    tactics:
      "Colpisce da lontano, fugge, attira gli avventurieri verso trappole e usa il terreno a proprio vantaggio.",
    resistances: "Nessuna",
    vulnerabilities: "Luce improvvisa, intimidazione, fuoco nei rovi",
  },
  {
    id: "forest-003",
    name: "Orso Brumoso",
    biomes: ["forest", "mountain", "hill"],
    difficulty: "Facile",
    cr: "1",
    type: "Bestia",
    role: "Bruto",
    icon: "🐻",
    armorClass: 12,
    hitPoints: 38,
    speed: "40 ft.",
    tags: ["Bestia", "Territoriale"],
    description:
      "Grande orso dal pelo scuro, spesso avvolto da vapore nelle mattine fredde. Non caccia per crudeltà, ma difende il proprio territorio.",
    story:
      "I cacciatori lo chiamano Brumoso perché appare tra la nebbia prima ancora che si senta il suo ruggito.",
    actions:
      "Multiattacco. Morso e artiglio. Se ferito gravemente, diventa più aggressivo e punta il nemico più vicino.",
    tactics:
      "Carica frontalmente, protegge cuccioli o tana, e non insegue a lungo se il gruppo si ritira.",
    resistances: "Freddo leggero",
    vulnerabilities: "Fuoco, rumori metallici intensi",
  },
  {
    id: "forest-004",
    name: "Ragno dei Rami Cavi",
    biomes: ["forest", "ruins", "underdark"],
    difficulty: "Facile",
    cr: "1",
    type: "Bestia",
    role: "Imboscata",
    icon: "🕷️",
    armorClass: 14,
    hitPoints: 32,
    speed: "30 ft., scalata 30 ft.",
    tags: ["Veleno", "Ragnatela", "Imboscata"],
    description:
      "Grande ragno dal corpo sottile che vive dentro tronchi vuoti e rovine invase dalle radici.",
    story:
      "Le sue tele non brillano alla luce: sembrano capelli neri tesi tra un ramo e l’altro.",
    actions:
      "Morso velenoso. Può rallentare o intrappolare una creatura con filamenti appiccicosi.",
    tactics:
      "Attacca dall’alto, immobilizza il bersaglio più isolato e torna a nascondersi.",
    resistances: "Veleno naturale",
    vulnerabilities: "Fuoco",
  },
  {
    id: "forest-005",
    name: "Cervo dalle Corna Spezzate",
    biomes: ["forest", "grassland"],
    difficulty: "Medio",
    cr: "3",
    type: "Bestia",
    role: "Carica",
    icon: "🦌",
    armorClass: 15,
    hitPoints: 75,
    speed: "50 ft.",
    tags: ["Carica", "Territoriale", "Selvatico"],
    description:
      "Creatura enorme e inquieta, con corna fratturate coperte di muschio e sangue secco.",
    story:
      "I druidi dicono che appare quando un bosco è stato ferito troppo a lungo.",
    actions:
      "Carica con corna. Se percorre abbastanza distanza prima di colpire, infligge danni extra e può buttare a terra.",
    tactics:
      "Usa la velocità, colpisce in linea retta e difende una radura o un branco.",
    resistances: "Paura",
    vulnerabilities: "Controllo mentale, fuoco",
  },
  {
    id: "forest-006",
    name: "Manticora delle Fronde",
    biomes: ["forest", "hill", "mountain"],
    difficulty: "Medio",
    cr: "3",
    type: "Mostruosità",
    role: "Assalitore volante",
    icon: "🦁",
    armorClass: 14,
    hitPoints: 90,
    speed: "30 ft., volo 50 ft.",
    tags: ["Volante", "Spine", "Predatore"],
    description:
      "Mostro leonino con ali scure e coda irta di spine velenose, abituato a cacciare sopra le chiome.",
    story:
      "Le tribù di confine appendono campanelli agli alberi per sentire il vento cambiato dal suo volo.",
    actions:
      "Artigli e morso. Spine caudali a distanza. Può restare fuori portata e logorare il gruppo.",
    tactics:
      "Attacca dall’alto, punta incantatori e arcieri, poi si allontana tra gli alberi.",
    resistances: "Caduta, vento naturale",
    vulnerabilities: "Fulmine, reti, spazi chiusi",
  },
  {
    id: "forest-007",
    name: "Driade del Patto Marcio",
    biomes: ["forest"],
    difficulty: "Medio",
    cr: "4",
    type: "Folletto",
    role: "Controllo",
    icon: "🌿",
    armorClass: 15,
    hitPoints: 88,
    speed: "30 ft.",
    tags: ["Charme", "Radici", "Inganno"],
    description:
      "Spirito del bosco corrotto da un patto antico. Bella, triste e pericolosa.",
    story:
      "Protegge un albero malato dove qualcuno ha inciso un nome che non dovrebbe essere pronunciato.",
    actions:
      "Charme naturale. Radici vincolanti. Può muoversi attraverso alberi vicini.",
    tactics:
      "Non combatte frontalmente: divide il gruppo, immobilizza e usa il bosco come scudo.",
    resistances: "Charme, veleno",
    vulnerabilities: "Fuoco, ferro freddo",
  },
  {
    id: "forest-008",
    name: "Treant Spezzarami",
    biomes: ["forest", "ruins"],
    difficulty: "Difficile",
    cr: "9",
    type: "Pianta",
    role: "Guardiano",
    icon: "🌳",
    armorClass: 16,
    hitPoints: 138,
    speed: "30 ft.",
    tags: ["Pianta", "Guardiano", "Antico"],
    description:
      "Albero senziente antico e colossale. I suoi rami si muovono come braccia e la corteccia porta cicatrici di guerre dimenticate.",
    story:
      "Veglia su un tratto di foresta che considera sacro. Per lui gli uomini passano come stagioni, ma le ferite lasciate dalle loro asce restano.",
    actions:
      "Schianto. Attacco poderoso con ramo. Roccia scagliata. Può animare radici e arbusti vicini.",
    tactics:
      "Blocca il movimento, separa il gruppo con radici e concentra gli attacchi su chi usa fuoco o asce.",
    resistances: "Contundente, perforante",
    vulnerabilities: "Fuoco",
  },
  {
    id: "forest-009",
    name: "Drago Verde delle Fronde",
    biomes: ["forest"],
    difficulty: "Boss",
    cr: "15",
    type: "Drago",
    role: "Manipolatore",
    icon: "🐉",
    armorClass: 19,
    hitPoints: 280,
    speed: "40 ft., volo 80 ft.",
    tags: ["Drago", "Veleno", "Inganno"],
    description:
      "Drago antico delle foreste profonde, maestro di bugie, promesse e veleni sottili.",
    story:
      "Non brucia villaggi: li convince a tradirsi. Le sue tane sono piene di accordi firmati, corone spezzate e ossa coperte di muschio.",
    actions:
      "Multiattacco. Morso, artigli e coda. Soffio velenoso. Presenza terrificante.",
    tactics:
      "Parla prima di combattere, divide gli alleati, usa servitori e colpisce quando il gruppo è già logorato.",
    resistances: "Veleno",
    vulnerabilities: "Freddo, verità magica, giuramenti infranti",
  },
];