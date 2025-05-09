export class OrderItem {
  orderItemID: number;
  quantity: number;
  price: number;
  order: Order;
  book: Book;

  constructor(
    orderItemID: number = 0,
    quantity: number = 0,
    price: number = 0,
    order: Order = new Order(),
    book: Book = new Book()
  ) {
    this.orderItemID = orderItemID;
    this.quantity = quantity;
    this.price = price;
    this.order = order;
    this.book = book;
  }
}

export class Order {
  orderID: number;
  orderDate: string;
  customerName: string;
  shippingAddress: string;

  constructor(
    orderID: number = 0,
    orderDate: string = '',
    customerName: string = '',
    shippingAddress: string = ''
  ) {
    this.orderID = orderID;
    this.orderDate = orderDate;
    this.customerName = customerName;
    this.shippingAddress = shippingAddress;
  }
}

export class Book {
  bookID: number;
  title: string;
  author: string;
  price: number;

  constructor(bookID: number = 0, title: string = '', author: string = '', price: number = 0) {
    this.bookID = bookID;
    this.title = title;
    this.author = author;
    this.price = price;
  }
}
