import { Book } from './book.model'; // Make sure this path is correct

export class Author {
  authorID!: number;
  name!: string;
  bio!: string;
  country!: string;
  dob!: Date;           // Use string if backend returns ISO string dates
  books?: Book[];
}
