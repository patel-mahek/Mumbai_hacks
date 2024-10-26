import React from 'react';
import './CulturalCalendar.css'; // Import the CSS file

const CulturalCalendar = () => {
  const events = [
    { 
      date: '2024-03-25', 
      name: 'Holi', 
      region: 'Pan India',
      description: 'Festival of Colors - High engagement period for retail and F&B'
    },
    { 
      date: '2024-04-10', 
      name: 'Ugadi/Gudi Padwa', 
      region: 'South & West India',
      description: 'New Year celebrations - Shopping season'
    },
    { 
      date: '2024-04-21', 
      name: 'Eid al-Fitr', 
      region: 'Pan India',
      description: 'Major shopping festival'
    },
    { 
      date: '2024-10-31', 
      name: 'Diwali', 
      region: 'Pan India',
      description: 'Biggest shopping season of the year'
    },
    { 
      date: '2024-09-15', 
      name: 'Onam', 
      region: 'Kerala',
      description: 'Major festival in Kerala - High retail activity'
    }
  ];

  return (
    <div className="calendar-container">
      {events.map((event) => (
        <div key={event.date} className="event-card">
          <div className="event-details">
            <div className="event-header">
              <h3 className="event-name">{event.name}</h3>
              <span className="event-region">{event.region}</span>
            </div>
            <p className="event-description">{event.description}</p>
            <p className="event-date">
              {new Date(event.date).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CulturalCalendar;
