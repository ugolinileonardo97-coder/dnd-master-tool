import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { initialMerchants } from "./data/initialMerchants";
import { AppShell } from "./components/layout/AppShell";
import {
  generateMerchant,
  generateMerchantDescriptions,
} from "./services/generateMerchant";
import { generateShopInventory } from "./services/generateShopInventory";
import { generateTavern } from "./services/generateTavern";
import "./style.css";

export default function App() {
  const [mode, setMode] = useState("shop");
  const [partyLevel, setPartyLevel] = useState(1);

  const [merchants, setMerchants] = useLocalStorage(
    "dnd-merchants",
    initialMerchants
  );

  const [selectedMerchantId, setSelectedMerchantId] = useState(
    merchants[0]?.id || null
  );

  const selectedMerchant =
    merchants.find((merchant) => merchant.id === selectedMerchantId) ||
    merchants[0] ||
    null;

  function addGeneratedMerchant(targetMode = "shop") {
    const isTavern = targetMode === "tavern";

    const newItem = isTavern
      ? {
          ...generateTavern(Number(partyLevel)),
          type: "tavern",
          inventory: [],
        }
      : {
          ...generateMerchant(Number(partyLevel)),
          type: "shop",
          location: "",
          notes: "",
          inventory: generateShopInventory(Number(partyLevel)),
        };

    setMode(targetMode);
    setMerchants((currentMerchants) => [...currentMerchants, newItem]);
    setSelectedMerchantId(newItem.id);
  }

  function addMerchant(targetMode = "shop") {
    const isTavern = targetMode === "tavern";

    const newItem = {
      id: Date.now(),
      type: isTavern ? "tavern" : "shop",

      name: isTavern ? "Nuovo locandiere" : "Nuovo commerciante",
      race: "",
      shopName: isTavern ? "Nuova locanda" : "",
      location: "",

      story: "",
      locationDescription: "",

      discount: "Basso",
      gold: 100,
      shopTier: isTavern ? "Neutrale" : "Povero",

      sideQuest: "",
      reward: "",
      notes: "",

      inventory: [],

      roomsAvailable: isTavern ? 3 : undefined,
      roomPrice: isTavern ? "5 ma" : undefined,
      reputation: isTavern ? "Neutrale" : undefined,

      dishName: isTavern ? "" : undefined,
      dishDescription: isTavern ? "" : undefined,
      dishBonus: isTavern ? "" : undefined,
      dishMalus: isTavern ? "" : undefined,
      dishPrice: isTavern ? "2 ma" : undefined,
      dishTier: isTavern ? "Modesto" : undefined,

      rooms: isTavern ? [] : undefined,
      services: isTavern ? [] : undefined,
    };

    setMode(targetMode);
    setMerchants((currentMerchants) => [...currentMerchants, newItem]);
    setSelectedMerchantId(newItem.id);
  }

  function regenerateDescriptions() {
    if (!selectedMerchant) return;

    if (selectedMerchant.type === "tavern") {
      const regeneratedTavern = generateTavern(Number(partyLevel));

      setMerchants((currentMerchants) =>
        currentMerchants.map((merchant) =>
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
                shopTier: regeneratedTavern.shopTier,
                discount: regeneratedTavern.discount,
                gold: regeneratedTavern.gold,

                inventory: [],
              }
            : merchant
        )
      );

      return;
    }

    const descriptions = generateMerchantDescriptions(selectedMerchant);

    setMerchants((currentMerchants) =>
      currentMerchants.map((merchant) =>
        merchant.id === selectedMerchant.id
          ? {
              ...merchant,
              type: merchant.type === "tavern" ? "tavern" : "shop",
              ...descriptions,
            }
          : merchant
      )
    );
  }

  function deleteMerchant() {
    if (!selectedMerchant || merchants.length <= 1) return;

    const updatedMerchants = merchants.filter(
      (merchant) => merchant.id !== selectedMerchant.id
    );

    setMerchants(updatedMerchants);
    setSelectedMerchantId(updatedMerchants[0]?.id || null);

    if (updatedMerchants[0]?.type === "tavern") {
      setMode("tavern");
    } else {
      setMode("shop");
    }
  }

  function updateMerchant(field, value) {
    if (!selectedMerchant) return;

    setMerchants((currentMerchants) =>
      currentMerchants.map((merchant) =>
        merchant.id === selectedMerchant.id
          ? {
              ...merchant,
              [field]: value,
            }
          : merchant
      )
    );
  }

  function addInventoryItem() {
    if (!selectedMerchant || selectedMerchant.type === "tavern") return;

    const newItem = {
      id: Date.now(),
      category: "Varie",
      name: "",
      qty: 1,
      price: "",
      notes: "",
      rarity: "Comune",
    };

    setMerchants((currentMerchants) =>
      currentMerchants.map((merchant) =>
        merchant.id === selectedMerchant.id
          ? {
              ...merchant,
              inventory: [...(merchant.inventory || []), newItem],
            }
          : merchant
      )
    );
  }

  function updateInventoryItem(itemId, field, value) {
    if (!selectedMerchant || selectedMerchant.type === "tavern") return;

    setMerchants((currentMerchants) =>
      currentMerchants.map((merchant) =>
        merchant.id === selectedMerchant.id
          ? {
              ...merchant,
              inventory: (merchant.inventory || []).map((item) =>
                item.id === itemId
                  ? {
                      ...item,
                      [field]: value,
                    }
                  : item
              ),
            }
          : merchant
      )
    );
  }

  function deleteInventoryItem(itemId) {
    if (!selectedMerchant || selectedMerchant.type === "tavern") return;

    setMerchants((currentMerchants) =>
      currentMerchants.map((merchant) =>
        merchant.id === selectedMerchant.id
          ? {
              ...merchant,
              inventory: (merchant.inventory || []).filter(
                (item) => item.id !== itemId
              ),
            }
          : merchant
      )
    );
  }

  return (
    <AppShell
      mode={mode}
      onChangeMode={setMode}
      partyLevel={partyLevel}
      onChangePartyLevel={setPartyLevel}
      merchants={merchants}
      selectedMerchant={selectedMerchant}
      selectedMerchantId={selectedMerchantId}
      onSelectMerchant={setSelectedMerchantId}
      onAddMerchant={addMerchant}
      onAddGeneratedMerchant={addGeneratedMerchant}
      onRegenerateDescriptions={regenerateDescriptions}
      onDeleteMerchant={deleteMerchant}
      onUpdateMerchant={updateMerchant}
      onAddInventoryItem={addInventoryItem}
      onUpdateInventoryItem={updateInventoryItem}
      onDeleteInventoryItem={deleteInventoryItem}
    />
  );
}