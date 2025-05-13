import { Books } from './book.model'; // Make sure this path is correct
export class Author {
  authorId!: number;
  name!: string;
  bio!: string;
  country!: string;
  dob!: Date; 
  books?: Books[]; 

  
}
