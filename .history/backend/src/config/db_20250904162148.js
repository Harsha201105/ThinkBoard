import mongoose from "mongoose";

export const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
    }catch(error){
        console.error("Error conncection to DB",error);
        process.exit(1);
    }
}