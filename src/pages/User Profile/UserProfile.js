import Navbar from "../../components/sections/_navbar/Navbar";
import Footer from "../../components/sections/_footer/Footer";

import { useNavigate } from "react-router-dom";

export default function UserProfile() {
	const navigate = useNavigate();

	return (
		<>
			<Navbar />
			<section id="page">Profile</section>

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
