import express from "express";

const router = express.Router();

import { createNote, deleteNote, getAllNotes, updateNote } from "../controllers/notesControllers.js";

router.get("/",getAllNotes);
router.post("/",createNote);
router.put("/",updateNote);
router.delete("/",deleteNote)
export default router;