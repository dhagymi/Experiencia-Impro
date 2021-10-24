import { Router } from "express";

import mailRouter from "./mail.router.js";
import showsRouter from "./shows.router.js";
import ordersRouter from "./orders.router.js";

const router = Router();

router.use("/mail", mailRouter);
router.use("/shows", showsRouter);
router.use("/orders", ordersRouter);

export default router;
