import  {useState, useEffect} from 'react'

 const useVideoPlayer = (videoElement) => {
const [playerState, setPlayerState] = useState({
    isPlaying: false,
    isMuted:false,
    progress:0,
    speed:1
})

const togglePlay = ()=>{
    setPlayerState({
        ...playerState,
        isPlaying: !playerState.isPlaying
    })
}

useEffect(() =>{
    playerState.isPlaying ? videoElement.current.play() 
    : videoElement.current.pause();
}, [playerState.isPlaying, videoElement])

// handle time update
const handleTimeUpdate = () =>{
    const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100
    setPlayerState({
        ...playerState,
        progress
    })
}

// handle video progress
const handleVideoProgress = (e) =>{
    const manualChange = Number(e.target.value);
    videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange;
    setPlayerState({
        ...playerState,
        progress: manualChange
    })
}

// toggle mute
const toggleMute = () =>{
    setPlayerState({
        ...playerState,
        isMuted: !playerState.isMuted
    })
}

useEffect(() =>{
    playerState.isMuted 
   ? (videoElement.current.muted = true)
    : (videoElement.current.muted = false)
}, [playerState.isMuted, videoElement])

  return {
    playerState,
    togglePlay,
    handleTimeUpdate,
    handleVideoProgress,
    toggleMute,
  }


  
}


export default  useVideoPlayer;