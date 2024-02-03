import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Homepage from '../HomePage/HomePage';
import Profile from '../Profile/Profile';
import Story from '../Story/Story';
import Register from '../RegisterPage/Register'; // Import your Register component
import LandingPage from '../Landingpage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import ProfileSetup from '../Profile/ProfileSetup';

const Router = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '20%', border: '1px solid #e2e8f0', marginRight: '10px' }}>
        <Sidebar />
      </div>
      <div style={{ flex: 1 }}>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
          <Route path='/homepage' element={<Homepage />} />
          <Route path='/username' element={<Profile />} />
          <Route path='/story' element={<Story />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
        </Routes>
      </div>
    </div>
  );
};

export default Router;
