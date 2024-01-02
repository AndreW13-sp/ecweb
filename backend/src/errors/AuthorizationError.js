import { HttpError } from "./HttpError.js";

export class AuthorizationError extends HttpError {
	constructor(message = "Unauthorized Error", details = null) {
		super(401, message, details);
	}
}
