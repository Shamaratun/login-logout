// models/discount.model.ts

import { Order } from './order.model';

export class Discount {
  discountID!: number;
  name!: string;
  description!: string;
  discountPercentage!: number; // BigDecimal maps to number in TS
  startDate!: Date;            // or string if using ISO format
  endDate!: Date;
  criteria!: string;
  orders?: Order[];            // optional, since it might not always be populated
}
