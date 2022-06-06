import express, { Application } from 'express';
import cors from 'cors';
import { elevatorRouter } from './elevators/elevators.router';
import { notFoundHandler } from './middleware/404.middleware';
import { errorHandler } from './middleware/error.middleware';

const PORT = 3000;

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/elevators', elevatorRouter);

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT);

export default app;
