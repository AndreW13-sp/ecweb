import { Link } from "react-router-dom";

import Newsletter from "../components/Newsletter";
import { blogs } from "../data";
import { importDynamicImage } from "../utils";

function Blog() {
	return (
		<>
			<section id="page-header" className="blog-header">
				<h2>#readmore</h2>
				<p>Read all case studies about our products !!!</p>
			</section>

			<section id="blog">
				<div className="blog-box">
					<div className="blog-img">
						<img src="/img/blog/b1.jpg" />
					</div>
					<div className="blog-details">
						<h4>The Cotton-Jersey Zip-Up Hoodie</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illo
							architecto voluptatum minus omnis fugit maiores perferendis deleniti veniam
							quod libero assumenda doloribus alias magni, iste exercitationem repellat,
							porro eos.
						</p>
						<a href="#">CONTINUE READING</a>
						<h1>13/01</h1>
					</div>
				</div>

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
		</>
	);
}

export default Blog;
