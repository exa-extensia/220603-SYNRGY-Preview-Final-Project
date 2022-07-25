import axios from "axios";

const API_URL = "https://cosmetic-b.herokuapp.com/api/v1/product";

const getAllProducts = async (page = 0, size = 10) => {
	const { data } = await axios.get(`${API_URL}/p?page=${page}&size=${size}`);
	// console.log("DATA GET ALL PRODUCT DI SERVICE", data);
	return data.data;
};

const getAllProductsFilter = async ({
	page = 0,
	size = 10,
	isOrganic = false,
	highestPrice = null,
	lowPrice = null,
}) => {
	const priceQuery = `${lowPrice !== null && "&lowPrice=" + lowPrice}${
		highestPrice !== null && "&highestPrice=" + highestPrice
	}`;
	const query = `${isOrganic && "&isOrganic=" + isOrganic}`;
	const { data } = await axios.get(
		`${API_URL}/filter?page=${page}&size=${size}${query}`
	);
	return data.data;
};

const getTrendingProducts = async () => {
	const response = await axios.get(`${API_URL}/q/trending`);
	// console.log(response.data.data);

	if (response.data.data) {
	}

	return response.data.data;
};

const searchProduct = async ({ keyword, page = 0, size = 12 }) => {
	const response = await axios.get(
		`${API_URL}/search?keyword=${keyword}&page=${page}&size=${size}`
	);
	// console.log("ini data", response.data.data);
	return response.data.data;
};

// MASIH GABISA!!!!!!!!!!!!!! :(((((((((((((((((
// const getOneProduct = async (params) => {
// 	const response = await axios.get(`${API_URL}/${params.id}`);
// 	console.log(response.data.data);

// 	if (response.data.data) {
// 	}

// 	return response.data.data;
// };

const productService = {
	getAllProducts,
	getAllProductsFilter,
	getTrendingProducts,
	searchProduct,
	// getOneProduct,
};

export default productService;
