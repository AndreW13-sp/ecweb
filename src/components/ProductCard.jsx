import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function ProductCard({ id, image, name, description, rating, price }) {
	return (
		<div className="pro">
			<Link to={`/product-details/${id}`}>
				<img src={image} alt="" />

				<div className="des">
					<span>{name}</span>
					<h5>{description}</h5>

					<div className="star">
						{Array.from({ length: rating }).map((val) => (
							<i key={val} className="fas fa-star"></i>
						))}
					</div>

					<h4>₹{price}</h4>
				</div>

				<Link to="/cart">
					<i className="fal fa-shopping-cart cart"></i>
				</Link>
			</Link>
		</div>
	);
}

export default ProductCard;
