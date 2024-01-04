import { Link } from "react-router-dom";

import Newsletter from "../components/Newsletter";
import { blogs } from "../data";
import MainLayout from "../layouts/main";
import { importDynamicImage } from "../utils";

function Blog() {
	return (
		<MainLayout>
			<section id="page-header" className="blog-header">
				<h2>#readmore</h2>
				<p>Read all case studies about our products !!!</p>
			</section>

			<section id="blog">
				{blogs.map((blog) => (
					<div key={blog.id} className="blog-box">
						<div className="blog-img">
							<img src={importDynamicImage(blog.image)} />
						</div>

						<div className="blog-details">
							<h4>{blog.title}</h4>
							<p>{blog.description}</p>
							<Link to="#">CONTINUE READING</Link>
							<h1>{blog.date}</h1>
						</div>
					</div>
				))}
			</section>

			<section id="pagination" className="section-p1">
				<Link to="#">1</Link>
				<Link to="#">2</Link>
				<Link to="#">
					<i className="fal fa-long-arrow-alt-right"></i>
				</Link>
			</section>

			<Newsletter />
		</MainLayout>
	);
}

export default Blog;
