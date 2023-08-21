import 'dotenv/config';
import mongoose from 'mongoose';
import express from 'express';
import { taskCreate } from './routes/Task.routes.js';

const app = express();

app.use(express.json());

app.use('/task', taskCreate);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@todo.apxxgxw.mongodb.net/?retryWrites=true&w=majority`,
  )
  .then(() => {
    console.log('conectamos ao mongoDB');
    app.listen(3000);
  })
  .catch((err) => console.log(err));
