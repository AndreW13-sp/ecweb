import { Link } from "react-router-dom";

import Logo from "../assets/img/logo.png";
import AppStoreImage from "../assets/img/pay/app.jpg";
import PayStoreImage from "../assets/img/pay/pay.png";
import PlayStoreImage from "../assets/img/pay/play.jpg";

function Footer() {
<<<<<<< HEAD
	return (
		<footer className="section-p1">
			<div className="col">
				<img className="logo" src={Logo} alt="" />
=======
  return (
		<footer className="section-p1">
			<div className="col">
				<img className="logo" src="img/logo.png" alt="" />
>>>>>>> 68c1d9b70b044eb83be923109b7fb0cf387e79fd
				<h4>Contact</h4>
				<p>
					<strong>Phone:</strong> +01 2222 365 / (+91) 01 2345 6789
				</p>
				<p>
					<strong>Hours:</strong>10:00 - 18:00, Mon - Sat
				</p>
				<div className="follow">
					<h4>Follow Us</h4>
					<div className="icon">
						<i className="fab fa-facebook-f"></i>
						<i className="fab fa-twitter"></i>
						<i className="fab fa-instagram"></i>
						<i className="fab fa-pinterest-p"></i>
						<i className="fab fa-youtube"></i>
					</div>
				</div>
			</div>

			<div className="col">
				<h4>About</h4>
<<<<<<< HEAD
				<Link to="/about">About us</Link>
				<Link to="#">Delivery Info</Link>
				<Link to="#">Privacy Policy</Link>
				<Link to="#">Terms &amp; Conditions</Link>
				<Link to="/contact">Contact us</Link>
=======
				<a href="#">About us</a>
				<a href="#">Delivery Info</a>
				<a href="#">Privacy Policy</a>
				<a href="#">Terms &amp; Conditions</a>
				<a href="#">Contact us</a>
>>>>>>> 68c1d9b70b044eb83be923109b7fb0cf387e79fd
			</div>

			<div className="col">
				<h4>My Account</h4>
<<<<<<< HEAD
				<Link to="/signup">Sign In</Link>
				<Link to="/cart">View Cart</Link>
				<Link to="#">My Wishlist</Link>
				<Link to="#">Track My Orders</Link>
				<Link to="#">Help</Link>
=======
				<a href="/signup.html">Sign In</a>
				<a href="#">View Cart</a>
				<a href="#">My Wishlist</a>
				<a href="#">Track My Orders</a>
				<a href="#">Help</a>
>>>>>>> 68c1d9b70b044eb83be923109b7fb0cf387e79fd
			</div>

			<div className="col install">
				<h4>Install App</h4>
				<p>From App Store or Google Play</p>
				<div className="row">
<<<<<<< HEAD
					<img src={AppStoreImage} alt="" />
					<img src={PlayStoreImage} alt="" />
				</div>
				<p>Secured Payment Gateways</p>
				<img src={PayStoreImage} alt="" />
=======
					<img src="./src/assets/img/pay/app.jpg" alt="" />
					<img src="./src/assets/img/pay/play.jpg" alt="" />
				</div>
				<p>Secured Payment Gateways</p>
				<img src="./src/assets/img/pay/pay.png" alt="" />
>>>>>>> 68c1d9b70b044eb83be923109b7fb0cf387e79fd
			</div>

			<div className="copyright">
				<p>Sp</p>
			</div>
		</footer>
<<<<<<< HEAD
	);
=======
  );
>>>>>>> 68c1d9b70b044eb83be923109b7fb0cf387e79fd
}

export default Footer;




