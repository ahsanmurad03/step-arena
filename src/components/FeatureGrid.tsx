import React from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns: number;
  className?: string;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ features, columns, className = '' }) => {
  return (
    <div className={`feature-grid ${className}`}>
      <div className={`feature-grid-items grid-cols-${columns}`}>
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <i className={`fas ${feature.icon}`}></i>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid; 