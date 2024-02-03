import React from 'react';
import { useLocation } from 'react-router-dom';

const ProfileUserDetails = () => {
  const location = useLocation();
  const { username } = location.state || {};

  return (
    <div style={{ padding: '20px', width: '100%', border: '1px solid #e2e8f0' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '25%' }}>
          <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src="https://cdn.pixabay.com/photo/2023/09/23/11/26/bird-8270722_640.jpg" alt="" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{username}</p>
            <button style={{ fontSize: '1rem', padding: '8px', cursor: 'pointer', backgroundColor: '#3182ce', color: '#fff', border: 'none', borderRadius: '4px' }}>Edit Profile</button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <div style={{marginRight:'20px'}}>
                <span style={{ fontWeight: 'bold' }}>10</span>
                <span style={{ marginLeft: '5px' }}>posts</span>
              </div>
              <div style={{marginRight:'20px'}}>
                <span style={{ fontWeight: 'bold' }}>5</span>
                <span style={{ marginLeft: '5px' }}>follower</span>
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}>7</span>
                <span style={{ marginLeft: '5px' }}>following</span>
              </div>
            </div>
            </div>
            <div style={{display:'flex'}}>
              <p style={{ fontWeight: 'bold' ,marginRight:'10px'}}>Full Name</p>
              <p style={{ fontWeight: 'thin', fontSize: '1rem' }}>Engineer</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ProfileUserDetails;


// import React from 'react';
// // import { TbCircleDashed } from 'react-icons/tb';
// import { useNavigate } from 'react-router-dom';

// const ProfileUserDetails = () => {
//   const navigate = useNavigate();

//   const handleProfileClick = () => {
//     // Navigate to the user's profile page, adjust the path as needed
//     navigate('/username');
//   };

//   return (
//     <div className='py-10 w-full border'>
//       <div className='flex items-center'>
//         <div className='w-[25%]' onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
//           <img className='w-32 h-32 rounded-full' src="https://cdn.pixabay.com/photo/2023/09/23/11/26/bird-8270722_640.jpg" alt="" />
//         </div>
//         <div className='space-y-5 text-sm'> 
// //                     <div className='flex space-x-10 items-center'>
// //                         <p>Username</p>
// //                         <button>Edit Profile</button>
// //                         <TbCircleDashed></TbCircleDashed>
// //                     </div>
// //                     <div>
// //                         <div>
// //                             <span>10</span>
// //                             <span>posts</span>
// //                         </div>
// //                         <div>
// //                             <span>5</span>
// //                             <span>follower</span>
// //                         </div>
// //                         <div>
// //                             <span>7</span>
// //                             <span>following</span>
// //                         </div>
// //                     </div>
// //                     <div>
// //                         <p className='font-semibold'>Full Name</p>
// //                         <p className='font-thin text-sm'>Engineer</p>
// //                     </div>
// //                 </div>

        
//       </div>
//     </div>
//   );
// };

// export default ProfileUserDetails;
