import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Homepage from '../HomePage/HomePage';
import Profile from '../Profile/Profile';

const Router = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '20%', border: '1px solid #718096', marginRight: '20px' }}>
        <Sidebar />
      </div>
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/username' element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default Router;
