import './AircraftCard.css'

interface AircraftCardProps {
  image: string
  imageAlt: string
  description: string
  name: string
  country: string
  type: string
  onViewDetail?: () => void
}

export default function AircraftCard({
  image,
  imageAlt,
  description,
  name,
  country,
  type,
  onViewDetail,
}: AircraftCardProps) {
  const handleClick = () => {
    onViewDetail?.()
  }

  return (
    <article
      className="aircraft-card"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      <div className="aircraft-card__image-wrapper">
        <img
          src={image}
          alt={imageAlt}
          className="aircraft-card__image"
          loading="lazy"
        />
      </div>
      <div className="aircraft-card__info">
        <div className="aircraft-card__row">
          <div className="aircraft-card__meta">
            <span className="aircraft-card__value aircraft-card__value--accent">{name}</span>
            <span className="aircraft-card__value">{country}</span>
          </div>
          <span className="aircraft-card__type">{type}</span>
        </div>
        <p className="aircraft-card__description">{description}</p>
      </div>
      <button
        type="button"
        className="aircraft-card__button"
      >
        查看详情
      </button>
    </article>
  )
}
