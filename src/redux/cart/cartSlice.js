import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartService from "./cartService";

import { toast } from "react-toastify";

const data = {
	overview: {},
	items: [
		{
			variant: {
				quantity: 0,
				price: 0,
				product: {
					brand: {},
					images: [],
					name: "",
					id: "",
				},
				imageIndex: 0,
				name: "",
				id: "",
			},
			quantity: 0,
			subTotal: 0,
			id: {
				cartId: "",
				variantId: "",
			},
		},
	],
};

const initialState = {
	data: {},
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

export const addToCart = createAsyncThunk(
	"cart/create",
	async (data, thunkAPI) => {
		try {
			const token = JSON.parse(localStorage.getItem("token"));
			return await cartService.AddToCart(data, token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const getAllCart = createAsyncThunk("cart/get", async (thunkAPI) => {
	try {
		const token = JSON.parse(localStorage.getItem("token"));

		return await cartService.GetAllCart(token);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) ||
			error.message ||
			error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

///////////////////////////SLICE

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		// addProduct: (state, action) => {
		// 	state.quantity += 1;
		// 	state.products.push(action.payload);
		// 	state.total += action.payload.price * action.payload.quantity;
		// },
		// inc: (state) => {
		// 	state.quantity += 1;
		// },
		// dec: (state) => {
		// 	if (state.quantity > 0) {
		// 		state.quantity -= 1;
		// 	}
		// },
		reset: (state) => {
			state.isLoading = false;
			state.isSuccess = false;
			state.isError = false;
			state.message = "";
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(addToCart.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(addToCart.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				toast("action jalan");

				// const existingIndex = state.items.findIndex(
				// 	(item) => item.id === action.payload.id
				// );
				// if (existingIndex >= 0) {
				// 	state.items[existingIndex] = {
				// 		...state.items[existingIndex],
				// 		quantity: state.items[existingIndex].quantity + 1,
				// 	};
				// 	toast("Increased product quantity");
				// } else {
				// 	let tempProductItem = { ...action.payload, quantity: 1 };
				// 	state.items.push(tempProductItem);
				// 	toast("Product added to cart");
				// }

				// const brandId = action.payload.brandId;
				// console.log(action.payload);
				// state.data = action.payload.data.;
				// state.data.items[brandId] = {
				// 	...state.data.items[brandId],
				// };
				// console.log(state.data.items[brandId]);

				// const variantId = action.payload.variantId

				// const existingVariantId = state.data.items.brandId.findIndex(
				// 	(item) => item.id.variantId === action.payload.variantId
				// );
				// console.log(existingVariantId);
			})
			.addCase(addToCart.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
		// .addCase(getAllCart.pending, (state) => {
		// 	state.isLoading = true;
		// })
		// .addCase(getAllCart.fulfilled, (state, action) => {
		// 	state.isLoading = false;
		// 	state.isSuccess = true;
		// 	state.address = action.payload;
		// })
		// .addCase(getAllCart.rejected, (state, action) => {
		// 	state.isLoading = false;
		// 	state.isError = true;
		// 	state.message = action.payload;
		// });
	},
});

export const { reset } = cartSlice.actions;
export default cartSlice.reducer;
