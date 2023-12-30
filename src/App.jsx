import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Footer, Header } from "./components";
import { About, Blog, Cart, Contact, Home, ProductDetails, Shop } from "./pages";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/product-details/:productId" element={<ProductDetails />} />
				<Route path="/shop" element={<Shop />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
