import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Footer, Header } from "./components";
import { Blog, Cart, Contact, Home, ProductDetails, Shop } from "./pages";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/product-details/:productId" element={<ProductDetails />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
