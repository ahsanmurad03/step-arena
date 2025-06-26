import React, { useState } from 'react'

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
}

interface GalleryProps {
  images: GalleryImage[]
  categories: string[]
}

const Gallery: React.FC<GalleryProps> = ({ images, categories }) => {
  const [activeCategory, setActiveCategory] = useState('ALL')

  const filteredImages = activeCategory === 'ALL' 
    ? images 
    : images.filter(image => image.category === activeCategory)

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category)
  }

  return (
    <div className="tab">
      <div className="tab-heading">
        {categories.map((category) => (
          <a
            key={category}
            href="#"
            className={activeCategory === category ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault()
              handleCategoryClick(category)
            }}
          >
            {category}
          </a>
        ))}
      </div>

      <div className="gallery-grid">
        {/* Render images in rows of 4 */}
        {Array.from({ length: Math.ceil(filteredImages.length / 4) }, (_, rowIndex) => (
          <div key={rowIndex} className="tabGallery">
            {filteredImages
              .slice(rowIndex * 4, (rowIndex + 1) * 4)
              .map((image) => (
                <div key={image.id} className="tabimg">
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery 