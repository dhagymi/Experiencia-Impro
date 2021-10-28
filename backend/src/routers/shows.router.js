import { Router } from "express";

import {
	getShows,
	getShowsContional,
	updateShow,
} from "../controllers/shows.controller.js";

const router = Router();

router.get("/", getShows);
router.post("/", getShowsContional);
router.put("/:id", updateShow);

export default router;
