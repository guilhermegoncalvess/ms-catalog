import { Collection, ObjectId } from 'mongodb';
import { ProdutcInterface } from '../interfaces/Produtc';
import { databaseClient } from '../database/index';
import Produtc from '../entities/Product';
import AppError from '../errors/AppError';

class ProductRepository implements ProdutcInterface {
  private readonly collection: Collection<Produtc>;

  constructor() {
    this.collection = databaseClient.db('catalog').collection('products');
  }

  public async insert({ name, description, value }: Produtc): Promise<any> {
    const produtc: Produtc = {
      name,
      description,
      value,
    };

    await this.collection.insertOne(produtc);

    return produtc;
  }

  public async findAll(): Promise<Produtc[]> {
    return this.collection.find<Produtc>({}).toArray();
  }

  public async findById(id: string): Promise<Produtc> {
    const productId = new ObjectId(id);
    const product = await this.collection.findOne<Produtc>({
      _id: productId,
    });

    if (!product) throw new AppError('could not find the product.', 404);

    return product;
  }

  public async remove(id: string): Promise<any> {
    const productId = new ObjectId(id);
    await this.collection.findOneAndDelete({
      _id: productId,
    });

    return { message: 'product removed' };
  }
}
export default ProductRepository;
