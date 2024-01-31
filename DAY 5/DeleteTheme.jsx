import React, { useState } from 'react';
import CustomSideNav from './Sidenav';
const DeleteTheme = () => {
  // Example data for events
  const [events, setEvents] = useState([
    { id: 1, name: 'Event 1' },
    { id: 2, name: 'Event 2' },
    { id: 3, name: 'Event 1' },
    { id: 4, name: 'Event 2' },
    { id: 5, name: 'Event 1' },
    { id: 6, name: 'Event 2' },
    { id: 7, name: 'Event 1' },
    { id: 8, name: 'Event 2' },
    { id: 9, name: 'Event 1' },
    { id: 10, name: 'Event 2' },
    { id: 11, name: 'Event 1' },
    { id: 12, name: 'Event 2' },
    // Add more events as needed
  ]);

  // Function to handle event deletion
  const handleDelete = (eventId) => {
    // Filter out the event with the given id
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
  };

  return (
    <div>
        <div style={{display:'flex'}}>
            <div style={{marginLeft:'0px',position:'fixed'}}>
                <CustomSideNav/>
            </div>
    <div className="container mt-5" style={{marginLeft:'25%'}}>
      <h2>Event List</h2>
      <ul className="list-group">
        {events.map((event) => (
          <li key={event.id} className="list-group-item d-flex justify-content-between align-items-center">
            {event.name}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(event.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
  );
};

export default DeleteTheme;
