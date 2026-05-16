import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slices/CartSlice"
import WishListReducer from "./slices/WishlistSlice";
export const store=configureStore({
    reducer:{
        cartslice:CartReducer,
        wishslice:WishListReducer,
    }
});

