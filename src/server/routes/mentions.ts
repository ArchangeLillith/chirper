import { Router } from "express";
import db from "../db/index";

//Our chirps router
const router = Router();

//GET /api/mentions/{user_id}
router.get("/:userId", async (req, res) => {
	try {
		const { userId } = req.params; // Extract the user ID from the request parameters
		const mentionedChirps = await db.mentions.getOne(userId);

		res.json(mentionedChirps);
	} catch (error) {
		console.error("Error fetching mentioned chirps:", error);
		res.status(500).json({ message: "Internal server error" });
	}
});

//POST /api/mentions/
router.post("/", async (req, res) => {
	try {
		const { user_id, chirp_id } = req.body; // Extract the user ID from the request parameters
		const mentionedChirps = await db.mentions.insert(user_id, chirp_id);
		res.json(mentionedChirps);
	} catch (error) {
		console.error("Error fetching mentioned chirps:", error);
		res.status(500).json({ message: "Internal server error" });
	}
});

//DELETE /api/mentions/
router.delete("/", async (req, res) => {
	try {
		const { user_id, chirp_id } = req.body; // Extract the user ID from the request parameters
		const result = await db.mentions.deleteMention(user_id, chirp_id);
		res.json(result);
	} catch (error) {
		console.error("Error fetching mentioned chirps:", error);
		res.status(500).json({ message: "Internal server error" });
	}
});

export default router;
