import { Router } from "express";

import { saveOrder, sendXlsxOrder } from "../controllers/orders.controller.js";

const router = Router();

router.post("/", saveOrder);
router.get("/xlsx/:id", sendXlsxOrder);

export default router;
