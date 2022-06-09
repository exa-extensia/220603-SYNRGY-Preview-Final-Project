import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";

let product = [
	"https://source.unsplash.com/random/?skincare?sig=1",
	"https://source.unsplash.com/random/?skincare?sig=2",
	"https://source.unsplash.com/random/?skincare?sig=3",
	"https://source.unsplash.com/random/?skincare?sig=4",
	"https://source.unsplash.com/random/?skincare?sig=5",
	"https://source.unsplash.com/random/?skincare?sig=6",
	"https://source.unsplash.com/random/?skincare?sig=7",
	"https://source.unsplash.com/random/?skincare?sig=8",
	"https://source.unsplash.com/random/?skincare?sig=9",
	"https://source.unsplash.com/random/?skincare?sig=10",
	"https://source.unsplash.com/random/?skincare?sig=11",
];

export default function Kategori() {
	return (
		<section id="kategoriproduk">
			<div className="pt__wrapper">
				<div className="pt__top">
					<h3>Kategori Produk</h3>
				</div>
				<div className="pt__bttm">
					<Masonry
						columns={{ xs: 1, sm: 2, md: 3 }}
						spacing={{ xs: 2, sm: 4, md: 4 }}
					>
						{product.map((item) => (
							<div className="product__item">
								<img src={item} alt="pt" />
							</div>
						))}
					</Masonry>
				</div>
				<button className="btn-sec-home">Lihat Semua Kategori</button>
			</div>
		</section>
	);
}
