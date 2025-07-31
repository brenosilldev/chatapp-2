import React from 'react'
import useConversations from '../store/useConversations'
import { useAuthContext } from '../context/AuthContext'

const Message = ({message, ref}) => {

    const {user} = useAuthContext()

    const {selectedConversation} = useConversations()

    const date = new Date(message.createdAt)


    const fromMe = message?.idUserSender?._id === user?._id || message?.idUserSender === user?._id

    const image = fromMe ? user?.avatar : selectedConversation?.avatar


    
    return (
    
        <div className={`chat ${fromMe ? 'chat-end' : 'chat-start'}`} ref={ref}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <img
                    alt="Tailwind CSS chat bubble component"
                    src={image}    
                />
                </div>
            </div>                
            <div className="chat-bubble">{message.message}</div>
            <div className="chat-footer text-gray-950">{date.toLocaleTimeString()}</div>
        </div>
           
        
    )
}

export default Message