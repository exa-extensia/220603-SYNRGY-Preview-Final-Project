import { Routes, Route } from "react-router-dom";

import Layout from "./common/Layout";
import Error404 from "./pages/Error404/Error404";
import ProtectedRoute from "./common/ProtectedRoute";

import Home from "./pages/Home/Home";
import Login from "./pages/Login-Register/Login";
import Register from "./pages/Login-Register/Register";
import ProductList from "./pages/ProductList/ProductList";
import ProductTrending from "./pages/ProductList/ProductTrending";
import ProductOrganic from "./pages/ProductList/ProductOrganic";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import CartPage from "./pages/Cart/CartPage";
import Address from "./pages/ordering-Address/Address";
import Shipping from "./pages/ordering-Shipping/Shipping";
import FinishPayment from "./pages/ordering-FinishPayment/FinishPayment";
import OrderDetails from "./pages/ordering-OrderDetails/OrderDetails";
import UserProfile from "./pages/User Profile/UserProfile";
import BeautyFeed from "./pages/beautyFeed/BeautyFeed";
import DetailArticle from "./pages/detail-article/Detail-article";
import ProductBrand from "./pages/ProductList/ProductBrand";
import ProductReview from "./pages/ProductDetail-Review/ProductReview";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />

					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />

					<Route path="/beautyfeed" element={<BeautyFeed />} />
					<Route path="/articledetail/:id" element={<DetailArticle />} />

					<Route path="/productlist" element={<ProductList />} />
					<Route path="/producttrending" element={<ProductTrending />} />
					<Route path="/productorganic" element={<ProductOrganic />} />
					<Route path="/productbrand/:id" element={<ProductBrand />} />
					<Route path="/productdetail/:id" element={<ProductDetail />} />

					<Route element={<ProtectedRoute />}>
						<Route path="/cart" element={<CartPage />} />
						<Route path="/address" element={<Address />} />
						<Route path="/placeorder" element={<Shipping />} />
						<Route path="/finishpayment" element={<FinishPayment />} />
						<Route path="/orderdetails/:id" element={<OrderDetails />} />
						<Route path="/productreview/:id" element={<ProductReview />} />
						<Route path="/userprofile" element={<UserProfile />} />
					</Route>

					<Route path="*" element={<Error404 />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
