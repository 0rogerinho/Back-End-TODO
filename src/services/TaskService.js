import { Task } from '../models/TaskModel.js';
import { User } from '../models/UserModel.js';

export class TaskService {
  async create({ user_id, title }) {
    try {
      const user = await User.findById(user_id).exec();

      if (!user) throw new Error('User not found');

      await Task.create({ user_id: user_id, title });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async allTask({ user_id }) {
    try {
      const user = await User.findById(user_id).exec();

      if (!user) throw new Error('User not found');

      const tasks = await Task.find({ user_id });
      return tasks;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateTask({ user_id, task_id, state }) {
    try {
      const user = await User.findById(user_id).exec();

      if (!user) throw new Error('User not found');

      await Task.findOneAndUpdate({ user_id, _id: task_id }, { state });
    } catch (error) {
      throw error;
    }
  }

  async deleteTask({ user_id, task_id }) {
    try {
      const user = await User.findOne({ user_id }, { _id: task_id }).exec();

      if (!user) throw new Error('User not found');

      await Task.findOneAndDelete({ user_id, _id: task_id });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
