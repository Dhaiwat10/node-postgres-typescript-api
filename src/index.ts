import express from 'express';
const app = express();

import indexRoutes from './routes';

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(indexRoutes);

let port = 3000;

app.listen(port, () => {
  console.log('Server on port', port);
});
