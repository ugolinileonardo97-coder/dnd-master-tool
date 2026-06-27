export const ruinsMonsters = [
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
    tags: ["Non morto", "Antico regno", "Guardia"],
    description:
      "Resti animati di soldati appartenuti a un regno ormai estinto. Combattono ancora secondo antiche formazioni.",
    story:
      "Quando il Vecchio Regno cadde, i suoi giuramenti non morirono con i soldati. Le ossa marciarono ancora, guidate da ordini che nessun vivo ricorda.",
    actions:
      "Lama ossidata. Arco sepolcrale. Combatte bene in gruppo e mantiene la posizione anche contro nemici superiori.",
    tactics:
      "Tiene la linea, protegge ingressi e non abbandona mai la zona assegnata.",
    resistances: "Veleno",
    vulnerabilities: "Contundente",
    combat: {
      attackBonus: "+4",
      damage: "1d8 + 2",
      averageDamage: 6,
      damageType: "taglienti",
      damageNote:
        "Lama ossidata o arco sepolcrale. Combatte bene in formazione.",
    },
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
      "Era un campione che tradì il proprio ordine. Ora vaga senza corpo, condannato a difendere rovine e tombe che nessuno reclama più.",
    actions:
      "Spadone spettrale. Due attacchi, con danni taglienti e necrotici.",
    tactics:
      "Sfida il combattente più forte e ignora provocazioni minori.",
    resistances: "Necrotico, armi non magiche",
    vulnerabilities: "Radiante",
    combat: {
      attackBonus: "+7",
      damage: "2d6 + 4 + 1d8 necrotici",
      averageDamage: 16,
      damageType: "taglienti e necrotici",
      damageNote: "Spadone spettrale. Duellante molto resistente.",
    },
  },
  {
    id: "ruins-003",
    name: "Mimic da Sarcofago",
    biomes: ["ruins", "urban"],
    difficulty: "Facile",
    cr: "2",
    type: "Mostruosità",
    role: "Imboscata",
    icon: "⚰️",
    armorClass: 13,
    hitPoints: 64,
    speed: "15 ft.",
    tags: ["Mimetismo", "Trappola", "Adesivo"],
    description:
      "Creatura capace di imitare un sarcofago, una cassa votiva o una porta rituale. Resta immobile per giorni aspettando mani curiose.",
    story:
      "Molti saccheggiatori credono di essere morti per una maledizione. In realtà hanno semplicemente aperto la tomba sbagliata.",
    actions:
      "Morso adesivo. Pseudopodo. Può trattenere una creatura se la colpisce.",
    tactics:
      "Aspetta che qualcuno lo tocchi, blocca il bersaglio e combatte in spazi stretti.",
    resistances: "Acido",
    vulnerabilities: "Fuoco, freddo intenso",
    combat: {
      attackBonus: "+5",
      damage: "1d8 + 3",
      averageDamage: 7,
      damageType: "acido o contundenti",
      damageNote:
        "Morso adesivo e pseudopodo. Può trattenere il bersaglio e renderlo facile da colpire.",
    },
  },
  {
    id: "ruins-004",
    name: "Statua Sentinella",
    biomes: ["ruins"],
    difficulty: "Facile",
    cr: "2",
    type: "Costrutto",
    role: "Guardiano",
    icon: "🗿",
    armorClass: 16,
    hitPoints: 72,
    speed: "25 ft.",
    tags: ["Costrutto", "Guardiano", "Tempio"],
    description:
      "Statua antica animata da rune quasi spente. Si muove lentamente, ma ogni colpo sembra quello di una colonna che crolla.",
    story:
      "Fu scolpita per proteggere una soglia sacra. Anche se il tempio è caduto, il comando inciso nella pietra è rimasto.",
    actions:
      "Pugno di pietra. Può spingere una creatura o bloccare un passaggio con il proprio corpo.",
    tactics:
      "Resta tra gli intrusi e l’obiettivo da proteggere. Non insegue lontano.",
    resistances: "Veleno, psichico, perforante non magico",
    vulnerabilities: "Tuono, contundente pesante",
    combat: {
      attackBonus: "+6",
      damage: "2d8 + 4",
      averageDamage: 13,
      damageType: "contundenti",
      damageNote:
        "Pugno di pietra. Ottimo per spingere, bloccare corridoi e proteggere ingressi.",
    },
  },
  {
    id: "ruins-005",
    name: "Custode delle Chiavi Rotte",
    biomes: ["ruins", "urban"],
    difficulty: "Medio",
    cr: "3",
    type: "Non morto",
    role: "Controllo",
    icon: "🗝️",
    armorClass: 15,
    hitPoints: 86,
    speed: "30 ft.",
    tags: ["Non morto", "Carceriere", "Chiavi"],
    description:
      "Vecchio carceriere non morto coperto di chiavi arrugginite. Ogni chiave apre una porta, una cella o una ferita.",
    story:
      "Quando la prigione cadde, lui chiuse tutte le celle dall’esterno e rimase a contare i prigionieri morti.",
    actions:
      "Mazza del carceriere. Catena di chiavi. Può rallentare o bloccare temporaneamente un bersaglio.",
    tactics:
      "Tiene i nemici a distanza, blocca vie di fuga e separa il gruppo con porte, cancelli o catene.",
    resistances: "Necrotico, veleno",
    vulnerabilities: "Radiante",
    combat: {
      attackBonus: "+6",
      damage: "2d6 + 4",
      averageDamage: 11,
      damageType: "contundenti e necrotici",
      damageNote:
        "Colpo con mazzo di chiavi e catene. Più utile come controllo che come danno puro.",
    },
  },
  {
    id: "ruins-006",
    name: "Ombra del Sacerdote Murato",
    biomes: ["ruins"],
    difficulty: "Medio",
    cr: "4",
    type: "Non morto",
    role: "Debuff",
    icon: "🕯️",
    armorClass: 14,
    hitPoints: 92,
    speed: "0 ft., volo 40 ft.",
    tags: ["Spirito", "Ombra", "Maledizione"],
    description:
      "Spirito nero e sottile, ancora avvolto da brandelli di vesti sacerdotali. Le sue mani attraversano armature e pelle come fumo gelido.",
    story:
      "Fu murato vivo dai suoi stessi fedeli per impedire che rivelasse un segreto del tempio.",
    actions:
      "Tocco gelido. Sussurro blasfemo. Può indebolire temporaneamente Forza o Saggezza.",
    tactics:
      "Evita la mischia frontale, attraversa muri e colpisce chi resta isolato.",
    resistances: "Necrotico, freddo, armi non magiche",
    vulnerabilities: "Radiante",
    combat: {
      attackBonus: "+6",
      damage: "2d8 + 4",
      averageDamage: 13,
      damageType: "necrotici",
      damageNote:
        "Tocco gelido. Può indebolire il bersaglio e attraversare ostacoli fisici.",
    },
  },
  {
    id: "ruins-007",
    name: "Guardiano di Bronzo",
    biomes: ["ruins"],
    difficulty: "Medio",
    cr: "5",
    type: "Costrutto",
    role: "Difensore",
    icon: "🛡️",
    armorClass: 18,
    hitPoints: 128,
    speed: "30 ft.",
    tags: ["Costrutto", "Bronzo", "Guardiano"],
    description:
      "Guerriero artificiale di bronzo annerito, con occhi simili a carboni accesi e movimenti scanditi da ingranaggi interni.",
    story:
      "Fu costruito per proteggere reliquie reali. Ogni generazione ha dimenticato il suo nome, ma lui non ha dimenticato il proprio dovere.",
    actions:
      "Lama di bronzo. Scudo pesante. Può intercettare un attacco diretto a un alleato o a una reliquia.",
    tactics:
      "Protegge un punto preciso, spinge indietro i nemici e punisce chi prova ad aggirarlo.",
    resistances: "Veleno, psichico, perforante",
    vulnerabilities: "Fulmine",
    combat: {
      attackBonus: "+7",
      damage: "2d10 + 5",
      averageDamage: 16,
      damageType: "taglienti",
      damageNote:
        "Lama di bronzo. Può usare lo scudo per proteggere oggetti o creature importanti.",
    },
  },
  {
    id: "ruins-008",
    name: "Mummia della Sala Sigillata",
    biomes: ["ruins", "desert"],
    difficulty: "Difficile",
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
    id: "ruins-009",
    name: "Mantide delle Rovine",
    biomes: ["ruins", "underdark", "desert"],
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
    combat: {
      attackBonus: "+7",
      damage: "2d6 + 5",
      averageDamage: 12,
      damageType: "taglienti",
      damageNote:
        "Falcata gemella. Ottima nelle imboscate dall’alto e nei corridoi rotti.",
    },
  },
  {
    id: "ruins-010",
    name: "Archivista Senza Volto",
    biomes: ["ruins", "urban", "planar"],
    difficulty: "Difficile",
    cr: "7",
    type: "Aberrazione",
    role: "Sapiente ostile",
    icon: "📜",
    armorClass: 16,
    hitPoints: 142,
    speed: "30 ft.",
    tags: ["Aberrazione", "Memoria", "Archivio"],
    description:
      "Figura alta e sottile senza volto, vestita con pergamene cucite tra loro. Ruba nomi, ricordi e segreti scritti.",
    story:
      "Nacque in una biblioteca maledetta quando troppe verità furono cancellate insieme.",
    actions:
      "Lama di pergamena. Furto di memoria. Può impedire a una creatura di usare una competenza o ricordare un dettaglio importante.",
    tactics:
      "Evita i combattenti pesanti, colpisce incantatori e personaggi con conoscenze importanti.",
    resistances: "Psichico",
    vulnerabilities: "Fuoco, silenzio magico",
    combat: {
      attackBonus: "+8",
      damage: "3d8 + 4",
      averageDamage: 17,
      damageType: "psichici o taglienti",
      damageNote:
        "Lama di pergamena e furto di memoria. Può disabilitare risorse narrative o mentali.",
    },
  },
  {
    id: "ruins-011",
    name: "Golem di Sale",
    biomes: ["ruins", "desert"],
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
    id: "ruins-012",
    name: "Custode del Labirinto",
    biomes: ["ruins", "underdark"],
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
    combat: {
      attackBonus: "+10",
      damage: "2d12 + 6",
      averageDamage: 19,
      damageType: "taglienti",
      damageNote:
        "Ascia labirintica e carica. Spinge, separa e punisce chi resta isolato.",
    },
  },
  {
    id: "ruins-013",
    name: "Lich delle Stelle Morte",
    biomes: ["ruins", "planar", "underdark"],
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
    combat: {
      attackBonus: "+12",
      damage: "4d8 + 5",
      averageDamage: 23,
      damageType: "necrotici e freddo",
      damageNote:
        "Tocco della stella spenta e incantesimi di alto livello. Boss da usare con preparazione narrativa.",
    },
  },
  {
    id: "ruins-014",
    name: "Drago Antico d’Ossidiana",
    biomes: ["ruins", "mountain", "planar"],
    difficulty: "Boss",
    cr: "20",
    type: "Drago",
    role: "Boss territoriale",
    icon: "🐉",
    image: "/monsters/19-drago-antico-ossidiana.png",
    armorClass: 22,
    hitPoints: 430,
    speed: "40 ft., volo 80 ft.",
    tags: ["Drago", "Ossidiana", "Antico"],
    description:
      "Drago dalle scaglie nere e lucide come vetro vulcanico. Riflette fiamme, volti e paure sulla propria corazza.",
    story:
      "Dorme sotto montagne morte, circondato da statue fuse. I suoi tesori sono imperi falliti e profezie mai compiute.",
    actions:
      "Multiattacco antico. Morso, artigli e coda. Soffio d’ossidiana con fuoco e schegge taglienti.",
    tactics:
      "Controlla il campo, distrugge coperture e costringe il gruppo a muoversi.",
    resistances: "Fuoco, tagliente, perforante",
    vulnerabilities: "Freddo antico",
    combat: {
      attackBonus: "+14",
      damage: "2d10 + 8 + 2d8 fuoco",
      averageDamage: 28,
      damageType: "perforanti e fuoco",
      damageNote:
        "Multiattacco antico e soffio d’ossidiana. Incontro da fine arco narrativo.",
    },
  },
  {
    id: "ruins-015",
    name: "Divoratore di Regni",
    biomes: ["ruins", "planar"],
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
    combat: {
      attackBonus: "+16",
      damage: "6d10 + 10",
      averageDamage: 43,
      damageType: "necrotici e forza",
      damageNote:
        "Divorazione reale e ondata apocalittica. Non è un mostro normale: è un evento di campagna.",
    },
  },
];
