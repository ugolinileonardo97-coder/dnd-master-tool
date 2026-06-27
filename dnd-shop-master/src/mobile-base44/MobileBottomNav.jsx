const navItems = [
  { id: "home", icon: "⌂", label: "Home" },
  { id: "merchants", icon: "◆", label: "Mercanti" },
  { id: "taverns", icon: "◈", label: "Locande" },
  { id: "bestiary", icon: "✦", label: "Bestiario" },
  { id: "combat", icon: "⚔", label: "Combatti" },
  { id: "map", icon: "⌖", label: "Mappa" },
];

function navGroup(screen) {
  if (screen === "merchantDetail" || screen === "itemDetail") return "merchants";
  if (screen === "tavernDetail") return "taverns";
  if (screen === "monsterDetail") return "bestiary";
  if (screen === "mapRegion") return "map";
  return screen;
}

export function MobileBottomNav({ activeScreen, onNavigate }) {
  const active = navGroup(activeScreen);
  return (
    <nav className="b44-bottom-nav" aria-label="Navigazione mobile">
      <div>
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={active === item.id ? "active" : ""}
            onClick={() => onNavigate(item.id)}
          >
            <span>{item.icon}</span>
            <small>{item.label}</small>
          </button>
        ))}
      </div>
    </nav>
  );
}
