import dotenv from "dotenv";
import { createClient } from "redis";

dotenv.config();

const redisClient = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379",
});

redisClient.on("connect", () => {
  console.log("Redis connected...");
});

let errorLogged = false;
redisClient.on("error", (err) => {
  if (process.env.NODE_ENV !== "production") {
    if (!errorLogged) {
      console.error("Redis connection failed (Local). Suppressing further errors.");
      errorLogged = true;
    }
    return;
  }
  console.error("Redis error:", err);
});

// Connect gracefully — don't block the server if Redis is unavailable
redisClient.connect().catch((err) => {
  console.error("Redis connection failed:", err.message);
  console.warn("App will continue without caching.");
});

export default redisClient;