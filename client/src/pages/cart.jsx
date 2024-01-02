import { useCallback, useState } from "react";

import Logo from "../assets/img/logo.png";
import { CartItem } from "../components";
import { useCartStore } from "../store/cart";
import { loadScript } from "../utils";

function Cart() {
	// const [cartItems, setCartItems] = useState(_cartItems);
	const { items, totalPrice, updateQuantity } = useCartStore((state) => ({
		items: state.items,
		totalPrice: state.totalPrice,
		updateQuantity: state.updateQuantity,
	}));
	const [discount, setDiscount] = useState(0);
	const [coupon, setCoupon] = useState("");

	const updateCartQuantity = useCallback(
		(itemId, quantity) => {
			updateQuantity(itemId, quantity);
		},
		[updateQuantity]
	);

	const handleCheckout = useCallback(async (amount) => {
		const result = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
		if (!result) {
			return alert("Razorpay SDK failed to load. Are you online?");
		}

		const response = await fetch("http://localhost:3000/api/v1/checkout/create-order", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ amount: amount }),
		});
		const data = await response.json();

		console.log(data);

		const options = {
			key: data.key_id,
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: "Donation",
			description: "Thank you for nothing. Please give us some money",
			image: Logo,
			handler: function (response) {
				void response;
				alert("Transaction successful");
			},
			prefill: {
				name: "Rajat",
				email: "rajat@rajat.com",
				phone_number: "9899999999",
			},
		};

		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	}, []);

	const applyCouponCode = () => {
		if (coupon == "cara30") {
			setDiscount(totalPrice * 0.3);
			alert("coupon applied");
		} else {
			alert("invalid coupon");
		}
	};

	return (
		<>
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
		</>
	);
}

export default Cart;

