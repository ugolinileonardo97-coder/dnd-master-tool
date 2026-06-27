export function MobileHeader({ title, kicker, action }) {
  return (
    <header className="mobile-native-header fantasy-card">
      <div>
        {kicker && <span>{kicker}</span>}
        {title && <h1>{title}</h1>}
      </div>
      {action}
    </header>
  );
}
