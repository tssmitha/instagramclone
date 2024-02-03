import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const ProfileSetup = () => {
    const location = useLocation();
    const username = location.state ? location.state.username : '';
    const [profileData, setProfileData] = useState({
    profilePicture: null,
  });

  const handleFileChange = (e) => {
    setProfileData((prevData) => ({
      ...prevData,
      profilePicture: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', username);
    formData.append('profilePicture', profileData.profilePicture);

    try {
      const response = await axios.post('http://localhost:5000/profile-setup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        console.log('Profile setup successful');
        // Redirect to profile page
        // history.push('/profile');
      } else {
        console.error('Profile setup failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!username) {
    // Handle the case where location.state is null
    return <div>No username provided</div>;
  }

  return (
    <div>
      <h2>Profile Setup</h2>
      <p>Username: {username}</p>
      <form onSubmit={handleSubmit}>
        <input type="file" name="profilePicture" onChange={handleFileChange} />
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default ProfileSetup;
