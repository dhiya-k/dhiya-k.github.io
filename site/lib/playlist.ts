// Music playlist data
export interface Song {
  id: string;
  title: string;
  artist: string;
  file: string;
  cover?: string;
}

export const playlist: Song[] = [
  {
    id: "1",
    title: "Midnight Code",
    artist: "Dev Beats",
    file: "/music/song1.mp3",
    cover: "/music/cover1.jpg",
  },
  {
    id: "2",
    title: "Algorithm Dreams",
    artist: "Syntax",
    file: "/music/song2.mp3",
    cover: "/music/cover2.jpg",
  },
  {
    id: "3",
    title: "Neural Flow",
    artist: "Deep Learning",
    file: "/music/song3.mp3",
    cover: "/music/cover3.jpg",
  },
];
