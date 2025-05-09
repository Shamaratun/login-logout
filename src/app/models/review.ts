
import { Book } from './book.model';
import { User } from './user';

export interface Review {
  reviewID?: number;
  rating: number;
  comment: string;
  reviewDate?: Date; // Use string to hold ISO datetime format
  user?: User;
  book?: Book;
}