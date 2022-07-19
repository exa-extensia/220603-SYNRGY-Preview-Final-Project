import Navbar from "../../components/sections/_navbar/Navbar";
import Footer from "../../components/sections/_footer/Footer";
import Breadcrumb from "../../components/atoms/breadcrumb/BC-OrderDetails";
import Skeleton from "@mui/material/Skeleton";

import bca from "../../assets/icons/icon-bank/bca.png";
import bni from "../../assets/icons/icon-bank/bni.png";
import permata from "../../assets/icons/icon-bank/permata.png";
import bri from "../../assets/icons/icon-bank/bri.png";
import jne from "../../assets/icons/icon-pengiriman/jne.png";
import pos from "../../assets/icons/icon-pengiriman/pos.png";
import tiki from "../../assets/icons/icon-pengiriman/tiki.png";

import currencyIDR from "../../utils/currencyIDR";

import { GiCardboardBoxClosed } from "react-icons/gi";
import { TbUser, TbPhone } from "react-icons/tb";
import { HiOutlineQuestionMarkCircle, HiCheck } from "react-icons/hi";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAddress } from "../../redux/address/addressSlice";

import axios from "axios";
import convertDate from "../../utils/convertDate";

export default function PaymentOptions() {
	const dispatch = useDispatch();
	const params = useParams();

	function scrollTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	const [orderItems, setOrderItems] = useState([]);
	const [orderAddress, setOrderAddress] = useState({});
	const [paymentExp, setPaymentExp] = useState();
	const [orderDate, setOrderDate] = useState();
	const [vaNumber, setVaNumber] = useState("");
	const [bank, setBank] = useState("");
	const [courier, setCourier] = useState("");
	const [statusAntar, setStatusAntar] = useState("");
	const [statusBayar, setStatusBayar] = useState("");
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		scrollTop();

		axios
			.get(`https://cosmetic-b.herokuapp.com/api/v1/order/${params.id}`)
			.then((response) => {
				console.log(response.data);
				setLoading(false);
				setData(response.data.data);
				setOrderItems(response.data.data.orderItems);
				setOrderAddress(response.data.data.address);
				setVaNumber(response.data.data.payment.vaNumber);
				setPaymentExp(response.data.data.payment.expiryTime);
				setOrderDate(response.data.data.payment.transactionTime);
				if (response.data.data.payment.bankName === "bca") {
					setBank("bca");
				}
				if (response.data.data.payment.bankName === "bni") {
					setBank("bni");
				}
				if (response.data.data.payment.bankName === "permata") {
					setBank("permata");
				}
				if (response.data.data.payment.bankName === "bri") {
					setBank("bri");
				}
				if (response.data.data.delivery === "JNE") {
					setCourier("JNE");
				}
				if (response.data.data.delivery === "POS") {
					setCourier("POS");
				}
				if (response.data.data.delivery === "TIKI") {
					setCourier("TIKI");
				}
				if (response.data.data.status === "WAITING_FOR_PAYMENT") {
					setStatusBayar("pending");
					setStatusAntar("pending");
				}
				if (response.data.data.status === "PAID") {
					setStatusBayar("sukses");
					setStatusAntar("diantar");
				}
				if (response.data.data.status === "ON_DELIVERY") {
					setStatusBayar("sukses");
					setStatusAntar("diantar");
				}
				if (response.data.data.status === "DELIVERED") {
					setStatusBayar("sukses");
					setStatusAntar("selesai");
				}
				if (response.data.data.status === "CANCELED") {
					setStatusBayar("dibatalkan");
					setStatusAntar("dibatalkan");
				}
			})
			.catch((error) => {
				setLoading(false);
				console.log(error);
				setError(true);
			});
	}, [dispatch, params.id]);

	const everyItems = orderItems.reduce(
		(prev, curr) => [...prev, ...curr.items],
		[]
	);
	const totalSubTotal = everyItems.reduce(
		(prev, curr) => prev + curr.subTotal,
		0
	);
	const totalQty = everyItems.reduce((prev, curr) => prev + curr.quantity, 0);

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
					<div className="cp__totalqty ORDERDETAIL-GRADIENT mb-6 flex w-full items-center gap-2 p-4  text-white  xl:px-8">
						<div className="text-white">
							<GiCardboardBoxClosed size={40} />
						</div>
						{loading && <p>loading mencari Order ID...</p>}
						{!loading && !error && (
							<div className="flex flex-col">
								<h1 className="text-lg font-bold sm:text-3xl">
									Order Details #{data.id}
								</h1>
								<p className="text-sm">
									{convertDate(orderDate).toLocaleString("en-GB")}
								</p>
							</div>
						)}
						{!loading && error && <p>wah error nih pusing dev-nya TT___TT</p>}
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
								{loading && (
									<div className="ORDERING-GENERAL-CARD w-full ">
										<Skeleton
											variant="rectangular"
											height={100}
											animation="wave"
											className="w-full"
										/>
									</div>
								)}
								{!loading && !error && orderAddress && (
									<div className="ORDERING-GENERAL-CARD sm:flex ">
										<div className="w-3/4">
											<div className="label-group flex flex-row items-center gap-2">
												<p className="LABEL-ALAMAT text-sm font-bold uppercase text-brown">
													{orderAddress.label}
												</p>{" "}
												<div
													className={`${
														orderAddress.isDefault === true
															? "rounded-xl  bg-cream py-1 px-2 text-xs text-brown"
															: "hidden"
													} `}
												>
													<p>alamat utama</p>
												</div>
											</div>
											<div className="content-group mt-1 ">
												<p className="break-words text-sm font-extralight">
													{orderAddress.addressDetail} - {orderAddress.cityId}{" "}
													{orderAddress.postalCode}
												</p>
												<div className="mt-2 flex flex-row items-center gap-4">
													<div className="flex flex-row items-center gap-1">
														<TbUser size={20} />
														<p className="  font-bold">
															{orderAddress.receiver}
														</p>
													</div>
													<div className="flex flex-row items-center gap-1">
														<TbPhone size={20} />
														<p className="  font-bold">{orderAddress.phone}</p>
													</div>
												</div>
											</div>
											<div className="ORDERING-GENERAL-DIV my-6 w-full  sm:my-4 "></div>
											<div className="flex items-center gap-2">
												<p className="text-sm text-med-brown">
													*Pengiriman dengan kurir:
												</p>
												{courier === "JNE" && (
													<img
														src={jne}
														className="w-[40px] bg-center object-contain"
													></img>
												)}
												{courier === "POS" && (
													<img
														src={pos}
														className="w-[40px] bg-center object-contain"
													></img>
												)}
												{courier === "TIKI" && (
													<img
														src={tiki}
														className="w-[40px] bg-center object-contain"
													></img>
												)}
											</div>
										</div>
										<div className="mt-4 sm:relative sm:mt-0 sm:w-1/4">
											<div className="sm:absolute sm:top-0 sm:right-0">
												{statusAntar === "dibatalkan" && (
													<div className="rounded-full bg-danger py-1 px-2 text-xs text-white">
														dibatalkan
													</div>
												)}
												{statusAntar === "pending" && (
													<div className="rounded-full bg-danger py-1 px-2 text-xs text-white">
														menunggu terbayar
													</div>
												)}
												{statusAntar === "diantar" && (
													<div className="rounded-full bg-warning py-1 px-2 text-xs text-white">
														pesanan diantar
													</div>
												)}
												{statusAntar === "selesai" && (
													<div className="rounded-full bg-success py-1 px-2 text-xs text-white">
														pesanan selesai
													</div>
												)}
											</div>
										</div>
									</div>
								)}
								{!loading && error && (
									<div className="ORDERING-GENERAL-CARD">unexpected error</div>
								)}
							</div>
							<div className="BLOCK-PEMBAYARAN flex flex-col gap-2">
								<div className="">
									<h1 className="text-xl">Pembayaran</h1>
									<div className="my-2 flex items-center">
										<div className="w-20 border-b-2 border-med-brown" />
										<div className="h-2 w-2 rounded-full bg-med-brown"></div>
									</div>
								</div>
								{loading && (
									<div className="ORDERING-GENERAL-CARD w-full ">
										<Skeleton
											variant="rectangular"
											height={100}
											animation="wave"
											className="w-full"
										/>
									</div>
								)}
								{!loading && error && (
									<div className="ORDERING-GENERAL-CARD">unexpected error</div>
								)}
								{!loading && !error && (
									<div className="ORDERING-GENERAL-CARD sm:flex ">
										<div className="w-3/4">
											{bank === "bca" && (
												<img
													src={bca}
													className="my-3 w-[150px] bg-center object-contain"
												></img>
											)}
											{bank === "bni" && (
												<img
													src={bni}
													className="my-3 w-[150px] bg-center object-contain"
												></img>
											)}
											{bank === "bri" && (
												<img
													src={bri}
													className="my-3 w-[150px] bg-center object-contain"
												></img>
											)}
											{bank === "permata" && (
												<img
													src={permata}
													className="my-3 w-[150px] bg-center object-contain"
												></img>
											)}
											<p className="text-lg font-bold">Virtual Account</p>
											<p className="text-2xl font-bold">{vaNumber}</p>
											<div className="ORDERING-GENERAL-DIV my-6 w-full  sm:my-4 "></div>
											<div className="flex items-center gap-2 text-med-brown">
												<p className="text-sm">*Bayar sebelum:</p>
												<p className="font-semibold">
													{convertDate(paymentExp).toLocaleString("en-GB")}
												</p>
											</div>
										</div>
										<div className="mt-4 sm:relative sm:mt-0 sm:w-1/4">
											<div className="sm:absolute sm:top-0 sm:right-0">
												{statusBayar === "pending" && (
													<div className="rounded-full bg-warning py-1 px-2 text-xs text-white">
														menunggu pembayaran
													</div>
												)}
												{statusBayar === "sukses" && (
													<div className="rounded-full bg-success py-1 px-2 text-xs text-white">
														pembayaran sukses
													</div>
												)}
												{statusBayar === "dibatalkan" && (
													<div className="rounded-full bg-danger py-1 px-2 text-xs text-white">
														dibatalkan
													</div>
												)}
											</div>
										</div>
									</div>
								)}
							</div>
							<div className="BLOCK-PESANAN flex flex-col gap-2">
								<div className="">
									<h1 className="text-xl">Pesanan</h1>
									<div className="my-2 flex items-center">
										<div className="w-20 border-b-2 border-med-brown" />
										<div className="h-2 w-2 rounded-full bg-med-brown"></div>
									</div>
								</div>
								{loading && (
									<div className="ORDERING-GENERAL-CARD w-full ">
										<Skeleton
											variant="rectangular"
											height={100}
											animation="wave"
											className="w-full"
										/>
									</div>
								)}
								{!loading && error && (
									<div className="ORDERING-GENERAL-CARD">unexpected error</div>
								)}

								{!loading && !error && (
									<div className="ORDERING-GENERAL-CARD ORDER-ITEM-LIST flex w-full flex-col gap-12 ">
										{orderItems?.map((i, indexLuar) => (
											<div className="ONE-BRAND-CARD">
												<div key={indexLuar} className="cp__brand">
													<div className="hidden aspect-square h-12 overflow-hidden rounded-md sm:block">
														<img src={i.banner} alt="brand" />
													</div>
													<div>
														<p className="text-sm font-bold uppercase text-black sm:text-lg">
															{i.brandName}
														</p>
													</div>
												</div>
												<div className="my-4 border-b border-brown sm:my-6" />
												<div className="flex flex-col gap-4">
													{i.items?.map((v, index) => (
														<div key={index} className="cp__satubrand__input">
															<div className="cp__input">
																<div className="input__img">
																	<img src={v.image} alt="cp__product" />
																</div>
																<div className="input__text">
																	<p>{v.name}</p>
																	<p>{currencyIDR(v.price)}</p>
																</div>
																<div className="input__qty ">
																	<p className="rounded-full bg-cream px-3 py-1 text-xs font-light text-med-brown">
																		<span className="mr-1 text-sm font-bold">
																			{v.quantity}
																		</span>{" "}
																		barang
																	</p>
																</div>
																<div className="input__price ">
																	<p>{currencyIDR(v.subTotal)}</p>
																</div>
															</div>
														</div>
													))}
												</div>
											</div>
										))}
									</div>
								)}
							</div>
						</div>

						<div className="DIV-COL2 col-span-4  flex w-full flex-col gap-6  sm:col-span-3 lg:col-span-4 ">
							<div className=" flex w-full items-center gap-2 bg-cream p-4 font-bold text-brown xl:px-8">
								<div className="text-brown">
									<HiCheck />
								</div>
								<p>{totalQty} Barang Terpilih!</p>
							</div>
							<div className="cp__card__ringkasan mb-4">
								<div className="mb-7">
									<p className="mb-3 text-lg font-bold">Ringkasan Belanja</p>
									<div className="flex items-center">
										<div className="w-20 border-b-2 border-med-brown" />
										<div className="h-2 w-2 rounded-full bg-med-brown"></div>
									</div>
								</div>
								<div className="ringkasan__text mb-7 flex flex-col gap-2 text-xs lg:text-base">
									{loading && (
										<div className=" w-full ">
											<Skeleton
												variant="rectangular"
												height={100}
												animation="wave"
												className="w-full"
											/>
										</div>
									)}
									{!loading && (
										<>
											<div className="flex justify-between ">
												<p>Total Belanja</p>
												<p className="font-bold">
													{currencyIDR(totalSubTotal)}
												</p>
											</div>
											<div className="flex justify-between">
												<p>Diskon</p>
												<p className="font-bold">-</p>
											</div>
											<div className="flex justify-between text-med-brown">
												<p>+ Ongkir</p>
												<p className="font-bold">
													{currencyIDR(data.total - totalSubTotal)}
												</p>
											</div>
											<div className="flex justify-between">
												<p>Jumlah Pembayaran</p>
												<p className="font-bold">{currencyIDR(data.total)}</p>
											</div>
										</>
									)}
								</div>
							</div>

							<h1 className="px-5 pt-3 text-2xl tracking-wide text-med-brown">
								Terima kasih telah berbelanja di Flambo!
							</h1>

							<div className=" my-6 w-full border-b-2 border-[#d2a866]"></div>
							<div className=" flex w-full gap-4">
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

							{/* <img src={illst} alt="" /> */}
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
