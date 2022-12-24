import Produtc from '../entities/Product';
import ProductRepository from '../repositories/ProductRepository';

export default class ProductController {
  async insert(payload: any): Promise<string> {
    const { name, description, value } = payload.body;

    const productRepository = new ProductRepository();

    return productRepository.insert({ name, description, value });
  }

  async findAll(): Promise<Produtc[]> {
    const productRepository = new ProductRepository();

    return productRepository.findAll();
  }

  async findById(payload: any): Promise<Produtc> {
    const { id } = payload;
    const productRepository = new ProductRepository();

    return productRepository.findById(id);
  }

  async remove(payload: any): Promise<Produtc> {
    const { id } = payload.params;
    const productRepository = new ProductRepository();

    return productRepository.remove(id);
  }
}
