import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import ReactPlayer from "react-player";


let videok;

const ReactSpeechreconigation = () => {
    const [voiceOn, setVoiceOn] = useState(false);
    const [PlayVideo, setPlayVideo] = useState(false);
   videok = document.getElementById("videoss");
  

  const commands = [
    {
      command: 'play',
      callback: () => previewHandleChange(true)
    },
    {
      command: "change background colour to *",
      callback: (color) => {
        document.body.style.background = color;
      },
    },
    {
      command: 'pause',
      callback: () => previewHandleChange(false)
    },
    // {
    //   command: 'Rewind',
    //   callback: () => video.currentTime-=10
    // },
    // {
    //   command: 'Fast Forward',
    //   callback: () => video.currentTime+=10
    // },
    // {
    //   command: 'Mute',
    //   callback: () => video.muted=true
    // },
    // {
    //   command: 'Unmute',
    //   callback: () => video.muted=false
    // },
    // {
    //   command: 'clear',
    //   callback: ({ resetTranscript }) => resetTranscript()
    // }
]

const { transcript, resetTranscript } = useSpeechRecognition({ commands })


const previewHandleChange = (bool) => {
  resetTranscript();
  setPlayVideo(bool);
};


  const listen = () => {
    SpeechRecognition.startListening({ continuous: true });
    setVoiceOn(true);
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setVoiceOn(false);
    };

    console.log("bool",PlayVideo)
    console.log(transcript)


    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      return null;
    }
    

    

  return (
    <div className="recipe-detail-container">

    <ReactPlayer
        className="w-100"
        url={"https://btay-videos.s3.ap-southeast-1.amazonaws.com/Videos/Promo.mp4"}
        light={"https://btay-videos.s3.ap-southeast-1.amazonaws.com/Videos/Promo.mp4"}
        playing={PlayVideo}
        // onClickPreview={previewHandleChange}
        playsInline
        height={"527.88px"}
        controls
        // onProgress={progressHandleChange}
        // onDuration={durationHandleChange}
    
      />
      <p>{transcript}</p>



      {/* <video
        controls
        width="400"
        src={
          "https://btay-videos.s3.ap-southeast-1.amazonaws.com/Videos/Promo.mp4"
        }
        id="video"
      ></video> */}

      {!voiceOn ? (
        <button onClick={listen} className="voice-button">
          Turn On Voice Command
        </button>
      ) : (
        <button onClick={stopListening} className="voice-button">
          Turn Off Voice Command
        </button>
      )}
    </div>
  );
};

export default ReactSpeechreconigation;
