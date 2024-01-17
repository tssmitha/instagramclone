// Sidebar.js
import React, { useState } from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";
import { menu } from './SidebarConfig';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(menu[0].title);
  const navigate = useNavigate();

  const handleTabClick = (title) => {
    setActiveTab(title);
    if (title === "Profile") {
      navigate("/username");
    } else if (title === 'Home') {
      navigate("/");
    }
  };

  return (
    <div className='sticky top-0 h-[100vh]'>
      <div className='flex flex-col justify-between h-full'>
        <div>
          <div className='pt-10'>
            <img className='w-40' src="https://i.imgur.com/zqpwkLQ.png" alt="" />
            <div className='mt-10'>
              {menu.map((item) => (
                <div
                  key={item.title}
                  className={`flex items-center mb-5 cursor-pointer text-lg ${activeTab === item.title ? "text-blue-500" : "text-black"}`}
                  onClick={() => handleTabClick(item.title)}
                >
                  {activeTab === item.title ? item.activeIcon : item.icon}
                  <p className='ml-2'>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='flex items-center cursor-pointer pt-10'>
            <IoReorderThreeOutline />
            <p className='ml-2'>More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
