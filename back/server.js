import express from 'express';
import dotenv from 'dotenv';
import MainRouter from './routes/index.routes.js';

const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config();
app.use(express.json());

app.use('/api', MainRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})