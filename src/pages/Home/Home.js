import Navbar from "../../components/sections/_navbar/Navbar";
import Header from "../../components/sections/home-header/Header";

export default function Jumbotron() {
	let product = [
		{ name: "1" },
		{ name: "2" },
		{ name: "3" },
		{ name: "4" },
		{ name: "5" },
		{ name: "6" },
		{ name: "7" },
		{ name: "8" },
		{ name: "9" },
		{ name: "10" },
	];

	return (
		<>
			<Navbar />
			<Header />
			{/* Produk Trending */}
			<section id="produktrending">
				<div className="pt__wrapper">
					<div className="pt__top">
						<h3>Produk Trending</h3>
						<button>Lihat Semua</button>
					</div>
					<div className="pt__bttm">
						{product.map((item) => (
							<div className="product__item">{item.name}</div>
						))}
					</div>
				</div>
			</section>
			{/* Kategori Produk */}
			<section id="kategoriproduk">
				<div className="pt__wrapper">
					<div className="pt__top">
						<h3>Kategori Produk</h3>
					</div>
					<div className="pt__bttm">
						{product.map((item) => (
							<div className="product__item">{item.name}</div>
						))}
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
