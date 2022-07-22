import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartService from "./cartService";

import { toast } from "react-toastify";

const initialState = {
	data: {},
	cartBadge: 0,
	statusBuatPesanan: {
		responseBuatPesanan: {},
		buatPesananSuccess: false,
		buatPesananLoading: false,
		buatPesananError: false,
		buatpesananmessage: "",
	},
	selectedVoucherID: "",
	selectedVoucherDisc: 0,
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

// export const deleteCart = createAsyncThunk(
// 	"cart/delete",
// 	async (data, thunkAPI) => {
// 		try {
// 			const token = JSON.parse(localStorage.getItem("token"));
// 			return await cartService.DeleteCart(data, token);
// 		} catch (error) {
// 			const message =
// 				(error.response &&
// 					error.response.data &&
// 					error.response.data.message) ||
// 				error.message ||
// 				error.toString();
// 			return thunkAPI.rejectWithValue(message);
// 		}
// 	}
// );

export const placeOrder = createAsyncThunk(
	"checkout/placeorder",
	async (data, thunkAPI) => {
		try {
			const token = JSON.parse(localStorage.getItem("token"));
			return await cartService.PlaceOrder(data, token);
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
		// reset: (state) => {
		// 	state.isLoading = false;
		// 	state.isSuccess = false;
		// 	state.isError = false;
		// 	state.message = "";
		// 	state.statusBuatPesanan.responseBuatPesanan = {};
		// 	state.statusBuatPesanan.buatPesananSuccess = false;
		// 	state.statusBuatPesanan.buatPesananLoading = false;
		// 	state.statusBuatPesanan.buatPesananError = false;
		// },
		deleteCartBadge: (state, action) => {
			if (state.cartBadge > 0) {
				state.cartBadge -= action.payload;
				// localStorage.setItem("cartBadge", JSON.stringify(state.cartBadge));
				console.log(">>>>>After Delete Cart Total Qty", state.cartBadge);
			}
		},
		selectVoucher: (state, action) => {},
	},
	extraReducers: (builder) => {
		builder
			.addCase(addToCart.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(addToCart.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				console.log(
					">>>>>BERHASIL MSK KERNJANG action payload",
					action.payload
				);
				const dataCart = action.payload.data.carts;
				const cartTotalQty = dataCart.reduce((currentQty, cart) => {
					return cart.quantity + currentQty;
				}, 0);
				console.log(">>>>>After Add Cart Total Qty", cartTotalQty);
				state.cartBadge = cartTotalQty;
				// localStorage.setItem("cartBadge", JSON.stringify(cartTotalQty));
				toast("sudah dimasukkan ke keranjang!");
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
				const dataCartItems = action.payload.cartItems;
				const everyItems = dataCartItems.reduce(
					(prev, curr) => [...prev, ...curr.items],
					[]
				);
				const totalQty = everyItems.reduce(
					(prev, curr) => prev + curr.quantity,
					0
				);
				if (state.cartBadge !== totalQty) {
					state.cartBadge = totalQty;
					// localStorage.setItem("cartBadge", JSON.stringify(totalQty));
				}
				console.log(">>>>>GET ALL action payload", action.payload);

				state.statusBuatPesanan.buatPesananLoading = false;
				state.statusBuatPesanan.buatPesananError = false;
				state.statusBuatPesanan.buatPesananSuccess = false;
			})
			.addCase(getAllCart.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(placeOrder.pending, (state) => {
				state.statusBuatPesanan.buatPesananLoading = true;
				toast("sedang membuat pesanan!");
			})
			.addCase(placeOrder.fulfilled, (state, action) => {
				state.cartBadge = 0;
				// localStorage.setItem("cartBadge", JSON.stringify(state.cartBadge));
				state.statusBuatPesanan.buatPesananLoading = false;
				state.statusBuatPesanan.buatPesananSuccess = true;
				state.statusBuatPesanan.responseBuatPesanan = action.payload;

				console.log(">>>>>Post Checkout action payload", action.payload);
			})
			.addCase(placeOrder.rejected, (state, action) => {
				state.statusBuatPesanan.buatPesananLoading = false;
				state.statusBuatPesanan.buatPesananError = true;
				state.statusBuatPesanan.buatpesananmessage = action.payload;
			});
	},
});

export const { reset, deleteCartBadge } = cartSlice.actions;
export default cartSlice.reducer;
