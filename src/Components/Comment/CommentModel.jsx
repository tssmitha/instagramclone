import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react';
import { BsThreeDots } from 'react-icons/bs';
import CommentCard from './CommentCard';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from "react-icons/ri";
import { BsBookmark } from "react-icons/bs";
import { BsBookmarkFill, BsEmojiSmile } from "react-icons/bs";
import "./CommentModel.css";

const CommentModel = ({ onClose, isOpen, handleClick, handlePostLike, handleSavePost, isPostLiked, isSaved,handleOpenCommentModal }) => {
  return (
    <Modal size={'4xl'} onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <div style={{ display: 'flex', height: '75vh',position:'relative'}}>
            <div style={{ width: '55%', display: 'flex', flexDirection: 'column', justifyContent: 'center',flexGrow: '1'}}>
              <img style={{ maxHeight: '100%', width: '100%' }} src="https://cdn.pixabay.com/photo/2020/05/29/06/42/cat-5233986_640.jpg" alt="" />
            </div>
            <div style={{ border: 'solid #e2e8f0', width: '45%', marginLeft: '10px', marginBottom: '10px', display: 'flex', flexDirection: 'column', height: '100%',width: 'calc(100% - 10px)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '50%', backgroundColor: 'blue' }}>
                    <img src="https://cdn.pixabay.com/photo/2021/06/27/17/13/cat-6369460_1280.jpg" alt="" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />
                  </div>
                  <div style={{ marginLeft: '0.5rem' }}>
                    <p>Username</p>
                  </div>
                </div>
                <BsThreeDots />
              </div>
              <hr />
              <div style={{ flex: '1', overflowY: 'auto', margin: '10px' }} className="comment">
                {[1, 1, 1, 1,1,1,1].map(() => <CommentCard />)}
              </div>
              <div style={{ marginTop: 'auto', padding: '10px', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginRight: '0.5rem' }}>
                  {isPostLiked ? <AiFillHeart style={{ fontSize: '1.5rem', hover: { opacity: '0.5' }, cursor: 'pointer', marginRight: '0.5rem', color: 'red' }}  /> : <AiOutlineHeart style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}  />}
                  <FaRegComment style={{ fontSize: '1.5rem', hover: { opacity: '0.5' }, cursor: 'pointer', marginRight: '0.5rem' }} />
                  <RiSendPlaneLine style={{ fontSize: '1.5rem', hover: { opacity: '0.5' }, cursor: 'pointer' }} />
                </div>
                <div>
                  {isSaved ? <BsBookmarkFill style={{ fontSize: '1.5rem', hover: { opacity: '0.5' }, cursor: 'pointer', marginRight: '0.5rem' }} /> : <BsBookmark style={{ fontSize: '1.5rem', hover: { opacity: '0.5' }, cursor: 'pointer' }}  />}
                </div>
              </div>
              <div style={{ width: '100%', marginLeft: '10px' }}>
                <p>10 likes</p>
                <p style={{ cursor: 'pointer', padding: '2px', opacity: '0.5' }}>1 day ago</p>
              </div>
              <div style={{ width: '100%', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                  <BsEmojiSmile style={{ marginLeft: '0.5rem' }} />
                  <input className='commentInput' type="text" placeholder='Add a comment...' />
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default CommentModel;
