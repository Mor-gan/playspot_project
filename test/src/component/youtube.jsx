import React from "react";
import ReactPlayer from 'react-player/youtube'

const Video = () => {
    return (
        <>
         <ReactPlayer className= "youtube" 
         config={{ file: { attributes: { controlsList: 'nodownload' } } }}
         onContextMenu={(e) => e.preventDefault()}
        //  controls="true"
         width="100%"
         height="500px"
        muted={false}
         playing={false}
         url='https://youtu.be/OUDmqqDtNqk' />
        </>
        )
  }
  export default Video
