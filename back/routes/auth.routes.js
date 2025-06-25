import { Router} from 'express';
import { Create, Auth} from '../controllers/auth.controller.js';


const Auth = Router();

Auth.get('/login',Auth);

Auth.get('/register',Create)


export default Auth;