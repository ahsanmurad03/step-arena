import React from 'react'

interface TrainerCardProps {
  image: string
  name: string
  designation: string
  className?: string
}

const TrainerCard: React.FC<TrainerCardProps> = ({ image, name, designation, className = '' }) => {
  return (
    <div className={`trainer-card ${className}`}>
      <div className="trainer-image">
        <img src={image} alt={name} />
      </div>
      <div className="trainer-info">
        <h4>{name}</h4>
        <p>{designation}</p>
      </div>
    </div>
  )
}

export default TrainerCard 