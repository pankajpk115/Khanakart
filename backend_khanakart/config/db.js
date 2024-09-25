import mongoose from "mongoose";

export const connectDB = async ()=>{
    mongoose.connect('mongodb+srv://pankajpkpk909:pankajpk115@cluster0.rayyz.mongodb.net/khanakart').then(()=>console.log("DB connected!")
    );
}

