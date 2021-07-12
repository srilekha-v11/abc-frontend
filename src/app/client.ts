import { Complaint } from './complaint';
import { Product } from './product';

export class Client {
  clientId: number = 0;
  password: String = '';
  address: String = '';
  phoneNumber: number = 0;

  product: Product[] = [];
  complaint: Complaint[] = [];
}
