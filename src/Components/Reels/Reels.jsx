// import React, { useState} from 'react';
// import { BsThreeDots, BsBookmarkFill, BsEmojiSmile } from "react-icons/bs";
// import "./Reels.css"; // Rename the CSS file if necessary
// import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
// import { FaRegComment } from 'react-icons/fa';
// import { RiSendPlaneLine } from "react-icons/ri";
// import { BsBookmark } from "react-icons/bs";
// import { useDisclosure } from "@chakra-ui/react";

// const ReelCard = () => {
//     const [isPostLiked, setIsPostLiked] = useState(false);
//     const [isSaved, setIsSaved] = useState(false);
//     const { onOpen, onClose } = useDisclosure();

//     const handlePostLike = () => {
//         setIsPostLiked(!isPostLiked);
//     }

//     const handleSavePost = () => {
//         setIsSaved(!isSaved);
//     }

//     const handleOPenCommentModel = () => {
//         onOpen();
//     }

//     return (
//         <div className="reel-card">
//             <div className="reel-header">
//                 <div className="user-info">
//                     <img className="user-avatar" src="https://cdn.pixabay.com/photo/2020/05/29/06/42/cat-5233986_640.jpg" alt="" />
//                     <div className="username-location">
//                         <p className="username">Username</p>
//                         <p className="location">Location</p>
//                     </div>
//                 </div>
//                 <BsThreeDots className="dots" />
//             </div>
//             <div className="reel-content">
//                 <p className="reel-text">Reels</p>
//             </div>
//             <div className="reel-footer">
//                 <div className="reel-actions">
//                     <div className="action-icons">
//                         {isPostLiked ? <AiFillHeart className="action-icon liked" onClick={handlePostLike} /> : <AiOutlineHeart className="action-icon" onClick={handlePostLike} />}
//                         <FaRegComment className="action-icon" onClick={handleOPenCommentModel} />
//                         <RiSendPlaneLine className="action-icon" />
//                     </div>
//                     <div>
//                         {isSaved ? <BsBookmarkFill className="action-icon saved" onClick={handleSavePost} /> : <BsBookmark className="action-icon" onClick={handleSavePost} />}
//                     </div>
//                 </div>
//                 <div className="reel-details">
//                     <p className="like-count">10 likes</p>
//                     <p className="view-comments" onClick={handleOPenCommentModel}>View all 10 comments</p>
//                 </div>
//                 <div className="add-comment">
//                     <BsEmojiSmile className="comment-icon" />
//                     <input className='comment-input' type="text" placeholder='Add a comment...' />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ReelCard;

// import React, { useEffect } from 'react';
// import Instafeed from 'instafeed.js'; 

// const  Reels = () => {
//   useEffect(() => {
//     const userFeed = new Instafeed({
//       get: 'user',
//       target: "instafeed-container",
//       resolution: 'low_resolution',
//       accessToken: 'IGQWRNVzJFU3dvbThhSy1vcW8zNkN6dWVBZAVI2cXEyTUZAhcnd4SllMbUhTUkNGY2NCbHk3a1NsM0d6SWo0ZAFRzcGZAoUkRUQ2VfWE1uanlLdnBnaXhwbjlJVC1iUnlGV29MM0VocUQ1Wm1yQWpwVWVFakVnbFFBRUkZD'
//     });
//     userFeed.run();

//     // Clean up function
//     return () => {
//       userFeed.destroy();
//     };
//   }, []);

//   return (
//     <div>
//       <h1 style={{ textAlign: 'center' }}>Show Instagram Feed on your Website</h1>
//       <div id="instafeed-container"></div>
//     </div>
//   );
// }

// export default  Reels;

// import React, { useEffect } from 'react';
// import Instafeed from 'instafeed.js'; 

// const  Reels = () => {
//   useEffect(() => {
//     const userFeed = new Instafeed({
//       get: 'user',
//       target: "instafeed-container",
//       resolution: 'low_resolution',
//       accessToken: 'IGQWRNVzJFU3dvbThhSy1vcW8zNkN6dWVBZAVI2cXEyTUZAhcnd4SllMbUhTUkNGY2NCbHk3a1NsM0d6SWo0ZAFRzcGZAoUkRUQ2VfWE1uanlLdnBnaXhwbjlJVC1iUnlGV29MM0VocUQ1Wm1yQWpwVWVFakVnbFFBRUkZD'
//     });
//     userFeed.run();

//     // No cleanup function needed since userFeed.destroy() is not available

//   }, []);

//   return (
//     <div>
//       <h1 style={{ textAlign: 'center' }}>Show Instagram Feed on your Website</h1>
//       <div id="instafeed-container"></div>
//     </div>
//   );
// }

// export default Reels;

import React, { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalBody, Button, Spinner } from '@chakra-ui/react';
import axios from 'axios';

const ViewReelsModel = ({ onClose, isOpen }) => {
    const [reels, setReels] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReels = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await axios.get('http://localhost:5000/reels');
                setReels(response.data);
            } catch (error) {
                console.error('Error fetching reels:', error);
                setError('Error fetching reels. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };

        if (isOpen) {
            fetchReels();
        }
    }, [isOpen]);

    return (
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1px,10px' }}>
                    <p style={{ marginLeft: '10px' }}>View Reels</p>
                    <Button variant={"ghost"} size="sm" colorSchema={"blue"} onClick={onClose}>
                        Close
                    </Button>
                </div>
                <hr />
                <ModalBody>
                    {isLoading ? (
                        <Spinner />
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        <div>
                            {reels.map((reel) => (
                                <div key={reel.id}>
                                    <p>{reel.caption}</p>
                                    <video controls width="300" height="200">
                                        <source src={reel.videoUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            ))}
                        </div>
                    )}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default ViewReelsModel;


