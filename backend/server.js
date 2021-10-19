import app from "./app.js";
import emoji from "node-emoji";

const PORT = app.get("PORT");

const server = app.listen(PORT, () =>
	console.log(emoji.get(`fire`), `Serve on http://localhost:${PORT}`)
);
server.on("error", (error) => console.log(error));
