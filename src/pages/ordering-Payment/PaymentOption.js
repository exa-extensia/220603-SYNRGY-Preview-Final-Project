import Navbar from "../../components/sections/_navbar/Navbar";
import Footer from "../../components/sections/_footer/Footer";

import { Link } from "react-router-dom";

export default function PaymentOptions() {
	return (
		<>
			<Navbar />
			<section id="page">Pilih Pembayaran</section>
			<Link to={"/finishpayment"}>
				<button className="btn-grad w-full rounded-full py-2 font-bold uppercase text-white">
					Place Order
				</button>
			</Link>
			<Footer />
		</>
	);
}
