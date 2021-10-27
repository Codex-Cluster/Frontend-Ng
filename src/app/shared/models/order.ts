import { Book } from './book';

export class Order extends Book {
  OrderID?: number;
  UserID?: string;
  Books?: string;
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
