import React, {useRef} from 'react'
import './videoPlayer.css'
import video from '../asset/video.mp4'
import useVideoPlayer from './useVideoPlayer'
import {FiPlay} from 'react-icons/fi'
import {AiOutlinePause} from 'react-icons/ai'
import { BsVolumeUpFill, BsFillVolumeDownFill } from 'react-icons/bs'

 const VideoPlayer = () => {

    const videoElement = useRef(null);

    const { 
        playerState,
        togglePlay,
        handleTimeUpdate,
        handleVideoProgress,
        toggleMute
    } = useVideoPlayer(videoElement);


  return (
    <div className='container'>
      <div className='video-wrapper'>
        <video
          src={video}
          ref={videoElement}
          onTimeUpdate={handleTimeUpdate}
        />
        <div className='controles'>
          <div className='actions'>
            <button onClick={togglePlay}>
              {!playerState.isPlaying ? (
                <i className='bx bx-play'>{<FiPlay />} </i>
              ) : (
                <i className='bx '>{<AiOutlinePause />} </i>
              )}
            </button>
          </div>
          <input
            type='range'
            min={0}
            max='100'
            value={playerState.progress}
            onChange={(e) => {
              handleVideoProgress(e)
            }}
          />
          <button className='mute-btn' onClick={toggleMute}>
            {!playerState.isMuted ? (
              <i className='bx'>{<BsVolumeUpFill />} </i>
            ) : (
              <i className='bx'>
                {<BsFillVolumeDownFill />}
              </i>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer;