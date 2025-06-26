import React from 'react'

const Indoor: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-hero">
        <h1>Indoor Facilities</h1>
        <p>Year-round training without seasons</p>
      </div>
      
      <div className="page-content">
        <div className="section-two">
          <div className="left">
            <img src="/assets/images/three-male-swimmers-racing-against-each-other 1.png" alt="Indoor Pool" />
          </div>
          <div className="right">
            <h3>Step Aqua Indoor – Training Without Seasons</h3>
            <p>
              Our state-of-the-art indoor facility features a 50m Olympic pool with spectator 
              grandstands, children's pool, and climate-controlled environment. Train 
              year-round regardless of weather conditions.
            </p>
            <div className="rightsub-para">
              <p>
                50m Olympic pool <br />
                Spectator grandstands <br />
                Children's pool and fresh air
              </p>
            </div>
          </div>
        </div>

        <div className="facilities-grid">
          <h2>Indoor Features</h2>
          <div className="features-list">
            <div className="feature-item">
              <h3>Olympic Pool</h3>
              <p>Professional 50-meter pool with 8 lanes, perfect for competitive training and events.</p>
            </div>
            <div className="feature-item">
              <h3>Spectator Area</h3>
              <p>Comfortable grandstands that can accommodate large audiences for competitions.</p>
            </div>
            <div className="feature-item">
              <h3>Children's Pool</h3>
              <p>Safe, shallow pool designed specifically for young swimmers and beginners.</p>
            </div>
            <div className="feature-item">
              <h3>Climate Control</h3>
              <p>Optimal temperature and humidity control for year-round comfort.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Indoor 