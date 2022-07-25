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

const DeleteUserAddresss = async (id) => {
	const response = await axios.post(`${API_URL}/delete/${id}`);

	console.log(">>>>Delete Address Response", response.data.data);
	return { data: response.data.data, deletedAddressId: id };
};

// const UpdateUserAddresss = async (isDefault, token) => {
// 	const response = await axios.put(
// 		`${API_URL}`,
// 		{ isDefault: isDefault },
// 		{
// 			headers: {
// 				Authorization: `Bearer ${token}`,
// 			},
// 		}
// 	);
// 	console.log(">>>>UPDATE Address Response", response.data.data);
// 	return response.data.data;
// };

const addressService = {
	CreateUserAddresss,
	GetUserAddresss,
	DeleteUserAddresss,
	// UpdateUserAddresss,
};

export default addressService;
