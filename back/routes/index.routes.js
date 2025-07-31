import {Router} from "express";
import AuthRouter from "./auth.routes.js";
import MessageRouter from "./message.routes.js";
import UserRouter from "./user.routes.js";

const MainRouter = Router();

MainRouter.use('/auth',AuthRouter);
MainRouter.use('/user',UserRouter);
MainRouter.use('/message',MessageRouter);


export default MainRouter

