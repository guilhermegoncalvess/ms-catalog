import { ObjectId } from 'mongodb';

export default interface Produtc {
  id?: ObjectId;

  name: string;

  description: string;

  value: number;
}
