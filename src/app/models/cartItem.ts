


// export class CartItem {
//   cartItemID: number=0;
//   quantity: number=0;
//   bookId: number=0;
//   cartId?: number=0;
//   priceAtAddTime?: number=0;
//   addedAt?: string;
// }
export class CartItem {
  cartItemID: number;
  book: {
    title: string;
    author: {
      name: string;
    };
  };
  quantity: number;
  priceAt: number;

  constructor(
    cartItemID: number,
    title: string,
    authorName: string,
    quantity: number,
    priceAt: number
  ) {
    this.cartItemID = cartItemID;
    this.book = {
      title: title,
      author: {
        name: authorName
      }
    };
    this.quantity = quantity;
    this.priceAt = priceAt;
  }

  getSubtotal(): number {
    return this.quantity * this.priceAt;
  }
}
