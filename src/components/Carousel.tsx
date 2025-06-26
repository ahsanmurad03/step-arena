import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface CarouselSlide {
  id: number
  image: string
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

interface CarouselProps {
  slides: CarouselSlide[]
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className="main-carousel-wrapper">
      <div className="carousel slide position-relative">
        {/* Slides */}
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
              style={{ display: index === currentSlide ? 'block' : 'none' }}
            >
              <img src={slide.image} className="d-block w-100" alt={slide.title} />
              <div className="carousel-caption">
                <h5 className="carousel-text">{slide.title}</h5>
                <p className="carousel-para">{slide.description}</p>
                <button className="carousel-btn">
                  <Link to={slide.buttonLink}>{slide.buttonText}</Link>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button 
          className="carousel-control-prev" 
          type="button"
          onClick={goToPrevious}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button 
          className="carousel-control-next" 
          type="button"
          onClick={goToNext}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  )
}

export default Carousel 