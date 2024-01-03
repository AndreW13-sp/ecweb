import { Router } from "express";

import {
	createUser,
	deleteUser,
	getUser,
	getUsers,
	updateUser,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { validateRequestInput } from "../middlewares/validation.middleware.js";
import { createUserDto, updateUserDto, userIdValidation } from "../schemas/user.schema.js";

/**
 * User Router
 */
const router = Router();

router.route("/").get(verifyJWT, getUsers).post(validateRequestInput(createUserDto), createUser);

router
	.route("/:userId")
	.get(verifyJWT, validateRequestInput(userIdValidation), getUser)
	.patch(verifyJWT, validateRequestInput(updateUserDto), updateUser)
	.delete(verifyJWT, validateRequestInput(userIdValidation), deleteUser);

export default router;
