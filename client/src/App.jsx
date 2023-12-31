import { Route, Routes } from "react-router-dom";

import "./App.css";
import MainLayout from "./layouts/main";
import { About, Blog, Cart, Contact, Home, Login, ProductDetails, Shop, SignUp } from "./pages";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<MainLayout page={Home} />} />
				<Route path="/about" element={<MainLayout page={About} />} />
				<Route path="/blog" element={<MainLayout page={Blog} />} />
				<Route path="/cart" element={<MainLayout page={Cart} />} />
				<Route path="/contact" element={<MainLayout page={Contact} />} />
				<Route
					path="/product-details/:productId"
					element={<MainLayout page={ProductDetails} />}
				/>
				<Route path="/shop" element={<MainLayout page={Shop} />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
		</>
	);
}

export default App;
