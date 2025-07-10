import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureGrid from '../components/FeatureGrid';
import SwimmingGirlNewsletter from '../components/SwimmingGirlNewsletter';
import '../styles/pages/hotel-restaurant.css';

const HotelRestaurant: React.FC = () => {
  const accommodationFeatures = [
    {
      icon: 'fa-bed',
      title: 'Elegant Rooms',
      description: 'Premium standards with modern amenities'
    },
    {
      icon: 'fa-spa',
      title: 'Wellness Access',
      description: 'Direct access to wellness & training facilities'
    },
    {
      icon: 'fa-handshake',
      title: 'Conference Room',
      description: 'Professional space for team meetings'
    },
    {
      icon: 'fa-dumbbell',
      title: 'Training Friendly',
      description: 'Perfect for athletes and sports teams'
    }
  ];

  const restaurantFeatures = [
    {
      icon: 'fa-utensils',
      title: 'Sports Nutrition',
      description: 'Precise macronutrient control'
    },
    {
      icon: 'fa-users',
      title: 'Family Dining',
      description: 'Healthy options for everyone'
    },
    {
      icon: 'fa-leaf',
      title: 'Fresh Ingredients',
      description: 'Seasonal and locally sourced'
    },
    {
      icon: 'fa-concierge-bell',
      title: 'Premium Service',
      description: 'Fast and friendly staff'
    }
  ];

  const spaFeatures = [
    {
      icon: 'fa-hot-tub',
      title: 'Sauna',
      description: 'Deep relaxation facilities'
    },
    {
      icon: 'fa-water',
      title: 'Jacuzzi',
      description: 'Modern relaxation pools'
    },
    {
      icon: 'fa-hands',
      title: 'Massage',
      description: 'Professional therapeutic treatments'
    },
    {
      icon: 'fa-swimming-pool',
      title: 'Water Therapy',
      description: 'Recovery and circulation'
    }
  ];

  return (
    <div className="hotel-restaurant-page">
      <HeroSection
        title="STEP ARENA HOTEL & RESTAURANT"
        subtitle="Your Stay, Elevated"
        description="Located at the heart of the Step Arena complex, our hotel offers seamless blends of comfort, fueling, and proximity to world-class sports venues."
        backgroundImage="/assets/images/hotel-restaurant-hero.png"
      />

      <section className="blue-bg">
        <div className="container">
          <h2>STEP ARENA HOTEL & RESTAURANT</h2>
          <h3>Your Stay, Elevated</h3>
          <p>
            With 43 modern rooms, thoughtfully equipped for rest and recovery, guests enjoy direct access to our spa, 
            Olympic swimming pools, and fitness zones. The quiet environment, high-speed Wi-Fi, and professional amenities 
            create the perfect balance between work, leisure, and athletic preparation.
          </p>
          <button className="gallery-btn">SEE GALLERY</button>
        </div>
      </section>

      <section className="accommodation-section">
        <div className="container">
          <FeatureGrid
            features={accommodationFeatures}
            columns={4}
          />
        </div>
      </section>

      <section className="nutrition-section">
        <div className="container">
          <div className="content-wrapper">
            <div className="text-content">
              <h3>WHERE PERFORMANCE MEETS NUTRITION</h3>
              <p>
                The Step Arena Restaurant fuels your goals with a carefully crafted menu that blends flavor, health, 
                and performance. From high-protein options for athletes to balanced meals for families and children, 
                every dish is designed to nourish and energize.
              </p>
            </div>
            <div className="image-content">
              <img src="/assets/images/restaurant-image.jpg" alt="Healthy Restaurant Food" />
            </div>
          </div>
        </div>
      </section>

      <section className="restaurant-features">
        <div className="container">
          <FeatureGrid
            features={restaurantFeatures}
            columns={4}
          />
        </div>
      </section>

      <section className="spa-section">
        <div className="container">
          <h2>Step Spa – Recovery, Relaxation, and Rejuvenation</h2>
          <p>
            Step Spa is a serene and purpose-built suite within the Step Arena complex, dedicated to physical 
            and mental regeneration. Tailored for athletes, wellness-seeking visitors, and anyone in need of 
            personal care.
          </p>
          <div className="content-wrapper">
            <div className="image-content">
              <img src="/assets/images/spa-image.jpg" alt="Spa Treatment" />
            </div>
            <div className="spa-features">
              <FeatureGrid
                features={spaFeatures}
                columns={2}
              />
            </div>
          </div>
        </div>
      </section>

      <SwimmingGirlNewsletter />
    </div>
  );
};

export default HotelRestaurant; 