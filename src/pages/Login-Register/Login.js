import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login, reset } from "../../redux/auth/authSlice";
import LOTUS from "../../assets/images/logos/mainlogo-lotus.png";
import bg from "../../assets/images/lr-bg.jpg";
import bgmobile from "../../assets/images/lr-mobile.png";
import "./lrbg.css";
import { toast } from "react-toastify";

import introVid from "../../assets/video/Flambo.mp4";

export default function Login() {
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
			toast(message);
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
			<section
				className="DESKTOP absolute top-0 bottom-0 left-0 right-0 hidden h-full w-full overflow-hidden xl:block "
				style={{
					backgroundImage: `url(${bg})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="relative xl:h-[484px] xl:w-[860px] 2xl:h-[563px] 2xl:w-[1000px] 3xl:h-[720px] 3xl:w-[1300px] 4xl:h-[1012.5px] 4xl:w-[1800px]">
					<video
						loop
						autoPlay
						muted
						className="xl:w-[860px] 2xl:w-[1000px] 3xl:w-[1300px] 4xl:w-[1800px]"
					>
						<source src={introVid} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
					<div className="absolute top-0 right-0 xl:translate-x-[150px] xl:translate-y-[50px] 3xl:translate-y-[150px] 4xl:translate-x-[300px] 4xl:translate-y-[100px]">
						<div className=" overflow-hidden rounded-2xl bg-cream shadow-xl xl:h-[400px] xl:w-[300px] 4xl:h-[800px] 4xl:w-[600px]">
							<div className="lr-wrapper flex h-full flex-col gap-10 ">
								<div className="lr-top flex flex-col items-center justify-center bg-white xl:gap-1 xl:py-4 4xl:gap-6 4xl:py-8">
									<Link to={`/`}>
										<img
											className="lr-logo xl:w-12 4xl:w-20"
											src={LOTUS}
											alt="lotus"
										/>
									</Link>
									<h1 className="lr-title tracking-wide text-black 4xl:text-3xl">
										Selamat Datang di Flambo!
									</h1>
								</div>
								<form
									onSubmit={onSubmit}
									className="lr-mid-form flex flex-col justify-between xl:gap-6 xl:py-2 4xl:gap-8 4xl:py-8"
								>
									<div className="form-group">
										<p className=" mx-auto block w-9/12 px-2 pb-1 font-bold text-brown xl:text-xs 4xl:text-lg">
											Email
										</p>
										<input
											type="email"
											className=" mx-auto block w-9/12 rounded-3xl border xl:px-2 xl:py-1 xl:text-xs 4xl:p-3 4xl:py-3 4xl:text-sm"
											id="email"
											name="email"
											value={email}
											placeholder="Masukkan alamat email"
											onChange={onChange}
										/>
									</div>
									<div className="form-group mb-8">
										<p className=" mx-auto block w-9/12 px-2 pb-1 font-bold text-brown xl:text-xs 4xl:text-lg">
											Password
										</p>
										<input
											type="password"
											className=" mx-auto block w-9/12 rounded-3xl border xl:px-2 xl:py-1 xl:text-xs 4xl:p-3 4xl:py-3 4xl:text-sm"
											id="password"
											name="password"
											value={password}
											placeholder="Masukkan password"
											onChange={onChange}
										/>
									</div>

									<div className="lr-bottom flex flex-col justify-center xl:py-2 4xl:py-8">
										<button className="btn-grad mx-auto w-1/2 rounded-3xl px-6 text-center text-white xl:py-1 xl:text-sm 4xl:py-2 4xl:text-xl">
											Masuk
										</button>

										{isLoading && (
											<div className="col-span-4 text-center text-xs font-bold text-brown">
												Welcoming you in...!
											</div>
										)}
										{isError && (
											<div className="col-span-4 text-center text-xs text-danger">
												Something went wrong
											</div>
										)}
										{isSuccess && (
											<div className="col-span-4 text-center text-xs text-success">
												Success! Welcome!
											</div>
										)}

										{!isLoading && !isError && !isSuccess && (
											<div className="text-grey-dark mt-1 text-center text-xs 4xl:mt-6 4xl:text-base">
												Belum memiliki akun?
												<a
													className="border-blue border-b text-brown no-underline"
													href="/register"
												>
													{" "}
													Register
												</a>
											</div>
										)}
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="MOBILE container absolute h-full w-full sm:grid sm:grid-cols-2 xl:hidden">
				<div className="lrbg top-0  sm:col-start-2 sm:row-start-1">
					<img
						src={bgmobile}
						alt="bg-img"
						className="w-full bg-no-repeat object-contain"
					/>
				</div>
				<div className=" flex flex-col sm:col-start-1 sm:row-start-1">
					<div className=" my-10 flex flex-col items-center justify-center gap-2">
						<Link to={`/`}>
							<img className="w-12" src={LOTUS} alt="lotus" />
						</Link>
						<h1 className="lr-title tracking-wide text-black">
							Selamat Datang di Flambo!
						</h1>
						<p className="text-center text-sm">
							Masukkan ke akunmu untuk mulai eksplorasi di Flambo
						</p>
					</div>
					<form className="flex flex-col gap-4 py-2" onSubmit={onSubmit}>
						<div className="form-group">
							<p className=" mx-auto block w-8/12 pb-1 text-sm font-bold text-brown ">
								Email
							</p>
							<input
								type="email"
								className=" mx-auto block w-8/12 rounded-3xl border p-2 text-xs"
								id="email"
								name="email"
								value={email}
								onChange={onChange}
								placeholder="Masukkan alamat email"
							/>
						</div>
						<div className="form-group">
							<p className=" mx-auto block w-8/12 pb-1 text-sm font-bold text-brown ">
								Password
							</p>
							<input
								type="password"
								className=" mx-auto block w-8/12 rounded-3xl border p-2 text-xs"
								id="password"
								name="password"
								value={password}
								onChange={onChange}
								placeholder="Masukkan password"
							/>
						</div>

						<div className="my-10 flex flex-col justify-center ">
							<button className="btn-grad mx-auto w-1/2 rounded-3xl py-2 px-6 text-center text-white ">
								Masuk
							</button>
							{isLoading && (
								<div className="col-span-4 text-center text-xs font-bold text-brown">
									Welcoming you in...!
								</div>
							)}
							{isError && (
								<div className="col-span-4 text-center text-xs text-danger">
									Something went wrong
								</div>
							)}
							{isSuccess && (
								<div className="col-span-4 text-center text-xs text-success">
									Success! Welcome!
								</div>
							)}

							{!isLoading && !isError && !isSuccess && (
								<div className="text-grey-dark mt-1 text-center text-xs">
									Belum memiliki akun?
									<a
										className="border-blue border-b text-brown no-underline"
										href="/register"
									>
										{" "}
										Register
									</a>
								</div>
							)}
						</div>
					</form>
				</div>
			</section>
		</>
	);
}
