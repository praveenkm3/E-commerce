import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cartslice",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const existed = state.products.find(
        (item) => item.id === action.payload.id,
      );
      if (existed) {
        existed.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id,
      );
    },
    decreaseQuantity: (state, action) => {
      const existed = state.products.find((item) => item.id === action.payload.id);
      if (existed) {
        existed.quantity -= 1;
        if (existed.quantity === 0) {
          state.products = state.products.filter((item) => item.id !== action.payload.id);
        }
      }
    },
    cartCheckout:(state)=>{
      state.products=[];
    }
  },
});

export const { addProduct, removeProduct, decreaseQuantity,cartCheckout } = CartSlice.actions;
export default CartSlice.reducer;
