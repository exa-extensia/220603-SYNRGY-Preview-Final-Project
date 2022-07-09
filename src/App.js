import { Routes, Route } from "react-router-dom";

import Layout from "./common/Layout";
import Error404 from "./pages/Error404/Error404";
import ProtectedRoute from "./common/ProtectedRoute";

import Home from "./pages/Home/Home";
import Login from "./pages/Login-Register/Login";

import Register from "./pages/Login-Register/Register";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import CartPage from "./pages/Cart/CartPage";
import Pembayaran from "./pages/Pembayaran/Pembayaran";

import Artikel from "./pages/Artikel/Artikel";

import Address from "./pages/ordering-Address/Address";
import Shipping from "./pages/ordering-Shipping/Shipping";
import PaymentOption from "./pages/ordering-Payment/PaymentOption";
import FinishPayment from "./pages/ordering-FinishPayment/FinishPayment";
import OrderDetails from "./pages/ordering-OrderDetails/OrderDetails";
import UserProfile from "./pages/User Profile/UserProfile";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />

					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/pembayaran" element={<Pembayaran />} />
					<Route path="/artikel" element={<Artikel />} />

					<Route path="/productlist" element={<ProductList />} />
					<Route path="/productdetail/:id" element={<ProductDetail />} />
					<Route element={<ProtectedRoute />}>
						<Route path="/cart" element={<CartPage />} />
						<Route path="/address" element={<Address />} />
						<Route path="/shipping" element={<Shipping />} />
						<Route path="/paymentoptions" element={<PaymentOption />} />
						<Route path="/finishpayment" element={<FinishPayment />} />
						<Route path="/orderdetails" element={<OrderDetails />} />
						<Route path="/userprofile" element={<UserProfile />} />

						<Route path="/temp" element={<Pembayaran />} />
					</Route>

					<Route path="*" element={<Error404 />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
