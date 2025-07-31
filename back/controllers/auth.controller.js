import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../lib/generatetoken.js";

export const Register = async (req, res) => {
    try {
        const {nome, password, email, genero} = req.body;

        // Adicionar timeout específico para a operação
        const user = await User.findOne({email}).maxTimeMS(5000);

        if(user){
            return res.status(400).json({error: "User already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boy = `https://avatar.iran.liara.run/public/boy?username=${nome.toLowerCase()}`;
        const girl = `https://avatar.iran.liara.run/public/girl?username=${nome.toLowerCase()}`;

        const newUser = await User.create({
            nome, 
            password: hashedPassword, 
            email, 
            genero, 
            avatar: genero === "male" ? boy : girl
        });

        res.status(201).json({message: "User created successfully", user: newUser});
        
    } catch(error) {
        console.error('Register error:', error);
        
        // Tratamento específico para erros de timeout
        if (error.name === 'MongooseError' && error.message.includes('timed out')) {
            return res.status(500).json({error: "Database operation timed out. Please try again."});
        }
        
        // Tratamento para erros de validação
        if (error.name === 'ValidationError') {
            return res.status(400).json({error: "Validation error", details: error.message});
        }
        
        res.status(500).json({error: "Internal server error"});
    }
}

export const Auth = async (req, res) => {
    try {
        const {email, password} = req.body;

        // Adicionar timeout específico para a operação
        const user = await User.findOne({email}).maxTimeMS(5000);
        
        if(!user){
            return res.status(400).json({error: "User not found"});
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if(!isPasswordCorrect){
            return res.status(400).json({error: "Invalid password"});
        }

        generateToken(user._id, res);

        const {password: _, ...userWithoutPassword} = user.toObject();

        res.status(200).json({message: "Login success", user: userWithoutPassword});
        
    } catch(error) {
        console.error('Auth error:', error);
        
        // Tratamento específico para erros de timeout
        if (error.name === 'MongooseError' && error.message.includes('timed out')) {
            return res.status(500).json({error: "Database operation timed out. Please try again."});
        }
        
        res.status(500).json({error: "Internal server error"});
    }
}

export const Logout = async (req, res) => {
    try {
        res.clearCookie("token"); 
        res.status(200).json({message: "Logout success"});
    } catch(error) {
        console.error('Logout error:', error);
        res.status(500).json({error: "Internal server error"});
    }
}

