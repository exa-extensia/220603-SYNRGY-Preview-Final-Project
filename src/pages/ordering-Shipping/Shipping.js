import Navbar from "../../components/sections/_navbar/Navbar";
import Footer from "../../components/sections/_footer/Footer";
import Breadcrumb from "../../components/atoms/breadcrumb/BC-Shipping";
import Skeleton from "@mui/material/Skeleton";

import bca from "../../assets/icons/icon-bank/bca.png";
import bni from "../../assets/icons/icon-bank/bni.png";
import permata from "../../assets/icons/icon-bank/permata.png";
import bri from "../../assets/icons/icon-bank/bri.png";
import jne from "../../assets/icons/icon-pengiriman/jne.png";
import pos from "../../assets/icons/icon-pengiriman/pos.png";
import tiki from "../../assets/icons/icon-pengiriman/tiki.png";
import illst from "../../assets/images/delivery-illst.png";

import { TbMapSearch, TbTruckDelivery, TbUser, TbPhone } from "react-icons/tb";
import {
	HiCheck,
	HiLightningBolt,
	HiClock,
	HiArrowNarrowRight,
	HiOutlineCreditCard,
} from "react-icons/hi";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAddress } from "../../redux/address/addressSlice";

export default function Shipping() {
	function scrollTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	const dispatch = useDispatch();

	useEffect(() => {
		scrollTop();
		dispatch(getAddress());
	}, [dispatch]);

	const navigate = useNavigate();

	const { address, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.address
	);
	const addressDefault = address.find((e) => e.isDefault);
	console.log(addressDefault);

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
								<div className="ORDERING-GENERAL-CARD lg:flex">
									<div className="w-full lg:w-3/4 ">
										{/* <div className="label-group flex items-center gap-2">
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
										</div> */}
										{addressDefault ? (
											<>
												<div className="label-group flex flex-row items-center gap-2">
													<p className="LABEL-ALAMAT text-sm font-bold uppercase text-brown">
														{addressDefault.label}
													</p>{" "}
													<div
														className={`${
															addressDefault
																? "rounded-xl  bg-cream py-1 px-2 text-xs text-brown"
																: "hidden"
														} `}
													>
														<p>alamat utama</p>
													</div>
												</div>
												<div className="content-group mt-1 ">
													<p className="break-words text-sm font-extralight">
														{addressDefault.addressDefaultDetail} -{" "}
														{addressDefault.cityId} {addressDefault.postalCode}
													</p>
													<div className="mt-2 flex flex-row items-center gap-4">
														<div className="flex flex-row items-center gap-1">
															<TbUser size={20} />
															<p className="  font-bold">
																{addressDefault.receiver}
															</p>
														</div>
														<div className="flex flex-row items-center gap-1">
															<TbPhone size={20} />
															<p className="  font-bold">
																{addressDefault.phone}
															</p>
														</div>
													</div>
												</div>
											</>
										) : (
											<>
												<HiArrowNarrowRight
													size={30}
													className="hidden sm:block"
												/>
												<p className="text-xl">Hayuk daftarkan alamatmu! :)</p>
											</>
										)}
										{!isLoading && isError && <div>unexpected isError</div>}
									</div>
									<div className="mt-4 lg:relative lg:mt-0 lg:w-1/4">
										<div className="lg:absolute lg:top-0 lg:right-0">
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
												className="h-[40px] object-contain sm:m-auto sm:w-[50%] sm:bg-center"
											></img>
										</label>
										<div className="ORDERING-GENERAL-DIV-V my-auto hidden h-10 sm:block"></div>
										<label htmlFor="optKurir2" className="CARD-KURIR optKurir2">
											<img
												src={pos}
												className="h-[40px] object-contain sm:m-auto sm:w-[50%] sm:bg-center"
											></img>
										</label>
										<div className="ORDERING-GENERAL-DIV-V my-auto hidden h-10 sm:block"></div>
										<label htmlFor="optKurir3" className="CARD-KURIR optKurir3">
											<img
												src={tiki}
												className="h-[40px] object-contain sm:m-auto sm:w-[50%] sm:bg-center"
											></img>
										</label>
									</form>
									{/* <div className="ORDERING-GENERAL-DIV my-6 w-full  sm:my-4 "></div> */}
									<p className="mb-2 font-bold">Pilih Durasi Pengiriman</p>
									<form
										id="formDURASI"
										className="PILIH-DURASI flex flex-col gap-2 sm:flex-row"
									>
										<input type="radio" name="select" id="opt1" />
										<input type="radio" name="select" id="opt2" />
										<label htmlFor="opt1" className="CARD-DURASI opt1">
											<HiClock />
											<div className="mt-2">
												<p className=" text-sm font-bold">Regular Shipping</p>
												<p className="text-xs text-grey">
													Estimasi Pengiriman 3-5 hari kerja
												</p>
											</div>
										</label>
										<div className="ORDERING-GENERAL-DIV-V my-auto hidden h-10 sm:block"></div>
										<label htmlFor="opt2" className="CARD-DURASI opt2">
											<HiLightningBolt />
											<div className="mt-2">
												<p className="text-sm font-bold">Same Day Shipping</p>
												<p className="text-xs text-grey">
													Pengiriman diterima pada hari yang sama
												</p>
												<p className="text-xs italic text-grey">
													(Pembayaran yang diterima di atas jam 13:00 akan
													diproses pada hari berikutnya)
												</p>
											</div>
										</label>
									</form>
								</div>
							</div>
							<div className="BLOCK-BANK flex flex-col gap-2">
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
									Buat Pesanan
								</button>
							</div>
							{/* <img src={illst} alt="" /> */}
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
