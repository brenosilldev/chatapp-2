import jwt from "jsonwebtoken";

export const generateToken = (iduser,res) => {
    
    const token =  jwt.sign({ iduser}, process.env.JWT_SECRET, {
        expiresIn: "12h",
    });

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
    });

    return token
}