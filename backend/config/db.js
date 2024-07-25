import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000 // 5 seconds timeout
        });
        console.log(`MongoDB Conneted: ${con.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error}`);
        process.exit(1)
    }
}

export default connectDB;