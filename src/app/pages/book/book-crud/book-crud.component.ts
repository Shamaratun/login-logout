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
  authors:string[]=['Alvi Ahmed','Sadat Hossain','Pawlo Kohalho','shahid al bukhari mohajatak','Shirshendu Mukhopadday','Kazi Nazrul Islam'];
  stocks:string[]=['12','90','100','200','300','400','500','600'];
  warehouses:string []=['Jashoreport12','dhaka 34', 'Khulna 45', 'Barisal 23', 'Chattogram 12', 'Sylhet 34', 'Rajshahi 45', 'Rangpur 23'];  
 userRole = '';
  genres: string[] = ['Novel','Fiction','Text Book','Islami Books', 'Non-Fiction', 'Sci-Fi', 'Biography', 'History', 'Fantasy'];
currentEditId: number | null = null;
  isUpdate: boolean = false;

  constructor(
    
    private auth: AuthService,
    private bookService: BookService,
   
  ) {}
ngOnInit(): void {
    this.loadBooks();
      
}

 loadBooks(): void {
  this.bookService.getAllBooks().subscribe({
    next: (data) => {
      console.log('Fetched books:', data);
      this.books = data;
    },
    error: (err) => console.error('Failed to load books:', err)
  });
}

  

onSubmit(): void {
    console.log('Submitting book:', this.book);
    if (this.isUpdate && this.currentEditId !== null) {
      this.bookService.updateBook(this.currentEditId, this.book).subscribe({
        next: () => {
          this.loadBooks();
          this.resetForm();
          alert('Bookupdated successfully!');
        },
        error: (err) => console.error('Update failed:', err),
      });
    } else {
      this.bookService.createBook(this.book).subscribe({
        next: () => {      
          this.book = new Books(); // Reset the book object
          this.loadBooks();
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
          this.loadBooks();
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
