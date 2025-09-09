import express from "express";

const router = express.Router();

import { createNote, deleteNote, getAllNotes, updateNote } from "../controllers/notesControllers.js";

router.get("/",getAllNotes);
router.post("/",createNote);
router.put("/",updateNote);
router.delete("/",deleteNote)
export default router;

// app.get("/api/notes",(req,res)=>{
//     res.status(200).send("You got 123456 notes");
// });
// app.post("/api/notes",(req,res)=>{
//     res.status(201).json({message:"Your note have been created successfully"});
// });
// app.put("/api/notes/:id",(req,res)=>{
//     res.status(200).json({message:"Your post updated successfully"});
// });
// app.delete("/api/notes/:id",(req,res)=>{
//     res.status(200).json({message:"Your post deleted successfully"});
// });