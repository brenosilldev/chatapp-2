import Messages from './messages'
import MessageInput from './messageInput'
import useConversations from '../store/useConversations'

const MessagesContainer = () => {

    const {selectedConversation} = useConversations()

    const selectedChat = selectedConversation !== null

    return (

        <div className='md:min-w-[450px] flex flex-col '>
            {selectedChat ? (
                <>      
                    <div className='bg-slate-500 px-4 py-2 mb-2'>
                        <span className='text-white font-bold'>{selectedConversation.nome}</span>
                        
                    </div>
                    <Messages />
                    <MessageInput />
                
                </>
                

            ) : (
                <>
                    <NoChatSelected />
                </>
            )}
        </div>
    )
}


const NoChatSelected = () => {
    return (
        <div className='flex items-center justify-center w-full h-full'>
        <div className='px-4 text-center sm:text-lg md:text-xl text-gray-500 font-semibold flex flex-col items-center gap-2'>
            <p>Welcome to the chat</p>
            <p>Select a chat to start messaging</p>
        </div>
    </div>
  )
}

export default MessagesContainer