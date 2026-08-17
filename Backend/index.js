import dotenv from "dotenv";
dotenv.config();

import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import connectDB from "./config/db.config.js";
import app from "./src/app.js";

const PORT = process.env.PORT || 3000;

// Local development
if (process.env.VERCEL !== "1") {
    connectDB().then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`);
        });
    });
}

// Vercel / production
else {
    await connectDB();
}

export default app;