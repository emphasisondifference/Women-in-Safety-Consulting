import React from 'react';
import { EVENTS_DATA } from '../constants';

const Events: React.FC = () => {
  return (
    <section id="events" className="events">
      <div className="container">
        <div className="section-header">
          <h2>Upcoming Events</h2>
        </div>
        <div className="events-grid">
          {EVENTS_DATA.map((event, index) => (
            <div key={index} className="event-card">
              <div className="event-date">
                <span className="month">{event.month}</span>
                <span className="day">{event.day}</span>
              </div>
              <div className="event-details">
                <h3>{event.title}</h3>
                <p>{event.details}</p>
                <a href="#" className="btn btn-primary">Register</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;