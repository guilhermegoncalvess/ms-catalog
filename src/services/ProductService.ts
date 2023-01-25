import Produtc from '../entities/Product';
import ProductRepository from '../repositories/ProductRepository';

export default class ProductService {
  async insert(payload: any): Promise<string> {
    const productRepository = new ProductRepository();

    return productRepository.insert(payload);
  }

  async findAll(): Promise<Produtc[]> {
    const productRepository = new ProductRepository();

    return productRepository.findAll();
  }

  async update(payload: any): Promise<Produtc> {
    const productRepository = new ProductRepository();

    return productRepository.update(payload);
  }

  async findById(id: any): Promise<Produtc> {
    const productRepository = new ProductRepository();

    return productRepository.findById(id);
  }

  async remove(id: any): Promise<Produtc> {
    const productRepository = new ProductRepository();

    return productRepository.remove(id);
  }
}
