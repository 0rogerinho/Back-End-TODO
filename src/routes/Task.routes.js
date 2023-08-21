import { Router } from 'express';
import { Task } from '../models/Task.Model.js';

export const taskCreate = Router();

taskCreate.post('/', async (req, res) => {
  const { title, state } = req.body;

  const task = { title, state };

  try {
    await Task.create(task);
    console.log();
    return res.status(201).json({ message: 'Created task' });
  } catch (error) {
    return res.status(400).json(error);
  }
});

taskCreate.get('/', async (req, res) => {
  try {
    const task = await Task.find();
    return res.status(201).json(task);
  } catch (error) {}
});

taskCreate.put('/', async (req, res) => {
  const { _id } = req.query;
  const { state } = req.body;

  try {
    await Task.findByIdAndUpdate(_id, { state });
    return res.status(200).json({ message: 'atualizado com sucesso' });
  } catch (error) {
    return res.status().json(error);
  }
});

taskCreate.delete('/', async (req, res) => {
  const { _id } = req.query;

  try {
    await Task.findByIdAndDelete(_id);
    return res.status(200).json({ message: 'deletado com sucesso' });
  } catch (error) {
    return res.status(200).json(error);
  }
});
