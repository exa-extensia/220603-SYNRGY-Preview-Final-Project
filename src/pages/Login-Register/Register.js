import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../../redux/auth/authSlice";

export default function Register() {
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

		if (password !== password2) {
			alert("Passwords do not match");
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
							<div className="form-group">
								<input
									type="text"
									className="border-grey-light mb-4 block w-full rounded border p-3"
									id="name"
									name="name"
									value={name}
									placeholder="Enter your name"
									onChange={onChange}
								/>
							</div>
							<div className="form-group">
								<input
									type="email"
									className="border-grey-light mb-4 block w-full rounded border p-3"
									id="email"
									name="email"
									value={email}
									placeholder="Enter your email"
									onChange={onChange}
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									className="border-grey-light mb-4 block w-full rounded border p-3"
									id="password"
									name="password"
									value={password}
									placeholder="Enter password"
									onChange={onChange}
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									className="border-grey-light mb-4 block w-full rounded border p-3"
									id="password2"
									name="password2"
									value={password2}
									placeholder="Confirm password"
									onChange={onChange}
								/>
							</div>

							<button
								type="submit"
								className="bg-green hover:bg-green-dark my-1 w-full rounded bg-brown py-3 text-center text-white focus:outline-none"
							>
								Buat Akun
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

							<div className="text-grey-dark mt-4 text-center text-sm">
								By signing up, you agree to the Terms of Service and Privacy
								Policy
							</div>
						</div>

						<div className="text-grey-dark mt-6">
							Sudah memiliki akun?
							<a
								className="border-blue border-b text-brown no-underline"
								href="/login"
							>
								{" "}
								Log in
							</a>
						</div>
					</div>
				</div>
			</form>
		</>
	);
}
