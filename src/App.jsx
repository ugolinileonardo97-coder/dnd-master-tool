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
    merchants[0];

  function addGeneratedMerchant() {
    const newMerchant =
      mode === "tavern"
       ? generateTavern(Number(partyLevel))
        : {
            ...generateMerchant(Number(partyLevel)),
            location: "",
            notes: "",
            inventory: generateShopInventory(Number(partyLevel)),
          };

    setMerchants((currentMerchants) => [...currentMerchants, newMerchant]);
    setSelectedMerchantId(newMerchant.id);
  }

  function addMerchant() {
    const newMerchant = {
      id: Date.now(),
      type: mode,
      name: mode === "tavern" ? "Nuovo locandiere" : "Nuovo commerciante",
      race: "",
      shopName: mode === "tavern" ? "Nuova locanda" : "",
      location: "",
      story: "",
      locationDescription: "",
      discount: "Basso",
      gold: 100,
      shopTier: mode === "tavern" ? "Neutrale" : "Povero",
      sideQuest: "",
      reward: "",
      notes: "",
      inventory: [],

      roomsAvailable: mode === "tavern" ? 3 : undefined,
      roomPrice: mode === "tavern" ? "2 mo a notte" : undefined,
      reputation: mode === "tavern" ? "Neutrale" : undefined,
      dishName: mode === "tavern" ? "" : undefined,
      dishDescription: mode === "tavern" ? "" : undefined,
      dishBonus: mode === "tavern" ? "" : undefined,
      dishMalus: mode === "tavern" ? "" : undefined,
      services: mode === "tavern" ? [] : undefined,
    };

    setMerchants((currentMerchants) => [...currentMerchants, newMerchant]);
    setSelectedMerchantId(newMerchant.id);
  }

  function regenerateDescriptions() {
    function regenerateDescriptions() {
  if (!selectedMerchant) return;

  const regenerated =
    selectedMerchant.type === "tavern"
      ? generateTavern(Number(partyLevel))
      : {
          ...selectedMerchant,
          ...generateMerchantDescriptions(selectedMerchant),
        };

  setMerchants((currentMerchants) =>
    currentMerchants.map((merchant) =>
      merchant.id === selectedMerchant.id
        ? {
            ...merchant,
            story: regenerated.story,
            locationDescription: regenerated.locationDescription,
            sideQuest: regenerated.sideQuest,
            reward: regenerated.reward,

            ...(selectedMerchant.type === "tavern"
              ? {
                  dishName: regenerated.dishName,
                  dishDescription: regenerated.dishDescription,
                  dishBonus: regenerated.dishBonus,
                  dishMalus: regenerated.dishMalus,
                  services: regenerated.services,
                  roomsAvailable: regenerated.roomsAvailable,
                  roomPrice: regenerated.roomPrice,
                  reputation: regenerated.reputation,
                  shopTier: regenerated.shopTier,
                  discount: regenerated.discount,
                  gold: regenerated.gold,
                }
              : {}),
          }
        : merchant
    )
  );
}

    const descriptions = generateMerchantDescriptions(selectedMerchant);

    setMerchants((currentMerchants) =>
      currentMerchants.map((merchant) =>
        merchant.id === selectedMerchant.id
          ? {
              ...merchant,
              ...descriptions,
            }
          : merchant
      )
    );
  }

  function deleteMerchant() {
    if (merchants.length <= 1) return;

    const updatedMerchants = merchants.filter(
      (merchant) => merchant.id !== selectedMerchant.id
    );

    setMerchants(updatedMerchants);
    setSelectedMerchantId(updatedMerchants[0].id);
  }

  function updateMerchant(field, value) {
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
    const newItem = {
      id: Date.now(),
      category: "Varie",
      name: "",
      qty: 1,
      price: "",
      notes: "",
    };

    setMerchants((currentMerchants) =>
      currentMerchants.map((merchant) =>
        merchant.id === selectedMerchant.id
          ? {
              ...merchant,
              inventory: [...merchant.inventory, newItem],
            }
          : merchant
      )
    );
  }

  function updateInventoryItem(itemId, field, value) {
    setMerchants((currentMerchants) =>
      currentMerchants.map((merchant) =>
        merchant.id === selectedMerchant.id
          ? {
              ...merchant,
              inventory: merchant.inventory.map((item) =>
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
    setMerchants((currentMerchants) =>
      currentMerchants.map((merchant) =>
        merchant.id === selectedMerchant.id
          ? {
              ...merchant,
              inventory: merchant.inventory.filter((item) => item.id !== itemId),
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