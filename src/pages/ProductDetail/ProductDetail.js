import Breadcrumb from "../../components/atoms/breadcrumb/BC-ProductDetail";
import Navbar from "../../components/sections/_navbar/Navbar";
import Rating from "@mui/material/Rating";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { Link } from "react-router-dom";
import PDTab from "../../components/blocks/pd-tabs/Tabs";

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
							<h2 className="mb-3 text-xl lg:text-[24px]">
								Brightening Facial Wash – All Skin Type
							</h2>
							<p className="price mb-3 text-xl font-bold text-brown">
								Rp75.000
							</p>
							<div className="pd__rating">
								<Rating
									defaultValue={2.5}
									precision={0.5}
									readOnly
									size="small"
								/>
							</div>
							<div className="pd__brand mb-10 mt-10 flex w-full items-center gap-4 rounded-lg bg-cream py-4 px-4 pt-3 lg:w-3/4 xl:w-2/4">
								<div className="aspect-square h-12 overflow-hidden rounded-md">
									<img
										src="https://source.unsplash.com/random/?brand"
										alt="brand"
									/>
								</div>
								<div>
									<p className="text-lg font-bold uppercase text-black">
										Scarlett
									</p>
									<a href="#" className="text-[12px] text-brown underline">
										Kunjungi Katalog Brand
									</a>
								</div>
							</div>
							<PDTab />
						</div>
						<div className="pd__input col-span-4 flex h-fit w-full flex-col bg-white p-5 sm:col-span-5 sm:col-start-4 lg:col-span-3 lg:col-start-10">
							<div className="mb-7">
								<p className="mb-3 text-lg font-bold">Ringkasan Belanja</p>
								<div className="w-20 border-b-2 border-brown" />
							</div>

							<div className="mb-7">
								<p className="mb-3 text-[16px] font-semibold">Jumlah</p>
								<div className="input__jumlah flex items-center gap-6">
									<div className="flex aspect-square w-7 items-center justify-center rounded-full  bg-cream text-brown">
										<HiMinusSm />
									</div>
									<p className="font-bold text-brown">1</p>
									<div className="flex aspect-square w-7 items-center justify-center rounded-full  bg-cream text-brown">
										<HiPlusSm />
									</div>
								</div>
							</div>
							<div className="mb-7">
								<p className="mb-3 text-[16px] font-semibold">Subtotal</p>
								<p className="text-[20px] font-bold text-brown">Rp 75.000</p>
							</div>
							<div className="flex gap-4 lg:flex-col 2xl:flex-row">
								<button className="btn-grad w-full rounded-full py-2 px-5 text-xs text-white">
									Add to Cart
								</button>

								<button className="btn-sec w-full rounded-full py-2 px-5 text-xs">
									<Link to={`/cart`}>Buy Now</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
