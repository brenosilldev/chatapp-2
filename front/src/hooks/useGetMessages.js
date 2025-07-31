import { useEffect, useState } from "react"
import useConversations from "../store/useConversations"
import toast from "react-hot-toast"

const useGetMessages = () => {

    const [loading, setLoading] = useState(false)
    const { setMessages, selectedConversation, messages } = useConversations()


    useEffect(() => {
        const getMessages = async () => {

            setLoading(true)
 
            
            try {
                setLoading(true)
                const res = await fetch(`/api/message/get-messages/${selectedConversation._id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await res.json()
                
               
                setLoading(false)
                setMessages(data)
                
            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
        }

        
        if(selectedConversation) {
            getMessages()
        }

        
    }, [selectedConversation,setMessages])

    
    return {loading,messages}
}

export default useGetMessages