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
import { useParams } from "react-router-dom";

import { addToCart } from "../../redux/cart/cartSlice";

import { FaLeaf } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import Rating from "@mui/material/Rating";

import axios from "axios";

export default function ProductBrand() {
	function scrollTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	// const { user } = useSelector((state) => state.auth);
	// const needLogin = () => {
	// 	toast("Wah harus login dulu nih :)");
	// };

	// const PAGE_SIZE = 40;
	// const [page, setPage] = useState(0);
	// const handlePageClick = (e, val) => {
	// 	setPage(val - 1);
	// };

	const params = useParams();
	const [brand, setBrand] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		scrollTop();
		axios
			.get(`https://cosmetic-b.herokuapp.com/api/v1/brand/${params.id}`)
			.then((response) => {
				console.log(response.data);
				setLoading(false);
				setBrand(response.data.data);
			})
			.catch((error) => {
				setLoading(false);
				console.log(error);
				setError(true);
			});
	}, [params.id]);

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
							<div className="relative -mb-6 h-[200px] w-full overflow-hidden rounded-md lg:h-[300px]">
								{loading ? (
									<Skeleton
										variant="rectangular"
										animation="wave"
										className="h-full w-full"
									/>
								) : (
									<>
										<img
											src={brand.banner}
											alt="brand"
											className="h-full w-full bg-cover bg-center bg-no-repeat object-cover"
										/>
										<div className="absolute bottom-0 left-0 z-10  h-[200px] w-full bg-gradient-to-t from-white "></div>
									</>
								)}
							</div>
							<div className="pl__main--header text-med-brown ">
								<h1 className="pl__brandcount text-2xl tracking-wider  ">
									{loading ? "loading" : `Brand: ${brand.name}`}
								</h1>
								<div className="pl__product-sort">
									Jumlah Produk: {brand.product?.length}
								</div>
							</div>
							<div className="pl__main--list">
								{loading &&
									brand.product?.map(() => (
										<>
											<Skeleton
												variant="rectangular"
												height={300}
												animation="wave"
											/>
										</>
									))}
								{!loading &&
									!error &&
									brand.product?.map((item) => (
										<div className="relative">
											{/* <div className="absolute top-0 right-0 z-10 -translate-x-3 translate-y-3">
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
											</div> */}
											<Link to={`/productdetail/${item.id}`}>
												<div
													className="pt__card relative flex flex-col items-center"
													key={item.id}
												>
													<div className="pt__card__img">
														<img src={item.images[0]} alt="pt" />
													</div>
													<div className="pt__card__text hover:cursor-pointer">
														<p className="brand hover:cursor-pointer">
															{brand.name}
														</p>
														<p className="desc hover:cursor-pointer">
															{item.name}
														</p>
														<p className="price hover:cursor-pointer">
															Rp20.000
														</p>
														<div className="rating">
															<Rating
																defaultValue={3.5}
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
								{!loading && error && <div>unexpected error</div>}
							</div>
							<div className="pl__main--bottom">
								{/* <Pagination
									size={products.numberOfPages}
									handlePageClick={handlePageClick}
								/> */}
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
