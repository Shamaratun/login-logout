import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../core/service/book.service';
import { Books } from '../../../models/book.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.css'],
})
export class AvailableBooksComponent implements OnInit {
  books: Books[] = [];
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBook();
    this.loadCart();
    this.calculateTotalPrice();
  }

  loadBook(): void {
    this.bookService.getAllBooks().subscribe({
      next: (data) => {
        console.log('Fetched books:', data);
        this.books = data;
      },
      error: (err) => console.error('Failed to load books:', err),
    });
  }

  loadCart(): void {
    const savedCart = localStorage.getItem('cart');
    this.cartItems = savedCart ? JSON.parse(savedCart) : [];
  }

  saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  addToCart(book: Books): void {
    const existingItem = this.cartItems.find(item => item.book?.bookId === book.bookId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      const newItem = {
        cartItemID: Date.now(), // unique ID
        book: {
          bookId: book.bookId,
          title: book.title,
          author: {
            name: book.authorName
          }
        },
        quantity: 1,
        priceAt: book.price
      };
      this.cartItems.push(newItem);
    }

    this.saveCart();
    this.calculateTotalPrice();
    console.log('Cart updated:', this.cartItems);
    alert(`${book.title} added to cart`);
  }

  removeFromCart(bookId: number): void {
    this.cartItems = this.cartItems.filter(item => item.book?.bookId !== bookId);
    this.saveCart();
    this.calculateTotalPrice();
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce(
      (sum, item) => sum + item.quantity * item.priceAt,
      0
    );
  }
}
