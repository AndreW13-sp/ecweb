import Razorpay from "razorpay";
import shortid from "shortid";

import { Config } from "../lib/config.js";
import asyncHandler from "../utils/asyncHandler.util.js";
import ApiResponse from "./../lib/ApiResponse.js";

const razorpay = new Razorpay({
	key_id: Config.Razorpay.KeyID,
	key_secret: Config.Razorpay.KeySecret,
});

export const handlePayment = asyncHandler(async (req, res) => {
	const { body } = req.parsedCtx;

	// Create a new Razorpay order object
	const response = await razorpay.orders.create({
		amount: body.amount * 100,
		currency: "INR",
		receipt: shortid.generate(),
		payment_capture: 1,
	});

	// Send the payment response
	return res.status(200).json(
		new ApiResponse(
			200,
			{
				id: response.id,
				currency: response.currency,
				amount: response.amount,
				key_id: Config.Razorpay.KeyID,
			},
			"Payment successful"
		)
	);
});
