import { Router } from "express";

import { handlePayment } from "../controllers/payment.controller.js";

/**
 * Payment Router for RazorPay Gateway
 */
const router = Router();

router.route("/create-order").post(handlePayment);

export default router;
