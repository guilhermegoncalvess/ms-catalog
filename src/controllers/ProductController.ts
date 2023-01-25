import Produtc from '../entities/Product';
import ProductService from '../services/ProductService';

export default class ProductController {
  async insert(payload: any): Promise<string> {
    const productService = new ProductService();

    return productService.insert(payload);
  }

  async findAll(): Promise<Produtc[]> {
    const productService = new ProductService();

    return productService.findAll();
  }

  async findById(payload: any): Promise<Produtc> {
    const { id } = payload;
    const productService = new ProductService();

    return productService.findById(id);
  }

  async update(payload: any): Promise<Produtc> {
    const productService = new ProductService();

    return productService.update(payload);
  }

  async remove(payload: any): Promise<Produtc> {
    const { id } = payload.params;
    const productService = new ProductService();

    return productService.remove(id);
  }
}
