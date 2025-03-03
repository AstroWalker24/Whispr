import express from 'express';
import authRoutes from '../routes/auth.js';
import dotenv from 'dotenv';
import { connectDB } from '../lib/db.js';

dotenv.config();


const app = express();

const port = process.env.PORT || 6002;


app.use("/api/auth", authRoutes);
app.use(express.json());



app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
    connectDB();
})