import express from 'express';
import { handleSignin, handleSignout, handleSignup } from '../controllers/authControllers.js';

const router = express.Router();

router.post('/signup', handleSignup)
router.post('/signin', handleSignin)
router.post('/signout', handleSignout)


export default router;





