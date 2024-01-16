import React from 'react'
import { Player } from "video-react";

const PlayvidLessons = ({playVideoSelect}) => {
  console.log(playVideoSelect)
    return (
        <div className="playVidLessons">
      <div class="card" style={{ width: "44rem" }}>
        <Player
          className="videoCard__thubnail"
          playsInline
          fluid={false}
          width={300}
          height={300}
          src={playVideoSelect.url}
        />
        <div class="card-body">
          {/* <h5 class="card-title">{playVideoSelect.name}</h5> */}
          {/* <p class="card-text">{playVideoSelect}</p> */}
        </div>
      </div>
    </div>
    )
}

export default PlayvidLessons;
