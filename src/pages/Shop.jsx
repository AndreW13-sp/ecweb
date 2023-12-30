import ProductCard from "../components/ProductCard";
import { products } from "../data";
import { importDynamicImage } from "../utils";

function Shop() {
	return (
		<>
			<section id="product1" className="section-p1">
				<div className="pro-container">
					{products.map(({ image, ...product }) => (
						<ProductCard key={product.id} image={importDynamicImage(image)} {...product} />
					))}
				</div>
			</section>
		</>
	);
}

export default Shop;
