import { Book } from "./book";

export class Order extends Book{
  OrderID?: number;
  UserID?: string;
  Books?: string;
  Datetime?: string;
  Coupon?: string;
  Amt?: number;
  Address?: string;
}
export class OrderDetails {
  n_orders?: number;
  orderDetails?: Dictionary[];
}
class Dictionary {
  n_orders?: string;
  orders?: Order;
}
