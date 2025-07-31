import express from 'express';
import dotenv from 'dotenv';
import MainRouter from './routes/index.routes.js';
import { dbConnection } from './lib/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { app, io, server } from './socket/socket.js';
import path from 'path';


dotenv.config();
const PORT = process.env.PORT || 4000;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use('/api', MainRouter)


// Configura o Express para servir arquivos estáticos da pasta build do frontend
// Isso permite que o servidor sirva arquivos CSS, JS, imagens e outros recursos do React
app.use(express.static(path.join(__dirname, '/front/dist')))

// Rota catch-all que serve o index.html para todas as rotas não encontradas
// Isso é necessário para aplicações SPA (Single Page Application) como React
// Permite que o React Router funcione corretamente no lado do cliente
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'front', 'dist', 'index.html'))
})

server.listen(PORT, () => {
    dbConnection();
    console.log(`Server is running on port ${PORT}`);
})