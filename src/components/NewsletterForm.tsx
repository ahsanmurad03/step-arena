import React, { useState } from 'react'

interface NewsletterFormProps {
  className?: string
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Newsletter subscription:', formData)
  }

  return (
    <div className={`newsletter-form ${className}`}>
      <div className="newsletter-content">
        <h3>Stay Updated with Step Arena</h3>
        <p>Subscribe to our newsletter and never miss the latest news, events, and special offers from Step Arena.</p>
        
        <form onSubmit={handleSubmit} className="newsletter-form-fields">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              value={formData.surname}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="newsletter-btn">
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewsletterForm 