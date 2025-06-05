import {Router} from "express";
import Auth from "./auth.routes.js";

const MainRouter = Router();

MainRouter.use('/auth',Auth);


export default MainRouter

