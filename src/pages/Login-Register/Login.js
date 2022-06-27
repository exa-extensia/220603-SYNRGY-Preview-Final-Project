import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../../redux/auth/authSlice";

export default function Login() {
	// const [email, setEmail] = useState('')
	// const [password, setPassword] = useState('')
	// let navigate = useNavigate()

	// const postLogin = (e) => {
	//     e.preventDefault()
	//     console.log('===')
	//     axios.post(`https://cosmetic-b.herokuapp.com/api/v1/auth/login`, {
	//         email,
	//         password
	//     },
	//         {
	//             headers: {
	//                 'Content-type': 'application/json'
	//             }
	//         })
	//         .then((res) => {
	//             const hasil = res.data
	//             console.log(hasil)
	//             // navigate('/productdetail')
	//             console.log('berhasil login')
	//         })
	//         .catch((error) => {
	//             console.log(error)
	//             console.log('gagal login')
	//         })
	// }

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (isError) {
			alert(message);
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

		const userData = {
			email,
			password,
		};

		dispatch(login(userData));
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<div className="bg-grey-lighter flex min-h-screen flex-col">
					<div className="container mx-auto flex max-w-sm flex-1 flex-col items-center justify-center px-2">
						<div className="w-full rounded bg-white px-6 py-8 text-black shadow-md">
							<h1 className="mb-8 text-center text-3xl">Login</h1>

							<input
								type="text"
								className="border-grey-light mb-4 block w-full rounded border p-3"
								name="email"
								placeholder="Email"
								value={email}
								onChange={onChange}
							/>

							<input
								type="password"
								className="border-grey-light mb-4 block w-full rounded border p-3"
								name="password"
								placeholder="Password"
								value={password}
								onChange={onChange}
							/>

							<button
								type="submit"
								className="bg-green hover:bg-green-dark my-1 w-full rounded bg-brown py-3 text-center text-white focus:outline-none"
							>
								Log in
							</button>

							{isLoading && (
								<div className="col-span-4 text-center text-grey">
									Welcoming you in...
								</div>
							)}
							{isError && (
								<div className="col-span-4 text-center text-danger">
									Something went wrong
								</div>
							)}
							{isSuccess && (
								<div className="col-span-4 text-center text-success">
									Success! Welcome!
								</div>
							)}
						</div>

						<div className="text-grey-dark mt-6">
							Tidak punya akun?
							<a
								className="border-blue border-b text-brown no-underline"
								href="/register"
							>
								Buat akun
							</a>
							.
						</div>
					</div>
				</div>
			</form>
		</>
	);
}
