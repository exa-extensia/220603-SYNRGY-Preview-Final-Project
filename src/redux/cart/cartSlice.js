import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		products: [],
		quantity: 0,
		total: 0,
	},
	reducers: {
		addProduct: (state, action) => {
			state.quantity += 1;
			state.products.push(action.payload);
			state.total += action.payload.price * action.payload.quantity;
		},
		// inc: (state) => {
		// 	state.quantity += 1;
		// },
		// dec: (state) => {
		// 	if (state.quantity > 0) {
		// 		state.quantity -= 1;
		// 	}
		// },
	},
});

export const { addProduct, inc, dec } = cartSlice.actions;
export default cartSlice.reducer;
