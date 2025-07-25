import express from 'express';
import dotenv from 'dotenv';
import MainRouter from './routes/index.routes.js';
import { dbConnection } from './lib/db.js';

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use('/api', MainRouter)


app.listen(PORT, () => {
    dbConnection();
    console.log(`Server is running on port ${PORT}`);
})