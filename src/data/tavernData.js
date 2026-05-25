export const tavernNames = [
  "Il Corvo Ubriaco",
  "La Lanterna Rossa",
  "Il Cinghiale d’Oro",
  "La Coppa Spezzata",
  "Il Drago Addormentato",
  "La Luna Storta",
  "Il Boccale del Viandante",
];

export const tavernReputations = [
  "Ben frequentata",
  "Neutrale",
  "Malfamata",
];

export const dishes = [
  {
    name: "Stufato del Cinghiale Nero",
    description:
      "Uno stufato denso e speziato, servito in una ciotola di terracotta annerita dal fuoco.",
    bonus:
      "+1 alle prove di Costituzione fino al prossimo riposo breve.",
    malus:
      "Svantaggio alla prima prova di Furtività per l’odore intenso di spezie.",
  },
  {
    name: "Zuppa della Luna Pallida",
    description:
      "Una zuppa chiara con funghi, erbe rare e un leggero riflesso argentato sulla superficie.",
    bonus:
      "+1 alle prove di Percezione per 4 ore.",
    malus:
      "Leggera sonnolenza: -1 all’iniziativa nel prossimo combattimento.",
  },
  {
    name: "Arrosto del Viandante",
    description:
      "Carne arrostita lentamente, servita con pane scuro, cipolle dolci e salsa al vino.",
    bonus:
      "Recuperi 1d4 punti ferita aggiuntivi durante il prossimo riposo breve.",
    malus:
      "Dopo il pasto sei appesantito: -1 alle prove di Acrobazia per 2 ore.",
  },
];

export const tavernServices = [
  {
    name: "Bagno caldo privato",
    price: "3 mo",
    description:
      "Una tinozza di acqua calda, oli profumati e un’ora di privacy.",
  },
  {
    name: "Massaggio rilassante",
    price: "5 mo",
    description:
      "Scioglie la tensione del viaggio e aiuta il recupero fisico.",
  },
  {
    name: "Compagnia riservata",
    price: "15 mo",
    description:
      "Intrattenimento elegante e discreto per chi cerca conversazione, musica o compagnia privata.",
  },
  {
    name: "Stalla e cura cavalcatura",
    price: "2 mo",
    description:
      "Foraggio, pulizia e custodia sicura per una cavalcatura.",
  },
  {
    name: "Sala privata",
    price: "10 mo",
    description:
      "Una stanza isolata per accordi, incontri segreti o discussioni lontane da orecchie indiscrete.",
  },
];

export const tavernAtmospheres = {
  "Ben frequentata": [
    "La sala è piena di mercanti, bardi e viaggiatori ben vestiti. Il vociare è allegro, il fuoco arde pulito e l’odore di arrosto riempie l’aria.",
    "L’ambiente è caldo e ordinato. Camerieri rapidi si muovono tra i tavoli, mentre una musica leggera accompagna le conversazioni.",
  ],
  Neutrale: [
    "La locanda è semplice ma accogliente. Alcuni avventurieri riposano vicino al camino, mentre il bancone porta i segni di molte notti movimentate.",
    "L’atmosfera è tranquilla, anche se non del tutto sicura. Ci sono viandanti, lavoratori, mercanti e qualche figura che preferisce restare in ombra.",
  ],
  Malfamata: [
    "L’aria è pesante di fumo, birra rancida e legno umido. Alcuni clienti incappucciati osservano ogni nuovo arrivato con attenzione eccessiva.",
    "La sala è rumorosa, sporca e pericolosa. Coltelli, sguardi storti e accordi sussurrati sembrano parte naturale dell’arredamento.",
  ],
};