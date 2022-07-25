import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import axios from "axios";
import { CircularProgress } from "@mui/material";

export default function ProductFilter() {
	const [brand, setBrand] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	useEffect(() => {
		axios
			.get("https://cosmetic-b.herokuapp.com/api/v1/brand")
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
	}, []);

	return (
		<div className="pl__filter p-6">
			<div className="">
				<h1 className="text-2xl tracking-wider">Filter</h1>
				<div className="my-2 flex items-center">
					<div className="w-20 border-b-2 border-white" />
					<div className="h-2 w-2 rounded-full bg-white"></div>
				</div>
			</div>

			<div className="mt-8 flex flex-col gap-2">
				<a
					className="transition-all duration-150 ease-in-out hover:font-bold hover:tracking-wider"
					href="/productlist"
				>
					Produk Semua
				</a>
				<a
					className="transition-all duration-150 ease-in-out hover:font-bold hover:tracking-wider"
					href="/producttrending"
				>
					Produk Trending
				</a>
				<a
					className="transition-all duration-150 ease-in-out hover:font-bold hover:tracking-wider"
					href="/productorganic"
				>
					Produk Organik
				</a>
				<div className="my-2 w-full border-b border-white" />
				<p>Brand </p>
				<div className="ml-4 flex w-full flex-col gap-2 text-xs font-extralight">
					{loading && (
						<div className="m-auto w-full">
							<CircularProgress color="inherit" />
						</div>
					)}
					{!loading &&
						!error &&
						brand.map((b, i) => (
							<Link
								key={i}
								to={`/productbrand/${b.id}`}
								className="cursor-pointer uppercase transition-all duration-150 ease-in-out  hover:tracking-wider"
							>
								{b.name}
							</Link>
						))}
					{!loading && error && <div>error :(</div>}
				</div>
				{/* <div className="mt-2">Kategori </div>
				<div className="ml-4 flex flex-col gap-2 text-xs font-extralight">
					<div>KOCH, STOKES AND MANN </div>
					<div>DENESIK, BEIER AND DENESIK </div>
					<div>BALISTRERI, HUELS AND CARROLL</div>
					<div>TREMBLAY, REINGER AND HELLER</div>
					<div>WILLIAMSON AND SONS</div>
				</div> */}
			</div>
		</div>
	);
}
