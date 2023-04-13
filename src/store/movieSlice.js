import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie: [],
};

export const movieSlice = createSlice({
  name: "movieListing",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movie = action.payload;
    },

    postdata: (state, action) => {},
 
    }
});

// Action creators are generated for each case reducer function
export const { addMovie, postdata} = movieSlice.actions;

export const movieReducer = movieSlice.reducer;
