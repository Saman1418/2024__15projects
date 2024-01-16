import React from 'react';
import { Player } from 'video-react';
// import '~video-react/dist/video-react.css'; // import css

const DifferentReactPlayer = ()=> {
  return (
    <Player>
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    </Player>
  );
};

export default DifferentReactPlayer;