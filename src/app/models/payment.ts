import { Order } from './order';

export class Payment {
  paymentID: number=0;
  paymentMethod: string='';
  paymentDate: Date=new Date(); // ISO format string (e.g., "2025-05-09T12:00:00")
  amount: number=0;
  transactionStatus: string='';
  orderId?: number=0; // Optional to avoid circular dependency
}