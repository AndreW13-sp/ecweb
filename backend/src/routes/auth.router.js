import { Router } from "express";

import { login, refreshToken } from "../controllers/auth.controller.js";
import { createUser } from "../controllers/user.controller.js";
import { validateRequestInput } from "../middlewares/validation.middleware.js";
import { loginSchema } from "../schemas/auth.schema.js";
import { createUserDto } from "../schemas/user.schema.js";

/**
 * Auth Router.
 *
 * @type {Router}
 */
const router = Router();

router.route("/login").post(validateRequestInput(loginSchema), login);
router.route("/refresh").post(refreshToken);
router.route("/register").post(validateRequestInput(createUserDto), createUser);

export default router;
