import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../components/sections/_navbar/Navbar";
import Breadcrumb from "../../components/atoms/breadcrumb/BC-ArticleFeed";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";
import Footer from "../../components/sections/_footer/Footer";
import SubBeautyFeed from "./SubBeautyFeed";
import PaginationArticle from "./PaginationArticle";
import { HiClock } from "react-icons/hi";
import Skeleton from "@mui/material/Skeleton";

export default function BeautyFeed() {
	// const [article, setArticle] = useState([]);
	// const [loading, setLoading] = useState(false);

	// const [currentPage, setCurrentPage] = useState(1);
	// const [itemsPerPage, setItemsPerPage] = useState(6);

	// const indexOfLastItem = currentPage * itemsPerPage;
	// const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	// const currentItem = article.slice(indexOfFirstItem, indexOfLastItem);

	// const firstData = article[0];
	// const paginate = (pageNumber) => setCurrentPage(pageNumber);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		setLoading(true);
	// 		const res = await axios(
	// 			`https://cosmetic-b.herokuapp.com/api/v1/article`
	// 		);
	// 		setArticle(res.data.data);
	// 		setLoading(false);
	// 		console.log(res.data.data);
	// 	};

	// 	fetchData();
	// }, []);

	const [article, setArticle] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	function scrollTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}
	useEffect(() => {
		scrollTop();
		axios
			.get(`https://cosmetic-b.herokuapp.com/api/v1/article`)
			.then((response) => {
				setLoading(false);
				setArticle(response.data.data);
			})
			.catch((error) => {
				setLoading(false);
				console.log(error);
				setError(true);
			});
	}, []);

	return (
		<>
			<Navbar />
			<section className="flex w-full items-center justify-center">
				<div className="container mx-4 mb-10 sm:max-w-[688px] lg:max-w-[864px] xl:max-w-[1200px]">
					<div className="cp__breadcrumbs mb-10">
						<Breadcrumb />
					</div>
					<div className="mb-10 flex w-full flex-col items-center justify-center">
						<h1 className="text-2xl">Beauty Feed</h1>
						<div className="STYLED-HR my-4 w-3/12">
							<div className="flex w-full items-center">
								<div className="h-2 w-2 rounded-full bg-med-brown"></div>
								<div className="w-full border-b-2 border-med-brown" />
								<div className="h-2 w-2 rounded-full bg-med-brown"></div>
							</div>
						</div>
					</div>
					<div className="DIV-2COLS grid grid-cols-4 gap-5 sm:grid-cols-8 lg:grid-cols-12 lg:gap-6">
						<div className="DIV-COL1 col-span-4 flex  w-full  flex-col gap-6    sm:col-span-5 lg:col-span-8">
							{!loading && error && <p>error</p>}
							{loading && (
								<div className="flex flex-col gap-2">
									<Skeleton
										variant="rectangular"
										className="h-[300px] w-full"
										animation="wave"
									/>
									<Skeleton
										variant="rectangular"
										className="h-[10px] w-3/4"
										animation="wave"
									/>
									<Skeleton
										variant="rectangular"
										className="h-[10px] w-3/4"
										animation="wave"
									/>
									<Skeleton
										variant="rectangular"
										className="h-[10px] w-3/4"
										animation="wave"
									/>
									<Skeleton
										variant="rectangular"
										className="h-[10px] w-3/4"
										animation="wave"
									/>
									<Skeleton
										variant="rectangular"
										className="h-[10px] w-3/4"
										animation="wave"
									/>
									<Skeleton
										variant="rectangular"
										className="h-[10px] w-3/4"
										animation="wave"
									/>
									<Skeleton
										variant="rectangular"
										className="h-[10px] w-3/4"
										animation="wave"
									/>
									<Skeleton
										variant="rectangular"
										className="h-[10px] w-3/4"
										animation="wave"
									/>
								</div>
							)}
							{!loading && !error && article && (
								<>
									<div className="aspect-video w-full overflow-hidden rounded-xl">
										<img
											src={article[8]?.photo}
											alt="artikel"
											className="h-full w-full bg-cover bg-center bg-no-repeat object-cover"
										/>
									</div>
									<div className="my-1">
										<div className="inline rounded-full bg-cream px-4 py-2 text-sm uppercase text-brown">
											tips dan trik
										</div>
									</div>
									<h1 className="text-lg">{article[8]?.title}</h1>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Cumque maxime ipsum quia recusandae et adipisci vero libero
										nam blanditiis soluta optio iure, ullam ab quaerat provident
										ipsam ducimus asperiores dicta. Nihil culpa, mollitia
										aperiam error repudiandae harum suscipit. Commodi tenetur
										fugit in hic fuga pariatur quasi quae, tempore, dicta enim,
										maxime soluta quod repudiandae! Sunt quisquam quia autem
										quasi, quaerat dignissimos laboriosam consectetur ab dolorem
										sit voluptatem? Facilis vitae molestiae deserunt qui, at
										nulla iure, animi, necessitatibus omnis esse laudantium
										eveniet nisi illo magni. Possimus saepe aut iure consequatur
										non obcaecati aliquid culpa impedit minus, in voluptates
										magni voluptatum illum.
									</p>
									<div className="flex flex-row items-center gap-2">
										<HiClock />
										<p>{article[8]?.date}</p>
									</div>
								</>
							)}
						</div>

						<div className="DIV-COL2 col-span-4  flex w-full flex-col gap-6  sm:col-span-3 lg:col-span-4 ">
							<div className="mb-10 flex w-full flex-col">
								<h1 className="text-lg">Artikel Populer</h1>
								<div className="STYLED-HR my-4 w-3/12">
									<div className="flex w-full items-center">
										<div className="w-full border-b-2 border-med-brown" />
										<div className="h-2 w-2 rounded-full bg-med-brown"></div>
									</div>
								</div>
								<div className="ARTICLEWRAPPER grid-rows-7 mt-3  grid gap-3">
									{!loading && error && <p>error</p>}
									{loading &&
										article.slice(0, 5).map((article, i) => (
											<div className="flex flex-row items-center gap-3" key={i}>
												<Skeleton
													variant="rectangular"
													className="h-[80px] w-1/4"
													animation="wave"
												/>
												<Skeleton
													variant="rectangular"
													className="h-[80px] w-3/4"
													animation="wave"
												/>
											</div>
										))}
									{!loading &&
										!error &&
										article.slice(0, 7).map((article, i) => (
											<>
												<Link
													to={`/articledetail/${article.id}`}
													className="flex flex-row items-center gap-3"
													key={i}
												>
													<div className="aspect-video w-1/3 overflow-hidden rounded-md bg-cream">
														<img
															src={article.photo}
															alt="artikel"
															className="h-full w-full bg-cover bg-center"
														/>
													</div>
													<div className="flex h-full flex-col justify-center">
														<p className="text-xs uppercase text-med-brown ">
															tips dan trik
														</p>
														<p className="w-[150px] truncate text-sm sm:font-bold">
															{article.title}
														</p>
														<p className="text-xs ">{article.date}</p>
													</div>
												</Link>
											</>
										))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="mb-10 flex w-full items-center justify-center">
				<div className="container mx-4 mb-10 sm:max-w-[688px] lg:max-w-[864px] xl:max-w-[1200px]">
					<hr />
					<div className="my-10 flex w-full flex-col items-center justify-center">
						<h1 className="text-2xl">Artikel Terbaru</h1>
						<div className="STYLED-HR my-4 w-3/12">
							<div className="flex w-full items-center">
								<div className="h-2 w-2 rounded-full bg-med-brown"></div>
								<div className="w-full border-b-2 border-med-brown" />
								<div className="h-2 w-2 rounded-full bg-med-brown"></div>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
						{!loading && error && <p>error</p>}
						{loading &&
							article.slice(0, 6).map((article, i) => (
								<div className="flex w-full flex-col items-start gap-3" key={i}>
									<Skeleton
										variant="rectangular"
										className="h-[200px] w-full"
										animation="wave"
									/>
									<Skeleton
										variant="rectangular"
										className="h-[10px] w-3/4"
										animation="wave"
									/>
									<Skeleton
										variant="rectangular"
										className="h-[10px] w-3/4"
										animation="wave"
									/>
								</div>
							))}
						{!loading &&
							!error &&
							article?.slice(0, 6).map((article, i) => (
								<Link
									to={`/articledetail/${article.id}`}
									key={i}
									className="flex w-full flex-col rounded-xl"
								>
									<div className="aspect-video w-full overflow-hidden rounded-xl">
										<img
											src={article.photo}
											alt="artikel"
											className="h-full w-full bg-cover bg-center bg-no-repeat object-cover"
										/>
									</div>

									<div className="mt-4 flex w-5/6 flex-col gap-3">
										<div className="my-1">
											<div className="inline rounded-full bg-cream px-2 py-1 text-xs uppercase text-brown">
												tips dan trik
											</div>
										</div>
										<p className="truncate font-bold">{article.title}</p>
										<p className="break-all text-xs">
											Lorem ipsum dolor sit, amet consectetur adipisicing elit.
											Eaque laborum magnam quos similique necessitatibus soluta
											saepe mollitia consequuntur sint doloribus. Lorem ipsum
											dolor sit, amet consectetur adipisicing elit. Eaque
											laborum magnam quos similique necessitatibus soluta saepe
											mollitia consequuntur sint doloribus.
										</p>
										<div className="flex flex-row items-center gap-2 text-xs">
											<HiClock />
											<p>{article.date}</p>
										</div>
									</div>
								</Link>
							))}
					</div>
				</div>
			</section>
			{/* <div className="text-center">
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
			/> */}
			<Footer />
		</>
	);
}
