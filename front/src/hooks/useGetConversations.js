import { useState, useEffect } from 'react'
import { useAuthContext } from '../context/AuthContext'
import toast from 'react-hot-toast'

export const useGetConversations = () => {

    const {user} = useAuthContext()
    const [loading, setLoading] = useState(true)
    const [conversations, setConversations] = useState([])

    useEffect(() => {
        const fetchConversations = async () => {
            try {
                const res = await fetch(`/api/user/get-users-sidebar`)
                const data = await res.json()

        

                if(data.error) {
                    toast.error(data.error)
                    setLoading(false)
                    return
                }

                setConversations(data)
                setLoading(false)
            } catch (error) {
                toast.error(error.message)
                setLoading(false)
            }
        }

        fetchConversations()
    }, [user])


    return {conversations, loading}
}