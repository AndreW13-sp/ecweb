import { useCallback, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import { Newsletter, ProductCard } from "../components";
import { newArrivals, products } from "../data";
import { useCartStore } from "../store/cart";
import { importDynamicImage } from "../utils";

function ProductDetails() {
	const { productId } = useParams();
	const { updateQuantity, addToCart } = useCartStore();

	const currentProduct = useMemo(() => products.find((p) => p.id === productId), [productId]);
	const [size, setSize] = useState("");
	const [itemCount, setItemCount] = useState(currentProduct.quantity);
	const [mainProductImage, setMainProductImage] = useState(currentProduct.image);

	const totalPrice = useMemo(
		() => itemCount * currentProduct.price,
		[currentProduct.price, itemCount]
	);

	const onQuantityChange = useCallback(
		(event) => {
			const value = Math.max(1, parseInt(event.target.value, 10));
			setItemCount(() => value);
			updateQuantity(currentProduct.id, value);
		},
		[currentProduct.id, updateQuantity]
	);

	const handleAddToCart = useCallback(() => {
		addToCart({ ...currentProduct, quantity: itemCount, totalPrice });
	}, [addToCart, currentProduct, itemCount, totalPrice]);

	return (
		<>
			<section id="productDetails" className="section-p1">
				<div className="single-pro-image">
					<img src={importDynamicImage(mainProductImage)} width="100%" id="MainImg" alt="" />

					<div className="small-img-group">
						{currentProduct.subImages &&
							currentProduct.subImages.length &&
							currentProduct.subImages.map((img) => (
								<div
									key={img}
									className="small-img-col"
									onClick={() => setMainProductImage(img)}
								>
									<img
										src={importDynamicImage(img)}
										width="100%"
										className="small-img"
										alt=""
									/>
								</div>
							))}
					</div>
				</div>

				<div className="single-pro-details">
					<h6>Home/T-Shirt</h6>
					<h4>{"Men's Fashion T-Shirt"}</h4>
					<h2>₹{totalPrice}</h2>
					<select value={size} onChange={(event) => setSize(event.target.value)}>
						<option>Select Size</option>
						<option>XL</option>
						<option>XXL</option>
						<option>Small</option>
						<option>Large</option>
					</select>

					<input type="number" value={itemCount} onChange={onQuantityChange} />

					<button className="normal" onClick={() => handleAddToCart(currentProduct)}>
						Add to Cart
					</button>
					<h4>Product Details</h4>

					<span>
						The Gidan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd.
						fabric constructed from 100% cotton, this classic fit preshrunk jersey knit
						provides unmatched comfort with each wear.
					</span>
				</div>
			</section>

			<section id="product1" className="section-p1">
				<h2>Featured Products</h2>
				<p>Summer Collection New Modern Design</p>
				<div className="pro-container">
					{newArrivals.map(({ image, ...product }) => (
						<ProductCard key={product.id} image={importDynamicImage(image)} {...product} />
					))}
				</div>
			</section>

			<Newsletter />
		</>
	);
}

export default ProductDetails;
