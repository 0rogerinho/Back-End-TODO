import { Router } from 'express';
import { TaskController } from '../controllers/TaskController.js';

export const taskCreate = Router();

const taskController = new TaskController();

taskCreate.post('/', (req, res) => taskController.postTask(req, res));

taskCreate.get('/', (req, res) => taskController.getTasks(req, res));

taskCreate.patch('/:user_id', (req, res) => taskController.patchTask(req, res));

taskCreate.delete('/:user_id', (req, res) =>
  taskController.deleteTask(req, res),
);
