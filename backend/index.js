import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRouter from "./router/auth.router.js";
import messageRouter from "./router/message.router.js";
import userRouter from "./router/user.router.js";

import connectDB from "./db/mongo.js";
import { app, server } from "./socket.js";

dotenv.config();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);
app.use("/api/user", userRouter);

server.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
