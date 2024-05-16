import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const player = videojs(videoRef.current, {
            loop: true,
            muted: true,
            autoplay: true,
        });

        return () => {
            if (player) {
                player.dispose();
            }
        };
    }, []);

    return (
        <div data-vjs-player>
            <video ref={videoRef} className="video-js" preload="auto">
                <source src="/assets/videos/home-video-3-3.mp4" type="video/mp4" />
            </video>
        </div>
    );
};

export default VideoPlayer;
