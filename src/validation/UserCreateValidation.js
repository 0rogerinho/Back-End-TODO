import { User } from '../models/UserModel.js';

export const userCreateValidation = async (username, email, password) => {
  if (await User.exists({ email })) throw new Error('Existing user');

  await User.create({ username, email, password });

  return { message: 'User created successfully' };
};
