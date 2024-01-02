import { HttpError } from "./HttpError.js";

export class NotFoundError extends HttpError {
	constructor(message, details) {
		super(404, message, details);
	}
}
