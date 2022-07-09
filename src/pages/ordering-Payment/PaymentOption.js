import Navbar from "../../components/sections/_navbar/Navbar";
import Footer from "../../components/sections/_footer/Footer";
import Breadcrumb from "../../components/atoms/breadcrumb/BC-PaymentOpt";

import bca from "../../assets/icons/icon-bank/bca.png";
import bni from "../../assets/icons/icon-bank/bni.png";
import permata from "../../assets/icons/icon-bank/permata.png";
import bri from "../../assets/icons/icon-bank/bri.png";

import { HiCheck, HiOutlineCreditCard } from "react-icons/hi";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PaymentOptions() {
	function scrollTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	useEffect(() => {
		scrollTop();
	}, []);

	const navigate = useNavigate();

	return (
		<>
			<Navbar />
			<section
				id="shipping-page"
				className="flex w-full items-center justify-center"
			>
				<div className="ALAMAT-WRAPPER container mx-4 mb-10 sm:max-w-[688px] lg:max-w-[864px] xl:max-w-[1200px]">
					<div className="cp__breadcrumbs mb-10">
						<Breadcrumb />
					</div>

					<div className="DIV-2COLS grid grid-cols-4 gap-5 sm:grid-cols-8 lg:grid-cols-12 lg:gap-6">
						<div className="DIV-COL1 col-span-4 flex w-full flex-col gap-6    sm:col-span-5 lg:col-span-8">
							<div className="BLOCK-ALAMAT flex flex-col gap-2">
								<div className=" flex items-center gap-2 ">
									<HiOutlineCreditCard size={30} className="text-brown" />
									<h1 className="text-xl sm:col-span-2">Pilih Pembayaran</h1>
								</div>
								<div className="ORDERING-GENERAL-CARD w-full ">
									<p className="mb-2 font-bold">
										Rekomendasi Metode Pembayaran
									</p>
									<form className="BANK-WRAPPER flex w-full flex-col">
										<input type="radio" name="select" id="optBank1" />
										<input type="radio" name="select" id="optBank2" />
										<input type="radio" name="select" id="optBank3" />
										<input type="radio" name="select" id="optBank4" />
										<label
											htmlFor="optBank1"
											className="CARD-BANK optBank1 w-full"
										>
											<div className="CARD-BANK-WRAPPER flex w-full items-center justify-between ">
												<div className="flex w-3/4 items-center gap-4 sm:gap-6">
													<img
														src={bca}
														className="w-[50px] bg-center object-contain"
													></img>
													<p className="font-medium">BCA Virtual Account</p>
												</div>
												<div className="ml-auto flex items-center justify-between gap-2 text-brown">
													<HiCheck size={15} />
													<p className="max-w-[60px] text-xs">
														Konfirmasi Otomatis
													</p>
												</div>
											</div>
										</label>
										<div className="ORDERING-GENERAL-DIV my-6 w-full  sm:my-4 "></div>
										<label
											htmlFor="optBank2"
											className="CARD-BANK optBank2 w-full"
										>
											<div className="CARD-BANK-WRAPPER flex w-full items-center justify-between ">
												<div className="flex w-3/4 items-center gap-4 sm:gap-6">
													<img
														src={bni}
														className="w-[50px] bg-center object-contain"
													></img>
													<p className="font-medium">BNI Virtual Account</p>
												</div>
												<div className="ml-auto flex items-center justify-between gap-2 text-brown">
													<HiCheck size={15} />
													<p className="max-w-[60px] text-xs">
														Konfirmasi Otomatis
													</p>
												</div>
											</div>
										</label>
										<div className="ORDERING-GENERAL-DIV my-6 w-full  sm:my-4 "></div>
										<label
											htmlFor="optBank3"
											className="CARD-BANK optBank3 w-full"
										>
											<div className="CARD-BANK-WRAPPER flex w-full items-center justify-between ">
												<div className="flex w-3/4 items-center gap-4 sm:gap-6">
													<img
														src={permata}
														className="w-[50px] bg-center object-contain"
													></img>
													<p className="font-medium">Permata Virtual Account</p>
												</div>
												<div className="ml-auto flex items-center justify-between gap-2 text-brown">
													<HiCheck size={15} />
													<p className="max-w-[60px] text-xs">
														Konfirmasi Otomatis
													</p>
												</div>
											</div>
										</label>
										<div className="ORDERING-GENERAL-DIV my-6 w-full  sm:my-4 "></div>
										<label
											htmlFor="optBank4"
											className="CARD-BANK optBank4 w-full"
										>
											<div className="CARD-BANK-WRAPPER flex w-full items-center justify-between ">
												<div className="flex w-3/4 items-center gap-4 sm:gap-6">
													<img
														src={bri}
														className="w-[50px] bg-center object-contain"
													></img>
													<p className="font-medium">BRI Virtual Account</p>
												</div>
												<div className="ml-auto flex items-center justify-between gap-2 text-brown">
													<HiCheck size={15} />
													<p className="max-w-[60px] text-xs">
														Konfirmasi Otomatis
													</p>
												</div>
											</div>
										</label>
									</form>
								</div>
							</div>
						</div>

						<div className="DIV-COL2 col-span-4  flex w-full flex-col gap-6  sm:col-span-3 lg:col-span-4 ">
							<div className=" flex w-full items-center gap-2 bg-cream p-4 font-bold text-brown xl:px-8">
								<div className="text-brown">
									<HiCheck />
								</div>
								<p>3 Produk Terpilih</p>
							</div>
							<div className="cp__card__ringkasan">
								<div className="mb-7">
									<p className="mb-3 text-lg font-bold">Ringkasan Belanja</p>
									<div className="flex items-center">
										<div className="w-20 border-b-2 border-med-brown" />
										<div className="h-2 w-2 rounded-full bg-med-brown"></div>
									</div>
								</div>
								<div className="ringkasan__text mb-7 flex flex-col gap-2 text-xs lg:text-base">
									<div className="flex justify-between ">
										<p>Total Belanja</p>
										<p className="font-bold">Rp 445.000</p>
									</div>
									<div className="flex justify-between">
										<p>Diskon</p>
										<p className="font-bold">-</p>
									</div>
									<div className="flex justify-between">
										<p>Jumlah Pembayaran</p>
										<p className="font-bold">Rp 445.000</p>
									</div>
								</div>
							</div>
							<div className="relative h-10 w-full">
								<button
									onClick={() => navigate("/finishpayment")}
									className="btn-grad absolute right-0 bottom-0 rounded-full py-2 px-5 text-xs text-white sm:text-base"
								>
									Pilih Pembayaran
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
