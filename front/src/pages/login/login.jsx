import React, { useState } from 'react'
import useLogin from '../../hooks/useLogin'

const Login = () => {

    const {signIn, loading} = useLogin()

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {   
            await signIn(user)
        } catch (error) {
            console.log(error)
        }
    }
    
    

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full flex flex-col gap-4 p-6 rounded-lg shadow-md bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100'> 
                <h1 className='text-2xl font-bold text-white gap-2 text-center'>
                    <span className='text-blue-500'>Chat</span>
                    <span className='text-white'>App | Login</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    
                    <div className='flex flex-col gap-2'>
                        
                        <input 
                            type="text"
                            placeholder='Email'
                            className='border-2 border-gray-300 rounded-md p-2 bg-white'
                            value={user.email}
                            onChange={(e) => setUser({...user, email: e.target.value})}
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                    
                        <input 
                            type="password"
                            placeholder='Password'
                            className='border-2 border-gray-300 rounded-md p-2 bg-white'
                            value={user.password}
                            onChange={(e) => setUser({...user, password: e.target.value})}
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <a href="/cadastro" className='text-blue-500 text-end'>{"Don't have an account? Register"}</a>
                        <button className='bg-blue-500 text-white p-2 rounded-md' disabled={loading}>{loading ? 'Loading...' : 'Login'}</button>
                    </div>
                </form>
                
            </div>
        </div>

        
    )
}

export default Login