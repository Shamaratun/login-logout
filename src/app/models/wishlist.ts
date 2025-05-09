export class Wishlist {
  wishlistID?: number;
  user: any; // Can be replaced by a User model if you have one
  items?: any[]; // Assuming you have a WishlistItem model for the related data

  constructor(user: any, wishlistID?: number, items?: any[]) {
    this.wishlistID = wishlistID;
    this.user = user;
    this.items = items || [];
  }
}
