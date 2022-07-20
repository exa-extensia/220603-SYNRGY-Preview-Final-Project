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
	const [mainImage, setMainImage] = useState(0);
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
                                <div className="flex flex-col w-full col-span-4 h-fit sm:col-span-5 sm:col-start-4 lg:col-span-3 lg:col-start-10">
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
                                        <img
                                            src={oneProduct.images[mainImage]}
                                            alt="main img"
                                        />
                                    </div>
                                    <div className="img__others">
                                        {oneProduct.images.map((image, idx) => (
                                            <div
                                                className={`${
                                                    mainImage === idx
                                                        ? "border-[3px]"
                                                        : "border-0"
                                                } img__other border-brown`}
                                            >
                                                <img
                                                    src={image}
                                                    alt="pd"
                                                    onClick={() =>
                                                        setMainImage(idx)
                                                    }
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="h-3/12 col-span-4 aspect-[4/3] sm:col-span-5 lg:col-span-6">
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
                                    <p className="mb-3 text-xl font-bold price text-brown">
                                        Rp
                                        {oneProduct.variant[0].price.toLocaleString(
                                            "id-ID"
                                        )}
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
                                    <div className="flex items-center w-full gap-4 px-4 py-4 pt-3 mt-10 mb-10 rounded-lg pd__brand bg-cream lg:w-3/4 xl:w-2/4">
                                        <div className="h-12 overflow-hidden rounded-md aspect-square">
                                            <img
                                                src="https://source.unsplash.com/random/?brand"
                                                alt="brand"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-[12px] text-brown">
                                                Brand
                                            </p>
                                            <p className="text-lg font-bold text-black uppercase">
                                                {oneProduct.brand.name}
                                            </p>
                                        </div>
                                    </div>
                                    <PDTab />
                                </div>
                                <div className="flex flex-col w-full col-span-4 p-5 bg-white pd__input h-fit sm:col-span-5 sm:col-start-4 lg:col-span-3 lg:col-start-10">
                                    <div className="mb-7">
                                        <p className="mb-3 text-lg font-bold">
                                            Ringkasan Belanja
                                        </p>
                                        <div className="flex items-center">
                                            <div className="w-20 border-b-2 border-med-brown" />
                                            <div className="w-2 h-2 rounded-full bg-med-brown"></div>
                                        </div>
                                    </div>

                                    <div className="mb-7">
                                        <p className="mb-3 text-[16px] font-semibold">
                                            Jumlah
                                        </p>
                                        <div className="flex items-center gap-6 input__jumlah">
                                            <div
                                                className="flex items-center justify-center transition-all duration-300 rounded-full cursor-pointer aspect-square w-7 bg-cream text-brown hover:bg-med-brown hover:text-white"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    quantityHandler("dec");
                                                }}
                                            >
                                                <HiMinusSm />
                                            </div>
                                            <p className="font-bold text-brown">
                                                {quantity}
                                            </p>
                                            <div
                                                className="flex items-center justify-center transition-all duration-300 rounded-full cursor-pointer aspect-square w-7 bg-cream text-brown hover:bg-med-brown hover:text-white"
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
                                        <p className="mb-3 text-[16px] font-semibold">
                                            Subtotal
                                        </p>
                                        <p className="text-[20px] font-bold text-brown">
                                            Rp
                                            {(
                                                totalPrice * quantity
                                            ).toLocaleString("id-ID")}
                                        </p>
                                    </div>
                                    <div className="flex gap-4 lg:flex-col 2xl:flex-row">
                                        <button
                                            onClick={
                                                user
                                                    ? addToCartHandler
                                                    : needLogin
                                            }
                                            className="w-full px-5 py-2 text-xs text-white rounded-full btn-grad "
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
