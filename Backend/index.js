import dotenv from "dotenv";
dotenv.config();

import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import connectDB from "./config/db.config.js";
import app from "./src/app.js";

await connectDB();

export default app;