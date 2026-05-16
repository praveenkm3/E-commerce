 
import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishslice',
  initialState: {
    wishproducts: []  
  },
  reducers: {
    addToWish: (state, action) => {
      // Check if it already exists to prevent duplicate adding
      const exists = state.wishproducts.some((item) => item.id === action.payload.id);
      if (!exists) { 
        state.wishproducts.push(action.payload);
      }
    },
    removeFromWish: (state, action) => {  
      state.wishproducts = state.wishproducts.filter(
        (item) => item.id != action.payload.id
      );
    }
  }
});

export const { addToWish, removeFromWish } = wishlistSlice.actions;
export default wishlistSlice.reducer;
