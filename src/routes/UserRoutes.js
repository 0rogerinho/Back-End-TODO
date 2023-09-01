import { Router } from 'express';
import { UserController } from '../controllers/UserController.js';

export const userRoutes = Router();

const userController = new UserController();

userRoutes.post('/', (req, res) => userController.postCreateUser(req, res));

userRoutes.post('/login', (req, res) => userController.postUser(req, res));

userRoutes.get('/', (req, res) => userController.getAllUser(req, res));
