import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import AircraftSection from './components/AircraftSection'
import './App.css'
import './components/Navbar.css'
import './components/Footer.css'
import './components/AircraftCard.css'
import './components/HeroSection.css'

function App() {
  return (
    <>
      <div className="crt-scanlines" aria-hidden="true" />
      <Navbar />
      <main className="main-content">
        <HeroSection />
        <AircraftSection />
      </main>
      <Footer />
    </>
  )
}

export default App
