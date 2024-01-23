import React, { useState} from 'react';
import { BsThreeDots, BsBookmarkFill, BsEmojiSmile } from "react-icons/bs";
import "./PostCard.css"
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from "react-icons/ri";
import { BsBookmark } from "react-icons/bs";
import CommentModel from '../Comment/CommentModel';
import { useDisclosure } from "@chakra-ui/react";


const PostCard = () => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [isPostLiked, setIsPostLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleClick = () => {
        setShowDropDown(!showDropDown);
    }

    const handlePostLike = () => {
        setIsPostLiked(!isPostLiked);
    }

    const handleSavePost = () => {
        setIsSaved(!isSaved);
    }

    const handleOPenCommentModel=()=>{
        onOpen();
    }


    return (
        <div>
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '0.375rem', width: '100%'}}>
                <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
                    <img style={{ height: '3rem', width: '3rem', borderRadius: '50%' }} src="https://cdn.pixabay.com/photo/2020/05/29/06/42/cat-5233986_640.jpg" alt="" />
                    <div style={{ marginLeft: '1.25rem', flex: '1' }}>
                        <p style={{ fontWeight: '600', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Username</p>
                        <p style={{ fontWeight: '100', fontSize: '0.875rem', marginTop: '0' }}>location</p>
                    </div>
                    <div className='dropdown'>
                        <BsThreeDots className='dots' onClick={handleClick} />
                        <div className='dropdown-content'>
                            {showDropDown && <p style={{
                                backgroundColor: 'black',
                                color: 'white',
                                padding: '0.25rem 1rem',
                                borderRadius: '0.375rem',
                                cursor: 'pointer',
                            }}>Delete</p>}
                        </div>
                    </div>

                </div>
                <div style={{ width: '100%' }}>
                    <img style={{ width: '100%' }} src="https://cdn.pixabay.com/photo/2020/08/17/18/38/cat-5496162_1280.jpg" alt="" />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',marginTop:'10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '0.5rem', }}>
                        {isPostLiked ? <AiFillHeart style={{ fontSize: '1.5rem', hover: { opacity: '0.5' }, cursor: 'pointer', marginRight: '0.5rem', color: 'red' }} onClick={handlePostLike} /> : <AiOutlineHeart style={{ fontSize: '1.5rem', marginRight: '0.5rem' }} onClick={handlePostLike} />}

                        <FaRegComment style={{ fontSize: '1.5rem', hover: { opacity: '0.5' }, cursor: 'pointer', marginRight: '0.5rem' }} onClick={handleOPenCommentModel} />
                        <RiSendPlaneLine style={{ fontSize: '1.5rem', hover: { opacity: '0.5' }, cursor: 'pointer' }} />
                    </div>
                    <div>
                        {isSaved ? <BsBookmarkFill style={{ fontSize: '1.5rem', hover: { opacity: '0.5' }, cursor: 'pointer' }} onClick={handleSavePost} /> : <BsBookmark style={{ fontSize: '1.5rem', hover: { opacity: '0.5' }, cursor: 'pointer' }} onClick={handleSavePost} />}
                    </div>
                </div>
                <div style={{ width: '100%', padding: '2px 5px' }}>
                    <p>10 likes</p>
                    <p style={{ cursor: 'pointer', padding: '2px', opacity: '0.5' }}>view all 10 comments</p>
                </div>
                <div style={{ width: '100%', border: '1px solid #e2e8f0', borderTop: '2px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                        <BsEmojiSmile />
                        <input className='commentInput' type="text" placeholder='Add a comment...' />
                    </div>
                </div>
            </div>
            <CommentModel handlePostLike={handlePostLike} onClose={onClose} isOpen={isOpen} handleSavePost={handleSavePost} isPostLiked={isPostLiked} isSaved={isSaved}/>

        </div>
    );
}

export default PostCard;
