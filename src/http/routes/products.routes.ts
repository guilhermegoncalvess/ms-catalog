import { Router } from 'express';

import ProductController from '../../controllers/ProductController';

const productRouter = Router();

productRouter.post('/', async (request, response) => {
  const produtcController = new ProductController();

  const produtc = await produtcController.insert(request);

  return response.json(produtc);
});

productRouter.delete('/:id', async (request, response) => {
  const produtcController = new ProductController();

  const produtc = await produtcController.remove(request);

  return response.json(produtc);
});

productRouter.get('/', async (request, response) => {
  const produtcController = new ProductController();

  const produtc = await produtcController.findAll();

  return response.json(produtc);
});

productRouter.get('/:id', async (request, response) => {
  const produtcController = new ProductController();

  const produtc = await produtcController.findById({ ...request.body, ...request.params, ...request.query });

  return response.json(produtc);
});

export default productRouter;
