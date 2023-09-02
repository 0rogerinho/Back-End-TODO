import { hash } from 'bcrypt';
import { UserService } from '../services/UserService.js';

class UserController {
  constructor() {
    this.userService = new UserService();
  }
  async postCreateUser(req, res) {
    const { username, email, password } = req.body;
    const bcrypt_pass = await hash(password, 10);
    try {
      await this.userService.create(username, email, bcrypt_pass);
      return res.status(201).json({ message: 'User successfully created' });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async postUser(req, res) {
    const { email, password } = req.body;
    try {
      const user = await this.userService.user({ email, password });
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error.message);
    }
  }

  async getAllUser(req, res) {
    try {
      const allUser = await this.userService.allUser();
      return res.status(200).json(allUser);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error.message);
    }
  }
}

export { UserController };
