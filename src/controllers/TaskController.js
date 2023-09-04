import { TaskService } from '../services/TaskService.js';

export class TaskController {
  constructor() {
    this.taskService = new TaskService();
  }

  async postTask(req, res) {
    const { id, title } = req.body;

    try {
      const newTask = await this.taskService.create({ user_id: id, title });
      return res.status(201).json(newTask);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async getTasks(req, res) {
    const { id } = req.query;

    try {
      const tasks = await this.taskService.allTask({ user_id: id });
      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async patchTask(req, res) {
    const { user_id } = req.params;
    const { task_id, state } = req.body;

    try {
      await this.taskService.updateTask({ user_id, task_id, state });
      return res.status(200).json({ message: 'successful update' });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async deleteTask(req, res) {
    const { user_id } = req.params;
    const { task_id } = req.body;

    try {
      await this.taskService.deleteTask({ user_id, task_id });
      return res.status(200).json({ message: 'successfully deleted task' });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}
