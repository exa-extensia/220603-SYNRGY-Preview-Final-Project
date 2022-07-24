import { Link, useNavigate } from "react-router-dom";

import img1 from "../../../assets/images/kategori/1.jpg";
import img2 from "../../../assets/images/kategori/2.jpg";
import img3 from "../../../assets/images/kategori/3.jpg";
import img4 from "../../../assets/images/kategori/4.jpg";
import img5 from "../../../assets/images/kategori/5.jpg";
import img6 from "../../../assets/images/kategori/6.jpg";
import img7 from "../../../assets/images/kategori/7.jpg";
import img8 from "../../../assets/images/kategori/8.jpg";
import img9 from "../../../assets/images/kategori/9.jpg";

let product = [
	{
		name: "toner",
		img: img1,
	},
	{
		name: "cleanser",
		img: img2,
	},
	{
		name: "moisturizer",
		img: img3,
	},
	{
		name: "bundle set",
		img: img4,
	},
	{
		name: "skincare",
		img: img5,
	},
	{ name: "kosmetik", img: img6 },
	{
		name: "produk organik",
		img: img7,
	},
	{
		name: "produk pria",
		img: img8,
	},
	{
		name: "facial wash",
		img: img9,
	},
];

export default function Kategori() {
	const navigate = useNavigate();
	return (
		<section id="kategoriproduk">
			<div className="pt__wrapper">
				<div className="pt__top pb-6">
					<h3>Kategori Produk</h3>
				</div>
				<Link to={"/productlist"}>
					<div className="columns-3">
						{product.map((item, i) => (
							<div
								key={i}
								className="product__item group relative cursor-pointer"
							>
								<div className="kategoriname absolute bottom-0 z-10 flex h-[10px] w-9/12 translate-x-[20%] -translate-y-[20%] bg-cream transition-all duration-200 ease-in-out group-hover:bg-black sm:h-[60px]">
									<p className="m-auto cursor-pointer text-center text-[8px] font-bold uppercase text-brown group-hover:text-white  sm:text-sm lg:text-base">
										{item.name}
									</p>
								</div>
								<img
									src={item.img}
									alt="pt"
									className="group-hover:scale- -z-10 transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-50"
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
