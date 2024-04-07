import express from "express"
const router = express.Router();
import jwt from "jsonwebtoken"
import User from "../models/user.js"
import dotenv from "dotenv"
dotenv.config();

const { TOKEN_KEY } = process.env;


router.get("/", (req, res, next) => {
    res.status(200).send("get req is working fine")
})

router.post("/register", async (req, res, next) => {
    try{
    const { email, password, username, createdAt } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: "User already exists" });
        }
        const user = await User.create({ email, password, username, createdAt });
        const token = jwt.sign(user._id, TOKEN_KEY, {
            expiresIn: 3 * 24 * 60 * 60,
        })
        res.cookie("acess_token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        res
            .status(201)
            .json({ message: "User signed in successfully", success: true, user });
        next();
    } catch (error) {
            console.error(error);
    }

})

export default router;