import { Router } from 'express';
import { GetUsersForSidebar } from '../controllers/user.controller.js';
import { verifyToken } from '../middleware/middlware.js';

const userRouter = Router();

userRouter.get('/get-users-sidebar', verifyToken, GetUsersForSidebar);

export default userRouter;  