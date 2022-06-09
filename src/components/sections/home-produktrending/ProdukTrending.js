import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";

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
	return (
		<section id="produktrending">
			<div className="pt__wrapper">
				<div className="pt__top">
					<h3>Produk Trending</h3>
					<button className="btn-sec-home">Lihat Semua</button>
				</div>
				<div className="pt__bttm">
					<Swiper
						slidesPerView={2}
						spaceBetween={10}
						mousewheel={true}
						autoplay={{
							delay: 1500,
							disableOnInteraction: false,
						}}
						breakpoints={{
							640: {
								slidesPerView: 3,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 4,
								spaceBetween: 10,
							},
							1024: {
								slidesPerView: 5,
								spaceBetween: 10,
							},
							1440: {
								slidesPerView: 6,
								spaceBetween: 10,
							},
						}}
						modules={[Scrollbar, Mousewheel, Autoplay]}
						scrollbar={{
							hide: true,
						}}
						className=" h-[340px]"
					>
						{product.map((item) => (
							<SwiperSlide>
								<Link to={`/productdetail`}>
									<div className="pt__card" key={item}>
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
									</div>
								</Link>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
}
