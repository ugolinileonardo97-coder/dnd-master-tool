import React, { useEffect, useMemo, useRef, useState } from "react";
import { alignmentOptions, getAlignmentLabel } from "../data/alignments";
import { loadExtendedBestiary } from "../data/bestiary";
import { biomes } from "../data/biomes";
import {
  getMerchantRegionLabel,
  merchantRegions,
} from "../data/merchantRegions";
import { merchantReputations } from "../data/merchantReputations";
import {
  getPrestigeLabel,
  normalizePrestige,
  prestigeOptions,
} from "../data/prestige";
import { buildPlayableMonsterActions } from "../utils/monsterRules";
import { getMonsterXp } from "../utils/monsterXpTable";
import { formatAbilityModifier, getAbilityLabel } from "../utils/monsterStats";
import { combatConditions } from "../data/combatConditions";
import {
  createEncounterMonsterFromBestiary,
  getDexModifierFromActor,
  getDexScoreFromActor,
} from "../utils/combatMonsterFactory";
import { readCombatState, writeCombatState } from "../utils/combatStorage";
import { MapGenerator } from "../components/maps/MapGenerator";
import {
  filterWeapons,
  getWeaponFilterOptions,
  loadWeaponCatalog,
  sortWeapons,
  toInventoryWeapon,
  weaponSortOptions,
} from "../data/weapons/index.js";
import { MobileBottomNav } from "./MobileBottomNav";
import { MobileHeader } from "./MobileHeader";
import "./mobile-base44.css";

const screenLabels = {
  home: "Home",
  merchants: "Mercanti",
  merchantDetail: "Mercante",
  itemDetail: "Oggetto",
  taverns: "Locande",
  tavernDetail: "Locanda",
  bestiary: "Bestiario",
  monsterDetail: "Mostro",
  combat: "Combatti",
  map: "Mappa",
  mapRegion: "Zona",
  settings: "Impostazioni",
};

const merchantTabs = ["Panoramica", "Inventario", "Quest", "Modifica", "Mappa"];
const tavernTabs = ["Panoramica", "Ospitalita", "Piatto", "Quest", "Modifica", "Mappa"];
const monsterTabs = ["Azioni", "Statistiche", "Descrizione"];
const combatTabs = ["Preparazione", "Turno", "Ordine"];
const emptyCombatCharacter = {
  name: "",
  level: 1,
  armorClass: 10,
  maxHp: 10,
  currentHp: 10,
  dexScore: 10,
  initiative: "",
};
const biomeIconFallbacks = {
  generic: "🧭",
  coastal: "⚓",
  mountain: "⛰️",
  forest: "🌲",
  desert: "🏜️",
  urban: "🏰",
  frontier: "🏕️",
  rural: "🌾",
  underdark: "🕳️",
  ruins: "🏛️",
  arctic: "❄️",
  swamp: "🐸",
};
const mobileInventoryCategories = [
  { key: "Armi", label: "Armi", icon: "⚔️" },
  { key: "Armature", label: "Armature", icon: "🛡️" },
  { key: "Pozioni", label: "Pozioni", icon: "🧪" },
  { key: "Oggetti", label: "Oggetti", icon: "📦" },
  { key: "Varie", label: "Varie", icon: "🎒" },
];

function getMapRegion(item, fallback = "generic") {
  return item?.mapRegion || item?.geographicRegion || item?.region || item?.area || fallback;
}

function parseCr(cr) {
  const value = String(cr || "0");
  if (value.includes("/")) {
    const [top, bottom] = value.split("/").map(Number);
    return bottom ? top / bottom : 0;
  }
  return Number(value) || 0;
}

function BadgeRow({ children }) {
  return <div className="b44-badges">{children}</div>;
}

function TabBar({ tabs, active, onChange }) {
  return (
    <div className="b44-tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          className={active === tab ? "active" : ""}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

function EmptyState({ children }) {
  return <div className="b44-empty">{children}</div>;
}

function getItemQuantity(item) {
  return item?.quantity || item?.qty || 1;
}

function getItemEffect(item) {
  return item?.effect || "Nessun effetto speciale.";
}

function getItemDamage(item) {
  return item?.damage || "N/A";
}

function getMobileItemCategory(item) {
  return ["Armi", "Armature", "Pozioni", "Oggetti"].includes(item?.category)
    ? item.category
    : "Varie";
}

function createMobileId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function clampHp(value, max) {
  const numericValue = Number(value) || 0;
  const numericMax = Number(max) || 0;
  return Math.max(0, Math.min(numericValue, numericMax));
}

function getInitiativeTotal(actor) {
  const total = Number(actor?.initiativeTotal ?? actor?.initiative ?? 0);
  return Number.isFinite(total) ? total : 0;
}

function getActorStatus(actor) {
  if (!actor || Number(actor.currentHp || 0) > 0) return "";
  return actor.actorType === "monster" || actor.monsterId ? "Sconfitto" : "A terra";
}

function getConditionName(condition) {
  return typeof condition === "string" ? condition : condition?.name || "";
}

function getConditionText(actor) {
  const conditions = (actor?.conditions || []).map(getConditionName).filter(Boolean);
  return conditions.length ? conditions.join(", ") : "Nessuna";
}

function getMonsterVisual(monster, size = "small") {
  if (monster?.image) {
    return <img src={monster.image} alt="" loading="lazy" />;
  }

  return <span>{monster?.icon || (size === "large" ? "🐉" : "👹")}</span>;
}

function getBiomeIcon(regionId) {
  return biomeIconFallbacks[regionId] || "🧭";
}

function toMonsterTextList(value) {
  if (Array.isArray(value)) {
    return value.filter(Boolean).map((item) => String(item).trim()).filter(Boolean);
  }

  if (typeof value === "string") {
    return value.split(",").map((item) => item.trim()).filter(Boolean);
  }

  if (value && typeof value === "object") {
    return Object.values(value).filter(Boolean).map((item) => String(item).trim()).filter(Boolean);
  }

  return [];
}

function getMonsterActionText(action) {
  if (!action) return "";
  if (typeof action === "string") return action;
  return action.name || action.title || action.description || action.damage || "";
}

function getCompactMonsterText(value, maxLength = 72) {
  const text = String(value || "").trim();
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 3)}...`;
}

function getMonsterBiomeText(monster) {
  const biomes = toMonsterTextList(monster?.biomes || monster?.biome);
  return biomes.slice(0, 2).join(", ") || "Bioma n.d.";
}

function getMonsterPrimaryAction(monster) {
  const actions = Array.isArray(monster?.actions) ? monster.actions : [];
  const technicalActions = Array.isArray(monster?.technicalActions) ? monster.technicalActions : [];
  const actionText = typeof monster?.actions === "string" ? monster.actions : "";

  return getCompactMonsterText(
    monster?.combat?.damageNote ||
    monster?.combat?.damage ||
    getMonsterActionText(actions[0]) ||
    getMonsterActionText(technicalActions[0]) ||
    actionText ||
    "Azione n.d."
  );
}

function getMonsterTraitsText(monster) {
  const tags = toMonsterTextList(monster?.tags);
  const resistances = toMonsterTextList(monster?.resistances).map((item) => `Res. ${item}`);
  const vulnerabilities = toMonsterTextList(monster?.vulnerabilities).map((item) => `Vuln. ${item}`);
  const traits = [
    ...tags,
    ...resistances,
    ...vulnerabilities,
  ].filter(Boolean);

  return traits.length ? traits.join(", ") : "Nessun tratto speciale registrato.";
}

function getMonsterLootText(monster) {
  const loot = toMonsterTextList(monster?.loot || monster?.treasure);
  return loot.length ? loot.join(", ") : "Loot non specificato.";
}

export function MobileBase44App(props) {
  const {
    activeSessionName,
    activeSessionId,
    sessionRegion,
    partyLevel,
    generationPrestigeMode = "random",
    merchants = [],
    favoriteMonsterIds = [],
    savedSessions = [],
    onAddGeneratedMerchant,
    onSelectMerchant,
    onToggleMerchantFavorite,
    onUpdateMerchant,
    onDeleteMerchant,
    onAddInventoryItem,
    onDeleteInventoryItem,
    onToggleFavoriteMonster,
    onAddMonsterToCombat,
    onChangeSessionRegion,
    onChangePartyLevel,
    onChangeGenerationPrestigeMode,
    onSaveCurrentSession,
    onCreateEmptySession,
    onLoadSession,
    onDeleteSession,
  } = props;

  const [screen, setScreen] = useState("home");
  const [selectedId, setSelectedId] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedMonsterId, setSelectedMonsterId] = useState(null);
  const [baseMonsters, setBaseMonsters] = useState([]);
  const [extendedMonsters, setExtendedMonsters] = useState([]);
  const [extendedMonstersError, setExtendedMonstersError] = useState("");
  const [selectedRegionId, setSelectedRegionId] = useState(sessionRegion || "generic");
  const [mobileMapTab, setMobileMapTab] = useState("biomes");
  const [merchantTab, setMerchantTab] = useState("Panoramica");
  const [merchantInventoryCategory, setMerchantInventoryCategory] = useState("Armi");
  const [weaponCatalogOpen, setWeaponCatalogOpen] = useState(false);
  const [weaponCatalog, setWeaponCatalog] = useState([]);
  const [weaponCatalogLoading, setWeaponCatalogLoading] = useState(false);
  const [weaponCatalogError, setWeaponCatalogError] = useState("");
  const [weaponCatalogRetryKey, setWeaponCatalogRetryKey] = useState(0);
  const [visibleWeaponCount, setVisibleWeaponCount] = useState(20);
  const [weaponFilters, setWeaponFilters] = useState({
    search: "",
    category: "",
    rarity: "",
    biome: "",
    damageType: "",
    minLevel: 1,
    maxLevel: 20,
    sortBy: "rarity",
  });
  const [confirmDeleteMerchant, setConfirmDeleteMerchant] = useState(false);
  const [listDeleteMerchantId, setListDeleteMerchantId] = useState(null);
  const [listDeleteTavernId, setListDeleteTavernId] = useState(null);
  const [pendingPrestigeChange, setPendingPrestigeChange] = useState(null);
  const [tavernTab, setTavernTab] = useState("Panoramica");
  const [monsterTab, setMonsterTab] = useState("Azioni");
  const [combatTab, setCombatTab] = useState("Preparazione");
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [monsterFavoritesOnly, setMonsterFavoritesOnly] = useState(false);
  const [monsterSearch, setMonsterSearch] = useState("");
  const [biomeFilter, setBiomeFilter] = useState("all");
  const [crFilter, setCrFilter] = useState("all");
  const [monsterTypeFilter, setMonsterTypeFilter] = useState("all");
  const [monsterRoleFilter, setMonsterRoleFilter] = useState("all");
  const [visibleMonsterCount, setVisibleMonsterCount] = useState(30);
  const savedCombatState = useMemo(() => readCombatState(), []);
  const lastWrittenCombatStateRef = useRef("");
  const [combatRound, setCombatRound] = useState(savedCombatState?.round || 1);
  const [combatTurnIndex, setCombatTurnIndex] = useState(savedCombatState?.currentTurnIndex || 0);
  const [combatParty, setCombatParty] = useState(savedCombatState?.party || []);
  const [combatMonsters, setCombatMonsters] = useState(savedCombatState?.encounterMonsters || []);
  const [combatCharacterDraft, setCombatCharacterDraft] = useState(emptyCombatCharacter);
  const [combatMonsterSearch, setCombatMonsterSearch] = useState("");
  const [combatSelectedMonsterId, setCombatSelectedMonsterId] = useState("");
  const [combatTargetId, setCombatTargetId] = useState(savedCombatState?.selectedTargetId || "");
  const [combatValue, setCombatValue] = useState(savedCombatState?.damageAmount || "");
  const [combatCondition, setCombatCondition] = useState(combatConditions[0] || "");
  const [confirmCombatReset, setConfirmCombatReset] = useState(false);

  const shops = merchants.filter((item) => item.type !== "tavern");
  const taverns = merchants.filter((item) => item.type === "tavern");
  const selectedMerchant = shops.find((item) => item.id === selectedId) || null;
  const selectedTavern = taverns.find((item) => item.id === selectedId) || null;
  const selectedItem = selectedMerchant?.inventory?.find((item) => item.id === selectedItemId);
  const favoriteMonsterSet = useMemo(
    () => new Set(favoriteMonsterIds || []),
    [favoriteMonsterIds]
  );
  const mobileBestiary = useMemo(() => {
    const seen = new Set();
    return [...baseMonsters, ...extendedMonsters].filter((monster) => {
      const key = monster?.id || monster?.name;
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, [baseMonsters, extendedMonsters]);
  const selectedMonster = mobileBestiary.find((monster) => monster.id === selectedMonsterId);
  const safeWeaponCatalog = Array.isArray(weaponCatalog) ? weaponCatalog : [];
  const weaponFilterOptions = useMemo(
    () => getWeaponFilterOptions(safeWeaponCatalog),
    [safeWeaponCatalog]
  );
  const filteredWeaponResults = useMemo(() => {
    const filtered = filterWeapons(safeWeaponCatalog, weaponFilters);
    return sortWeapons(filtered, weaponFilters.sortBy);
  }, [safeWeaponCatalog, weaponFilters]);
  const visibleWeapons = useMemo(
    () => filteredWeaponResults.slice(0, visibleWeaponCount),
    [filteredWeaponResults, visibleWeaponCount]
  );
  const monsterTypeOptions = useMemo(
    () => [...new Set(mobileBestiary.map((monster) => monster.type).filter(Boolean))].sort(),
    [mobileBestiary]
  );
  const monsterRoleOptions = useMemo(
    () => [...new Set(mobileBestiary.map((monster) => monster.role).filter(Boolean))].sort(),
    [mobileBestiary]
  );

  const filteredMonsters = useMemo(() => {
    const search = monsterSearch.trim().toLowerCase();
    return mobileBestiary.filter((monster) => {
      const cr = parseCr(monster.cr);
      const monsterBiomes = toMonsterTextList(monster.biomes || monster.biome);
      const matchesBiome = biomeFilter === "all" || monsterBiomes.includes(biomeFilter);
      const matchesSearch =
        !search ||
        [
          monster.name,
          monster.type,
          monster.role,
          monster.cr,
          monster.description,
          monster.tactics,
          monsterBiomes.join(" "),
          toMonsterTextList(monster.tags).join(" "),
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(search);
      const matchesCr =
        crFilter === "all" ||
        (crFilter === "low" && cr <= 0.5) ||
        (crFilter === "mid" && cr >= 1 && cr <= 3) ||
        (crFilter === "high" && cr >= 4);
      const matchesType = monsterTypeFilter === "all" || monster.type === monsterTypeFilter;
      const matchesRole = monsterRoleFilter === "all" || monster.role === monsterRoleFilter;
      const matchesFavorite =
        !monsterFavoritesOnly || favoriteMonsterSet.has(monster.id);
      return matchesBiome && matchesSearch && matchesCr && matchesType && matchesRole && matchesFavorite;
    });
  }, [
    biomeFilter,
    crFilter,
    favoriteMonsterSet,
    mobileBestiary,
    monsterFavoritesOnly,
    monsterRoleFilter,
    monsterSearch,
    monsterTypeFilter,
  ]);
  const visibleFilteredMonsters = filteredMonsters.slice(0, visibleMonsterCount);
  const hasMoreMonsters = visibleMonsterCount < filteredMonsters.length;

  const mapRegions = merchantRegions.map((region) => {
    const regionItems = merchants.filter((item) => getMapRegion(item) === region.id);
    return {
      ...region,
      shops: regionItems.filter((item) => item.type !== "tavern"),
      taverns: regionItems.filter((item) => item.type === "tavern"),
    };
  });
  const filteredCombatMonsters = useMemo(() => {
    const search = combatMonsterSearch.trim().toLowerCase();
    if (!search) return mobileBestiary.slice(0, 80);

    return mobileBestiary
      .filter((monster) =>
        [monster.name, monster.type, monster.role, monster.cr]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(search)
      )
      .slice(0, 80);
  }, [combatMonsterSearch, mobileBestiary]);
  const combatInitiativeOrder = useMemo(() => {
    const partyActors = combatParty.map((character, index) => ({
      ...character,
      actorType: "character",
      initiativeTotal: getInitiativeTotal(character),
      dexScore: getDexScoreFromActor(character),
      dexMod: getDexModifierFromActor(character),
      insertionOrder: character.insertionOrder ?? index,
    }));
    const monsterActors = combatMonsters.map((monster, index) => ({
      ...monster,
      actorType: "monster",
      initiativeTotal: getInitiativeTotal(monster),
      dexScore: getDexScoreFromActor(monster),
      dexMod: getDexModifierFromActor(monster),
      insertionOrder: monster.insertionOrder ?? combatParty.length + index,
    }));

    return [...partyActors, ...monsterActors].sort((a, b) => {
      const initiativeDifference = getInitiativeTotal(b) - getInitiativeTotal(a);
      if (initiativeDifference !== 0) return initiativeDifference;

      const dexDifference = getDexScoreFromActor(b) - getDexScoreFromActor(a);
      if (dexDifference !== 0) return dexDifference;

      if (a.actorType !== b.actorType) return a.actorType === "character" ? -1 : 1;
      return (a.insertionOrder || 0) - (b.insertionOrder || 0);
    });
  }, [combatMonsters, combatParty]);
  const safeCombatTurnIndex =
    combatInitiativeOrder.length && combatTurnIndex < combatInitiativeOrder.length
      ? combatTurnIndex
      : 0;
  const activeCombatActor = combatInitiativeOrder[safeCombatTurnIndex] || null;
  const combatTargets = [...combatParty, ...combatMonsters];
  const selectedCombatTarget = combatTargets.find((actor) => actor.id === combatTargetId) || null;

  useEffect(() => {
    const shouldLoadBestiary =
      screen === "bestiary" || screen === "monsterDetail" || screen === "combat";

    if (!shouldLoadBestiary) {
      return;
    }

    let isMounted = true;
    setExtendedMonstersError("");

    if (baseMonsters.length === 0) {
      import("../data/biomeMonsters.js")
        .then((module) => {
          if (isMounted) setBaseMonsters(module.biomeMonsters || []);
        })
        .catch((error) => {
          if (isMounted) {
            setExtendedMonstersError(
              error?.message || "Archivio mostri base non disponibile."
            );
          }
        });
    }

    if (extendedMonsters.length === 0) {
      loadExtendedBestiary()
        .then((monsters) => {
          if (isMounted) setExtendedMonsters(monsters);
        })
        .catch((error) => {
          if (isMounted) {
            setExtendedMonstersError(
              error?.message || "Archivio mostri esteso non disponibile."
            );
          }
        });
    }

    return () => {
      isMounted = false;
    };
  }, [baseMonsters.length, extendedMonsters.length, screen]);

  useEffect(() => {
    if (!weaponCatalogOpen) {
      setWeaponCatalogLoading(false);
      return;
    }

    if (weaponCatalog.length > 0) {
      setWeaponCatalogLoading(false);
      return;
    }

    let isMounted = true;
    const controller = new AbortController();

    async function loadMobileWeaponCatalog() {
      setWeaponCatalogLoading(true);
      setWeaponCatalogError("");

      try {
        const catalog = await loadWeaponCatalog({
          signal: controller.signal,
          timeoutMs: 8000,
        });

        if (!isMounted) return;

        const safeCatalog = Array.isArray(catalog) ? catalog : [];
        setWeaponCatalog(safeCatalog);

        if (safeCatalog.length === 0) {
          setWeaponCatalogError("Catalogo armi vuoto o non valido.");
        }
      } catch (error) {
        if (!isMounted || error?.name === "AbortError") return;

        console.error("Weapon catalog load failed", error);
        setWeaponCatalogError(
          error?.message ||
            "Non riesco a caricare il catalogo armi su questo dispositivo."
        );
      } finally {
        if (isMounted) {
          setWeaponCatalogLoading(false);
        }
      }
    }

    loadMobileWeaponCatalog();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [weaponCatalogOpen, weaponCatalogRetryKey]);

  useEffect(() => {
    setVisibleWeaponCount(20);
  }, [weaponFilters, weaponCatalogOpen]);

  function retryMobileWeaponCatalogLoad() {
    setWeaponCatalog([]);
    setWeaponCatalogError("");
    setVisibleWeaponCount(20);
    setWeaponCatalogRetryKey((current) => current + 1);
  }

  useEffect(() => {
    setVisibleMonsterCount(30);
  }, [biomeFilter, crFilter, monsterFavoritesOnly, monsterRoleFilter, monsterSearch, monsterTypeFilter]);

  useEffect(() => {
    if (!combatSelectedMonsterId && filteredCombatMonsters[0]?.id) {
      setCombatSelectedMonsterId(filteredCombatMonsters[0].id);
    }
  }, [combatSelectedMonsterId, filteredCombatMonsters]);

  useEffect(() => {
    if (screen !== "combat") return;

    const combatState = {
      round: combatRound,
      currentTurnIndex: safeCombatTurnIndex,
      party: combatParty,
      encounterMonsters: combatMonsters,
      activeActorId: activeCombatActor?.id || "",
      selectedTargetId: combatTargetId,
      damageAmount: combatValue,
      combatLog: savedCombatState?.combatLog || [],
    };

    const serializedCombatState = JSON.stringify(combatState);
    if (serializedCombatState === lastWrittenCombatStateRef.current) return;
    lastWrittenCombatStateRef.current = serializedCombatState;
    writeCombatState(combatState);
  }, [activeCombatActor?.id, combatMonsters, combatParty, combatRound, combatTargetId, combatValue, safeCombatTurnIndex, savedCombatState?.combatLog, screen]);

  function updateWeaponFilter(field, value) {
    setWeaponFilters((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function addWeaponFromCatalog(weapon) {
    if (!selectedMerchant || !weapon) return;
    onSelectMerchant?.(selectedMerchant.id);
    onAddInventoryItem?.(toInventoryWeapon(weapon));
  }

  function goHome() {
    setScreen("home");
    setSelectedId(null);
    setSelectedItemId(null);
    setSelectedMonsterId(null);
  }

  function openShop(item) {
    onSelectMerchant?.(item.id);
    setSelectedId(item.id);
    setSelectedItemId(null);
    setMerchantTab("Panoramica");
    setScreen("merchantDetail");
  }

  function openTavern(item) {
    onSelectMerchant?.(item.id);
    setSelectedId(item.id);
    setTavernTab("Panoramica");
    setScreen("tavernDetail");
  }

  async function generateShop(regionOverride = null) {
    const item = await onAddGeneratedMerchant?.("shop", regionOverride);
    if (item) openShop(item);
  }

  async function generateTavern(regionOverride = null) {
    const item = await onAddGeneratedMerchant?.("tavern", regionOverride);
    if (item) openTavern(item);
  }

  function updateCombatCharacterDraft(field, value) {
    setCombatCharacterDraft((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function addCombatCharacter() {
    const name = combatCharacterDraft.name.trim();
    if (!name) return;

    const maxHp = Number(combatCharacterDraft.maxHp) || 1;
    const dexScore = Number(combatCharacterDraft.dexScore) || 10;
    const initiativeTotal = Number(combatCharacterDraft.initiative) || 0;
    const newCharacter = {
      id: createMobileId("pc"),
      name,
      level: Number(combatCharacterDraft.level) || 1,
      armorClass: Number(combatCharacterDraft.armorClass) || 10,
      maxHp,
      currentHp: clampHp(combatCharacterDraft.currentHp || maxHp, maxHp),
      dexScore,
      dexMod: getDexModifierFromActor({ dexScore }),
      initiative: initiativeTotal,
      initiativeTotal,
      initiativeModifier: getDexModifierFromActor({ dexScore }),
      insertionOrder: combatParty.length,
      conditions: [],
      notes: "",
    };

    setCombatParty((current) => [...current, newCharacter]);
    setCombatCharacterDraft(emptyCombatCharacter);
    if (!combatTargetId) setCombatTargetId(newCharacter.id);
  }

  function addMonsterToMobileCombat(monster) {
    if (!monster) return;
    const encounterMonster = {
      ...createEncounterMonsterFromBestiary(monster),
      insertionOrder: combatParty.length + combatMonsters.length,
    };

    setCombatMonsters((current) => [...current, encounterMonster]);
    if (!combatTargetId) setCombatTargetId(encounterMonster.id);
    setCombatTab("Preparazione");
    setScreen("combat");
  }

  function addSelectedCombatMonster() {
    const monster =
      filteredCombatMonsters.find((item) => item.id === combatSelectedMonsterId) ||
      filteredCombatMonsters[0] ||
      mobileBestiary[0];
    addMonsterToMobileCombat(monster);
  }

  function startMobileCombat() {
    if (!combatInitiativeOrder.length) return;
    setCombatRound(1);
    setCombatTurnIndex(0);
    setCombatTargetId(combatInitiativeOrder[0]?.id || "");
    setCombatTab("Turno");
  }

  function updateCombatActor(actorId, patch) {
    setCombatParty((current) =>
      current.map((actor) => (actor.id === actorId ? { ...actor, ...patch } : actor))
    );
    setCombatMonsters((current) =>
      current.map((actor) => (actor.id === actorId ? { ...actor, ...patch } : actor))
    );
  }

  function removeCombatActor(actorId) {
    setCombatParty((current) => current.filter((actor) => actor.id !== actorId));
    setCombatMonsters((current) => current.filter((actor) => actor.id !== actorId));
    if (combatTargetId === actorId) setCombatTargetId("");
  }

  function applyMobileHpChange(mode) {
    const amount = Number(combatValue) || 0;
    if (!selectedCombatTarget || amount <= 0) return;

    const signedAmount = mode === "heal" ? amount : -amount;
    const nextHp = clampHp(selectedCombatTarget.currentHp + signedAmount, selectedCombatTarget.maxHp);
    updateCombatActor(selectedCombatTarget.id, { currentHp: nextHp });
  }

  function toggleMobileCondition() {
    if (!selectedCombatTarget || !combatCondition) return;

    const currentConditions = selectedCombatTarget.conditions || [];
    const hasCondition = currentConditions.some((condition) => getConditionName(condition) === combatCondition);
    const nextConditions = hasCondition
      ? currentConditions.filter((condition) => getConditionName(condition) !== combatCondition)
      : [...currentConditions, { name: combatCondition, duration: "manual", remainingRounds: null }];

    updateCombatActor(selectedCombatTarget.id, { conditions: nextConditions });
  }

  function nextMobileTurn() {
    if (!combatInitiativeOrder.length) return;

    const nextIndex = (safeCombatTurnIndex + 1) % combatInitiativeOrder.length;
    if (nextIndex === 0) setCombatRound((current) => current + 1);
    setCombatTurnIndex(nextIndex);
    setCombatTargetId(combatInitiativeOrder[nextIndex]?.id || "");
  }

  function resetMobileCombat() {
    setCombatRound(1);
    setCombatTurnIndex(0);
    setCombatParty([]);
    setCombatMonsters([]);
    setCombatTargetId("");
    setCombatValue("");
    setConfirmCombatReset(false);
    setCombatTab("Preparazione");
  }

  function updateSelected(field, value, type = "shop", options = {}) {
    const item = type === "tavern" ? selectedTavern : selectedMerchant;
    if (!item) return;
    onSelectMerchant?.(item.id);
    onUpdateMerchant?.(field, value, options);
  }

  function deleteShopAndReturn(itemId) {
    onDeleteMerchant?.(itemId);
    setConfirmDeleteMerchant(false);
    setListDeleteMerchantId(null);
    setListDeleteTavernId(null);
    setSelectedId(null);
    setSelectedItemId(null);
    setScreen("merchants");
  }

  function deleteTavernAndReturn(itemId) {
    onDeleteMerchant?.(itemId);
    setConfirmDeleteMerchant(false);
    setListDeleteTavernId(null);
    setSelectedId(null);
    setSelectedItemId(null);
    setScreen("taverns");
  }

  function applyPendingPrestigeChange(regeneratePrestige) {
    if (!pendingPrestigeChange) return;
    const item = pendingPrestigeChange.type === "tavern" ? selectedTavern : selectedMerchant;
    if (item?.id !== pendingPrestigeChange.itemId) {
      onSelectMerchant?.(pendingPrestigeChange.itemId);
    }
    updateSelected("prestige", pendingPrestigeChange.value, pendingPrestigeChange.type, {
      regeneratePrestige,
    });
    setPendingPrestigeChange(null);
  }

  function renderPrestigeConfirmModal() {
    if (!pendingPrestigeChange) return null;
    const isTavern = pendingPrestigeChange.type === "tavern";

    return (
      <div className="mobile-confirm-overlay" role="dialog" aria-modal="true" aria-labelledby="prestige-change-title">
        <section className="mobile-confirm-dialog">
          <h2 id="prestige-change-title">Cambiare prestigio?</h2>
          <p>
            {isTavern
              ? "Vuoi rigenerare camere, servizi, piatto e descrizioni in base al nuovo prestigio?"
              : "Vuoi rigenerare descrizione e inventario in base al nuovo prestigio?"}
          </p>
          <div className="mobile-confirm-actions stacked">
            <button className="mobile-confirm-secondary" type="button" onClick={() => applyPendingPrestigeChange(false)}>
              Solo cambia prestigio
            </button>
            <button className="mobile-confirm-danger" type="button" onClick={() => applyPendingPrestigeChange(true)}>
              Rigenera contenuti
            </button>
          </div>
          <button className="mobile-confirm-cancel" type="button" onClick={() => setPendingPrestigeChange(null)}>
            Annulla
          </button>
        </section>
      </div>
    );
  }

  function renderHome() {
    const cards = [
      ["merchants", "◆", "Mercanti", "Genera e gestisci"],
      ["taverns", "◈", "Locande", "Ospitalita e quest"],
      ["bestiary", "✦", "Bestiario", "Consulta creature"],
      ["combat", "⚔", "Combattimento", "Gestisci scontri"],
      ["map", "⌖", "Mappa", "Organizza per zona"],
      ["settings", "⚙", "Impostazioni", "Partite e opzioni"],
    ];

    return (
      <div className="b44-page">
        <div className="b44-home-title">
          <h1>D&amp;D Shop</h1>
          <p>Strumenti per Dungeon Master</p>
        </div>
        <section className="b44-card b44-campaign-card">
          <p>Partita Attiva</p>
          <h2>{activeSessionName || "Partita non salvata"}</h2>
          <div>
            <span>{getMerchantRegionLabel(sessionRegion || "generic")}</span>
            <span>Lv.{partyLevel || 1}</span>
            <span>
              Prestigio {generationPrestigeMode === "random" ? "Casuale" : getPrestigeLabel(generationPrestigeMode)}
            </span>
          </div>
          <label className="b44-home-select">
            Prestigio
            <select
              value={generationPrestigeMode || "random"}
              onChange={(event) => onChangeGenerationPrestigeMode?.(event.target.value)}
            >
              <option value="random">Casuale</option>
              {prestigeOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <div className="b44-level-stepper">
            <small>Livello party</small>
            <button
              type="button"
              onClick={() => onChangePartyLevel?.(Math.max(1, Number(partyLevel || 1) - 1))}
              aria-label="Diminuisci livello party"
            >
              −
            </button>
            <strong>{partyLevel || 1}</strong>
            <button
              type="button"
              onClick={() => onChangePartyLevel?.(Math.min(20, Number(partyLevel || 1) + 1))}
              aria-label="Aumenta livello party"
            >
              +
            </button>
          </div>
        </section>
        <section className="b44-section-grid">
          {cards.map(([id, icon, label, desc]) => (
            <button key={id} type="button" className="b44-section-card" onClick={() => setScreen(id)}>
              <span>{icon}</span>
              <strong>{label}</strong>
              <small>{desc}</small>
            </button>
          ))}
        </section>
      </div>
    );
  }

  function renderMerchants() {
    const list = favoritesOnly ? shops.filter((item) => item.favorite) : shops;
    const merchantPendingDelete = shops.find((item) => item.id === listDeleteMerchantId) || null;
    return (
      <div>
        <MobileHeader
          title="Mercanti"
          showBack
          onBack={goHome}
        />
        <div className="b44-page">
          <button className="b44-generate" type="button" onClick={() => generateShop()}>
            + Genera mercante
          </button>
          <div className="b44-segment">
            <button className={!favoritesOnly ? "active" : ""} onClick={() => setFavoritesOnly(false)} type="button">Tutti</button>
            <button className={favoritesOnly ? "active" : ""} onClick={() => setFavoritesOnly(true)} type="button">Preferiti</button>
          </div>
          <div className="b44-list">
            {list.length ? list.map((item) => (
              <button className="b44-row b44-merchant-row" key={item.id} type="button" onClick={() => openShop(item)}>
                <div>
                  <strong>{item.name || "Mercante"}</strong>
                  <small>{item.shopName || "Bottega senza nome"}</small>
                  <small>{getMerchantRegionLabel(item.region || "generic")}</small>
                </div>
                <div className="b44-row-meta">
                  <span>{item.reputation || "Sconosciuto"}</span>
                  <span>{getPrestigeLabel(item.prestige)}</span>
                </div>
                <span
                  className="b44-row-delete"
                  role="button"
                  tabIndex={0}
                  onClick={(event) => {
                    event.stopPropagation();
                    setListDeleteMerchantId(item.id);
                  }}
                  onKeyDown={(event) => {
                    if (event.key !== "Enter" && event.key !== " ") return;
                    event.preventDefault();
                    event.stopPropagation();
                    setListDeleteMerchantId(item.id);
                  }}
                >
                  🗑
                </span>
                <em>
                  <span
                    className="b44-row-fav"
                    role="button"
                    tabIndex={0}
                    onClick={(event) => {
                      event.stopPropagation();
                      onToggleMerchantFavorite?.(item.id);
                    }}
                    onKeyDown={(event) => {
                      if (event.key !== "Enter" && event.key !== " ") return;
                      event.preventDefault();
                      event.stopPropagation();
                      onToggleMerchantFavorite?.(item.id);
                    }}
                  >
                    {item.favorite ? "★" : "☆"}
                  </span>
                  ›
                </em>
              </button>
            )) : <EmptyState>Nessun mercante.</EmptyState>}
          </div>
        </div>
        {merchantPendingDelete && (
          <div
            className="mobile-confirm-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-merchant-title"
          >
            <section className="mobile-confirm-dialog">
              <h2 id="delete-merchant-title">Eliminare mercante?</h2>
              <p>
                Vuoi eliminare "{merchantPendingDelete.name || "questo mercante"}"? Questa azione non puo essere
                annullata.
              </p>
              <div className="mobile-confirm-actions">
                <button
                  className="mobile-confirm-secondary"
                  type="button"
                  onClick={() => setListDeleteMerchantId(null)}
                >
                  Annulla
                </button>
                <button
                  className="mobile-confirm-danger"
                  type="button"
                  onClick={() => deleteShopAndReturn(merchantPendingDelete.id)}
                >
                  Elimina
                </button>
              </div>
            </section>
          </div>
        )}
      </div>
    );
  }

  function renderMerchantDetail() {
    if (!selectedMerchant) return renderMerchants();
    const inventory = selectedMerchant.inventory || [];
    const inventoryByCategory = mobileInventoryCategories.map((category) => ({
      ...category,
      items: inventory.filter((item) => getMobileItemCategory(item) === category.key),
    }));
    const activeInventoryItems =
      inventoryByCategory.find((category) => category.key === merchantInventoryCategory)?.items || [];
    const renderInventoryContent = () => {
      if (weaponCatalogOpen) {
        return (
          <section className="b44-card b44-weapon-catalog">
            <div className="b44-catalog-head">
              <div>
                <h3>Catalogo armi</h3>
                <p>Database armi originale: ricerca e aggiunta rapida.</p>
              </div>
              <button className="b44-mini" type="button" onClick={() => setWeaponCatalogOpen(false)}>
                Chiudi
              </button>
            </div>

            <div className="b44-mobile-filter-grid">
              <label>Cerca <input value={weaponFilters.search} onChange={(event) => updateWeaponFilter("search", event.target.value)} placeholder="Nome, effetto, proprieta..." /></label>
              <label>Categoria <select value={weaponFilters.category} onChange={(event) => updateWeaponFilter("category", event.target.value)}><option value="">Tutte</option>{weaponFilterOptions.categories.map((category) => <option key={category} value={category}>{category}</option>)}</select></label>
              <label>Rarita <select value={weaponFilters.rarity} onChange={(event) => updateWeaponFilter("rarity", event.target.value)}><option value="">Tutte</option>{weaponFilterOptions.rarities.map((rarity) => <option key={rarity} value={rarity}>{rarity}</option>)}</select></label>
              <label>Bioma <select value={weaponFilters.biome} onChange={(event) => updateWeaponFilter("biome", event.target.value)}><option value="">Tutti</option>{weaponFilterOptions.biomes.map((biome) => <option key={biome} value={biome}>{biome}</option>)}</select></label>
              <label>Danno <select value={weaponFilters.damageType} onChange={(event) => updateWeaponFilter("damageType", event.target.value)}><option value="">Tutti</option>{weaponFilterOptions.damageTypes.map((damageType) => <option key={damageType} value={damageType}>{damageType}</option>)}</select></label>
              <label>Liv. min <input type="number" min="1" max="20" value={weaponFilters.minLevel} onChange={(event) => updateWeaponFilter("minLevel", event.target.value)} /></label>
              <label>Liv. max <input type="number" min="1" max="20" value={weaponFilters.maxLevel} onChange={(event) => updateWeaponFilter("maxLevel", event.target.value)} /></label>
              <label>Ordina <select value={weaponFilters.sortBy} onChange={(event) => updateWeaponFilter("sortBy", event.target.value)}>{weaponSortOptions.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}</select></label>
            </div>

            {weaponCatalogLoading ? (
              <EmptyState>Caricamento catalogo armi...</EmptyState>
            ) : weaponCatalogError ? (
              <section className="b44-card b44-text-card">
                <p>Non riesco a caricare il catalogo armi su questo dispositivo.</p>
                <small>{weaponCatalogError}</small>
                <button className="b44-generate compact" type="button" onClick={retryMobileWeaponCatalogLoad}>
                  Riprova
                </button>
              </section>
            ) : (
              <>
                <p className="b44-catalog-count">Mostro {visibleWeapons.length} risultati su {safeWeaponCatalog.length} armi.</p>
                <div className="b44-weapon-results">
                  {visibleWeapons.map((weapon) => (
                    <article className="b44-weapon-card" key={weapon.id}>
                      <div className="b44-weapon-card-head">
                        <div>
                          <strong>{weapon.name}</strong>
                          <small>{weapon.weaponCategory} · {weapon.rarity}</small>
                        </div>
                        <span>{weapon.price}</span>
                      </div>
                      <BadgeRow>
                        <span>{weapon.damage} {weapon.damageType}</span>
                        <span>Liv. {weapon.minLevel}</span>
                        <span>{weapon.biome}</span>
                      </BadgeRow>
                      <small>{getCompactMonsterText(weapon.effect || weapon.description || "Nessun effetto speciale.", 76)}</small>
                      <button className="b44-generate compact" type="button" onClick={() => addWeaponFromCatalog(weapon)}>
                        + Aggiungi
                      </button>
                    </article>
                  ))}
                </div>
                {visibleWeapons.length < filteredWeaponResults.length && (
                  <button className="b44-generate compact" type="button" onClick={() => setVisibleWeaponCount((current) => current + 20)}>
                    Mostra altri
                  </button>
                )}
              </>
            )}
          </section>
        );
      }

      return (
        <>
          {merchantInventoryCategory === "Armi" && (
            <button className="b44-generate" type="button" onClick={() => setWeaponCatalogOpen(true)}>
              Sfoglia catalogo armi
            </button>
          )}
          <div className="b44-tabs b44-inventory-tabs">
            {inventoryByCategory.map((category) => (
              <button
                key={category.key}
                type="button"
                className={merchantInventoryCategory === category.key ? "active" : ""}
                onClick={() => setMerchantInventoryCategory(category.key)}
              >
                {category.icon} {category.label} {category.items.length}
              </button>
            ))}
          </div>
          <div className="b44-list">
            {activeInventoryItems.length ? activeInventoryItems.map((item) => (
              <button className="b44-row b44-inventory-item-row" key={item.id} type="button" onClick={() => { setSelectedItemId(item.id); setScreen("itemDetail"); }}>
                <div>
                  <strong>{item.name || "Oggetto"}</strong>
                  <small>{item.rarity || "Comune"} · x{getItemQuantity(item)}</small>
                </div>
                <div className="b44-row-meta"><span>{item.price || "Prezzo n.d."}</span></div>
                <em>›</em>
              </button>
            )) : <EmptyState>Nessun oggetto in questa categoria.</EmptyState>}
          </div>
        </>
      );
    };
    return (
      <div>
        <MobileHeader
          title={selectedMerchant.name || "Mercante"}
          subtitle={selectedMerchant.shopName}
          showBack
          onBack={() => setScreen("merchants")}
          rightAction={
            <button className="b44-star" onClick={() => onToggleMerchantFavorite?.(selectedMerchant.id)} type="button">
              {selectedMerchant.favorite ? "★" : "☆"}
            </button>
          }
        />
        <div className="b44-page b44-merchant-detail-page">
          <BadgeRow>
            <span>{getMerchantRegionLabel(selectedMerchant.region || "generic")}</span>
            <span>{selectedMerchant.race || "Razza n.d."}</span>
            <span>{getAlignmentLabel(selectedMerchant.alignment)}</span>
            <span>{selectedMerchant.reputation || "Sconosciuto"}</span>
            <span>{selectedMerchant.shopTier || "Comune"}</span>
            <span>Prestigio {getPrestigeLabel(selectedMerchant.prestige)}</span>
            <span>Sconti {selectedMerchant.discount || "Basso"}</span>
          </BadgeRow>
          <TabBar tabs={merchantTabs} active={merchantTab} onChange={setMerchantTab} />
          {merchantTab === "Panoramica" && (
            <section className="b44-card b44-text-card">
              <h3>Mercante</h3><p>{selectedMerchant.story || "Descrizione non disponibile."}</p>
              <h3>Bottega</h3><p>{selectedMerchant.locationDescription || "Descrizione non disponibile."}</p>
            </section>
          )}
          {merchantTab === "Inventario" && (weaponCatalogOpen ? renderInventoryContent() : (
            <>
            {merchantInventoryCategory === "Armi" && (
              <button className="b44-generate" type="button" onClick={() => setWeaponCatalogOpen(true)}>
                Sfoglia catalogo armi
              </button>
            )}
            <div className="b44-tabs b44-inventory-tabs">
              {inventoryByCategory.map((category) => (
                <button
                  key={category.key}
                  type="button"
                  className={merchantInventoryCategory === category.key ? "active" : ""}
                  onClick={() => setMerchantInventoryCategory(category.key)}
                >
                  {category.icon} {category.label} {category.items.length}
                </button>
              ))}
            </div>
            <div className="b44-list">
              {activeInventoryItems.length ? activeInventoryItems.map((item) => (
                <button className="b44-row b44-inventory-item-row" key={item.id} type="button" onClick={() => { setSelectedItemId(item.id); setScreen("itemDetail"); }}>
                  <div>
                    <strong>{item.name || "Oggetto"}</strong>
                    <small>{item.rarity || "Comune"} · x{getItemQuantity(item)}</small>
                  </div>
                  <div className="b44-row-meta"><span>{item.price || "Prezzo n.d."}</span></div>
                  <em>›</em>
                </button>
              )) : <EmptyState>Nessun oggetto in questa categoria.</EmptyState>}
            </div>
            </>
          ))}
          {merchantTab === "Quest" && (
            <section className="b44-card b44-text-card">
              <h3>Side Quest</h3><p>{selectedMerchant.sideQuest || "Nessuna side quest."}</p>
              {selectedMerchant.questDescription && <><h3>Descrizione</h3><p>{selectedMerchant.questDescription}</p></>}
              <h3>Ricompensa</h3><p>{selectedMerchant.reward || "Nessuna ricompensa."}</p>
              {selectedMerchant.complication && <><h3>Complicazione</h3><p>{selectedMerchant.complication}</p></>}
            </section>
          )}
          {merchantTab === "Modifica" && renderMerchantEdit(selectedMerchant, "shop")}
          {merchantTab === "Mappa" && renderMapEdit(selectedMerchant, "shop")}
        </div>
      </div>
    );
  }

  function renderMerchantEdit(item, type) {
    return (
      <section className="b44-card b44-form">
        <label>Nome <input value={item.name || ""} onChange={(e) => updateSelected("name", e.target.value, type)} /></label>
        <label>{type === "tavern" ? "Nome locanda" : "Nome bottega"} <input value={item.shopName || ""} onChange={(e) => updateSelected("shopName", e.target.value, type)} /></label>
        <label>Razza <input value={item.race || ""} onChange={(e) => updateSelected("race", e.target.value, type)} /></label>
        <label>Zona <select value={item.region || "generic"} onChange={(e) => updateSelected("region", e.target.value, type)}>{merchantRegions.map((r) => <option key={r.id} value={r.id}>{r.label}</option>)}</select></label>
        {type === "tavern" && (
          <label>Posizione mappa <select value={getMapRegion(item, sessionRegion || "generic")} onChange={(e) => updateSelected("mapRegion", e.target.value, type)}>{merchantRegions.map((r) => <option key={r.id} value={r.id}>{r.label}</option>)}</select></label>
        )}
        <label>Allineamento <select value={item.alignment || "neutral"} onChange={(e) => updateSelected("alignment", e.target.value, type)}>{alignmentOptions.map((a) => <option key={a.id} value={a.id}>{a.label}</option>)}</select></label>
        <label>Reputazione <select value={item.reputation || "Sconosciuto"} onChange={(e) => updateSelected("reputation", e.target.value, type)}>{merchantReputations.map((r) => <option key={r.id} value={r.id}>{r.label}</option>)}</select></label>
        <label>Prestigio <select value={normalizePrestige(item.prestige)} onChange={(e) => setPendingPrestigeChange({ type, itemId: item.id, value: e.target.value })}>{prestigeOptions.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}</select></label>
        <label>Ricchezza <input value={item.shopTier || ""} onChange={(e) => updateSelected("shopTier", e.target.value, type)} /></label>
        <label>Sconti <input value={item.discount || ""} onChange={(e) => updateSelected("discount", e.target.value, type)} /></label>
        {(type === "shop" || type === "tavern") && (
          <div className="b44-delete-zone">
            {!confirmDeleteMerchant ? (
              <button
                className="b44-danger ghost"
                type="button"
                onClick={() => setConfirmDeleteMerchant(true)}
              >
                {type === "tavern" ? "Elimina locanda" : "Elimina mercante"}
              </button>
            ) : (
              <div className="b44-confirm-delete">
                <p>Vuoi eliminare {type === "tavern" ? "questa locanda" : "questo mercante"}?</p>
                <div>
                  <button type="button" onClick={() => setConfirmDeleteMerchant(false)}>
                    Annulla
                  </button>
                  <button
                    className="danger"
                    type="button"
                    onClick={() => {
                      onDeleteMerchant?.(item.id);
                      setConfirmDeleteMerchant(false);
                      setSelectedId(null);
                      setSelectedItemId(null);
                      setScreen(type === "tavern" ? "taverns" : "merchants");
                    }}
                  >
                    Elimina
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    );
  }

  function renderMapEdit(item, type) {
    return (
      <section className="b44-card b44-form">
        <label>Zona geografica <select value={item.region || "generic"} onChange={(e) => updateSelected("region", e.target.value, type)}>{merchantRegions.map((r) => <option key={r.id} value={r.id}>{r.label}</option>)}</select></label>
        <label>Posizione mappa <select value={getMapRegion(item, sessionRegion || "generic")} onChange={(e) => updateSelected("mapRegion", e.target.value, type)}>{merchantRegions.map((r) => <option key={r.id} value={r.id}>{r.label}</option>)}</select></label>
        <button type="button" onClick={() => { setSelectedRegionId(getMapRegion(item)); setScreen("mapRegion"); }}>Apri zona</button>
      </section>
    );
  }

  function getMobileMechanicalBadges(item) {
    const badges = [];
    if (item.category === "Armature" && item.armorClass && !item.shieldBonus) {
      badges.push(`CA ${item.armorClass}`);
      if (item.armorType) badges.push(item.armorType);
      if (item.penalty) badges.push(item.penalty);
    }
    if (item.shieldBonus) {
      badges.push(`+${item.shieldBonus} CA`);
    }
    if (item.category === "Pozioni") {
      if (item.duration) badges.push(`Durata: ${item.duration}`);
      if (item.resistances && item.resistances.length) {
        badges.push(`Resiste: ${item.resistances.join(", ")}`);
      }
    }
    return badges;
  }

  function getMobileMechanicalSections(item) {
    const sections = [];
    if (item.category === "Armature" && item.specialEffect && !item.shieldBonus) {
      sections.push({ label: "Effetto speciale", content: item.specialEffect });
    }
    if (item.shieldBonus && item.specialEffect) {
      sections.push({ label: "Effetto speciale", content: item.specialEffect });
    }
    if (item.category === "Pozioni") {
      if (item.mechanicalEffect) sections.push({ label: "Effetto meccanico", content: item.mechanicalEffect });
      if (item.bonuses && item.bonuses.length) sections.push({ label: "Bonus", content: item.bonuses.map((b) => `+ ${b}`).join(" / ") });
      if (item.penalties && item.penalties.length) sections.push({ label: "Malus", content: item.penalties.map((p) => `− ${p}`).join(" / ") });
    }
    return sections;
  }

  function renderItemDetail() {
    if (!selectedMerchant || !selectedItem) return renderMerchantDetail();
    const description = selectedItem.description || selectedItem.notes || "Nessuna descrizione.";
    const effect = getItemEffect(selectedItem);
    const damage = getItemDamage(selectedItem);
    const category = selectedItem.category || "";
    const isArmor = category === "Armature";
    const isPotion = category === "Pozioni";
    const isShield = !!selectedItem.shieldBonus;
    const mechBadges = getMobileMechanicalBadges(selectedItem);
    const mechSections = getMobileMechanicalSections(selectedItem);
    return (
      <div>
        <MobileHeader title={selectedItem.name || "Oggetto"} subtitle={selectedItem.category || "Inventario"} showBack onBack={() => { setScreen("merchantDetail"); setMerchantTab("Inventario"); }} />
        <div className="b44-page">
          <section className="b44-card b44-text-card">
            <h2 className="b44-item-detail-title">{selectedItem.name || "Oggetto"}</h2>
            <BadgeRow>
              <span>{selectedItem.category || "Varie"}</span>
              <span>{selectedItem.rarity || "Comune"}</span>
              <span>{selectedItem.price || "Prezzo n.d."}</span>
              <span>x{getItemQuantity(selectedItem)}</span>
              {mechBadges.map((badge, index) => (<span key={index}>{badge}</span>))}
            </BadgeRow>
            <h3>Descrizione</h3><p>{description}</p>
            {mechSections.map((section, index) => (
              <React.Fragment key={index}>
                <h3>{section.label}</h3><p>{section.content}</p>
              </React.Fragment>
            ))}
            {(isArmor || isPotion) ? null : (<><h3>Effetto</h3><p>{effect}</p></>)}
            <h3>Danno</h3><p>{damage}</p>
            <button className="b44-danger" type="button" onClick={() => { onSelectMerchant?.(selectedMerchant.id); onDeleteInventoryItem?.(selectedItem.id); setScreen("merchantDetail"); setMerchantTab("Inventario"); }}>Rimuovi</button>
          </section>
        </div>
      </div>
    );
  }

  function renderTaverns() {
    return (
      <div>
        <MobileHeader title="Locande" showBack onBack={goHome} />
        <div className="b44-page">
          <button className="b44-generate" type="button" onClick={() => generateTavern()}>+ Genera locanda</button>
          <div className="b44-list">
            {taverns.length ? taverns.map((item) => (
              <button className="b44-row" key={item.id} type="button" onClick={() => openTavern(item)}>
                <div><strong>{item.shopName || "Locanda"}</strong><small>{item.name || "Locandiere"}</small></div>
                <div className="b44-row-meta"><span>{getMerchantRegionLabel(item.region || "generic")}</span><span>{item.reputation || "Neutrale"}</span></div><em>{item.favorite ? "★" : "☆"} ›</em>
              </button>
            )) : <EmptyState>Nessuna locanda.</EmptyState>}
          </div>
        </div>
      </div>
    );
  }

  function renderTavernDetail() {
    if (!selectedTavern) return renderTaverns();
    return (
      <div>
        <MobileHeader title={selectedTavern.shopName || "Locanda"} subtitle={selectedTavern.name} showBack onBack={() => setScreen("taverns")} rightAction={<button className="b44-star" onClick={() => onToggleMerchantFavorite?.(selectedTavern.id)} type="button">{selectedTavern.favorite ? "★" : "☆"}</button>} />
        <div className="b44-page">
          <BadgeRow><span>{getMerchantRegionLabel(selectedTavern.region || "generic")}</span><span>{selectedTavern.race || "Razza n.d."}</span><span>{selectedTavern.reputation || "Neutrale"}</span><span>{selectedTavern.shopTier || "Comune"}</span></BadgeRow>
          <TabBar tabs={tavernTabs} active={tavernTab} onChange={setTavernTab} />
          {tavernTab === "Panoramica" && <section className="b44-card b44-text-card"><h3>Locanda</h3><p>{selectedTavern.locationDescription || "Descrizione non disponibile."}</p><h3>Locandiere</h3><p>{selectedTavern.story || "Descrizione non disponibile."}</p></section>}
          {tavernTab === "Ospitalita" && <section className="b44-list">{(selectedTavern.rooms || []).map((room, i) => <article className="b44-row as-card" key={`${room.name}-${i}`}><div><strong>{room.name}</strong><small>{room.description}</small></div><div className="b44-row-meta"><span>{room.tier}</span><span>{room.price}</span></div></article>)}{(selectedTavern.services || []).map((s, i) => <article className="b44-row as-card" key={`${s.name}-${i}`}><div><strong>{s.name}</strong><small>{s.price}</small></div></article>)}</section>}
          {tavernTab === "Piatto" && <section className="b44-card b44-text-card"><h3>{selectedTavern.dishName || "Piatto del giorno"}</h3><p>{selectedTavern.dishDescription || "Nessun piatto."}</p><BadgeRow><span>{selectedTavern.dishPrice || "Prezzo n.d."}</span><span>{selectedTavern.dishTier || "Piatto"}</span></BadgeRow><p>{selectedTavern.dishBonus}</p><p>{selectedTavern.dishMalus}</p></section>}
          {tavernTab === "Quest" && <section className="b44-card b44-text-card"><h3>Side Quest</h3><p>{selectedTavern.sideQuest || "Nessuna quest."}</p><h3>Ricompensa</h3><p>{selectedTavern.reward || "Nessuna ricompensa."}</p></section>}
          {tavernTab === "Modifica" && renderMerchantEdit(selectedTavern, "tavern")}
          {tavernTab === "Mappa" && renderMapEdit(selectedTavern, "tavern")}
        </div>
      </div>
    );
  }

  function renderTavernsMobile() {
    const list = favoritesOnly ? taverns.filter((item) => item.favorite) : taverns;
    const tavernPendingDelete = taverns.find((item) => item.id === listDeleteTavernId) || null;

    return (
      <div>
        <MobileHeader title="Locande" showBack onBack={goHome} />
        <div className="b44-page">
          <button className="b44-generate" type="button" onClick={() => generateTavern()}>
            + Genera locanda
          </button>
          <div className="b44-segment">
            <button className={!favoritesOnly ? "active" : ""} onClick={() => setFavoritesOnly(false)} type="button">
              Tutte
            </button>
            <button className={favoritesOnly ? "active" : ""} onClick={() => setFavoritesOnly(true)} type="button">
              Preferite
            </button>
          </div>
          <div className="b44-list">
            {list.length ? list.map((item) => (
              <button className="b44-row b44-tavern-row" key={item.id} type="button" onClick={() => openTavern(item)}>
                <div>
                  <strong>{item.shopName || "Locanda"}</strong>
                  <small>{item.name || "Locandiere"} · {getMerchantRegionLabel(item.region || "generic")}</small>
                </div>
                <div className="b44-row-meta">
                  <span>{item.reputation || "Neutrale"}</span>
                  <span>{getPrestigeLabel(item.prestige)}</span>
                </div>
                <span
                  className="b44-row-delete"
                  role="button"
                  tabIndex={0}
                  onClick={(event) => {
                    event.stopPropagation();
                    setListDeleteTavernId(item.id);
                  }}
                  onKeyDown={(event) => {
                    if (event.key !== "Enter" && event.key !== " ") return;
                    event.preventDefault();
                    event.stopPropagation();
                    setListDeleteTavernId(item.id);
                  }}
                >
                  🗑
                </span>
                <em>
                  <span
                    className="b44-row-fav"
                    role="button"
                    tabIndex={0}
                    onClick={(event) => {
                      event.stopPropagation();
                      onToggleMerchantFavorite?.(item.id);
                    }}
                    onKeyDown={(event) => {
                      if (event.key !== "Enter" && event.key !== " ") return;
                      event.preventDefault();
                      event.stopPropagation();
                      onToggleMerchantFavorite?.(item.id);
                    }}
                  >
                    {item.favorite ? "★" : "☆"}
                  </span>
                  ›
                </em>
              </button>
            )) : <EmptyState>Nessuna locanda.</EmptyState>}
          </div>
        </div>
        {tavernPendingDelete && (
          <div
            className="mobile-confirm-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-tavern-title"
          >
            <section className="mobile-confirm-dialog">
              <h2 id="delete-tavern-title">Eliminare locanda?</h2>
              <p>
                Vuoi eliminare "{tavernPendingDelete.shopName || "questa locanda"}"? Questa azione non puo essere
                annullata.
              </p>
              <div className="mobile-confirm-actions">
                <button
                  className="mobile-confirm-secondary"
                  type="button"
                  onClick={() => setListDeleteTavernId(null)}
                >
                  Annulla
                </button>
                <button
                  className="mobile-confirm-danger"
                  type="button"
                  onClick={() => deleteTavernAndReturn(tavernPendingDelete.id)}
                >
                  Elimina
                </button>
              </div>
            </section>
          </div>
        )}
      </div>
    );
  }

  function renderTavernDetailMobile() {
    if (!selectedTavern) return renderTavernsMobile();
    const rooms = selectedTavern.rooms?.length ? selectedTavern.rooms : [];
    const services = selectedTavern.services?.length ? selectedTavern.services : [];

    return (
      <div>
        <MobileHeader
          title={selectedTavern.shopName || "Locanda"}
          subtitle={selectedTavern.name || "Locandiere"}
          showBack
          onBack={() => setScreen("taverns")}
          rightAction={
            <button className="b44-star" onClick={() => onToggleMerchantFavorite?.(selectedTavern.id)} type="button">
              {selectedTavern.favorite ? "★" : "☆"}
            </button>
          }
        />
        <div className="b44-page b44-tavern-detail-page">
          <BadgeRow>
            <span>{getMerchantRegionLabel(selectedTavern.region || "generic")}</span>
            <span>{selectedTavern.race || "Razza n.d."}</span>
            <span>{getAlignmentLabel(selectedTavern.alignment)}</span>
            <span>{selectedTavern.reputation || "Neutrale"}</span>
            <span>{selectedTavern.dishTier || selectedTavern.shopTier || "Comune"}</span>
            <span>Prestigio {getPrestigeLabel(selectedTavern.prestige)}</span>
            <span>{selectedTavern.shopTier || selectedTavern.discount || "Budget n.d."}</span>
          </BadgeRow>
          <TabBar tabs={tavernTabs} active={tavernTab} onChange={setTavernTab} />

          {tavernTab === "Panoramica" && (
            <section className="b44-card b44-text-card">
              <h3>Locanda</h3>
              <p>{selectedTavern.locationDescription || "Descrizione non disponibile."}</p>
              <h3>Locandiere</h3>
              <p>{selectedTavern.story || "Descrizione non disponibile."}</p>
            </section>
          )}

          {tavernTab === "Ospitalita" && (
            <section className="b44-hospitality-list">
              <h3>Camere</h3>
              {rooms.length ? rooms.map((room, index) => (
                <article className="b44-card b44-room-card" key={`${room.name || "camera"}-${index}`}>
                  <div>
                    <strong>{room.name || "Camera"}</strong>
                    <small>{room.tier || room.quality || "Qualita n.d."} · {room.status || "Disponibile"}</small>
                  </div>
                  <span>{room.price || selectedTavern.roomPrice || "Prezzo n.d."}</span>
                  <p>{room.description || "Descrizione non disponibile."}</p>
                </article>
              )) : <EmptyState>Nessuna camera registrata.</EmptyState>}

              <h3>Servizi</h3>
              {services.length ? services.map((service, index) => (
                <article className="b44-card b44-service-card" key={`${service.name || "servizio"}-${index}`}>
                  <strong>{service.name || "Servizio"}</strong>
                  <span>{service.price || service.cost || "Costo n.d."}</span>
                  <p>{service.description || "Descrizione non disponibile."}</p>
                </article>
              )) : <EmptyState>Nessun servizio registrato.</EmptyState>}
            </section>
          )}

          {tavernTab === "Piatto" && (
            <section className="b44-card b44-text-card b44-dish-card">
              <small>PIATTO DEL GIORNO</small>
              <h3>{selectedTavern.dishName || "Piatto del giorno"}</h3>
              <strong>{selectedTavern.dishPrice || "Prezzo n.d."}</strong>
              <h3>Descrizione</h3>
              <p>{selectedTavern.dishDescription || "Nessun piatto disponibile."}</p>
              <h3>Bonus</h3>
              <p className="b44-positive">{selectedTavern.dishBonus || "Nessun bonus speciale."}</p>
              <h3>Malus</h3>
              <p className="b44-negative">{selectedTavern.dishMalus || "Nessun malus."}</p>
            </section>
          )}

          {tavernTab === "Quest" && (
            <section className="b44-card b44-text-card b44-quest-card">
              <h3>Side Quest</h3>
              <p>{selectedTavern.sideQuest || "Nessuna quest."}</p>
              {selectedTavern.questDescription && <><h3>Descrizione</h3><p>{selectedTavern.questDescription}</p></>}
              <h3>Ricompensa</h3>
              <p>{selectedTavern.reward || "Nessuna ricompensa."}</p>
              {selectedTavern.complication && <><h3>Complicazione</h3><p>{selectedTavern.complication}</p></>}
              {selectedTavern.questLevel && <><h3>Livello</h3><p>{selectedTavern.questLevel}</p></>}
            </section>
          )}

          {tavernTab === "Modifica" && renderMerchantEdit(selectedTavern, "tavern")}
          {tavernTab === "Mappa" && renderMapEdit(selectedTavern, "tavern")}
        </div>
      </div>
    );
  }

  function renderBestiary() {
    return (
      <div>
        <MobileHeader title="Bestiario" showBack onBack={goHome} />
        <div className="b44-page">
          <section className="b44-card b44-filter-card">
            <input placeholder="Cerca mostro" value={monsterSearch} onChange={(e) => setMonsterSearch(e.target.value)} />
            <select value={biomeFilter} onChange={(e) => setBiomeFilter(e.target.value)}>{biomes.map((b) => <option key={b.id} value={b.id}>{b.name}</option>)}</select>
            <select value={crFilter} onChange={(e) => setCrFilter(e.target.value)}><option value="all">Tutti GS</option><option value="low">GS 0-1/2</option><option value="mid">GS 1-3</option><option value="high">GS 4+</option></select>
            <button className={monsterFavoritesOnly ? "active" : ""} type="button" onClick={() => setMonsterFavoritesOnly((v) => !v)}>★ Preferiti</button>
          </section>
          <div className="b44-list">
            {filteredMonsters.map((m) => <article className="b44-row" key={m.id}><button type="button" onClick={() => { setSelectedMonsterId(m.id); setMonsterTab("Azioni"); setScreen("monsterDetail"); }}><strong>{m.name}</strong><small>GS {m.cr} · {m.type} · CA {m.armorClass} · PF {m.hitPoints}</small></button><button className="b44-mini" type="button" onClick={() => onAddMonsterToCombat?.(m)}>+ Combat</button></article>)}
          </div>
        </div>
      </div>
    );
  }

  function renderMonsterDetail() {
    if (!selectedMonster) return renderBestiary();
    const actions = buildPlayableMonsterActions(selectedMonster);
    return (
      <div>
        <MobileHeader title={selectedMonster.name} subtitle={`GS ${selectedMonster.cr} · ${selectedMonster.type}`} showBack onBack={() => setScreen("bestiary")} rightAction={<button className="b44-star" type="button" onClick={() => onToggleFavoriteMonster?.(selectedMonster.id)}>{favoriteMonsterSet.has(selectedMonster.id) ? "★" : "☆"}</button>} />
        <div className="b44-page">
          <BadgeRow><span>CA {selectedMonster.armorClass}</span><span>PF {selectedMonster.hitPoints}</span><span>{selectedMonster.speed}</span></BadgeRow>
          <button className="b44-generate" type="button" onClick={() => onAddMonsterToCombat?.(selectedMonster)}>+ Aggiungi al combattimento</button>
          <TabBar tabs={monsterTabs} active={monsterTab} onChange={setMonsterTab} />
          {monsterTab === "Azioni" && <section className="b44-card b44-text-card">{actions.map((a, i) => <article key={`${a.name}-${i}`}><h3>{a.name}</h3><p>{a.hit || a.description}</p></article>)}</section>}
          {monsterTab === "Statistiche" && <section className="b44-card b44-stat-grid">{Object.entries(selectedMonster.abilityScores || {}).map(([k, v]) => <span key={k}>{getAbilityLabel(k)} {v} {formatAbilityModifier(v)}</span>)}</section>}
          {monsterTab === "Descrizione" && <section className="b44-card b44-text-card"><p>{selectedMonster.description}</p><p>{selectedMonster.story}</p></section>}
        </div>
      </div>
    );
  }

  function renderBestiaryMobile() {
    return (
      <div>
        <MobileHeader title="Bestiario" showBack onBack={goHome} />
        <div className="b44-page">
          <section className="b44-card b44-filter-card">
            <input placeholder="Cerca mostro" value={monsterSearch} onChange={(event) => setMonsterSearch(event.target.value)} />
            <select value={biomeFilter} onChange={(event) => setBiomeFilter(event.target.value)}>
              <option value="all">Tutti i biomi</option>
              {biomes.map((biome) => <option key={biome.id} value={biome.id}>{biome.name}</option>)}
            </select>
            <select value={crFilter} onChange={(event) => setCrFilter(event.target.value)}>
              <option value="all">Tutti GS</option>
              <option value="low">GS 0-1/2</option>
              <option value="mid">GS 1-3</option>
              <option value="high">GS 4+</option>
            </select>
            <select value={monsterTypeFilter} onChange={(event) => setMonsterTypeFilter(event.target.value)}>
              <option value="all">Tutti i tipi</option>
              {monsterTypeOptions.map((type) => <option key={type} value={type}>{type}</option>)}
            </select>
            <select value={monsterRoleFilter} onChange={(event) => setMonsterRoleFilter(event.target.value)}>
              <option value="all">Tutti i ruoli</option>
              {monsterRoleOptions.map((role) => <option key={role} value={role}>{role}</option>)}
            </select>
            <button className={monsterFavoritesOnly ? "active" : ""} type="button" onClick={() => setMonsterFavoritesOnly((value) => !value)}>
              ★ Preferiti
            </button>
          </section>
          <p className="b44-catalog-count">Mostro {Math.min(visibleMonsterCount, filteredMonsters.length)} risultati su {filteredMonsters.length} creature.</p>
          {extendedMonstersError && (
            <section className="b44-card b44-text-card">
              <p>Archivio esteso non caricato: {extendedMonstersError}</p>
            </section>
          )}
          <div className="b44-list">
            {visibleFilteredMonsters.map((monster) => (
              <article className="b44-row b44-monster-row" key={monster.id}>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedMonsterId(monster.id);
                    setMonsterTab("Azioni");
                    setScreen("monsterDetail");
                  }}
                >
                  <span className="b44-monster-icon">{getMonsterVisual(monster)}</span>
                  <span>
                    <strong>{monster.name}</strong>
                    <small>{getMonsterBiomeText(monster)} - {getMonsterPrimaryAction(monster)}</small>
                    <small>GS {monster.cr} · {monster.type} · CA {monster.armorClass} · PF {monster.hitPoints}</small>
                  </span>
                </button>
                <button
                  className="b44-mini mobile-add-combat-btn"
                  type="button"
                  aria-label="Aggiungi al combattimento"
                  title="Aggiungi al combattimento"
                  onClick={() => addMonsterToMobileCombat(monster)}
                >
                  +⚔
                </button>
              </article>
            ))}
            {filteredMonsters.length === 0 && <EmptyState>Nessun mostro trovato.</EmptyState>}
          </div>
          {hasMoreMonsters && (
            <button className="b44-generate" type="button" onClick={() => setVisibleMonsterCount((current) => current + 30)}>
              Mostra altri
            </button>
          )}
        </div>
      </div>
    );
  }

  function renderMonsterDetailMobile() {
    if (!selectedMonster) return renderBestiaryMobile();
    const actions = buildPlayableMonsterActions(selectedMonster);

    return (
      <div>
        <MobileHeader
          title={selectedMonster.name}
          subtitle={`GS ${selectedMonster.cr} · ${selectedMonster.type}`}
          showBack
          onBack={() => setScreen("bestiary")}
          rightAction={
            <button className="b44-star" type="button" onClick={() => onToggleFavoriteMonster?.(selectedMonster.id)}>
              {favoriteMonsterSet.has(selectedMonster.id) ? "★" : "☆"}
            </button>
          }
        />
        <div className="b44-page">
          <section className="b44-card b44-monster-hero">
            <div className="b44-monster-icon large">{getMonsterVisual(selectedMonster, "large")}</div>
            <div>
              <h2>{selectedMonster.name}</h2>
              <p>GS {selectedMonster.cr} · {selectedMonster.type}</p>
              <BadgeRow>
                <span>CA {selectedMonster.armorClass}</span>
                <span>PF {selectedMonster.hitPoints}</span>
                <span>{selectedMonster.speed || "Vel. n.d."}</span>
                <span>{selectedMonster.alignment || selectedMonster.difficulty || "Allineamento n.d."}</span>
                <span>XP {getMonsterXp(selectedMonster)}</span>
              </BadgeRow>
            </div>
          </section>
          <button className="b44-generate" type="button" onClick={() => addMonsterToMobileCombat(selectedMonster)}>
            + Aggiungi al combattimento
          </button>
          <TabBar tabs={monsterTabs} active={monsterTab} onChange={setMonsterTab} />
          {monsterTab === "Azioni" && (
            <section className="b44-card b44-text-card">
              {actions.map((action, index) => (
                <article className="b44-action-card" key={`${action.name}-${index}`}>
                  <h3>{action.name}</h3>
                  <p>{action.hit || action.description}</p>
                  {action.damage && <p>Danno: {action.damage}</p>}
                  {action.damageType && <p>Tipo: {action.damageType}</p>}
                </article>
              ))}
            </section>
          )}
          {monsterTab === "Statistiche" && (
            <section className="b44-card b44-stat-grid">
              {Object.entries(selectedMonster.abilityScores || {}).map(([key, value]) => (
                <span key={key}>{getAbilityLabel(key)} {value} {formatAbilityModifier(value)}</span>
              ))}
            </section>
          )}
          {monsterTab === "Descrizione" && (
            <section className="b44-card b44-text-card">
              <h3>Descrizione</h3>
              <p>{selectedMonster.description || "Nessuna descrizione disponibile."}</p>
              <h3>Storia</h3>
              <p>{selectedMonster.story || "Storia non specificata."}</p>
              <h3>Tattica</h3>
              <p>{selectedMonster.tactics || "Tattica non specificata."}</p>
              <h3>Tratti</h3>
              <p>{getMonsterTraitsText(selectedMonster)}</p>
              <h3>Loot</h3>
              <p>{getMonsterLootText(selectedMonster)}</p>
            </section>
          )}
        </div>
      </div>
    );
  }

  function renderCombat() {
    return (
      <div>
        <MobileHeader title="Combatti" showBack onBack={goHome} />
        <div className="b44-page">
          <TabBar tabs={combatTabs} active={combatTab} onChange={setCombatTab} />
          <section className="b44-card b44-text-card">
            <h3>{combatTab}</h3>
            <p>UI Base44 pronta. Usa il bestiario per aggiungere mostri al tracker reale; la gestione avanzata resta nei dati localStorage esistenti.</p>
          </section>
        </div>
      </div>
    );
  }

  function renderCombatPreparation() {
    return (
      <>
        <section className="b44-card b44-form b44-combat-form">
          <h3>Aggiungi PG</h3>
          <label>Nome PG <input value={combatCharacterDraft.name} onChange={(event) => updateCombatCharacterDraft("name", event.target.value)} /></label>
          <div className="b44-combat-grid">
            <label>Livello <input type="number" min="1" value={combatCharacterDraft.level} onChange={(event) => updateCombatCharacterDraft("level", event.target.value)} /></label>
            <label>CA <input type="number" min="1" value={combatCharacterDraft.armorClass} onChange={(event) => updateCombatCharacterDraft("armorClass", event.target.value)} /></label>
            <label>PF max <input type="number" min="1" value={combatCharacterDraft.maxHp} onChange={(event) => updateCombatCharacterDraft("maxHp", event.target.value)} /></label>
            <label>PF attuali <input type="number" min="0" value={combatCharacterDraft.currentHp} onChange={(event) => updateCombatCharacterDraft("currentHp", event.target.value)} /></label>
            <label>DES <input type="number" min="1" value={combatCharacterDraft.dexScore} onChange={(event) => updateCombatCharacterDraft("dexScore", event.target.value)} /></label>
            <label>Iniziativa <input type="number" value={combatCharacterDraft.initiative} onChange={(event) => updateCombatCharacterDraft("initiative", event.target.value)} /></label>
          </div>
          <button type="button" onClick={addCombatCharacter}>+ Aggiungi PG</button>
        </section>

        <section className="b44-card b44-form b44-combat-form">
          <h3>Aggiungi Mostro</h3>
          <label>Cerca <input value={combatMonsterSearch} onChange={(event) => setCombatMonsterSearch(event.target.value)} placeholder="Nome, tipo o GS" /></label>
          <label>Mostro <select value={combatSelectedMonsterId} onChange={(event) => setCombatSelectedMonsterId(event.target.value)}>{filteredCombatMonsters.map((monster) => <option key={monster.id} value={monster.id}>{monster.name} · GS {monster.cr}</option>)}</select></label>
          <button type="button" onClick={addSelectedCombatMonster}>+ Aggiungi Mostro</button>
        </section>

        <section className="b44-card b44-combat-roster">
          <h3>Partecipanti</h3>
          {[...combatParty, ...combatMonsters].length ? [...combatParty, ...combatMonsters].map((actor) => (
            <article key={actor.id}>
              <div>
                <strong>{actor.name}</strong>
                <small>{actor.actorType === "monster" || actor.monsterId ? "Mostro" : "PG"} · Iniz. {getInitiativeTotal(actor)} · CA {actor.armorClass}</small>
              </div>
              <span>{actor.currentHp}/{actor.maxHp} PF</span>
              <button type="button" onClick={() => removeCombatActor(actor.id)}>×</button>
            </article>
          )) : <EmptyState>Aggiungi PG e mostri per preparare lo scontro.</EmptyState>}
          <button className="b44-generate" type="button" onClick={startMobileCombat}>Avvia combattimento</button>
          {!confirmCombatReset ? (
            <button className="b44-danger ghost" type="button" onClick={() => setConfirmCombatReset(true)}>Reset incontro</button>
          ) : (
            <div className="b44-confirm-delete">
              <p>Azzerare il combattimento corrente?</p>
              <div>
                <button type="button" onClick={() => setConfirmCombatReset(false)}>Annulla</button>
                <button className="danger" type="button" onClick={resetMobileCombat}>Reset</button>
              </div>
            </div>
          )}
        </section>
      </>
    );
  }

  function renderCombatTurn() {
    return (
      <>
        <section className="b44-card b44-active-turn">
          <small>Round {combatRound}</small>
          {activeCombatActor ? (
            <>
              <h2>{activeCombatActor.name}</h2>
              <BadgeRow>
                <span>{activeCombatActor.actorType === "monster" || activeCombatActor.monsterId ? "Mostro" : "PG"}</span>
                <span>PF {activeCombatActor.currentHp}/{activeCombatActor.maxHp}</span>
                <span>CA {activeCombatActor.armorClass}</span>
                <span>Iniz. {getInitiativeTotal(activeCombatActor)}</span>
              </BadgeRow>
              <p>{getConditionText(activeCombatActor)}</p>
              {getActorStatus(activeCombatActor) && <strong className="b44-status-alert">{getActorStatus(activeCombatActor)}</strong>}
            </>
          ) : (
            <p>Aggiungi partecipanti in Preparazione.</p>
          )}
        </section>

        <section className="b44-card b44-form b44-quick-actions">
          <h3>Azione rapida</h3>
          <label>Bersaglio <select value={combatTargetId} onChange={(event) => setCombatTargetId(event.target.value)}><option value="">Seleziona bersaglio</option>{combatTargets.map((actor) => <option key={actor.id} value={actor.id}>{actor.name} · {actor.currentHp}/{actor.maxHp} PF</option>)}</select></label>
          {selectedCombatTarget && (
            <div className="b44-target-preview">
              <strong>{selectedCombatTarget.name}</strong>
              <span>PF {selectedCombatTarget.currentHp}/{selectedCombatTarget.maxHp} · CA {selectedCombatTarget.armorClass}</span>
              <small>{getConditionText(selectedCombatTarget)}</small>
              {getActorStatus(selectedCombatTarget) && <em>{getActorStatus(selectedCombatTarget)}</em>}
            </div>
          )}
          <label>Risultato dadi / valore <input className="b44-combat-value" type="number" min="0" value={combatValue} onChange={(event) => setCombatValue(event.target.value)} /></label>
          <div className="b44-action-buttons">
            <button type="button" onClick={() => applyMobileHpChange("damage")}>Danno</button>
            <button type="button" onClick={() => applyMobileHpChange("heal")}>Cura</button>
          </div>
          <label>Condizione <select value={combatCondition} onChange={(event) => setCombatCondition(event.target.value)}>{combatConditions.map((condition) => <option key={condition} value={condition}>{condition}</option>)}</select></label>
          <button type="button" onClick={toggleMobileCondition}>Applica / rimuovi condizione</button>
          <button className="b44-generate" type="button" onClick={nextMobileTurn}>Prossimo turno</button>
        </section>
      </>
    );
  }

  function renderCombatOrder() {
    return (
      <section className="b44-card b44-combat-order">
        {combatInitiativeOrder.length ? combatInitiativeOrder.map((actor, index) => (
          <button
            className={index === safeCombatTurnIndex ? "active" : ""}
            key={actor.id}
            type="button"
            onClick={() => {
              setCombatTurnIndex(index);
              setCombatTargetId(actor.id);
            }}
          >
            <strong>{getInitiativeTotal(actor)}</strong>
            <span>{actor.name}</span>
            <small>{actor.actorType === "monster" || actor.monsterId ? "Mostro" : "PG"} · PF {actor.currentHp}/{actor.maxHp} · CA {actor.armorClass}</small>
            {getActorStatus(actor) && <em>{getActorStatus(actor)}</em>}
          </button>
        )) : <EmptyState>Nessun partecipante.</EmptyState>}
      </section>
    );
  }

  function renderCombatMobile() {
    return (
      <div>
        <MobileHeader title="Combatti" showBack onBack={goHome} />
        <div className="b44-page">
          <TabBar tabs={combatTabs} active={combatTab} onChange={setCombatTab} />
          {combatTab === "Preparazione" && renderCombatPreparation()}
          {combatTab === "Turno" && renderCombatTurn()}
          {combatTab === "Ordine" && renderCombatOrder()}
        </div>
      </div>
    );
  }

  function renderMap() {
    return (
      <div>
        <MobileHeader title="Mappa" showBack onBack={goHome} />
        <div className="b44-page b44-list">
          {mapRegions.map((region) => <button className="b44-row" key={region.id} type="button" onClick={() => { setSelectedRegionId(region.id); setScreen("mapRegion"); }}><div><strong>{region.label}</strong><small>Mercanti {region.shops.length} · Locande {region.taverns.length}</small></div><em>›</em></button>)}
        </div>
      </div>
    );
  }

  function renderMapRegion() {
    const region = mapRegions.find((item) => item.id === selectedRegionId) || mapRegions[0];
    return (
      <div>
        <MobileHeader title={region.label} showBack onBack={() => setScreen("map")} rightAction={<div className="b44-header-actions"><button onClick={() => generateShop(region.id)} type="button">+M</button><button onClick={() => generateTavern(region.id)} type="button">+L</button></div>} />
        <div className="b44-page b44-list">
          {[...region.shops, ...region.taverns].map((item) => <button className="b44-row" key={item.id} type="button" onClick={() => item.type === "tavern" ? openTavern(item) : openShop(item)}><div><strong>{item.type === "tavern" ? item.shopName : item.name}</strong><small>{item.type === "tavern" ? "Locanda" : "Mercante"}</small></div><em>›</em></button>)}
          {!region.shops.length && !region.taverns.length && <EmptyState>Nessun luogo registrato.</EmptyState>}
        </div>
      </div>
    );
  }

  function renderMapMobile() {
    return (
      <div>
        <MobileHeader title="Mappa" showBack onBack={goHome} />
        <div className="b44-page">
          <div className="b44-segment">
            <button
              type="button"
              className={mobileMapTab === "biomes" ? "active" : ""}
              onClick={() => setMobileMapTab("biomes")}
            >
              Biomi
            </button>
            <button
              type="button"
              className={mobileMapTab === "maps" ? "active" : ""}
              onClick={() => setMobileMapTab("maps")}
            >
              Mappe
            </button>
          </div>

          {mobileMapTab === "maps" ? (
            <MapGenerator compact sessionId={activeSessionId} />
          ) : (
            <div className="b44-list">
          {mapRegions.map((region) => (
            <button
              className="b44-row b44-map-region-row"
              key={region.id}
              type="button"
              onClick={() => {
                setSelectedRegionId(region.id);
                setScreen("mapRegion");
              }}
            >
              <span className="b44-biome-icon">{getBiomeIcon(region.id)}</span>
              <div>
                <strong>{region.label}</strong>
                <small>Mercanti {region.shops.length} · Locande {region.taverns.length}</small>
              </div>
              <em>›</em>
            </button>
          ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  function renderMapRegionMobile() {
    const region = mapRegions.find((item) => item.id === selectedRegionId) || mapRegions[0];
    return (
      <div>
        <MobileHeader title={region.label} showBack onBack={() => setScreen("map")} />
        <div className="b44-page">
          <section className="b44-card b44-map-region-hero">
            <span className="b44-biome-icon large">{getBiomeIcon(region.id)}</span>
            <div>
              <h2>{region.label}</h2>
              <p>Mercanti {region.shops.length} · Locande {region.taverns.length}</p>
            </div>
          </section>
          <div className="b44-map-actions">
            <button type="button" onClick={() => generateShop(region.id)}>Genera mercante qui</button>
            <button type="button" onClick={() => generateTavern(region.id)}>Genera locanda qui</button>
          </div>
          <section className="b44-list">
            <h3 className="b44-list-title">Mercanti</h3>
            {region.shops.length ? region.shops.map((item) => (
              <button className="b44-row" key={item.id} type="button" onClick={() => openShop(item)}>
                <div><strong>{item.name}</strong><small>{item.shopName || "Bottega"}</small></div>
                <em>›</em>
              </button>
            )) : <EmptyState>Nessun mercante in questa zona.</EmptyState>}
            <h3 className="b44-list-title">Locande</h3>
            {region.taverns.length ? region.taverns.map((item) => (
              <button className="b44-row" key={item.id} type="button" onClick={() => openTavern(item)}>
                <div><strong>{item.shopName || "Locanda"}</strong><small>{item.name || "Locandiere"}</small></div>
                <em>›</em>
              </button>
            )) : <EmptyState>Nessuna locanda in questa zona.</EmptyState>}
          </section>
        </div>
      </div>
    );
  }

  function renderSettings() {
    return (
      <div>
        <MobileHeader title="Impostazioni" showBack onBack={goHome} />
        <div className="b44-page">
          <section className="b44-card b44-form">
            <label>Area geografica <select value={sessionRegion || "generic"} onChange={(e) => onChangeSessionRegion?.(e.target.value)}>{merchantRegions.map((r) => <option key={r.id} value={r.id}>{r.label}</option>)}</select></label>
            <label>Livello party <select value={String(partyLevel || 1)} onChange={(e) => onChangePartyLevel?.(Number(e.target.value))}>{Array.from({ length: 20 }, (_, i) => <option key={i + 1} value={i + 1}>Livello {i + 1}</option>)}</select></label>
            <label>Prestigio <select value={generationPrestigeMode || "random"} onChange={(e) => onChangeGenerationPrestigeMode?.(e.target.value)}><option value="random">Casuale</option>{prestigeOptions.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}</select></label>
            <button type="button" onClick={() => onSaveCurrentSession?.()}>Salva partita</button>
            <button type="button" onClick={() => onCreateEmptySession?.("Nuova partita")}>Nuova partita</button>
          </section>
          <section className="b44-list">
            {savedSessions.map((session) => <article className="b44-row" key={session.id}><button type="button" onClick={() => onLoadSession?.(session.id)}><strong>{session.name}</strong><small>{new Date(session.updatedAt || session.createdAt).toLocaleDateString("it-IT")}</small></button><button className="b44-mini danger" type="button" onClick={() => onDeleteSession?.(session.id)}>Elimina</button></article>)}
          </section>
        </div>
      </div>
    );
  }

  const renderers = {
    home: renderHome,
    merchants: renderMerchants,
    merchantDetail: renderMerchantDetail,
    itemDetail: renderItemDetail,
    taverns: renderTavernsMobile,
    tavernDetail: renderTavernDetailMobile,
    legacyTavernDetail: renderTavernDetail,
    bestiary: renderBestiaryMobile,
    monsterDetail: renderMonsterDetailMobile,
    legacyBestiary: renderBestiary,
    legacyMonsterDetail: renderMonsterDetail,
    combat: renderCombatMobile,
    legacyCombat: renderCombat,
    map: renderMapMobile,
    mapRegion: renderMapRegionMobile,
    legacyMap: renderMap,
    legacyMapRegion: renderMapRegion,
    settings: renderSettings,
  };

  return (
    <div className="base44-mobile-app">
      {(renderers[screen] || renderHome)()}
      {renderPrestigeConfirmModal()}
      <MobileBottomNav activeScreen={screen} onNavigate={(nextScreen) => setScreen(nextScreen)} labels={screenLabels} />
    </div>
  );
}
