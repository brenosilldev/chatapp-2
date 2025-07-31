import mongoose from 'mongoose';

export const checkDbHealth = async (req, res, next) => {
    try {
        // Verifica se a conexão está pronta
        if (mongoose.connection.readyState !== 1) {
            return res.status(503).json({
                error: 'Database connection not ready',
                status: 'unavailable'
            });
        }

        // Testa a conexão com uma operação simples
        await mongoose.connection.db.admin().ping();
        
        next();
    } catch (error) {
        console.error('Database health check failed:', error);
        return res.status(503).json({
            error: 'Database connection failed',
            status: 'error'
        });
    }
};

export const dbStatus = (req, res) => {
    const status = {
        readyState: mongoose.connection.readyState,
        host: mongoose.connection.host,
        name: mongoose.connection.name,
        port: mongoose.connection.port
    };

    res.json({
        status: status.readyState === 1 ? 'connected' : 'disconnected',
        details: status
    });
}; 