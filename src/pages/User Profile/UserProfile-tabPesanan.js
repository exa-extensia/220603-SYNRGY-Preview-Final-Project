import illst from "../../assets/images/cart-illst.png";
import {
	HiCheckCircle,
	HiXCircle,
	HiDotsCircleHorizontal,
} from "react-icons/hi";

import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Skeleton from "@mui/material/Skeleton";

import axios from "axios";
import convertDate from "../../utils/convertDate";
import currencyIDR from "../../utils/currencyIDR";

export default function UserProfilePesanan() {
	const navigate = useNavigate();
	const [dataList, setDataList] = useState([]);
	const [statusAntar, setStatusAntar] = useState("");
	const [statusBayar, setStatusBayar] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	console.log("statusantar>>>>>>", statusAntar);
	useEffect(() => {
		const token = JSON.parse(localStorage.getItem("token"));
		axios
			.get(`https://cosmetic-b.herokuapp.com/api/v1/order`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				console.log("get list order in component>>>>>>>", response.data.data);
				setLoading(false);
				setDataList(response.data.data);
			})
			.catch((error) => {
				setLoading(false);
				console.log(error);
				setError(true);
			});
	}, []);
	return (
		<>
			{!loading && error && (
				<div>unexpected error masyaallah dev nya pusing</div>
			)}
			{loading && (
				<div className="my-2 w-full ">
					<Skeleton
						variant="rectangular"
						height={300}
						animation="wave"
						className="w-full"
					/>
				</div>
			)}
			{!loading && !error && dataList.length > 0 && (
				<div className="ORDER-LIST-GENERAL-CARD ORDER-LIST-GRID hidden w-full bg-med-brown text-white xl:grid">
					<div className="ORDER-LIST-COL1 border-r border-goldie p-2">
						Order ID
					</div>
					<div className="ORDER-LIST-COL2 border-r border-goldie p-2">Date</div>
					<div className="ORDER-LIST-COL3 border-r border-goldie p-2">
						Total
					</div>
					<div className="ORDER-LIST-COL4 border-r border-goldie p-2">Paid</div>
					<div className="ORDER-LIST-COL5 p-2">Delivered</div>
				</div>
			)}
			{!loading &&
				!error &&
				dataList.length > 0 &&
				dataList?.map((l, index) => (
					<>
						<Link
							to={`/orderdetails/${l.id}`}
							className="ORDER-LIST-GENERAL-CARD ORDER-LIST-GRID w-full cursor-pointer items-center hover:bg-[#FFFAF2] xl:grid "
						>
							<div
								key={index}
								className="ORDER-LIST-COL1 border-goldie p-2 font-bold xl:border-r"
							>
								<div className="flex gap-2 xl:block">
									<p className="xl:hidden">Order ID</p>
									<p>#{l.id}</p>
								</div>
							</div>
							<div className="ORDER-LIST-COL2 border-goldie p-2 text-xs text-grey xl:border-r">
								<div className="flex gap-2 xl:block">
									<p className="xl:hidden">Tanggal</p>{" "}
									<p>{convertDate(l.date).toLocaleString("en-GB")}</p>
								</div>
							</div>
							<div className="ORDER-LIST-COL3 border-goldie p-2 text-xs text-grey xl:border-r">
								<div className="flex gap-2 xl:block">
									{" "}
									<p className="xl:hidden">Total</p>{" "}
									<p>{currencyIDR(l.total)} </p>
								</div>
							</div>
							<div className="ORDER-LIST-COL4 border-goldie p-2 text-success xl:border-r">
								{l.status === "CANCELED" && (
									<div className="flex gap-2 text-danger xl:block">
										<p className="xl:hidden">pembayaran dibatalkan</p>{" "}
										<HiXCircle size={22} />
									</div>
								)}
								{l.status === "WAITING_FOR_PAYMENT" && (
									<div className="flex gap-2 text-warning xl:block">
										<p className="xl:hidden">pembayaran ditunggu</p>{" "}
										<HiDotsCircleHorizontal size={22} />
									</div>
								)}
								{l.status === "PAID" && (
									<div className="flex gap-2 text-success xl:block">
										<p className="xl:hidden">pembayaran selesai</p>{" "}
										<HiCheckCircle size={22} />
									</div>
								)}
								{l.status === "ON_DELIVERY" && (
									<div className="flex gap-2 text-success xl:block">
										<p className="xl:hidden">pembayaran selesai</p>{" "}
										<HiCheckCircle size={22} />
									</div>
								)}
								{l.status === "DELIVERED" && (
									<div className="flex gap-2 text-success xl:block">
										<p className="xl:hidden">pembayaran selesai</p>{" "}
										<HiCheckCircle size={22} />
									</div>
								)}
							</div>
							<div className="ORDER-LIST-COL4 p-2">
								{l.status === "CANCELED" && (
									<div className="flex gap-2 text-danger xl:block">
										<p className="xl:hidden">pengantaran dibatalkan</p>{" "}
										<HiXCircle size={22} />
									</div>
								)}
								{l.status === "WAITING_FOR_PAYMENT" && (
									<div className="flex gap-2 text-danger xl:block">
										<p className="xl:hidden">pengantaran menunggu dibayar</p>{" "}
										<HiXCircle size={22} />
									</div>
								)}
								{l.status === "PAID" && (
									<div className="flex gap-2 text-warning xl:block">
										<p className="xl:hidden">pengantaran berlangsung</p>{" "}
										<HiDotsCircleHorizontal size={22} />
									</div>
								)}
								{l.status === "ON_DELIVERY" && (
									<div className="flex gap-2 text-warning xl:block">
										<p className="xl:hidden">pengantaran berlangsung</p>{" "}
										<HiDotsCircleHorizontal size={22} />
									</div>
								)}
								{l.status === "DELIVERED" && (
									<div className="flex gap-2 text-success xl:block">
										<p className="xl:hidden">pengantaran selesai</p>{" "}
										<HiCheckCircle size={22} />
									</div>
								)}
							</div>
						</Link>
					</>
				))}
			{!loading && !error && dataList.length < 1 && (
				<>
					<div className="flex flex-col items-center justify-center">
						<p className="mb-6 text-xl">Ayo mulai berbelanja di Flambo! :)</p>
						<img src={illst} alt="order kosng" />
					</div>
				</>
			)}

			<div className="mt-8 flex w-full flex-col items-center justify-center">
				<button
					onClick={() => navigate("/productlist")}
					className="btn-grad w-full rounded-full py-2 px-5 text-sm font-bold text-white lg:w-4/12"
				>
					Ayo Belanja :)
				</button>
			</div>
		</>
	);
}
