export const biomeMonsters = [
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
    id: "forest-005",
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
    id: "swamp-003",
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
    id: "swamp-004",
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
  {
    id: "mountain-001",
    name: "Orco Spezzascudi",
    biomes: ["mountain", "hill", "ruins"],
    difficulty: "Facile",
    cr: "2",
    type: "Umanoide",
    role: "Bruto",
    icon: "🪓",
    image: "/monsters/04-orco-spezzascudi.png",
    armorClass: 15,
    hitPoints: 68,
    speed: "30 ft.",
    tags: ["Orco", "Assalto", "Bruto"],
    description:
      "Orco addestrato a rompere linee nemiche, porte e scudi. La sua ascia è più un attrezzo da demolizione che un’arma.",
    story:
      "Gli Spezzascudi vengono mandati per primi nelle cariche tribali. Sopravvivere a tre assalti significa guadagnare rispetto.",
    actions:
      "Ascia frantumante. Se colpisce un bersaglio con scudo, può sbilanciarlo o ridurre la sua difesa temporaneamente.",
    tactics:
      "Carica il fronte, punta il difensore più pesante e apre spazio agli alleati.",
    resistances: "Paura",
    vulnerabilities: "Magia mentale",
  },
  {
    id: "mountain-002",
    name: "Drago Giovane di Cenere",
    biomes: ["mountain", "desert", "ruins"],
    difficulty: "Difficile",
    cr: "7",
    type: "Drago",
    role: "Assalitore",
    icon: "🐉",
    image: "/monsters/09-drago-giovane-cenere.png",
    armorClass: 17,
    hitPoints: 178,
    speed: "40 ft., volo 80 ft.",
    tags: ["Drago", "Fuoco", "Cenere"],
    description:
      "Drago giovane nato tra vulcani spenti e campi bruciati. Le ali sollevano nuvole di cenere soffocante.",
    story:
      "Non custodisce oro, ma resti carbonizzati: armi fuse, corone annerite e ossa fragili come carbone.",
    actions:
      "Morso e artigli. Soffio di cenere a ricarica, con danni da fuoco e possibile accecamento.",
    tactics:
      "Vola, separa il gruppo con il soffio e atterra solo quando ha un bersaglio isolato.",
    resistances: "Fuoco",
    vulnerabilities: "Freddo",
  },
  {
    id: "mountain-003",
    name: "Titano delle Catene",
    biomes: ["mountain", "planar", "ruins"],
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
  },
  {
    id: "desert-001",
    name: "Sciacallo delle Dune",
    biomes: ["desert"],
    difficulty: "Semplice",
    cr: "1/4",
    type: "Bestia",
    role: "Predatore",
    icon: "🐕",
    armorClass: 12,
    hitPoints: 13,
    speed: "40 ft.",
    tags: ["Deserto", "Branco"],
    description:
      "Creatura sottile e resistente, capace di seguire una carovana per giorni aspettando il momento giusto.",
    story:
      "Quando una carovana perde un animale o un viaggiatore resta indietro, gli sciacalli sono già lì.",
    actions:
      "Morso rapido. Se combatte con altri sciacalli, ottiene vantaggio tattico contro bersagli isolati.",
    tactics:
      "Non combatte fino alla morte. Morde, arretra e aspetta che sete e fatica facciano il resto.",
    resistances: "Caldo naturale",
    vulnerabilities: "Freddo improvviso",
  },
  {
    id: "desert-002",
    name: "Golem di Sale",
    biomes: ["desert", "ruins"],
    difficulty: "Difficile",
    cr: "9",
    type: "Costrutto",
    role: "Guardiano",
    icon: "🧂",
    image: "/monsters/11-golem-sale.png",
    armorClass: 18,
    hitPoints: 190,
    speed: "25 ft.",
    tags: ["Costrutto", "Sale", "Guardiano"],
    description:
      "Massa umanoide di cristalli salini, pesante e scricchiolante. Ogni colpo libera schegge bianche e polvere irritante.",
    story:
      "Creato da sacerdoti del deserto per proteggere tombe, pozzi sacri e segreti lasciati sotto il sole.",
    actions:
      "Pugno cristallino. Nube salina a ricarica, capace di accecare temporaneamente.",
    tactics:
      "Blocca passaggi stretti, acceca il gruppo e protegge un luogo preciso senza inseguire lontano.",
    resistances: "Tagliente, perforante non magico",
    vulnerabilities: "Acqua, fulmine",
  },
  {
    id: "underdark-001",
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
    id: "underdark-002",
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
    tags: ["Urbano", "Furtivo"],
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
  },
  {
    id: "urban-002",
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
  },
  {
    id: "ruins-001",
    name: "Scheletro del Vecchio Regno",
    biomes: ["ruins", "underdark"],
    difficulty: "Facile",
    cr: "1",
    type: "Non morto",
    role: "Guardia",
    icon: "💀",
    image: "/monsters/03-scheletro-vecchio-regno.png",
    armorClass: 14,
    hitPoints: 45,
    speed: "30 ft.",
    tags: ["Non morto", "Antico regno"],
    description:
      "Resti animati di soldati appartenuti a un regno ormai estinto. Combattono ancora secondo antiche formazioni.",
    story:
      "Quando il Vecchio Regno cadde, i suoi giuramenti non morirono con i soldati.",
    actions:
      "Lama ossidata. Arco sepolcrale. Combatte bene in gruppo.",
    tactics:
      "Tiene la linea, protegge ingressi e non abbandona mai la zona assegnata.",
    resistances: "Veleno",
    vulnerabilities: "Contundente",
  },
  {
    id: "ruins-002",
    name: "Cavaliere Vuoto",
    biomes: ["ruins", "underdark", "planar"],
    difficulty: "Medio",
    cr: "4",
    type: "Non morto",
    role: "Duellante",
    icon: "⚔️",
    image: "/monsters/06-cavaliere-vuoto.png",
    armorClass: 18,
    hitPoints: 110,
    speed: "30 ft.",
    tags: ["Non morto", "Corazzato", "Cavaliere"],
    description:
      "Armatura animata da un’anima consumata. Dentro l’elmo non c’è volto, solo buio e un respiro metallico.",
    story:
      "Era un campione che tradì il proprio ordine. Ora vaga senza corpo, condannato a difendere rovine e tombe.",
    actions:
      "Spadone spettrale. Due attacchi, con danni taglienti e necrotici.",
    tactics:
      "Sfida il combattente più forte e ignora provocazioni minori.",
    resistances: "Necrotico, armi non magiche",
    vulnerabilities: "Radiante",
  },
  {
    id: "planar-001",
    name: "Demone della Forgia",
    biomes: ["planar", "ruins", "mountain"],
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
  },
  {
    id: "planar-002",
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
  },
  {
    id: "planar-003",
    name: "Divoratore di Regni",
    biomes: ["planar"],
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
  },
];