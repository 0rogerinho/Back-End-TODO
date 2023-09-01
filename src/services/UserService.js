import { User } from '../models/UserModel.js';

class UserService {
  async create({ username, email, password }) {
    try {
      if (await User.findOne({ email }).exec())
        throw new Error('email already exist');

      await User.create({ username, email, password });
    } catch (error) {
      console.log(error);

      throw new Error(error);
    }
  }

  async user({ email, password }) {
    try {
      const user = await User.findOne({ email, password });

      if (user === null) throw new Error('user not found');

      return user;
    } catch (error) {
      console.log(error);

      throw error;
    }
  }

  async allUser() {
    try {
      const allUser = await User.find();

      return allUser;
    } catch (error) {
      console.log(error);

      throw error;
    }
  }
}
export { UserService };
