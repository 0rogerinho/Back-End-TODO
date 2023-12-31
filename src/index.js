import 'dotenv/config';
import mongoose from 'mongoose';
import express from 'express';
import { taskCreate } from './routes/TaskRoutes.js';
import { userRoutes } from './routes/UserRoutes.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/user', userRoutes);

app.use('/user/task', taskCreate);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@todo.f3k4nzg.mongodb.net/?retryWrites=true&w=majority`,
  )
  .then(() => {
    console.log('connect mongoDB');
    app.listen(process.env.PORT);
  })
  .catch((err) => console.log(err));
