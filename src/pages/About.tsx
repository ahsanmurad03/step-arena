import React from 'react'

const About: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-hero">
        <h1>About Step Arena</h1>
        <p>Learn more about our facilities and mission</p>
      </div>
      
      <div className="page-content">
        <div className="section-two">
          <div className="left">
            <img src="/assets/images/Screenshot 2025-06-23 233128.png" alt="Step Arena Facility" />
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
          </div>
        </div>

        <div className="about-details">
          <h2>Our Mission</h2>
          <p>
            Step Arena is dedicated to providing world-class facilities and services that promote 
            health, wellness, and athletic excellence. Our commitment extends beyond just providing 
            space – we foster a community where individuals can achieve their personal best.
          </p>

          <h2>Our Facilities</h2>
          <ul>
            <li>Olympic-size indoor swimming pools</li>
            <li>Outdoor recreational pools</li>
            <li>Professional training facilities</li>
            <li>Spa and wellness center</li>
            <li>Hotel accommodation</li>
            <li>Restaurant and dining facilities</li>
            <li>Event and conference spaces</li>
          </ul>

          <h2>Why Choose Step Arena?</h2>
          <p>
            Located in the serene hills of Marigona, Step Arena provides an escape from the hustle 
            and bustle of city life while offering top-tier sporting facilities. Whether you're 
            a professional athlete, a recreational swimmer, or a family looking for quality time 
            together, Step Arena has something for everyone.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About 