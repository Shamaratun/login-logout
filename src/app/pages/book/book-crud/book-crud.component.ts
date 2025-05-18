import { Component, OnInit } from '@angular/core';
import { Author } from '../../../models/author';
import { Books } from '../../../models/book.model';
import { Warehouse } from '../../../models/warehouse';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthorService } from '../../../core/service/author.service';
import { WarehouseService } from '../../../core/service/warehouse.service';
import { BookService } from '../../../core/service/book.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor],
  templateUrl: './book-crud.component.html',
  styleUrls: ['./book-crud.component.css']
})
export class BookCRUDComponent implements OnInit {


  books: Books[] = [];
  book: Books = new Books();

  authors: Author[] = [];
  warehouses: Warehouse[] = [];
 userRole = '';
  genres: string[] = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography', 'History', 'Fantasy'];
currentEditId: number | null = null;
  isUpdate: boolean = false;

  constructor(
    
    private auth: AuthService,
    private bookService: BookService,
    private authorService: AuthorService,
    private warehouseService: WarehouseService
  ) {}
ngOnInit(): void {
    this.loadBook(),
      this.userRole = this.auth.getUserRole(),
      this.getAuthors(),
      this.getWarehouses();
}
 getAuthors(): void {
    this.authorService.getAuthors().subscribe({
      next: (data) => {
        this.authors = data;
        console.log('Authors:', this.authors);
      },
      error: (err) => console.error('Failed to load authors:', err)
    });
  }
getWarehouses(): void {
    this.warehouseService.getWarehouses().subscribe({
      next: (data) => {
        this.warehouses = data;
        console.log('Warehouses:', this.warehouses);
      },
      error: (err) => console.error('Failed to load warehouses:', err)
    });
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

  loadAuthors(): void {
    this.authorService.getAuthors().subscribe({
      next:data => {
        console.log('Fetched authors:', data);
      this.authors = data;
       },
    error: (err) => console.error('Failed to load authors:', err)
    });
  }

  loadWarehouses(): void {
    this.warehouseService.getWarehouses().subscribe({
      next:data => {
        console.log('Fetched warehouses:', data);
      this.warehouses = data;
        },
    error: (err) => console.error('Failed to load warehouses:', err)
    });
  }
onSubmit(): void {
    if (this.isUpdate && this.currentEditId !== null) {
      this.bookService.updateBook(this.currentEditId, this.book).subscribe({
        next: () => {
          this.loadBook();
          this.resetForm();
          alert('Author updated successfully!');
        },
        error: (err) => console.error('Update failed:', err),
      });
    } else {
      this.bookService.createBook(this.book).subscribe({
        next: () => {      
          this.book = new Books(); // Reset the book object
          this.loadBook();
          this.resetForm();
          alert('Book added successfully!');
        },
        error: (err) => console.error('Create failed:', err),
      });
    }
  }

editBook(book: Books): void {
  this.book = { ...book };
  this.currentEditId = book.bookId!;
  this.isUpdate = true;
}

 deleteBook(book: Books): void {
    if (book.bookId != null && confirm('Are you sure you want to delete this book?')) {
      this.bookService.deleteBook(book.bookId).subscribe({
        next: () => {
          console.log('Book deleted:', book);
          this.books = this.books.filter(b => b.bookId !== book.bookId);
          this.loadBook();
          alert('Book deleted successfully!');
        },
        error: (err) => console.error('Delete failed:', err),
      });
    }
  }
resetForm(): void {
  this.book = new Books();
  this.isUpdate = false;
  this.currentEditId = null;
}

  trackById(index: number, book: Books): number {
    return book.bookId!;
  }
}
