import React, { useState } from 'react'
import { AiOutlineTable, AiOutlineUser } from 'react-icons/ai'
import { RiVideoAddLine } from 'react-icons/ri'
import { BiBookmark } from "react-icons/bi";
import ReqUserPostCard from './ReqUserPostCard';

const ReqUserPostPart = () => {
    const [activeTab,setActiveTab] = useState()
    const tabs = [
        {
            tab: "Post",
            icon: <AiOutlineTable></AiOutlineTable>,
            activeTab: ""
        }, {
            tab: "Reels",
            icon: <RiVideoAddLine></RiVideoAddLine>,
        }, {
            tab: "Saved",
            icon: <BiBookmark />
        }, {
            tab: "Tagged",
            icon: <AiOutlineUser></AiOutlineUser>
        }
    ]
    return (
        <div>
            <div  style={{display:'flex',justifyContent:'space-evenly',borderTop:'10px'}}>
                {tabs.map((item) => (
                   <div onClick={()=>setActiveTab(item.tab)} style={{
                    borderTop: activeTab === item.tab ? '1px solid black' : 'none',
                    borderBottom: activeTab === item.tab ? '1px solid black' : 'none',
                    opacity: activeTab === item.tab ? '1' : '0.4',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    padding: '8px 0',
                    fontSize: '0.875rem',
                  }}>
                        {item.icon}
                        <p style={{ marginLeft: '8px' ,color:'black'}}>{item.tab}</p>
                    </div>
                ))}
            </div>
            <div>
                <div style={{
  display: 'flex',
  flexWrap: 'wrap',
}}>
                    {[1,1,1,1,1,1].map((item)=><ReqUserPostCard/>)}
                </div>
            </div>

        </div>

  )
}

export default ReqUserPostPart