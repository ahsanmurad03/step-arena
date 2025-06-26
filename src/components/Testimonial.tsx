import React from 'react'

interface TestimonialData {
  id: number
  quote: string
  name: string
  image: string
  rating: number
}

interface TestimonialProps {
  testimonials: TestimonialData[]
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonials }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i 
        key={index} 
        className={`fa fa-star ${index < rating ? 'filled' : ''}`}
      ></i>
    ))
  }

  return (
    <div className="testimonials">
      <div className="textimonial-box">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="box">
            <div className="quotes">
              <i className="fa fa-quote-left"></i><br />
            </div>
            <p>{testimonial.quote}</p>

            <div className="rating">
              {renderStars(testimonial.rating)}
            </div>

            <div className="circle-img">
              <img src={testimonial.image} alt={testimonial.name} />
              <h5>{testimonial.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial 