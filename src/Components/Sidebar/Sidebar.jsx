import React, { useState } from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";
import { menu } from './SidebarConfig';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from "@chakra-ui/react";
import CreatePostModel from '../Post/CreatePostModel';
import SearchComponents from '../SearchComponents/SearchComponents';
import CreateReelsModel from '../Reels/CreateReelsModel';
import Reels from '../Reels/Reels';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(menu[0].title);
  const navigate = useNavigate();
  const { isOpen: isCreatePostOpen, onOpen: onOpenCreatePost, onClose: onCloseCreatePost } = useDisclosure();
  const { isOpen: isCreateReelsOpen, onOpen: onOpenCreateReels, onClose: onCloseCreateReels } = useDisclosure();
  const { isOpen: isReelsOpen, onOpen: onOpenReels, onClose: onCloseReels } = useDisclosure();
  const [isSearchVisible,setIsSearchVisible] = useState(false);

  const handleTabClick = (title) => {
    setActiveTab(title);
    if (title === "Profile") {
      navigate("/username");
    } else if (title === 'Home') {
      navigate("/");
    } else if (title === "Create") {
      onOpenCreatePost();
    } else if (title === "Create Reels") {
      onOpenCreateReels(); // Open the reels modal
    } 
    else if (title === "Reels") {
      onOpenReels(); // Open the reels modal
    }else if (title === "Search") {
      setIsSearchVisible(true);
    } else {
      setIsSearchVisible(false);
    }
  };

  return (
    <div style={{ position: 'sticky', top: 0, height: '100vh',padding:'10px',display:'flex' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%',padding:'0 10px'}}>
        <div>
          {activeTab !=="Search" && <div style={{ paddingTop: '10px' }}>
            <img style={{ width: '55%' }} src="https://i.imgur.com/zqpwkLQ.png" alt="" />
            </div>}
            <div style={{ marginTop: '10px' }}>
              {menu.map((item) => (
                <div
                  key={item.title}
                  style={{display: 'flex',
                    alignItems: 'center',
                    marginBottom: '5px',
                    cursor: 'pointer',
                    fontSize: '1.125rem', // Equivalent to text-lg in Tailwind CSS
                    color: activeTab === item.title ? '#3182ce' : '#000', // Blue when active, black otherwise
                  }}
                  
                  onClick={() => handleTabClick(item.title)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', fontSize: '20px' }}>
                    {activeTab === item.title ? item.activeIcon : item.icon}
                    {activeTab !=="Search" && <p style={{ fontWeight: activeTab === item.title ? 'bold' : 'normal' }}>{item.title}</p>}
                  </div>
                </div>
              ))}
            </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', paddingTop: '10px' }}>
          <IoReorderThreeOutline />
          {activeTab !=="Search" &&<p style={{ marginLeft: '8px' }}>More</p>}
        </div>
      </div>
      <CreatePostModel onClose={onCloseCreatePost} isOpen={isCreatePostOpen} />
      <CreateReelsModel onClose={onCloseCreateReels} isOpen={isCreateReelsOpen} />
      <Reels onClose={onCloseReels} isOpen={isReelsOpen} />
      {isSearchVisible && <SearchComponents/>}
    </div>
  );
};

export default Sidebar;





// import React, { useEffect } from 'react';
// import Instafeed from 'instafeed.js'; 

// const Reels = () => {
//   useEffect(() => {
//     const userFeed = new Instafeed({
//       get: 'user',
//       target: "instafeed-container",
//       resolution: 'low_resolution',
//       accessToken: 'IGQWRQYkZAUS0RmeFVjUWhzblc2ZAVRaRzV0enNoTFMyZAnJZARDRoc0RLR0J2ck1vbmNGWjVOY0l0OGdBMTJBd1V1YXkxN2h5NDJxSkhiWU9MRWdvQ0gxTUcwU3ZAUMDh2SENjbUlIb3JMZAEJFdXlRMXFpQUhtcXdUZA1kZD'
//     });
//     userFeed.run();

//     // Cleanup function
//     return () => {
//       // Clear the HTML content of the target element
//       const instafeedContainer = document.getElementById('instafeed-container');
//       if (instafeedContainer) {
//         instafeedContainer.innerHTML = '';
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <h1 style={{ textAlign: 'center' }}>Show Instagram Feed on your Website</h1>
//       <div id="instafeed-container"></div>
//     </div>
//   );
// }

// export default Reels;

// import React, { useEffect, useState } from 'react';

// const Reels = () => {
//   const [reels, setReels] = useState([]);

//   useEffect(() => {
//     const fetchReels = async () => {
//       try {
//         const response = await fetch(
//           `https://graph.instagram.com/me/media?fields=id,media_type,media_url&access_token=IGQWRQYkZAUS0RmeFVjUWhzblc2ZAVRaRzV0enNoTFMyZAnJZARDRoc0RLR0J2ck1vbmNGWjVOY0l0OGdBMTJBd1V1YXkxN2h5NDJxSkhiWU9MRWdvQ0gxTUcwU3ZAUMDh2SENjbUlIb3JMZAEJFdXlRMXFpQUhtcXdUZA1kZD`
//         );
//         if (response.ok) {
//           const data = await response.json();
//           setReels(data.data.filter(media => media.media_type === 'VIDEO'));
//         } else {
//           console.error('Failed to fetch reels');
//         }
//       } catch (error) {
//         console.error('Error fetching reels:', error);
//       }
//     };

//     fetchReels();
//   }, []);

//   return (
//     <div>
//       <h1 style={{ textAlign: 'center' }}>Show Instagram Reels on your Website</h1>
//       <div>
//         {reels.map(reel => (
//           <video key={reel.id} controls>
//             <source src={reel.media_url} type="video/mp4" />
//           </video>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Reels;
// import React, { useEffect, useState } from 'react';

// const Reels = () => {
//   const [reels, setReels] = useState([]);

//   useEffect(() => {
//     const fetchReels = async () => {
//       try {
//         const response = await fetch(
//           `https://graph.instagram.com/me/media?fields=id,media_type,media_url&access_token=IGQWRQYkZAUS0RmeFVjUWhzblc2ZAVRaRzV0enNoTFMyZAnJZARDRoc0RLR0J2ck1vbmNGWjVOY0l0OGdBMTJBd1V1YXkxN2h5NDJxSkhiWU9MRWdvQ0gxTUcwU3ZAUMDh2SENjbUlIb3JMZAEJFdXlRMXFpQUhtcXdUZA1kZD`
//           //         );`
//         );

//         if (response.ok) {
//           const data = await response.json();
//           // Filter only videos
//           const reelsData = data.data.filter(media => media.media_type === 'VIDEO');
//           // Reverse the order to show the latest reels first
//           setReels(reelsData.reverse());
//         } else {
//           console.error('Failed to fetch reels');
//         }
//       } catch (error) {
//         console.error('Error fetching reels:', error);
//       }
//     };

//     fetchReels();
//   }, []);

//   return (
//     <div>
//       <h1 style={{ textAlign: 'center' }}>Show Instagram Reels on your Website</h1>
//       <div>
//         {reels.map(reel => (
//           <div key={reel.id}>
//             {/* You may customize the video player as per your UI requirements */}
//             <video controls style={{ maxWidth: '100%', marginBottom: '20px' }}>
//               <source src={reel.media_url} type="video/mp4" />
//             </video>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Reels;




