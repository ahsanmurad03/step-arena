import React from 'react';
import HeroSection from '../components/HeroSection';
import TwoColumnSection from '../components/TwoColumnSection';
import SwimmingGirlNewsletter from '../components/SwimmingGirlNewsletter';

const Indoor: React.FC = () => {
  return (
    <div className="page-container">
      <HeroSection
        title="STEP ARENA INDOOR"
        subtitle="The Heart of Aquatic Sports — All Year Round"
        description="Experience year-round swimming excellence in our state-of-the-art indoor facility, featuring Olympic-standard pools and professional training environments for swimmers of all levels."
        backgroundImage="/assets/images/INDOOR.png"
      />

      <TwoColumnSection
        title="World-Class Indoor Facilities"
        description="Our indoor swimming complex is designed to meet international standards while providing a comfortable and controlled environment for year-round training and recreation."
        features={[
          { text: "Olympic Indoor Pool - 50m competition pool with FINA standards", icon: "fa-medal" },
          { text: "25-Meter Training Pool - Perfect for training and fitness", icon: "fa-swimming-pool" },
          { text: "Children's Pool - Safe and warm environment for young swimmers", icon: "fa-child" },
          { text: "Advanced water filtration and heating systems", icon: "fa-temperature-high" },
          { text: "Professional starting blocks and timing system", icon: "fa-stopwatch" }
        ]}
        imageSrc="/assets/images/solo-swimmer.png"
        imageAlt="Indoor Olympic Pool"
        imageLeft={false}
      />

      <TwoColumnSection
        title="Programs and Possibilities"
        description="Our facility offers a wide range of programs and activities suitable for all ages and skill levels, from beginners to professional athletes."
        features={[
          { text: "Swimming lessons for all ages and levels", icon: "fa-graduation-cap" },
          { text: "Professional coaching and training programs", icon: "fa-user-tie" },
          { text: "Aqua fitness and rehabilitation sessions", icon: "fa-heartbeat" },
          { text: "Competitive swimming preparation", icon: "fa-trophy" },
          { text: "Special programs for schools and groups", icon: "fa-users" }
        ]}
        imageSrc="/assets/images/swimming-woman.png"
        imageAlt="Swimming Programs"
        imageLeft={true}
      />

      <TwoColumnSection
        title="Built for Comfort, Safety, and Excellence"
        description="Our facility is equipped with state-of-the-art safety features and comfort amenities to ensure the best possible experience for all visitors."
        features={[
          { text: "Professional lifeguard supervision", icon: "fa-life-ring" },
          { text: "Modern changing rooms and shower facilities", icon: "fa-door-open" },
          { text: "Spectator seating area", icon: "fa-chair" },
          { text: "First aid and emergency response team", icon: "fa-first-aid" },
          { text: "Accessible facilities for all abilities", icon: "fa-universal-access" }
        ]}
        imageSrc="/assets/images/racing-swimmers.png"
        imageAlt="Safety and Comfort"
        imageLeft={true}
      />

      <SwimmingGirlNewsletter />
    </div>
  );
};

export default Indoor; 