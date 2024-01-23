import React from 'react'
import StoryViewer from '../../Components/StoryComponenets/StoryViewer'

const Story = () => {

    const story = [{
        image:"https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=600"
    },{
        image:"https://images.pexels.com/photos/193255/pexels-photo-193255.jpeg?auto=compress&cs=tinysrgb&w=600"
    },{
        image:"https://images.pexels.com/photos/669015/pexels-photo-669015.jpeg?auto=compress&cs=tinysrgb&w=600"
    },{
        image:"https://images.pexels.com/photos/1359307/pexels-photo-1359307.jpeg?auto=compress&cs=tinysrgb&w=600"
    },{
        image:"https://images.pexels.com/photos/1440403/pexels-photo-1440403.jpeg?auto=compress&cs=tinysrgb&w=600"
    }]

  return (
    <div>
        <StoryViewer stories={story} />
    </div>
  )
}

export default Story