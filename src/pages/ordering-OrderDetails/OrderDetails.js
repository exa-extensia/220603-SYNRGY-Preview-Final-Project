import Navbar from "../../components/sections/_navbar/Navbar";
import Footer from "../../components/sections/_footer/Footer";
import Breadcrumb from "../../components/atoms/breadcrumb/BC-OrderDetails";
import Skeleton from "@mui/material/Skeleton";

import bca from "../../assets/icons/icon-bank/bca.png";
import bni from "../../assets/icons/icon-bank/bni.png";
import permata from "../../assets/icons/icon-bank/permata.png";
import bri from "../../assets/icons/icon-bank/bri.png";

import { GiCardboardBoxClosed } from "react-icons/gi";
import { TbUser, TbPhone } from "react-icons/tb";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAddress } from "../../redux/address/addressSlice";

export default function PaymentOptions() {
	const dispatch = useDispatch();

	function scrollTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	useEffect(() => {
		scrollTop();
		dispatch(getAddress());
	}, [dispatch]);

	const { address, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.address
	);

	const addressDefault = address.find((e) => e.isDefault);

	return (
		<>
			<Navbar />
			<section
				id="orderdetails"
				className="flex w-full items-center justify-center"
			>
				<div className="ALAMAT-WRAPPER container mx-4 mb-10 sm:max-w-[688px] lg:max-w-[864px] xl:max-w-[1200px]">
					<div className="cp__breadcrumbs mb-10">
						<Breadcrumb />
					</div>
					<div className="cp__totalqty ORDERDETAIL-GRADIENT mb-6 flex w-full items-center gap-2 p-4 font-bold text-white  xl:px-8">
						<div className="text-white">
							<GiCardboardBoxClosed size={40} />
						</div>
						<h1 className="text-3xl">Order Details #88832976200383</h1>
					</div>
					<div className="DIV-2COLS grid grid-cols-4 gap-5 sm:grid-cols-8 lg:grid-cols-12 lg:gap-6">
						<div className="DIV-COL1 col-span-4 flex w-full flex-col gap-6    sm:col-span-5 lg:col-span-8">
							<div className="BLOCK-ALAMAT flex flex-col gap-2">
								<div className="">
									<h1 className="text-xl">Pengiriman</h1>
									<div className="my-2 flex items-center">
										<div className="w-20 border-b-2 border-med-brown" />
										<div className="h-2 w-2 rounded-full bg-med-brown"></div>
									</div>
								</div>
								{isLoading && (
									<div className="ORDERING-GENERAL-CARD w-full ">
										<Skeleton
											variant="rectangular"
											height={100}
											animation="wave"
											className="w-full"
										/>
									</div>
								)}
								{!isLoading && !isError && addressDefault && (
									<div className="ORDERING-GENERAL-CARD sm:flex ">
										<div className="w-3/4">
											<div className="label-group flex flex-row items-center gap-2">
												<p className="LABEL-ALAMAT text-sm font-bold uppercase text-brown">
													{addressDefault.label}
												</p>{" "}
												<div
													className={`${
														addressDefault.isDefault === true
															? "rounded-xl  bg-cream py-1 px-2 text-xs text-brown"
															: "hidden"
													} `}
												>
													<p>alamat utama</p>
												</div>
											</div>
											<div className="content-group mt-1 ">
												<p className="break-words text-sm font-extralight">
													{addressDefault.addressDetail} -{" "}
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
										</div>
										<div className="mt-4 sm:relative sm:mt-0 sm:w-1/4">
											<div className="sm:absolute sm:top-0 sm:right-0">
												<div className="rounded-full bg-danger py-1 px-2 text-xs text-white">
													pending
												</div>
											</div>
										</div>
									</div>
								)}
								{!isLoading && !isError && !addressDefault && (
									<div className="ORDERING-GENERAL-CARD flex flex-col items-center justify-center">
										<p className="mb-6 text-xl">
											HAYO BLM MASUKIN ALAMAT YA!!!!!!! ga dikirim nih :(
										</p>
									</div>
								)}
								{!isLoading && isError && (
									<div className="ORDERING-GENERAL-CARD">
										unexpected isError: {message}
									</div>
								)}
							</div>
							<div className="BLOCK-ALAMAT flex flex-col gap-2">
								<div className="">
									<h1 className="text-xl">Pembayaran</h1>
									<div className="my-2 flex items-center">
										<div className="w-20 border-b-2 border-med-brown" />
										<div className="h-2 w-2 rounded-full bg-med-brown"></div>
									</div>
								</div>
								<div className="ORDERING-GENERAL-CARD sm:flex ">
									<div className="w-3/4">
										<img
											src={bca}
											className="my-3 w-[150px] bg-center object-contain"
										></img>
										<p className="text-lg font-bold">Virtual Account</p>
										<p className="text-2xl font-bold">36894994820</p>
									</div>
									<div className="mt-4 sm:relative sm:mt-0 sm:w-1/4">
										<div className="sm:absolute sm:top-0 sm:right-0">
											<div className="rounded-full bg-success py-1 px-2 text-xs text-white">
												selesai
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="BLOCK-ALAMAT flex flex-col gap-2">
								<div className="">
									<h1 className="text-xl">Pesanan</h1>
									<div className="my-2 flex items-center">
										<div className="w-20 border-b-2 border-med-brown" />
										<div className="h-2 w-2 rounded-full bg-med-brown"></div>
									</div>
								</div>
								<div className="ORDERING-GENERAL-CARD ORDER-ITEM-LIST flex w-full flex-col gap-12 ">
									<div className="ONE-BRAND-CARD">
										<div className="cp__brand">
											<div className="hidden aspect-square h-12 overflow-hidden rounded-md sm:block">
												<img
													src="https://source.unsplash.com/random/?brand"
													alt="brand"
												/>
											</div>
											<div>
												<p className="text-sm font-bold uppercase text-black sm:text-lg">
													Scarlett whitening
												</p>
												<a
													href="#"
													className="text-xs text-brown underline sm:text-[12px]"
												>
													Lihat Katalog Brand
												</a>
											</div>
										</div>
										<div className="my-4 border-b border-brown sm:my-6" />
										<div className="cp__satubrand__input">
											<div className="cp__input">
												<div className="input__img">
													<img
														src="https://source.unsplash.com/random/?skincare"
														alt="cp__product"
													/>
												</div>
												<div className="input__text">
													<p>Brightening Facial Wash – All Skin Type</p>
													<p className="text-slate-400">Size: 100ml</p>
													<p>Rp 75.000</p>
												</div>
												<div className="input__qty ">
													<p className="rounded-full bg-soft-gray px-3 text-black">
														2 barang
													</p>
												</div>
												<div className="input__price ">
													<p>Rp 150.000</p>
												</div>
											</div>
											<div className="cp__input">
												<div className="input__img">
													<img
														src="https://source.unsplash.com/random/?skincare"
														alt="cp__product"
													/>
												</div>
												<div className="input__text">
													<p>Essence Toner – Acne </p>
													<p className="text-slate-400">Size: 100ml</p>
													<p>Rp 75.000</p>
												</div>
												<div className="input__qty ">
													<p className="rounded-full bg-soft-gray px-3 text-black">
														1 barang
													</p>
												</div>
												<div className="input__price ">
													<p>Rp 150.000</p>
												</div>
											</div>
										</div>
									</div>
									<div className="ONE-BRAND-CARD">
										<div className="cp__brand">
											<div className="hidden aspect-square h-12 overflow-hidden rounded-md sm:block">
												<img
													src="https://source.unsplash.com/random/?brand"
													alt="brand"
												/>
											</div>
											<div>
												<p className="text-sm font-bold uppercase text-black sm:text-lg">
													Scarlett whitening
												</p>
												<a
													href="#"
													className="text-xs text-brown underline sm:text-[12px]"
												>
													Lihat Katalog Brand
												</a>
											</div>
										</div>
										<div className="my-4 border-b border-brown sm:my-6" />
										<div className="cp__satubrand__input">
											<div className="cp__input">
												<div className="input__img">
													<img
														src="https://source.unsplash.com/random/?skincare"
														alt="cp__product"
													/>
												</div>
												<div className="input__text">
													<p>Brightening Facial Wash – All Skin Type</p>
													<p className="text-slate-400">Size: 100ml</p>
													<p>Rp 75.000</p>
												</div>
												<div className="input__qty ">
													<p className="rounded-full bg-soft-gray px-3 text-black">
														2 barang
													</p>
												</div>
												<div className="input__price ">
													<p>Rp 150.000</p>
												</div>
											</div>
											<div className="cp__input">
												<div className="input__img">
													<img
														src="https://source.unsplash.com/random/?skincare"
														alt="cp__product"
													/>
												</div>
												<div className="input__text">
													<p>Essence Toner – Acne </p>
													<p className="text-slate-400">Size: 100ml</p>
													<p>Rp 75.000</p>
												</div>
												<div className="input__qty ">
													<p className="rounded-full bg-soft-gray px-3 text-black">
														1 barang
													</p>
												</div>
												<div className="input__price ">
													<p>Rp 150.000</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="DIV-COL2 col-span-4  flex w-full flex-col gap-6  sm:col-span-3 lg:col-span-4 ">
							<div className="cp__card__ringkasan mb-4">
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
							<div className="relative h-20 w-full">
								<h1 className=" absolute right-0 bottom-0  py-2 px-5 text-right text-2xl text-med-brown">
									Terima kasih telah berbelanja di Flambo!
								</h1>
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
