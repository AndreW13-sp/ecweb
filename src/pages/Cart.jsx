import { useCallback, useMemo, useState } from "react";
import { CartItem } from "../components";

const _cartItems = [
	{
		id: "cart-item-1",
		image: "products/f2.jpg",
		name: "Shirt",
		price: 1110.77,
		quantity: 1,
	},
	{
		id: "cart-item-2",
		image: "products/f3.jpg",
		name: "Shirt",
		price: 1110.77,
		quantity: 1,
	},
	{
		id: "cart-item-3",
		image: "products/f4.jpg",
		name: "Shirt",
		price: 1110.77,
		quantity: 1,
	},
];

function Cart() {
	const [cartItems, setCartItems] = useState(_cartItems);

	const updateCartQuantity = useCallback(
		(itemId, quantity) => {
			setCartItems(cartItems.map((item) => (item.id === itemId ? { ...item, quantity } : item)));
		},
		[cartItems]
	);

	const calculateItemSubtotal = useCallback((item) => item.price * item.quantity, []);

	const calculateCartSubtotal = useMemo(() => {
		return cartItems.reduce((total, item) => total + calculateItemSubtotal(item), 0);
	}, [cartItems, calculateItemSubtotal]);

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
						{cartItems.map((item) => (
							<CartItem
								key={item.id}
								id={item.id}
								name={item.name}
								image={item.image}
								price={item.price}
								quantity={item.quantity}
								updateCartQuantity={updateCartQuantity}
							/>
						))}
					</tbody>
				</table>
			</section>

			<section id="cart-add" className="section-p1">
				<div id="coupon">
					<h3>Apply coupon</h3>
					<div>
						<input type=" text" placeholder="enter coupon" />
						<button className="normal">Apply</button>
					</div>
				</div>

				<div id="subtotal">
					<h3>Cart Total</h3>
					<table>
						<tr>
							<td>cart subtotal</td>
							<td>₹{calculateCartSubtotal.toFixed(2)}</td>
						</tr>
						<tr>
							<td>Shipping</td>
							<td>free</td>
						</tr>
						<tr>
							<td>
								<strong>Total</strong>
							</td>
							<td>
								<strong>₹{calculateCartSubtotal.toFixed(2)}</strong>
							</td>
						</tr>
					</table>
					<button className="normal">Proceed to Checkout</button>
				</div>
			</section>
		</>
	);
}

export default Cart;
