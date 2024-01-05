import mongoose from "mongoose";

import { Config } from "./config.js";

let instance = null;

async function connect() {
	try {
		if (!instance) {
			instance = await mongoose.connect(Config.Database.URL);
		}

		// On successful connection to MongoDB database
		mongoose.connection.on("connected", () => {
			console.info("✅ Connected to the MongoDB Database");
			console.info(`🗃️  DB Host: ${instance.connection.host}`);
		});

		// On disconnection from MongoDB database
		instance.connection.on("disconnected", () => {
			console.log("Disconnected from Mongodb Database");
		});

		// On reconnection to MongoDB database
		instance.connection.on("reconnected", () => {
			console.log("Reconnected to Mongodb Database");
		});
	} catch (err) {
		if (instance) {
			await instance.disconnect();
		}
		process.on("SIGINT", () => {
			if (instance) {
				instance.connection.close(() => {
					console.log("Disconnected from MongoDB database through app termination");
					process.exit(0);
				});
			}
		});
		console.log("⚠ Mongodb connection error:", err);
		process.exit(1);
	}
}

export default connect;
