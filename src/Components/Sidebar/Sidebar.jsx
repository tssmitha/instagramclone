// Sidebar.js
import React, { useState } from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";
import { menu } from './SidebarConfig';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from "@chakra-ui/react";
import CreatePostModel from '../Post/CreatePostModel';
import SearchComponents from '../SearchComponents/SearchComponents';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(menu[0].title);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSearchVisible,setIsSearchVisible] = useState(false);

  const handleTabClick = (title) => {
    setActiveTab(title);
    if (title === "Profile") {
      navigate("/username");
    } else if (title === 'Home') {
      navigate("/");
    }
    else if(title==="Create"){
      onOpen()
    }
    if(title === "Search"){
      setIsSearchVisible(true);
    }
    else setIsSearchVisible(false);
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
                  style={{ display: 'grid' ,
                    display: 'flex',
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
      <CreatePostModel onClose={onClose} isOpen={isOpen} />
      {isSearchVisible && <SearchComponents/>}
    </div>
  );
};

export default Sidebar;
