import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../core/service/cart.service';
import { BookService } from '../../../core/service/book.service';
import { NgFor } from '@angular/common';
import { Books } from '../../../models/book.model';
import { CartItem } from '../../../models/cartItem';
import { Author } from '../../../models/author';
import { CartItemService } from '../../../core/service/cartItem.service';
import { AuthorService } from '../../../core/service/author.service';



@Component({
  selector: 'app-book-list',
  imports: [NgFor],
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.css']
})
export class AvailableBooksComponent implements OnInit {
  books: Books[] = [];
author: Author[] = [];
cartItem: CartItem[] = [];
 

  constructor(private cartService: CartService,private  cartItemService: CartItemService,
    private authorService: AuthorService
    , private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBook();
  }

   loadBook(): void {
  this.bookService.getAllBooks().subscribe({
    next: (data) => {
      console.log('Fetched books:', data);
      this.books = data;
    },
    error: (err) => console.error('Failed to load books:', err)
  });
}

  addToCart(book: Books): void {
    this.cartService.addToCart(book).subscribe({
      next: (res) => {
        console.log('Added to cart:', res);
        // Optional: show toast or message
      },
      error: (err) => {
        console.error('Add to cart failed:', err);
      }
    });
  }
}
 
    