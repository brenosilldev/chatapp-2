import React,   { createContext, useContext, useState } from "react"   


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext({})


// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
    return useContext(AuthContext)
}


export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null
)

    return (
        <AuthContext.Provider 
        value={{
            user,
            setUser
            }}>
        {children}
    </AuthContext.Provider>
    )
}
