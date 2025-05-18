// models/order.model.ts

import { Discount } from "./discount";
import { OrderItem } from "./orderItem";
import { Payment } from "./payment";
import { Shipping } from "./shipping";
import { User } from "./user";



export class Order {
  orderID!: number;
  orderDate!: Date;              // or string if backend returns ISO string
  status!: string;
  totalAmount!: number;          // BigDecimal → number
  userId!: number;                   // or userID: number
  discountId!: number;           // or discountID: number
  paymentId!: number;             // or paymentID: number
  shippingId!: number;           // or shippingID: number
  orderItemsId!: number;      // list of items in the order
}
