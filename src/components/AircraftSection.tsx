import AircraftCard from './AircraftCard'
import { AIRCRAFT_DATA } from '../data/indexCard'
import './AircraftSection.css'

export default function AircraftSection() {
  return (
    <section className="aircraft-section">
      <div className="aircraft-section__header">
        <h2 className="aircraft-section__title crt-glow">+-- 猜你想要 --+</h2>
        <div className="aircraft-section__divider" />
      </div>
      <div className="aircraft-section__grid">
        {AIRCRAFT_DATA.map((aircraft) => (
          <AircraftCard
            key={aircraft.model}
            image={aircraft.image}
            imageAlt={aircraft.imageAlt}
            description={aircraft.imageAlt}
            model={aircraft.model}
            country={aircraft.country}
            type={aircraft.type}
            onViewDetail={() => {
              console.log(`查看 ${aircraft.model} 详情`)
            }}
          />
        ))}
      </div>
    </section>
  )
}
