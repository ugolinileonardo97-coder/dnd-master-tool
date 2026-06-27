const navItems = [
  { id: "home", icon: "⌂", label: "Home" },
  { id: "merchantsList", icon: "◆", label: "Mercanti" },
  { id: "tavernsList", icon: "◈", label: "Locande" },
  { id: "bestiaryList", icon: "✦", label: "Bestiario" },
  { id: "combat", icon: "⚔", label: "Combat" },
  { id: "mapList", icon: "⌖", label: "Mappa" },
];

export function MobileBottomNav({ activeScreen, onNavigate }) {
  return (
    <nav className="mobile-bottom-nav" aria-label="Navigazione mobile">
      {navItems.map((item) => (
        <button
          key={item.id}
          type="button"
          className={activeScreen === item.id ? "active" : ""}
          onClick={() => onNavigate(item.id)}
        >
          <span aria-hidden="true">{item.icon}</span>
          <small>{item.label}</small>
        </button>
      ))}
    </nav>
  );
}
