import { useEffect } from "react"   
import { useSocketContext } from "../context/SocketContext"
import useConversations from "../store/useConversations"
import toast from "react-hot-toast"
import AudioController from '../assets/sounds/notification.mp3'


export const useListenMessages = () => {
    const {socket} = useSocketContext()
    const {setMessages,messages} = useConversations()

    useEffect(() => {
        if(socket){

            socket.on('newMessage', (message) => {
                console.log(message)
                setMessages([...messages, message]) 
                const newAudio = new Audio(AudioController)
                newAudio.play()

                const senderName = message.idUserSender.name || message.idUserSender.nome
                toast.success(`${senderName} te ha enviado un mensaje`,{
                    duration: 3000,
                    position: 'top-right',
                    style: {
                        backgroundColor: '#000',
                    }
                }) 
            })
          

        }

        return () => socket.off('newMessage')
    }, [messages, socket, setMessages       ])


    return {messages}
}
