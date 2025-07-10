import React from 'react';

interface Feature {
  text: string;
  icon?: string;
}

interface TwoColumnSectionProps {
  title: string;
  description: string;
  features?: Feature[];
  imageSrc: string;
  imageAlt: string;
  imageLeft: boolean;
  className?: string;
}

const TwoColumnSection: React.FC<TwoColumnSectionProps> = ({
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  imageLeft,
  className = ''
}) => {
  const ImageSection = () => (
    <div className="section-image">
      <img src={imageSrc} alt={imageAlt} />
    </div>
  );

  const ContentSection = () => (
    <div className="section-content">
      <h3>{title}</h3>
      <p>{description}</p>
      {features && features.length > 0 && (
        <div className="feature-list">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              {feature.icon && <i className={`fa ${feature.icon}`}></i>}
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className={`two-column-section ${imageLeft ? 'image-left' : 'image-right'} ${className}`}>
      {imageLeft ? (
        <>
          <ImageSection />
          <ContentSection />
        </>
      ) : (
        <>
          <ContentSection />
          <ImageSection />
        </>
      )}
    </div>
  );
};

export default TwoColumnSection; 