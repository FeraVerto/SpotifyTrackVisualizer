import express from 'express';
import path from 'path';
import serverRoutes from './routes/routes.js';
import { csvParserMiddleware } from './middlewares.js';

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(csvParserMiddleware);
app.use(serverRoutes);

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'ejs'));

app.listen(PORT);
