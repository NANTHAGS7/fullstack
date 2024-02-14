import React, { useState } from 'react';
import CustomSideNav from './Sidenav';
const EditTheme = () => {
  // Example state for theme details
  const [theme, setTheme] = useState({
    id: 1,
    eventName: 'Birthday Celebration',
    menu: 'Special Menu',
    dateOfOpening: '2024-01-01',
    options: 'Specify Options Here',
  });

  // Function to handle form submission (updating the theme)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to update the theme data (e.g., send to server)
    console.log('Updated Theme:', theme);
    // Reset form or redirect as needed
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTheme((prevTheme) => ({
      ...prevTheme,
      [name]: value,
    }));
  };

  return (
    <div>
        <div style={{display:'flex'}}>
            <div style={{marginLeft:'0px',position:'fixed'}}>
                <CustomSideNav/>
            </div>
    <div className="container mt-5" style={{marginLeft:'45%'}}>
      <h2>Edit Theme</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="eventName" className="form-label">Event Name</label>
          <input
            type="text"
            style={{width:'300px'}}
            className="form-control"
            id="eventName"
            name="eventName"
            value={theme.eventName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="menu" className="form-label">Menu</label>
          <input
            type="text"
            style={{width:'300px'}}
            className="form-control"
            id="menu"
            name="menu"
            value={theme.menu}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dateOfOpening" className="form-label">Date of Opening</label>
          <input
            type="date"
            style={{width:'300px'}}
            className="form-control"
            id="dateOfOpening"
            name="dateOfOpening"
            value={theme.dateOfOpening}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="options" className="form-label">Options</label>
          <textarea
            className="form-control"
            style={{width:'300px'}}
            id="options"
            name="options"
            rows="4"
            value={theme.options}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Update Theme</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default EditTheme;
