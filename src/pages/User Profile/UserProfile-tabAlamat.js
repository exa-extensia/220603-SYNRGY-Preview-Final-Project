import illst from "../../assets/images/addressempty-illst.svg";
import { TbUser, TbPhone } from "react-icons/tb";
import Skeleton from "@mui/material/Skeleton";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { getAddress } from "../../redux/address/addressSlice";
import { toast } from "react-toastify";

export default function UserProfileAlamat() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { address, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.address
	);
	const addressDefault = address.find((e) => e.isDefault);

	useEffect(() => {
		dispatch(getAddress());
		if (isError) {
			toast(message);
		}
	}, [dispatch, isError, message]);

	return (
		<>
			{isLoading && (
				<div className="my-2 w-full ">
					<Skeleton
						variant="rectangular"
						height={300}
						animation="wave"
						className="w-full"
					/>
				</div>
			)}
			{!isLoading && addressDefault && (
				<div className="ORDERING-GENERAL-CARD w-full sm:flex ">
					<div className="w-3/4">
						<div className="label-group flex flex-row items-center gap-2">
							<p className="LABEL-ALAMAT text-sm font-bold uppercase text-brown">
								{addressDefault.label}
							</p>{" "}
							<div
								className={`${
									addressDefault.isDefault === true
										? "rounded-xl  bg-cream py-1 px-2 text-xs text-brown"
										: "hidden"
								} `}
							>
								<p>alamat utama</p>
							</div>
						</div>
						<div className="content-group mt-1 ">
							<p className="break-words text-sm font-extralight">
								{addressDefault.addressDetail} - {addressDefault.cityId}{" "}
								{addressDefault.postalCode}
							</p>
							<div className="mt-2 flex flex-row items-center gap-4">
								<div className="flex flex-row items-center gap-1">
									<TbUser size={20} />
									<p className="  font-bold">{addressDefault.receiver}</p>
								</div>
								<div className="flex flex-row items-center gap-1">
									<TbPhone size={20} />
									<p className="  font-bold">{addressDefault.phone}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
			{!isLoading && address.length < 1 && (
				<div className="flex flex-col items-center justify-center">
					<p className="mb-6 text-xl">Ayo daftarkan alamat mu! :)</p>
					<img src={illst} alt="alamat" />
				</div>
			)}
			{!isLoading && isError && toast(message)}

			<div className="mt-8 flex w-full flex-col items-center justify-center">
				{" "}
				<button
					onClick={() => navigate("/address")}
					className="btn-grad w-full rounded-full py-2 px-5 text-sm font-bold text-white lg:w-4/12"
				>
					Ubah Alamat
				</button>
			</div>
		</>
	);
}
