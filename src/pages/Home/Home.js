import Navbar from "../../components/sections/_navbar/Navbar";
import Header from "../../components/sections/home-header/Header";
import ProdukTrending from "../../components/sections/home-produktrending/ProdukTrending";

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
			{/* Kenapa Flambo */}
			<section id="kenapaflambo"></section>
			{/* Footer */}
			<footer></footer>
		</>
	);
}
