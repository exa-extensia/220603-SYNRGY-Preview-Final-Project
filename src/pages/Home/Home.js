import Navbar from "../../components/sections/_navbar/Navbar";
import Header from "../../components/sections/home-header/Header";
import HomeSection3 from "../../components/sections/home-section3/Home-section3";
import ProdukTrending from "../../components/sections/home-produktrending/ProdukTrending";
import KenapaFlambo from "../../components/sections/home-knapaFlembo/Home-kenapaFlembo";
import Footer from "../../components/sections/_footer/Footer";
import Kategori from "../../components/sections/home-kategori/Kategori";
import { useEffect } from "react";

export default function Homepage() {
	function scrollTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	useEffect(() => {
		scrollTop();
	});

	return (
		<>
			<Navbar />
			<Header />
			<ProdukTrending />
			<Kategori />
			<HomeSection3 />
			<KenapaFlambo />
			<Footer />
		</>
	);
}
