import express from "express";
import notesRoutes from "./routes/notesRoutes";

const app = express();

app.use("/api/notes",notesRoutes);

app.listen(5001,()=>{
    console.log("Server started in the port 5001");
});