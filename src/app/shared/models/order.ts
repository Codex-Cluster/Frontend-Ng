import { Book } from './book';

export class Order extends Book {
  OrderID?: number;
  UserID?: string;
  Books?: DictionaryOrder;
  Datetime?: string;
  Coupon?: string;
  Amt?: number;
  Address?: string;
  qty?: number;
}
export class OrderDetails {
  n_orders?: number;
  orderDetails?: Dictionary[];
}
export class Dictionary {
  [key: string]: Order;
}
export class DictionaryOrder {
  [key: string]: number;
}
