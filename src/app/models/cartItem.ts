import { Books } from "./book.model";
import { Cart } from "./cart";



export class CartItem {
  cartItemID!: number;
  quantity!: number;
  cart!: Cart;      // or cartID: number; if only the ID is returned
  book!: Books;      // or bookID: number; if only the ID is returned

 priceAtAddTime: number | undefined;
  addedAt?: string;
// cartID!: number;
// bookID!: number;
}