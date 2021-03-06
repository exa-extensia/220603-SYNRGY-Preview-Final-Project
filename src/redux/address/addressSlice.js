import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import addressService from "./addressService";

import { toast } from "react-toastify";

const initialState = {
	address: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

export const createAddress = createAsyncThunk(
	"address/create",
	async (address, thunkAPI) => {
		try {
			const token = JSON.parse(localStorage.getItem("token"));

			return await addressService.CreateUserAddresss(address, token);
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

export const getAddress = createAsyncThunk("address/get", async (thunkAPI) => {
	try {
		const token = JSON.parse(localStorage.getItem("token"));
		// console.log("TOKEN LOCAL STORAGE>>>>>>", token);
		return await addressService.GetUserAddresss(token);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) ||
			error.message ||
			error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

// export const deleteAddress = createAsyncThunk(
// 	"address/delete",
// 	async (data, thunkAPI) => {
// 		try {
// 			return await addressService.DeleteUserAddresss(data);
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

// export const updateAddress = createAsyncThunk(
// 	"address/update",
// 	async ({ isDefault }, thunkAPI) => {
// 		try {
// 			const token = JSON.parse(localStorage.getItem("token"));
// 			return await addressService.UpdateUserAddresss(isDefault, token);
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

///////////////////////////SLICE

export const addressSlice = createSlice({
	name: "address",
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false;
			state.isSuccess = false;
			state.isError = false;
			state.message = "";
		},
		deleteUI: (state, action) => {
			state.isLoading = false;
			console.log("deleted address id>>>>>", action.payload); // deletedAddressId
			toast("alamat berhasil dihapus");
			const arraybaru = state.address.slice();
			state.address = arraybaru.filter((e) => e.id !== action.payload);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(createAddress.pending, (state) => {
				state.isLoading = true;
				toast("sedang membuat alamat!");
			})
			.addCase(createAddress.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.address.push(action.payload);
			})
			.addCase(createAddress.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				console.log("error create adddress>>>>", action.payload);
			})
			.addCase(getAddress.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAddress.fulfilled, (state, action) => {
				state.isLoading = false;
				// state.isSuccess = true;
				state.address = action.payload;
			})
			.addCase(getAddress.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				console.log("error get address>>>>", action.payload);
			});
		// .addCase(deleteAddress.pending, (state) => {
		// 	state.isLoading = true;
		// })
		// .addCase(deleteAddress.fulfilled, (state, action) => {
		// 	state.isLoading = false;
		// 	toast("alamat berhasil dihapus");
		// 	console.log(action.payload); // isi data & deletedAddressId

		// 	const arraybaru = state.address.slice();
		// 	state.address = arraybaru.filter(
		// 		(e) => e.id !== action.payload.deletedAddressId
		// 	);
		// })
		// .addCase(deleteAddress.rejected, (state, action) => {
		// 	state.isLoading = false;
		// 	state.isError = true;
		// 	state.message = action.payload;
		// });
		// .addCase(updateAddress.pending, (state) => {
		// 	state.isLoading = true;
		// })
		// .addCase(updateAddress.fulfilled, (state, action) => {
		// 	state.isLoading = false;
		// 	state.isSuccess = true;
		// 	state.address.map((e) => {
		// 		if (e.id === action.payload.id) {
		// 			e.isDefault = action.payload;
		// 		}
		// 	});
		// 	toast("UPDATED tapi gatau handle state>>>", action.payload);
		// })
		// .addCase(updateAddress.rejected, (state, action) => {
		// 	state.isLoading = false;
		// 	state.isError = true;
		// 	state.message = action.payload;
		// });
	},
});

export const { reset, deleteUI } = addressSlice.actions;
export default addressSlice.reducer;
