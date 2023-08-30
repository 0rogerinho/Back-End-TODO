import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  user_id: String,
  title: String,
  state: {
    type: Boolean,
    default: false,
  },
});

export const Task = mongoose.model('Task', schema);
