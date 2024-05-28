import { Router } from "express";
import db from "../db/index";

//Our chirps router
const router = Router();

//GET /api/chirps/{id}
//Get one by ID
router.get("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const [chirp] = await db.chirps.getOne(id);
		res.json(chirp);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal server error", error });
	}
});

// GET /api/chirps/
//Get all
router.get("/", async (req, res) => {
	try {
		const chirps = await db.chirps.getAll();
		res.json(chirps);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal server error", error });
	}
});

//POST /api/chirps/
//req.body should look like { id: string, user_id: string, body: string, location: string }
router.post("/", async (req, res) => {
	try {
		const { id, user_id, body, location } = req.body;
		const result = await db.chirps.insert(id, user_id, body, location);
		//This shows the ID that was added
		res.json({ message: "Chirp created", id: result.insertId });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal server error", error });
	}
});

//DELETE /api/chirps/{id}
//req.body should look like { id: string }
router.delete(`/:id`, async (req, res) => {
	try {
		const id = req.params.id;
		await db.mentions.deleteMentionsByChirpId(id);
		await db.chirps.deleteOne(id);
		res.json({ message: "Chirp and it's mentiontions deleted" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal server error", error });
	}
});

export default router;
