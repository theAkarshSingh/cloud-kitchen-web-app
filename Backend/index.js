import dotenv from "dotenv";
dotenv.config();

import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import connectDB from "./config/db.config.js";
import app from "./src/app.js";

const PORT = process.env.PORT || 3000;

// Connect to DB and conditionally start the server
connectDB().then(() => {
    // Only start the HTTP server in local/non-Vercel environments.
    // On Vercel, the platform handles incoming requests and calls this file
    // as a serverless function — no need to call app.listen().
    if (!process.env.VERCEL) {
        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`);
        });
    }
}).catch((err) => {
    console.error("Failed to connect to database:", err);
    process.exit(1);
});

// Export app for Vercel's serverless runtime
export default app;