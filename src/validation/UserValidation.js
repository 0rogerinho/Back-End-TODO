import { compareSync } from 'bcrypt';
import { User } from '../models/UserModel.js';

export const userValidation = async (email, password) => {
  const userId = await User.findOne({ email });

  console.log(userId.password);
  if (!userId) throw new Error('user not found');

  const bcryptPass = compareSync(password, userId.password);

  console.log(bcryptPass);
  if (!bcryptPass) throw new Error('invalid password');

  return { _id: userId['_id'] };
};
