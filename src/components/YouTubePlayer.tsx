import { useState, useEffect } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import "./YouTubePlayer.css";

interface YouTubePlayerProps {
  videoIds: string[];
  artistName: string;
}

const YouTubePlayer = ({ videoIds, artistName }: YouTubePlayerProps) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    setCurrentVideoIndex(0);
  }, [videoIds]);

  const opts: YouTubeProps["opts"] = {
    height: "450",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const onEnd: YouTubeProps["onEnd"] = () => {
    if (currentVideoIndex < videoIds.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      setCurrentVideoIndex(0);
    }
  };

  return (
    <div className="youtube-player-container">
      <div className="player-header">
        <h2>{artistName}</h2>
        <div className="video-indicators">
          {videoIds.map((_, index) => (
            <button
              key={index}
              className={`indicator ${
                index === currentVideoIndex ? "active" : ""
              }`}
              onClick={() => setCurrentVideoIndex(index)}
              aria-label={`곡 ${index + 1}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <div className="player-wrapper">
        <YouTube
          videoId={videoIds[currentVideoIndex]}
          opts={opts}
          onEnd={onEnd}
        />
      </div>
    </div>
  );
};

export default YouTubePlayer;
