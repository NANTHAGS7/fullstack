import React, { useState, useEffect } from 'react';
import CustomSideNav from './Sidenav';
const ViewThemes = () => {
  // Example state for theme data
  const [themes, setThemes] = useState([]);

  // Example function to fetch theme data from a server
  const fetchThemes = async () => {
    // Replace the URL with your server endpoint for fetching themes
    const response = await fetch('https://your-api-endpoint/themes');
    const data = await response.json();
    setThemes(data); // Update state with fetched theme data
  };

  // Use useEffect to fetch theme data when the component mounts
  useEffect(() => {
    fetchThemes();
  }, []);

  return (
    <div>
        
            <div style={{display:'flex'}}>
                <div style={{marginLeft:'0px',position:'fixed'}}>
                        <CustomSideNav/>
                </div>

            </div>
        
    
    <div className="container mt-5" style={{marginLeft:'45%'}}>
      <h2>View Themes</h2>
      {themes.length === 0 ? (
        <p>No themes available.</p>
      ) : (
        <ul className="list-group">
          {themes.map((theme) => (
            <li key={theme.id} className="list-group-item">
              <strong>{theme.eventName}</strong>
              <p>Menu: {theme.menu}</p>
              <p>Date of Opening: {theme.dateOfOpening}</p>
              <p>Options: {theme.options}</p>
              {/* Add more details as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
    

  );
};

export default ViewThemes;
