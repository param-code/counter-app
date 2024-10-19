import React, { useState } from 'react';
import './SpotifyPlayer.css'; 

const SpotifyPlayer = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="spotify-player-container">
      {/* Spotify icon with hover events */}
      <div 
        className="spotify-icon" 
        onMouseEnter={() => setIsHovered(true)}  
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg" 
          alt="Spotify Icon"
        />
      </div>

      {/* Spotify player iframe with hover events */}
      <iframe
        className={`spotify-iframe ${isHovered ? 'visible' : ''}`}  
        src="https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        onMouseEnter={() => setIsHovered(true)}  
        onMouseLeave={() => setIsHovered(false)} 
      ></iframe>
    </div>
  );
};

export default SpotifyPlayer;
