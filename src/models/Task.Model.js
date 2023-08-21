import mongoose from 'mongoose';

const schema = new mongoose.Schema({ title: String, state: Boolean });

export const Task = mongoose.model('Task', schema);
