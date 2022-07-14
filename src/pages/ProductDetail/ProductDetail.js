import Breadcrumb from "../../components/atoms/breadcrumb/BC-ProductDetail";
import Navbar from "../../components/sections/_navbar/Navbar";
import Rating from "@mui/material/Rating";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { Link } from "react-router-dom";
import PDTab from "../../components/blocks/pd-tabs/Tabs";
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
	const [oneProduct, setOneProduct] = useState([]);
	const [mainImage, setMainImage] = useState("");
	const [totalPrice, setTotalPrice] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		scrollTop();
		axios
			.get(`https://cosmetic-b.herokuapp.com/api/v1/product/${params.id}`)
			.then((response) => {
				console.log(response.data);
				setLoading(false);
				setOneProduct(response.data.data);
				setMainImage(response.data.data.images);
				setTotalPrice(response.data.data.variant[0].price);
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
		} else {
			setQuantity(quantity + 1);
		}
	};

	const addToCartHandler = (e) => {
		e.preventDefault();
		const itemData = {
			quantity,
			variantId: oneProduct.variant[0].id,
			// brandId: oneProduct.brand.id,
		};
		dispatch(addToCart(itemData));
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
								<div className=" col-span-4 flex h-fit w-full flex-col   sm:col-span-5 sm:col-start-4 lg:col-span-3 lg:col-start-10">
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
										<img src={mainImage} alt="main img" />
									</div>
									<div className="img__others">
										<div className="img__other">
											<img
												src={oneProduct.images}
												alt="pd"
												onClick={() => setMainImage(oneProduct.images)}
											/>
										</div>
										<div className="img__other">
											<img
												src="https://source.unsplash.com/random/?cosmetic?sig=1"
												alt="pd"
												onClick={() =>
													setMainImage(
														"https://source.unsplash.com/random/?cosmetic?sig=1"
													)
												}
											/>
										</div>
										<div className="img__other">
											<img
												src="https://source.unsplash.com/random/?cosmetic?sig=2"
												alt="pd"
												onClick={() =>
													setMainImage(
														"https://source.unsplash.com/random/?cosmetic?sig=2"
													)
												}
											/>
										</div>
									</div>
								</div>
								<div className="h-3/12 col-span-4 aspect-[4/3]  sm:col-span-5 lg:col-span-6">
									<h2 className="mb-3 text-xl lg:text-[24px]">
										{oneProduct.name}
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
										Rp{oneProduct.variant[0].price.toLocaleString("id-ID")}
									</p>
									<div className="pd__rating">
										<Rating
											defaultValue={oneProduct.average}
											precision={0.5}
											readOnly
											size="small"
										/>
									</div>
									<div className="pd__variant">
										<div className="variantA"></div>
										<div className="variantB"></div>
									</div>
									<div className="pd__brand mb-10 mt-10 flex w-full items-center gap-4 rounded-lg bg-cream py-4 px-4 pt-3 lg:w-3/4 xl:w-2/4">
										<div className="aspect-square h-12 overflow-hidden rounded-md">
											<img
												src="https://source.unsplash.com/random/?brand"
												alt="brand"
											/>
										</div>
										<div>
											<p className="text-[12px] text-brown">Brand</p>
											<p className="text-lg font-bold uppercase text-black">
												{oneProduct.brand.name}
											</p>
										</div>
									</div>
									<PDTab />
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
												className="flex aspect-square w-7 cursor-pointer items-center justify-center  rounded-full bg-cream text-brown transition-all duration-300 hover:bg-med-brown hover:text-white"
												onClick={(e) => {
													e.preventDefault();
													quantityHandler("dec");
												}}
											>
												<HiMinusSm />
											</div>
											<p className="font-bold text-brown">{quantity}</p>
											<div
												className="flex aspect-square w-7 cursor-pointer items-center justify-center  rounded-full bg-cream text-brown transition-all duration-300 hover:bg-med-brown hover:text-white"
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
											className="btn-grad w-full rounded-full py-2 px-5 text-xs text-white "
										>
											Add to Cart
										</button>
										{/* <Link
											to={`/cart`}
											className="btn-sec w-full rounded-full py-2 px-5 text-xs"
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
