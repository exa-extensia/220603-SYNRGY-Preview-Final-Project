import Navbar from "../../components/sections/_navbar/Navbar";
import Footer from "../../components/sections/_footer/Footer";
import Breadcrumb from "../../components/atoms/breadcrumb/BC-UserProfile";
import { HiLocationMarker, HiClipboardList } from "react-icons/hi";

import Avatar from "@mui/material/Avatar";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import UserProfileAlamat from "./UserProfile-tabAlamat";
import UserProfilePesanan from "./UserProfile-tabPesanan";

export default function UserProfile() {
	const [tabs, setTabs] = useState("Daftar Alamat");
	const tabsHandler = (e) => {
		setTabs(e.target.textContent);
	};

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	function scrollTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	useEffect(() => {
		scrollTop();
	}, []);

	return (
		<>
			<Navbar />
			<section
				id="userprofile-page"
				className="flex w-full items-center justify-center bg-[#FFFAF2]"
			>
				<div className="ALAMAT-WRAPPER container mx-4 mb-10 sm:max-w-[688px] lg:max-w-[864px] xl:max-w-[1200px]">
					<div className="cp__breadcrumbs mb-10">
						<Breadcrumb />
					</div>

					<div className="DIV-2COLS grid grid-cols-4 gap-5 sm:grid-cols-8 lg:grid-cols-12 lg:gap-6">
						<div className="DIV-COL1 col-span-4 flex w-full flex-col gap-6    sm:col-span-3 lg:col-span-4">
							<div className="BLOCK-ALAMAT flex flex-col gap-2">
								<div className="cp__card w-full ">
									<h1 className="mb-8 text-2xl">Halo!</h1>
									<div className="flex flex-col gap-4">
										<div className="flex items-center gap-4">
											<div className="PROFILE-AVATAR">
												<Avatar
													alt="avatar"
													src={user.avatar}
													sx={{ width: 60, height: 60 }}
												/>
											</div>
											<div className="PROFILE-TITE">
												<p className="text-xl font-bold text-brown">
													{user.name}
												</p>
												<p className="text-base">{user.email}</p>
											</div>
										</div>
										<div className="STYLED-HR my-8">
											<div className="flex items-center">
												<div className="h-2 w-2 rounded-full bg-med-brown"></div>
												<div className="w-3/12 border-b-2 border-med-brown" />
												<div className="h-2 w-2 rounded-full bg-med-brown"></div>
											</div>
										</div>
										<>
											<div
												className={`flex w-full cursor-pointer items-center gap-3 rounded-full bg-goldie px-4 py-3 font-semibold text-black hover:bg-black hover:text-white ${
													tabs === "Daftar Alamat"
														? "bg-black text-white"
														: "bg-goldie font-semibold text-black"
												}`}
												onClick={tabsHandler}
											>
												<HiLocationMarker size={20} />
												Daftar Alamat
											</div>
											<div
												className={`flex w-full cursor-pointer items-center gap-3 rounded-full bg-goldie px-4 py-3 font-semibold text-black hover:bg-black hover:text-white ${
													tabs === "Riwayat Pesanan"
														? "bg-black text-white"
														: "bg-goldie font-semibold text-black"
												}`}
												onClick={tabsHandler}
											>
												<HiClipboardList size={20} />
												Riwayat Pesanan
											</div>
										</>
									</div>
								</div>
							</div>
						</div>

						<div className="DIV-COL2 col-span-4  flex w-full flex-col gap-6  sm:col-span-5 lg:col-span-8 ">
							<div className="cp__card flex w-full flex-col items-center justify-center">
								{tabs === "Daftar Alamat" ? <UserProfileAlamat /> : ""}
								{tabs === "Riwayat Pesanan" ? <UserProfilePesanan /> : ""}
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
