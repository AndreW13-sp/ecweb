import { Footer, Header } from "../components";

// eslint-disable-next-line react/prop-types
function MainLayout({ page: Page }) {
	return (
		<>
			<Header />
			<Page />
			<Footer />
		</>
	);
}

export default MainLayout;
