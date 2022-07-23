import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";

import img1 from "../../../assets/images/header-carousel/1.jpg";
import img2 from "../../../assets/images/header-carousel/2.jpg";
import img3 from "../../../assets/images/header-carousel/3.jpg";
import img4 from "../../../assets/images/header-carousel/4.jpg";
import img5 from "../../../assets/images/header-carousel/5.jpg";
import img6 from "../../../assets/images/header-carousel/6.jpg";
import img7 from "../../../assets/images/header-carousel/7.jpg";
import img8 from "../../../assets/images/header-carousel/8.jpg";

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function imgUrl() {
	const id = rand(1, 10);
	return `https://source.unsplash.com/random/?cosmetic?sig=${id}`;
}

function createSlide() {
	return (
		<SwiperSlide>
			<img src={imgUrl()} alt="img header carousel" />
		</SwiperSlide>
	);
}

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
					delay: 2200,
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
					<img src={img1} alt="img header carousel" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img2} alt="img header carousel" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img3} alt="img header carousel" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img4} alt="img header carousel" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img5} alt="img header carousel" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img6} alt="img header carousel" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img7} alt="img header carousel" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img8} alt="img header carousel" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
