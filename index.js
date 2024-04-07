import express from "express"
import mongoose from 'mongoose';
import cors from "cors"
const app = express();
import dotenv from "dotenv";
import jwt from "jsonwebtoken"
import router from "./routes/user.js"
import cookieParser from "cookie-parser";

dotenv.config();
const { MONGO_URL, PORT, TOKEN_KEY } = process.env;

// Connect to MongoDB
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));



app.listen(PORT, () => {
    console.log(`server is running on port http://localhost${PORT}`)
})

app.use(cookieParser());
app.use(
    cors({
        origin: ["http://localhost:4000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);
app.use(express.json());
app.use("/api/user/", router)