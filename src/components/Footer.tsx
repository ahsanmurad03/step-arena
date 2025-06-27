import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <footer>
        <div className="footer-first">
          <div className="img">
            <img src="/assets/images/Layer_x0020_1.png" alt="Step Arena Logo" />
          </div>
          <div>
            <i className="fa fa-map-marker"></i>
            <span>Marigona Hill</span>
          </div>
          <div>
            <i className="fa fa-phone-alt"></i>
            <span>Contact us: <span className="text">+383 (0) 49 333 934</span></span>
          </div>
          <div className="first-footericon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-tiktok"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        <div className="footer-secound">
          <div>
            <h4>Links</h4>
          </div>
          <div className="anchors">
            <div className="anchor1">
              <Link to="/">HOME</Link>
              <Link to="/about">ABOUT US</Link>
              <Link to="/outdoor">OUTDOOR</Link>
              <Link to="/indoor">INDOOR</Link>
              <Link to="/hotel-restaurant">HOTEL & RESTAURANT</Link>
              <Link to="/memberships">MEMBERSHIPS</Link>
            </div>
            
            <div className="anchor2">
              <Link to="/packages">PACKAGES</Link>
              <Link to="/news">NEWS</Link>
              <Link to="/events">EVENTS</Link>
              <Link to="/gallery">GALLERY</Link>
              <Link to="/partnerships">PARTNERSHIPS</Link>
              <Link to="/contact">CONTACT</Link>
            </div>
          </div>
        </div>

        <div className="footer-third">
          <div>
            <h4>Security</h4>
          </div>
          <div className="third-anchorDiv">
            <Link to="/terms">TERMS AND CONDITIONS</Link>
            <Link to="/privacy">PRIVACY AND POLICY</Link>
            <Link to="/cookies">COOKIES</Link>
            <Link to="/accessibility">ACCESSIBILITY</Link>
            <Link to="/faqs">FAQS</Link>
          </div>
        </div>

        <div className="footer-fourth">
          <img src="/assets/images/Vector.png" alt="" />
        </div>
      </footer>

      <div className="reserved">
        <div className="text">
          <p>© 2025 Step Arena. All rights are reserved.</p>
        </div>
        <div className="reservedIcon">
          <span className="backTotop">Back to top</span>
          <a href="#topbar" onClick={scrollToTop}>
            <i className="fas fa-angle-up"></i>
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer 