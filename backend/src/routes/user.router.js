import { Router } from "express";

import {
	createUser,
	deleteUser,
	getUser,
	getUsers,
	updateUser,
} from "../controllers/user.controller.js";
import validateRequestInput from "../middlewares/validation.middleware.js";
import { createUserDto, updateUserDto, userIdValidation } from "../schemas/user.schema.js";

/**
 * User Router
 */
const router = Router();

router.route("/").get(getUsers).post(validateRequestInput(createUserDto), createUser);

router
	.route("/:userId")
	.get(validateRequestInput(userIdValidation), getUser)
	.patch(validateRequestInput(updateUserDto), updateUser)
	.delete(validateRequestInput(userIdValidation), deleteUser);

export default router;
