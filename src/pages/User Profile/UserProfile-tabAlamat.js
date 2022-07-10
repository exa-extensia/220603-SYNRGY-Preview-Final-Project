import illst from "../../assets/images/addressempty-illst.png";
import { HiOutlineTrash } from "react-icons/hi";

import { useNavigate } from "react-router-dom";

export default function UserProfileAlamat() {
	const navigate = useNavigate();

	return (
		<>
			<div className="ORDERING-GENERAL-CARD sm:flex ">
				<div className="w-3/4">
					<div className="label-group flex items-center gap-2">
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
					</div>
				</div>
				<div className="mt-4 sm:relative sm:mt-0 sm:w-1/4">
					<div className="sm:absolute sm:top-0 sm:right-0">
						<div className="cursor-pointer rounded-full bg-white p-1 text-danger hover:bg-danger hover:text-white">
							<HiOutlineTrash />
						</div>
					</div>
				</div>
			</div>
			<img src={illst} alt="" />
			<div className="mt-8 flex w-full flex-col items-center justify-center">
				{" "}
				<p>Ayo daftarkan alamat mu!</p>
				<button
					onClick={() => navigate("/address")}
					className="btn-grad w-full rounded-full py-2 px-5 text-sm font-bold text-white lg:w-4/12"
				>
					Tambah Alamat
				</button>
			</div>
		</>
	);
}
