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
import illst from "../../assets/images/cartempty-illst.svg";
import Skeleton from "@mui/material/Skeleton";
import thousandSeparator from "../../utils/thousandSeparator";
import { toast } from "react-toastify";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	deleteCart,
	getAllCart,
	deleteCartBadge,
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
	}, [dispatch]);

	const quantityCartBadge = useSelector((state) => state.cart.cartBadge);

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
							<img src={illst} alt="cartkosong" className="my-6 sm:w-6/12" />
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
																{/* <div
																	onClick={() => inputQuantityHandler("dec")}
																>
																	<HiMinusSm />
																</div> */}
																<p className="rounded-full bg-cream px-3 py-1 text-xs font-light text-med-brown">
																	<span className="mr-1 text-sm font-bold">
																		{v.quantity}
																	</span>{" "}
																	barang
																</p>
																{/* <div
																	onClick={() => inputQuantityHandler("inc")}
																>
																	<HiPlusSm />
																</div> */}
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
													</div>
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
