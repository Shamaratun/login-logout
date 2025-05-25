
export class Books {
 
   bookId: number = 0;
  title: string = '';
  authorName: string = '';
  isbn?: string = '';
  price: number = 0;
  image?: string = '';
  genre?: string = '';
  rating?: number = 0;
  createdAt?: string = '';
  updatedAt?: string = '';
  warehouseLocation?: string = '';
   stock: number = 0;
  // reviewId: number = 0;
}// book.model.ts


export interface Book {
  title: string;
  coverType: string;
  author: string;
  authorUrl: string;
  category: string;
  categoryUrl: string;
  rating: number;
  ratingCount: number;
  reviewCount: number;
  usersWantCount: number;
  summary: string[];
  price: {
    original: number;
    current: number;
    discountPercent: number;
  };
  stockCount: number;
  offerText: string;
}
