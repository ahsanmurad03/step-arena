import React from 'react'

const Outdoor: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-hero">
        <h1>Outdoor Facilities</h1>
        <p>Experience swimming and recreation in nature</p>
      </div>
      
      <div className="page-content">
        <div className="section-two">
          <div className="left">
            <img src="/assets/images/view-calm-blue-sea 1.png" alt="Outdoor Pool" />
          </div>
          <div className="right">
            <h3>Aqua Outdoor – Active Summers in Nature</h3>
            <p>
              Our outdoor facilities provide the perfect setting for summer activities, 
              competitive swimming, and family recreation. Surrounded by the natural beauty 
              of Marigona Hill, our outdoor pools offer a refreshing escape.
            </p>
            <div className="rightsub-para">
              <p>
                Perfect for competitions <br />
                Ideal for families <br />
                Outstanding for outdoor recreation
              </p>
            </div>
          </div>
        </div>

        <div className="facilities-grid">
          <h2>Outdoor Features</h2>
          <div className="features-list">
            <div className="feature-item">
              <h3>Competition Pool</h3>
              <p>50-meter Olympic standard pool suitable for professional competitions and training.</p>
            </div>
            <div className="feature-item">
              <h3>Family Pool</h3>
              <p>Shallow pool perfect for children and family activities with safety features.</p>
            </div>
            <div className="feature-item">
              <h3>Recreation Area</h3>
              <p>Spacious deck areas with loungers and umbrellas for relaxation.</p>
            </div>
            <div className="feature-item">
              <h3>Natural Setting</h3>
              <p>Beautiful hillside location offering fresh air and scenic views.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Outdoor 