import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function ProductCard({ id, image, name, description, rating, price }) {
	const navigate = useNavigate();

	return (
		<div className="pro">
			<Link to={`/product-details/${id}`}>
				<img src={image} alt="" />

				<div className="des">
					<span>{name}</span>
					<h5>{description}</h5>

					<div className="star">
						{Array.from({ length: rating }).map((val) => (
							<i key={`render-${val}-${Math.random() * 20}`} className="fas fa-star"></i>
						))}
					</div>

					<h4>₹{price}</h4>
				</div>

				<button onClick={() => navigate("/cart")}>
					<i className="fal fa-shopping-cart cart"></i>
				</button>
			</Link>
		</div>
	);
}

export default ProductCard;
