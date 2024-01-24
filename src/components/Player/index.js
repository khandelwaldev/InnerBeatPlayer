// components/YouTubePlayer.js
import { useEffect, useRef } from 'react';

const Player = ({ videoId }) => {
  const playerRef = useRef(null);
  let isPlaying = false;

  useEffect(() => {
    // Load the YouTube API script
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    document.head.appendChild(script);

    // Callback function when the YouTube API is ready
    window.onYouTubeIframeAPIReady = initializePlayer;

    return () => {
      // Cleanup function
      document.head.removeChild(script);
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  const initializePlayer = () => {
    // Create a YouTube Player
    playerRef.current = new window.YT.Player('player-container', {
      height: '360',
      width: '640',
      videoId: videoId,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  };

  const onPlayerReady = (event) => {
    // Start the video playback
    event.target.playVideo();
  };

  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      isPlaying = true;
      // Update the progress bar while the video is playing
      setInterval(updateProgressBar, 100);
    } else {
      isPlaying = false;
    }
  };

  const updateProgressBar = () => {
    const currentTime = playerRef.current.getCurrentTime();
    const duration = playerRef.current.getDuration();
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = (currentTime / duration) * 100;

    // Update the width of the progress bar
    progressBar.style.width = `${progressPercentage}%`;
  };

  const seekTo = (event) => {
    const progressBarContainer = document.getElementById('progress-bar-container');
    const progressBar = document.getElementById('progress-bar');
    const duration = playerRef.current.getDuration();

    // Calculate the clicked position as a percentage of the total width
    const clickX = event.clientX - progressBarContainer.getBoundingClientRect().left;
    const newPercentage = (clickX / progressBarContainer.offsetWidth) * 100;

    // Update the progress bar immediately
    progressBar.style.width = `${newPercentage}%`;

    // Seek to the corresponding time in the video
    const newTime = (newPercentage / 100) * duration;
    playerRef.current.seekTo(newTime, true);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  return (
    <div>
      {/* Your video container */}
      <div id="player-container"></div>
      {/* Custom progress bar */}
      <div id="progress-bar-container" onClick={seekTo}>
        <div id="progress-bar"></div>
      </div>
      {/* Custom play/pause button */}
      <div id="play-pause-btn" onClick={togglePlayPause}>
        {isPlaying ? '⏸' : '▶️'}
      </div>
    </div>
  );
};

export default Player;
