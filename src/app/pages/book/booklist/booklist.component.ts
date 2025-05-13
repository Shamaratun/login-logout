import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { Books } from '../../../models/book.model';
import { NgFor } from '@angular/common';

// 
@Component({
  selector: 'app-booklist',
  imports: [FormsModule,NgFor],
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
})
export class BookListComponent implements OnInit {
  
Empire: Books[] = [];  // Array for storing the list of books
  book: any;
  trackByBook(index: number, book: Books): number {
    return book.bookId!;
  }

  trackEmpire(index: number, book: any): number {
    return book.id;
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Retrieve books from localStorage with the correct key and assign to Empire
    const booksFromStorage = JSON.parse(localStorage.getItem('book') || '[]'); // Change 'books' to 'book'
    this.Empire = booksFromStorage;
  }

  editBook(book: Books): void {
    // Send the selected book as state to navigate to the form for updating
    this.router.navigate(['/'], { state: { books: book } });
  }

  deleteBook(bookToDelete: Books): void {
    if (confirm('Are you sure you want to delete this book?')) {
      // Remove the book from the Empire array by filtering out the book
      this.Empire = this.Empire.filter(book => book !== bookToDelete);

      // Update localStorage with the new list of books
      localStorage.setItem('book', JSON.stringify(this.Empire));  // Change 'books' to 'book'

      alert('Book deleted successfully');
    }
  }
  addToCart(arg0: any) {
    throw new Error('Method not implemented.');
    }
}
