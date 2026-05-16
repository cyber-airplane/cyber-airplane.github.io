import './AircraftCard.css'

interface AircraftCardProps {
  image: string
  imageAlt: string
  model: string
  country: string
  type: string
  onViewDetail?: () => void
}

export default function AircraftCard({
  image,
  imageAlt,
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
          <span className="aircraft-card__label">型号:</span>
          <span className="aircraft-card__value aircraft-card__value--accent">{model}</span>
        </div>
        <div className="aircraft-card__row">
          <span className="aircraft-card__label">国家:</span>
          <span className="aircraft-card__value">{country}</span>
        </div>
        <div className="aircraft-card__row">
          <span className="aircraft-card__label">类型:</span>
          <span className="aircraft-card__value">{type}</span>
        </div>
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
