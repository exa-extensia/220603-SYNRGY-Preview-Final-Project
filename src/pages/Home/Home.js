import Navbar from "../../components/sections/_navbar/Navbar";
import Header from "../../components/sections/home-header/Header";
import HomeSection3 from "../../components/sections/home-section3/Home-section3";
import ProdukTrending from "../../components/sections/home-produktrending/ProdukTrending";
import KenapaFlambo from "../../components/sections/home-knapaFlembo/Home-kenapaFlembo";

export default function Jumbotron() {
	return (
		<>
			<Navbar />
			<Header />
			<ProdukTrending />
			{/* Kategori Produk */}
			<section id="kategoriproduk">
				<div className="pt__wrapper">
					<div className="pt__top">
						<h3>Kategori Produk</h3>
					</div>
					<div className="pt__bttm">
						{/* {product.map((item) => (
							<div className="product__item">{item.name}</div>
						))} */}
					</div>
					<button>Lihat Semua Kategori</button>
				</div>
			</section>
			{/* Ribuan Brand */}
			<section id="ribuanbrand"></section>
			<HomeSection3 />
			{/* Kenapa Flambo */}
			<section id="kenapaflambo"></section>
			<KenapaFlambo />
			{/* Footer */}
			<footer></footer>
		</>
	);
}
