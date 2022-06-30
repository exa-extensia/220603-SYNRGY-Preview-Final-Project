import axios from "axios";
import jwt_decode from "jwt-decode";

const API_URL = "https://cosmetic-b.herokuapp.com/api/v1/auth";

// Register user
const register = async ({ name, email, password }) => {
	const response = await axios.post(
		`${API_URL}/register`,
		{
			email: email,
			password: password,
			role: "ROLE_CUSTOMER",
			user: {
				name: name,
			},
		},
		{
			headers: {
				"Content-type": "application/json",
			},
		}
	);

	const decoded = jwt_decode(response.data.data.token);
	console.log(">>>>>>>>", decoded);
	localStorage.setItem("user", JSON.stringify(decoded));

	return decoded;
};

// Login user
const login = async ({ password, email }) => {
	const response = await axios.post(`${API_URL}/login`, { email, password });

	const decoded = jwt_decode(response.data.data.token);
	console.log(">>>>>>>>", decoded);
	localStorage.setItem("user", JSON.stringify(decoded));

	return decoded;
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
