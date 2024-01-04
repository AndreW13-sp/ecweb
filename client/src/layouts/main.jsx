import propTypes from "prop-types";

import { Footer, Header } from "../components";

function MainLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

MainLayout.propTypes = {
	children: propTypes.node,
};

export default MainLayout;
