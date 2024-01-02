import { HttpError } from "./HttpError.js";

export class ConflictError extends HttpError {
	constructor(message = "Conflict Error", details = null) {
		super(409, message, details);
	}
}
