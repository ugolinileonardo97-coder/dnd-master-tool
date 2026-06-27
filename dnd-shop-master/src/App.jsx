import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { AppShell } from "./components/layout/AppShell";
import { getMerchantRegionById } from "./data/merchantRegions";
import { normalizePrestige } from "./data/prestige";
import { createEncounterMonsterFromBestiary } from "./utils/combatMonsterFactory";
import { readCombatState, writeCombatState } from "./utils/combatStorage";
import "./style.css";

const EMPTY_SESSION_NAME = "Partita non salvata";

function createSessionId() {
  return `session-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function resolveMapRegion(item, fallbackRegion = "generic") {
  const regionId =
    item?.mapRegion ||
    item?.geographicRegion ||
    item?.region ||
    item?.area ||
    fallbackRegion ||
    "generic";

  return getMerchantRegionById(regionId).id;
}

async function loadMerchantGenerator() {
  return import("./services/generateMerchant");
}

async function loadTavernGenerator() {
  return import("./services/generateTavern");
}

async function loadShopInventoryGenerator() {
  return import("./services/generateShopInventory");
}

export default function App() {
  const [mode, setMode] = useLocalStorage("dnd-shop-mode", "shop");
  const [combatEntryKey, setCombatEntryKey] = useState(0);
  const [partyLevel, setPartyLevel] = useLocalStorage("dnd-shop-party-level", 1);
  const [merchants, setMerchants] = useLocalStorage("dnd-merchants", []);
  const [savedSessions, setSavedSessions] = useLocalStorage(
    "dnd-shop-sessions",
    []
  );
  const [activeSessionId, setActiveSessionId] = useLocalStorage(
    "dnd-shop-active-session-id",
    null
  );
  const [sessionRegion, setSessionRegion] = useLocalStorage(
    "dnd-shop-session-region",
    "generic"
  );
  const [generationPrestigeMode, setGenerationPrestigeMode] = useLocalStorage(
    "dnd-shop-generation-prestige-mode",
    "random"
  );
  const [favoriteMonsterIds, setFavoriteMonsterIds] = useLocalStorage(
    "dnd-shop-favorite-monster-ids",
    []
  );

  const [selectedMerchantId, setSelectedMerchantId] = useState(
    merchants[0]?.id || null
  );

  const activeSession =
    savedSessions.find((session) => session.id === activeSessionId) || null;

  const activeSessionName = activeSession?.name || EMPTY_SESSION_NAME;

  const selectedMerchant =
    merchants.find((merchant) => merchant.id === selectedMerchantId) ||
    merchants[0] ||
    null;

  function buildSessionData() {
    return {
      mode,
      partyLevel,
      sessionRegion,
      generationPrestigeMode,
      merchants,
      selectedMerchantId,
      favoriteMonsterIds,
      combatState: readCombatState(),
    };
  }

  function changeMode(nextMode) {
    if (nextMode === "combat") {
      setCombatEntryKey((currentKey) => currentKey + 1);
    }

    setMode(nextMode);
  }

  function applySessionData(data) {
    const nextMerchants = Array.isArray(data?.merchants) ? data.merchants : [];
    const nextFavoriteMonsterIds = Array.isArray(data?.favoriteMonsterIds)
      ? data.favoriteMonsterIds
      : [];

    setMerchants(nextMerchants);
    setPartyLevel(data?.partyLevel || 1);
    setSessionRegion(data?.sessionRegion || "generic");
    setGenerationPrestigeMode(data?.generationPrestigeMode || "random");
    setFavoriteMonsterIds(nextFavoriteMonsterIds);
    setSelectedMerchantId(data?.selectedMerchantId || nextMerchants[0]?.id || null);
    setMode(data?.mode || "shop");
    writeCombatState(data?.combatState || null);
  }

  function saveCurrentSession(name) {
    const now = new Date().toISOString();
    const cleanName =
      String(name || activeSession?.name || "").trim() ||
      `Partita ${new Date().toLocaleDateString("it-IT")}`;

    const currentData = buildSessionData();

    if (activeSession) {
      setSavedSessions((currentSessions) =>
        currentSessions.map((session) =>
          session.id === activeSession.id
            ? {
                ...session,
                name: cleanName,
                updatedAt: now,
                data: currentData,
              }
            : session
        )
      );

      return activeSession.id;
    }

    const newSession = {
      id: createSessionId(),
      name: cleanName,
      createdAt: now,
      updatedAt: now,
      data: currentData,
    };

    setSavedSessions((currentSessions) => [newSession, ...currentSessions]);
    setActiveSessionId(newSession.id);

    return newSession.id;
  }

  function createEmptySession(name = "Nuova partita") {
    const now = new Date().toISOString();
    const newSession = {
      id: createSessionId(),
      name,
      createdAt: now,
      updatedAt: now,
      data: {
        mode: "shop",
        partyLevel: 1,
        sessionRegion: "generic",
        generationPrestigeMode: "random",
        merchants: [],
        selectedMerchantId: null,
        favoriteMonsterIds: [],
        combatState: null,
      },
    };

    setSavedSessions((currentSessions) => [newSession, ...currentSessions]);
    setActiveSessionId(newSession.id);
    applySessionData(newSession.data);
    setMode("shop");

    return newSession.id;
  }

  function loadSession(sessionId) {
    const session = savedSessions.find((item) => item.id === sessionId);

    if (!session) return;

    setActiveSessionId(session.id);
    applySessionData(session.data);
  }

  function renameSession(sessionId, nextName) {
    const cleanName = String(nextName || "").trim();

    if (!cleanName) return;

    setSavedSessions((currentSessions) =>
      currentSessions.map((session) =>
        session.id === sessionId
          ? {
              ...session,
              name: cleanName,
              updatedAt: new Date().toISOString(),
            }
          : session
      )
    );
  }

  function duplicateSession(sessionId) {
    const session = savedSessions.find((item) => item.id === sessionId);

    if (!session) return;

    const now = new Date().toISOString();
    const duplicatedSession = {
      ...session,
      id: createSessionId(),
      name: `${session.name} - copia`,
      createdAt: now,
      updatedAt: now,
      data: {
        ...session.data,
        sessionRegion: session.data?.sessionRegion || "generic",
        generationPrestigeMode: session.data?.generationPrestigeMode || "random",
        merchants: Array.isArray(session.data?.merchants)
          ? session.data.merchants.map((merchant) => ({ ...merchant }))
          : [],
        favoriteMonsterIds: Array.isArray(session.data?.favoriteMonsterIds)
          ? [...session.data.favoriteMonsterIds]
          : [],
        combatState: session.data?.combatState
          ? { ...session.data.combatState }
          : null,
      },
    };

    setSavedSessions((currentSessions) => [
      duplicatedSession,
      ...currentSessions,
    ]);
  }

  function deleteSession(sessionId) {
    setSavedSessions((currentSessions) =>
      currentSessions.filter((session) => session.id !== sessionId)
    );

    if (activeSessionId === sessionId) {
      setActiveSessionId(null);
    }
  }

  function changeSessionRegion(nextRegionId) {
    const nextRegion = getMerchantRegionById(nextRegionId).id;

    setSessionRegion(nextRegion);

    if (!activeSessionId) return;

    setSavedSessions((currentSessions) =>
      currentSessions.map((session) =>
        session.id === activeSessionId
          ? {
              ...session,
              updatedAt: new Date().toISOString(),
              data: {
                ...(session.data || {}),
                sessionRegion: nextRegion,
              },
            }
          : session
      )
    );
  }

  function changeGenerationPrestigeMode(nextMode) {
    const normalizedMode = nextMode === "random" ? "random" : normalizePrestige(nextMode);

    setGenerationPrestigeMode(normalizedMode);
    patchActiveSessionData({ generationPrestigeMode: normalizedMode });
  }

  function patchActiveSessionData(patch) {
    if (!activeSessionId) return;

    setSavedSessions((currentSessions) =>
      currentSessions.map((session) =>
        session.id === activeSessionId
          ? {
              ...session,
              updatedAt: new Date().toISOString(),
              data: {
                ...(session.data || {}),
                ...patch,
              },
            }
          : session
      )
    );
  }

  function toggleMerchantFavorite(merchantId) {
    const nextMerchants = merchants.map((merchant) =>
      merchant.id === merchantId
        ? {
            ...merchant,
            favorite: !merchant.favorite,
          }
        : merchant
    );

    setMerchants(nextMerchants);
    patchActiveSessionData({ merchants: nextMerchants });
  }

  function toggleFavoriteMonster(monsterId) {
    const safeIds = Array.isArray(favoriteMonsterIds) ? favoriteMonsterIds : [];
    const nextFavoriteMonsterIds = safeIds.includes(monsterId)
      ? safeIds.filter((id) => id !== monsterId)
      : [...safeIds, monsterId];

    setFavoriteMonsterIds(nextFavoriteMonsterIds);
    patchActiveSessionData({ favoriteMonsterIds: nextFavoriteMonsterIds });
  }

  function addMonsterToCombatFromBestiary(monster) {
    if (!monster) return null;

    const encounterMonster = createEncounterMonsterFromBestiary(monster);
    const currentCombatState = readCombatState() || {};
    const currentLog = Array.isArray(currentCombatState.combatLog)
      ? currentCombatState.combatLog
      : [];

    const nextCombatState = {
      round: currentCombatState.round || 1,
      currentTurnIndex: currentCombatState.currentTurnIndex || 0,
      party: Array.isArray(currentCombatState.party)
        ? currentCombatState.party
        : [],
      encounterMonsters: [
        ...(Array.isArray(currentCombatState.encounterMonsters)
          ? currentCombatState.encounterMonsters
          : []),
        encounterMonster,
      ],
      activeActorId: currentCombatState.activeActorId || "",
      selectedTargetId: currentCombatState.selectedTargetId || encounterMonster.id,
      damageAmount: currentCombatState.damageAmount || 5,
      selectedCombatItemId: currentCombatState.selectedCombatItemId || "",
      combatItemSearch: currentCombatState.combatItemSearch || "",
      combatItemManualValue: currentCombatState.combatItemManualValue || "",
      combatLog: [
        {
          id: `log-${Date.now()}-${Math.random().toString(16).slice(2)}`,
          text: `Bestiario: ${monster.name} aggiunto al combattimento.`,
        },
        ...currentLog,
      ],
    };

    writeCombatState(nextCombatState);
    patchActiveSessionData({ combatState: nextCombatState });

    return encounterMonster;
  }

  async function addGeneratedMerchant(targetMode = "shop", regionOverride = null) {
    const isTavern = targetMode === "tavern";
    const defaultRegion = getMerchantRegionById(regionOverride || sessionRegion).id;
    const selectedPrestige =
      generationPrestigeMode === "random"
        ? null
        : normalizePrestige(generationPrestigeMode);
    const merchantModule = isTavern ? null : await loadMerchantGenerator();
    const tavernModule = isTavern ? await loadTavernGenerator() : null;
    const inventoryModule = isTavern ? null : await loadShopInventoryGenerator();

    const generatedMerchant = isTavern
      ? null
      : merchantModule.generateMerchant({
          partyLevel: Number(partyLevel),
          region: defaultRegion,
          prestige: selectedPrestige,
          existingMerchants: merchants,
        });

    const newItem = isTavern
      ? {
          ...tavernModule.generateTavern({
            partyLevel: Number(partyLevel),
            region: defaultRegion,
            prestige: selectedPrestige,
            existingTaverns: merchants,
          }),
          type: "tavern",
          favorite: false,
          mapRegion: defaultRegion,
          inventory: [],
        }
      : {
          ...generatedMerchant,
          type: "shop",
          favorite: false,
          mapRegion: resolveMapRegion(generatedMerchant, defaultRegion),
          location: "",
          notes: "",
          inventory: await inventoryModule.generateShopInventory(
            Number(partyLevel),
            generatedMerchant?.region || "generic",
            {
              reputation: generatedMerchant?.reputation,
              wealth: generatedMerchant?.shopTier,
              prestige: generatedMerchant?.prestige,
            }
          ),
        };

    const nextMerchants = [...merchants, newItem];

    setMode(targetMode);
    setMerchants(nextMerchants);
    setSelectedMerchantId(newItem.id);
    patchActiveSessionData({
      mode: targetMode,
      merchants: nextMerchants,
      selectedMerchantId: newItem.id,
    });

    return newItem;
  }

  function addMerchant(targetMode = "shop") {
    const isTavern = targetMode === "tavern";

    const newItem = {
      id: Date.now(),
      type: isTavern ? "tavern" : "shop",

      name: isTavern ? "Nuovo locandiere" : "Nuovo commerciante",
      race: "",
      shopName: isTavern ? "Nuova locanda" : "",
      region: getMerchantRegionById(sessionRegion).id,
      mapRegion: getMerchantRegionById(sessionRegion).id,
      location: "",

      story: "",
      locationDescription: "",

      discount: "Basso",
      gold: 100,
      shopTier: isTavern ? "Neutrale" : "Povero",
      prestige: "buona",

      sideQuest: "",
      reward: "",
      notes: "",

      inventory: [],
      favorite: false,

      roomsAvailable: isTavern ? 3 : undefined,
      roomPrice: isTavern ? "5 ma" : undefined,
      reputation: isTavern ? "Neutrale" : "Sconosciuto",

      dishName: isTavern ? "" : undefined,
      dishDescription: isTavern ? "" : undefined,
      dishBonus: isTavern ? "" : undefined,
      dishMalus: isTavern ? "" : undefined,
      dishPrice: isTavern ? "2 ma" : undefined,
      dishTier: isTavern ? "Modesto" : undefined,

      rooms: isTavern ? [] : undefined,
      services: isTavern ? [] : undefined,
    };

    const nextMerchants = [...merchants, newItem];

    setMode(targetMode);
    setMerchants(nextMerchants);
    setSelectedMerchantId(newItem.id);
    patchActiveSessionData({
      mode: targetMode,
      merchants: nextMerchants,
      selectedMerchantId: newItem.id,
    });

    return newItem;
  }

  async function regenerateDescriptions() {
    if (!selectedMerchant) return;

    if (selectedMerchant.type === "tavern") {
      const { generateTavern } = await loadTavernGenerator();
      const regeneratedTavern = generateTavern({
        partyLevel: Number(partyLevel),
        region: selectedMerchant.region || sessionRegion,
        prestige: selectedMerchant.prestige || "buona",
        existingTaverns: merchants,
      });

      const nextMerchants = merchants.map((merchant) =>
        merchant.id === selectedMerchant.id
          ? {
              ...merchant,
              type: "tavern",

              story: regeneratedTavern.story,
              locationDescription: regeneratedTavern.locationDescription,

              sideQuest: regeneratedTavern.sideQuest,
              reward: regeneratedTavern.reward,

              dishName: regeneratedTavern.dishName,
              dishDescription: regeneratedTavern.dishDescription,
              dishBonus: regeneratedTavern.dishBonus,
              dishMalus: regeneratedTavern.dishMalus,
              dishPrice: regeneratedTavern.dishPrice,
              dishTier: regeneratedTavern.dishTier,

              services: regeneratedTavern.services,

              rooms: regeneratedTavern.rooms,
              roomsAvailable: regeneratedTavern.roomsAvailable,
              roomPrice: regeneratedTavern.roomPrice,

              reputation: regeneratedTavern.reputation,
              region: selectedMerchant.region || sessionRegion,
              prestige: selectedMerchant.prestige || regeneratedTavern.prestige || "buona",
              shopTier: regeneratedTavern.shopTier,
              discount: regeneratedTavern.discount,
              gold: regeneratedTavern.gold,

              inventory: [],
            }
          : merchant
      );

      setMerchants(nextMerchants);
      patchActiveSessionData({ merchants: nextMerchants });

      return;
    }

    const { generateMerchantDescriptions } = await loadMerchantGenerator();
    const descriptions = generateMerchantDescriptions(selectedMerchant);

    const nextMerchants = merchants.map((merchant) =>
      merchant.id === selectedMerchant.id
        ? {
            ...merchant,
            type: merchant.type === "tavern" ? "tavern" : "shop",
            ...descriptions,
          }
        : merchant
    );

    setMerchants(nextMerchants);
    patchActiveSessionData({ merchants: nextMerchants });
  }

  function deleteMerchant(targetMerchantId = null) {
    const merchantToDelete = targetMerchantId
      ? merchants.find((merchant) => merchant.id === targetMerchantId)
      : selectedMerchant;

    if (!merchantToDelete) return;

    const updatedMerchants = merchants.filter(
      (merchant) => merchant.id !== merchantToDelete.id
    );

    setMerchants(updatedMerchants);

    const sameTypeFallback = updatedMerchants.find(
      (merchant) => merchant.type === merchantToDelete.type
    );

    const fallbackMerchant = sameTypeFallback || updatedMerchants[0] || null;

    setSelectedMerchantId(fallbackMerchant?.id || null);
    patchActiveSessionData({
      merchants: updatedMerchants,
      selectedMerchantId: fallbackMerchant?.id || null,
      mode: fallbackMerchant?.type === "tavern" ? "tavern" : "shop",
    });

    if (fallbackMerchant?.type === "tavern") {
      setMode("tavern");
    } else if (fallbackMerchant) {
      setMode("shop");
    }
  }

  async function updateMerchant(field, value, options = {}) {
    if (!selectedMerchant) return;

    if (field === "prestige") {
      const nextPrestige = normalizePrestige(value);
      const baseMerchant = {
        ...selectedMerchant,
        prestige: nextPrestige,
        descriptionSeed: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      };
      const shouldRegenerate = options.regeneratePrestige === true;

      let nextMerchant = baseMerchant;

      if (shouldRegenerate && selectedMerchant.type === "tavern") {
        const { generateTavern } = await loadTavernGenerator();
        const regeneratedTavern = generateTavern({
          partyLevel: Number(partyLevel),
          region: selectedMerchant.region || sessionRegion,
          prestige: nextPrestige,
          existingTaverns: merchants,
        });

        nextMerchant = {
          ...baseMerchant,
          story: regeneratedTavern.story,
          locationDescription: regeneratedTavern.locationDescription,
          sideQuest: regeneratedTavern.sideQuest,
          reward: regeneratedTavern.reward,
          dishName: regeneratedTavern.dishName,
          dishDescription: regeneratedTavern.dishDescription,
          dishBonus: regeneratedTavern.dishBonus,
          dishMalus: regeneratedTavern.dishMalus,
          dishPrice: regeneratedTavern.dishPrice,
          dishTier: regeneratedTavern.dishTier,
          services: regeneratedTavern.services,
          rooms: regeneratedTavern.rooms,
          roomsAvailable: regeneratedTavern.roomsAvailable,
          roomPrice: regeneratedTavern.roomPrice,
          gold: regeneratedTavern.gold,
        };
      }

      if (selectedMerchant.type !== "tavern") {
        const { generateMerchantDescriptions } = await loadMerchantGenerator();
        const descriptions = generateMerchantDescriptions(baseMerchant);

        nextMerchant = {
          ...baseMerchant,
          ...descriptions,
        };

        if (shouldRegenerate) {
          const { generateShopInventory } = await loadShopInventoryGenerator();
          nextMerchant.inventory = await generateShopInventory(
            Number(partyLevel),
            baseMerchant.region || "generic",
            {
              reputation: baseMerchant.reputation,
              wealth: baseMerchant.shopTier,
              prestige: nextPrestige,
            }
          );
        }
      }

      const nextMerchants = merchants.map((merchant) =>
        merchant.id === selectedMerchant.id ? nextMerchant : merchant
      );

      setMerchants(nextMerchants);
      patchActiveSessionData({ merchants: nextMerchants });
      return;
    }

    const descriptionFields = new Set([
      "name",
      "shopName",
      "race",
      "region",
      "alignment",
      "reputation",
      "shopTier",
      "discount",
    ]);

    let nextMerchantPatch = {
      [field]: value,
    };

    if (selectedMerchant.type !== "tavern" && descriptionFields.has(field)) {
      const { generateMerchantDescriptions } = await loadMerchantGenerator();
      const baseMerchant = {
        ...selectedMerchant,
        [field]: value,
        descriptionSeed: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      };
      const descriptions = generateMerchantDescriptions(baseMerchant);

      nextMerchantPatch = {
        [field]: value,
        descriptionSeed: baseMerchant.descriptionSeed,
        ...descriptions,
      };
    }

    const nextMerchants = merchants.map((merchant) =>
      merchant.id === selectedMerchant.id
        ? {
            ...merchant,
            ...nextMerchantPatch,
          }
        : merchant
    );

    setMerchants(nextMerchants);
    patchActiveSessionData({ merchants: nextMerchants });
  }

  function addInventoryItem(itemTemplate = null) {
    if (!selectedMerchant || selectedMerchant.type === "tavern") return;

    const newItem = itemTemplate
      ? {
          ...itemTemplate,
          id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
          qty: itemTemplate.qty || itemTemplate.quantity || 1,
          quantity: itemTemplate.quantity || itemTemplate.qty || 1,
        }
      : {
          id: Date.now(),
          category: "Varie",
          name: "",
          qty: 1,
          quantity: 1,
          price: "",
          description: "",
          effect: "Nessun effetto speciale.",
          damage: "N/A",
          damageType: null,
          useTime: "N/A",
          target: "N/A",
          duration: "N/A",
          charges: null,
          savingThrow: null,
          armorClass: null,
          notes: "",
          rarity: "Comune",
          tags: [],
          regions: [],
        };

    const nextMerchants = merchants.map((merchant) =>
      merchant.id === selectedMerchant.id
        ? {
            ...merchant,
            inventory: [...(merchant.inventory || []), newItem],
          }
        : merchant
    );

    setMerchants(nextMerchants);
    patchActiveSessionData({ merchants: nextMerchants });
  }

  function updateInventoryItem(itemId, field, value) {
    if (!selectedMerchant || selectedMerchant.type === "tavern") return;

    const nextMerchants = merchants.map((merchant) =>
      merchant.id === selectedMerchant.id
        ? {
            ...merchant,
            inventory: (merchant.inventory || []).map((item) =>
              item.id === itemId
                ? {
                    ...item,
                    [field]: value,
                    ...(field === "qty" ? { quantity: value } : {}),
                  }
                : item
            ),
          }
        : merchant
    );

    setMerchants(nextMerchants);
    patchActiveSessionData({ merchants: nextMerchants });
  }

  function deleteInventoryItem(itemId) {
    if (!selectedMerchant || selectedMerchant.type === "tavern") return;

    const nextMerchants = merchants.map((merchant) =>
      merchant.id === selectedMerchant.id
        ? {
            ...merchant,
            inventory: (merchant.inventory || []).filter(
              (item) => item.id !== itemId
            ),
          }
        : merchant
    );

    setMerchants(nextMerchants);
    patchActiveSessionData({ merchants: nextMerchants });
  }

  return (
    <AppShell
      mode={mode}
      onChangeMode={changeMode}
      combatEntryKey={combatEntryKey}
      partyLevel={partyLevel}
      onChangePartyLevel={setPartyLevel}
      generationPrestigeMode={generationPrestigeMode}
      onChangeGenerationPrestigeMode={changeGenerationPrestigeMode}
      merchants={merchants}
      selectedMerchant={selectedMerchant}
      selectedMerchantId={selectedMerchantId}
      onSelectMerchant={setSelectedMerchantId}
      onAddMerchant={addMerchant}
      onAddGeneratedMerchant={addGeneratedMerchant}
      onRegenerateDescriptions={regenerateDescriptions}
      onDeleteMerchant={deleteMerchant}
      onUpdateMerchant={updateMerchant}
      onToggleMerchantFavorite={toggleMerchantFavorite}
      onAddInventoryItem={addInventoryItem}
      onUpdateInventoryItem={updateInventoryItem}
      onDeleteInventoryItem={deleteInventoryItem}
      favoriteMonsterIds={favoriteMonsterIds}
      onToggleFavoriteMonster={toggleFavoriteMonster}
      onAddMonsterToCombat={addMonsterToCombatFromBestiary}
      sessionRegion={sessionRegion}
      onChangeSessionRegion={changeSessionRegion}
      activeSessionName={activeSessionName}
      activeSessionId={activeSessionId}
      savedSessions={savedSessions}
      onSaveCurrentSession={saveCurrentSession}
      onCreateEmptySession={createEmptySession}
      onLoadSession={loadSession}
      onRenameSession={renameSession}
      onDuplicateSession={duplicateSession}
      onDeleteSession={deleteSession}
    />
  );
}
