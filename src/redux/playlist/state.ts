import { MusicVideo } from "src/models";

export type PlaylistState = MusicVideo[];

export const initialPlaylistState: PlaylistState = [
  { title: "Toxicity", artist: "System of a Down", url: "https://www.youtube.com/watch?v=iywaBOMvYLI" },
  { title: "All the small things", artist: "Blink-182", url: "https://www.youtube.com/watch?v=9Ht5RZpzPqw" },
  { title: "Dammit", artist: "Blink-182", url: "https://www.youtube.com/watch?v=sT0g16_LQaQ" }
];
