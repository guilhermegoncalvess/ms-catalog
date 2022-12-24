import Produtc from '../entities/Product';

export interface ProdutcInterface {
  insert(produtc: Produtc): Promise<Produtc>;
  findAll(): Promise<Produtc[]>;
  findById(id: string): Promise<Produtc>;
}
