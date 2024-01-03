import { Router } from "express";

import {
	createProduct,
	deleteProduct,
	getProduct,
	getProducts,
	updateProduct,
} from "../controllers/product.controller.js";
import { validateRequestInput } from "../middlewares/validation.middleware.js";

/**
 * Product Router
 */
const router = Router();

router.route("/").get(getProducts).post(validateRequestInput(), createProduct);

router
	.route("/productId")
	.get(validateRequestInput(), getProduct)
	.patch(validateRequestInput(), updateProduct)
	.delete(validateRequestInput(), deleteProduct);

export default router;
