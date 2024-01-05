import dotenv from "dotenv";

// Load and parse environment variables
dotenv.config({});

export class Config {
	static App = {
		Port: process.env.PORT || 3000,
		NodeEnvironment: process.env.NODE_ENV || "development",
	};

	static Frontend = {
		URL: process.env.FRONT_END_URL || "http://localhost:5173",
	};

	static Database = {
		URL: process.env.DATABASE_URL || "",
	};

	static Razorpay = {
		KeyID: process.env.RAZORPAY_KEY_ID || "",
		KeySecret: process.env.RAZORPAY_KEY_SECRET || "",
	};

	static Jwt = {
		AccessTokenSecret: process.env.ACCESS_TOKEN_SECRET || "",
		AccessTokenExpiry: process.env.ACCESS_TOKEN_EXPIRY || "1h",
		RefreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || "",
		RefreshTokenExpiry: process.env.REFRESH_TOKEN_EXPIRY || "3d",
	};
}
