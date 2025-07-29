import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";

export const SendMessage = async (req, res) => {
    try {
        const id = req.params.id;
        const {message} = req.body;
        const sender = req.userId;


        let conversation = await Conversation.findOne({
            participants: { $all: [sender, id] }
        });

        if(!conversation){
            conversation = await Conversation.create({
                participants: [sender, id],
            });
        }

        const newMessage = new Message({
            message,
            idUserSender: sender,
            idUserReceiver: id,
        }); 


        if(newMessage){
            conversation.messages.push(newMessage._id);
     
        }

        //Executa as duas operações de forma assíncrona
        await Promise.all([newMessage.save(), conversation.save()]);


        res.status(201).json({message: "Message sent successfully",sendMessage: req.userId?.nome});

        } catch (error) {
            console.log(error);
            res.status(500).json({error: 'Error sending message'});
    }
}


export const GetMessages = async (req, res) => {
    try {
        const iduserToChat = req.params.id;

        const conversation = await Conversation.findOne({   
            participants: { $all: [req.userId._id, iduserToChat] }
        }).populate('messages');

        if(!conversation){
            return res.status(404).json({error: 'Conversation not found'});
        }

        res.status(200).json(conversation.messages);

    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Error getting messages'});
    }
}