import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";

const initialState = {
	products: [],
	organicproducts: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	isSearch: false,
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

export const getFilteredProducts = createAsyncThunk(
	"product/getAllProductsFilter",
	async (data, { rejectWithValue }) => {
		try {
			return await productService.getAllProductsFilter(data);
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

export const getSearchProduct = createAsyncThunk(
	"product/getSearchProduct",
	async (params, thunkAPI) => {
		try {
			return await productService.searchProduct(params);
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
			.addCase(getFilteredProducts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getFilteredProducts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.products = action.payload;
			})
			.addCase(getFilteredProducts.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.products = null;
				console.log("error get filter products>>>>", action.payload);
			})
			.addCase(getSearchProduct.pending, (state) => {
				state.isSearch = true;
				state.isLoading = true;
			})
			.addCase(getSearchProduct.fulfilled, (state, action) => {
				state.isSearch = true;
				state.isLoading = false;
				state.isSuccess = true;
				state.products = action.payload;
			})
			.addCase(getSearchProduct.rejected, (state, action) => {
				state.isSearch = true;
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.products = null;
				console.log("error search products>>>>", action.payload);
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
				console.log("error get trending products>>>>", action.payload);
			});
	},
});

export default productSlice.reducer;
