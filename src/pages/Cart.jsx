import { useCallback, useMemo, useState } from "react";
import { CartItem } from "../components";
import Logo from "../assets/img/logo.png";
function loadScript(src) {
	return new Promise((resolve) => {
	  const script = document.createElement("script");
	  script.src = src;
	  script.onload = () => {
		resolve(true);
	  };
	  script.onerror = () => {
		resolve(false);
	  };
	  document.body.appendChild(script);
	});
  }

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
	const [discount, setDiscount] = useState(0);
	const [coupon, setCoupon] = useState("");
	const [cartTotal, setCartTotal] = useState(0);
	const updateCartQuantity = useCallback(
		(itemId, quantity) => {
			setCartItems(cartItems.map((item) => (item.id === itemId ? { ...item, quantity } : item)));
		},
		[cartItems]
	);

	const calculateItemSubtotal = useCallback((item) => item.price * item.quantity, []);

	const calculateCartSubtotal = useMemo(() => {
		const total = cartItems.reduce((total, item) => total + calculateItemSubtotal(item), 0);
		setCartTotal(total);
		return total;
	}, [cartItems, calculateItemSubtotal,setCartTotal,discount]);


	const handleCheckout = async (amount) => {
		const res = await loadScript(
			"https://checkout.razorpay.com/v1/checkout.js"
		  );
	  
		  if (!res) {
			alert("Razorpay SDK failed to load. Are you online?");
			return;
		  }
	  
		  const data = await fetch("http://localhost:1337/razorpay", {
			method: "POST",
			body: JSON.stringify({ amount: amount }),
			headers: {
			  "Content-Type": "application/json"
			},
		  }).then((t) => t.json());
	  
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
	}

	const applyCoupon = () => {
		if(coupon == "cara30"){
			setDiscount(calculateCartSubtotal * 0.3);
			setCartTotal(calculateCartSubtotal);
			alert("coupon applied");
		}
		else{
			alert("invalid coupon");
		}
	}
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
						<input onChange={(e)=>setCoupon(e.target.value)} id="coupon" type=" text" placeholder="enter coupon" />
						<button onClick={applyCoupon} className="normal">Apply</button>
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
							<td>Discount</td>
							<td>- {discount}</td>
						</tr>
						<tr>
							<td>
								<strong>Total</strong>
							</td>
							<td>
								<strong>₹{cartTotal-discount}</strong>
							</td>
						</tr>
					</table>
					<button onClick={()=>handleCheckout(calculateCartSubtotal.toFixed(2))} className="normal">Proceed to Checkout</button>
				</div>
			</section>
		</>
	);
}

export default Cart;
