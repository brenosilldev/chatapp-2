import { Router } from 'express';
import { Register, Auth, Logout } from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.post('/register', Register);
authRouter.post('/login', Auth);
authRouter.post('/logout', Logout);

export default authRouter;