import { Router } from "express";

import {
	/* 	getShowDocRef, */
	getShows,
	getShowsContional,
	updateShow,
} from "../controllers/shows.controller.js";

const router = Router();

router.get("/", getShows);
/* router.get("/ref/:id", getShowDocRef); */
router.post("/", getShowsContional);
router.put("/:id", updateShow);

export default router;
