import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartService from "./cartService";

import { toast } from "react-toastify";

// const data = {
// 	overview: {},
// 	items: [
// 		{
// 			variant: {
// 				quantity: 0,
// 				price: 0,
// 				product: {
// 					brand: {},
// 					images: [],
// 					name: "",
// 					id: "",
// 				},
// 				imageIndex: 0,
// 				name: "",
// 				id: "",
// 			},
// 			quantity: 0,
// 			subTotal: 0,
// 			id: {
// 				cartId: "",
// 				variantId: "",
// 			},
// 		},
// 	],
// };

const initialState = {
	data: {},
	cartBadge: localStorage.getItem("cartBadge")
		? JSON.parse(localStorage.getItem("cartBadge"))
		: 0,
	isError: false,
	cartError: false,
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

export const deleteCart = createAsyncThunk(
	"cart/delete",
	async (data, thunkAPI) => {
		try {
			const token = JSON.parse(localStorage.getItem("token"));
			return await cartService.DeleteCart(data, token);
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
				// state.addedVariantId = action.payload.existingVariantId;
				// console.log(">>>>>existing id", action.payload.existingVariantId);
				// if (state.addedVariantId !== action.payload.existingVariantId) {}
				toast("sudah dimasukkan ke keranjang!");
				state.cartBadge += action.payload.quantity;
				localStorage.setItem("cartBadge", JSON.stringify(state.cartBadge));
				console.log(">>>>>BERHASIL MSK KERNJANG", action.payload);
			})
			.addCase(addToCart.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				toast("oops ada error");
			})
			.addCase(getAllCart.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllCart.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.data = action.payload;
				console.log(action.payload);
			})
			.addCase(getAllCart.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(deleteCart.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteCart.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				toast("berhasil dihapus");
				if (state.cartBadge > 0) {
					state.cartBadge -= action.payload.quantity;
					localStorage.setItem("cartBadge", JSON.stringify(state.cartBadge));
				}
			})
			.addCase(deleteCart.rejected, (state, action) => {
				state.isLoading = false;
				state.cartError = true;
				state.message = action.payload;
				toast("oops ada error");
			});
	},
});

export const { reset } = cartSlice.actions;
export default cartSlice.reducer;
