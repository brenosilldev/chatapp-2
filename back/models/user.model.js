import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    genero: {
        type: String,
        required: false,
    },
    avatar: {
        type: String,
        required: false,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model("usuario", usuarioSchema);

export default User