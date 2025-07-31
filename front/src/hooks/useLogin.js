import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

const useLogin = () => {

    const [loading, setLoading] = useState(false)
    const {setUser} = useAuthContext()

    
    const signIn = async ({email, password}) => {
        const success = handleInputErrors({email, password})

        if (!success) return
        
        setLoading(true)    

        try {
            const res = await fetch('api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            })

            const data = await res.json()
            
            if(data.error){
                setLoading(false)
                setUser(null)
            
                throw new Error(data.error)
            }

            setUser(data.user)
            localStorage.setItem('user', JSON.stringify(data.user))


            toast.success(data.message)


            setLoading(false)
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }

    }
    
    return {
        signIn,
        loading
    }
}

const handleInputErrors = ({email, password}) => {
    if (!email || !password) {
        toast.error('Preencha todos os campos')
        return false
    }

    if (!email.includes('@')) {
        toast.error('Email inválido')
        return false
    }

    return true
}

export default useLogin