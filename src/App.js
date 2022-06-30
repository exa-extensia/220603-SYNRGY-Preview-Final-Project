import { Routes, Route } from "react-router-dom";
import Layout from "./common/Layout";
import CartPage from "./pages/Cart/CartPage";
import Error404 from "./pages/Error404/Error404";

import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Register from "./pages/Login-Register/Register";
import Login from "./pages/Login-Register/Login";
import ProductList from "./pages/ProductList/ProductList";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/productdetail/:id" element={<ProductDetail />} />
					<Route path="/cart" element={<CartPage />} />
					<Route path="/productlist" element={<ProductList />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="*" element={<Error404 />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
