import express from 'express';
import cors from 'cors';
import routes from './routes';
import Path from 'path';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(Path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);
