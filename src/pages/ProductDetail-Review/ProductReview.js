import Breadcrumb from "../../components/atoms/breadcrumb/BC-ProductReview";
import Navbar from "../../components/sections/_navbar/Navbar";
import Rating from "@mui/material/Rating";
import { FaRegKissWinkHeart, FaRegTired } from "react-icons/fa";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import Footer from "../../components/sections/_footer/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaLeaf } from "react-icons/fa";
import Skeleton from "@mui/material/Skeleton";
import { toast } from "react-toastify";

import texture from "../../assets/icons/review/texture.png";
import price from "../../assets/icons/review/price.png";
import quality from "../../assets/icons/review/quality.png";
import packaging from "../../assets/icons/review/packaging.png";

import axios from "axios";

export default function ProductReview() {
	const navigate = useNavigate();
	function scrollTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	const params = useParams();
	const [oneProduct, setOneProduct] = useState([]);
	const [mainImage, setMainImage] = useState(0);
	const [totalPrice, setTotalPrice] = useState();
	const [review, setReview] = useState([]);
	const [reviewScore, setReviewScore] = useState({});

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const [ratingTexture, setRatingTexture] = useState(0);
	const [ratingQuality, setRatingQuality] = useState(0);
	const [ratingPackaging, setRatingPackaging] = useState(0);
	const [ratingPrice, setRatingPrice] = useState(0);
	const [comment, setComment] = useState("");
	const [recommendation, setRecommendation] = useState("");

	const tabsRecommendationHandler = (e) => {
		setRecommendation(e.target.id);
	};

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
	}, [params.id]);

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
									<h2 className="mb-3 mt-6 text-xl lg:text-[24px]">
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
									<Link
										to={`/productbrand/${oneProduct.brand.id}`}
										className="HOVER-BRAND pd__brand mt-6 mb-10 flex w-full items-center gap-4 rounded-lg bg-cream px-4 py-4 pt-3"
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
								</div>
								<div className="col-span-4 aspect-[4/3] sm:col-span-5 lg:col-span-6">
									<div className="JUDUL flex flex-col">
										<p className="mx-auto mb-4 font-bold">
											Yuk, Nilai Setiap Detail Produk Ini
										</p>
										<div className="STYLED-HR mx-auto">
											<div className="flex items-center">
												<div className="h-2 w-2 rounded-full bg-med-brown"></div>
												<div className="w-40 border-b-2 border-med-brown" />
												<div className="h-2 w-2 rounded-full bg-med-brown"></div>
											</div>
										</div>
									</div>
									<div className="RATING my-8 flex flex-col items-center justify-center gap-6">
										<div className="TEXTURE flex flex-row items-center gap-3">
											<img
												alt="review-icon"
												className="object-contain"
												src={texture}
											/>
											<div className="flex flex-col">
												<p className="font-bold">Tekstur</p>
												<Rating
													defaultValue={ratingTexture}
													precision={0.5}
													size="small"
												/>
											</div>
										</div>
										<div className="QUALITY flex flex-row items-center gap-3">
											<img
												alt="review-icon"
												className="object-contain"
												src={quality}
											/>
											<div className="flex flex-col">
												<p className="font-bold">Kualitas</p>
												<Rating
													defaultValue={ratingQuality}
													precision={0.5}
													size="small"
												/>
											</div>
										</div>
										<div className="PACKAGING flex flex-row items-center gap-3">
											<img
												alt="review-icon"
												className="object-contain"
												src={packaging}
											/>
											<div className="flex flex-col">
												<p className="font-bold">Packaging</p>
												<Rating
													defaultValue={ratingPackaging}
													precision={0.5}
													size="small"
												/>
											</div>
										</div>
										<div className="PRICE flex flex-row items-center gap-3">
											<img
												alt="review-icon"
												className="object-contain"
												src={price}
											/>
											<div className="flex flex-col">
												<p className="font-bold">Harga</p>
												<Rating
													defaultValue={ratingPrice}
													precision={0.5}
													size="small"
												/>
											</div>
										</div>
									</div>
									<div className="REKOMENDASI flex flex-col items-center justify-center">
										<p className="mb-4 font-bold">
											Apa kamu merekomendasikan produk ini?
										</p>
										<div className="flex flex-row items-center gap-3">
											<div
												id="yes"
												className={`${
													recommendation === "yes" ? "bg-cream " : ""
												} btn-sec-review flex cursor-pointer flex-row items-center gap-2 rounded-full px-3 py-2 text-brown`}
												onClick={tabsRecommendationHandler}
											>
												<FaRegKissWinkHeart size={22} />
												<p
													id="yes"
													onClick={tabsRecommendationHandler}
													className="cursor-pointer text-sm font-semibold"
												>
													Ya, pastinya!
												</p>
											</div>
											<div
												id="no"
												onClick={tabsRecommendationHandler}
												className={`${
													recommendation === "no" ? "bg-cream " : ""
												} btn-sec-review flex cursor-pointer flex-row items-center gap-2 rounded-full px-3 py-2 text-brown`}
											>
												<FaRegTired size={22} />
												<p
													id="no"
													onClick={tabsRecommendationHandler}
													className="cursor-pointer text-sm font-semibold"
												>
													Tidak, maaf!
												</p>
											</div>
										</div>
									</div>
									<div className="KOMENTAR mt-8 flex flex-col items-center justify-center">
										<p className="mb-4 font-bold">Berikan komentar mu!</p>
										<textarea
											onKeyPress={(e) => {
												e.key === "Enter" && e.preventDefault();
											}}
											type="text"
											className="mx-auto w-[400px] resize-none rounded-md border p-2 px-2 placeholder:text-xs"
											rows={4}
											placeholder="kamu bebas berekspresi :)"
											name="komentar"
										/>
									</div>
								</div>
								<div className="col-span-4 flex h-fit w-full flex-col bg-white sm:col-span-5 sm:col-start-4 lg:col-span-3 lg:col-start-10">
									<h1 className="text-2xl tracking-wide text-med-brown">
										Terima kasih untuk penilaianmu! :)
									</h1>
									<p className="mt-4 text-xs text-med-brown">
										admin akan memproses feedback dari kamu!
									</p>
									<div className=" my-6 w-full border-b-2 border-[#d2a866]"></div>
									<div className=" flex w-full gap-4">
										<HiOutlineQuestionMarkCircle
											size={28}
											className="text-brown"
										/>
										<div className="flex flex-col gap-4">
											<p className="font-bold">
												Punya pertanyaan seputar produk?
											</p>
											<div>
												<p className="font-bold text-brown">Email</p>
												<p>cs@flambo.com</p>
											</div>
											<div>
												<p className="font-bold text-brown">Whatsapp</p>
												<p>+6282 3355 3778</p>
											</div>
										</div>
									</div>
									<div className="mt-10 flex w-full items-center gap-2">
										<button
											onClick={() => navigate(-1)}
											className="btn-sec  rounded-full py-2 px-5  text-xs xl:text-base"
										>
											Kembali
										</button>
										<button
											onClick={() =>
												toast("reviewmu sudah kami tampung dahulu! :)")
											}
											className="btn-grad  rounded-full py-2 px-5 text-xs text-white  xl:text-base"
										>
											Submit Review
										</button>
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
