import { Router } from "express";
import chirpsRouter from "./chirps";

//Our API router
const router = Router();

router.use("/chirps", chirpsRouter);

export default router;
