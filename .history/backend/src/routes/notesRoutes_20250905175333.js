import express from "express";

const router = express.Router();

import { createNote, deleteNote, getAllNotes,getNotebyid, updateNote } from "../controllers/notesControllers.js";

router.get("/",getAllNotes);
router.get("/:id",getNotebyid);
router.post("/",createNote);
router.put("/:id",updateNote);
router.delete("/:id",deleteNote)
export default router;