import { User } from '../models/UserModel.js';

export const userCreateValidation = async (username, email, password) => {
  if (await User.exists({ email })) throw new Error('Existing user');

  const newUser = await User.create({ username, email, password });

  return newUser;
};
