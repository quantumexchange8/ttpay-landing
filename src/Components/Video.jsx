import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoComponent = ({ src, loop = true, muted = true, autoplay = true }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    console.log('Component mounted');
    
    if (!videoRef.current) {
      console.warn('Video element not found');
      return;
    }

    // Initialize Video.js
    const player = videojs(videoRef.current, {
      controls: true,
      autoplay,
      muted,
      loop,
      sources: [
        {
          src,
          type: 'video/mp4',
        },
      ],
    });

    // Cleanup on unmount
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [src, loop, muted, autoplay]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );
};

export default VideoComponent;
