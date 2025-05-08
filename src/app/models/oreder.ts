// models/order.model.ts

import { Discount } from "./discount";
import { User } from "./user";



export class Order {
  orderID!: number;
  orderDate!: Date;              // or string if backend returns ISO string
  status!: string;
  totalAmount!: number;          // BigDecimal → number
  user!: User;                   // or userID: number
  discount!: Discount;           // or discountID: number
  payment!: Payment;             // or paymentID: number
  shipping!: Shipping;           // or shippingID: number
  orderItems!: OrderItem[];      // list of items in the order
}
