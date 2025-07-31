import React from 'react'
import useConversations from '../store/useConversations'
import { useSocketContext } from '../context/SocketContext'

const Conversation = ({conversation}) => {

    const {selectedConversation, setSelectedConversation} = useConversations()

    const {onlineUsers} = useSocketContext()

	const isSelected = selectedConversation?._id === conversation._id

    const isOnline = onlineUsers.includes(conversation._id)

    const avatarONlone = isOnline ? 'avatar-online' : 'avatar-offline'


    return (
        <div 
            className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-2 cursor-pointer ${isSelected ? 'bg-sky-500' : ''}`} 
            onClick={() => setSelectedConversation(conversation)}

        >
          
                <div className={`avatar ${avatarONlone}`}>
                    <div className="w-12 rounded-full">
                        <img src={conversation.avatar} />
                    </div>
                    </div>
                 
 

            <div className='flex flex-col flex-1'>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col'>
                        <span className='text-gray-900 font-bold'>{conversation.nome}</span>
                        <span className='text-gray-500 text-sm'>Last message</span>
                    </div>
                    {/* <div className='flex flex-col'>
                        <span className='text-gray-900 font-bold'>.6</span>
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default Conversation