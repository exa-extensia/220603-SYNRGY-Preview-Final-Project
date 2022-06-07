import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";

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
				{createSlide()}
				{createSlide()}
				{createSlide()}
				{createSlide()}
				{createSlide()}
			</Swiper>
		</div>
	);
}
