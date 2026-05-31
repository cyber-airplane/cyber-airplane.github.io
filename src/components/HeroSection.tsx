import './HeroSection.css'

export default function HeroSection() {
  const handleViewDetail = () => {
    window.open('/aircraft/J-20', '_blank')
  }

  return (
    <section className="hero">
      <div className="hero__image-wrapper" onClick={handleViewDetail} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleViewDetail()}>
        <img
          src="https://ipqpjqyryfgqphtfhbqv.supabase.co/storage/v1/object/sign/plane_img/J20.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zNDU0YmEzMi05MjNjLTRhMWQtOGY1MC1mMzViOWNlYWJiMjIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwbGFuZV9pbWcvSjIwLmpwZyIsImlhdCI6MTc3OTQ5OTAzOCwiZXhwIjozMzMxNTQ5OTAzOH0.O-gbchTXvqR7MNnujNthMkUfRG4Q7JWICFFyIytPZQg"
          alt="J-20"
          className="hero__image"
        />
      </div>
    </section>
  )
}
