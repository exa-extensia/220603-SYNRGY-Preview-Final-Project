import Breadcrumb from "../../components/atoms/breadcrumb/Breadcrumb";
import Navbar from "../../components/sections/_navbar/Navbar";
import { Rating, Tabs } from "flowbite-react";

export default function ProductDetail() {
	return (
		<>
			<Navbar />
			<section id="productdetail">
				<div className="pd__wrapper">
					<div className="pd__breadcrumbs">
						<Breadcrumb />
					</div>
					<div className="pd__3cols">
						<div className="pd__img">
							<div className="img__main">
								<img
									src="https://source.unsplash.com/random/?cosmetic"
									alt="pd"
								/>
							</div>
							<div className="img__others">
								<div className="img__other">
									<img
										src="https://source.unsplash.com/random/?cosmetic"
										alt="pd"
									/>
								</div>
								<div className="img__other">
									<img
										src="https://source.unsplash.com/random/?cosmetic"
										alt="pd"
									/>
								</div>
								<div className="img__other">
									<img
										src="https://source.unsplash.com/random/?cosmetic"
										alt="pd"
									/>
								</div>
							</div>
						</div>
						<div className="h-3/12 col-span-4 aspect-[4/3]  sm:col-span-5 lg:col-span-6">
							<h2>Brightening Facial Wash – All Skin Type</h2>
							<p className="price">Rp75.000</p>
							<div className="pd__rating">
								<Rating>
									<Rating.Star />
									<Rating.Star />
									<Rating.Star />
									<Rating.Star />
									<Rating.Star filled={false} />
								</Rating>
							</div>
							<div className="pd__brand">
								<p>Scarlett</p>
								<a href="#">Kunjungi Katalog Brand</a>
							</div>
							<div className="pd__tabs"></div>
						</div>
						<div className="h-3/12 col-span-4 aspect-[4/3] bg-cream sm:col-span-5 sm:col-start-4 lg:col-span-3 lg:col-start-10">
							3
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

{
	/* <div className="grid grid-cols-4 gap-5 sm:grid-cols-8 lg:grid-cols-12 lg:gap-6">
						<div className=" col-span-4   sm:col-span-3 lg:col-span-4 ">
							<div className="img__main">
								<img
									src="https://source.unsplash.com/random/?cosmetic"
									alt="pd"
								/>
							</div>
							<div className="img__others">
								<div className="img__other">
									<img
										src="https://source.unsplash.com/random/?cosmetic"
										alt="pd"
									/>
								</div>
								<div className="img__other">
									<img
										src="https://source.unsplash.com/random/?cosmetic"
										alt="pd"
									/>
								</div>
								<div className="img__other">
									<img
										src="https://source.unsplash.com/random/?cosmetic"
										alt="pd"
									/>
								</div>
							</div>
						</div>
						<div className="h-3/12 col-span-4 aspect-[4/3] bg-cream sm:col-span-5 lg:col-span-5">
							2
						</div>
						<div className="h-3/12 col-span-4 aspect-[4/3] bg-cream sm:col-span-5 sm:col-start-4 lg:col-span-3 lg:col-start-10">
							3
						</div>
					</div> */
}
