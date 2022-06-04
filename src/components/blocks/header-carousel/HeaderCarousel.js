import { Carousel } from "flowbite-react";
import WARDAH from "../../../assets/images/header-carousel/wardah.png";

export default function HeaderCarousel() {
	return (
		<div className="header__carousel">
			<Carousel>
				<img
					src="https://source.unsplash.com/random/?cosmetic?sig=1"
					alt="header-carousel"
				/>
				<img
					src="https://source.unsplash.com/random/?cosmetic?sig=2"
					alt="header-carousel"
				/>
				<img
					src="https://source.unsplash.com/random/?cosmetic?sig=3"
					alt="header-carousel"
				/>
				<img
					src="https://source.unsplash.com/random/?cosmetic?sig=4"
					alt="header-carousel"
				/>
				<img
					src="https://source.unsplash.com/random/?cosmetic?sig=5"
					alt="header-carousel"
				/>
			</Carousel>
		</div>
	);
}
