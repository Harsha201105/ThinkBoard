import mongoose from "mongoose";

export const connectDB = async()=>{
    try{
        await mongoose.connect("mongodb+srv://velagaharshavardhan21_db_user:WYtM6YkCWN0QFxVJ@cluster0.usyibhx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MONGODB CONNECTED SUCCESSFULLY");
    }catch(error){
        console.error("Error conncection to DB",error);
    }
}