function Newsletter() {
	return (
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
	);
}

export default Newsletter;