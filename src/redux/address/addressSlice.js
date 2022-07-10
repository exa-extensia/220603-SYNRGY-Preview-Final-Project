import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import addressService from "./addressService";

const token = JSON.parse(localStorage.getItem("token"));

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
			// const token = thunkAPI.getState().auth.user.token;
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
				state.user = action.payload;
			})
			.addCase(createAddress.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.user = null;
			});
	},
});

export const { reset } = addressSlice.actions;
export default addressSlice.reducer;
