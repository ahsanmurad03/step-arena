import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'
import Gallery from '../components/Gallery'
import Testimonial from '../components/Testimonial'

const Home: React.FC = () => {
  // Carousel data
  const carouselSlides = [
    {
      id: 1,
      image: '/assets/images/view-calm-blue-sea 1.png',
      title: 'Step Arena – The Center of Sports and Recreational Excellence',
      description: 'The largest complex in the region for sports, relaxation, and wellness.',
      buttonText: 'Read More',
      buttonLink: '/about'
    },
    {
      id: 2,
      image: '/assets/images/three-male-swimmers-racing-against-each-other 1.png',
      title: 'Step Aqua Indoor – Training Without Seasons',
      description: '50m Olympic pool, grandstands, children\'s pool, and fresh air.',
      buttonText: 'Read More',
      buttonLink: '/indoor'
    },
    {
      id: 3,
      image: '/assets/images/view-calm-blue-sea 1.png',
      title: 'Aqua Outdoor – Active Summers in Nature',
      description: 'Perfect for competitions, families, and outdoor recreation.',
      buttonText: 'Read More',
      buttonLink: '/outdoor'
    }
  ]

  // Gallery data
  const galleryImages = [
    { id: 1, src: '/assets/images/Screenshot 2025-06-23 233449.png', alt: 'Gallery Image 1', category: 'OUTDOOR' },
    { id: 2, src: '/assets/images/Screenshot 2025-06-23 233514.png', alt: 'Gallery Image 2', category: 'INDOOR' },
    { id: 3, src: '/assets/images/Screenshot 2025-06-23 233538.png', alt: 'Gallery Image 3', category: 'HOTEL & RESTAURANT' },
    { id: 4, src: '/assets/images/Screenshot 2025-06-23 233559.png', alt: 'Gallery Image 4', category: 'EVENTS' },
    { id: 5, src: '/assets/images/Screenshot 2025-06-23 233624.png', alt: 'Gallery Image 5', category: 'OUTDOOR' },
    { id: 6, src: '/assets/images/Screenshot 2025-06-23 233651.png', alt: 'Gallery Image 6', category: 'INDOOR' },
    { id: 7, src: '/assets/images/Screenshot 2025-06-23 233514.png', alt: 'Gallery Image 7', category: 'HOTEL & RESTAURANT' },
    { id: 8, src: '/assets/images/Screenshot 2025-06-23 233449.png', alt: 'Gallery Image 8', category: 'EVENTS' }
  ]

  const galleryCategories = ['ALL', 'OUTDOOR', 'INDOOR', 'HOTEL & RESTAURANT', 'EVENTS']

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote: 'Stërvitem në Step Arena që nga hapja. Pishinat janë të standardeve ndërkombëtare dhe ambienti të motivon çdo ditë të japësh më të mirën.',
      name: 'Ardian K.',
      image: '/assets/images/Ellipse 1.png',
      rating: 5
    },
    {
      id: 2,
      quote: 'Stërvitem në Step Arena që nga hapja. Pishinat janë të standardeve ndërkombëtare dhe ambienti të motivon çdo ditë të japësh më të mirën.',
      name: 'Ardian K.',
      image: '/assets/images/Ellipse 1 (1).png',
      rating: 5
    },
    {
      id: 3,
      quote: 'Stërvitem në Step Arena që nga hapja. Pishinat janë të standardeve ndërkombëtare dhe ambienti të motivon çdo ditë të japësh më të mirën.',
      name: 'Ardian K.',
      image: '/assets/images/Ellipse 1 (2).png',
      rating: 5
    },
    {
      id: 4,
      quote: 'Stërvitem në Step Arena që nga hapja. Pishinat janë të standardeve ndërkombëtare dhe ambienti të motivon çdo ditë të japësh më të mirën.',
      name: 'Ardian K.',
      image: '/assets/images/Ellipse 1 (3).png',
      rating: 5
    }
  ]

  return (
    <div className="main">
      {/* Hero Carousel */}
      <Carousel slides={carouselSlides} />

      {/* Section Two */}
      <div className="section-two">
        <div className="left">
          <img src="/assets/images/Screenshot 2025-06-23 233128.png" alt="Step Arena" />
        </div>
        <div className="right">
          <h3>Step Arena – More Than a Sports Center</h3>
          <p>
            Perched atop a peaceful, green hill, far from urban noise, Step Arena offers a unique 
            experience that blends sports, relaxation, and wellness in a modern and inspiring 
            environment. With Olympic-size pools, recovery facilities, a hotel, a restaurant, 
            and specialized programs, we serve athletes, families, and anyone seeking more from their time.
          </p>
          <div className="rightsub-para">
            <p>
              This is where champions are born. <br />
              This is where minds are renewed. <br />
              This is where people connect.
            </p>
          </div>
          <button className="secSection-btn">
            <Link to="/about">READ MORE ABOUT US</Link>
          </button>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="third-section">
        <div className="first"></div>
        <div className="secound"></div>
        <div className="third"></div>
        <div className="fourth"></div>
      </div>

      {/* Inspire Section */}
      <div className="inspire-section">
        <div className="text">
          <h3>Step Arena Gallery – Moments that Inspire</h3>
          <p>
            Every image tells more than just a space – it captures the energy, dedication, 
            and joy that Step Arena brings every single day. Browse our gallery and experience 
            the unique atmosphere of the Olympic pools, relaxing Spa, thrilling events, 
            and unforgettable family moments.
          </p>
        </div>
        <div className="inspire-btn">
          <button>
            <Link to="/gallery">SEE MORE</Link>
          </button>
        </div>
      </div>

      {/* Gallery Component */}
      <Gallery images={galleryImages} categories={galleryCategories} />

      {/* Banner Section */}
      <div className="banner">
        <div className="inner-banner">
          <div className="left">
            <h5>TESTIMONIALS</h5>
            <h3>WHAT OUR VISITORS SAY</h3>
          </div>
          <div className="right">
            <p>
              At Step Arena, every experience leaves a mark – and the words of those who trust us 
              are the clearest proof of our quality and dedication. From elite athletes to families, 
              professional coaches to guests seeking relaxation, their voices speak of a space that 
              inspires, heals, and motivates
            </p>
          </div>
        </div>

        <Testimonial testimonials={testimonials} />
      </div>

      {/* Update Section */}
      <div className="inspire-section">
        <div className="text">
          <h3>Stay Updated with the Latest from Step Arena</h3>
          <p>
            From international swimming competitions and youth summer camps to wellness events 
            and new training programs – this section brings you the news that matters. Stay 
            connected to the latest developments and be part of the activities that shape our 
            vibrant sports and recreation community.
          </p>
        </div>
        <div className="inspire-btn">
          <button>
            <Link to="/news">SEE MORE</Link>
          </button>
        </div>
      </div>

      {/* Bottom Gallery */}
      <div className="bottom-gallery">
        <div className="first">
          <div className="bottom-first-innerDiv">
            <p>05, July 2025</p>
            <h4>"Prishtina Open 2025" – International Swimming Competition</h4>
            <p>
              Step Arena will host the region's largest swimming event – "Prishtina Open", 
              featuring clubs from 10 European countries.
            </p>
          </div>
        </div>

        <div className="secound">
          <div className="bottom-gallery-innersec2">
            <div>
              <img src="/assets/images/Screenshot 2025-06-23 233755.png" alt="News 1" />
            </div>
            <div>
              <p>05, July 2025</p>
              <h4>"Prishtina Open 2025" – International Swimming Competition</h4>
              <p>
                Step Arena will host the region's largest swimming event – "Prishtina Open", 
                featuring clubs from 10 European countries.
              </p>
            </div>
          </div>

          <div className="bottom-gallery-innersec2">
            <div>
              <img src="/assets/images/Screenshot 2025-06-23 233817.png" alt="News 2" />
            </div>
            <div>
              <p>05, July 2025</p>
              <h4>"Prishtina Open 2025" – International Swimming Competition</h4>
              <p>
                Step Arena will host the region's largest swimming event – "Prishtina Open", 
                featuring clubs from 10 European countries.
              </p>
            </div>
          </div>

          <div className="bottom-gallery-innersec2">
            <div>
              <img src="/assets/images/Screenshot 2025-06-23 233837.png" alt="News 3" />
            </div>
            <div>
              <p>05, July 2025</p>
              <h4>"Prishtina Open 2025" – International Swimming Competition</h4>
              <p>
                Step Arena will host the region's largest swimming event – "Prishtina Open", 
                featuring clubs from 10 European countries.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="blueLady">
        <div className="left">
          <img 
            src="/assets/images/beautiful-happy-young-woman-with-charming-smile-w-2023-11-27-05-11-28-2-e1732276156702 1.png" 
            alt="Newsletter" 
          />
        </div>
        <div className="right">
          <h3>Subscribe to the Step Arena Newsletter</h3>
          <p>
            Don't miss a thing! Subscribe to our newsletter and get updates straight to your inbox 
            about new courses, sports events, special offers, and expert tips for a healthy lifestyle. 
            We're here to keep you informed and inspired – whether you're an athlete, a parent, 
            or a recreational visitor.
          </p>
          <div className="inputs">
            <div>
              <input type="text" placeholder="Emri" className="small" />
            </div>
            <div>
              <input type="text" placeholder="Mbiemri" className="small" />
            </div>
            <div>
              <input type="email" placeholder="Email:" className="large" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home 