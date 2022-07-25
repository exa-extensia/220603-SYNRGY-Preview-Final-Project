import Breadcrumb from "../../components/atoms/breadcrumb/BC-ProductDetail";
import Navbar from "../../components/sections/_navbar/Navbar";
import Rating from "@mui/material/Rating";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { Link } from "react-router-dom";
import PDTab from "../../components/blocks/pd-tabs/Tabs";
import ReviewTab from "../../components/blocks/pd-tabs/Tabs-Review";
import Footer from "../../components/sections/_footer/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaLeaf } from "react-icons/fa";
import Skeleton from "@mui/material/Skeleton";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/cart/cartSlice";

import axios from "axios";

export default function ProductDetail() {
	const dispatch = useDispatch();
	function scrollTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}
	const { user } = useSelector((state) => state.auth);
	const needLogin = () => {
		toast("Wah harus login dulu nih :)");
	};

	const params = useParams();
	const [oneProduct, setOneProduct] = useState({});
	const [mainImage, setMainImage] = useState(0);
	const [totalPrice, setTotalPrice] = useState();
	const [review, setReview] = useState([]);
	const [reviewScore, setReviewScore] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		scrollTop();
		axios
			.get(`https://cosmetic-b.herokuapp.com/api/v1/product/${params.id}`)
			.then((response) => {
				const data = response.data.data;
				console.log(data);
				setOneProduct(data.product);
				setTotalPrice(data.product.variants[0].price);
				setReviewScore({
					average: data.average,
					effective: data.effective,
					packaging: data.packaging,
					price: data.price,
					texture: data.texture,
				});
				setLoading(false);
			})
			.catch((error) => {
				setLoading(false);
				console.log(error);
				setError(true);
			});
		axios
			.get(`https://cosmetic-b.herokuapp.com/api/v1/review`)
			.then((response) => {
				console.log(response.data);
				setLoading(false);
				setReview(response.data.data);
			})
			.catch((error) => {
				setLoading(false);
				console.log(error);
				setError(true);
			});
	}, [params.id]);

	const [quantity, setQuantity] = useState(1);
	const quantityHandler = (type) => {
		if (type === "dec") {
			quantity > 1 && setQuantity(quantity - 1);
		} else if (type === "inc") {
			quantity < oneProduct.variants[0].quantity
				? setQuantity(quantity + 1)
				: toast("jumlah tidak bisa melebihi stok!");
		}
	};

	const addToCartHandler = (e) => {
		e.preventDefault();
		const itemData = {
			quantity,
			variantId: oneProduct.variants[0].id,
		};
		if (oneProduct.variants[0].quantity > 0) {
			dispatch(addToCart(itemData));
		} else {
			toast("stok kosong!");
		}
	};

	return (
		<>
			<Navbar />
			<section id="productdetail">
				<div className="pd__wrapper">
					<div className="pd__breadcrumbs">
						<Breadcrumb />
					</div>
					<div className="pd__3cols">
						{loading && (
							<>
								<div className="pd__img">
									<Skeleton
										variant="rectangular"
										height={300}
										animation="wave"
									/>
								</div>
								<div className="h-3/12 col-span-4 aspect-[4/3]  sm:col-span-5 lg:col-span-6">
									<Skeleton
										variant="rectangular"
										height={300}
										animation="wave"
									/>
								</div>
								<div className="col-span-4 flex h-fit w-full flex-col sm:col-span-5 sm:col-start-4 lg:col-span-3 lg:col-start-10">
									<Skeleton
										variant="rectangular"
										height={300}
										animation="wave"
									/>
								</div>
							</>
						)}
						{!loading && !error && (
							<>
								<div className="pd__img">
									<div className="img__main">
										<img src={oneProduct.images[mainImage]} alt="main img" />
									</div>
									<div className="img__others">
										{oneProduct.images.map((image, idx) => (
											<div
												className={`${
													mainImage === idx ? "border-[3px]" : "border-0"
												} img__other border-brown`}
											>
												<img
													src={image}
													alt="pd"
													onClick={() => setMainImage(idx)}
												/>
											</div>
										))}
									</div>
								</div>
								<div className="h-3/12 col-span-4 aspect-[4/3] sm:col-span-5 lg:col-span-6">
									<h2 className="mb-3 text-xl lg:text-[24px]">
										{oneProduct.variants[0].name}
									</h2>
									<div
										className={
											oneProduct.isOrganic === true
												? "mb-3 flex w-[130px] items-center  gap-2 rounded-lg bg-success py-1 px-2 text-xs text-white"
												: "hidden"
										}
									>
										<p>Organic Product</p>
										<span>
											<FaLeaf />
										</span>
									</div>
									<p className="price mb-3 text-xl font-bold text-brown">
										Rp
										{oneProduct.variants[0].price.toLocaleString("id-ID")}
									</p>
									<div className="pd__rating">
										<Rating
											defaultValue={reviewScore.average}
											precision={0.5}
											readOnly
											size="small"
										/>
									</div>
									<div className="pd__variant mt-6">
										<p className="text-sm text-med-brown">
											Stok Tersedia:{" "}
											<span className="text-base font-bold">
												{oneProduct.variants[0].quantity} buah
											</span>
										</p>
										<p className="text-sm text-med-brown">
											Berat Produk:{" "}
											<span className="text-base font-bold">
												{oneProduct.variants[0].weight} gram
											</span>
										</p>
									</div>
									<Link
										to={`/productbrand/${oneProduct.brand.id}`}
										className="HOVER-BRAND pd__brand mt-10 mb-10 flex w-full items-center gap-4 rounded-lg bg-cream px-4 py-4 pt-3 lg:w-3/4 xl:w-2/4"
									>
										<div className="aspect-square h-12 overflow-hidden rounded-md">
											<img
												src={oneProduct.brand.banner}
												alt="brand"
												className="h-full w-full bg-cover bg-center bg-no-repeat object-cover"
											/>
										</div>
										<div>
											<p className="text-[12px] text-brown">Brand</p>
											<p className="text-lg font-bold uppercase text-black">
												{oneProduct.brand.name}
											</p>
										</div>
									</Link>
									<PDTab />
									<ReviewTab reviewScore={reviewScore} />
								</div>
								<div className="pd__input col-span-4 flex h-fit w-full flex-col bg-white p-5 sm:col-span-5 sm:col-start-4 lg:col-span-3 lg:col-start-10">
									<div className="mb-7">
										<p className="mb-3 text-lg font-bold">Ringkasan Belanja</p>
										<div className="flex items-center">
											<div className="w-20 border-b-2 border-med-brown" />
											<div className="h-2 w-2 rounded-full bg-med-brown"></div>
										</div>
									</div>

									<div className="mb-7">
										<p className="mb-3 text-[16px] font-semibold">Jumlah</p>
										<div className="input__jumlah flex items-center gap-6">
											<div
												className="flex aspect-square w-7 cursor-pointer items-center justify-center rounded-full bg-cream text-brown transition-all duration-300 hover:bg-med-brown hover:text-white"
												onClick={(e) => {
													e.preventDefault();
													quantityHandler("dec");
												}}
											>
												<HiMinusSm />
											</div>
											<p className="font-bold text-brown">{quantity}</p>
											<div
												className="flex aspect-square w-7 cursor-pointer items-center justify-center rounded-full bg-cream text-brown transition-all duration-300 hover:bg-med-brown hover:text-white"
												onClick={(e) => {
													e.preventDefault();
													quantityHandler("inc");
												}}
											>
												<HiPlusSm />
											</div>
										</div>
									</div>
									<div className="mb-7">
										<p className="mb-3 text-[16px] font-semibold">Subtotal</p>
										<p className="text-[20px] font-bold text-brown">
											Rp
											{(totalPrice * quantity).toLocaleString("id-ID")}
										</p>
									</div>
									<div className="flex gap-4 lg:flex-col 2xl:flex-row">
										<button
											onClick={user ? addToCartHandler : needLogin}
											className="btn-grad w-full rounded-full px-5 py-2 text-xs text-white "
										>
											Add to Cart
										</button>
										{/* <Link
											to={`/cart`}
											className="w-full px-5 py-2 text-xs rounded-full btn-sec"
										>
											<button>Buy Now</button>
										</Link> */}
									</div>
								</div>
							</>
						)}
						{!loading && error && <div>unexpected error</div>}
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
