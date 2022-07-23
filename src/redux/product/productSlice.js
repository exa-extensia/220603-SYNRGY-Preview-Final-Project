import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";

const initialState = {
	products: [],
	organicproducts: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
	trendingproducts: [],
	isTrendingError: false,
	isTrendingSuccess: false,
	isTrendingLoading: false,
	trendingmessage: "",
};

export const getAllProducts = createAsyncThunk(
	"product/getAllProducts",
	async (data, { rejectWithValue }) => {
		const { page, size } = data;
		try {
			return await productService.getAllProducts(page, size);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return rejectWithValue(message);
		}
	}
);

export const getTrendingProducts = createAsyncThunk(
	"product/getTrendingProducts",
	async (thunkAPI) => {
		try {
			return await productService.getTrendingProducts();
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

// MASIH GABISA!!!!!!!!!!!!!! :(((((((((((((((((
// export const getOneProduct = createAsyncThunk(
// 	"product/getOneProduct",
// 	async (params, thunkAPI) => {
// 		try {
// 			return await productService.getOneProduct(params);
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

//////////// REDUX SLICE

export const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAllProducts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllProducts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.products = action.payload;
				const arrayProducts = action.payload.products;
				state.organicproducts = arrayProducts.filter(
					(e) => e.isOrganic === true
				);
			})
			.addCase(getAllProducts.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.products = null;
				console.log("error get all products>>>>", action.payload);
			})
			.addCase(getTrendingProducts.pending, (state) => {
				state.isTrendingLoading = true;
			})
			.addCase(getTrendingProducts.fulfilled, (state, action) => {
				state.isTrendingLoading = false;
				state.isTrendingSuccess = true;
				state.trendingproducts = action.payload;
			})
			.addCase(getTrendingProducts.rejected, (state, action) => {
				state.isTrendingLoading = false;
				state.isTrendingError = true;
				state.trendingmessage = action.payload;
				state.trendingproducts = null;
			});
		// .addCase(getOneProduct.pending, (state) => {
		// 	state.isLoading = true;
		// })
		// .addCase(getOneProduct.fulfilled, (state, action) => {
		// 	state.isLoading = false;
		// 	state.isSuccess = true;
		// 	state.products = action.payload;
		// })
		// .addCase(getOneProduct.rejected, (state, action) => {
		// 	state.isLoading = false;
		// 	state.isError = true;
		// 	state.message = action.payload;
		// 	state.products = null;
		// });
	},
});

export default productSlice.reducer;
