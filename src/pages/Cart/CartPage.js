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

import { Link } from "react-router-dom";

import Footer from "../../components/sections/_footer/Footer";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCart } from "../../redux/cart/cartSlice";

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

	const { data, isError, isSuccess, message } = useSelector(
		(state) => state.cart
	);
	const [isLoading, setIsLoading] = useState(true);
	// const [isError, setIsError] = useState(false);
	const [overview, setOverview] = useState({});
	const [items, setItems] = useState([]);
	const [variant, setVariant] = useState([]);

	useEffect(() => {
		scrollTop();
		dispatch(getAllCart());
		// if (data) {
		// 	setIsLoading(false);
		// 	setIsError(false);
		// 	setOverview(data.overview);
		// 	setItems(data.items);
		// 	setVariant(data.items.items);
		// 	console.log("data yes");
		// } else if (!isLoading && !data && isError) {
		// 	console.log("error");
		// } else if (isLoading && !data) {
		// 	setIsLoading(true);
		// } else if (!data) {
		// 	setIsLoading("no data");
		// }

		if (isError) {
			console.log(message, "error");
		}

		if (isSuccess || data) {
			setIsLoading(false);
			setOverview(data.overview);
			setItems(data.items);
			setVariant(data.items.items);
			console.log("data yes");
		}
	}, [dispatch, isError, isSuccess, message]);

	return (
		<>
			<Navbar />
			<section id="cartpage">
				<div className="cp__wrapper">
					<div className="cp__breadcrumbs">
						<Breadcrumb />
					</div>
					<div className="cp__totalqty mt-10 mb-6 flex w-full items-center gap-2 bg-cream p-4 font-bold text-brown xl:px-8">
						<div className="text-brown">
							<HiCheck />
						</div>
						<p>3 Produk Terpilih</p>
					</div>
					<div className="cp__2cols">
						<div className="cp__product__card__wrapper">
							{isLoading && <div>loading</div>}
							{!isLoading && isError && (
								<div>unexpected error masyaallah dev nya pusing</div>
							)}
							{!isLoading &&
								!isError &&
								items.map((items, index) => (
									<div className="cp__card">
										<div key={index} className="cp__brand">
											<div className="hidden aspect-square h-12 overflow-hidden rounded-md sm:block">
												<img src={items.banner} alt="brand" />
											</div>
											<div>
												<p className="text-sm font-bold uppercase text-black sm:text-lg">
													{items.brandName}
												</p>
											</div>
										</div>
										<div className="my-4 border-b border-brown sm:my-6" />
										<div className="flex flex-col gap-4">
											{isLoading && <div>loading</div>}
											{!isLoading && isError && (
												<div>unexpected error masyaallah dev nya pusing</div>
											)}
											{!isLoading &&
												!isError &&
												variant.map((variant, index) => (
													<div key={index} className="cp__satubrand__input">
														<div className="cp__input">
															<div className="input__img">
																<img
																	src="https://source.unsplash.com/random/?skincare"
																	alt="cp__product"
																/>
															</div>
															<div className="input__text">
																<p>{variant.name}</p>
																<p>Rp{variant.price}</p>
															</div>
															<div className="input__qty ">
																<div
																	onClick={() => inputQuantityHandler("dec")}
																>
																	<HiMinusSm />
																</div>
																<p>{variant.quantity}</p>
																<div
																	onClick={() => inputQuantityHandler("inc")}
																>
																	<HiPlusSm />
																</div>
															</div>
															<div className="input__price ">
																<p>Rp{variant.subTotal}</p>
															</div>
															<div className="col-start-3 row-start-1 justify-self-end  lg:col-start-5">
																<button className="rounded-full bg-white p-1 text-danger hover:bg-danger hover:text-white">
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
							{/* <img src={illst} alt="" />  */}
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
