import { Component, OnInit } from "@angular/core";
import { BookService } from "../../../core/service/book.service";
import { Books } from "../../../models/book.model";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AuthService } from "../../../core/auth.service";
@Component({
  selector: "app-book-items",
  imports: [FormsModule, CommonModule],
  templateUrl: "./book-items.component.html",
  styleUrls: ["./book-items.component.css"],
})
export class BookItemsComponent implements OnInit {
  books: Books[] = [];
  book: Books = new Books();
  isUpdate: boolean = false;
  currentEditId: number | null = null;
userRole= '';

  constructor(private bookService: BookService,private auth: AuthService) {}
 
   
  
  ngOnInit(): void {
    this.loadBooks(), this.userRole = this.auth.getUserRole();
    
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (data) => (this.books = data.map(b => new Books(b))),
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

  editBook(book: Books): void {
    this.book = new Books(book);
    this.currentEditId = book.bookId!;
    this.isUpdate = true;
  }

  deleteBook(book: Books): void {
    if (book.bookId != null && confirm('Are you sure you want to delete this book?')) {
      this.bookService.deleteBook(book.bookId).subscribe({
        next: () => {
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
