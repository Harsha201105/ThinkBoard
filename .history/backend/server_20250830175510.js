// const express = require("express");
import express from "express";

const app = express();

app.get("/api",(req,res)=>{
    res.send("You got 5 notes");
});
app.listen(5001,()=>{
    console.log("Server started in the port 5001");
});