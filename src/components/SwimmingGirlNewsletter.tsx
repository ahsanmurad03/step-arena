import React, { useState } from 'react'

interface SwimmingGirlNewsletterProps {
  className?: string
}

const SwimmingGirlNewsletter: React.FC<SwimmingGirlNewsletterProps> = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
    <div className={`blueLady ${className}`}>
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
        <form onSubmit={handleSubmit} className="inputs">
            <input 
              type="text" 
              name="firstName"
              placeholder="Emri" 
              className="small" 
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <input 
            
              type="text" 
              name="lastName"
              placeholder="Mbiemri" 
              className="small" 
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            <input 
              type="email" 
              name="email"
              placeholder="Email:" 
              className="small" 
              value={formData.email}
              onChange={handleInputChange}
              required
            />
        </form>
      </div>
    </div>
  )
}

export default SwimmingGirlNewsletter 