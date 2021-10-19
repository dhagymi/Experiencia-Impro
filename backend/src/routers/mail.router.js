import { Router } from "express";

import { sendFormEmail } from "../controllers/mail.controller.js";

const router = Router();

router.post("/", sendFormEmail);

export default router;
