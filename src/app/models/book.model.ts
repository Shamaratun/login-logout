export class Books {
  bookId: number = 0;
  title: string = '';
  isbn: string = '';
  price: number = 0;
  stock: number = 0;
  image: string = '';
  genre: string = '';
  rating: number = 0;
  createdAt: string = '';
  updatedAt: string = '';

  author: {
    authorId: number;
    name: string;
    bio: string;
    country: string;
    dob: string;
    books: any[];
  } = {
    authorId: 0,
    name: '',
    bio: '',
    country: '',
    dob: '',
    books: [],
  };

  warehouse: {
    warehouseId: number;
    location: string;
    stockLevel: number;
  } = {
    warehouseId: 0,
    location: '',
    stockLevel: 0,
  };

  reviews: any[] = [];

  constructor(init?: Partial<Books>) {
    Object.assign(this, init);
  }
}
