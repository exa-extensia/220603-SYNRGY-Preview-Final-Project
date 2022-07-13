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

import axios from "axios";

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

	const [inPageItems, setInPageItems] = useState([]);
	useEffect(() => {
		scrollTop();
		dispatch(getAllCart());
		console.log("dispatch");
		// const token = JSON.parse(localStorage.getItem("token"));
		// axios
		// 	.get(`https://cosmetic-b.herokuapp.com/api/v1/carts`, {
		// 		headers: {
		// 			Authorization: `Bearer ${token}`,
		// 		},
		// 	})
		// 	.then((response) => {
		// 		setItems(response.data.data.items);
		// 	})
		// 	.catch((error) => {
		// 		// setLoading(false);
		// 		console.log(error);
		// 		// setError(true);
		// 	});
	}, [dispatch]);

	const { data, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.cart
	);
	const overview = data.overview;
	const items = data.items;
	console.log(data);
	console.log(isLoading, "isLoading");
	console.log(isError, "isError");
	console.log(isSuccess, "isSuccess");

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
						<p>3 Produk Terpilih</p>
					</div>
					<div className="cp__2cols">
						<div className="cp__product__card__wrapper">
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
										{items.items.map((variant, index) => (
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
														<p>Rp{variant.price.toLocaleString("id-ID")}</p>
													</div>
													<div className="input__qty ">
														<div onClick={() => inputQuantityHandler("dec")}>
															<HiMinusSm />
														</div>
														<p>xx</p>
														<div onClick={() => inputQuantityHandler("inc")}>
															<HiPlusSm />
														</div>
													</div>
													<div className="input__price ">
														<p>Rp{variant.subTotal.toLocaleString("id-ID")}</p>
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
								))}
						</div>
						<div className="cp__output__card__wrapper">
							{/* <div className="cp__card__voucher">
								<div className="mb-7">
									<p className="mb-3 text-lg font-bold">Voucher Diskon</p>
									<div className="flex items-center">
										<div className="w-20 border-b-2 border-med-brown" />
										<div className="h-2 w-2 rounded-full bg-med-brown"></div>
									</div>
								</div>
								<p className="mb-2 text-sm">
									Pilih dan masukkan voucher diskon untuk mendapatkan potongan
									harga.
								</p>
								<div className="voucher__kode mb-2 flex items-center justify-between  border border-brown p-2">
									<div className="flex flex-row items-center">
										<HiOutlineScissors size={28} color="#A67A4A" />
										<p className="ml-8 text-xs lg:text-base">
											Masukan Kode Promo
										</p>
									</div>

									<div className=" bg-brown py-1 px-2 font-semibold text-white">
										Klaim
									</div>
								</div>

								<div className="voucher__list mb-2 flex items-center gap-8 border border-brown p-2">
									<HiOutlineTicket color="#A67A4A" size={28} />
									<p className="w-56 text-xs lg:text-base">
										Lihat voucher diskon yang tersedia untukmu
									</p>
									<HiOutlineChevronRight color="#A67A4A" size={28} />
								</div>
							</div> */}
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
