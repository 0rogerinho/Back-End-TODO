import { User } from '../models/UserModel.js';
import { userValidation } from '../validation/UserValidation.js';
import { userCreateValidation } from '../validation/UserCreateValidation.js';

class UserService {
  async create(username, email, password) {
    return userCreateValidation(username, email, password);
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
