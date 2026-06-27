export const desertMonsters = [
  {
    id: "desert-001",
    name: "Sciacallo delle Dune",
    biomes: ["desert", "grassland"],
    difficulty: "Semplice",
    cr: "1/4",
    type: "Bestia",
    role: "Predatore",
    icon: "🐕",
    armorClass: 12,
    hitPoints: 13,
    speed: "40 ft.",
    tags: ["Deserto", "Branco", "Caccia"],
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
    id: "desert-002",
    name: "Serpente della Sabbia",
    biomes: ["desert"],
    difficulty: "Semplice",
    cr: "1/2",
    type: "Bestia",
    role: "Agguato",
    icon: "🐍",
    armorClass: 13,
    hitPoints: 24,
    speed: "30 ft., scavare 20 ft.",
    tags: ["Veleno", "Sabbia", "Agguato"],
    description:
      "Serpente dal colore della sabbia calda, quasi invisibile quando resta immobile tra le dune.",
    story:
      "I nomadi osservano sempre il vento prima di sedersi: se la sabbia si muove contro corrente, spesso non è sabbia.",
    actions:
      "Morso velenoso. Può emergere dalla sabbia e colpire con sorpresa.",
    tactics:
      "Rimane nascosto, colpisce il primo che passa vicino e si ritira sotto la sabbia.",
    resistances: "Caldo naturale",
    vulnerabilities: "Freddo, vibrazioni forti",
    combat: {
      attackBonus: "+4",
      damage: "1d6 + 2 + 1d6 veleno",
      averageDamage: 9,
      damageType: "perforanti e veleno",
      damageNote:
        "Morso velenoso da imboscata. Perfetto per rendere pericolosa una sosta nel deserto.",
    },
  },
  {
    id: "desert-003",
    name: "Scarabeo del Sole Morto",
    biomes: ["desert", "ruins"],
    difficulty: "Semplice",
    cr: "1/2",
    type: "Bestia",
    role: "Sciame corazzato",
    icon: "🪲",
    armorClass: 15,
    hitPoints: 28,
    speed: "30 ft., scavare 10 ft.",
    tags: ["Insetto", "Sole", "Carapace"],
    description:
      "Insetto grande quanto un elmo, con carapace dorato e nero. Si nutre di resti essiccati e tessuti funerari.",
    story:
      "Nelle tombe antiche, il suono del loro carapace contro la pietra viene spesso scambiato per monete che cadono.",
    actions:
      "Mandibole. Può attaccare in gruppo e rosicchiare cuoio, pergamene e bende.",
    tactics:
      "Assale in numero, entra da fessure basse e punta oggetti organici o creature cadute.",
    resistances: "Perforante leggero",
    vulnerabilities: "Tuono, fuoco",
    combat: {
      attackBonus: "+4",
      damage: "1d6 + 2",
      averageDamage: 5,
      damageType: "taglienti",
      damageNote:
        "Mandibole robuste. Più fastidioso in sciame o dentro tombe piene di passaggi stretti.",
    },
  },
  {
    id: "desert-004",
    name: "Predone del Miraggio",
    biomes: ["desert"],
    difficulty: "Facile",
    cr: "1",
    type: "Umanoide",
    role: "Predone",
    icon: "🏹",
    armorClass: 14,
    hitPoints: 34,
    speed: "30 ft.",
    tags: ["Bandito", "Deserto", "Imboscata"],
    description:
      "Bandito del deserto avvolto in veli chiari, esperto nel colpire da lontano e sparire dietro dune e riflessi.",
    story:
      "Non attacca le carovane più ricche, ma quelle più assetate. Sa che la disperazione vale più dell’oro.",
    actions:
      "Arco ricurvo. Scimitarra. Può usare sabbia e luce per nascondersi.",
    tactics:
      "Colpisce portatori d’acqua, animali da soma e guide. Fugge se il gruppo mantiene la formazione.",
    resistances: "Caldo naturale",
    vulnerabilities: "Freddo, combattimento in spazi chiusi",
    combat: {
      attackBonus: "+5",
      damage: "1d8 + 3",
      averageDamage: 7,
      damageType: "perforanti o taglienti",
      damageNote:
        "Arco ricurvo o scimitarra. Minaccia tattica se il gruppo è stanco o assetato.",
    },
  },
  {
    id: "desert-005",
    name: "Scorpione Vetroso",
    biomes: ["desert", "ruins"],
    difficulty: "Facile",
    cr: "2",
    type: "Bestia",
    role: "Veleno",
    icon: "🦂",
    armorClass: 15,
    hitPoints: 58,
    speed: "40 ft.",
    tags: ["Veleno", "Sabbia", "Carapace"],
    description:
      "Scorpione grande come un mastino, con carapace quasi trasparente che riflette sole e torce.",
    story:
      "I suoi pungiglioni vengono venduti come amuleti, ma molti cacciatori muoiono prima di poterne staccare uno.",
    actions:
      "Chele. Pungiglione velenoso. Può afferrare una creatura piccola o media.",
    tactics:
      "Afferra con le chele, punge bersagli bloccati e sfrutta buche o rovine basse.",
    resistances: "Veleno",
    vulnerabilities: "Contundente pesante, freddo",
    combat: {
      attackBonus: "+6",
      damage: "1d8 + 3 + 2d6 veleno",
      averageDamage: 14,
      damageType: "perforanti e veleno",
      damageNote:
        "Pungiglione velenoso. Se riesce ad afferrare, diventa molto più pericoloso.",
    },
  },
  {
    id: "desert-006",
    name: "Iena delle Ossa Secche",
    biomes: ["desert", "grassland"],
    difficulty: "Facile",
    cr: "2",
    type: "Bestia",
    role: "Branco",
    icon: "🐕",
    armorClass: 13,
    hitPoints: 52,
    speed: "50 ft.",
    tags: ["Branco", "Ossa", "Caccia"],
    description:
      "Iena grande e deformata, con mascelle capaci di spezzare ossa asciutte come rami.",
    story:
      "Segue eserciti, carestie e spedizioni fallite. Quando ride, sembra imitare le ultime parole dei morenti.",
    actions:
      "Morso spaccaossa. Può infliggere danni extra a bersagli caduti o sanguinanti.",
    tactics:
      "Circonda, butta a terra, morde e arretra. Non entra in mischia se il branco non ha vantaggio.",
    resistances: "Paura",
    vulnerabilities: "Fuoco, rumori forti",
    combat: {
      attackBonus: "+5",
      damage: "2d6 + 3",
      averageDamage: 10,
      damageType: "perforanti",
      damageNote:
        "Morso spaccaossa. Più pericolosa se il bersaglio è già caduto o circondato.",
    },
  },
  {
    id: "desert-007",
    name: "Derviscio della Tempesta",
    biomes: ["desert", "planar"],
    difficulty: "Medio",
    cr: "3",
    type: "Elementale",
    role: "Controllo area",
    icon: "🌪️",
    armorClass: 15,
    hitPoints: 82,
    speed: "0 ft., volo 50 ft.",
    tags: ["Vento", "Sabbia", "Elementale"],
    description:
      "Turbine semisenziente di sabbia e vento caldo, con frammenti di ossa e vetro sospesi al suo interno.",
    story:
      "Nasce dove un’intera carovana muore durante una tempesta. Da allora continua a cercare viaggiatori da aggiungere al proprio vortice.",
    actions:
      "Taglio di sabbia. Raffica accecante. Può spostare creature leggere e creare visibilità ridotta.",
    tactics:
      "Divide il gruppo, spegne torce, acceca arcieri e costringe a muoversi in terreno difficile.",
    resistances: "Perforante, tagliente non magico",
    vulnerabilities: "Freddo, acqua abbondante",
    combat: {
      attackBonus: "+6",
      damage: "2d8 + 3",
      averageDamage: 12,
      damageType: "taglienti",
      damageNote:
        "Taglio di sabbia e raffica accecante. Ottimo per incontri durante tempeste.",
    },
  },
  {
    id: "desert-008",
    name: "Mummia della Sala Sigillata",
    biomes: ["desert", "ruins"],
    difficulty: "Medio",
    cr: "6",
    type: "Non morto",
    role: "Maledizione",
    icon: "🧻",
    armorClass: 15,
    hitPoints: 136,
    speed: "25 ft.",
    tags: ["Mummia", "Maledizione", "Tomba"],
    description:
      "Corpo imbalsamato avvolto in bende scure e sigilli spezzati. La sua presenza rende l’aria secca e pesante.",
    story:
      "La sala fu sigillata non per proteggere la mummia dai ladri, ma per proteggere il mondo dalla mummia.",
    actions:
      "Pugno putrefatto. Sguardo terrificante. Può infliggere una maledizione che impedisce la guarigione completa.",
    tactics:
      "Avanza lentamente, terrorizza i più deboli e punisce chi profana oggetti sacri.",
    resistances: "Necrotico, veleno",
    vulnerabilities: "Fuoco, radiante",
    combat: {
      attackBonus: "+8",
      damage: "2d8 + 5 + 2d6 necrotici",
      averageDamage: 21,
      damageType: "contundenti e necrotici",
      damageNote:
        "Pugno putrefatto. Può aggiungere una maledizione che rende più difficile guarire.",
    },
  },
  {
    id: "desert-009",
    name: "Sfinge delle Dune Minori",
    biomes: ["desert", "ruins"],
    difficulty: "Difficile",
    cr: "7",
    type: "Mostruosità",
    role: "Guardiano sapiente",
    icon: "🦁",
    armorClass: 17,
    hitPoints: 150,
    speed: "40 ft., volo 60 ft.",
    tags: ["Enigma", "Guardiano", "Deserto"],
    description:
      "Creatura leonina alata dal volto severo, custode di soglie, tombe e conoscenze proibite.",
    story:
      "Non combatte sempre. A volte chiede una risposta. A volte la risposta giusta è solo il modo più lento di morire.",
    actions:
      "Artigli. Ruggito dell’enigma. Può confondere o immobilizzare chi fallisce una prova mentale.",
    tactics:
      "Testa il gruppo prima con parole, poi con artigli. Punisce gli impulsivi e rispetta chi ragiona.",
    resistances: "Psichico, charme",
    vulnerabilities: "Silenzio magico, arroganza sfruttata",
    combat: {
      attackBonus: "+8",
      damage: "2d10 + 5",
      averageDamage: 16,
      damageType: "taglienti o psichici",
      damageNote:
        "Artigli e ruggito dell’enigma. Molto utile come guardiano non solo combattivo.",
    },
  },
  {
    id: "desert-010",
    name: "Drago Giovane di Cenere",
    biomes: ["desert", "mountain", "ruins"],
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
    combat: {
      attackBonus: "+8",
      damage: "2d10 + 5",
      averageDamage: 16,
      damageType: "perforanti o fuoco",
      damageNote:
        "Morso, artigli e soffio di cenere. Perfetto per deserti vulcanici o campi bruciati.",
    },
  },
  {
    id: "desert-011",
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
    combat: {
      attackBonus: "+9",
      damage: "2d10 + 6",
      averageDamage: 17,
      damageType: "contundenti",
      damageNote:
        "Pugno cristallino. Può usare una nube salina per accecare temporaneamente.",
    },
  },
  {
    id: "desert-012",
    name: "Signore degli Scorpioni",
    biomes: ["desert"],
    difficulty: "Estremo",
    cr: "11",
    type: "Mostruosità",
    role: "Boss predatore",
    icon: "🦂",
    armorClass: 19,
    hitPoints: 245,
    speed: "40 ft., scavare 30 ft.",
    tags: ["Scorpione", "Boss", "Veleno"],
    description:
      "Creatura colossale con carapace nero e oro, che emerge dalle dune come una fortezza vivente.",
    story:
      "Intere tribù migrano quando compaiono i suoi segni: dune bucate, ossa lucidate e pozzi prosciugati.",
    actions:
      "Chele titaniche. Pungiglione velenoso. Può afferrare due creature e colpirne una terza con la coda.",
    tactics:
      "Afferra, separa, avvelena e si immerge nella sabbia se il combattimento diventa sfavorevole.",
    resistances: "Veleno, perforante non magico",
    vulnerabilities: "Freddo, tuono",
    combat: {
      attackBonus: "+11",
      damage: "3d10 + 6 + 2d8 veleno",
      averageDamage: 32,
      damageType: "perforanti e veleno",
      damageNote:
        "Chele e pungiglione. Boss fisico devastante, perfetto per dune o arene naturali.",
    },
  },
  {
    id: "desert-013",
    name: "Regina Mummia del Sole Nero",
    biomes: ["desert", "ruins"],
    difficulty: "Estremo",
    cr: "13",
    type: "Non morto",
    role: "Boss incantatore",
    icon: "☀️",
    armorClass: 18,
    hitPoints: 260,
    speed: "30 ft.",
    tags: ["Mummia", "Sole Nero", "Maledizione"],
    description:
      "Sovrana imbalsamata con una corona annerita e bende ricamate d’oro. La luce sembra spegnersi intorno a lei.",
    story:
      "Governò un regno che venerava un sole morto. Quando il suo impero cadde, ordinò che il tramonto venisse sepolto con lei.",
    actions:
      "Tocco della sabbia nera. Comando sepolcrale. Può evocare servitori e maledire chi porta oggetti rubati dalla tomba.",
    tactics:
      "Usa servitori, maledizioni e controllo del campo. Punisce chi profana reliquie o si avvicina troppo.",
    resistances: "Necrotico, veleno, psichico",
    vulnerabilities: "Radiante puro, acqua consacrata",
    combat: {
      attackBonus: "+11",
      damage: "4d10 + 6",
      averageDamage: 28,
      damageType: "necrotici",
      damageNote:
        "Tocco della sabbia nera e maledizioni. Boss ideale per tombe reali e piramidi perdute.",
    },
  },
  {
    id: "desert-014",
    name: "Drago Cremisi Adulto",
    biomes: ["desert", "mountain"],
    difficulty: "Boss",
    cr: "13",
    type: "Drago",
    role: "Boss territoriale",
    icon: "🐉",
    image: "/monsters/14-drago-cremisi-adulto.png",
    armorClass: 19,
    hitPoints: 280,
    speed: "40 ft., volo 80 ft.",
    tags: ["Drago", "Fuoco", "Adulto"],
    description:
      "Drago adulto dalle scaglie rosso scuro e dalle corna annerite. Ogni suo respiro porta odore di pietra fusa.",
    story:
      "Ha conquistato montagne, città e culti. Non accumula solo oro: pretende giuramenti, statue e nomi cancellati dalla storia.",
    actions:
      "Multiattacco. Morso e due artigli. Soffio cremisi a ricarica.",
    tactics:
      "Domina dall’alto, brucia coperture e costringe il gruppo a dividersi.",
    resistances: "Fuoco",
    vulnerabilities: "Freddo",
    combat: {
      attackBonus: "+11",
      damage: "2d10 + 6 + 2d8 fuoco",
      averageDamage: 26,
      damageType: "perforanti e fuoco",
      damageNote:
        "Multiattacco e soffio cremisi. Boss classico da deserto vulcanico o città bruciata.",
    },
  },
  {
    id: "desert-015",
    name: "Colosso delle Dune Sepolte",
    biomes: ["desert", "planar"],
    difficulty: "Boss",
    cr: "18",
    type: "Costrutto",
    role: "Boss ambientale",
    icon: "🏜️",
    armorClass: 22,
    hitPoints: 410,
    speed: "30 ft., scavare 40 ft.",
    tags: ["Colosso", "Sabbia", "Boss"],
    description:
      "Gigante artificiale sepolto sotto le dune, composto da pietra, bronzo e sabbia compressa. Quando si alza, il paesaggio cambia.",
    story:
      "Fu costruito come guardiano di un regno cancellato dalla sabbia. Ora protegge solo il vuoto, ma non sa che il suo re è morto.",
    actions:
      "Pugno monumentale. Tempesta di sabbia. Passo sismico. Può seppellire parti del campo di battaglia.",
    tactics:
      "Non insegue: trasforma il terreno, crea tempeste e costringe il gruppo a scegliere tra fuga e sacrificio.",
    resistances: "Fuoco, veleno, perforante, tagliente",
    vulnerabilities: "Fulmine rituale, acqua sacra, comandi reali perduti",
    combat: {
      attackBonus: "+14",
      damage: "5d10 + 8",
      averageDamage: 36,
      damageType: "contundenti",
      damageNote:
        "Pugno monumentale e tempesta di sabbia. Boss ambientale per finali in deserto o città sepolte.",
    },
  },
];