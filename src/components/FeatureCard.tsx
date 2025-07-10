import React from 'react'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  className?: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, className = '' }) => {
  return (
    <div className={`feature-card ${className}`}>
      <div className="feature-icon">
        <i className={icon}></i>
      </div>
      <div className="feature-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default FeatureCard 