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
	console.log(">>>>Added Cart Response", response.data.data);
	return { data: response.data.data, quantity, existingVariantId: variantId };
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

const PlaceOrder = async (
	{ bank, delivery, deliveryService, paymentType },
	token
) => {
	const response = await axios.post(
		"https://cosmetic-b.herokuapp.com/api/v1/checkout",
		{
			bank: bank,
			delivery: delivery,
			deliveryService: deliveryService,
			paymentType: paymentType,
		},
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);

	console.log(">>>>Post Checkout Response", response.data.data);
	return { data: response.data.data };
};

const cartService = {
	AddToCart,
	GetAllCart,
	DeleteCart,
	PlaceOrder,
};

export default cartService;
