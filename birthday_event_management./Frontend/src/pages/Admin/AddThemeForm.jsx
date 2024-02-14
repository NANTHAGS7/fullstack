import { useState } from 'react';
import axios from 'axios';
import CustomSideNav from './Sidenav';

const AddThemeForm = () => {
  const [image_url, setImageUrl] = useState('');
  const [theme_name, setThemeName] = useState('');
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');

    const formData = {
      image_url,
      theme_name,
      description,
      cost
    };

    try {
      const response = await axios.post('http://localhost:8081/api/v1/admin/add/theme', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 202) {
        console.log('Theme posted successfully');
        setImageUrl('');
        setThemeName('');
        setDescription('');
        setCost('');
        setShowSuccessMessage(true);
      } else {
        console.error('Failed to post theme');
      }
    } catch (error) {
      console.error('Error posting theme:', error);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div style={{ marginLeft: '0px', position: 'fixed' }}>
          <CustomSideNav />
        </div>
        <div style={{ marginLeft: '45%' }}>
          <h2>Add New Theme</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '10px' }} >
              <label htmlFor="imageUrl">Image URL:</label>
              <br />
              <input
                style={{ width: '300px' }}
                type="text"
                id="image_url"
                value={image_url}
                onChange={(e) => setImageUrl(e.target.value)}
                required
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="themeName">Theme Name:</label><br />
              <input
                style={{ width: '300px' }}
                type="text"
                id="theme_name"
                value={theme_name}
                onChange={(e) => setThemeName(e.target.value)}
                required
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="description">Description:</label>
              <br />
              <textarea
                style={{ width: '300px' }}
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="cost">Cost:</label>
              <br />
              <input
                style={{ width: '300px' }}
                type="text"
                id="cost"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                required
              />
            </div>
            <button
              style={{
                marginTop: '10px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
              onClick={handleSubmit}
              type="button" // Use type="button" to prevent form submission
            >
              Add Theme
            </button>
          </form>
          {showSuccessMessage && (
            <div style={{
              marginTop: '20px',
              backgroundColor: '#28a745',
              color: 'white',
              padding: '10px',
              borderRadius: '5px',
              width: '300px'
            }}>
              <p>Theme added successfully!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddThemeForm;
