import express, { json, urlencoded } from "express";
import morgan from "morgan";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

import mailRouter from "./src/routers/mail.router.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
const __dirname = dirname(fileURLToPath(import.meta.url));

// Settings
app.set("PORT", PORT);

// Middlewares
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

// Public
app.use(express.static(resolve(__dirname, "../frontend/build")));

// Routes
app.use("/api/mail", mailRouter);

export default app;