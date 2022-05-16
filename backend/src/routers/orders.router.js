import { Router } from "express";

import {
    saveOrder,
    sendXlsxOrder,
    deleteOrder,
} from "../controllers/orders.controller.js";

const router = Router();

router.post("/", saveOrder);
router.get("/xlsx/:id", sendXlsxOrder);
router.delete("/:id", deleteOrder);

export default router;
