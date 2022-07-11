import axios from "axios";

const API_URL = "https://cosmetic-b.herokuapp.com/api/v1/address";

const CreateUserAddresss = async (
	{ addressDetail, cityId, isDefault, label, phone, postalCode, receiver },
	token
) => {
	const response = await axios.post(
		`${API_URL}`,
		{
			addressDetail: addressDetail,
			cityId: cityId,
			isDefault: isDefault,
			label: label,
			phone: phone,
			postalCode: postalCode,
			receiver: receiver,
		},
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);
	// console.log(">>>> di service", response.data.data);
	// localStorage.setItem("address", JSON.stringify(response.data.data)); // bentuknya object {id: xx, user:{}, phone: x, receiver: xx, }
	// localStorage.setItem("address", JSON.stringify([response.data.data]));
	// localStorage["address"] = JSON.stringify(response.data.data);
	return response.data.data;
};

const GetUserAddresss = async (token) => {
	const response = await axios.get(`${API_URL}/q/user`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data.data;
};

const DeleteUserAddresss = async (id, token) => {
	const response = await axios.delete(`${API_URL}/${id}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	console.log(">>>>Delete Address Response", response.data.data);
	return response.data.data;
};

const addressService = {
	CreateUserAddresss,
	GetUserAddresss,
	DeleteUserAddresss,
};

export default addressService;
