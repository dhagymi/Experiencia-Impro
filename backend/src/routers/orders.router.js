import { Router } from "express";

import { saveOrder } from "../controllers/orders.controller.js";

const router = Router();

router.post("/", saveOrder);

export default router;
