import React from 'react'
import { TbCircleDashed } from "react-icons/tb"

const ProfileUserDetails = () => {
    return (
        <div className='py-10 w-full border'>
            <div className='flex items-center'>
                <div className='w-[25%]'>
                    <img className='w-32 h-32 rounded-full' src="https://cdn.pixabay.com/photo/2023/09/23/11/26/bird-8270722_640.jpg" alt="" />
                </div>

                <div className='space-y-5 text-sm'> 
                    <div className='flex space-x-10 items-center'>
                        <p>Username</p>
                        <button>Edit Profile</button>
                        <TbCircleDashed></TbCircleDashed>
                    </div>
                    <div>
                        <div>
                            <span>10</span>
                            <span>posts</span>
                        </div>
                        <div>
                            <span>5</span>
                            <span>follower</span>
                        </div>
                        <div>
                            <span>7</span>
                            <span>following</span>
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold'>Full Name</p>
                        <p className='font-thin text-sm'>Engineer</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileUserDetails