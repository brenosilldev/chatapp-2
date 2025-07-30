import React, { useState } from 'react'
import useCadastro from '../../hooks/useCadastro'

const Cadastro = () => {

    const {signUp, loading} = useCadastro()


    const [user, setUser] = useState({
        nome: '',
        email: '',
        password: '',
        genero: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {   
            signUp(user)
        } catch (error) {
            console.log(error)
        }
    }
    

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full flex flex-col gap-4 p-6 rounded-lg shadow-md bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100'> 
                <h1 className='text-2xl font-bold text-white gap-2 text-center'>
                    <span className='text-blue-500'>Chat</span>
                    <span className='text-white'>App | Register</span>
                </h1>
                <form onSubmit={handleSubmit}>  


                    <div className='flex flex-col gap-2'>
                        
                        <input 
                            type="text"
                            placeholder='Name'
                            className='border-2 border-gray-300 rounded-md p-2 bg-white text-gray-900 '
                            value={user.nome}
                            onChange={(e) => setUser({...user, nome: e.target.value})}
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <input 
                            type="text"
                            placeholder='Email'
                            className='border-2 border-gray-300 rounded-md p-2 bg-white text-gray-900'
                            value={user.email}
                            onChange={(e) => setUser({...user, email: e.target.value})}
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <input 
                            type="password"
                            placeholder='Password'
                            className='border-2 border-gray-300 rounded-md p-2 bg-white text-gray-900'
                            value={user.password}
                            onChange={(e) => setUser({...user, password: e.target.value})}
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <select className='border-2 border-gray-300 rounded-md p-2 bg-slate-500 text-gray-900' 
                            value={user.genero}
                            onChange={(e) => setUser({...user, genero: e.target.value})}
                        >
                            <option value="other" className='text-gray-900'>Other</option>
                            <option value="female" className='text-gray-900'>Female</option>
                            <option value="male" className='text-gray-900'>Male</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <a href="/" className='text-blue-500 text-end'>{"Already have an account? Login"}</a>
                        <button className='bg-blue-500 text-white p-2 rounded-md' disabled={loading}>{loading ? 'Loading...' : 'Register'}</button>
                    </div>
                </form>
                
            </div>
        </div>

        
    )
}

export default Cadastro