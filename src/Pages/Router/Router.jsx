import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Homepage from '../HomePage/HomePage';
import Profile from '../Profile/Profile';
import Story from '../Story/Story';

const Router = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '20%', border: '1px solid #e2e8f0', marginRight: '10px' }}>
        <Sidebar />
      </div>
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/username' element={<Profile />} />
          <Route path='/story' element={<Story />} />
        </Routes>
      </div>
    </div>
  );
};

export default Router;
