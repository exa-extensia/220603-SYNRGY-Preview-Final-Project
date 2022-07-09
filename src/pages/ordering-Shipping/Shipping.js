import Navbar from "../../components/sections/_navbar/Navbar";
import Footer from "../../components/sections/_footer/Footer";
import Breadcrumb from "../../components/atoms/breadcrumb/BC-Shipping";

import jne from "../../assets/icons/icon-pengiriman/jne.png";
import pos from "../../assets/icons/icon-pengiriman/pos.png";
import tiki from "../../assets/icons/icon-pengiriman/tiki.png";

import { TbMapSearch, TbTruckDelivery } from "react-icons/tb";
import { HiCheck } from "react-icons/hi";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Shipping() {
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
									<TbMapSearch size={30} className="text-brown" />
									<h1 className="text-xl sm:col-span-2">Alamat Pengiriman</h1>
								</div>
								<div className="ORDERING-GENERAL-CARD sm:flex">
									<div className="w-3/4">
										<div className="label-group flex items-center gap-2">
											<p className="LABEL-ALAMAT text-sm font-semibold uppercase text-grey">
												APARTEMEN
											</p>{" "}
											<div
												className={
													"rounded-xl  bg-cream py-1 px-2 text-xs text-brown"
												}
											>
												<p>alamat utama</p>
											</div>
										</div>
										<div className="content-group mt-4 text-sm">
											<p className="mb-2 font-bold">
												Nama Penerima - 08119062237
											</p>
											<p className="">
												Jl. Dipati Ukur No.112-116, Lebakgede, Kecamatan
												Coblong, Kota Bandung, Jawa Barat 40132Jl. Dipati Ukur
												No.112-116, Lebakgede, Kecamatan Coblong, Kota Bandung,
												Jawa Barat 40132Jl. Dipati Ukur No.112-116, Lebakgede,
												Kecamatan Coblong, Kota Bandung, Jawa Barat 40132
											</p>
										</div>
									</div>
									<div className="mt-4 sm:relative sm:mt-0 sm:w-1/4">
										<div className="sm:absolute sm:top-0 sm:right-0">
											<button
												onClick={() => navigate("/address")}
												className="btn-sec rounded-full py-1 px-2 text-xs"
											>
												Ubah Alamat
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="BLOCK-COURIER flex flex-col gap-2">
								<div className=" flex items-center gap-2 ">
									<TbTruckDelivery size={30} className="text-brown" />
									<h1 className="text-xl sm:col-span-2">Metode Pengiriman</h1>
								</div>
								<div className="ORDERING-GENERAL-CARD">
									<p className="mb-2 font-bold">Pilih Kurir</p>
									<form
										id="formKURIR"
										className="PILIH-KURIR flex flex-col gap-2 sm:flex-row"
									>
										<input type="radio" name="selectKurir" id="optKurir1" />
										<input type="radio" name="selectKurir" id="optKurir2" />
										<input type="radio" name="selectKurir" id="optKurir3" />
										<label htmlFor="optKurir1" className="CARD-KURIR optKurir1">
											<img
												src={jne}
												className="m-auto h-[40px] bg-center object-contain sm:w-[50%]"
											></img>
										</label>
										<div className="ORDERING-GENERAL-DIV-V my-auto hidden h-10 sm:block"></div>
										<label htmlFor="optKurir2" className="CARD-KURIR optKurir2">
											<img
												src={pos}
												className="m-auto h-[40px] bg-center object-contain sm:w-[50%]"
											></img>
										</label>
										<div className="ORDERING-GENERAL-DIV-V my-auto hidden h-10 sm:block"></div>
										<label htmlFor="optKurir3" className="CARD-KURIR optKurir3">
											<img
												src={tiki}
												className="m-auto h-[40px] bg-center object-contain sm:w-[50%]"
											></img>
										</label>
									</form>
									<div className="ORDERING-GENERAL-DIV my-6 w-full  sm:my-4 "></div>
									<p className="mb-2 font-bold">Pilih Durasi Pengiriman</p>
									<form
										id="formDURASI"
										className="PILIH-DURASI flex flex-col gap-2 sm:flex-row"
									>
										<input type="radio" name="select" id="opt1" />
										<input type="radio" name="select" id="opt2" />
										<label htmlFor="opt1" className="CARD-DURASI opt1">
											<p className=" text-sm font-bold">Regular Shipping</p>
											<p className="text-xs text-grey">
												Estimasi Pengiriman 3-5 hari kerja
											</p>
										</label>
										<div className="ORDERING-GENERAL-DIV-V my-auto hidden h-10 sm:block"></div>
										<label htmlFor="opt2" className="CARD-DURASI opt2">
											<p className="text-sm font-bold">Same Day Shipping</p>
											<p className="text-xs text-grey">
												Pengiriman diterima pada hari yang sama
											</p>
											<p className="text-xs italic text-grey">
												(Pembayaran yang diterima di atas jam 13:00 akan
												diproses pada hari berikutnya)
											</p>
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
									onClick={() => navigate("/paymentoptions")}
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
