import Redis from "ioredis";

// Kết nối đến Redis (localhost hoặc dùng Redis Cloud)
const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

export default redis;