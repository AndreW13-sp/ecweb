import dotenv from "dotenv";
import { app } from "./app";

// Load and parse environment variables
dotenv.config({ path: "../.env" });

(async function () {
	const PORT = process.env.PORT || 3000;
	app.listen(PORT, console.log(`Server up and running at http://localhost:${PORT}`));
})();
