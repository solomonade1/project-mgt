import mongoose from "mongoose";

export const connectDB = async () => {
    const connect = await mongoose.connect(process.env.MONGO_URL);

    console.log(`MongoDB connected: ${connect.connection.host}`.cyan.underline.bold )
}