import React from 'react';
import TwoColumnSection from '../components/TwoColumnSection';
import SwimmingGirlNewsletter from '../components/SwimmingGirlNewsletter';
import HeroSection from '../components/HeroSection';

const Outdoor: React.FC = () => {
  return (
    <div className="page-container">
      <HeroSection
        title="OUTDOOR OLYMPIC POOL & KIDS POOL"
        subtitle="A World-Class Aquatic Experience Under the Open Sky"
        description="Discover our exceptional outdoor swimming facilities, featuring an Olympic-size pool and dedicated kids' area, all set against the backdrop of nature's beauty."
        backgroundImage="/assets/images/view-calm-blue-sea1.png"
      />

      <TwoColumnSection
        title="Olympic-Standard Swimming Pool"
        description="Experience swimming excellence in our state-of-the-art outdoor Olympic pool, designed to meet international competition standards while providing a perfect training environment for swimmers of all levels."
        features={[
          { text: "50-meter Olympic-size pool", icon: "fa-trophy" },
          { text: "8 competition lanes", icon: "fa-lanes" },
          { text: "Professional timing system", icon: "fa-clock" },
          { text: "Spectator seating area", icon: "fa-users" },
          { text: "Competition-ready facilities", icon: "fa-star" }
        ]}
        imageSrc="/assets/images/racing-swimmers.png"
        imageAlt="Olympic Pool"
        imageLeft={false}
      />

      <TwoColumnSection
        title="Kids Pool & Learning Center"
        description="Our dedicated kids' pool provides a safe and fun environment for children to learn swimming and enjoy water activities. Certified instructors ensure proper guidance and safety at all times."
        features={[
          { text: "Shallow depth for safety", icon: "fa-shield" },
          { text: "Heated water year-round", icon: "fa-temperature-high" },
          { text: "Professional instructors", icon: "fa-user-tie" },
          { text: "Fun water features", icon: "fa-water" }
        ]}
        imageSrc="/assets/images/solo-swimmer.png"
        imageAlt="Kids Pool"
        imageLeft={true}
      />

      <TwoColumnSection
        title="Outdoor Sports & Recreation"
        description="Beyond swimming, our outdoor facilities offer various sports and recreational activities. Stay fit and active while enjoying the fresh air and natural surroundings."
        features={[
          { text: "Multi-purpose sports court", icon: "fa-basketball-ball" },
          { text: "Outdoor fitness area", icon: "fa-dumbbell" },
          { text: "Running track", icon: "fa-running" },
          { text: "Recreation zones", icon: "fa-umbrella-beach" }
        ]}
        imageSrc="/assets/images/OUTDOOR.png"
        imageAlt="Outdoor Sports"
        imageLeft={false}
      />

      <SwimmingGirlNewsletter />
    </div>
  );
};

export default Outdoor; 