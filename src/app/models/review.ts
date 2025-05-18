
import { Books } from './book.model';
import { User } from './user';

export class Review {
  reviewID?: number=0;
  rating: number=0;
  comment: string='';
  reviewDate?: Date=new Date('') ; // Use string to hold ISO datetime format
  userId?: number=0;
  bookId?: number=0;
}