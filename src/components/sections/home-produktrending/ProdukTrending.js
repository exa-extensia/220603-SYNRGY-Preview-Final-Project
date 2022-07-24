import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
	getAllProducts,
	getTrendingProducts,
} from "../../../redux/product/productSlice";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import { FaLeaf } from "react-icons/fa";
import Skeleton from "@mui/material/Skeleton";

export default function ProdukTrending() {
	const {
		trendingproducts,
		isTrendingLoading,
		isTrendingError,
		isTrendingSuccess,
		trendingmessage,
	} = useSelector((state) => state.products);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTrendingProducts());
	}, [dispatch]);

	return (
		<section id="produktrending">
			<div className="pt__wrapper">
				<div className="pt__top">
					<h3>Produk Trending</h3>
					<Link to={`/producttrending`}>
						<button className="btn-sec-home">Lihat Semua</button>
					</Link>
				</div>
				<div className="pt__bttm">
					{isTrendingLoading &&
						trendingproducts.map(() => (
							<>
								<Skeleton variant="rectangular" height={100} animation="wave" />
							</>
						))}
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
						className=" h-[380px]"
					>
						{!isTrendingLoading &&
							!isTrendingError &&
							trendingproducts.map((item) => (
								<SwiperSlide>
									<Link to={`/productdetail/${item.id}`}>
										<div
											className="pt__card relative flex flex-col items-center"
											key={item.id}
										>
											<div className="pt__card__img">
												<img src={item.images} alt="pt" />
											</div>
											<div className="pt__card__text">
												<p className="brand">{item.brand.name}</p>
												<p className="desc">{item.name}</p>
												<p className="price">
													Rp
													{item.variant[0].price.toLocaleString("id-ID")}
												</p>
												<div className="rating">
													<Rating
														defaultValue={item.average}
														precision={0.5}
														readOnly
														size="small"
													/>
												</div>
											</div>
											<div className="pt__organik absolute bottom-[3%]">
												<div
													className={
														item.isOrganic === true
															? "flex items-center gap-2 rounded-lg  bg-success py-1 px-2 text-xs text-white"
															: "flex items-center gap-2 rounded-lg  bg-transparent py-1 px-2 text-xs text-transparent"
													}
												>
													<p>Organic Product</p>
													<span>
														<FaLeaf />
													</span>
												</div>
											</div>
										</div>
									</Link>
								</SwiperSlide>
							))}
					</Swiper>
					{!isTrendingLoading && isTrendingError && (
						<div>unexpected isError</div>
					)}
				</div>
			</div>
		</section>
	);
}
