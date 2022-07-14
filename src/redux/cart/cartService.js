import axios from "axios";

const API_URL = "https://cosmetic-b.herokuapp.com/api/v1/carts";

const AddToCart = async ({ quantity, variantId }, token) => {
	const response = await axios.post(
		`${API_URL}`,
		{
			quantity: quantity,
			variantId: variantId,
		},
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);
	return { data: response.data.data, quantity };
};

const GetAllCart = async (token) => {
	const response = await axios.get(`${API_URL}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data.data;
};

const DeleteCart = async ({ quantity, variantId }, token) => {
	const response = await axios.post(
		`${API_URL}/action/${variantId}?actionType=DELETE`,
		null,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);

	console.log(">>>>Delete Cart Response", response.data.data);
	return { data: response.data.data, quantity };
};

const cartService = {
	AddToCart,
	GetAllCart,
	DeleteCart,
};

export default cartService;
