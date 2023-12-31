import { Router } from "express";

import { handlePayment } from "../controllers/payment.controller";

/**
 * Payment Router for RazorPay Gateway
 */
const router = Router();

router.route("/pay").post(handlePayment);

export default router;
