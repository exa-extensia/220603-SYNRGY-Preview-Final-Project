import illst from "../../assets/images/cart-illst.png";
import { HiCheckCircle, HiXCircle } from "react-icons/hi";

import { Link, useNavigate } from "react-router-dom";

export default function UserProfilePesanan() {
	const navigate = useNavigate();

	return (
		<>
			<div className="ORDER-LIST-GENERAL-CARD ORDER-LIST-GRID hidden w-full bg-med-brown text-white xl:grid">
				<div className="ORDER-LIST-COL1 border-r border-goldie p-2">
					Order ID
				</div>
				<div className="ORDER-LIST-COL2 border-r border-goldie p-2">Date</div>
				<div className="ORDER-LIST-COL3 border-r border-goldie p-2">Total</div>
				<div className="ORDER-LIST-COL4 border-r border-goldie p-2">Paid</div>
				<div className="ORDER-LIST-COL5 p-2">Delivered</div>
			</div>

			<Link
				to={"/orderdetails"}
				className="ORDER-LIST-GENERAL-CARD ORDER-LIST-GRID w-full cursor-pointer items-center hover:bg-[#FFFAF2] xl:grid "
			>
				<div className="ORDER-LIST-COL1 border-goldie p-2 font-bold xl:border-r">
					<div className="flex gap-2 xl:block">
						<p className="xl:hidden">Order ID</p>
						<p>#88832976200383</p>
					</div>
				</div>
				<div className="ORDER-LIST-COL2 border-goldie p-2 text-xs text-grey xl:border-r">
					<div className="flex gap-2 xl:block">
						<p className="xl:hidden">Tanggal</p> <p>10-07-22</p>
					</div>
				</div>
				<div className="ORDER-LIST-COL3 border-goldie p-2 text-xs text-grey xl:border-r">
					<div className="flex gap-2 xl:block">
						{" "}
						<p className="xl:hidden">Total</p> <p>Rp223.900.000</p>
					</div>
				</div>
				<div className="ORDER-LIST-COL4 border-goldie p-2 text-success xl:border-r">
					<div className="flex gap-2 xl:block">
						<p className="xl:hidden">Paid</p> <HiCheckCircle size={22} />
					</div>
				</div>
				<div className="ORDER-LIST-COL4 p-2  text-danger">
					<div className="flex gap-2 xl:block">
						<p className="xl:hidden">Delivered</p> <HiXCircle size={22} />
					</div>
				</div>
			</Link>

			{/* <img src={illst} alt="" />
			<p>Ayo mulai berbelanja di Flambo!</p> */}
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
