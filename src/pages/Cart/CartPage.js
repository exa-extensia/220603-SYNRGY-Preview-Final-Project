import "./cartpage.css";

import Navbar from "../../components/sections/_navbar/Navbar";
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
import illst from "../../assets/images/cart-illst.png";
import Skeleton from "@mui/material/Skeleton";

import { Link } from "react-router-dom";

import Footer from "../../components/sections/_footer/Footer";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCart, getAllCart } from "../../redux/cart/cartSlice";

import axios from "axios";
import currencyIDR from "../../utils/currencyIDR";
import { toast } from "react-toastify";

export default function CartPage() {
	const dispatch = useDispatch();
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
	const [items, setItems] = useState([]);
	// const [variant, setVariant] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	useEffect(() => {
		scrollTop();
		// dispatch(getAllCart());
		// console.log("dispatch");
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
				setItems(data.items);
				// setVariant(data.items.items);
				console.log(data);
			})
			.catch((error) => {
				setIsLoading(false);
				console.log(error);
				setIsError(true);
			});
	}, [dispatch]);

	const { isSuccess, message } = useSelector((state) => state.cart);

	return (
		<>
			<Navbar />
			<section id="cartpage">
				{!isLoading && isError && <div>unexpected isError</div>}
				<div className="cp__wrapper">
					<div className="cp__breadcrumbs">
						<Breadcrumb />
					</div>
					<div className="cp__totalqty mt-10 mb-6 flex w-full items-center gap-2 bg-cream p-4 font-bold text-brown xl:px-8">
						<div className="text-brown">
							<HiCheck />
						</div>
						<p>xx Produk Terpilih</p>
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
							{!isLoading && isError && (
								<div>unexpected error masyaallah dev nya pusing</div>
							)}
							{!isLoading &&
								!isError &&
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
																<img
																	src="https://source.unsplash.com/random/?skincare"
																	alt="cp__product"
																/>
															</div>
															<div className="input__text">
																<p>{v.name}</p>
																<p>Rp{v.price}</p>
															</div>
															<div className="input__qty ">
																{/* <div
																	onClick={() => inputQuantityHandler("dec")}
																>
																	<HiMinusSm />
																</div> */}
																<p className="rounded-full bg-med-brown px-2 py-1 text-xs text-white">
																	{v.quantity} barang
																</p>
																{/* <div
																	onClick={() => inputQuantityHandler("inc")}
																>
																	<HiPlusSm />
																</div> */}
															</div>
															<div className="input__price ">
																<p>Rp{v.subTotal}</p>
															</div>
															<div className="col-start-3 row-start-1 justify-self-end  lg:col-start-5">
																<button
																	onClick={(e) => {
																		dispatch(deleteCart(v.variantId));

																		if (isSuccess) {
																			const splash = i.items.splice(index, 1);
																			console.log(">>>>>>splash", splash);
																			console.log(">>>>>>length", items.length);
																			if (i.items.length === 0) {
																				items.splice(indexLuar, 1);
																			}

																			// window.location.reload();
																		}
																	}}
																	className="rounded-full bg-white p-1 text-danger hover:bg-danger hover:text-white"
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
								{!isLoading && !isError && (
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
												<p className="font-bold">Rp{overview.total}</p>
											</div>
											<div className="flex justify-between">
												<p>Diskon</p>
												<p className="font-bold">-</p>
											</div>
											<div className="flex justify-between">
												<p>Jumlah Pembayaran</p>
												<p className="font-bold">Rp{overview.total}</p>
											</div>
										</div>
										<Link to={"/placeorder"}>
											<button className="btn-grad w-full rounded-full py-2   text-white">
												Checkout
											</button>
										</Link>
									</div>
								)}
								{/* <img src={illst} alt="" />  */}
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
