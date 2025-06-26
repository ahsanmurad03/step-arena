import React from 'react'

const News: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      date: '05, July 2025',
      title: '"Prishtina Open 2025" – International Swimming Competition',
      excerpt: 'Step Arena will host the region\'s largest swimming event – "Prishtina Open", featuring clubs from 10 European countries.',
      image: '/assets/images/Screenshot 2025-06-23 233755.png',
      category: 'Competition'
    },
    {
      id: 2,
      date: '28, June 2025',
      title: 'New Swimming Training Programs Launched',
      excerpt: 'Professional coaching programs now available for all skill levels, from beginners to competitive athletes.',
      image: '/assets/images/Screenshot 2025-06-23 233817.png',
      category: 'Training'
    },
    {
      id: 3,
      date: '20, June 2025',
      title: 'Step Arena Wellness Center Opens',
      excerpt: 'New spa and wellness facilities are now open, offering massage therapy, sauna, and recovery treatments.',
      image: '/assets/images/Screenshot 2025-06-23 233837.png',
      category: 'Facilities'
    },
    {
      id: 4,
      date: '15, June 2025',
      title: 'Summer Camp Registration Now Open',
      excerpt: 'Register your children for our exciting summer swimming camps with professional instructors and fun activities.',
      image: '/assets/images/Screenshot 2025-06-23 233449.png',
      category: 'Youth Programs'
    }
  ]

  return (
    <div className="page-container">
      <div className="page-hero">
        <h1>Latest News</h1>
        <p>Stay updated with Step Arena developments</p>
      </div>
      
      <div className="page-content">
        <div className="news-intro">
          <h2>Stay Updated with the Latest from Step Arena</h2>
          <p>
            From international swimming competitions and youth summer camps to wellness events 
            and new training programs – this section brings you the news that matters. Stay 
            connected to the latest developments and be part of the activities that shape our 
            vibrant sports and recreation community.
          </p>
        </div>

        <div className="news-grid">
          {newsArticles.map((article) => (
            <div key={article.id} className="news-card">
              <div className="news-image">
                <img src={article.image} alt={article.title} />
                <div className="news-category">{article.category}</div>
              </div>
              <div className="news-content">
                <div className="news-date">{article.date}</div>
                <h3 className="news-title">{article.title}</h3>
                <p className="news-excerpt">{article.excerpt}</p>
                <button className="read-more-btn">Read More</button>
              </div>
            </div>
          ))}
        </div>

        <div className="newsletter-signup">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest news and updates delivered directly to your inbox.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News 