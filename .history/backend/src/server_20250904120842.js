import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

app.use("/api/notes",notesRoutes);

app.listen(5001,()=>{
    console.log("Server started in the port 5001");
});

mongodb+srv://velagaharshavardhan21_db_user:WYtM6YkCWN0QFxVJ@cluster0.usyibhx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0