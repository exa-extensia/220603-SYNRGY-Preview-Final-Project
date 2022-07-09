import Navbar from "../../components/sections/_navbar/Navbar";
import Footer from "../../components/sections/_footer/Footer";
import Breadcrumb from "../../components/atoms/breadcrumb/BC-FinishPayment";

import bca from "../../assets/icons/icon-bank/bca.png";
import bni from "../../assets/icons/icon-bank/bni.png";
import permata from "../../assets/icons/icon-bank/permata.png";
import bri from "../../assets/icons/icon-bank/bri.png";
import illst from "../../assets/images/finish-illst.png";

import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { IoTicketSharp } from "react-icons/io5";

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
								<div className=" mb-7 flex flex-col items-center justify-center gap-3">
									<h1 className="text-2xl sm:col-span-2">
										Selesaikan Pembayaran
									</h1>
									<div className="STYLED-HR">
										<div className="flex items-center">
											<div className="h-2 w-2 rounded-full bg-med-brown"></div>
											<div className="w-40 border-b-2 border-med-brown" />
											<div className="h-2 w-2 rounded-full bg-med-brown"></div>
										</div>
									</div>
								</div>
								<div className="ORDERING-GENERAL-CARD w-full ">
									<div className="flex flex-col items-center justify-center">
										<img src={illst} className="bg-center object-contain"></img>
										<div className="BG-GRADIENT flex w-full items-center justify-center py-10  font-bold text-white sm:w-9/12 xl:px-8">
											<p className=" text-center text-xl">
												Bayar Sebelum 10 JULI 2022, 7:55 WIB
											</p>
										</div>
									</div>
									<div className="TRANSFER-KE flex flex-col items-center justify-center">
										<div className="TRANSFER-BANK flex flex-col items-center justify-center">
											<p className="mt-6 text-lg font-bold uppercase text-grey">
												Transfer Ke
											</p>
											<img
												src={bca}
												className="my-3 w-[150px] bg-center object-contain"
											></img>
											<p className="text-lg font-bold">Virtual Account</p>
											<p className="text-2xl font-bold">36894994820</p>
										</div>
										<div className="my-6 w-6/12 border-b-2 border-[#d2a866]  sm:my-4 "></div>
										<div className="TRANSFER-JUMLAH flex flex-col items-center justify-center">
											<p className="text-center text-lg font-bold uppercase text-grey">
												Jumlah yang Harus Dibayar
											</p>
											<p className="mt-3 text-2xl font-bold">Rp2.989.000</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="DIV-COL2 col-span-4  flex w-full flex-col gap-6  sm:col-span-3 lg:col-span-4 ">
							<div className=" flex w-full flex-col items-center justify-center  bg-cream p-4 text-brown xl:p-8">
								<div className="text-brown">
									<IoTicketSharp size={40} className="mb-3" />
								</div>
								<p>Nomor Pesanan</p>
								<p className="font-bold">PSDF293832KSN</p>
							</div>
							<div className="flex gap-4">
								<HiOutlineQuestionMarkCircle size={28} className="text-brown" />
								<div className="flex flex-col gap-4">
									<p className="font-bold">Punya pertanyaan seputar pesanan?</p>
									<div>
										<p className="font-bold text-brown">Email</p>
										<p>cs@flambo.com</p>
									</div>
									<div>
										<p className="font-bold text-brown">Whatsapp</p>
										<p>+6282 3355 3778</p>
									</div>
								</div>
							</div>
							<div className=" w-full border-b-2 border-[#d2a866]"></div>
							<div className="flex h-10 w-full items-center justify-center gap-2 xl:float-right xl:block xl:text-right  ">
								<button
									onClick={() => navigate("/orderdetails")}
									className="btn-sec right-0 bottom-0 ml-0 rounded-full py-2 px-5  text-xs xl:ml-auto xl:mr-4 xl:text-base"
								>
									Cek Status Order
								</button>
								<button
									onClick={() => navigate("/")}
									className="btn-grad right-0 bottom-0 ml-0 rounded-full py-2 px-5 text-xs text-white xl:ml-auto xl:text-base"
								>
									Belanja Lagi :)
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
