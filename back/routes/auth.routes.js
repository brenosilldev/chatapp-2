import { Router} from 'express';

const Auth = Router();

Auth.get('/login', (req, res) => {
    res.send('login');
});

Auth.get('/register', (req, res) => {
    
})


export default Auth;