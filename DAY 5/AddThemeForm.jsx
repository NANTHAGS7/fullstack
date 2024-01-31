import React, { useState } from 'react';
import CustomSideNav from './Sidenav';

const AddThemeForm = () => {
  // State to hold form values
  const [themeData, setThemeData] = useState({
    eventName: '',
    menu: '',
    dateOfOpening: '',
    // Add more fields as needed
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setThemeData({ ...themeData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with themeData, e.g., send to server or update state
    console.log(themeData);
  };

  return (
    <div>
        <div style={{display:'flex'}}>
            <div style={{marginLeft:'0px',position:'fixed'}}>
                <CustomSideNav/>
            </div>
    <div className="container mt-5" style={{marginLeft:'45%'}}>
      <h2>Add New Theme</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="eventName" className="form-label">
            Event Name
          </label>
          <input
          style={{width:'300px'}}
            type="text"
            className="form-control"
            id="eventName"
            name="eventName"
            value={themeData.eventName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="menu" className="form-label">
            Menu
          </label>
          <textarea
            className="form-control"
            style={{width:'300px'}}
            id="menu"
            name="menu"
            value={themeData.menu}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="dateOfOpening" className="form-label">
            Date of Opening
          </label>
          <input
            type="date"
            className="form-control"
            style={{width:'300px'}}
            id="dateOfOpening"
            name="dateOfOpening"
            value={themeData.dateOfOpening}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Add more fields as needed */}
        
        <button type="submit" className="btn btn-primary">
          Add Theme
        </button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default AddThemeForm;
