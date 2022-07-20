import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";

import axios from "axios";

export default function HeaderArticle() {
	const [article, setArticle] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
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
			<div className="header__article p-4">
				<div className="mb-2 flex items-start justify-between">
					<div className="flex flex-col">
						<h1 className="text-base xl:text-xl">Artikel Terbaru</h1>
						<div className="my-2 flex items-center">
							<div className="w-20 border-b-2 border-med-brown" />
							<div className="h-[6px] w-[6px] rounded-full bg-med-brown"></div>
						</div>
					</div>
					<Link to={"/beautyfeed"}>
						<button className="btn-sec-home rounded-full px-1 text-[10px] xl:px-2 xl:py-1 xl:text-sm">
							Lihat Semua
						</button>
					</Link>
				</div>
				{!loading && error && <p>error</p>}

				{loading && (
					<div className="ARTICLEWRAPPER grid h-3/4 grid-rows-4 gap-2 2xl:h-5/6">
						<div className="flex flex-row items-center gap-3">
							<Skeleton
								variant="rectangular"
								className="h-full w-1/4"
								animation="wave"
							/>
							<Skeleton
								variant="rectangular"
								className="h-full w-3/4"
								animation="wave"
							/>
						</div>

						<div className="flex flex-row items-center gap-3">
							<Skeleton
								variant="rectangular"
								className="h-full w-1/4"
								animation="wave"
							/>
							<Skeleton
								variant="rectangular"
								className="h-full w-3/4"
								animation="wave"
							/>
						</div>

						<div className="flex flex-row items-center gap-3">
							<Skeleton
								variant="rectangular"
								className="h-full w-1/4"
								animation="wave"
							/>
							<Skeleton
								variant="rectangular"
								className="h-full w-3/4"
								animation="wave"
							/>
						</div>

						<div className="flex flex-row items-center gap-3">
							<Skeleton
								variant="rectangular"
								className="h-full w-1/4"
								animation="wave"
							/>
							<Skeleton
								variant="rectangular"
								className="h-full w-3/4"
								animation="wave"
							/>
						</div>
					</div>
				)}
				{!loading && !error && article && (
					<div className="ARTICLEWRAPPER grid h-3/4 grid-rows-4 gap-2 2xl:h-5/6">
						<Link
							to={`/articledetail/${article[1].id}`}
							className="flex flex-row items-center gap-3 transition-all duration-150 ease-in-out hover:bg-cream"
						>
							<div className="aspect-video h-full overflow-hidden rounded-md bg-cream">
								<img
									src={article[1].photo}
									alt="artikel"
									className="h-full w-full bg-cover bg-center"
								/>
							</div>
							<div className="flex h-full flex-col justify-center">
								<p className="hidden text-[10px] uppercase text-med-brown xl:block">
									tips dan trik
								</p>
								<p className="w-[200px] truncate text-base sm:w-[100px] sm:font-bold xl:w-[200px]">
									{article[1].title}
								</p>
								<p className="hidden text-[10px] xl:block">{article[1].date}</p>
							</div>
						</Link>

						<Link
							to={`/articledetail/${article[2].id}`}
							className="flex flex-row items-center gap-3 transition-all duration-150 ease-in-out hover:bg-cream"
						>
							<div className="aspect-video h-full overflow-hidden rounded-md bg-cream">
								<img
									src={article[2].photo}
									alt="artikel"
									className="h-full w-full bg-cover bg-center"
								/>
							</div>
							<div className="flex h-full flex-col justify-center">
								<p className="hidden text-[10px] uppercase text-med-brown xl:block">
									herbal
								</p>
								<p className="w-[200px] truncate text-base sm:w-[100px] sm:font-bold xl:w-[200px]">
									{article[2].title}
								</p>
								<p className="hidden text-[10px] xl:block">{article[2].date}</p>
							</div>
						</Link>

						<Link
							to={`/articledetail/${article[3].id}`}
							className="flex flex-row items-center gap-3 transition-all duration-150 ease-in-out hover:bg-cream"
						>
							<div className="aspect-video h-full overflow-hidden rounded-md bg-cream">
								<img
									src={article[3].photo}
									alt="artikel"
									className="h-full w-full bg-cover bg-center"
								/>
							</div>
							<div className="flex h-full flex-col justify-center">
								<p className="hidden text-[10px] uppercase text-med-brown xl:block">
									perawatan kulit
								</p>
								<p className="w-[200px] truncate text-base sm:w-[100px] sm:font-bold xl:w-[200px]">
									{article[3].title}
								</p>
								<p className="hidden text-[10px] xl:block">{article[3].date}</p>
							</div>
						</Link>

						<Link
							to={`/articledetail/${article[4].id}`}
							className="flex flex-row items-center gap-3 transition-all duration-150 ease-in-out hover:bg-cream"
						>
							<div className="aspect-video h-full overflow-hidden rounded-md bg-cream">
								<img
									src={article[4].photo}
									alt="artikel"
									className="h-full w-full bg-cover bg-center"
								/>
							</div>
							<div className="flex h-full flex-col justify-center">
								<p className="hidden text-[10px] uppercase text-med-brown xl:block">
									produk pria
								</p>
								<p className="w-[200px] truncate text-base sm:w-[100px] sm:font-bold xl:w-[200px]">
									{article[4].title}
								</p>
								<p className="hidden text-[10px] xl:block">{article[4].date}</p>
							</div>
						</Link>
					</div>
				)}
			</div>
		</>
	);
}
