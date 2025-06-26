import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Outdoor from './pages/Outdoor'
import Indoor from './pages/Indoor'
import HotelRestaurant from './pages/HotelRestaurant'
import Packages from './pages/Packages'
import News from './pages/News'
import Events from './pages/Events'
import Contact from './pages/Contact'
import Memberships from './pages/Memberships'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/outdoor" element={<Outdoor />} />
          <Route path="/indoor" element={<Indoor />} />
          <Route path="/hotel-restaurant" element={<HotelRestaurant />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/memberships" element={<Memberships />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App 