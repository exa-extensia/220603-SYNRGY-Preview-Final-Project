import "./cartpage.css";

import Navbar from "../../components/sections/_navbar/Navbar";
import Footer from "../../components/sections/_footer/Footer";
import Breadcrumb from "../../components/atoms/breadcrumb/BC-CartPage";
import {
	HiMinusSm,
	HiPlusSm,
	HiOutlineTrash,
	HiOutlineScissors,
	HiOutlineTicket,
	HiOutlineChevronRight,
	HiCheck,
} from "react-icons/hi";
import { TbDiscount2 } from "react-icons/tb";
import illst from "../../assets/images/cartempty-illst.svg";
import Skeleton from "@mui/material/Skeleton";
import { toast } from "react-toastify";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	deleteCart,
	getAllCart,
	deleteCartBadge,
	reset,
} from "../../redux/cart/cartSlice";

import axios from "axios";
import currencyIDR from "../../utils/currencyIDR";

export default function CartPage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	function scrollTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	const [inputQuantity, setInputQuantity] = useState(1);
	const inputQuantityHandler = (type) => {
		if (type === "dec") {
			inputQuantity > 1 && setInputQuantity(inputQuantity - 1);
		} else {
			setInputQuantity(inputQuantity + 1);
		}
	};
	const [overview, setOverview] = useState({});
	const [overviewTotal, setOverviewTotal] = useState(0);
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	useEffect(() => {
		scrollTop();
		dispatch(reset());
		const token = JSON.parse(localStorage.getItem("token"));
		axios
			.get(`https://cosmetic-b.herokuapp.com/api/v1/carts`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setIsLoading(false);
				let data = response.data.data;
				setOverview(data.overview);
				setOverviewTotal(data.overview.total);
				setItems(data.cartItems);
				console.log("get all cart in component>>>>>>>", data);
				dispatch(getAllCart());
			})
			.catch((error) => {
				setIsLoading(false);
				console.log(error);
				setIsError(true);
			});
		axios
			.get(
				`https://cosmetic-b.herokuapp.com/api/v1/promo/8bfe05d8-a738-41b8-adf3-e852072dfa38`
			)
			.then((response) => {
				setIsLoading(false);
				let data52 = response.data.data;
				setVoucher52(data52);
				console.log("voucher 52 in component>>>>>>>", data52);
			})
			.catch((error) => {
				setIsLoading(false);
				console.log(error);
				setIsError(true);
			});
		axios
			.get(
				`https://cosmetic-b.herokuapp.com/api/v1/promo/5ad43473-1a9a-415c-892a-527e12cddc9c`
			)
			.then((response) => {
				setIsLoading(false);
				let data68 = response.data.data;
				setVoucher68(data68);
				console.log("voucher 68 in component>>>>>>>", data68);
			})
			.catch((error) => {
				setIsLoading(false);
				console.log(error);
				setIsError(true);
			});
	}, [dispatch]);

	const quantityCartBadge = useSelector((state) => state.cart.cartBadge);

	const [voucher52, setVoucher52] = useState({});
	const [voucher68, setVoucher68] = useState({});
	const [sendSelectedID, setSendSelectedID] = useState("");
	const [voucherID, setVoucherID] = useState("");
	const tabsVoucherHandler = (e) => {
		setVoucherID(e.target.id);
	};

	useEffect(() => {
		if (voucherID === "52") {
			setSendSelectedID(voucher52.id);
		}
		if (voucherID === "68") {
			setSendSelectedID(voucher68.id);
		}
	}, [voucherID]);

	return (
		<>
			<Navbar />
			<section id="cartpage">
				<div className="cp__wrapper">
					<div className="cp__breadcrumbs">
						<Breadcrumb />
					</div>
					{!isLoading && isError && (
						<div>unexpected error masyaallah dev nya pusing</div>
					)}
					{!isLoading && !isError && items.length < 1 && (
						<div className="flex flex-col items-center justify-center text-center">
							<div className="relative my-6 aspect-video w-[300px] overflow-hidden sm:w-[600px]">
								<div className="grid w-full">
									<img
										src={illst}
										alt="cartkosong"
										className="absolute z-10 m-auto bg-center bg-no-repeat object-contain"
									/>
									<Skeleton
										variant="rectangular"
										animation="wave"
										className="m-auto h-[100px] w-[100px] sm:h-[300px] sm:w-[300px]"
									/>
								</div>
							</div>
							<p className="text-lg font-bold text-med-brown sm:text-2xl">
								Keranjangmu masih kosong nih!
							</p>
							<p className="text-sm sm:text-base">
								Silahkan tambahkan produkmu ke keranjang untuk proses pesananmu{" "}
							</p>
						</div>
					)}
					<div
						className={`${
							isError || (!isLoading && !isError && items.length < 1)
								? "hidden"
								: "flex"
						} mt-10 mb-6 w-full items-center gap-2 bg-cream p-4 font-bold text-brown xl:px-8`}
					>
						<div className="text-brown">
							<HiCheck />
						</div>
						<p>{quantityCartBadge} Barang Terpilih!</p>
					</div>
					<div className="cp__2cols">
						<div className="cp__product__card__wrapper">
							{isLoading && (
								<Skeleton
									variant="rectangular"
									height={300}
									animation="wave"
									className="w-full"
								/>
							)}
							{!isLoading &&
								!isError &&
								items.length > 0 &&
								items?.map((i, indexLuar) => (
									<div className="cp__card">
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
											{isLoading && (
												<Skeleton
													variant="rectangular"
													height={300}
													animation="wave"
													className="w-full"
												/>
											)}
											{!isLoading && isError && (
												<div>unexpected error masyaallah dev nya pusing</div>
											)}
											{!isLoading &&
												!isError &&
												i.items?.map((v, index) => (
													<Link
														to={`/productdetail/${v.productId}`}
														key={index}
														className="cp__satubrand__input cursor-pointer transition-all duration-200 ease-in-out hover:rounded-md hover:bg-soft-gray"
													>
														<div className="cp__input">
															<div className="input__img">
																<img src={v.image} alt="cp__product" />
															</div>
															<div className="input__text">
																<p>{v.name}</p>
																<p>{currencyIDR(v.price)}</p>
															</div>
															<div className="input__qty ">
																<p className="cursor-pointer rounded-full bg-cream px-3 py-1 text-xs font-light text-med-brown">
																	<span className="mr-1 cursor-pointer text-sm font-bold">
																		{v.quantity}
																	</span>{" "}
																	barang
																</p>
															</div>
															<div className="input__price ">
																<p>{currencyIDR(v.subTotal)}</p>
															</div>
															<div className="col-start-3 row-start-1 justify-self-end  lg:col-start-5">
																<button
																	onClick={(e) => {
																		e.preventDefault();
																		const itemData = {
																			quantity: v.quantity,
																			variantId: v.variantId,
																		};
																		const token = JSON.parse(
																			localStorage.getItem("token")
																		);
																		axios
																			.post(
																				`https://cosmetic-b.herokuapp.com/api/v1/carts/action/${itemData.variantId}?actionType=DELETE`,
																				null,
																				{
																					headers: {
																						Authorization: `Bearer ${token}`,
																					},
																				}
																			)
																			.then((response) => {
																				setIsLoading(false);
																				let dataDelete = response.data.data;
																				console.log(dataDelete);
																				setOverviewTotal(
																					overviewTotal - v.subTotal
																				);
																				dispatch(
																					deleteCartBadge(itemData.quantity)
																				);
																				i.items.splice(index, 1);
																				if (i.items.length === 0) {
																					items.splice(indexLuar, 1);
																				}
																				toast("berhasil dihapus");
																			})
																			.catch((error) => {
																				setIsLoading(false);
																				console.log(error);
																				setIsError(true);
																			});
																	}}
																	className="rounded-full bg-white p-1 text-danger transition-all duration-300 ease-in-out hover:bg-danger hover:text-white"
																>
																	<HiOutlineTrash />
																</button>
															</div>
														</div>
													</Link>
												))}
										</div>
									</div>
								))}
						</div>
						<div className="cp__output__card__wrapper">
							<div className="cp__output__card__wrapper">
								{isLoading && (
									<Skeleton
										variant="rectangular"
										height={300}
										animation="wave"
										className="w-full"
									/>
								)}
								{!isLoading && !isError && items.length > 0 && (
									<>
										<div className="cp__card__voucher">
											<div className="mb-7">
												<p className="mb-3 text-lg font-bold text-white">
													Voucher Diskon
												</p>
												<div className="flex items-center">
													<div className="w-20 border-b-2 border-white" />
													<div className="h-2 w-2 rounded-full bg-white"></div>
												</div>
											</div>
											<p className="mb-2 text-sm text-white">
												Pilih dan masukkan voucher diskon untuk mendapatkan
												potongan harga.
											</p>
											<div
												id="52"
												onClick={tabsVoucherHandler}
												className={`voucher__kode VOUCHER-SELECTED group mb-2 flex  items-center justify-between border border-white p-2 transition-all duration-700 ease-in-out ${
													voucherID === "52" ? "bg-white" : ""
												}`}
											>
												<div
													id="52"
													onClick={tabsVoucherHandler}
													className={`flex flex-row items-center transition-all duration-700 ease-in-out group-hover:text-med-brown ${
														voucherID === "52" ? "text-med-brown" : "text-white"
													}`}
												>
													<TbDiscount2 size={28} />
													<div id="52" onClick={tabsVoucherHandler}>
														<p
															id="52"
															onClick={tabsVoucherHandler}
															className="ml-8 text-xs font-bold lg:text-base"
														>
															Potongan 52%
														</p>
														<p
															id="52"
															onClick={tabsVoucherHandler}
															className="ml-8 text-xs"
														>
															Minimum pembelian Rp 100.000,00
														</p>
													</div>
												</div>
											</div>
											<div
												id="68"
												onClick={tabsVoucherHandler}
												className={`voucher__kode VOUCHER-SELECTED group mb-2 flex  items-center justify-between border border-white p-2 transition-all duration-700 ease-in-out ${
													voucherID === "68" ? "bg-white" : ""
												}`}
											>
												<div
													id="68"
													onClick={tabsVoucherHandler}
													className={`flex flex-row items-center transition-all duration-700 ease-in-out group-hover:text-med-brown ${
														voucherID === "68" ? "text-med-brown" : "text-white"
													}`}
												>
													<TbDiscount2 size={28} />
													<div id="68" onClick={tabsVoucherHandler}>
														<p
															id="68"
															onClick={tabsVoucherHandler}
															className="ml-8 text-xs font-bold lg:text-base"
														>
															Potongan 68%
														</p>
														<p
															id="68"
															onClick={tabsVoucherHandler}
															className="ml-8 text-xs"
														>
															Minimum pembelian Rp 100.000,00
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="cp__card__ringkasan">
											<div className="mb-7">
												<p className="mb-3 text-lg font-bold">
													Ringkasan Belanja
												</p>
												<div className="flex items-center">
													<div className="w-20 border-b-2 border-med-brown" />
													<div className="h-2 w-2 rounded-full bg-med-brown"></div>
												</div>
											</div>
											<div className="ringkasan__text mb-7 flex flex-col gap-2 text-xs lg:text-base">
												<div className="flex justify-between ">
													<p>Total Belanja</p>
													<p className="font-bold">
														{currencyIDR(overviewTotal)}
													</p>
												</div>
												<div className="flex justify-between">
													<p>Diskon</p>
													<p className="font-bold">-</p>
												</div>
												<div className="flex justify-between">
													<p>Jumlah Pembayaran</p>
													<p className="font-bold">
														{currencyIDR(overviewTotal)}
													</p>
												</div>
											</div>
										</div>
										<div className="relative h-10 w-full">
											<Link to={"/placeorder"}>
												<button className="btn-grad absolute right-0 bottom-0 rounded-full py-2 px-5 text-xs text-white sm:text-base">
													Lanjutkan Pesanan
												</button>
											</Link>
										</div>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
