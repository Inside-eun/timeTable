export interface Artist {
  id: number;
  name: string;
  time: string;
  day: string;
  youtubeVideos: string[]; // YouTube video IDs
  genre?: string;
}

