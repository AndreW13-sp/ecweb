import dotenv from "dotenv";

import { app } from "./app.js";
import { Config } from "./lib/config.js";
import connect from "./lib/connect.js";

// Load and parse environment variables
dotenv.config({});

(async function () {
	// Connect to the MongoDB database
	await connect();

	// Spin up the express server
	const PORT = Config.App.Port;
	app.listen(PORT, console.log(`Server up and running at http://localhost:${PORT}/api/v1`));

	// Listen for any unhandled exceptions thrown by the server
	app.on("error", (error) => {
		console.log(error);
		throw error;
	});

	// Handle Unhandled promise rejections thrown by the server
	process.on("unhandledRejection", (reason, promise) => {
		console.log("Encountered Unhandled Rejection at:", promise, "reason:", reason);
		process.exit(1);
	});
})();
