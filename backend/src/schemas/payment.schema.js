import { z } from "zod";

export const paymentSchema = z.object({
	body: z.object({
		amount: z.number({ required_error: "please provide order amount" }),
	}),
});
