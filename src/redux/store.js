import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/auth/authSlice";
import productReducer from "./product/productSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		products: productReducer,
	},
});
