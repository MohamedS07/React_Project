import express from 'express';
const router = express.Router();
import * as authController from '../controllers/auth.controller.js';
import auth from '../middleware/auth.middleware.js';

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.get('/profile', auth, authController.getProfile);
router.put('/profile', auth, authController.updateProfile);

export default router;
