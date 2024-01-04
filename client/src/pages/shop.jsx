import ProductCard from "../components/ProductCard";
import { products } from "../data";
import MainLayout from "../layouts/main";
import { importDynamicImage } from "../utils";

function Shop() {
	return (
		<MainLayout>
			<section id="page-header">
				<h2>#Stay Home</h2>
				<p>Save more with coupons & up to 70% off!</p>
			</section>

			<section id="product1" className="section-p1">
				<div className="pro-container">
					{products.map(({ image, ...product }) => (
						<ProductCard key={product.id} image={importDynamicImage(image)} {...product} />
					))}
				</div>
			</section>
		</MainLayout>
	);
}

export default Shop;
