import { HttpError } from "./HttpError.js";

export class InternalServerError extends HttpError {
	constructor(message = "Internal Server Error", details = null) {
		super(500, message, details);
	}
}
