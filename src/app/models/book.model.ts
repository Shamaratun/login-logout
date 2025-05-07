// book.model.ts
export class Book {
  id: number;
  title: string;
  isbn: string;
  price: number;
  stock: number;
  image: string;
  genre: string;
  rating: number;
  createdAt: string;
  updatedAt: string;

  constructor() {
    // Initialize default values if needed
    this.id = 0;
    this.title = '';
    this.isbn = '';
    this.price = 0;
    this.stock = 0;
    this.image = '';
    this.genre = '';
    this.rating = 0;
    this.createdAt = '';
    this.updatedAt = '';
  }
}
