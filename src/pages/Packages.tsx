import React from 'react'

const Packages: React.FC = () => {
  const packages = [
    {
      id: 1,
      name: 'Family Fun Package',
      price: '€99',
      duration: 'Full Day',
      features: [
        'Full day pool access',
        'Family changing rooms',
        'Children\'s activities',
        'Lunch at restaurant',
        'Parking included'
      ]
    },
    {
      id: 2,
      name: 'Athlete Training Package',
      price: '€149',
      duration: 'Monthly',
      features: [
        'Unlimited pool access',
        'Professional coaching',
        'Training equipment',
        'Performance analysis',
        'Nutrition consultation'
      ]
    },
    {
      id: 3,
      name: 'Weekend Getaway',
      price: '€299',
      duration: '2 Days',
      features: [
        'Hotel accommodation',
        'All meals included',
        'Spa treatments',
        'Pool access',
        'Scenic hill tours'
      ]
    }
  ]

  return (
    <div className="page-container">
      <div className="page-hero">
        <h1>Packages & Offers</h1>
        <p>Special deals for every visitor</p>
      </div>
      
      <div className="page-content">
        <div className="packages-intro">
          <h2>Choose Your Perfect Package</h2>
          <p>
            Step Arena offers a variety of packages designed to meet different needs and budgets. 
            Whether you're looking for a family day out, professional training, or a relaxing getaway, 
            we have the perfect package for you.
          </p>
        </div>

        <div className="packages-grid">
          {packages.map((pkg) => (
            <div key={pkg.id} className="package-card">
              <div className="package-header">
                <h3>{pkg.name}</h3>
                <div className="package-price">
                  <span className="price">{pkg.price}</span>
                  <span className="duration">/ {pkg.duration}</span>
                </div>
              </div>
              <div className="package-features">
                <ul>
                  {pkg.features.map((feature, index) => (
                    <li key={index}>
                      <i className="fa fa-check"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="package-action">
                <button className="book-btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>

        <div className="custom-packages">
          <h2>Custom Packages</h2>
          <p>
            Need something specific? We can create custom packages for groups, events, and special occasions. 
            Contact us to discuss your requirements and we'll create a tailored solution just for you.
          </p>
          <button className="contact-btn">Contact for Custom Package</button>
        </div>
      </div>
    </div>
  )
}

export default Packages 