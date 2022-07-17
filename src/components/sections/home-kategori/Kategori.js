import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { Link, useNavigate } from "react-router-dom";

let product = [
	{
		name: "skincare",
		img: "https://source.unsplash.com/random/?skincare?sig=1",
	},
	{
		name: "cleanser",
		img: "https://source.unsplash.com/random/?skincare?sig=2",
	},
	{
		name: "produk pria",
		img: "https://source.unsplash.com/random/?skincare?sig=3",
	},
	{
		name: "make up",
		img: "https://source.unsplash.com/random/?skincare?sig=4",
	},
	{
		name: "produk organik",
		img: "https://source.unsplash.com/random/?skincare?sig=5",
	},
	{ name: "Toner", img: "https://source.unsplash.com/random/?skincare?sig=6" },
	{
		name: "Bundle Set",
		img: "https://source.unsplash.com/random/?skincare?sig=7",
	},
	{
		name: "Moisturizer",
		img: "https://source.unsplash.com/random/?skincare?sig=8",
	},
	{
		name: "Foundation",
		img: "https://source.unsplash.com/random/?skincare?sig=9",
	},
];

export default function Kategori() {
	const navigate = useNavigate();
	return (
		<section id="kategoriproduk">
			<div className="pt__wrapper">
				<div className="pt__top">
					<h3>Kategori Produk</h3>
				</div>
				<Link to={"/productlist"}>
					<div className="columns-3">
						{product.map((item) => (
							<div className="product__item group relative cursor-pointer">
								<div className="kategoriname absolute bottom-0 z-10 flex h-[10px] w-9/12 translate-x-[20%] -translate-y-[20%] bg-cream transition-all duration-200 ease-in-out group-hover:bg-black sm:h-[60px]">
									<p className="m-auto cursor-pointer text-center text-[8px] font-bold uppercase text-brown group-hover:text-white  sm:text-sm lg:text-base">
										{item.name}
									</p>
								</div>
								<img
									src={item.img}
									alt="pt"
									className="group-hover:scale- -z-10 transition-all duration-500 ease-in-out group-hover:brightness-50"
								/>
							</div>
						))}
					</div>
				</Link>
				<Link to={"/productlist"}>
					<button className="btn-sec-home">Lihat Semua Kategori</button>
				</Link>
			</div>
		</section>
	);
}
