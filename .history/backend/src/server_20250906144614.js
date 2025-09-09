import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import rateLimiter from "./middlewear/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

console.log(process.env.MONGO_URI);


//middlewear
app.use(express.json());//this middlewear parse json bodies: req.body
app.use(rateLimiter);
app.use(cors({
    origin: process.env.URL || "http://localhost:5173"
}));

app.use("/api/notes",notesRoutes);

connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log("Server started in the port",PORT);
    });
})
