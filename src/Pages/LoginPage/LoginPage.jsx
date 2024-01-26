import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css'; // Import CSS file for styling

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', formData);

      if (response.status === 200) {
        console.log('Login successful');
        // Redirect to homepage or dashboard
        navigate('/HomePage');
      } else {
        console.error('Invalid username or password');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-container"> {/* Apply container class */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group"> {/* Apply input group class */}
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="input-group"> {/* Apply input group class */}
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
