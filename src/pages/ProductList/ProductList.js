import "./productlist.css";
import Skeleton from "@mui/material/Skeleton";

import Breadcrumb from "../../components/atoms/breadcrumb/Trial-breadcrumbs";
import Navbar from "../../components/sections/_navbar/Navbar";
import Footer from "../../components/sections/_footer/Footer";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Pagination from "../../components/atoms/Trial-pagination";

import { getAllProducts } from "../../redux/product/productSlice";

import { FaLeaf } from "react-icons/fa";
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
						<div className="pl__filter">Filter</div>
						<div className="pl__main">
							<div className="pl__main--header text-med-brown ">
								<div className="pl__product-count ">
									Jumlah Produk: {products.length}
								</div>
								<div className="pl__product-sort">Sort</div>
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
															defaultValue={2.5}
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
