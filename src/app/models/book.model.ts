export class Book {
  bookId?: number;  // Match backend
  title!: string;
  isbn!: string;
  price!: number;
  stock!: number;
  image!: string;
  genre!: string;
  rating!: number;
  author!: string;
  createdAt?: string;
  updatedAt?: string;
}
