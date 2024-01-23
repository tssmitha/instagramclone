import React from 'react'
import './SearchComponents.css'
import SearchUserCard from './SearchUserCard'

const SearchComponents = () => {
  return (
    <div className='searchContainer'>
        <div style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingBottom: '1.25rem' }} >
            <h1 style={{ fontSize: '1.25rem', paddingBottom: '1.25rem' }}>Search</h1>
            <input type="text" placeholder='search...' className='searchInput'/>
        </div>
        <hr />
        <div style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingBottom: '1.25rem' }}>
            {[1,1,1,1,1,1].map((item)=><SearchUserCard/>)}
        </div>
    </div>
  )
}

export default SearchComponents