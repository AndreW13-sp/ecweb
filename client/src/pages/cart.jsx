import { useCallback, useState } from "react";

import { useNavigate } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import { CartItem } from "../components";
import MainLayout from "../layouts/main";
import { useCartStore } from "../store/cart";
import { axiosInstance, loadScript } from "../utils";
import { useAuth } from "./../store/auth";

function Cart() {
	const { items, totalPrice, updateQuantity, clearCart } = useCartStore((state) => ({
		items: state.items,
		totalPrice: state.totalPrice,
		updateQuantity: state.updateQuantity,
		clearCart: state.clearCart,
	}));
	const { user, jwtToken } = useAuth((state) => ({ user: state.user, jwtToken: state.jwtToken }));

	const [discount, setDiscount] = useState(0);
	const [coupon, setCoupon] = useState("");
	const navigate = useNavigate();

	const updateCartQuantity = useCallback(
		(itemId, quantity) => {
			updateQuantity(itemId, quantity);
		},
		[updateQuantity]
	);

	const handleCheckout = useCallback(
		async (cartAmount) => {
			const result = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
			if (!result) {
				return alert("Razorpay SDK failed to load. Are you online?");
			}

			// Set the jwt token with the request object
			axiosInstance.interceptors.request.use((config) => {
				config.headers.Authorization = `Bearer ${jwtToken}`;
				return config;
			});
			// Send the payment request to the backend
			const response = await axiosInstance.post("/checkout/create-order", {
				amount: cartAmount,
			});

			const { id, currency, amount, key_id } = response.data.data;

			// Process the payment
			const paymentObject = new window.Razorpay({
				currency,
				key: key_id,
				amount: amount.toString(),
				order_id: id,
				name: "Donation",
				description: "Thank you for nothing. Please give us some money",
				image: Logo,
				handler: () => {
					clearCart();
					navigate("/");
				},
				prefill: {
					name: user.username,
					email: user.email,
					phone_number: "9899999999",
				},
			});
			paymentObject.open();
		},
		[clearCart, jwtToken, navigate, user.email, user.username]
	);

	const applyCouponCode = () => {
		if (coupon == "cara30") {
			setDiscount(totalPrice * 0.3);
			alert("coupon applied");
		} else {
			alert("invalid coupon");
		}
	};

	return (
		<MainLayout>
			<section id="cart" className="section-p1">
				<table width="100%">
					<thead>
						<tr>
							<td>Remove</td>
							<td>Image</td>
							<td>Product</td>
							<td>Price</td>
							<td>Quantity</td>
							<td>Subtotal</td>
						</tr>
					</thead>
					<tbody>
						{items.map((item) => (
							<CartItem key={item.id} {...item} updateCartQuantity={updateCartQuantity} />
						))}
					</tbody>
				</table>
			</section>

			<section id="cart-add" className="section-p1">
				<div id="coupon">
					<h3>Apply Coupon Code</h3>
					<div>
						<input
							id="coupon"
							type="text"
							placeholder="Enter Coupon Code"
							onChange={(e) => setCoupon(e.target.value)}
						/>
						<button className="normal" onClick={applyCouponCode}>
							Apply
						</button>
					</div>
				</div>

				<div id="subtotal">
					<h3>Cart Total</h3>
					<table>
						<tr>
							<td>cart subtotal</td>
							<td>₹{totalPrice.toFixed(2)}</td>
						</tr>
						<tr>
							<td>Shipping</td>
							<td>free</td>
						</tr>
						<tr>
							<td>Discount</td>
							<td>- {discount}</td>
						</tr>
						<tr>
							<td>
								<strong>Total</strong>
							</td>
							<td>
								<strong>
									₹{(discount ? totalPrice - discount : totalPrice).toFixed(2)}
								</strong>
							</td>
						</tr>
					</table>
					<button onClick={() => handleCheckout(totalPrice)} className="normal">
						Proceed to Checkout
					</button>
				</div>
			</section>
		</MainLayout>
	);
}

export default Cart;
