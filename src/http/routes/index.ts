import { Router } from 'express';

import productsRouter from './products.routes';

const routes = Router();

routes.use('/product', productsRouter);
routes.use('/', async (request, response) => {
  return response.json({});
});

export default routes;
