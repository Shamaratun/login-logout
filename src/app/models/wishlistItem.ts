import { Wishlist } from "./wishlist";



export interface WishlistItem {
  wishlistItemID?: number; // ID of the wishlist item, optional since it might be generated
  wishlist?: Wishlist; // Relation to the Wishlist
  book?: Books; // Relation to the Book
}
export class Books {
  bookID?: number;
  title?: string;
  author?: string;
  price?: number;
  // Other attributes of the book
}