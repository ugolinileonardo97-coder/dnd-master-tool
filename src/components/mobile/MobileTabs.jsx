export function MobileTabs({ tabs, activeTab, onChange }) {
  return (
    <nav className="mobile-native-tabs mobile-tabs" aria-label="Sezioni">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={activeTab === tab.id ? "active" : ""}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
