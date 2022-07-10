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
	console.log(response.data.data);
	localStorage.setItem("address", JSON.stringify(response));

	return response.data.data;
};

const addressService = {
	CreateUserAddresss,
};

export default addressService;
