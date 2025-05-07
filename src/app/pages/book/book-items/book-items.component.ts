import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../../../models/book.model';
import { BookService } from '../../../core/service/book.service';

@Component({
  selector: 'app-book-items',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './book-items.component.html',
  styleUrls: ['./book-items.component.css']
})
export class BookItemsComponent implements OnInit {
  books: Book[] = [];
  book: Book = new Book(); // form model
  isUpdate: boolean = false;
  currentEditId: number | null = null;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (data) => (this.books = data),
      error: (err) => console.error('Error loading books:', err),
    });
  }

  onSubmit(): void {
    if (this.isUpdate && this.currentEditId !== null) {
      this.bookService.updateBook(this.currentEditId, this.book).subscribe({
        next: () => {
          this.loadBooks();
          this.resetForm();
          alert('Book updated successfully!');
        },
        error: (err) => console.error('Update failed:', err),
      });
    } else {
      this.bookService.createBook(this.book).subscribe({
        next: () => {
          this.loadBooks();
          this.resetForm();
          alert('Book added successfully!');
        },
        error: (err) => console.error('Create failed:', err),
      });
    }
  }


  
  editBook(book: Book): void {
    this.book = { ...book };
    this.currentEditId = book.id!;
    this.isUpdate = true;
  }

  deleteBook(book: Book): void {
    if (book.id != null && confirm('Are you sure you want to delete this book?')) {
      this.bookService.deleteBook(book.id).subscribe({
        next: () => {
          this.loadBooks();
          alert('Book deleted successfully!');
        },
        error: (err) => console.error('Delete failed:', err),
      });
    }
  }

  resetForm(): void {
    this.book = new Book();
    this.isUpdate = false;
    this.currentEditId = null;
  }

  trackById(index: number, book: Book): number {
    return book.id!;
  }
}