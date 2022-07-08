import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout() {
	return (
		<>
			<Outlet />
			<ToastContainer
				autoClose={2000}
				icon={false}
				toastClassName="toastify-custom-div"
				progressClassName="toastify-custom-progress"
			/>
		</>
	);
}
