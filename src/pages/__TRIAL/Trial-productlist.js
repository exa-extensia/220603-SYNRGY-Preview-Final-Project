import "./trial-productlist.css";

import Breadcrumb from "./Trial-breadcrumbs";
import Navbar from "../../components/sections/_navbar/Navbar";
import Footer from "../../components/sections/footer/Footer";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Trial-pagination";

export default function ProductList() {
	const [cars, setCars] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetchCars = () => {
		axios
			.get("https://rent-cars-api.herokuapp.com/admin/car")
			.then((res) => {
				console.log(res);
				setCars(res.data);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
				setError(true);
			});
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
								{!loading &&
									!error &&
									cars.map((oneCar) => (
										<Link to={`/detail/${oneCar.id}`}>
											<div key={oneCar.id} className="card__onecard col-span-1">
												<img
													src={oneCar.image}
													alt={oneCar.name}
													className="card__img"
												/>
												<div className="card__title">
													{oneCar.name} / {oneCar.category}{" "}
												</div>
												<div className="card__price">
													Rp{oneCar.price?.toLocaleString()} / hari{" "}
												</div>
												<div className="card__desc">
													Lorem ipsum dolor sit amet consectetur adipisicing
													elit. Impedit, reprehenderit.
												</div>
											</div>
										</Link>
									))}
								{!loading && error && <div>unexpected error</div>}
							</div>
							<div className="pl__main--bottom">
								<Pagination />
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
