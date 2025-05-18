// models/discount.model.ts

import { Order } from './order';

export class Discount {
  discountID: number=0;
  name: string='';
  description: string='';
  discountPercentage: number=0; 
  startDate: Date=new Date();            
  endDate: Date=new Date();
  criteria: string='';
  orderId:number=0;           
}
