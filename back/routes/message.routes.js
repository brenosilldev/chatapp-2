import { Router } from 'express';
import { SendMessage ,GetMessages} from '../controllers/message.controller.js';
import { verifyToken } from '../middleware/middlware.js';
const messageRouter = Router();

messageRouter.get('/get-messages/:id', verifyToken, GetMessages);

messageRouter.post('/send/:id', verifyToken, SendMessage);


export default messageRouter;