import { User } from '../models/UserModel.js';
import { userValidation } from '../validation/UserValidation.js';

class UserService {
  async create(username, email, password) {
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
    return userValidation(email, password);
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
