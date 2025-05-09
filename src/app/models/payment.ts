import { Order } from './order';

export class Payment {
  paymentID?: number;
  paymentMethod!: string;
  paymentDate?: Date; // ISO format string (e.g., "2025-05-09T12:00:00")
  amount?: number;
  transactionStatus!: string;
  order?: Order; // Optional to avoid circular dependency
}