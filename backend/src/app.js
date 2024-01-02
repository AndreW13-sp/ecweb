import cors from "cors";
import express from "express";

import globalErrorHandler from "./lib/error-handler.js";
import jwtErrorHandler from "./lib/jwt-error-handler.js";
import paymentRouter from "./routes/payment.router.js";
import productRouter from "./routes/product.router.js";
import userRouter from "./routes/user.router.js";

/**
 * Main Express Application
 *
 * @type {import('express').Application}
 */
const app = express();

// Configure Global Middlewares
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: false, limit: "16kb" }));
app.use(cors());

// Test Endpoint
app.get("/ping", (req, res) => {
	res.status(200).json({ message: "pong" });
});

// Register all the routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/checkout", paymentRouter);

// Global error handler
app.use(jwtErrorHandler);
app.use(globalErrorHandler);

export { app };
