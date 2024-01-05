import { Router } from "express";

import { handlePayment } from "../controllers/payment.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { validateRequestInput } from "./../middlewares/validation.middleware.js";
import { paymentSchema } from "./../schemas/payment.schema.js";

/**
 * Payment Router for RazorPay Gateway
 */
const router = Router();

router.route("/create-order").post(verifyJWT, validateRequestInput(paymentSchema), handlePayment);

export default router;
