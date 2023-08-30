import { Router } from 'express';
import { TaskController } from '../controllers/TaskController.js';

export const taskCreate = Router();

const taskController = new TaskController();

taskCreate.post('/', (req, res) => taskController.postTask(req, res));

taskCreate.get('/', (req, res) => taskController.getTasks(req, res));

taskCreate.patch('/', (req, res) => taskController.patchTask(req, res));

taskCreate.delete('/', (req, res) => taskController.deleteTask(req, res));
