import { Link } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import { featureBox, newArrivals, products } from "../data";
import { importDynamicImage } from "../utils";

function Home() {
	return (
		<>
			<section id="hero">
				<h4>Trade-in-offer</h4>
				<h2>Super value deals</h2>
				<h1>On all products</h1>
				<p>Save more with coupons & up to 70% off!</p>

				<Link to="/shop">
					<button>Shop Now</button>
				</Link>
			</section>

			<section id="feature" className="section-p1">
				{featureBox.map(({ image, text }) => (
					<div key={text} className="fe-box">
						<img src={importDynamicImage(image)} alt="" />
						<h6>{text}</h6>
					</div>
				))}
			</section>

			<section id="product1" className="section-p1">
				<h2>Featured Products</h2>
				<p>Summer Collection New Modern Design</p>

				<div className="pro-container">
					{products.map((product) => (
						<ProductCard
							key={`featured-${product.id}`}
							id={product.id}
							image={importDynamicImage(product.image)}
							name={product.name}
							description={product.description}
							rating={product.rating}
							price={product.price}
						/>
					))}
				</div>
			</section>

			<section id="banner" className="section-m1">
				<h4>Repair Service</h4>
				<h2>
					Up to <span>20% Off</span> - All t-Shirts & Accessories
				</h2>
				<button className="normal" type="button">
					Explore More
				</button>
			</section>

			<section id="product1" className="section-p1">
				<h2>New Arrival</h2>
				<p>Summer Collection New Modern Design</p>

				<div className="pro-container">
					{newArrivals.map((product) => (
						<ProductCard
							key={`newArrival-${product.id}`}
							image={importDynamicImage(product.image)}
							name={product.name}
							description={product.description}
							rating={product.rating}
							price={product.price}
						/>
					))}
				</div>
			</section>

			<section id="sm-banner" className="section-p1">
				<div className="banner-box">
					<h4>crazy deals</h4>
					<h2>buy 1 get 1 free</h2>
					<span>The best classic dress is on sale at cara</span>
					<button className="white">Learn More</button>
				</div>

				<div className="banner-box banner-box-2">
					<h4>spring/summer</h4>
					<h2>upcoming season</h2>
					<span>The best classic dress is on sale at cara</span>
					<button className="white">Collection</button>
				</div>
			</section>

			<section id="banner3">
				<div className="banner-box">
					<h2>Season Sales</h2>
					<h3>Winter Collection -30% OFF</h3>
				</div>

				<div className="banner-box banner-box2">
					<h2>New Foot ware Collection</h2>
					<h3>Spring/Summer 2022</h3>
				</div>

				<div className="banner-box banner-box3">
					<h2>T-Shirts</h2>
					<h3>New Trendy Prints</h3>
				</div>
			</section>

			<section id="newsletter" className="section-p1 section-m1">
				<div className="newsText">
					<h4>Sign Up For Newsletters</h4>
					<p>
						get E-mail updates about our latest shop and
						<span> special offers.</span>
					</p>
				</div>

				<div className="form">
					<input type="email" placeholder="Your email address" />
					<button className="normal">Sign Up</button>
				</div>
			</section>
		</>
	);
}

export default Home;
