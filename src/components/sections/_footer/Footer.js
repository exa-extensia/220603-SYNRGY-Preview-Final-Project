import bca from "../../../assets/icons/icon-bank/bca.png";
import bni from "../../../assets/icons/icon-bank/bni.png";
import bri from "../../../assets/icons/icon-bank/bri.png";
import permata from "../../../assets/icons/icon-bank/permata.png";

import jne from "../../../assets/icons/icon-pengiriman/jne.png";
import pos from "../../../assets/icons/icon-pengiriman/pos.png";
import tiki from "../../../assets/icons/icon-pengiriman/tiki.png";

import illst from "../../../assets/images/footer-illst.png";
import google from "../../../assets/images/footer-google.png";

import { TbMail, TbPhone, TbBrandWhatsapp } from "react-icons/tb";

export default function Footer() {
	return (
		<>
			<section className="flex w-full items-center justify-center bg-goldie">
				<div className="container mx-4 flex flex-col sm:max-w-[688px] sm:flex-row sm:gap-8 lg:max-w-[864px] xl:max-w-[1200px]">
					<div className="grid grid-cols-2 gap-10 py-10  sm:w-3/5 sm:grid-cols-3 sm:gap-2 ">
						<div className="flex  flex-col gap-4 sm:row-span-2 lg:mx-auto ">
							<p className="text-right text-base font-bold sm:text-left sm:text-sm lg:text-lg">
								MENU
							</p>
							<div className=" flex  flex-col place-items-end gap-2 sm:place-items-start sm:gap-1">
								<a href="#" className="text-xs lg:text-base">
									Home
								</a>
								<a href="#" className="text-xs lg:text-base">
									Kategori
								</a>
								<a href="#" className="text-xs lg:text-base">
									Produk Trending
								</a>
								<a href="#" className="text-xs lg:text-base">
									Beauty Feed
								</a>
								<a href="#" className="text-xs lg:text-base">
									Produk Organik
								</a>
							</div>
						</div>
						<div className="flex  flex-col gap-4 lg:mx-auto ">
							<p className="text-left text-base font-bold sm:text-left sm:text-sm lg:text-lg">
								PEMBAYARAN
							</p>
							<div className="flex flex-col place-items-start gap-2  sm:flex-row sm:flex-wrap lg:gap-4 ">
								<img
									src={bca}
									className="w-[50%] object-contain sm:w-[60%] lg:w-[40%]"
								/>
								<img
									src={bni}
									className="w-[50%] object-contain sm:w-[60%] lg:w-[40%]"
								/>
								<img
									src={permata}
									className="w-[50%] object-contain sm:w-[60%] lg:w-[40%]"
								/>
								<img
									src={bri}
									className="w-[50%] object-contain sm:w-[60%] lg:w-[40%]"
								/>
							</div>
						</div>
						<div className="flex  flex-col gap-4 sm:col-start-2 lg:mx-auto ">
							<p className=" text-right text-base font-bold sm:text-left sm:text-sm lg:text-lg">
								PENGIRIMAN
							</p>
							<div className="flex flex-col place-items-end gap-2 sm:flex-row  sm:flex-wrap sm:place-items-start lg:gap-4">
								<img
									src={jne}
									className="w-[50%] object-contain sm:w-[50%] lg:w-[30%]"
								></img>
								<img
									src={pos}
									className="w-[50%] object-contain sm:w-[50%] lg:w-[30%]"
								></img>
								<img
									src={tiki}
									className="w-[50%] object-contain sm:w-[50%] lg:w-[30%]"
								></img>
							</div>
						</div>

						<div className="flex  flex-col gap-4 sm:col-start-3 sm:row-span-2 sm:row-start-1 lg:mx-auto">
							<p className=" text-left text-base font-bold sm:text-left sm:text-sm lg:text-lg">
								CUSTOMER CARE
							</p>
							<div className=" flex  flex-col place-items-start justify-between gap-2">
								<div className="flex items-center gap-2">
									<TbMail size={25} />
									<div className="flex flex-col text-xs lg:text-sm">
										<p className="font-semibold text-brown">Email</p>
										<p>cs@flambo.com</p>
									</div>
								</div>
								<div className="flex items-center gap-2">
									<TbPhone size={25} />
									<div className="flex flex-col text-xs lg:text-sm">
										<p className="font-semibold text-brown">Telepon</p>
										<p> (0)35 2568</p>
									</div>
								</div>
								<div className="flex items-center gap-2">
									<TbBrandWhatsapp size={25} />
									<div className="flex flex-col text-xs lg:text-sm">
										<p className="font-semibold text-brown">Whatsapp</p>
										<p>+6282 3355 3778 </p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="h-[330px] sm:h-[400px] sm:w-2/5">
						<div
							className="flex h-full w-full items-center justify-center"
							style={{
								backgroundImage: `url(${illst})`,
								backgroundPosition: "center",
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
							}}
						>
							<img src={google} alt="google" className="w-[50%]" />
						</div>
					</div>
				</div>
			</section>
			<section className="font- bg-black py-4 text-center text-white lg:text-xl">
				<p>© Flambo. All rights reserved.</p>
			</section>
		</>
	);
}
