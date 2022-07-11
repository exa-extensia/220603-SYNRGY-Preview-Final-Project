import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import addressService from "./addressService";

// const address = JSON.parse(localStorage.getItem("address"));

const initialState = {
	// address: localStorage.getItem("address")
	// 	? JSON.parse(localStorage.getItem("address"))
	// 	: [],
	// address: address ? address : null,
	address: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

// console.log(">>>>>initialstate", initialState.address);

export const createAddress = createAsyncThunk(
	"address/create",
	async (address, thunkAPI) => {
		try {
			const token = JSON.parse(localStorage.getItem("token"));
			// console.log("TOKEN LOCAL STORAGE>>>>>>", token);
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
		console.log("TOKEN LOCAL STORAGE>>>>>>", token);
		return await addressService.GetUserAddresss(token);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) ||
			error.message ||
			error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const deleteAddress = createAsyncThunk(
	"address/delete",
	async (id, thunkAPI) => {
		try {
			const token = JSON.parse(localStorage.getItem("token"));
			console.log("TOKEN LOCAL STORAGE>>>>>>", token);
			return await addressService.DeleteUserAddresss(id, token);
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
	},
	extraReducers: (builder) => {
		builder
			.addCase(createAddress.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createAddress.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.address.push(action.payload);
				// state.address = action.payload;
				// console.log(">>>di Slice", action.payload); // bentuknya object {id: xx, user:{}, phone: x, receiver: xxxx, }
			})
			.addCase(createAddress.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getAddress.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAddress.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.address = action.payload;
			})
			.addCase(getAddress.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(deleteAddress.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteAddress.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.address = state.address.filter((e) => e.id !== action.payload);
				// state.address = state.address.splice(
				// 	state.address.findIndex((item) => item.id === action.payload),
				// 	1
				// );
			})
			.addCase(deleteAddress.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { reset } = addressSlice.actions;
export default addressSlice.reducer;
