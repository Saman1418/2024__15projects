import React from 'react'
import ReactPlayer from 'react-player'
const VideoPlay = () => {
    return (
        <div>
             <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          width='20%'
          height='200%'
          controls
        />
        </div>
    )
}

export default VideoPlay
