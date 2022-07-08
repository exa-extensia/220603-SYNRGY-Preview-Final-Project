import LOTUS from "../../assets/images/logos/mainlogo-lotus.png";
import { useNavigate, Link } from "react-router-dom";
import "./lrbg.css";
import bgmobile from "../../assets/images/lr-mobile.png";

export default function LRmobile() {
	return (
		<section className=" container absolute h-full w-full sm:grid sm:grid-cols-2 xl:hidden">
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
					<h1 className="lr-title tracking-wide text-black 4xl:text-3xl">
						Yuk, Gabung di Flambo!
					</h1>
				</div>
				<form className="flex flex-col gap-4 py-2">
					<div className="form-group">
						<p className=" mx-auto block w-8/12 pb-1 text-sm font-bold text-brown ">
							Nama
						</p>
						<input
							type="text"
							className=" mx-auto block w-8/12 rounded-3xl border p-2 text-xs"
							id="name"
							name="name"
							placeholder="Masukkan nama"
						/>
					</div>
					<div className="form-group">
						<p className=" mx-auto block w-8/12 pb-1 text-sm font-bold text-brown ">
							Email
						</p>
						<input
							type="email"
							className=" mx-auto block w-8/12 rounded-3xl border p-2 text-xs"
							id="email"
							name="email"
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
							placeholder="Masukkan password"
						/>
					</div>
					<div className="form-group">
						<p className=" mx-auto block w-8/12 pb-1 text-sm font-bold text-brown ">
							Konfirmasi Password
						</p>
						<input
							type="password"
							className=" mx-auto block w-8/12 rounded-3xl border p-2 text-xs"
							id="password2"
							name="password2"
							placeholder="Ulangi password"
						/>
					</div>
					<div className="my-10 flex flex-col justify-center ">
						<button className="btn-grad mx-auto w-1/2 rounded-3xl py-2 px-6 text-center text-white ">
							Daftar
						</button>
						<div className="text-grey-dark mt-1 text-center text-xs">
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
				</form>
			</div>
		</section>
	);
}
