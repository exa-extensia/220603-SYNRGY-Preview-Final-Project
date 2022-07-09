import Navbar from "../../components/sections/_navbar/Navbar";
import Footer from "../../components/sections/_footer/Footer";

import { Link } from "react-router-dom";

export default function FinishPayment() {
	return (
		<>
			<Navbar />
			<section id="page">Selesaikan Pembayaran</section>
			<Link to={"/orderdetails"}>
				<button className="btn-grad w-full rounded-full py-2 font-bold uppercase text-white">
					Check Order Status
				</button>
			</Link>
			<Footer />
		</>
	);
}
