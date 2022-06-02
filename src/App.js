import { Routes, Route } from "react-router-dom";
import Layout from "./common/Layout";

import Home from "./pages/Home/Home";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					{/* <Route path="/login" element={} /> */}
					{/* <Route path="/register" element={} /> */}
					<Route path="*" element={<div>ERROR - NO PAGE</div>} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
