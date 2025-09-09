import express from "express";

const router = express.Router();

router.get("/",(req,res)=>{
    res.status(200).send("You just fetched the notes");
});

router.post("/",(req,res)=>{
    res.status(201).json({message:"you have successfully created the notes"});
});

router.put("/:id",(req,res)=>{
    res.status(200).json({message:"You notes has be updated successfully"});
});

router.delete("/:id",(req,res)=>{
    res.status(200).json({message:"Your notes has be deleted successfully"});
});

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