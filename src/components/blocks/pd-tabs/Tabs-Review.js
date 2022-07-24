import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";
import { Link } from "react-router-dom";
import { Avatar, Rating } from "@mui/material";
import { HiClock } from "react-icons/hi";
import { useParams } from "react-router-dom";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

export default function BasicTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const StyledTab = styled(Tab)({
		"&.Mui-selected": {
			color: "#c09863",
		},
	});

	const [review, setReview] = useState([]);
	const [article, setArticle] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const params = useParams();

	useEffect(() => {
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

	const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

	let numberReview = random(3, review.length);
	let randomReview = review.slice(0, numberReview).map(function () {
		return this.splice(Math.floor(Math.random() * this.length), 1)[0];
	}, review.slice());

	let numberArtikel = random(2, 6);
	let randomArtikel = article.slice(0, numberArtikel).map(function () {
		return this.splice(Math.floor(Math.random() * this.length), 1)[0];
	}, article.slice());

	return (
		<>
			<div className="mb-6 flex w-full flex-col items-center justify-center bg-cream py-6">
				<p className="text-sm">4 dari 5 pengguna merekomendasikan produk ini</p>
				<div className="mt-4 flex flex-row justify-between gap-8">
					<div className="flex flex-col gap-2">
						<div className="mx-auto">
							<p className="inline rounded-full bg-brown px-3 py-1 text-center text-white">
								4/5
							</p>
						</div>
						<p className="text-sm font-bold">Kualitas</p>
					</div>
					<div className="flex flex-col gap-2">
						<div className="mx-auto">
							<p className="inline rounded-full bg-brown px-3 py-1 text-center text-white">
								4/5
							</p>
						</div>
						<p className="text-sm font-bold">Tekstur</p>
					</div>
					<div className="flex flex-col gap-2">
						<div className="mx-auto">
							<p className="inline rounded-full bg-brown px-3 py-1 text-center text-white">
								4/5
							</p>
						</div>
						<p className="text-sm font-bold">Packaging</p>
					</div>
					<div className="flex flex-col gap-2">
						<div className="mx-auto">
							<p className="inline rounded-full bg-brown px-3 py-1 text-center text-white">
								4/5
							</p>
						</div>
						<p className="text-sm font-bold">Harga</p>
					</div>
				</div>
			</div>

			<Box sx={{ width: "100%" }}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<Tabs
						value={value}
						onChange={handleChange}
						variant="scrollable"
						scrollButtons="auto"
						aria-label="scrollable auto tabs example"
						TabIndicatorProps={{ style: { background: "#c09863" } }}
					>
						<StyledTab label="Review" />
						<StyledTab label="Artikel Terkait" />
					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					{!loading && error && <p>error</p>}
					{loading &&
						review.slice(0, 3).map((i) => (
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
					{!loading && !error && (
						<p className="mb-6 text-sm font-semibold">
							Ulasan Pembeli ({randomReview?.length})
						</p>
					)}
					{!loading &&
						!error &&
						randomReview?.map((rev, i) => (
							<>
								<div
									className="flex flex-row items-start justify-between"
									key={i}
								>
									<div className="flex flex-row items-center gap-3">
										<Avatar
											alt="avatar"
											src={rev.user.avatar}
											sx={{ width: 40, height: 40 }}
										/>
										<div className="flex h-full flex-col justify-center">
											<p className="text-sm sm:font-bold">{rev.user.name}</p>
											<Rating
												defaultValue={rev.averageStar}
												precision={0.5}
												readOnly
												size="small"
											/>
										</div>
									</div>
									<div className="flex flex-row items-center gap-1 text-xs text-brown">
										<HiClock />
										<p>{rev.date}</p>
									</div>
								</div>
								<p className="mt-4 text-sm">{rev.content}</p>
								<hr className="my-3 w-full" />
							</>
						))}
				</TabPanel>
				<TabPanel value={value} index={1}>
					<div className="ARTICLEWRAPPER grid-rows-7 grid gap-3">
						{!loading && error && <p>error</p>}
						{loading &&
							article.slice(0, 3).map((i) => (
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
						{!loading && !error && (
							<p className="mb-6 text-sm font-semibold">
								Jumlah Artikel ({randomArtikel?.length})
							</p>
						)}
						{!loading &&
							!error &&
							randomArtikel?.map((article, i) => (
								<>
									<Link
										to={`/articledetail/${article.id}`}
										className="flex cursor-pointer flex-row items-center gap-3 hover:bg-cream"
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
											<p className="cursor-pointer text-xs uppercase text-med-brown ">
												tips dan trik
											</p>
											<p className="w-[200px] cursor-pointer truncate text-sm sm:font-bold">
												{article.title}
											</p>
											<p className="cursor-pointer text-xs ">{article.date}</p>
										</div>
									</Link>
									<hr className="my-3 w-full" />
								</>
							))}
					</div>
				</TabPanel>
			</Box>
		</>
	);
}
