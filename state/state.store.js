import {create} from "zustand";

export const useStore = create((set) => ({
    moodSelected : false,
    setMoodSelected: (value) => set({ moodSelected : value}),
    movies : [],
    imtdb_categories:{
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Sci-fi",
        10770: "TV Movie",
        53: "Thriller",
        10752: "War",
        37: "Western"
      },
    setMovies: (movies) => set({ movies }),
    movie_id:[],
    setId: (ids) => set({ ids }),
    randomMovie:{},
    setRandomMovie: (randomMovie) => set({ ids }),
    setRandomMovie: (trailerKey) => set((state) => ({
      randomMovie: {
        ...state.randomMovie,
        trailer: `https://www.youtube-nocookie.com/embed/${trailerKey}`
      }
    }))
  
  
}))