import Navbar from "../../components/sections/_navbar/Navbar";
import Footer from "../../components/sections/_footer/Footer";
import Breadcrumb from "../../components/atoms/breadcrumb/BC-FinishPayment";
import Skeleton from "@mui/material/Skeleton";

import bca from "../../assets/icons/icon-bank/bca.png";
import bni from "../../assets/icons/icon-bank/bni.png";
import permata from "../../assets/icons/icon-bank/permata.png";
import bri from "../../assets/icons/icon-bank/bri.png";
import illst from "../../assets/images/finish-illst-whitebg.png";

import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { IoTicketSharp } from "react-icons/io5";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import currencyIDR from "../../utils/currencyIDR";
import convertDate from "../../utils/convertDate";

export default function PaymentOptions() {
	const navigate = useNavigate();
	const [expTime, setExpTime] = useState(0);
	const [amount, setAmount] = useState(0);
	const [orderID, setOrderID] = useState("");
	const [bank, setBank] = useState("");
	const [vaNumber, setVaNumber] = useState("");
	const data = useSelector((state) => state.cart.statusBuatPesanan);
	console.log("data pesanan di komponen ", data.responseBuatPesanan);

	useEffect(() => {
		scrollTop();
		if (
			Object.keys(data.responseBuatPesanan).length === 0 &&
			data.responseBuatPesanan.constructor === Object
		) {
			toast("info pesanan silahkan lihat di profil mu");
			navigate("/userprofile");
		} else {
			const { expiryTime, bankName, grossAmount, orderId, vaNumber } =
				data.responseBuatPesanan.data;
			setExpTime(expiryTime);
			setAmount(grossAmount);
			setOrderID(orderId);
			setVaNumber(vaNumber);
			if (bankName === "bca") {
				setBank("bca");
			}
			if (bankName === "bni") {
				setBank("bni");
			}
			if (bankName === "permata") {
				setBank("permata");
			}
			if (bankName === "bri") {
				setBank("bri");
			}
		}
	}, [data]);

	const NOW_IN_MS = new Date().getTime();
	const DEADLINE = expTime - NOW_IN_MS;
	const [countdown, setCountdown] = useState([23, 59, 59]);
	const [hour, min, sec] = countdown;

	const calculateCountdown = useCallback(() => {
		let sec = Math.floor((DEADLINE / 1000) % 60);
		let min = Math.floor((DEADLINE / 1000 / 60) % 60);
		let hour = Math.floor((DEADLINE / 1000 / 60 / 60) % 24);

		return [hour, min, sec];
	}, [DEADLINE]);

	useEffect(() => {
		let interval = setInterval(() => {
			setCountdown(calculateCountdown());
		}, 1000);

		return () => clearInterval(interval);
	}, [calculateCountdown, setCountdown]);

	function scrollTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

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
										<div className="h-[249px] w-[306px]">
											<img
												src={illst}
												className="absolute z-10 bg-center object-contain"
											></img>
											<Skeleton
												variant="rectangular"
												animation="wave"
												className="h-full w-full"
											/>
										</div>

										<div className="BG-GRADIENT flex w-full flex-col items-center justify-center py-4   sm:w-9/12 xl:px-8">
											<p className="px-4 text-center text-sm tracking-wider text-white">
												tuntaskan pembayaran dalam
											</p>
											<p className="px-4 text-center text-lg font-bold text-white">
												1 hari {hour} jam {min} menit {sec} detik
											</p>
										</div>
									</div>
									<div className="TRANSFER-KE flex flex-col items-center justify-center">
										<div className="TRANSFER-BANK flex flex-col items-center justify-center">
											<p className="mt-6 text-lg font-bold uppercase text-grey">
												Transfer Ke
											</p>
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
										</div>
										<div className="my-6 w-6/12 border-b-2 border-[#d2a866]  sm:my-4 "></div>
										<div className="TRANSFER-JUMLAH flex flex-col items-center justify-center">
											<p className="text-center text-lg font-bold uppercase text-grey">
												Jumlah yang Harus Dibayar
											</p>
											<p className="mt-3 text-2xl font-bold">
												{currencyIDR(amount)}
											</p>
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
								<p className="text-center font-bold">{orderID}</p>
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
									onClick={() => navigate("/userprofile")}
									className="btn-sec right-0 bottom-0 ml-0 rounded-full py-2 px-5  text-xs xl:ml-auto xl:mr-4 xl:text-base"
								>
									Cek Riwayat Pesanan
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
