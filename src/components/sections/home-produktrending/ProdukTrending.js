import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

let product = [
	"https://source.unsplash.com/random/?cosmetic?sig=1",
	"https://source.unsplash.com/random/?cosmetic?sig=2",
	"https://source.unsplash.com/random/?cosmetic?sig=3",
	"https://source.unsplash.com/random/?cosmetic?sig=4",
	"https://source.unsplash.com/random/?cosmetic?sig=5",
	"https://source.unsplash.com/random/?cosmetic?sig=6",
	"https://source.unsplash.com/random/?cosmetic?sig=7",
	"https://source.unsplash.com/random/?cosmetic?sig=8",
	"https://source.unsplash.com/random/?cosmetic?sig=9",
	"https://source.unsplash.com/random/?cosmetic?sig=10",
	"https://source.unsplash.com/random/?cosmetic?sig=11",
];

export default function ProdukTrending() {
	const [width, setWidth] = useState(0);
	const carousel = useRef();

	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);

	return (
		<section id="produktrending">
			<div className="pt__wrapper">
				<div className="pt__top">
					<h3>Produk Trending</h3>
					<button>Lihat Semua</button>
				</div>
				<div className="pt__bttm">
					<motion.div
						ref={carousel}
						className="pt__carousel"
						whileTap={{ cursor: "grabbing" }}
					>
						<motion.div
							drag="x"
							dragConstraints={{ right: 0, left: -width }}
							className="pt__innercarousel"
						>
							{product.map((item) => (
								<Link to={`/productdetail`}>
									<motion.div className="pt__card" key={item}>
										<div className="pt__card__img">
											<img src={item} alt="pt" />
										</div>
										<div className="pt__card__text">
											<p className="brand">Whitelab</p>
											<p className="desc">Brightening Face Serum 20ml</p>
											<p className="price">Rp. 77.000</p>
											<div className="rating">
												<Rating
													defaultValue={2.5}
													precision={0.5}
													readOnly
													size="small"
												/>
											</div>
										</div>
									</motion.div>
								</Link>
							))}
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
