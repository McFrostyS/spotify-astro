import { create } from "zustand"

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  currentMusic: { playlist: null, song: null, songs: [] },
  volume: 1,
  setVolume: (volume) => set({ volume }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),

  setNextSong: () => {
    set((state) => {
      const { currentMusic } = state;
      const { playlist, songs } = currentMusic;
      const currentSongIndex = songs.findIndex((song) => song.id === currentMusic.song.id);

      // Calcula el índice de la siguiente canción en la lista de reproducción
      const nextSongIndex = (currentSongIndex + 1) % songs.length;

      const nextSong = songs[nextSongIndex];
      const newCurrentMusic = { playlist, song: nextSong, songs };

      return { currentMusic: newCurrentMusic };
    });
  },

  setPreviousSong: () => {
    set((state) => {
      const { currentMusic } = state;
      const { playlist, song, songs } = currentMusic;

      const currentIndex = songs.findIndex((s) => s.id === song.id);

      // Calcula el índice de la canción anterior
      const previousIndex = (currentIndex - 1 + songs.length) % songs.length;

      const previousSong = songs[previousIndex];

      // Actualiza el estado con la nueva canción
      return {
        currentMusic: { playlist, song: previousSong, songs },
      };
    });
  },
}));
