import { useCallback, useState } from "react";

import DecorationImage from "../assets/img/people/white_bg_pic.png";
import Newsletter from "../components/Newsletter";
import MainLayout from "../layouts/main";

function Contact() {
	const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

	const handleChange = useCallback((event) => {
		const { name, value } = event.target;
		setFormData((prevFormState) => ({ ...prevFormState, [name]: value }));
	}, []);

	return (
		<MainLayout>
			<section id="contact-details" className="section-p1">
				<div className="details">
					<span>Get In Touch</span>
					<h2>Meet me at the The University</h2>
					<h3>D.Y Patil University</h3>

					<div>
						<li>
							<i className="fal fa-map"></i>
							<p>Sector 7, Taloja Phase 1 Rd, Sector 7, Nerul, Navi Mumbai</p>
						</li>
						<li>
							<i className="fal fa-envelope"></i>
							<p>swa.pan@dypatil.edu </p>
						</li>
						<li>
							<i className="fal fa-phone"></i>
							<p>+91 91377-01291 </p>
						</li>
						<li>
							<i className="fal fa-clock"></i>
							<p>Monday To Friday: 09:00 am to 04:00 pm </p>
						</li>
					</div>
				</div>

				<div className="map">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4499781752115!2d73.02441313406271!3d19.043943521765968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3db00160053%3A0x95e9ca007676b993!2sDr.%20D%20Y%20Patil&#39;s%20Ramrao%20Adik%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1703844165903!5m2!1sen!2sin"
						width="600"
						height="450"
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</section>

			<section id="form-details">
				<form>
					<span> LEAVE A MESSAGE</span>
					<h2>{`We'll like to hear from you.`}</h2>
					<input
						type="text"
						placeholder="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
					/>
					<input
						type="email"
						placeholder="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
					<input
						type="text"
						placeholder="subject"
						name="subject"
						value={formData.subject}
						onChange={handleChange}
					/>
					<textarea
						name="message"
						cols="30"
						rows="10"
						placeholder="message"
						value={formData.message}
						onChange={handleChange}
					></textarea>
					<button className="normal">Submit</button>
				</form>

				<div className="people">
					<div>
						<img src={DecorationImage} alt="" />
						<p>
							<span>Swaraj Panchal</span> Web Developer <br />
							Phone: +91 9137701291 <br />
							Email: panchalswaraj13@gmail.com
						</p>
					</div>
				</div>
			</section>

			<Newsletter />
		</MainLayout>
	);
}

export default Contact;
