import React, { useState } from 'react';
import CustomSideNav from './Sidenav';
import { Button } from '@mui/material';

const DeleteTheme = () => {
  // Example data for events
  const [events, setEvents] = useState([
    { id: 1, name: '2D 3D Theme' },
    { id: 2, name: 'Superhero Theme' },
    { id: 3, name: 'Under the Sea' },
    { id: 4, name: 'Retro' },
    { id: 5, name: 'Anime' },
    { id: 6, name: 'Vintage' },
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
      <div style={{ display: 'flex' }}>
        <div style={{ marginLeft: '0px', position: 'fixed' }}>
          <CustomSideNav />
        </div>
        <div className="container mt-5" style={{ marginLeft: '25%' }}>
          <h2>Event List</h2>
          <ul className="list-group">
            {events.map((event) => (
              <li key={event.id} className="list-group-item d-flex justify-content-between align-items-center">
                {event.name}
                <Button variant="contained" color="error" onClick={() => handleDelete(event.id)}>Delete</Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DeleteTheme;
