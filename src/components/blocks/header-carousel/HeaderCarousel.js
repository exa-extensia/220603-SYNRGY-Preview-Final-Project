// export default function HeaderCarousel() {
// 	return (
// 		<div className="header__carousel">
// 			<Carousel>
// 				<img
// 					src="https://source.unsplash.com/random/?cosmetic?sig=1"
// 					alt="header-carousel"
// 				/>
// 				<img
// 					src="https://source.unsplash.com/random/?cosmetic?sig=2"
// 					alt="header-carousel"
// 				/>
// 				<img
// 					src="https://source.unsplash.com/random/?cosmetic?sig=3"
// 					alt="header-carousel"
// 				/>
// 				<img
// 					src="https://source.unsplash.com/random/?cosmetic?sig=4"
// 					alt="header-carousel"
// 				/>
// 				<img
// 					src="https://source.unsplash.com/random/?cosmetic?sig=5"
// 					alt="header-carousel"
// 				/>
// 			</Carousel>
// 		</div>
// 	);
// }

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";

export default function HeaderCarousel() {
	return (
		<div className="header__carousel">
			<Swiper
				style={{
					"--swiper-navigation-color": "#fff",
					"--swiper-pagination-color": "#fff",
				}}
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 1800,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={false}
				modules={[Autoplay, Pagination, Navigation]}
				className="h-full w-full"
			>
				<SwiperSlide>
					<img
						src="https://source.unsplash.com/random/?cosmetic?sig=1"
						alt="header-carousel"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://source.unsplash.com/random/?cosmetic?sig=2"
						alt="header-carousel"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://source.unsplash.com/random/?cosmetic?sig=3"
						alt="header-carousel"
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
