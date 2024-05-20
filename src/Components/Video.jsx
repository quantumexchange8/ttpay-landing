import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = ({ src }) => {
    const videoRef = useRef(null);
    const playerRef = useRef(null);

    useEffect(() => {
        const initializePlayer = () => {
            // Initialize Video.js player
            playerRef.current = videojs(videoRef.current, {
                loop: true,
                muted: true,
                autoplay: true,
                fluid: true, // Make the video responsive
                sources: [{ src, type: 'video/mp4' }] // Set video source
            });
        };

        // Check if DOM is fully loaded before initializing Video.js player
        if (document.readyState === 'complete') {
            initializePlayer();
        } else {
            // Wait for the DOM to fully load
            document.addEventListener('DOMContentLoaded', initializePlayer);
        }

        return () => {
            // Clean up event listener when component unmounts
            document.removeEventListener('DOMContentLoaded', initializePlayer);

            // Dispose the player when the component unmounts
            if (playerRef.current) {
                playerRef.current.dispose();
            }
        };
    }, [src]);

    return (
        <div data-vjs-player>
            <video ref={videoRef} className="video-js vjs-default-skin" preload="auto" />
        </div>
    );
};

export default VideoPlayer;
