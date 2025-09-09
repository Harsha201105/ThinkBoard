import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        mongoose.connect("mongodb+srv://velagaharshavardhan21_db_user:WYtM6YkCWN0QFxVJ@cluster0.usyibhx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    }
}