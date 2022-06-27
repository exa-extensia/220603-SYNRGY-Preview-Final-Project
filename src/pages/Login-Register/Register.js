import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../../redux/auth/authSlice";

export default function Register() {
	// const [name, setName] = useState('')
	// const [email, setEmail] = useState('')
	// const [password, setPassword] = useState('')
	// const [phone, setPhone] = useState('')
	// let navigate = useNavigate()

	// const postRegister = (e) => {
	//     e.preventDefault();
	//     axios.post(`https://cosmetic-b.herokuapp.com/api/v1/auth/register`, {
	//         avatar: '',
	//         email,
	//         password,
	//         role: 'ROLE_CUSTOMER',
	//         user: {
	//             name,
	//             phone,
	//             skinType: ''
	//         }
	//     },
	//         {
	//             headers: {
	//                 'Content-type': 'application/json'
	//             }
	//         })
	//         .then((res) => {
	//             const hasil = res.data
	//             console.log(hasil)
	//             console.log('berhasil register')
	//             // navigate('/productdetail')
	//             // const storage = window.localStorage
	//             // storage.setItem('token', res.data.data.token)
	//         })
	//         .catch((error) => {
	//             console.log(error)
	//             console.log('gagal register')
	//         })
	// }

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	});

	const { name, email, password, password2 } = formData;

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (isError) {
			alert.error(message);
		}
		if (isSuccess || user) {
			navigate("/");
		}
		dispatch(reset());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (password !== password2) {
			alert.error("Passwords do not match");
		} else {
			const userData = {
				name,
				email,
				password,
			};

			dispatch(register(userData));
		}
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<div className="bg-grey-lighter flex min-h-screen flex-col">
					<div className="container mx-auto flex max-w-sm flex-1 flex-col items-center justify-center px-2">
						<div className="w-full rounded bg-white px-6 py-8 text-black shadow-md">
							<h1 className="mb-8 text-center text-3xl">Register</h1>
							<input
								type="text"
								className="border-grey-light mb-4 block w-full rounded border p-3"
								name="fullname"
								placeholder="Nama"
								onChange={onChange}
								value={name}
							/>

							<input
								type="text"
								className="border-grey-light mb-4 block w-full rounded border p-3"
								name="email"
								placeholder="Email"
								onChange={onChange}
								value={email}
							/>
							<input
								type="password"
								className="border-grey-light mb-4 block w-full rounded border p-3"
								name="password"
								placeholder="Password"
								onChange={onChange}
								value={password}
							/>
							<input
								type="password"
								className="border-grey-light mb-4 block w-full rounded border p-3"
								name="password"
								placeholder="Password Confirmation"
								onChange={onChange}
								value={password2}
							/>

							<button
								type="submit"
								className="bg-green hover:bg-green-dark my-1 w-full rounded bg-brown py-3 text-center text-white focus:outline-none"
							>
								Buat Akun
							</button>

							<div className="text-grey-dark mt-4 text-center text-sm">
								By signing up, you agree to the
								<a
									className="border-grey-dark text-grey-dark border-b no-underline"
									href="#"
								>
									Terms of Service
								</a>{" "}
								and
								<a
									className="border-grey-dark text-grey-dark border-b no-underline"
									href="#"
								>
									Privacy Policy
								</a>
							</div>
						</div>

						<div className="text-grey-dark mt-6">
							Sudah memiliki akun?
							<a
								className="border-blue border-b text-brown no-underline"
								href="/login"
							>
								Log in
							</a>
							.
						</div>
					</div>
				</div>
			</form>
		</>
	);
}
