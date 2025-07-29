import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.model.js";
dotenv.config();

export const verifyToken = async (req, res, next) => {

    try {
        const token = req.cookies.token;

        if(!token){
            return res.status(401).json({message: "Unauthorized"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.iduser);


        req.userId = user
        next();


    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Error verifying token'});
    }
};

