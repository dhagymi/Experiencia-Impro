import express, { json, urlencoded } from "express";
import morgan from "morgan";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import historyApiFallback from "connect-history-api-fallback";

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
app.use(
	historyApiFallback({
		rewrites: [
			{ from: "/classes", to: "/" },
			{ from: "/podcast", to: "/" },
			{ from: "/shows", to: "/" },
			{ from: "/contact", to: "/" },
			{ from: "/contact", to: "/" },
			{ from: /\/*/, to: "/" },
		],
	})
);

// Public
app.use(express.static(resolve(__dirname, "../frontend/build")));

// Routes
app.use("/api/mail", mailRouter);

export default app;
