import React from 'react'

const Memberships: React.FC = () => {
  const membershipPlans = [
    {
      id: 1,
      name: 'Basic',
      price: '€29',
      period: 'month',
      features: [
        'Access to outdoor pools',
        'Basic changing facilities',
        'Weekend access only',
        'Guest passes (2 per month)',
        'Online booking system'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Premium',
      price: '€59',
      period: 'month',
      features: [
        'Access to all pools',
        'Premium changing facilities',
        '7 days a week access',
        'Guest passes (5 per month)',
        'Group fitness classes',
        'Online booking system',
        'Nutritional consultation'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Elite',
      price: '€99',
      period: 'month',
      features: [
        'Unlimited access to all facilities',
        'VIP changing rooms',
        '24/7 access',
        'Unlimited guest passes',
        'Personal training sessions',
        'Spa and wellness services',
        'Priority event booking',
        'Complimentary towel service'
      ],
      popular: false
    }
  ]

  return (
    <div className="page-container">
      <div className="page-hero">
        <h1>Memberships</h1>
        <p>Choose the perfect membership plan for you</p>
      </div>
      
      <div className="page-content">
        <div className="membership-intro">
          <h2>Join the Step Arena Community</h2>
          <p>
            Become a member of Step Arena and enjoy exclusive access to our world-class facilities. 
            Choose from our flexible membership options designed to fit your lifestyle and training needs.
          </p>
        </div>

        <div className="membership-plans">
          {membershipPlans.map((plan) => (
            <div key={plan.id} className={`membership-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className="membership-header">
                <h3>{plan.name}</h3>
                <div className="membership-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">/ {plan.period}</span>
                </div>
              </div>
              <div className="membership-features">
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <i className="fa fa-check"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="membership-action">
                <button className={`join-btn ${plan.popular ? 'popular-btn' : ''}`}>
                  Choose {plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="membership-benefits">
          <h2>Membership Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <i className="fa fa-users"></i>
              <h3>Community</h3>
              <p>Join a community of athletes, families, and fitness enthusiasts.</p>
            </div>
            <div className="benefit-item">
              <i className="fa fa-calendar"></i>
              <h3>Flexible Access</h3>
              <p>Access our facilities when it's convenient for you.</p>
            </div>
            <div className="benefit-item">
              <i className="fa fa-star"></i>
              <h3>Premium Services</h3>
              <p>Enjoy exclusive member-only services and facilities.</p>
            </div>
            <div className="benefit-item">
              <i className="fa fa-money"></i>
              <h3>Great Value</h3>
              <p>Save money with our affordable membership rates.</p>
            </div>
          </div>
        </div>

        <div className="membership-faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h4>Can I pause my membership?</h4>
            <p>Yes, memberships can be paused for up to 3 months per year for medical reasons or extended travel.</p>
          </div>
          <div className="faq-item">
            <h4>Are there family discounts available?</h4>
            <p>Yes, we offer special family rates for households with multiple members. Contact us for details.</p>
          </div>
          <div className="faq-item">
            <h4>Can I upgrade my membership?</h4>
            <p>Absolutely! You can upgrade your membership at any time and pay the prorated difference.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Memberships 