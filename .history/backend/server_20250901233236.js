import express from "express";

const app = express();

app.get("/api/notes",(req,res)=>{
    res.status(200).send("You got 2011 notes");
});
app.post("/api/notes",(res,req)=>{
    res.status(201).send("your note has been created successfully");
})
app.listen(5001,()=>{
    console.log("Server started in the port 5001");
});
