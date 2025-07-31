import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAuthContext } from "./AuthContext";

// eslint-disable-next-line react-refresh/only-export-components
export const SocketContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useSocketContext = () => {
    return useContext(SocketContext)
}



export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const {user} = useAuthContext()


    useEffect(() => {

        if(user) {
            
            const socket = io('http://localhost:8000',{
                query: {
                    iduser: user._id
                }
            })
            setSocket(socket)


            socket.on('getUsers', (users) => {
                setOnlineUsers(users)
            })

            return () => socket.close()
            
        }else{

            if(socket){
                socket.close()
                setSocket(null)
            }
        }


        // socket.on('connect', () => {
        //     console.log('connected to server')
        // })
        
    }, [user])

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    )
}       