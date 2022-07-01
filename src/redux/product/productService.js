import axios from "axios";

const API_URL = "https://cosmetic-b.herokuapp.com/api/v1/product";

const getAllProducts = async () => {
	const response = await axios.get(`${API_URL}/q/trending`);
	console.log(response.data.data);

	if (response.data.data) {
	}

	return response.data.data;
};

const getOneProduct = async (params) => {
	const response = await axios.get(`${API_URL}/${params.id}`);
	console.log(response.data.data);

	if (response.data.data) {
	}

	return response.data.data;
};

const productService = {
	getAllProducts,
	getOneProduct,
};

export default productService;
