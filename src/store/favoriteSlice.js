import { createSlice } from '@reduxjs/toolkit';
const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorite: [],
  },
  reducers: {
    addToFavorite: (state, action) => {
      const itemInFavorite = state.favorite.find((item) => item.id === action.payload.id);
      if (itemInFavorite) {
        itemInFavorite.quantity++;
      } else {
        state.favorite.push({ ...action.payload, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const removeItem = state.favorite.filter((item) => item.id !== action.payload);
      state.favorite = removeItem;
    },
  },
});
export const favoriteReducer = favoriteSlice.reducer;
export const {
  addToFavorite,
  removeItem,
} = favoriteSlice.actions;