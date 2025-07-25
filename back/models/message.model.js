import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    idUserSender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuario",
        required: true,
    },
    idUserReceiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuario",
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
}, {timestamps: true});

const Message = mongoose.model("message", messageSchema);

export default Message;