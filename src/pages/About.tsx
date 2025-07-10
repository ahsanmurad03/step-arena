import React from 'react'
import { Link } from 'react-router-dom'
import FeatureCard from '../components/FeatureCard'
import TrainerCard from '../components/TrainerCard'
import SwimmingGirlNewsletter from '../components/SwimmingGirlNewsletter'
import HeroSection from '../components/HeroSection'

const About: React.FC = () => {
  // Feature cards data
  const featureCards = [
    {
      icon: 'fas fa-bullseye',
      title: 'Our Mission',
      description: 'To provide world-class aquatic facilities and training programs that inspire excellence, promote health and wellness, and create a community where athletes and families can achieve their full potential in a supportive environment.'
    },
    {
      icon: 'fas fa-eye',
      title: 'Our Vision',
      description: 'To be the leading aquatic sports center in the region, recognized for our commitment to excellence, innovation in training methodologies, and our role in developing the next generation of aquatic champions.'
    },
    {
      icon: 'fas fa-heart',
      title: 'Our Values',
      description: 'Excellence, integrity, community, safety, and innovation guide everything we do. We believe in creating an inclusive environment where everyone can thrive and achieve their personal best.'
    }
  ]

  // Staff data
  const staffMembers = [
    {
      image: '/assets/images/ellipse-1.png',
      name: 'Ardian Krasniqi',
      designation: 'Head Swimming Coach'
    },
    {
      image: '/assets/images/ellipse-2.png',
      name: 'Marina Petrovic',
      designation: 'Aqua Fitness Instructor'
    },
    {
      image: '/assets/images/ellipse-3.png',
      name: 'Luka Markovic',
      designation: 'Youth Development Coach'
    },
    {
      image: '/assets/images/ellipse-4.png',
      name: 'Elena Radovic',
      designation: 'Wellness Coordinator'
    },
    {
      image: '/assets/images/ellipse-1.png',
      name: 'Stefan Jovanovic',
      designation: 'Competitive Swimming Coach'
    },
    {
      image: '/assets/images/ellipse-2.png',
      name: 'Ana Milosevic',
      designation: 'Rehabilitation Specialist'
    }
  ]

  return (
    <div className="about-page">
      <HeroSection
        title="WHO WE ARE"
        subtitle="Excellence in Aquatic Sports & Wellness"
        description="Step Arena is more than a sports center – we are a community dedicated to excellence, wellness, and the pursuit of aquatic mastery. Located in the serene hills of Marigona, we combine world-class facilities with passionate expertise to create an environment where champions are born and dreams come to life."
        backgroundImage="/assets/images/Frame198.png"
      />

      {/* Who We Do Section */}
      <section className="who-we-do-section">
        <div className="container">
          <div className="section-content centered">
            <h2>What We Do</h2>
            <p>
              At Step Arena, we provide comprehensive aquatic training, wellness programs, and 
              recreational facilities that cater to athletes of all levels, families seeking 
              quality time together, and individuals on their wellness journey. Our programs 
              range from competitive swimming training to relaxation and recovery services.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <div className="container">
          <div className="experience-grid">
            <div className="experience-left">
              <img src="/assets/images/solo-swimmer.png" alt="Professional Swimmer" />
            </div>
            <div className="experience-center">
              <img src="/assets/images/racing-swimmers.png" alt="Underwater Swimming" />
            </div>
            <div className="experience-right">
              <h3>What We Offer</h3>
              <ul className="offer-list">
                <li>Olympic-standard swimming pools</li>
                <li>Professional coaching programs</li>
                <li>Youth development initiatives</li>
                <li>Adult fitness and wellness</li>
                <li>Competitive training programs</li>
                <li>Recreational swimming facilities</li>
                <li>Spa and recovery services</li>
                <li>Hotel and dining facilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Three Cards Row - Mission, Vision, Values */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            {featureCards.map((card, index) => (
              <FeatureCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="community-impact-section">
        <div className="container">
          <div className="impact-grid">
            <div className="impact-left">
              <div className="trainer-testimonial">
                <img src="/assets/images/Screenshot 2025-06-23 233128.png" alt="Trainer" />
                <div className="testimonial-content">
                  <blockquote>
                    "Step Arena has transformed how we approach aquatic training. The facilities 
                    and community support have enabled us to develop world-class athletes while 
                    maintaining focus on personal growth and wellness."
                  </blockquote>
                  <cite>- Ardian Krasniqi, Head Coach</cite>
                </div>
              </div>
            </div>
            <div className="impact-right">
              <img src="/assets/images/pool-top-view.png" alt="Kids Swimming Class" />
            </div>
          </div>
          <div className="impact-content centered">
            <h2>Building Stronger Communities Through Sport</h2>
            <p>
              Our partnerships with local schools, sports clubs, and community organizations 
              help us create programs that benefit everyone. From youth development initiatives 
              to senior wellness programs, Step Arena serves as a catalyst for healthy, 
              active communities. We believe that when individuals thrive, communities flourish.
            </p>
          </div>
        </div>
      </section>

      {/* Staff Grid Section */}
      <section className="staff-section">
        <div className="container">
          <div className="section-header centered">
            <h2>Our Staff – Get Training Under the Best Trainers</h2>
            <p>
              Our team of certified professionals brings years of experience, passion, and 
              dedication to help you achieve your goals. Each member of our staff is committed 
              to providing personalized attention and expert guidance.
            </p>
          </div>
          <div className="staff-grid">
            {staffMembers.map((member, index) => (
              <TrainerCard
                key={index}
                image={member.image}
                name={member.name}
                designation={member.designation}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Swimming Girl Newsletter Section */}
      <SwimmingGirlNewsletter />
    </div>
  )
}

export default About 