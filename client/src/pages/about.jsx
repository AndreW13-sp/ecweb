import AboutImage from "../assets/img/about/a6.jpg";
import MainLayout from "../layouts/main";

function About() {
	return (
		<MainLayout>
			<section id="page-header" className="about-header">
				<h2>#knowUs</h2>
				<p>Sup !!!</p>
			</section>

			<section id="about-head" className="section-p1">
				<img src={AboutImage} />
				<div>
					<h2>Who we are ?</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi totam veritatis
						dolorem. A nesciunt eligendi molestiae quasi repudiandae nisi fugiat! Eaque,
						reprehenderit rem tenetur error aut assumenda eum unde! Consequuntur.
					</p>
					<abbr title="">Create stunning responsive website with me !</abbr>
					<br />
					<br />

					{/* eslint-disable-next-line react/no-unknown-property */}
					<marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">
						Create stunning responsive website with me !
					</marquee>
				</div>
			</section>
		</MainLayout>
	);
}

export default About;
