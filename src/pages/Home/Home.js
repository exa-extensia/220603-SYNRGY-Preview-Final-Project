import Navbar from "../../components/sections/_navbar/Navbar";
import Header from "../../components/sections/home-header/Header";
import HomeSection3 from "../../components/sections/home-section3/Home-section3";
import ProdukTrending from "../../components/sections/home-produktrending/ProdukTrending";
import KenapaFlambo from "../../components/sections/home-knapaFlembo/Home-kenapaFlembo";
import Kategori from "../../components/sections/home-kategori/Kategori";

export default function Homepage() {
	return (
		<>
			<Navbar />
			<Header />
			<ProdukTrending />
			<Kategori />
			<HomeSection3 />
			<KenapaFlambo />
		</>
	);
}
