import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const SendMessage = async (req, res) => {
    try {
        const id = req.params.id;
        const {message} = req.body;
        const sender = req.userId;

        if (!message || message.trim() === '') {
            return res.status(400).json({error: 'Message cannot be empty'});
        }

        let conversation = await Conversation.findOne({
            participants: { $all: [sender, id] }
        });

        if(!conversation){
            conversation = await Conversation.create({
                participants: [sender, id],
            });
        }

        const newMessage = new Message({
            idUserSender: sender,
            idUserReceiver: id,
            message: message.trim(),
        }); 

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        //Executa as duas operações de forma assíncrona
        await Promise.all([newMessage.save(), conversation.save()]);

        const receiverSocketId = getReceiverSocketId(id);
        
        const formattedMessage = {
            _id: newMessage._id,
            idUserSender: newMessage.idUserSender,
            idUserReceiver: newMessage.idUserReceiver,
            message: newMessage.message,
            createdAt: newMessage.createdAt,
            updatedAt: newMessage.updatedAt
        };
         
        if(receiverSocketId){
            io.to(receiverSocketId).emit('newMessage', formattedMessage);
        }
        
        res.status(201).json(formattedMessage);

    } catch (error) {
        console.log("Error in SendMessage:", error);
        res.status(500).json({error: 'Error sending message'});
    }
}

export const GetMessages = async (req, res) => {
    try {
        const iduserToChat = req.params.id;

        const conversation = await Conversation.findOne({   
            participants: { $all: [req.userId, iduserToChat] }
        }).populate('messages');

        if(!conversation){
            return res.status(404).json({error: 'Conversation not found'});
        }

        const messages = conversation.messages;
        res.status(200).json(messages);

    } catch (error) {
        console.log("Error in GetMessages:", error);
        res.status(500).json({error: 'Error getting messages'});
    }
}