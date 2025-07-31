import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnection = async () => {
    try {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000, // Timeout para seleção do servidor
            socketTimeoutMS: 45000, // Timeout para operações de socket
            bufferCommands: false, // Desabilita o buffering de comandos
            maxPoolSize: 10, // Tamanho máximo do pool de conexões
            minPoolSize: 1, // Tamanho mínimo do pool de conexões
            maxIdleTimeMS: 30000, // Tempo máximo de inatividade
            connectTimeoutMS: 10000, // Timeout para conexão inicial
        };

        const conn = await mongoose.connect(process.env.MONGO_URL, options);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        
        // Configurar listeners para monitorar a conexão
        mongoose.connection.on('error', (err) => {
            console.error('MongoDB connection error:', err);
        });
        
        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB disconnected');
        });
        
        mongoose.connection.on('reconnected', () => {
            console.log('MongoDB reconnected');
        });
        
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1); // Encerra o processo se a conexão falhar
    }
};