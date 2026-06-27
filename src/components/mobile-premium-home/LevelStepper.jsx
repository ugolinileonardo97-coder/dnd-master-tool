import FantasyIcon from './FantasyIcon.jsx'

function LevelStepper({ value, onChange }) {
  const updateLevel = (nextLevel) => {
    onChange(Math.min(20, Math.max(1, nextLevel)))
  }

  return (
    <div className="level-stepper">
      <span className="premium-field-label">Livello partita</span>
      <div className="level-stepper__control">
        <button
          type="button"
          aria-label="Diminuisci livello partita"
          disabled={value <= 1}
          onClick={() => updateLevel(value - 1)}
        >
          <FantasyIcon name="minus" decorative />
        </button>
        <strong>{value}</strong>
        <button
          type="button"
          aria-label="Aumenta livello partita"
          disabled={value >= 20}
          onClick={() => updateLevel(value + 1)}
        >
          <FantasyIcon name="plus" decorative />
        </button>
      </div>
    </div>
  )
}

export default LevelStepper
