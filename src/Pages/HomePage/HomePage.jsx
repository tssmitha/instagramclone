// import React from 'react';
// import StoryCircle from '../../Components/Story/StoryCircle';
// import HomeRight from '../../Components/HomeRight/HomeRight.jsx';
// import PostCard from '../../Components/Post/PostCard.jsx';


// const Homepage = () => {
//     return (
//         <div>
//             <div style={{ marginTop: '2.5rem', display: 'flex', width: '100%', justifyContent: 'center' }}>
//                 <div style={{
//                     width: '44%',
//                     paddingX: '1.25rem',
//                 }}
//                 >
//                     <div className='storyDiv' style={{
//                         display: 'flex',
//                         justifyContent: 'start',
//                         alignItems: 'center',
//                         padding: '4px',
//                         borderRadius: '0.375rem', // Equivalent to rounded-md
//                         border: '1px solid #e2e8f0', // Example color for the border
//                     }}>
//                         {[1, 1, 1, 1].map((item) => (
//                             <StoryCircle key={item} />
//                         ))}
//                     </div>
//                     <div style={{ marginTop: '2.5rem', width: '100%', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
//                         {[1,1,1].map((item)=>(
//                             <PostCard />
//                         ))}
//                     </div>
//                 </div>
//                 <div style={{width:'30%',marginLeft:'20px'}}>
//                     <HomeRight />
//                 </div>
//             </div>

//         </div>
//     );
// };

import React, { useState } from 'react';
import StoryCircle from '../../Components/Story/StoryCircle';
import HomeRight from '../../Components/HomeRight/HomeRight.jsx';
import PostCard from '../../Components/Post/PostCard.jsx';
import Reels from '../../Components/Reels/Reels'; // Import the Reels component
import Sidebar from '../../Components/Sidebar/Sidebar.jsx';

const Homepage = () => {
    const [showReels, setShowReels] = useState(false); // State to track whether to show reels or posts

    // Callback function to handle click event of "Reels" option in the sidebar
    const handleReelsClick = () => {
        setShowReels(true); // Show reels when "Reels" option is clicked
    };

    return (
        <div style={{display:'flex'}}>
            <div style={{ width: '20%', border: '1px solid #e2e8f0', marginRight: '10px' }}>
                <Sidebar />
            </div>
            <div style={{ marginTop: '2.5rem', display: 'flex', width: '100%', justifyContent: 'center' }}>
                <div style={{
                    width: '44%',
                    paddingX: '1.25rem',
                }}
                >
                    <div className='storyDiv' style={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'center',
                        padding: '4px',
                        borderRadius: '0.375rem', // Equivalent to rounded-md
                        border: '1px solid #e2e8f0', // Example color for the border
                    }}>
                        {[1, 1, 1, 1].map((item) => (
                            <StoryCircle key={item} />
                        ))}
                    </div>
                    {/* Conditionally render either posts or reels */}
                    {showReels ? (
                        <Reels />
                    ) : (
                        <div style={{ marginTop: '2.5rem', width: '100%', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                            {[1, 1, 1].map((item) => (
                                <PostCard key={item} />
                            ))}
                        </div>
                    )}
                </div>

                <div style={{ width: '30%', marginLeft: '20px' }}>
                    <HomeRight />
                </div>
            </div>
        </div>
    );
};

export default Homepage;


// export default Homepage;
