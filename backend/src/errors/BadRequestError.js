import { HttpError } from "./HttpError.js";

export class BadRequestError extends HttpError {
	constructor(message = "Bad Request Error", details = null) {
		super(400, message, details);
	}
}
