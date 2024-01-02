import { Link, NavLink, useLocation } from "react-router-dom";

import Logo from "../assets/img/logo.png";
import { useState } from "react";

const links = [
	{ href: "/", text: "Home" },
	{ href: "/shop", text: "Shop" },
	{ href: "/blog", text: "Blog" },
	{ href: "/about", text: "About" },
	{ href: "/contact", text: "Contact" },
	{ href: "/cart", text: "Cart", icon: "fa-shopping-bag" },
];

function Header() {
	const location = useLocation();

	const [mobile,setMobile] = useState(false)

	return (
		<section id="header">
			<Link to="/">
				<img src={Logo} className="logo" alt="" />
			</Link>

			<nav>
				<ul className={mobile ? "active" : ""} id="navbar">
					{links.map(({ href, text, icon }) => (
						<li key={text}>
							<NavLink to={href} className={location.pathname === href ? "active" : ""}>
								{icon ? <i className={`far ${icon}`}></i> : text}
							</NavLink>
						</li>
					))}

					<button id="close" onClick={() => setMobile(false)}>
						<i className="far fa-times"></i>
					</button>
				</ul>
			</nav>

			<div id="mobile" onClick={() => setMobile(true)}>
				<Link to="/cart">
					<i className="far fa-shopping-bag"></i>
				</Link>
				<i id="bar" className="fas fa-outdent"></i>
			</div>
		</section>
	);
}

export default Header;





