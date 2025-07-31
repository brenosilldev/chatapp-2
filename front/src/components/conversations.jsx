import React from 'react'
import Conversation from './conversation'
import { useGetConversations } from '../hooks/useGetConversations'

const Conversations = () => {

    const {conversations, loading} = useGetConversations()
    return (
        <div className='py-2 flex flex-col gap-2 overflow-y-auto'>
           
            {conversations.map((conversation) => (
                <Conversation key={conversation._id} conversation={conversation} />
            ))}
               {!loading && conversations.length === 0 && <div className='flex flex-col gap-3 justify-center items-center h-full'>
                <p className='text-gray-500'>No conversations found</p>
                <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900'></div>
            </div>}
        </div>
    )
}

export default Conversations