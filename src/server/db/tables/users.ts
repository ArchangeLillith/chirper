import { Router } from "express";
import db from "../index";

//Our chirps router
const router = Router();

//GET /api/chirps/{id}
//Get one by ID
router.get("/:id", async (req, res) => {
	try {
		const id = parseInt(req.params.id, 10);
		const [chirp] = await db.chirps.getOne(id);
		res.json(chirp);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internanal server error", error });
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
		res.status(500).json({ message: "Internanal server error", error });
	}
});

//POST /api/chirps/
//req.body should look like { description: string }
router.post("/", async (req, res) => {
	try {
		const newChirp = req.body;
		const result = await db.chirps.insert(newChirp.description);
		//This shows the ID that was added
		res.json({ message: "Chirp created", id: result.insertId });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internanal server error", error });
	}
});

export default router;
