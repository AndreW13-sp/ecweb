import { ConflictError, NotFoundError } from "../errors/index.js";
import ApiResponse from "../lib/ApiResponse.js";
import User from "../models/User.model.js";
import asyncHandler from "../utils/asyncHandler.util.js";

export const findUserOrThrowError = async ({ payload, message, fields = "" }) => {
	let user = null;
	if (typeof payload === "string") {
		// Find by user id field
		user = await User.findById(payload).select(fields);
	} else {
		// Find by user some other fields
		user = await User.findOne({ ...payload }).select(fields);
	}

	if (!user) throw new NotFoundError(message);

	return user;
};

export const getUsers = asyncHandler(async (req, res) => {
	const users = await User.find().select("-__v -salt -password -updatedAt -refreshToken");
	return res.status(200).json(new ApiResponse(200, users));
});

export const getUser = asyncHandler(async (req, res) => {
	const { params } = req.parsedCtx;
	const user = await findUserOrThrowError({
		payload: params.userId,
		fields: "-__v -salt -password -updatedAt -refreshToken",
	});
	return res.status(200).json(new ApiResponse(200, user));
});

export const createUser = asyncHandler(async (req, res) => {
	const { body } = req.parsedCtx;

	const userExists = await User.findOne({ email: body.email });
	if (userExists) {
		throw new ConflictError("email is already in use");
	}

	const user = new User({ username: body.username, email: body.email, password: body.password });
	void (await user.save());

	return res.status(201).json(new ApiResponse(201, user.serialize(), "user created successfully"));
});

export const updateUser = asyncHandler(async (req, res) => {
	const { body, params } = req.parsedCtx;

	const user = await findUserOrThrowError({ payload: params.userId });

	const updatedUser = await User.findByIdAndUpdate(user._id, body, { new: true }).select(
		"-__v -salt -password -updatedAt"
	);

	return res.status(200).json(new ApiResponse(200, updatedUser, "user was updated successfully"));
});

export const deleteUser = asyncHandler(async (req, res) => {
	const { params } = req.parsedCtx;

	const user = await findUserOrThrowError({ payload: params.userId });

	const userToDelete = await User.deleteOne({ email: user.email });
	if (!userToDelete.deletedCount) {
		throw new ApiError(500, "something went wrong while deleting user");
	}

	return res.status(204).end();
});

export const getActiveUser = asyncHandler((req, res) => {
	return res.status(200).json(new ApiResponse(200, req.user));
});
