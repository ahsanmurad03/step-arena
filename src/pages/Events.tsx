import React from 'react'

const Events: React.FC = () => {
  const upcomingEvents = [
    {
      id: 1,
      date: '2025-07-05',
      displayDate: '05 July 2025',
      title: 'Prishtina Open 2025',
      description: 'International swimming competition featuring clubs from 10 European countries.',
      time: '09:00 AM - 06:00 PM',
      category: 'Competition',
      image: '/assets/images/three-male-swimmers-racing-against-each-other 1.png'
    },
    {
      id: 2,
      date: '2025-07-15',
      displayDate: '15 July 2025',
      title: 'Youth Swimming Workshop',
      description: 'Special training workshop for young swimmers aged 8-16 with professional coaches.',
      time: '10:00 AM - 02:00 PM',
      category: 'Workshop',
      image: '/assets/images/fit-swimmer-training-by-himself (1) 1.png'
    },
    {
      id: 3,
      date: '2025-07-22',
      displayDate: '22 July 2025',
      title: 'Family Fun Day',
      description: 'A day of swimming, games, and activities for the whole family.',
      time: '11:00 AM - 05:00 PM',
      category: 'Family Event',
      image: '/assets/images/group-swimmers-training-outdoor-pool-top-view 1.png'
    },
    {
      id: 4,
      date: '2025-08-01',
      displayDate: '01 August 2025',
      title: 'Aqua Fitness Classes',
      description: 'High-energy water-based fitness classes suitable for all fitness levels.',
      time: '06:00 PM - 08:00 PM',
      category: 'Fitness',
      image: '/assets/images/view-calm-blue-sea 1.png'
    }
  ]

  return (
    <div className="page-container">
      <div className="page-hero">
        <h1>Events & Activities</h1>
        <p>Join us for exciting events and competitions</p>
      </div>
      
      <div className="page-content">
        <div className="events-intro">
          <h2>Upcoming Events at Step Arena</h2>
          <p>
            Step Arena hosts a variety of events throughout the year, from international 
            competitions to family-friendly activities. Check out our upcoming events 
            and join us for an unforgettable experience.
          </p>
        </div>

        <div className="events-grid">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-image">
                <img src={event.image} alt={event.title} />
                <div className="event-category">{event.category}</div>
              </div>
              <div className="event-content">
                <div className="event-date">{event.displayDate}</div>
                <h3 className="event-title">{event.title}</h3>
                <div className="event-time">
                  <i className="fa fa-clock-o"></i>
                  {event.time}
                </div>
                <p className="event-description">{event.description}</p>
                <div className="event-actions">
                  <button className="register-btn">Register</button>
                  <button className="learn-more-btn">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="event-calendar">
          <h2>Event Calendar</h2>
          <p>
            View our full calendar of events, competitions, and activities. 
            Mark your calendar and don't miss out on any exciting opportunities.
          </p>
          <button className="view-calendar-btn">View Full Calendar</button>
        </div>

        <div className="host-event">
          <h2>Host Your Event</h2>
          <p>
            Looking to host a swimming competition, corporate event, or private party? 
            Step Arena offers world-class facilities and professional event management services.
          </p>
          <button className="contact-event-btn">Contact Event Team</button>
        </div>
      </div>
    </div>
  )
}

export default Events 