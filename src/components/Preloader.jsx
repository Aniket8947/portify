import React, { useState, useEffect } from 'react';
import './Preloader.css'; 
import intro_video from '../assets/intro_video.mp4'

const Preloader = ({ onLoaded }) => {
    const [fadeOut, setFadeOut] = useState(false);
  
    useEffect(() => {
      // Simulate video loading time, then trigger the fade out
      const timer = setTimeout(() => {
        setFadeOut(true);
        // After the transition ends, notify that the preloader is done
        setTimeout(() => onLoaded(), 600); // Match this to your transition time
      }, 5500); // Adjust based on your video length
  
      return () => clearTimeout(timer);
    }, [onLoaded]);
  
    return (
      <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
        <video autoPlay muted>
          <source src={intro_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
  
  export default Preloader;
