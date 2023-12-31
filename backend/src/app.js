import cors from "cors";
import express from "express";

import paymentRouter from "./routes/payment.routes.js";

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
app.use("/api/v1/checkout", paymentRouter);

export { app };
