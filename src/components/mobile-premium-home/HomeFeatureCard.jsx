function HomeFeatureCard({ title, description, icon, background, onClick }) {
  return (
    <button
      className="home-feature-card"
      type="button"
      onClick={onClick}
      style={{ '--feature-image': `url("${background}")` }}
    >
      <span className="home-feature-card__icon-ring" aria-hidden="true">
        <img src={icon} alt="" className="home-feature-card__icon-img" />
      </span>
      <span className="home-feature-card__title">{title}</span>
      <span className="home-feature-card__description">{description}</span>
    </button>
  )
}

export default HomeFeatureCard
