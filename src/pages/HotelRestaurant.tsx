import React from 'react'

const HotelRestaurant: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-hero">
        <h1>Hotel & Restaurant</h1>
        <p>Luxury accommodation and fine dining</p>
      </div>
      
      <div className="page-content">
        <div className="section-two">
          <div className="left">
            <img src="/assets/images/beautiful-happy-young-woman-with-charming-smile-w-2023-11-27-05-11-28-2-e1732276156702 1.png" alt="Hotel Restaurant" />
          </div>
          <div className="right">
            <h3>Luxury Stay & Gourmet Dining</h3>
            <p>
              Experience comfort and culinary excellence at Step Arena. Our hotel offers 
              modern accommodations with stunning hill views, while our restaurant serves 
              fresh, locally-sourced cuisine in an elegant setting.
            </p>
            <div className="rightsub-para">
              <p>
                Modern hotel rooms <br />
                Gourmet restaurant <br />
                Scenic hill views
              </p>
            </div>
          </div>
        </div>

        <div className="services-grid">
          <h2>Hotel Services</h2>
          <div className="services-list">
            <div className="service-item">
              <h3>Accommodation</h3>
              <p>Comfortable rooms with modern amenities and beautiful views of the surrounding hills.</p>
            </div>
            <div className="service-item">
              <h3>Dining</h3>
              <p>Fine dining restaurant featuring local and international cuisine prepared by expert chefs.</p>
            </div>
            <div className="service-item">
              <h3>Conference Facilities</h3>
              <p>Professional meeting rooms and event spaces for business and special occasions.</p>
            </div>
            <div className="service-item">
              <h3>Wellness Services</h3>
              <p>Spa and wellness treatments to complement your sports and recreation activities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelRestaurant 