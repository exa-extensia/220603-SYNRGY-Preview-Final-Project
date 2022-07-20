import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/auth/authSlice";
import productReducer from "./product/productSlice";
import cartReducer from "./cart/cartSlice";
import addressReducer from "./address/addressSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		cart: cartReducer,
		products: productReducer,
		address: addressReducer,
	},
});
