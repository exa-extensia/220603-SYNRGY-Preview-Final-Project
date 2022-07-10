import "./address.css";
import Navbar from "../../components/sections/_navbar/Navbar";
import Footer from "../../components/sections/_footer/Footer";
import Breadcrumb from "../../components/atoms/breadcrumb/BC-Address";
import illst from "../../assets/images/addressform-illst.png";
import Skeleton from "@mui/material/Skeleton";
import { toast } from "react-toastify";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createAddress, reset } from "../../redux/address/addressSlice";

export default function Address() {
	function scrollTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	useEffect(() => {
		scrollTop();
	}, []);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [formData, setFormData] = useState({
		addressDetail: "",
		cityId: "",
		isDefault: false,
		label: "",
		phone: "",
		postalCode: "",
		receiver: "",
	});
	const {
		addressDetail,
		cityId,
		isDefault,
		label,
		phone,
		postalCode,
		receiver,
	} = formData;

	const { isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.address
	);

	useEffect(() => {
		if (isError) {
			toast(message);
		}
		if (isSuccess) {
			navigate(-1);
		}
		dispatch(reset());
	}, [isError, isSuccess, message, navigate, dispatch]);

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const addressData = {
			addressDetail,
			cityId,
			isDefault,
			label,
			phone,
			postalCode,
			receiver,
		};
		dispatch(createAddress(addressData));
	};

	// const [Checked, setChecked] = useState(true);
	// const toggleCheckbox = (e) => {
	//     e.preventDefault();
	//     if (isChec) {
	//       setChecked(true);
	//     } else {
	//       setChecked(false);
	//     }
	//   };

	return (
		<>
			<Navbar />
			<section
				id="address-page"
				className="flex w-full items-center justify-center"
			>
				<div className="ALAMAT-WRAPPER container mx-4 mb-10 sm:max-w-[688px] lg:max-w-[864px] xl:max-w-[1200px]">
					<div className="cp__breadcrumbs mb-10">
						<Breadcrumb />
					</div>
					<form
						onSubmit={onSubmit}
						className="DIV-2COLS grid grid-cols-4 gap-5 sm:grid-cols-8 lg:grid-cols-12 lg:gap-20"
					>
						<div className="DIV-COL1 col-span-4 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 lg:col-span-6">
							<h1 className="text-2xl sm:col-span-2">Tambah Alamat Baru</h1>
							<div className="mt-1 flex items-center sm:col-span-2">
								<div className="w-20 border-b-2 border-med-brown" />
								<div className="h-2 w-2 rounded-full bg-med-brown"></div>
							</div>

							<div className="LABELINPUT-GROUP mt-6 sm:col-span-2">
								<p>Label Alamat</p>
								<input
									type="text"
									className="ADDRESSPAGE-INPUT"
									placeholder="contoh: alamat rumah / kantor"
									value={label}
									onChange={onChange}
									name="label"
									required
								/>
							</div>
							<p className="ADDRESSPAGE-SUBJUDUL sm:col-span-2">
								INFORMASI PENERIMA
							</p>
							<div className="LABELINPUT-GROUP mt-2">
								<p>Nama Penerima</p>
								<input
									type="text"
									className="ADDRESSPAGE-INPUT "
									placeholder="contoh: nama pemesan / penerima"
									value={receiver}
									onChange={onChange}
									name="receiver"
									required
								/>
							</div>
							<div className="LABELINPUT-GROUP mt-2">
								<p>Nomor HP</p>
								<input
									type="number"
									className="ADDRESSPAGE-INPUT "
									placeholder="contoh: 08997647999"
									value={phone}
									onChange={onChange}
									name="phone"
									required
								/>
							</div>
							<p className="ADDRESSPAGE-SUBJUDUL sm:col-span-2">
								ALAMAT PENERIMA
							</p>

							<div className="LABELINPUT-GROUP mt-2 sm:col-span-2">
								<p>Alamat</p>
								<textarea
									type="text"
									className="ADDRESSPAGE-INPUT resize-none p-2"
									rows={4}
									placeholder="contoh: Jl. Jalan Ke Kota Naik Delman Sama Ayah"
									value={addressDetail}
									onChange={onChange}
									name="addressDetail"
									required
								/>
							</div>
							<div className="LABELINPUT-GROUP sm:col-span-2">
								<p>Kota</p>
								<input
									type="text"
									className="ADDRESSPAGE-INPUT "
									placeholder="contoh: Balikpapan"
									value={cityId}
									onChange={onChange}
									name="cityId"
									required
								/>
							</div>
							<div className="LABELINPUT-GROUP mt-2">
								<p>Kode Pos</p>
								<input
									type="number"
									className="ADDRESSPAGE-INPUT "
									placeholder="contoh: 16674"
									value={postalCode}
									onChange={onChange}
									name="postalCode"
									required
								/>
							</div>
							<div className="LABELINPUT-GROUP mt-6 flex flex-row items-center gap-3 sm:col-span-2">
								<input
									type="checkbox"
									className="hover:cursor-pointer"
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											isDefault: e.target.checked,
										}))
									}
								/>
								<p className="text-base font-semibold text-brown">
									gunakan sebagai alamat utama
								</p>
							</div>
							{isLoading && (
								<div className="mt-8 text-xs font-bold text-brown">
									Working on it...!
								</div>
							)}
							{isError && (
								<div className="mt-8 text-xs text-danger">
									Something went wrong
								</div>
							)}
							{isSuccess && (
								<div className="mt-8 text-xs text-success">
									Success! Welcome!
								</div>
							)}
						</div>
						<div className="DIV-COL2 col-span-4 flex flex-col justify-between lg:col-span-6 ">
							<div className="relative aspect-square overflow-hidden">
								<div className="aspect-video w-full">
									<img
										src={illst}
										alt="alamat"
										className="absolute z-10 object-contain"
									/>
									<Skeleton
										variant="rectangular"
										animation="wave"
										className="h-full w-full"
									/>
								</div>
							</div>
							<div className="relative h-10 w-full">
								<button className="btn-grad absolute right-0 bottom-0 rounded-full py-2 px-5 text-xs text-white sm:w-40">
									Tambah Alamat
								</button>
							</div>
						</div>
					</form>
				</div>
			</section>

			<Footer />
		</>
	);
}
