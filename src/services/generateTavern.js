import {
  tavernNamePatterns,
  tavernLocations,
  tavernSmells,
  tavernSounds,
  tavernClientele,
  tavernOddDetails,
  innkeeperLooks,
  innkeeperSecrets,
  dishNames,
  dishDescriptions,
  dishBonuses,
  dishMaluses,
} from "../data/generationPools/tavernPools";

import { tavernServices } from "../data/tavernData";

import {
  getDishPriceByLevel,
  getDishTierByLevel,
  getRoomPriceByTier,
  getRoomTierByLevel,
  randomNumber,
} from "../data/pricingRules";

const races = [
  "Umano",
  "Nano",
  "Elfo",
  "Mezzelfo",
  "Halfling",
  "Tiefling",
  "Dragonide",
  "Gnomo",
  "Mezzorco",
  "Tabaxi",
];

const names = [
  "Borin",
  "Mira",
  "Doran",
  "Seraphina",
  "Rurik",
  "Nym",
  "Kael",
  "Eldrin",
  "Vex",
  "Maela",
  "Torgar",
  "Iria",
  "Branna",
  "Odrik",
  "Silas",
];

const personalities = [
  "cordiale ma furbo",
  "burbero ma protettivo",
  "elegante e calcolatore",
  "rumoroso e sempre sorridente",
  "silenzioso e sospettoso",
  "materno ma severo",
  "gentile solo con chi paga in anticipo",
  "allegro in pubblico ma cupo quando resta solo",
  "raffinato nei modi e spietato negli affari",
];

const sideQuests = [
  {
    quest:
      "Un cliente abituale è sparito dopo aver preso una stanza al secondo piano.",
    reward:
      "Alloggio gratuito per tre notti e informazioni su una figura sospetta.",
  },
  {
    quest:
      "Una banda locale pretende denaro dalla locanda ogni settimana.",
    reward:
      "Sconto permanente sui servizi e accesso a una stanza privata.",
  },
  {
    quest:
      "Nel seminterrato si sentono rumori durante la notte, ma nessuno osa scendere.",
    reward: "Una chiave antica trovata sotto il bancone e 50 mo.",
  },
  {
    quest:
      "Un ospite incappucciato ha lasciato una borsa sigillata chiedendo di non aprirla fino all’alba.",
    reward: "Una pozione rara e il favore del locandiere.",
  },
  {
    quest:
      "Qualcuno sta avvelenando lentamente le botti migliori della cantina.",
    reward: "Vitto gratuito per una settimana e 75 mo.",
  },
];

const roomDescriptions = [
  "Minimalista e pulita, perfetta per chi vuole solo dormire in pace.",
  "Camera con scrivania, scaffale e un candeliere a tre braccia.",
  "Camera accogliente con un piccolo camino, coperte calde e un tappeto di pelle.",
  "Letto cigolante, lenzuola pulite ma ruvide, una candela sul comodino.",
  "Stanza spaziosa con letto a baldacchino e una vasca per lavarsi.",
  "Camera ordinata, con baule ai piedi del letto e una brocca d’acqua fresca.",
  "Stanza profumata di cera, legno antico e lavanda secca.",
  "Una piccola stanza calda, con travi scure e una finestra sulla strada.",
];

const roomNamesByTier = {
  Squallida: ["Pagliericcio", "Stanza Umida", "Branda Comune"],
  Povera: ["Stanza Comune", "Stanza Stretta", "Branda del Viandante"],
  Modesta: ["Stanza Singola", "Stanza Doppia", "Camera del Viandante"],
  Confortevole: ["Camera Privata", "Stanza Doppia", "Camera con Camino"],
  Ricca: ["Suite del Mercante", "Camera Nobile", "Camera Padronale"],
  Aristocratica: [
    "Suite Aristocratica",
    "Appartamento Privato",
    "Camera del Conte",
  ],
};

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function buildTavernName() {
  const pattern = randomItem(tavernNamePatterns);
  return pattern.join(" ");
}

function getRoomCountByLevel(level) {
  if (level <= 4) return randomNumber(3, 5);
  if (level <= 8) return randomNumber(4, 6);
  if (level <= 12) return randomNumber(5, 7);
  if (level <= 16) return randomNumber(6, 8);
  return randomNumber(7, 10);
}

function getRoomTierPoolByLevel(level) {
  if (level <= 4) {
    return ["Povera", "Modesta", "Modesta"];
  }

  if (level <= 8) {
    return ["Modesta", "Confortevole", "Confortevole"];
  }

  if (level <= 12) {
    return ["Modesta", "Confortevole", "Ricca"];
  }

  if (level <= 16) {
    return ["Confortevole", "Ricca", "Ricca"];
  }

  return ["Ricca", "Aristocratica", "Aristocratica"];
}

function buildRooms(level) {
  const roomCount = getRoomCountByLevel(level);
  const tierPool = getRoomTierPoolByLevel(level);

  return Array.from({ length: roomCount }, () => {
    const tier = randomItem(tierPool);
    const name = randomItem(roomNamesByTier[tier] || roomNamesByTier.Modesta);
    const isOccupied = Math.random() < 0.25;

    return {
      name,
      tier,
      description: randomItem(roomDescriptions),
      status: isOccupied ? "Occupata" : "Disponibile",
      price: getRoomPriceByTier(tier),
    };
  });
}

function randomServices(level) {
  const serviceCount =
    level <= 5
      ? randomNumber(2, 3)
      : level <= 10
        ? randomNumber(3, 4)
        : level <= 15
          ? randomNumber(4, 5)
          : randomNumber(5, 6);

  return [...tavernServices]
    .sort(() => Math.random() - 0.5)
    .slice(0, serviceCount);
}

function getReputationByLevel(level) {
  if (level <= 5) {
    return randomItem(["Malfamata", "Neutrale", "Neutrale"]);
  }

  if (level <= 10) {
    return randomItem(["Neutrale", "Ben frequentata", "Malfamata"]);
  }

  if (level <= 15) {
    return randomItem(["Ben frequentata", "Neutrale"]);
  }

  return randomItem(["Ben frequentata", "Ben frequentata", "Neutrale"]);
}

function getGoldByLevel(level) {
  if (level <= 5) return randomNumber(80, 250);
  if (level <= 10) return randomNumber(250, 700);
  if (level <= 15) return randomNumber(700, 1400);
  return randomNumber(1400, 3000);
}

function buildInnkeeperDescription(name, race, personality) {
  return (
    `${name} è un ${race.toLowerCase()} ${personality}. ` +
    `${randomItem(innkeeperLooks)}. ` +
    `Gestisce la locanda con l’istinto di chi ha imparato a riconoscere il valore di una persona dal modo in cui apre la porta, posa le armi o chiede da bere. ` +
    `Dietro i suoi modi si intuisce che ${randomItem(innkeeperSecrets)}.`
  );
}

function buildTavernDescription(tavernName, reputation) {
  return (
    `${tavernName} ${randomItem(tavernLocations)}. ` +
    `All’interno l’aria sa di ${randomItem(tavernSmells)}. ` +
    `${randomItem(tavernSounds)}. ` +
    `La clientela è composta soprattutto da ${randomItem(tavernClientele)}. ` +
    `Notate subito che ${randomItem(tavernOddDetails)}. ` +
    `La locanda è considerata ${reputation.toLowerCase()} da chi vive nei dintorni.`
  );
}

function buildDish(level) {
  const tier = getDishTierByLevel(level);

  return {
    name: randomItem(dishNames),
    description: randomItem(dishDescriptions),
    bonus: randomItem(dishBonuses),
    malus: randomItem(dishMaluses),
    tier,
    price: getDishPriceByLevel(level),
  };
}

export function generateTavern(level = 1) {
  const numericLevel = Number(level);
  const name = randomItem(names);
  const race = randomItem(races);
  const tavernName = buildTavernName();
  const reputation = getReputationByLevel(numericLevel);
  const personality = randomItem(personalities);
  const dish = buildDish(numericLevel);
  const rooms = buildRooms(numericLevel);

  const hasSideQuest = Math.random() > 0.35;
  const quest = hasSideQuest ? randomItem(sideQuests) : null;

  return {
    id: Date.now(),
    type: "tavern",

    name,
    race,
    shopName: tavernName,
    tavernName,
    reputation,
    personality,

    discount: randomItem(["Basso", "Medio", "Alto"]),

    gold: getGoldByLevel(numericLevel),
    shopTier: reputation,

    roomsAvailable: rooms.filter((room) => room.status === "Disponibile")
      .length,
    roomPrice: getRoomPriceByTier(getRoomTierByLevel(numericLevel)),
    rooms,

    dishName: dish.name,
    dishDescription: dish.description,
    dishBonus: dish.bonus,
    dishMalus: dish.malus,
    dishTier: dish.tier,
    dishPrice: dish.price,

    services: randomServices(numericLevel),

    story: buildInnkeeperDescription(name, race, personality),

    locationDescription: buildTavernDescription(tavernName, reputation),

    sideQuest: quest ? quest.quest : "Nessuna side quest disponibile.",
    reward: quest ? quest.reward : "-",

    notes: "",
    inventory: [],
  };
}