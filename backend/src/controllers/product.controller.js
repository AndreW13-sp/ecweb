import ApiResponse from "../lib/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.util.js";

export const getProducts = asyncHandler((req, res) => {
	return res.status(200).json(new ApiResponse(200, null));
});

export const getProduct = asyncHandler((req, res) => {
	return res.status(200).json(new ApiResponse(200, null));
});

export const createProduct = asyncHandler((req, res) => {
	return res.status(201).json(new ApiResponse(201, null));
});

export const updateProduct = asyncHandler((req, res) => {
	return res.status(200).json(new ApiResponse(200, null));
});

export const deleteProduct = asyncHandler((req, res) => {
	return res.status(204).end();
});
