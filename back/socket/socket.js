import { Server } from 'socket.io'
import http from 'http'
import express from 'express'

const app = express()
const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

let onlineUsers = {}

export const getReceiverSocketId = (receiverId) => {
    return onlineUsers[receiverId]
}



io.on('connection', (socket) => {
    console.log(socket.id)
    console.log(socket.handshake.query)
 
    const iduser = socket.handshake.query.iduser
    
    if(iduser != undefined){
        onlineUsers[iduser] = socket.id
    }

    io.emit('getUsers', Object.keys(onlineUsers))

    console.log('a user connected')

    socket.on('disconnect', () => {
        console.log('a user disconnected')
        delete onlineUsers[iduser]
        io.emit('getUsers', Object.keys(onlineUsers))
    })


})




export { io, app, server }