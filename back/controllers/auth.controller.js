import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../lib/generatetoken.js";


export const Register = async (req, res) => {
    try{

        const {nome, password, email, genero} = req.body;

        const user = await User.findOne({email});

        if(user){
            return res.status(400).json({message: "User already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        const boy = `https://avatar.iran.liara.run/public/boy?username=${nome.toLowerCase()}`;
        const girl = `https://avatar.iran.liara.run/public/girl?username=${nome.toLowerCase()}`;

        const newUser = await User.create({nome, password: hashedPassword, email, genero, avatar: genero === "masculino" ? boy : girl});


        res.status(201).json({message: "User created successfully", user: newUser});
        
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

export const Auth = async (req, res) => {
    try{
        const {username, password} = req.body;

        const user = await User.findOne({username});
        
        if(!user){
            return res.status(400).json({message: "User not found"});
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if(!isPasswordCorrect){
            return res.status(400).json({message: "Invalid password"});
        }

        generateToken(user._id, res);

        res.status(200).json({message: "Login success", nome: user.nome, email: user.email, avatar: user.avatar});
        
    }catch(error){
        res.status(500).json({message: error.message});
    }
}



export const Logout = async (req, res) => {
    try{
        res.clearCookie("token"); 
        
        res.status(200).json({message: "Logout success"});

    }catch(error){
        res.status(500).json({message: error.message});
    }
}

