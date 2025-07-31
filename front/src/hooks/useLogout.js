import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

const useLogout = () => {

    const [loading, setLoading] = useState(false)
    const {setUser} = useAuthContext()

    const signOut = async () => {
        
        setLoading(true)    

        try {
            const res = await fetch('/api/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },  
                body: JSON.stringify({})
            })

            const data = await res.json()

            setUser(null)
            localStorage.removeItem('user')

            if(data.error){
                throw new Error(data.error)
            }


            toast.success(data.message)


            setLoading(false)
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }

    }
    
    return {
        signOut,
        loading
    }
}



export default useLogout