import jwt from "jsonwebtoken";

import { findUserOrThrowError } from "../controllers/user.controller.js";
import { AuthorizationError } from "../errors/AuthorizationError.js";
import asyncHandler from "../utils/asyncHandler.util.js";
import { Config } from "./../lib/config.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
	try {
		// Extract the token from the cookie or request headers
		const token =
			req.cookies?.access_token || req.header("Authorization")?.replace("Bearer ", "");
		if (!token) {
			throw new AuthorizationError("Unauthenticated request");
		}

		// Decode the token and access the user info
		const decodedToken = jwt.verify(token, Config.Jwt.AccessTokenSecret);

		// Find the user in the database
		const user = await findUserOrThrowError({
			payload: decodedToken?.id,
			fields: "-password -refreshToken -salt -__v -updatedAt",
		});
		if (!user) {
			throw new AuthorizationError("Invalid access token");
		}

		// Attach the user to the request object
		req.user = user;
		next();
	} catch (err) {
		throw next(err);
	}
});
