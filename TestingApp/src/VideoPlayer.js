import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const thresholdTime = 300;

const VideoPlayer = ({
  url,
  thumbnailImage,
  height,
  videoID,
  isAuthanticate,
  ids,
}) => {
  const auths = JSON.parse(localStorage.getItem("auth"));
  const [watchComplete, setWatchComplete] = useState(false);
  const [TimeDuration, setTimeDuration] = useState(undefined);
  const [PlayVideo, setPlayVideo] = useState(false);
  const [muteVideo, setmuteVideo] = useState(false);
  const [voiceOn, setVoiceOn] = useState(false);

  const watchVideo = async () => {
    await fetch(
      "https://artisticyogaikriya.com/ikriya-video-service/user/video",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auths}`,
        },
        body: JSON.stringify({
          videoId: videoID,
          isEnd: false,
        }),
        redirect: "follow",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
      })
      .catch((error) => console.log("error", error));
  };

  const commands = [
    {
      command: "Play",
      callback: () => previewHandleChange(true),
    },
    {
      command: "Pause",
      callback: () => previewHandleChange(false),
    },
    {
      command: "mute",
      callback: () => setmuteVideo(true),
    },
    {
      command: "unmute",
      callback: () => setmuteVideo(false),
    },
    // {
    //   command: "Rewind",
    //   callback: () => (video.currentTime -= 10),
    // },
    // {
    //   command: "Fast Forward",
    //   callback: () => (video.currentTime += 10),
    // },
    // {
    //   command: "clear",
    //   callback: ({ resetTranscript }) => resetTranscript(),
    // },
  ];

  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  console.log(transcript);

  const previewHandleChange = (bool) => {
    resetTranscript();
    setPlayVideo(bool);
  };

  const durationHandleChange = (time) => {
    console.log("duration", time);
    setTimeDuration(time);
  };

  const progressHandleChange = (state) => {
    console.log(thresholdTime,state.playedSeconds)
    if (
      state.playedSeconds >= thresholdTime &&
      state.playedSeconds <= thresholdTime + 1 &&
      !watchComplete &&
      TimeDuration >= thresholdTime &&
      isAuthanticate
    ) {
      setWatchComplete(true);
      console.log(state.played, state);
      console.log("completed");
      watchVideo();
    }
  };

  const listen = () => {
    SpeechRecognition.startListening({ continuous: true });
    setVoiceOn(true);
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setVoiceOn(false);
  };

//   if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
//     return null;
//   }

  return (
    <div className="player-wrapper">
      <ReactPlayer
        id={ids}
        className="react-player"
        url={url}
        light={thumbnailImage}
        playing={PlayVideo}
        muted={muteVideo}
        onClickPreview={previewHandleChange}
        playsInline
        // height={height}
        height="100%"
        width="100%"
        controls
        onProgress={progressHandleChange}
        onDuration={durationHandleChange}
        playIcon={
          <a>
            {/* <img src="/img/play-btn.svg" alt="" /> */}
            {/* <img src="/img/Play80.png" alt="" style={{width:"40px",height:"40px"}}/> */}
            <img
              src="/img/Play60.png"
              alt=""
              style={{ width: "40px", height: "40px" }}
            />
          </a>
        }
      />
    </div>
  );
};

export default VideoPlayer;
