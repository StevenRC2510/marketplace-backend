import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import productRoutes from './routes/products.routes';
import categoriesRoutes from './routes/categories.routes';

const app = express();

app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) =>
  res.send(`the api is at http://localhost:${app.get('port')}`)
);

app.use('/api/v1/products', productRoutes);
app.use('/api/v1/categories', categoriesRoutes);

export default app;
