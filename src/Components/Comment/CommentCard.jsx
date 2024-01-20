import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './CommentCard.css'; // Import the CSS file

const CommentCard = () => {
  const [isCommentLiked, setIsCommentLiked] = useState(false);

  const handleLikeComment = () => {
    setIsCommentLiked(!isCommentLiked);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <img
            style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%' }}
            src="https://cdn.pixabay.com/photo/2017/05/05/22/28/kitten-2288404_640.jpg"
            alt=""
          />
        </div>
        <div style={{ margin: '0.75rem' }}>
          <p>
            <span>username </span>
            <span style={{ marginLeft: '0.5rem' }}>nice post</span>
          </p>
          <div style={{ display: 'flex', alignItems: 'center', opacity: '0.5' }}>
            <span>1 min ago</span>
            <span> 13 likes</span>
          </div>
        </div>
      </div>
      {isCommentLiked ? (
        <AiFillHeart
          onClick={handleLikeComment}
          className="like-icon liked" // Apply the 'liked' class for the red color
        />
      ) : (
        <AiOutlineHeart />
      )}
      
    </div>
  );
};

export default CommentCard;
