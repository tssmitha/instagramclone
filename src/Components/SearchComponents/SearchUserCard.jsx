import React from 'react'

const SearchUserCard = () => {
  return (
    <div style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem', cursor:'pointer' }}>
        <div style={{display:'flex',alignItems:'center'}}>
            <img style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%' }} src="https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_640.jpg" alt="" />
            <div style={{ marginLeft: '0.75rem' }}>
                <p>Fullname</p>
                <p style={{opacity:'0.7'}}>Username</p>
            </div>
        </div>
    </div>
  )
}

export default SearchUserCard