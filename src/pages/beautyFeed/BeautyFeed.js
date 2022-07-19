import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../components/sections/_navbar/Navbar";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";
import Footer from "../../components/sections/_footer/Footer";
import SubBeautyFeed from "./SubBeautyFeed";
import PaginationArticle from "./PaginationArticle";

export default function BeautyFeed() {
	const [article, setArticle] = useState([]);
	const [loading, setLoading] = useState(false);

	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(6);

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItem = article.slice(indexOfFirstItem, indexOfLastItem);

	const firstData = article[0];
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const res = await axios(
				`https://cosmetic-b.herokuapp.com/api/v1/article`
			);
			setArticle(res.data.data);
			setLoading(false);
			console.log(res.data.data);
		};

		fetchData();
	}, []);

	return (
		<>
			<Navbar />

			<div className="text-center">
				<h1 className="my-5 text-center ">Artikel Terbaru</h1>
				<div className="mb-8 grid grid-flow-col grid-rows-2  justify-center md:flex">
					<button className=" mx-8 my-2 rounded-full border-2 px-4 py-2 text-sm">
						Semua
					</button>
					<button className=" mx-8 my-2 rounded-full border-2 px-4 py-2 text-sm">
						Skin Care
					</button>
					<button className=" mx-8 my-2 rounded-full border-2 px-4 py-2 text-sm">
						Make Up
					</button>
					<button className=" mx-8 my-2 rounded-full border-2 px-4 py-2 text-sm">
						Organik
					</button>
				</div>
				<div className=" mx-auto w-[85%] grid-cols-2 gap-8 sm:grid lg:grid-cols-3">
					<SubBeautyFeed article={currentItem} loading={loading} />
				</div>
			</div>
			<PaginationArticle
				itemsPerPage={itemsPerPage}
				totalItems={article.length}
				paginate={paginate}
			/>
			<Footer />
		</>
	);
}
