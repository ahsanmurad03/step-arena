import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="page-container">
      <div className="page-hero">
        <h1>Contact Us</h1>
        <p>Get in touch with Step Arena</p>
      </div>
      
      <div className="page-content">
        <div className="contact-info">
          <div className="contact-details">
            <h2>Visit Us</h2>
            <div className="contact-item">
              <i className="fa fa-map-marker"></i>
              <span>Marigona Hill</span>
            </div>
            <div className="contact-item">
              <i className="fa fa-phone"></i>
              <span>+383 (0) 49 333 934</span>
            </div>
            <div className="contact-item">
              <i className="fa fa-envelope"></i>
              <span>info@step-arena.com</span>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>

        <div className="location-map">
          <h2>Find Us</h2>
          <p>Located in the beautiful hills of Marigona, Step Arena is easily accessible and offers ample parking for visitors.</p>
        </div>
      </div>
    </div>
  )
}

export default Contact 