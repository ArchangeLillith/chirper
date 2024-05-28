//Here in case we need it, supposed to be blank for now
import { Router } from "express";
import db from "../db/index";

//Our users router
const router = Router();

// GET /api/users/
//Get all
router.get("/", async (req, res) => {
	try {
		const users = await db.users.getAll();
		res.json(users);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internanal server error", error });
	}
});

export default router;
