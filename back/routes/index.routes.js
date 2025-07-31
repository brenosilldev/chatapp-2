import {Router} from "express";
import AuthRouter from "./auth.routes.js";
import MessageRouter from "./message.routes.js";
import UserRouter from "./user.routes.js";
import { dbStatus } from "../middleware/dbHealth.js";

const MainRouter = Router();

// Rota de health check
MainRouter.get('/health', dbStatus);

MainRouter.use('/auth',AuthRouter);
MainRouter.use('/user',UserRouter);
MainRouter.use('/message',MessageRouter);

export default MainRouter

