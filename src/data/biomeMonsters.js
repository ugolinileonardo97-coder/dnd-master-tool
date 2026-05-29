import { forestMonsters } from "./monsters/forestMonsters";
import { swampMonsters } from "./monsters/swampMonsters";
import { mountainMonsters } from "./monsters/mountainMonsters";
import { desertMonsters } from "./monsters/desertMonsters";
import { arcticMonsters } from "./monsters/arcticMonsters";
import { coastalMonsters } from "./monsters/coastalMonsters";
import { aquaticMonsters } from "./monsters/aquaticMonsters";
import { grasslandMonsters } from "./monsters/grasslandMonsters";
import { hillMonsters } from "./monsters/hillMonsters";
import { underdarkMonsters } from "./monsters/underdarkMonsters";
import { urbanMonsters } from "./monsters/urbanMonsters";
import { ruinsMonsters } from "./monsters/ruinsMonsters";
import { planarMonsters } from "./monsters/planarMonsters";

/*
  IMPORTANTE:
  BestiaryPanel.jsx si aspetta biomeMonsters come ARRAY.
  Quindi non trasformarlo in oggetto per bioma.

  Qui lasciamo tutti i file mostri intatti,
  ma quando un mostro compare più volte con lo stesso nome,
  lo teniamo solo nel suo bioma primario.
*/

const primaryBiomeByMonsterName = {
  "Ratto delle Cripte": "swamp",
  "Sanguisuga Gigante": "swamp",
  "Granchio Spaccaossa": "coastal",
  "Medusa delle Pozze Basse": "coastal",
  "Kraken Minore della Baia": "coastal",

  "Guardiano di Corallo": "aquatic",
  "Idra Nera Minore": "swamp",
  "Leviatano Giovane": "aquatic",
  "Drago delle Maree Spezzate": "aquatic",

  "Sciacallo delle Dune": "desert",
  "Drago Giovane di Cenere": "mountain",
  "Drago Cremisi Adulto": "mountain",

  "Capra delle Rupi Crudeli": "mountain",
  "Ogre Spaccamassi": "hill",
  "Manticora delle Fronde": "forest",
  "Chimera dei Tre Dirupi": "mountain",
  "Cinghiale Zannaspezzate": "forest",
  "Troll Radiceamara": "forest",

  "Gigante del Gelo Esiliato": "arctic",
  "Regina dei Ghiacci Vuoti": "arctic",

  "Mangiapensieri Pallido": "underdark",
  "Custode del Labirinto": "underdark",
  "Lich delle Stelle Morte": "planar",

  "Demone della Forgia": "planar",
  "Titano delle Catene": "planar",
  "Regina delle Nebbie Marce": "swamp",
  "Signora della Marea Nera": "coastal",
};

const monsterGroups = [
  { biome: "forest", monsters: forestMonsters },
  { biome: "swamp", monsters: swampMonsters },
  { biome: "mountain", monsters: mountainMonsters },
  { biome: "desert", monsters: desertMonsters },
  { biome: "arctic", monsters: arcticMonsters },
  { biome: "coastal", monsters: coastalMonsters },
  { biome: "aquatic", monsters: aquaticMonsters },
  { biome: "grassland", monsters: grasslandMonsters },
  { biome: "hill", monsters: hillMonsters },
  { biome: "underdark", monsters: underdarkMonsters },
  { biome: "urban", monsters: urbanMonsters },
  { biome: "ruins", monsters: ruinsMonsters },
  { biome: "planar", monsters: planarMonsters },
];

function shouldKeepMonsterInThisGroup(monster, currentBiome) {
  if (!monster || !monster.name) {
    return false;
  }

  const primaryBiome = primaryBiomeByMonsterName[monster.name];

  if (!primaryBiome) {
    return true;
  }

  return primaryBiome === currentBiome;
}

function removeDuplicatesByName(monsters) {
  const seen = new Set();

  return monsters.filter((monster) => {
    if (!monster || !monster.name) {
      return false;
    }

    if (seen.has(monster.name)) {
      return false;
    }

    seen.add(monster.name);
    return true;
  });
}

export const biomeMonsters = removeDuplicatesByName(
  monsterGroups.flatMap((group) =>
    group.monsters.filter((monster) =>
      shouldKeepMonsterInThisGroup(monster, group.biome)
    )
  )
);

export const allBiomeMonsters = biomeMonsters;