import { configureStore } from "@reduxjs/toolkit";
import { favoriteReducer } from "./favoriteSlice";

const store = configureStore({
  reducer: {
    favorite: favoriteReducer
  }
});

export default store