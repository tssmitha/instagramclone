import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Homepage from '../HomePage/HomePage';
import Profile from '../Profile/Profile';
import Story from '../Story/Story';
import Register from '../RegisterPage/Register'; // Import your Register component

const Router = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '20%', border: '1px solid #e2e8f0', marginRight: '10px' }}>
        <Sidebar />
      </div>
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path='/' element={<Register />} /> {/* Display Register component by default on the root URL */}
          <Route path='/homepage' element={<Homepage />} />
          <Route path='/username' element={<Profile />} />
          <Route path='/story' element={<Story />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
};

export default Router;
