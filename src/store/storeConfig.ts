/* eslint-disable no-unused-vars */
import { create } from "zustand";
interface MUSIC {
  src: string;
  thumbnail: string;
  title: string;
  artist: string;
  isSelected?: boolean;
}
export interface MusicStore {
  music: MUSIC;
  setMusic: (music: MUSIC) => void;
}
export const useMusicStore = create<MusicStore>((set) => ({
  music: {
    src: "",
    thumbnail: "",
    title: "",
    artist: "",
    isSelected: false,
  },

  setMusic: (music) => set({ music }),
}));
