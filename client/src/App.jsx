import { Route, Routes } from "react-router-dom";

import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import { About, Blog, Cart, Contact, Home, Login, ProductDetails, Shop, SignUp } from "./pages";

function App() {
	return (
		<>
			<Routes>
				{/* Public Routes */}
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/product-details/:productId" element={<ProductDetails />} />
				<Route path="/shop" element={<Shop />} />

				{/* Authentication Routes */}
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />

				{/* Protected Routes */}
				<Route path="/blog" element={<ProtectedRoute page={Blog} />} />
				<Route path="/cart" element={<ProtectedRoute page={Cart} />} />
			</Routes>
		</>
	);
}

export default App;
