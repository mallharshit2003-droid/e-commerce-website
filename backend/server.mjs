import { createServer } from "node:http";
import mongoose from "mongoose";

const port = Number(process.env.BACKEND_PORT || 4000);
const mongoUrl = process.env.MONGODB_URL;

if (!mongoUrl) {
  console.error("MONGODB_URL is missing from frontend/.env.local");
  process.exit(1);
}

const server = createServer((request, response) => {
  response.setHeader("Content-Type", "application/json");
  response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  response.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (request.method === "OPTIONS") {
    response.writeHead(204);
    response.end();
    return;
  }

  if (request.url === "/health") {
    response.writeHead(200);
    response.end(JSON.stringify({ status: "ok", service: "multicart-backend" }));
    return;
  }

  response.writeHead(404);
  response.end(JSON.stringify({ message: "Backend route not found" }));
});

async function startServer() {
  try {
    await mongoose.connect(mongoUrl);
    console.log("MongoDB connected");
    server.listen(port, () => {
      console.log(`Backend running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
}

startServer();
