import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';
import './ReqUserPostCard.css';

const ReqUserPostCard = () => {
  return (
    <div>
      <div className='post' style={{ width: '100%', maxWidth: '250px', padding: '10px' }}>
        <img
          style={{ cursor: 'pointer', width: '100%', height: 'auto', maxHeight: '250px' }}
          src='https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_640.jpg'
          alt=''
        />
        <div className='overlay'>
          <div className='overlay-text' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <AiFillHeart></AiFillHeart> <span>10</span>
            </div>
            <div>
              <FaComment /> <span>5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReqUserPostCard;
