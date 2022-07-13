import illst from "../../assets/images/addressempty-illst.png";
import { HiOutlineTrash } from "react-icons/hi";
import { TbUser, TbPhone } from "react-icons/tb";
import Skeleton from "@mui/material/Skeleton";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import {
	getAddress,
	deleteAddress,
	updateAddress,
} from "../../redux/address/addressSlice";
import { toast } from "react-toastify";

export default function UserProfileAlamat() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { address, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.address
	);

	// const address = [];

	const newDefaultHandler = (e) => {
		e.preventDefault();
		const newDefault = true;
		dispatch(updateAddress(newDefault));
	};

	useEffect(() => {
		dispatch(getAddress());
		if (isError) {
			toast(message);
		}
	}, [dispatch]);

	return (
		<>
			{/* <div className="label-group flex items-center gap-2">
						<p className="LABEL-ALAMAT text-sm font-semibold uppercase text-grey">
							APARTEMEN
						</p>{" "}
						<div
							className={"rounded-xl  bg-cream py-1 px-2 text-xs text-brown"}
						>
							<p>alamat utama</p>
						</div>
					</div>
					<div className="content-group mt-4 text-sm">
						<p className="mb-2 font-bold">Nama Penerima - 08119062237</p>
						<p className="">
							Jl. Dipati Ukur No.112-116, Lebakgede, Kecamatan Coblong, Kota
							Bandung, Jawa Barat 40132Jl. Dipati Ukur No.112-116, Lebakgede,
							Kecamatan Coblong, Kota Bandung, Jawa Barat 40132Jl. Dipati Ukur
							No.112-116, Lebakgede, Kecamatan Coblong, Kota Bandung, Jawa Barat
							40132
						</p>
					</div> */}
			{isLoading && (
				<div key={address.id} className="my-2 w-full ">
					<Skeleton
						variant="rectangular"
						height={300}
						animation="wave"
						className="w-full"
					/>
				</div>
			)}
			{!isLoading &&
				address.length > 0 &&
				address.map((address) => (
					<div
						key={address.id}
						className="ORDERING-GENERAL-CARD w-full sm:flex "
					>
						<div className="w-3/4">
							<div className="label-group flex flex-row items-center gap-2">
								<p className="LABEL-ALAMAT text-sm font-bold uppercase text-brown">
									{address.label}
								</p>{" "}
								<div
									className={`${
										address.isDefault === true
											? "rounded-xl  bg-cream py-1 px-2 text-xs text-brown"
											: "hidden"
									} `}
								>
									<p>alamat utama</p>
								</div>
							</div>
							<div className="content-group mt-1 ">
								<p className="break-words text-sm font-extralight">
									{address.addressDetail} - {address.cityId}{" "}
									{address.postalCode}
								</p>
								<div className="mt-2 flex flex-row items-center gap-4">
									<div className="flex flex-row items-center gap-1">
										<TbUser size={20} />
										<p className="  font-bold">{address.receiver}</p>
									</div>
									<div className="flex flex-row items-center gap-1">
										<TbPhone size={20} />
										<p className="  font-bold">{address.phone}</p>
									</div>
								</div>
							</div>
						</div>

						<div className="mt-4 sm:relative sm:mt-0 sm:w-1/4">
							<button onClick={newDefaultHandler} className="text-xs">
								set default
							</button>
							<div className="sm:absolute sm:top-0 sm:right-0">
								<button
									onClick={(e) => {
										toast("Alamat non-default akan dihapus!");
										dispatch(deleteAddress(address.id));
										if (address.isDefault === true) {
											toast("Woops, ganti alamat default dulu ya :)");
										}
										if (address.isDefault === false) {
											window.location.reload();
										}
									}}
									className="cursor-pointer rounded-full bg-white p-1 text-danger hover:bg-danger hover:text-white"
								>
									<HiOutlineTrash />
								</button>
							</div>
						</div>
					</div>
				))}
			{!isLoading && address.length < 1 && (
				<div className="flex flex-col items-center justify-center">
					<p className="mb-6 text-xl">Ayo daftarkan alamat mu! :)</p>
					<img src={illst} alt="" />
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
