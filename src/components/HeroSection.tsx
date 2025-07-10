import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description?: string;
  backgroundImage: string;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  backgroundImage,
  className = ''
}) => {
  const sectionStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '70vh',
    minHeight: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative' as const,
  };

  return (
    <div 
      className={`hero-section ${className}`}
      style={sectionStyle}
    >
      <div className="hero-content">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default HeroSection; 