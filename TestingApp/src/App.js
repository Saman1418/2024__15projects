import React from "react";
import ReactPlayer from "react-player";
import VideoPlayer from "./VideoPlayer";

const App = () => {
  return (
    <>
      <VideoPlayer
        url="https://btay-videos.s3.ap-southeast-1.amazonaws.com/Videos/Promo.mp4"
        height="234.88px"
      />
      {/* <ReactPlayer controls url='https://btay-videos.s3.ap-southeast-1.amazonaws.com/Videos/Promo.mp4' /> */}
    </>
  );
};

export default App;
