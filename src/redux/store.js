import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/auth/authSlice";
import productReducer from "./product/productSlice";
import cartReducer from "./cart/cartSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		cart: cartReducer,
		products: productReducer,
	},
});
