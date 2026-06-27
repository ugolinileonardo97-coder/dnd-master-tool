const navItems = [
  { id: "home", icon: "⌂", label: "Home" },
  { id: "merchants", icon: "◆", label: "Mercanti" },
  { id: "taverns", icon: "◈", label: "Locande" },
  { id: "bestiary", icon: "✦", label: "Bestiario" },
  { id: "combat", icon: "⚔", label: "Combat" },
  { id: "map", icon: "⌖", label: "Mappa" },
];

export function MobileBottomNavV2({ activeScreen, onNavigate }) {
  const activeGroup =
    activeScreen === "merchantDetail" || activeScreen === "itemDetail"
      ? "merchants"
      : activeScreen;

  return (
    <nav className="mobile-v2-bottom-nav" aria-label="Navigazione mobile">
      {navItems.map((item) => (
        <button
          key={item.id}
          type="button"
          className={activeGroup === item.id ? "active" : ""}
          onClick={() => onNavigate(item.id)}
        >
          <span aria-hidden="true">{item.icon}</span>
          <small>{item.label}</small>
        </button>
      ))}
    </nav>
  );
}
