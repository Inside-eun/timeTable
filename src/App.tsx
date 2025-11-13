import { useState } from 'react';
import YouTubePlayer from './components/YouTubePlayer';
import Timetable from './components/Timetable';
import { festivalData } from './data';
import { Artist } from './types';
import './App.css';

function App() {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  const handleArtistClick = (artist: Artist) => {
    setSelectedArtist(artist);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <div className="container">
        {selectedArtist && (
          <YouTubePlayer
            videoIds={selectedArtist.youtubeVideos}
            artistName={selectedArtist.name}
          />
        )}
        <Timetable
          artists={festivalData}
          onArtistClick={handleArtistClick}
          selectedArtistId={selectedArtist?.id || null}
        />
      </div>
    </div>
  );
}

export default App;

