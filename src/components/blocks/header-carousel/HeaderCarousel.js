import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";

export default function HeaderCarousel() {
	return (
		<div className="header__carousel">
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={{
					clickable: true,
					prevEl: ".prev",
					nextEl: ".next",
				}}
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
				<div className="swiper-button-prev prev">
					<svg
						width="8"
						height="12"
						viewBox="0 0 8 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M7.24839 0.351576C7.47335 0.57661 7.59973 0.881779 7.59973 1.19998C7.59973 1.51817 7.47335 1.82334 7.24839 2.04838L3.29679 5.99998L7.24839 9.95158C7.46698 10.1779 7.58793 10.481 7.5852 10.7957C7.58246 11.1103 7.45626 11.4113 7.23377 11.6338C7.01128 11.8562 6.7103 11.9825 6.39567 11.9852C6.08103 11.9879 5.77791 11.867 5.55159 11.6484L0.751588 6.84838C0.526623 6.62334 0.400245 6.31817 0.400245 5.99998C0.400245 5.68178 0.526623 5.37661 0.751588 5.15158L5.55159 0.351576C5.77662 0.126611 6.08179 0.000232697 6.39999 0.000232697C6.71818 0.000232697 7.02335 0.126611 7.24839 0.351576Z"
							fill="white"
						/>
					</svg>
				</div>
				<div className="swiper-button-next next">
					<svg
						width="8"
						height="12"
						viewBox="0 0 8 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M0.751612 11.6484C0.526647 11.4234 0.400269 11.1182 0.400269 10.8C0.400269 10.4818 0.526647 10.1767 0.751612 9.95162L4.70321 6.00002L0.751612 2.04842C0.533023 1.8221 0.412069 1.51898 0.414803 1.20434C0.417537 0.889707 0.54374 0.588732 0.76623 0.366243C0.98872 0.143753 1.2897 0.01755 1.60433 0.0148159C1.91897 0.0120818 2.22209 0.133036 2.44841 0.351625L7.24841 5.15162C7.47338 5.37666 7.59976 5.68183 7.59976 6.00002C7.59976 6.31822 7.47338 6.62339 7.24841 6.84842L2.44841 11.6484C2.22338 11.8734 1.91821 11.9998 1.60001 11.9998C1.28182 11.9998 0.976646 11.8734 0.751612 11.6484Z"
							fill="white"
						/>
					</svg>
				</div>
			</Swiper>
		</div>
	);
}
