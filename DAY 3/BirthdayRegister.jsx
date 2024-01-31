import React from 'react';
import { useParams } from 'react-router-dom';

const BirthdayRegister = () => {
  const { imageName } = useParams();

  return (
    <div>
      <h2>{imageName} Birthday Registration</h2>
     
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" required />

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required />

        <label htmlFor="event">Select Event:</label>
        <select id="event" name="event" required>
          <option value="birthday">Birthday Party</option>
          {/* Add more options as needed */}
        </select>

        <label htmlFor="budget">Select Budget:</label>
        <select id="budget" name="budget" required>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BirthdayRegister;
