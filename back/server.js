import express from 'express';
import dotenv from 'dotenv';
import MainRouter from './routes/index.routes.js';
import { dbConnection } from './lib/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { app, io, server } from './socket/socket.js';

dotenv.config();
const PORT = process.env.PORT || 4000;


app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(express.json());
app.use(cookieParser());
app.use('/api', MainRouter)


server.listen(PORT, () => {
    dbConnection();
    console.log(`Server is running on port ${PORT}`);
})