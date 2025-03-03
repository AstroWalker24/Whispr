import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
    try{
        const connection = await mongoose.connect(process.env.MONGODB_CONN_STRING);
        console.log(`MongoDB Connected to: ${connection.connection.host}`)
    }

    catch (error) {
        console.log(`Error : ${error.message}`);
        process.exit(1);
    }
}