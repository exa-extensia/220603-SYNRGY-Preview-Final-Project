import { Routes, Route } from "react-router-dom";
import Layout from "./common/Layout";
import CartPage from "./pages/Cart/CartPage";
import Error404 from "./pages/Error404/Error404";

import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Register from "./pages/Login-Register/Register";
import Login from "./pages/Login-Register/Login";

// TRIAL
import TrialProductList from "./pages/__TRIAL/Trial-productlist";
import TrialProductDetail from "./pages/__TRIAL/Trial-productdetail";
import TrialCart from "./pages/__TRIAL/Trial-cart";
import Pembayaran from "./pages/Pembayaran/Pembayaran";
import Artikel from "./pages/Artikel/Artikel";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/productdetail" element={<ProductDetail />} />
					<Route path="/cart" element={<CartPage />} />
					<Route path="/trial-productlist" element={<TrialProductList />} />
					{/* <Route path="/trial-productdetail" element={<TrialProductDetail />} /> */}
					{/* <Route path="/trial-cart" element={<TrialCart />} /> */}
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/pembayaran" element={<Pembayaran />} />
					<Route path="/artikel" element={<Artikel />} />
					<Route path="*" element={<Error404 />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
