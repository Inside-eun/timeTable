import { Artist } from '../types';
import './Timetable.css';

interface TimetableProps {
  artists: Artist[];
  onArtistClick: (artist: Artist) => void;
  selectedArtistId: number | null;
}

const Timetable = ({ artists, onArtistClick, selectedArtistId }: TimetableProps) => {
  const days = Array.from(new Set(artists.map(artist => artist.day)));

  return (
    <div className="timetable-container">
      <h1 className="timetable-title">2025 원더리벳 벼락치기</h1>
      <p className="timetable-subtitle">내일부터 시작인데 예습 안한 나를 위한 사이트</p>
      <div className="timetable-grid">
        {days.map(day => (
          <div key={day} className="day-column">
            <div className="day-header">{day}</div>
            <div className="artists-list">
              {artists
                .filter(artist => artist.day === day)
                .sort((a, b) => a.time.localeCompare(b.time))
                .map((artist, index) => (
                  <div
                    key={artist.id}
                    className={`artist-card ${selectedArtistId === artist.id ? 'selected' : ''} ${index % 2 === 0 ? 'floor-1' : 'floor-2'}`}
                    onClick={() => onArtistClick(artist)}
                  >
                    <div className="floor-label">{index % 2 === 0 ? '리벳' : '원더'}</div>
                    <div className="artist-time">{artist.time}</div>
                    <div className="artist-name">{artist.name}</div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timetable;

