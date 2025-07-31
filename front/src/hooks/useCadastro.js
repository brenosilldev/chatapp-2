import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

const useCadastro = () => {

    const [loading, setLoading] = useState(false)
    const {setUser} = useAuthContext()

    
    const signUp = async ({nome, email, password, genero}) => {
        const success = handleInputErrors({nome, email, password, genero})

        if (!success) return
        
        setLoading(true)    

        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({nome, email, password, genero})
            })

            const data = await res.json()

            setUser(data.user)
            localStorage.setItem('user', JSON.stringify(data.user))

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
        signUp,
        loading
    }
}

const handleInputErrors = ({nome, email, password, genero}) => {
    if (!nome || !email || !password || !genero) {
        toast.error('Preencha todos os campos')
        return false
    }

    if (password.length < 8) {
        toast.error('A senha deve ter pelo menos 8 caracteres')
        return false
    }

    if (genero !== 'male' && genero !== 'female') {
        toast.error('Selecione um gênero')
        return false
    }

    if (!email.includes('@')) {
        toast.error('Email inválido')
        return false
    }

    if (!email.includes('.')) {
        toast.error('Email inválido')
        return false
    }

    return true
}

export default useCadastro