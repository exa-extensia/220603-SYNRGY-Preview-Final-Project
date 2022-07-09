import Navbar from "../../components/sections/_navbar/Navbar";
import Footer from "../../components/sections/_footer/Footer";

import { Link, useNavigate } from "react-router-dom";

export default function Shipping() {
	const navigate = useNavigate();

	return (
		<>
			<Navbar />
			<section id="page">Shipping</section>

			<Link to={"/paymentoptions"}>
				<button className="btn-grad w-full rounded-full py-2 font-bold uppercase text-white">
					Go to Payment
				</button>
			</Link>

			<button
				onClick={() => navigate("/address")}
				className="btn-sec w-full rounded-full py-2 px-5 text-xs"
			>
				Tambah Alamat
			</button>
			<Footer />
		</>
	);
}
