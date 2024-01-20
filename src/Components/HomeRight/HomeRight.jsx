import React from 'react'
import SuggestionsCard from './SuggestionsCard'

const HomeRight = () => {
  return (
    <div style={{ border: '1px solid #e2e8f0'}}>
        <div>
            <div style={{display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
                <div style={{display:'flex',alignItems:'center'}}>
                    <div>
                        <img  style={{width:'5rem',height:'5rem',borderRadius:'50%'}} src="https://cdn.pixabay.com/photo/2017/08/02/14/59/cat-2571971_640.jpg" alt="" />
                    </div>
                    <div style={{marginLeft:'3px'}}>
                        <p>fullname</p>
                        <p style={{opacity:'0.7'}}>username</p>
                    </div>
                    <div style={{ marginLeft: 'auto' ,marginRight:'20px'}}>
                        <p style={{ color: 'blue', fontSize: '0.875rem', fontWeight: '600', marginRight: '10px' }}>Switch</p>
                    </div>
                </div>
                <div style={{margin: '1.25rem 0',marginTop:'10px'}}>
                    {[1,1,1,1].map((item)=><SuggestionsCard/>)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeRight