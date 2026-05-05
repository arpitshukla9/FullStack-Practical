import express from 'express';
import { login, logout } from '../controllers/auth.controller.js';
import { isLoggedIn } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/login', login);
router.get('/logout', logout);

router.get('/dashboard', isLoggedIn, (req, res) => {
  res.status(200).json({ 
    message: 'Dashboard accessed successfully',
    user: req.session.user 
  });
});
export default router;
