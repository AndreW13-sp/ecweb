import { Router } from "express";

import { handlePayment } from "../controllers/payment.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

/**
 * Payment Router for RazorPay Gateway
 */
const router = Router();

router.route("/create-order").post(verifyJWT, handlePayment);

export default router;
