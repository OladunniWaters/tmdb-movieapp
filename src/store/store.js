import { configureStore } from "@reduxjs/toolkit";
import { favoriteReducer } from "./favoriteSlice";
import movieSlice from "./movieSlice";

const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
    movies: movieSlice 
  }
});

export default store