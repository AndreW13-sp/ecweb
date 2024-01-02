import asyncHandler from "../utils/asyncHandler.util.js";
import Razorpay from "razorpay"
import dotenv from "dotenv";
import shortid from "shortid";


dotenv.config({});

const razorpay = new Razorpay({
	key_id: process.env.RAZORPAY_KEY_ID,
	key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const handlePayment = asyncHandler(async (req, res) => {
	console.log(req.body);
	const payment_capture = 1;
	const amount = req.body.amount * 100;
	const currency = "INR";

	const options = {
		amount,
		currency,
		receipt: shortid.generate(),
		payment_capture,
	};

	try {
		const response = await razorpay.orders.create(options);
		console.log(response);
		res.status(200).json({
			id: response.id,
			currency: response.currency,
			amount: response.amount,
			key_id: process.env.RAZORPAY_KEY_ID,
		});
	} catch (err) {
		console.log(err);
	}
});

export { handlePayment };




