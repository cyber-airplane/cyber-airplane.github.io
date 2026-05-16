import './HeroSection.css'

const HERO_IMAGE = '/hero-image.png'

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__terminal">
        <div className="hero__title-bar">
          <span className="hero__title-bar-label">J-20</span>
          <div className="hero__title-bar-dots">
            <div className="hero__dot hero__dot--inactive" />
            <div className="hero__dot hero__dot--inactive" />
            <div className="hero__dot hero__dot--active" />
          </div>
        </div>
        <div className="hero__content">
          <img
            src={HERO_IMAGE}
            alt="Chengdu J-20 Mighty Dragon technical blueprint and photorealistic render"
            className="hero__image"
          />
          <div className="hero__overlay" />
          <div className="hero__border" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
