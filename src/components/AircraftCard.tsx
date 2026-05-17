import './AircraftCard.css'

interface AircraftCardProps {
  image: string
  imageAlt: string
  description: string
  model: string
  country: string
  type: string
  onViewDetail?: () => void
}

export default function AircraftCard({
  image,
  imageAlt,
  description,
  model,
  country,
  type,
  onViewDetail,
}: AircraftCardProps) {
  return (
    <article className="aircraft-card">
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
            <span className="aircraft-card__value aircraft-card__value--accent">{model}</span>
            <span className="aircraft-card__value">{country}</span>
          </div>
          <span className="aircraft-card__type">{type}</span>
        </div>
        <p className="aircraft-card__description">{description}</p>
      </div>
      <button
        type="button"
        className="aircraft-card__button"
        onClick={onViewDetail}
      >
        查看详情
      </button>
    </article>
  )
}
