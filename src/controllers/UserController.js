import { UserService } from '../services/UserService.js';

class UserController {
  constructor() {
    this.userService = new UserService();
  }
  async postCreateUser(req, res) {
    const { username, email, password } = req.body;

    try {
      await this.userService.create({ username, email, password });
      return res.status(201).json({ message: 'Task successfully created' });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async getAllUser(req, res) {
    try {
      const allUser = await this.userService.allUser();
      return res.status(200).json(allUser);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
}

export { UserController };
