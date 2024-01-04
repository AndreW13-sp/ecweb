import propTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "../store/auth";

function ProtectedRoute({ page: Page }) {
	const user = useAuth((state) => state.user);
	const location = useLocation();

	if (!user) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	} else {
		return <Page />;
	}
}

ProtectedRoute.propTypes = {
	page: propTypes.elementType,
};

export default ProtectedRoute;
