import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';

class AnotherPlayer extends Component {
    player = {}
    state = {
        video: {
            src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
            poster: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        }
    }

    onPlayerReady(player){
        console.log("Player is ready: ", player);
        this.player = player;
    }

    onVideoPlay(duration){
        console.log("Video played at: ", duration);
    }

    onVideoPause(duration){
        console.log("Video paused at: ", duration);
    }

    onVideoTimeUpdate(duration){
        console.log("Time updated: ", duration);
    }

    onVideoSeeking(duration){
        console.log("Video seeking: ", duration);
    }

    onVideoSeeked(from, to){
        console.log(`Video seeked from ${from} to ${to}`);
    }

    onVideoEnd(){
        console.log("Video ended");
    }

    render() {
        return (
            <div>
                <VideoPlayer
                    controls={true}
                    src={this.state.video.src}
                    poster={this.state.video.poster}
                    width="720"
                    height="420"
                    onReady={this.onPlayerReady.bind(this)}
                    onPlay={this.onVideoPlay.bind(this)}
                    onPause={this.onVideoPause.bind(this)}
                    onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
                    onSeeking={this.onVideoSeeking.bind(this)}
                    onSeeked={this.onVideoSeeked.bind(this)}
                    onEnd={this.onVideoEnd.bind(this)}
                />
            </div>
        );
    }
}
export default AnotherPlayer;