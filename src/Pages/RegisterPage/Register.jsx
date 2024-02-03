import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import './RegisterPage.css'; // Import CSS file for styling

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    gender: '',
    mobileNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name} to ${value}`);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/signup', formData);

      if (response.status === 200) {
        console.log('Registration successful');
        // Redirect to homepage or login page
        //navigate('/homepage');
        console.log(formData.username);
        navigate('/username', { state: { username: formData.username } });
        //navigate('/profile-setup', { username: formData.username });
        //<Link to={{ pathname: '/profile-setup', state: { username: 'exampleUsername' } }}>Go to Profile Setup</Link>
      } else {
        console.error('Error registering user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="register-container"> {/* Apply container class */}
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group"> {/* Apply input group class */}
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="input-group"> {/* Apply input group class */}
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="input-group"> {/* Apply input group class */}
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="input-group"> {/* Apply input group class */}
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="input-group"> {/* Apply input group class */}
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input type="text" id="mobileNumber" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
