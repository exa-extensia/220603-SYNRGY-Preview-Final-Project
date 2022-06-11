import "./trial-productlist.css";

import Breadcrumb from "./Trial-breadcrumbs";
import Navbar from "../../components/sections/_navbar/Navbar";
import Footer from "../../components/sections/footer/Footer";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Trial-pagination";

export default function ProductList() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [publishdata, setPublishData] = useState([]);
	const [page, setPage] = useState(0);
	const [perPage] = useState(8);
	const [offset, setOffset] = useState(1);

	const getPostData = (data) => {
		return data.map((oneProduct) => (
			<Link to={`/detail/${oneProduct.id}`}>
				<div key={oneProduct.id} className="card__onecard col-span-1">
					<div className="card__img">
						<img src={oneProduct.image} alt={oneProduct.title} />
					</div>
					<div className="card__category font-bold">{oneProduct.category}</div>
					<div className="card__title">{oneProduct.title}</div>
					<div className="card__price">
						Rp{oneProduct.price?.toLocaleString()}{" "}
					</div>
				</div>
			</Link>
		));
	};

	const fetchCars = async () => {
		try {
			const res = await axios.get("https://fakestoreapi.com/products");
			console.log(res.data);
			setLoading(false);
			const data = res.data;
			const slice = data.slice(offset - 1, offset - 1 + perPage);
			// For displaying Data
			const postData = getPostData(slice);
			// Using Hooks to set value
			setPublishData(postData);
			setPage(Math.ceil(data.length / perPage));
			console.log("DATA LENGTH >>>", data.length);
			console.log("PAGE COUNT >>>", page);
		} catch (error) {
			console.log(error);
			setLoading(false);
			setError(true);
		}
	};

	const handlePageClick = (e) => {
		const selectedPage = e.selected;
		console.log(selectedPage);
		setOffset(selectedPage + 1);
	};

	useEffect(() => {
		setLoading(true);
		fetchCars();
	}, []);

	return (
		<>
			<Navbar />
			<section id="productlist">
				<div className="pl__wrapper">
					<div className="pl__breadcrumbs">
						<Breadcrumb />
					</div>
					<div className="pl__2cols">
						<div className="pl__filter"></div>
						<div className="pl__main">
							<div className="pl__main--header"></div>
							<div className="pl__main--list">
								{loading && <div>loading...</div>}
								{!loading && !error && <>{publishdata}</>}
								{!loading && error && <div>unexpected error</div>}
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
