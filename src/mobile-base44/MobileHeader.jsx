export function MobileHeader({ title, subtitle, showBack = false, onBack, rightAction }) {
  return (
    <header className="b44-header">
      <div>
        {showBack && (
          <button type="button" className="b44-back" onClick={onBack} aria-label="Indietro">
            ‹
          </button>
        )}
        <div className="b44-header-titleblock">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
      {rightAction && <div className="b44-header-right">{rightAction}</div>}
    </header>
  );
}
