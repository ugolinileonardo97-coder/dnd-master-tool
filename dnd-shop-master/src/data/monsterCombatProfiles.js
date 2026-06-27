export const monsterCombatProfiles = {
  // FORESTA
  "forest-001": {
    attackBonus: "+4",
    damage: "1d6 + 2",
    averageDamage: 5,
    damageType: "perforanti",
    damageNote: "Morso rapido. Più pericoloso se combatte in branco.",
  },
  "forest-002": {
    attackBonus: "+4",
    damage: "1d6 + 2",
    averageDamage: 5,
    damageType: "taglienti o perforanti",
    damageNote: "Lama ricurva o arco corto. Usa spesso imboscate e trappole.",
  },
  "forest-003": {
    attackBonus: "+5",
    damage: "1d8 + 4 / 2d6 + 4",
    averageDamage: 20,
    damageType: "perforanti e taglienti",
    damageNote: "Multiattacco: morso e artiglio.",
  },
  "forest-004": {
    attackBonus: "+5",
    damage: "1d8 + 3 + 2d6 veleno",
    averageDamage: 15,
    damageType: "perforanti e veleno",
    damageNote:
      "Morso velenoso. Può rallentare o bloccare una creatura con ragnatele.",
  },
  "forest-005": {
    attackBonus: "+6",
    damage: "2d8 + 4",
    averageDamage: 13,
    damageType: "contundenti",
    damageNote:
      "Carica con corna. Se prende rincorsa può buttare a terra il bersaglio.",
  },
  "forest-006": {
    attackBonus: "+6",
    damage: "1d8 + 4 / 1d10 + 4",
    averageDamage: 19,
    damageType: "taglienti e perforanti",
    damageNote:
      "Artigli, morso e spine caudali. Preferisce colpire dall’alto.",
  },
  "forest-007": {
    attackBonus: "+6",
    damage: "2d8 + 4",
    averageDamage: 13,
    damageType: "psichici o perforanti",
    damageNote:
      "Charme naturale e radici vincolanti. Più pericolosa come controllo che come danno puro.",
  },
  "forest-008": {
    attackBonus: "+10",
    damage: "3d6 + 6",
    averageDamage: 16,
    damageType: "contundenti",
    damageNote:
      "Schianto con ramo. Può usare radici e terreno come controllo.",
  },
  "forest-009": {
    attackBonus: "+11",
    damage: "2d10 + 6 + 2d6 veleno",
    averageDamage: 24,
    damageType: "perforanti e veleno",
    damageNote: "Multiattacco e soffio velenoso a ricarica.",
  },

  // PALUDE
  "swamp-001": {
    attackBonus: "+4",
    damage: "1d4 + 2",
    averageDamage: 4,
    damageType: "perforanti",
    damageNote: "Morso. In branco circonda e assale bersagli caduti.",
  },
  "swamp-002": {
    attackBonus: "+4",
    damage: "1d6 + 2",
    averageDamage: 5,
    damageType: "perforanti",
    damageNote:
      "Morso aderente. Se resta attaccata può infliggere danno continuato.",
  },
  "swamp-003": {
    attackBonus: "+4",
    damage: "1d6 + 2 + 1d6 veleno",
    averageDamage: 9,
    damageType: "perforanti e veleno",
    damageNote:
      "Pugnale rituale e maledizione fangosa. Pensato per infastidire e rallentare.",
  },
  "swamp-004": {
    attackBonus: "+7",
    damage: "2d6 + 4",
    averageDamage: 11,
    damageType: "taglienti",
    damageNote:
      "Artigli putridi e morso. Rigenera se non colpito da fuoco o acido.",
  },
  "swamp-005": {
    attackBonus: "+8",
    damage: "1d10 + 5",
    averageDamage: 10,
    damageType: "perforanti",
    damageNote: "Morsi multipli. Sputo acido a ricarica.",
  },
  "swamp-006": {
    attackBonus: "+8",
    damage: "4d8",
    averageDamage: 18,
    damageType: "necrotici",
    damageNote:
      "Dardo ematico e maledizioni. Pericolosa contro guaritori e incantatori.",
  },

  // MONTAGNA
  "mountain-001": {
    attackBonus: "+6",
    damage: "1d12 + 6",
    averageDamage: 13,
    damageType: "taglienti",
    damageNote:
      "Ascia frantumante. Ottimo contro bersagli con scudo o armatura.",
  },
  "mountain-002": {
    attackBonus: "+8",
    damage: "2d10 + 5",
    averageDamage: 16,
    damageType: "perforanti o fuoco",
    damageNote: "Morso, artigli e soffio di cenere a ricarica.",
  },
  "mountain-003": {
    attackBonus: "+13",
    damage: "3d12 + 8",
    averageDamage: 27,
    damageType: "contundenti",
    damageNote: "Catena colossale. Portata lunga e possibilità di afferrare.",
  },

  // DESERTO
  "desert-001": {
    attackBonus: "+4",
    damage: "1d4 + 2",
    averageDamage: 4,
    damageType: "perforanti",
    damageNote: "Morso rapido. Diventa più efficace in branco.",
  },
  "desert-002": {
    attackBonus: "+9",
    damage: "2d10 + 6",
    averageDamage: 17,
    damageType: "contundenti",
    damageNote: "Pugno cristallino. Può usare nube salina per accecare.",
  },

  // SOTTOSUOLO
  "underdark-001": {
    attackBonus: "—",
    damage: "0",
    averageDamage: 0,
    damageType: "nessuno",
    damageNote:
      "Non è una creatura offensiva: serve come allarme vivente e può attirare mostri vicini.",
  },
  "underdark-002": {
    attackBonus: "+4",
    damage: "1d6 + 2",
    averageDamage: 5,
    damageType: "perforanti",
    damageNote: "Morso in volo. Più pericoloso se attacca in branco.",
  },
  "underdark-003": {
    attackBonus: "+7",
    damage: "2d6 + 5",
    averageDamage: 12,
    damageType: "taglienti",
    damageNote: "Falcata gemella. Ottima nelle imboscate dall’alto.",
  },
  "underdark-004": {
    attackBonus: "+8",
    damage: "3d8 + 4",
    averageDamage: 17,
    damageType: "psichici",
    damageNote:
      "Artiglio psichico e onda mentale. Molto pericoloso contro personaggi con bassa Saggezza.",
  },
  "underdark-005": {
    attackBonus: "+10",
    damage: "2d12 + 6",
    averageDamage: 19,
    damageType: "taglienti",
    damageNote: "Ascia labirintica e carica. Spinge e separa il gruppo.",
  },

  // URBANO
  "urban-001": {
    attackBonus: "+5",
    damage: "1d6 + 3",
    averageDamage: 6,
    damageType: "perforanti",
    damageNote:
      "Pugnale o balestrino. Può infliggere danni extra se ha vantaggio.",
  },
  "urban-002": {
    attackBonus: "+5",
    damage: "1d8 + 3",
    averageDamage: 7,
    damageType: "perforanti o taglienti",
    damageNote:
      "Lancia o spada corta. Può chiamare rinforzi se combatte in città.",
  },
  "urban-003": {
    attackBonus: "+5",
    damage: "1d8 + 3",
    averageDamage: 7,
    damageType: "acido o contundenti",
    damageNote:
      "Morso adesivo e pseudopodo. Può trattenere una creatura colpita.",
  },
  "urban-004": {
    attackBonus: "+8",
    damage: "1d8 + 4 + 4d6 veleno",
    averageDamage: 23,
    damageType: "perforanti e veleno",
    damageNote:
      "Lama avvelenata. Letale contro bersagli sorpresi o isolati.",
  },
  "urban-005": {
    attackBonus: "+11",
    damage: "1d8 + 5 + 3d6 necrotici",
    averageDamage: 20,
    damageType: "taglienti e necrotici",
    damageNote: "Artigli, morso regale e comando oscuro.",
  },

  // ACQUATICO
  "aquatic-001": {
    attackBonus: "+5",
    damage: "2d6 + 2",
    averageDamage: 9,
    damageType: "perforanti",
    damageNote:
      "Morsi multipli. Più pericoloso contro creature ferite o immerse in acqua.",
  },
  "aquatic-002": {
    attackBonus: "+7",
    damage: "2d8 + 4",
    averageDamage: 13,
    damageType: "contundenti e taglienti",
    damageNote:
      "Pugno corallino e schegge. Può rallentare creature che nuotano vicino a lui.",
  },
  "aquatic-003": {
    attackBonus: "+8",
    damage: "2d10 + 5",
    averageDamage: 16,
    damageType: "perforanti",
    damageNote:
      "Morso e avvolgimento. Può trattenere e trascinare una creatura verso il basso.",
  },
  "aquatic-004": {
    attackBonus: "+12",
    damage: "4d10 + 8",
    averageDamage: 30,
    damageType: "perforanti o contundenti",
    damageNote:
      "Morso devastante, colpo di coda e ondata. Può colpire anche imbarcazioni.",
  },

  // COSTIERO
  "coastal-001": {
    attackBonus: "+4",
    damage: "1d8 + 2",
    averageDamage: 6,
    damageType: "contundenti",
    damageNote:
      "Chela. Può afferrare una creatura piccola o media se colpisce.",
  },
  "coastal-002": {
    attackBonus: "+6",
    damage: "2d8 + 3",
    averageDamage: 12,
    damageType: "psichici o taglienti",
    damageNote:
      "Canto ammaliante e artiglio marino. Molto pericolosa vicino all’acqua.",
  },
  "coastal-003": {
    attackBonus: "+4",
    damage: "1d8 + 2",
    averageDamage: 6,
    damageType: "taglienti o perforanti",
    damageNote:
      "Sciabola e balestra leggera. Combatte sporco e usa coperture.",
  },
  "coastal-004": {
    attackBonus: "+11",
    damage: "2d10 + 6 + 2d8 freddo",
    averageDamage: 26,
    damageType: "perforanti e freddo",
    damageNote:
      "Multiattacco, soffio salmastro e controllo delle onde costiere.",
  },

  // ARTICO
  "arctic-001": {
    attackBonus: "+5",
    damage: "1d8 + 3",
    averageDamage: 7,
    damageType: "perforanti e freddo",
    damageNote:
      "Morso gelido. In branco può buttare a terra il bersaglio.",
  },
  "arctic-002": {
    attackBonus: "+7",
    damage: "2d8 + 5",
    averageDamage: 14,
    damageType: "freddo e contundenti",
    damageNote:
      "Schianto gelido e raffica. Crea terreno difficile intorno a sé.",
  },
  "arctic-003": {
    attackBonus: "+9",
    damage: "3d12 + 6",
    averageDamage: 25,
    damageType: "taglienti o contundenti",
    damageNote:
      "Ascia enorme e rocce scagliate. Può spingere i nemici nella neve profonda.",
  },
  "arctic-004": {
    attackBonus: "+14",
    damage: "2d10 + 8 + 2d8 freddo",
    averageDamage: 28,
    damageType: "perforanti e freddo",
    damageNote:
      "Multiattacco, soffio gelido e presenza terrificante. Boss artico totale.",
  },

  // COLLINE
  "hill-001": {
    attackBonus: "+4",
    damage: "1d4 + 2",
    averageDamage: 4,
    damageType: "perforanti",
    damageNote:
      "Pugnale o fionda. La vera minaccia sono trappole e terreno preparato.",
  },
  "hill-002": {
    attackBonus: "+5",
    damage: "1d8 + 3",
    averageDamage: 7,
    damageType: "perforanti o taglienti",
    damageNote:
      "Arco corto e lama. Attacca dall’alto e tenta la fuga se perde vantaggio.",
  },
  "hill-003": {
    attackBonus: "+7",
    damage: "2d8 + 5",
    averageDamage: 14,
    damageType: "contundenti",
    damageNote:
      "Clava di pietra e rocce scagliate. Usa pendii e massi come armi.",
  },
  "hill-004": {
    attackBonus: "+8",
    damage: "2d6 + 5 + 2d6 fuoco",
    averageDamage: 19,
    damageType: "taglienti e fuoco",
    damageNote:
      "Morso, corna, artigli e soffio infuocato. Minaccia mobile e aggressiva.",
  },

  // PRATERIA
  "grassland-001": {
    attackBonus: "+4",
    damage: "1d6 + 2",
    averageDamage: 5,
    damageType: "perforanti",
    damageNote:
      "Morso. In branco diventa più pericolosa contro bersagli caduti.",
  },
  "grassland-002": {
    attackBonus: "+6",
    damage: "1d8 + 4",
    averageDamage: 8,
    damageType: "perforanti",
    damageNote:
      "Arco lungo, lancia e carica con zoccoli. Ottimo in campo aperto.",
  },
  "grassland-003": {
    attackBonus: "+7",
    damage: "2d10 + 5",
    averageDamage: 16,
    damageType: "perforanti",
    damageNote:
      "Corno e carica devastante. Travolge bersagli in linea retta.",
  },
  "grassland-004": {
    attackBonus: "+10",
    damage: "4d8 + 7",
    averageDamage: 25,
    damageType: "taglienti",
    damageNote:
      "Artigli e becco. Può afferrare creature e lasciarle cadere dall’alto.",
  },

  // ROVINE
  "ruins-001": {
    attackBonus: "+4",
    damage: "1d8 + 2",
    averageDamage: 6,
    damageType: "taglienti",
    damageNote:
      "Lama ossidata o arco sepolcrale. Combatte bene in formazione.",
  },
  "ruins-002": {
    attackBonus: "+7",
    damage: "2d6 + 4 + 1d8 necrotici",
    averageDamage: 16,
    damageType: "taglienti e necrotici",
    damageNote: "Spadone spettrale. Duellante molto resistente.",
  },

  // PLANARE
  "planar-001": {
    attackBonus: "+10",
    damage: "2d8 + 6 + 2d6 fuoco",
    averageDamage: 22,
    damageType: "contundenti e fuoco",
    damageNote: "Martello infernale e soffio di scorie.",
  },
  "planar-002": {
    attackBonus: "+12",
    damage: "4d8 + 5",
    averageDamage: 23,
    damageType: "necrotici e freddo",
    damageNote:
      "Tocco della stella spenta e incantesimi di alto livello.",
  },
  "planar-003": {
    attackBonus: "+16",
    damage: "6d10 + 10",
    averageDamage: 43,
    damageType: "necrotici e forza",
    damageNote:
      "Divorazione reale, ondata apocalittica e presenza del collasso.",
  },
};

export function getMonsterCombatProfile(monster) {
  if (monster?.combat) {
    return monster.combat;
  }

  const profile = monsterCombatProfiles[monster.id];

  if (profile) {
    return profile;
  }

  return {
    attackBonus: "—",
    damage: "Variabile",
    averageDamage: "—",
    damageType: "Variabile",
    damageNote:
      "Danno non ancora definito. Puoi usarlo come creatura narrativa o completare il profilo in seguito.",
  };
}
