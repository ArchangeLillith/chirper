import { Router } from "express";
import chirpsRouter from "./chirps";
import mentionsRouter from "./mentions";
import usersRouter from "./users";

//Our API router
const router = Router();

router.use("/chirps", chirpsRouter);
router.use("/mentions", mentionsRouter);
router.use("/users", usersRouter);

export default router;
