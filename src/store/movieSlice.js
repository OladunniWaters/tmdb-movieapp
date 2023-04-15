import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: []
};

export const movieSlice = createSlice({
  name: "movieListing",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies = action.payload;
    },

    postdata: (state, action) => {}
  }
});


export const { addMovie, postdata } = movieSlice.actions;

export default movieSlice.reducer;
