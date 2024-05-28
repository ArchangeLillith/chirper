import { Router } from "express";
import chirpsRouter from "./chirps";
import mentionsRouter from "./mentions";

//Our API router
const router = Router();

router.use("/chirps", chirpsRouter);
router.use("/mentions", mentionsRouter);

export default router;
