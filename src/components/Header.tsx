import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header: React.FC = () => {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <header>
      <div className="topbar">
        <div>
          <i className="fa fa-map-marker"></i>
          <span>Marigona Hill</span>
        </div>
        <div className="pipe-line">|</div>
        <div>
          <i className="fa fa-phone"></i>
          <span>Contact us: +383 (0) 49 333 934</span>
        </div>
      </div>

      <nav>
        <div className="navimg">
          <img src="/assets/images/Logo.png" alt="Step Arena Logo" />
        </div>
        <div className="nav-menu">
          <Link to="/" className={isActive('/') ? 'active' : ''}>
            HOME
          </Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''}>
            ABOUT US
          </Link>
          <Link to="/outdoor" className={isActive('/outdoor') ? 'active' : ''}>
            OUTDOOR
          </Link>
          <Link to="/indoor" className={isActive('/indoor') ? 'active' : ''}>
            INDOOR
          </Link>
          <Link to="/hotel-restaurant" className={isActive('/hotel-restaurant') ? 'active' : ''}>
            HOTEL & RESTAURANT
          </Link>
          <Link to="/packages" className={isActive('/packages') ? 'active' : ''}>
            PACKAGES
          </Link>
          <Link to="/news" className={isActive('/news') ? 'active' : ''}>
            NEWS
          </Link>
          <Link to="/events" className={isActive('/events') ? 'active' : ''}>
            EVENTS
          </Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
            CONTACT
          </Link>
        </div>
        <div className="nav-btn">
          <button>
            <Link to="/memberships">MEMBERSHIPS</Link>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header 