import { HttpError } from "../errors/HttpError.js";

const globalErrorHandler = (err, req, res, next) => {
	// Handle ApiError
	if (err instanceof HttpError) {
		return res.status(err.getStatusCode()).json(err.toJSON());
	}

	// Handle miscellaneous errors
	const statusCode = err.statusCode || 500;
	return res.status(statusCode).json({
		statusCode: statusCode,
		data: null,
		message: err.message,
	});
};

export default globalErrorHandler;
