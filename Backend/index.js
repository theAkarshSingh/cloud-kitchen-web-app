import dotenv from "dotenv";
dotenv.config();

import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import connectDB from "./config/db.config.js";
import app from "./src/app.js";

const PORT = process.env.PORT || 5000;

// Initialize the database connection
connectDB();

// Start the server only if running locally (not on Vercel)
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log(`API Docs: http://localhost:${PORT}/api-docs`);
  });
}

// Export the Express API for Vercel serverless functions
export default app;