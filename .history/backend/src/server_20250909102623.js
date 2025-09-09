import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import rateLimiter from "./middlewear/rateLimiter.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

console.log(process.env.MONGO_URI);


//middlewear
app.use(cors({
    origin: "http://localhost:5173",
}));
app.use(express.json());//this middlewear parse json bodies: req.body
app.use(rateLimiter);


app.use("/api/notes",notesRoutes);
app.use(express.static(path.join(__dirname,"../frontend/dist")));

connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log("Server started in the port",PORT);
    });
})