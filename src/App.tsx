import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import AircraftSection from './components/AircraftSection'
import AircraftDetail from './pages/AircraftDetail'
import ComingSoon from './pages/ComingSoon'
import './App.css'
import './components/Navbar.css'
import './components/Footer.css'
import './components/AircraftCard.css'
import './components/HeroSection.css'
import './pages/AircraftDetail.css'
import './pages/ComingSoon.css'

function Home() {
  return (
    <main className="home">
      <HeroSection />
      <div className="home__terminal">
        <AircraftSection />
      </div>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="crt-scanlines" aria-hidden="true" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aircraft" element={<ComingSoon />} />
        <Route path="/aircraft/:name" element={<AircraftDetail />} />
        <Route path="/weapons" element={<ComingSoon />} />
        <Route path="/sensors" element={<ComingSoon />} />
        <Route path="/tactics" element={<ComingSoon />} />
        <Route path="/links" element={<ComingSoon />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
