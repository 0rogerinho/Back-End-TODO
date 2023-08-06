const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
const PORT = 3000;

app.use(express.json());

/**
 * id
 * title
 * state
 */
const tasks = [];

function existingTask(req, res, next) {
  const { title } = req.headers;

  const taskExists = tasks.find((task) => task.title === title);

  if (!taskExists) {
    return res.status(400).json({ error: 'Essa task não existe fiote' });
  }

  req.taskExists = taskExists;

  return next();
}

app.post('/tasks', (req, res) => {
  const { title, state } = req.body;

  const checkTaksExists = tasks.some((task) => task.title === title);

  if (checkTaksExists) {
    return res.status(400).json({ error: 'task ja existente' });
  }

  tasks.push({ id: uuidv4(), title, state });

  return res.status(201).send();
});

app.get('/tasks', existingTask, (req, res) => {
  const { taskExists } = req;
  return res.status(201).json(taskExists);
});

app.put('/tasks', existingTask, (req, res) => {
  const { state } = req.body;
  const { taskExists } = req;

  taskExists.state = state;

  return res.status(201).send();
});

app.delete('/tasks', existingTask, (req, res) => {
  const { existingTask } = req;

  tasks.splice(existingTask, 1);

  return res.status(201).send();
});

app.listen(PORT, () => {
  console.log(`Rodando em http://localhost:${PORT}`);
});
