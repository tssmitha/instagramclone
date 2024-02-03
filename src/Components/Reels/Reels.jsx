import React, { useState} from 'react';
import { BsThreeDots, BsBookmarkFill, BsEmojiSmile } from "react-icons/bs";
import "./Reels.css"; // Rename the CSS file if necessary
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from "react-icons/ri";
import { BsBookmark } from "react-icons/bs";
import { useDisclosure } from "@chakra-ui/react";

const ReelCard = () => {
    const [isPostLiked, setIsPostLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const { onOpen, onClose } = useDisclosure();

    const handlePostLike = () => {
        setIsPostLiked(!isPostLiked);
    }

    const handleSavePost = () => {
        setIsSaved(!isSaved);
    }

    const handleOPenCommentModel = () => {
        onOpen();
    }

    return (
        <div className="reel-card">
            <div className="reel-header">
                <div className="user-info">
                    <img className="user-avatar" src="https://cdn.pixabay.com/photo/2020/05/29/06/42/cat-5233986_640.jpg" alt="" />
                    <div className="username-location">
                        <p className="username">Username</p>
                        <p className="location">Location</p>
                    </div>
                </div>
                <BsThreeDots className="dots" />
            </div>
            <div className="reel-content">
                <p className="reel-text">Reels</p>
            </div>
            <div className="reel-footer">
                <div className="reel-actions">
                    <div className="action-icons">
                        {isPostLiked ? <AiFillHeart className="action-icon liked" onClick={handlePostLike} /> : <AiOutlineHeart className="action-icon" onClick={handlePostLike} />}
                        <FaRegComment className="action-icon" onClick={handleOPenCommentModel} />
                        <RiSendPlaneLine className="action-icon" />
                    </div>
                    <div>
                        {isSaved ? <BsBookmarkFill className="action-icon saved" onClick={handleSavePost} /> : <BsBookmark className="action-icon" onClick={handleSavePost} />}
                    </div>
                </div>
                <div className="reel-details">
                    <p className="like-count">10 likes</p>
                    <p className="view-comments" onClick={handleOPenCommentModel}>View all 10 comments</p>
                </div>
                <div className="add-comment">
                    <BsEmojiSmile className="comment-icon" />
                    <input className='comment-input' type="text" placeholder='Add a comment...' />
                </div>
            </div>
        </div>
    );
}

export default ReelCard;
