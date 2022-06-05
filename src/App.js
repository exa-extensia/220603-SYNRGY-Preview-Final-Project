import { Routes, Route } from "react-router-dom";
import Layout from "./common/Layout";
import Error404 from "./pages/Error404/Error404";

import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/productdetail" element={<ProductDetail />} />
					{/* <Route path="/login" element={} /> */}
					{/* <Route path="/register" element={} /> */}
					<Route path="*" element={<Error404 />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
