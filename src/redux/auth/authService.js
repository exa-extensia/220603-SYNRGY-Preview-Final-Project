import axios from "axios";

const API_URL = "https://cosmetic-b.herokuapp.com/api/v1/auth";

// Register user
const register = async ({ name, email, password }) => {
	const response = await axios.post(
		`${API_URL}/register`,
		{
			avatar: "",
			email: email,
			password: password,
			role: "ROLE_CUSTOMER",
			user: {
				name: name,
				phone: "",
				skinType: "",
			},
		},
		{
			headers: {
				"Content-type": "application/json",
			},
		}
	);

	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data));
	}

	return response.data;
};

// Login user
const login = async ({ password, email }) => {
	const response = await axios.post(`${API_URL}/login`, email, password);

	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data));
		const token = response.data.token;
		const storage = window.localStorage;
		storage.setItem("token", token);
	}

	return response.data;
};

// Logout user
const logout = () => {
	localStorage.removeItem("user");
};

const authService = {
	register,
	logout,
	login,
};

export default authService;
