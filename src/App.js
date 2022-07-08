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

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />

					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />

					<Route path="/productlist" element={<ProductList />} />
					<Route path="/productdetail/:id" element={<ProductDetail />} />
					<Route element={<ProtectedRoute />}>
						<Route path="/cart" element={<CartPage />} />
						<Route path="/fitting" element={<Pembayaran />} />
					</Route>

					<Route path="*" element={<Error404 />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
