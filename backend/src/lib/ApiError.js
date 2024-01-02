class ApiError extends Error {
	#statusCode = 500;
	#details = null;

	constructor(statusCode, message, details = null) {
		super(message);
		this.name = this.constructor.name;
		this.#statusCode = statusCode || 500;
		this.#details = details;
		Error.captureStackTrace(this, this.constructor);
	}

	get statusCode() {
		return this.#statusCode;
	}

	get details() {
		return this.#details;
	}

	toJson() {
		return {
			statusCode: this.#statusCode,
			message: this.message,
			success: false,
			...(this.#details ? { details: this.#details } : {}),
		};
	}
}

export default ApiError;
