import express, { json, urlencoded } from "express";
import morgan from "morgan";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import compression from "compression";

import router from "./src/routers/index.js";

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
app.use(compression());

// Routes
app.use("/api", router);

// Public
app.use("/", express.static(resolve(__dirname, "../frontend/build")));
app.use("/*", express.static(resolve(__dirname, "../frontend/build")));

export default app;
