export class HttpError extends Error {
	#statusCode = 500;
	#details = null;

	constructor(statusCode, message, details) {
		super(message);
		this.name = this.constructor.name;
		this.message = message;
		this.#statusCode = statusCode;
		this.#details = details;
		Error.captureStackTrace(this, this.constructor);
	}

	getStatusCode() {
		return this.#statusCode;
	}

	toJSON() {
		return {
			statusCode: this.#statusCode,
			message: this.message,
			success: false,
			...(this.#details ? { details: this.#details } : {}),
		};
	}
}
