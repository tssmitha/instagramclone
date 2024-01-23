import React from 'react';
import { useNavigate } from 'react-router-dom';

const StoryCircle = () => {
    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate("/story")
    }

  return (
    <div style={{ cursor: 'pointer', alignItems: 'center', display: 'flex', flexDirection: 'column' }} onClick={handleNavigate}>
      <img
        src="https://cdn.pixabay.com/photo/2023/07/16/09/31/cat-8130334_1280.jpg"
        alt=""
        style={{ width: '60px', height: '60px', borderRadius: '50%', marginBottom: '8px' }}
      />
      <p>Username</p>
    </div>
  );
};

export default StoryCircle;
