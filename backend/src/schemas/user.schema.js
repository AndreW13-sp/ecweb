import { z } from "zod";

export const createUserDto = z.object({
	body: z.object({
		username: z.string().min(2, "name must be at least 2 characters long"),
		email: z.string().email({ message: "email address is invalid" }),
		password: z.string().min(6, "password must be at least 6 characters"),
	}),
});

export const userIdValidation = z.object({
	params: z.object({
		userId: z.string({
			required_error: "userId is required and must be provided in the url parameter",
		}),
	}),
});

export const updateUserDto = z.object({
	params: z.object({
		userId: z.string({
			required_error: "userId is required and must be provided in the url parameter",
		}),
	}),
	body: z.object({
		username: z.string().min(2, "name must be at least 2 characters long").optional(),
		email: z.string().email({ message: "email address is invalid" }).optional(),
	}),
});
