import React from 'react';

const SuggestionsCard = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',margin:'10px' }}>
      <div>
        <img style={{ width: '5rem', height: '5rem', borderRadius: '50%' }} src="https://cdn.pixabay.com/photo/2018/07/13/10/17/cat-3535399_640.jpg" alt="" />
        <p style={{ fontSize: '0.875rem', fontWeight: '600' }}>usename</p>
        <p style={{ fontSize: '0.875rem', fontWeight: '600', opacity: '0.7' }}>Follows You</p>
      </div>
      <p style={{ color: 'blue', fontSize: '0.875rem', fontWeight: '600', marginRight: '10px' }}>Follow</p>
    </div>
  );
}

export default SuggestionsCard;
