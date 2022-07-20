import Navbar from "../../components/sections/_navbar/Navbar";
import Footer from "../../components/sections/_footer/Footer";
import Breadcrumb from "../../components/atoms/breadcrumb/BC-Shipping";
import Skeleton from "@mui/material/Skeleton";
import { toast } from "react-toastify";

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

import axios from "axios";
import currencyIDR from "../../utils/currencyIDR";

import { getAddress } from "../../redux/address/addressSlice";
import { placeOrder } from "../../redux/cart/cartSlice";

export default function Shipping() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	function scrollTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	const { address, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.address
	);
	const addressDefault = address.find((e) => e.isDefault);
	console.log("addressDefault>>>>", addressDefault);
	const quantityCartBadge = useSelector((state) => state.cart.cartBadge);
	const {
		buatPesananError,
		buatPesananSuccess,
		buatPesananLoading,
		buatpesananmessage,
	} = useSelector((state) => state.cart.statusBuatPesanan);

	const onBuatPesanan = () => {
		if (addressDefault && courier && duration && bank) {
			const checkoutData = {
				bank: bank,
				delivery: courier,
				deliveryService: duration,
				paymentType: "BANK_TRANSFER",
			};
			dispatch(placeOrder(checkoutData));
		}
		if (!addressDefault) {
			toast("Lengkapi alamat utama!");
		}
		if (!courier) {
			toast("Lengkapi pilihan kurir!");
		}
		if (!duration) {
			toast("Lengkapi pilihan durasi!");
		}
		if (!bank) {
			toast("Lengkapi pilihan bank!");
		}
	};

	const [courier, setCourier] = useState(""); // isi kurir pilihan
	const [duration, setDuration] = useState(""); // isi durasi pilihan
	const [bank, setBank] = useState(""); // isi bank pilihan
	const [dataTotalBelanja, setDataTotalBelanja] = useState(0); // isi total sblm ongkir
	const [dataDelivery, setDataDelivery] = useState([]); // isi data delivery : pilihan kurir & pilihan durasi
	const [dataOngkir, setDataOngkir] = useState(0); // isi data ongkir hasil pilihan
	const [checkoutLoading, setCheckoutLoading] = useState(true);
	const [checkoutError, setCheckoutError] = useState(false);

	const tabsCourierHandler = (e) => {
		setCourier(e.target.id);
	};

	useEffect(() => {
		if (duration) {
			const dataKurir = dataDelivery.find((e) => e.courier === courier);

			const dataCostByCourier = dataKurir.services.find(
				(e) => e.serviceType === duration
			);
			console.log(">>>>>>>datacostbycourier>>>>>>>>", dataCostByCourier);
			setDataOngkir(dataCostByCourier.cost);
		}
	}, [duration, courier]);

	const tabsDurationHandler = (e) => {
		if (!courier) {
			toast("silahkan pilih kurir dahulu");
		} else {
			setDuration(e.target.id);
		}
	};
	const tabsBankHandler = (e) => {
		setBank(e.target.id);
	};

	useEffect(() => {
		if (buatPesananError) {
			toast(buatpesananmessage);
		}
		if (buatPesananSuccess) {
			navigate("/finishpayment");
		}
	}, [dispatch, buatPesananError, buatPesananSuccess]);

	useEffect(() => {
		scrollTop();
		dispatch(getAddress());
		const token = JSON.parse(localStorage.getItem("token"));
		axios
			.get(`https://cosmetic-b.herokuapp.com/api/v1/checkout`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setCheckoutError(false);
				setCheckoutLoading(false);
				let data = response.data.data;
				setDataDelivery(data.delivery);
				setDataTotalBelanja(data.overview.total);
				console.log("GET DATA CHECKOUT>>>>", data);
			})
			.catch((error) => {
				toast("tidak ada produk dalam keranjang");
				console.log(error);
				setCheckoutError(true);
				setCheckoutLoading(true);
				navigate("/cart");
			});
	}, []);

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
										{isLoading && (
											<div className=" w-full ">
												<Skeleton
													variant="rectangular"
													height={100}
													animation="wave"
													className="w-full"
												/>
											</div>
										)}
										{!isLoading && !isError && addressDefault && (
											<>
												<div className="label-group flex flex-row items-center gap-2">
													<p className="LABEL-ALAMAT text-sm font-bold uppercase text-brown">
														{addressDefault.label}
													</p>{" "}
													<div className="rounded-xl  bg-cream py-1 px-2 text-xs text-brown">
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
										)}
										{!isLoading && !isError && !addressDefault && (
											<>
												<HiArrowNarrowRight
													size={30}
													className="hidden text-brown sm:block"
												/>
												<p className="text-md">
													Hayuk daftarkan{" "}
													<span className="text-xl font-bold text-danger">
														alamat utama
													</span>
													mu! :)
												</p>
											</>
										)}
										{!isLoading &&
											isError && <div>unexpected isError</div> &&
											toast(message)}
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
									<div className="PILIH-KURIR flex flex-col gap-2 sm:flex-row">
										<div
											id="JNE"
											className={`CARD-KURIR ${
												courier === "JNE" ? "bg-cream text-brown" : ""
											}`}
											onClick={tabsCourierHandler}
										>
											<img
												id="JNE"
												onClick={tabsCourierHandler}
												src={jne}
												className="h-[40px] object-contain sm:m-auto sm:w-[50%] sm:bg-center"
											></img>
										</div>
										<div className="ORDERING-GENERAL-DIV-V my-auto hidden h-10 sm:block"></div>
										<div
											id="POS"
											className={`CARD-KURIR ${
												courier === "POS" ? "bg-cream text-brown" : ""
											}`}
											onClick={tabsCourierHandler}
										>
											<img
												id="POS"
												onClick={tabsCourierHandler}
												src={pos}
												className="h-[40px] object-contain sm:m-auto sm:w-[50%] sm:bg-center"
											></img>
										</div>
										<div className="ORDERING-GENERAL-DIV-V my-auto hidden h-10 sm:block"></div>
										<div
											id="TIKI"
											className={`CARD-KURIR ${
												courier === "TIKI" ? "bg-cream text-brown" : ""
											}`}
											onClick={tabsCourierHandler}
										>
											<img
												id="TIKI"
												onClick={tabsCourierHandler}
												src={tiki}
												className="h-[40px] object-contain sm:m-auto sm:w-[50%] sm:bg-center"
											></img>
										</div>
									</div>
									{/* <div className="ORDERING-GENERAL-DIV my-6 w-full  sm:my-4 "></div> */}
									<p className="mb-2 font-bold">Pilih Durasi Pengiriman</p>
									<div className="PILIH-DURASI flex flex-col gap-2 sm:flex-row">
										<div
											id="REGULAR"
											className={`CARD-DURASI ${
												duration === "REGULAR" ? "bg-cream text-brown" : ""
											}`}
											onClick={tabsDurationHandler}
										>
											<HiClock />
											<div
												id="REGULAR"
												onClick={tabsDurationHandler}
												className="mt-2"
											>
												<p
													id="REGULAR"
													onClick={tabsDurationHandler}
													className=" text-sm font-bold"
												>
													Regular Shipping
												</p>
												<p
													id="REGULAR"
													onClick={tabsDurationHandler}
													className="text-xs text-grey"
												>
													Estimasi Pengiriman 3-5 hari kerja
												</p>
											</div>
										</div>
										<div className="ORDERING-GENERAL-DIV-V my-auto hidden h-10 sm:block"></div>
										<div
											id="INSTANT"
											className={`CARD-DURASI ${
												duration === "INSTANT" ? "bg-cream text-brown" : ""
											}`}
											onClick={tabsDurationHandler}
										>
											<HiLightningBolt />
											<div
												id="INSTANT"
												onClick={tabsDurationHandler}
												className="mt-2"
											>
												<p
													id="INSTANT"
													onClick={tabsDurationHandler}
													className="text-sm font-bold"
												>
													Same Day Shipping
												</p>
												<p
													id="INSTANT"
													onClick={tabsDurationHandler}
													className="text-xs text-grey"
												>
													Pengiriman diterima pada hari yang sama
												</p>
												<p
													id="INSTANT"
													onClick={tabsDurationHandler}
													className="text-xs italic text-grey"
												>
													(Pembayaran yang diterima di atas jam 13:00 akan
													diproses pada hari berikutnya)
												</p>
											</div>
										</div>
									</div>
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
									<div className="BANK-WRAPPER flex w-full flex-col">
										<div
											id="BCA"
											onClick={tabsBankHandler}
											className={`CARD-BANK w-full ${
												bank === "BCA" ? "bg-cream text-brown" : ""
											}`}
										>
											<div
												id="BCA"
												onClick={tabsBankHandler}
												className="CARD-BANK-WRAPPER flex w-full items-center justify-between "
											>
												<div
													id="BCA"
													onClick={tabsBankHandler}
													className="flex w-3/4 items-center gap-4 sm:gap-6"
												>
													<img
														id="BCA"
														onClick={tabsBankHandler}
														src={bca}
														className="w-[50px] bg-center object-contain"
													></img>
													<p
														id="BCA"
														onClick={tabsBankHandler}
														className="font-medium"
													>
														BCA Virtual Account
													</p>
												</div>
												<div
													id="BCA"
													onClick={tabsBankHandler}
													className="ml-auto flex items-center justify-between gap-2 text-brown"
												>
													<HiCheck size={15} />
													<p
														id="BCA"
														onClick={tabsBankHandler}
														className="max-w-[60px] text-xs"
													>
														Konfirmasi Otomatis
													</p>
												</div>
											</div>
										</div>
										<div className="ORDERING-GENERAL-DIV my-6 w-full  sm:my-4 "></div>
										<div
											id="BNI"
											onClick={tabsBankHandler}
											className={`CARD-BANK w-full ${
												bank === "BNI" ? "bg-cream text-brown" : ""
											}`}
										>
											<div
												id="BNI"
												onClick={tabsBankHandler}
												className="CARD-BANK-WRAPPER flex w-full items-center justify-between "
											>
												<div
													id="BNI"
													onClick={tabsBankHandler}
													className="flex w-3/4 items-center gap-4 sm:gap-6"
												>
													<img
														id="BNI"
														onClick={tabsBankHandler}
														src={bni}
														className="w-[50px] bg-center object-contain"
													></img>
													<p
														id="BNI"
														onClick={tabsBankHandler}
														className="font-medium"
													>
														BNI Virtual Account
													</p>
												</div>
												<div
													id="BNI"
													onClick={tabsBankHandler}
													className="ml-auto flex items-center justify-between gap-2 text-brown"
												>
													<HiCheck size={15} />
													<p
														id="BNI"
														onClick={tabsBankHandler}
														className="max-w-[60px] text-xs"
													>
														Konfirmasi Otomatis
													</p>
												</div>
											</div>
										</div>
										<div className="ORDERING-GENERAL-DIV my-6 w-full  sm:my-4 "></div>
										<div
											id="PERMATA"
											onClick={tabsBankHandler}
											className={`CARD-BANK w-full ${
												bank === "PERMATA" ? "bg-cream text-brown" : ""
											}`}
										>
											<div
												id="PERMATA"
												onClick={tabsBankHandler}
												className="CARD-BANK-WRAPPER flex w-full items-center justify-between "
											>
												<div
													id="PERMATA"
													onClick={tabsBankHandler}
													className="flex w-3/4 items-center gap-4 sm:gap-6"
												>
													<img
														id="PERMATA"
														onClick={tabsBankHandler}
														src={permata}
														className="w-[50px] bg-center object-contain"
													></img>
													<p
														id="PERMATA"
														onClick={tabsBankHandler}
														className="font-medium"
													>
														Permata Virtual Account
													</p>
												</div>
												<div
													id="PERMATA"
													onClick={tabsBankHandler}
													className="ml-auto flex items-center justify-between gap-2 text-brown"
												>
													<HiCheck size={15} />
													<p
														id="PERMATA"
														onClick={tabsBankHandler}
														className="max-w-[60px] text-xs"
													>
														Konfirmasi Otomatis
													</p>
												</div>
											</div>
										</div>
										<div className="ORDERING-GENERAL-DIV my-6 w-full  sm:my-4 "></div>
										<div
											id="BRI"
											onClick={tabsBankHandler}
											className={`CARD-BANK w-full ${
												bank === "BRI" ? "bg-cream text-brown" : ""
											}`}
										>
											<div
												id="BRI"
												onClick={tabsBankHandler}
												className="CARD-BANK-WRAPPER flex w-full items-center justify-between "
											>
												<div
													id="BRI"
													onClick={tabsBankHandler}
													className="flex w-3/4 items-center gap-4 sm:gap-6"
												>
													<img
														id="BRI"
														onClick={tabsBankHandler}
														src={bri}
														className="w-[50px] bg-center object-contain"
													></img>
													<p
														id="BRI"
														onClick={tabsBankHandler}
														className="font-medium"
													>
														BRI Virtual Account
													</p>
												</div>
												<div
													id="BRI"
													onClick={tabsBankHandler}
													className="ml-auto flex items-center justify-between gap-2 text-brown"
												>
													<HiCheck size={15} />
													<p
														id="BRI"
														onClick={tabsBankHandler}
														className="max-w-[60px] text-xs"
													>
														Konfirmasi Otomatis
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="DIV-COL2 col-span-4  flex w-full flex-col gap-6  sm:col-span-3 lg:col-span-4 ">
							<div className=" flex w-full items-center gap-2 bg-cream p-4 font-bold text-brown xl:px-8">
								<div className="text-brown">
									<HiCheck />
								</div>
								<p>{quantityCartBadge} Barang Terpilih!</p>
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
									{checkoutLoading && (
										<div className=" w-full ">
											<Skeleton
												variant="rectangular"
												height={100}
												animation="wave"
												className="w-full"
											/>
										</div>
									)}
									{!checkoutLoading && (
										<>
											<div className="flex justify-between ">
												<p>Total Belanja</p>
												<p className="font-bold">
													Rp{dataTotalBelanja.toLocaleString("id-ID")}
												</p>
											</div>
											<div className="flex justify-between">
												<p>Diskon</p>
												<p className="font-bold">-</p>
											</div>
											<div className="flex justify-between text-med-brown">
												<p>+ Ongkir</p>
												<p className="font-bold">
													Rp{dataOngkir.toLocaleString("id-ID")}
												</p>
											</div>
											<div className="flex justify-between">
												<p>Jumlah Pembayaran</p>
												<p className="font-bold">
													Rp
													{(dataTotalBelanja + dataOngkir).toLocaleString(
														"id-ID"
													)}
												</p>
											</div>
										</>
									)}
								</div>
							</div>

							<div className="relative h-10 w-full">
								<button
									onClick={onBuatPesanan}
									className="btn-grad absolute right-0 bottom-0 rounded-full py-2 px-5 text-xs text-white sm:text-base"
								>
									Buat Pesanan
								</button>
							</div>
							{buatPesananLoading && (
								<div className="text-right text-xs font-bold text-brown">
									Sedang membuat pesanan...!
								</div>
							)}
							{/* <img src={illst} alt="" /> */}
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
