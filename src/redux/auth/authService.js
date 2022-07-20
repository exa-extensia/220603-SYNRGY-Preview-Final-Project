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

	localStorage.setItem("token", JSON.stringify(response.data.data.token));
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
	console.log("NYARI TOKEN>>>>>>>>", response.data.data);
	localStorage.setItem("user", JSON.stringify(decoded));
	localStorage.setItem("token", JSON.stringify(response.data.data.token));

	return decoded;
};

const authGoogle = async (tokenId) => {
    const response = await axios.post(`${API_URL}/oauth2`, { token: tokenId });
	const token = response.data.data.token;
    const decoded = jwt_decode(token);
    localStorage.setItem("user", JSON.stringify(decoded));
    localStorage.setItem("token", JSON.stringify(token));

    return decoded;
};

// Logout user
const logout = () => {
	localStorage.removeItem("user");
	localStorage.removeItem("token");
};

const authService = {
	register,
	logout,
	login,
	authGoogle
};

export default authService;
