import "./productlist.css";
import Skeleton from "@mui/material/Skeleton";

import Breadcrumb from "../../components/atoms/breadcrumb/BC-ProductList";
import Navbar from "../../components/sections/_navbar/Navbar";
import Footer from "../../components/sections/_footer/Footer";
import ProductFilter from "./ProductFilter";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Pagination from "../../components/atoms/Trial-pagination";
import { toast } from "react-toastify";

import { getAllProducts } from "../../redux/product/productSlice";
import { addToCart } from "../../redux/cart/cartSlice";

import { FaLeaf } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import Rating from "@mui/material/Rating";

export default function ProductList() {
	function scrollTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	const [publishdata, setPublishData] = useState([]);
	const [page, setPage] = useState(0);
	const [perPage] = useState(18);
	const [offset, setOffset] = useState(1);

	const { products, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.products
	);

	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);
	const needLogin = () => {
		toast("Wah harus login dulu nih :)");
	};

	useEffect(() => {
		scrollTop();
		dispatch(getAllProducts());
		// const slice = products.slice(offset - 1, offset - 1 + perPage);
		// // For displaying Data
		// const postData = getPostData(slice);
		// // Using Hooks to set value
		// setPublishData(postData);
		// setPage(Math.ceil(products.length / perPage));
		// console.log("DATA LENGTH >>>", products.length);
		// console.log("PAGE COUNT >>>", page);
	}, [dispatch]);

	// const getPostData = () => {
	// 	return products.map((e) => (
	// 		<Link to={`/detail/${e.variant.id}`}>
	// 			<div key={e.variant.id} className="card__onecard col-span-1">
	// 				<div className="card__img">
	// 					<img src={e.images[0]} alt="err" />
	// 					<img src={e.variant} alt="err" />
	// 				</div>
	// 				<div className="card__category font-bold">{e.brand.name}</div>
	// 				<div className="card__title">{e.variant[0].id}</div>
	// 				<div className="card__title">{e.name}</div>
	// 				<div className="card__price">Rp{e.quantity} </div>
	// 			</div>
	// 		</Link>
	// 	));
	// };

	const handlePageClick = (e) => {
		const selectedPage = e.selected;
		console.log(selectedPage);
		setOffset(selectedPage + 1);
	};

	return (
		<>
			<Navbar />
			<section id="productlist">
				<div className="pl__wrapper">
					<div className="pl__breadcrumbs">
						<Breadcrumb />
					</div>
					<div className="pl__2cols">
						<ProductFilter />
						<div className="pl__main">
							<div className="pl__main--header text-med-brown ">
								<h1 className="pl__brandcount text-2xl tracking-wider  ">
									Produk Semua
								</h1>
								<div className="pl__product-sort">
									Jumlah Produk: {products.length}
								</div>
							</div>
							<div className="pl__main--list">
								{isLoading &&
									products.map(() => (
										<>
											<Skeleton
												variant="rectangular"
												height={300}
												animation="wave"
											/>
										</>
									))}
								{!isLoading &&
									!isError &&
									products.map((item) => (
										<div className="relative">
											<div className="absolute top-0 right-0 z-10 -translate-x-3 translate-y-3">
												<button
													onClick={(e) => {
														if (user) {
															e.preventDefault();
															const itemData = {
																quantity: 1,
																variantId: item.variant[0].id,
															};
															dispatch(addToCart(itemData));
														} else {
															needLogin();
														}
													}}
													className="rounded-full border border-med-brown bg-white p-1 text-med-brown transition-all duration-200 hover:animate-bounce hover:bg-med-brown  hover:text-white"
												>
													<BsCartPlus />
												</button>
											</div>
											<Link to={`/productdetail/${item.id}`}>
												<div
													className="pt__card relative flex flex-col items-center"
													key={item.id}
												>
													<div className="pt__card__img">
														<img src={item.images} alt="pt" />
													</div>
													<div className="pt__card__text hover:cursor-pointer">
														<p className="brand hover:cursor-pointer">
															{item.brand.name}
														</p>
														<p className="desc hover:cursor-pointer">
															{item.name}
														</p>
														<p className="price hover:cursor-pointer">
															Rp{item.variant[0].price.toLocaleString("id-ID")}
														</p>
														<div className="rating">
															<Rating
																defaultValue={item.average}
																precision={0.5}
																readOnly
																size="small"
															/>
														</div>
													</div>
													<div className="pt__organik absolute bottom-[3%]">
														<div
															className={
																item.isOrganic === true
																	? "flex items-center gap-2 rounded-lg  bg-success py-1 px-2 text-xs text-white"
																	: "flex items-center gap-2 rounded-lg  bg-transparent py-1 px-2 text-xs text-transparent"
															}
														>
															<p>Organic Product</p>
															<span>
																<FaLeaf />
															</span>
														</div>
													</div>
												</div>
											</Link>
										</div>
									))}
								{!isLoading && isError && <div>unexpected isError</div>}
							</div>
							<div className="pl__main--bottom">
								<Pagination page={page} handlePageClick={handlePageClick} />
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
