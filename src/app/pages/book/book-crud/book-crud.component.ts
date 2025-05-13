import { Component, OnInit } from "@angular/core";
import { Author } from "../../../models/author";
import { Books } from "../../../models/book.model";
import { Warehouse } from "../../../models/warehouse";
import { CommonModule, NgFor } from "@angular/common";
import { FormsModule, NgModel } from "@angular/forms";
import { catchError, map, Observable } from "rxjs";
import { AuthorService } from "../../../core/service/author.service";
import { WarehouseService } from "../../../core/service/warehouse.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-book',
  imports: [NgFor,CommonModule, FormsModule],
  templateUrl: './book-crud.component.html',
  styleUrls: ['./book-crud.component.css']
})
export class BookCRUDComponent implements OnInit {
  books: Books[] = [];

  authors: Author[] = [];

   warehouses: Warehouse[] = [];

   genres: string[] = ['Fantasy', 'Science Fiction', 'Romance', 'Mystery', 'Non-Fiction'];

  book: Books = new Books();
  currentEditId: number | null = null;

  isUpdate: boolean = false;

  private idCounter: number = 1;
   constructor(
    private router: Router,
    private authorService: AuthorService,
    private WarehouseService: WarehouseService
  ) {
    const nav = this.router.getCurrentNavigation();

    if (nav?.extras.state && nav.extras.state['a']) {
      this.authors = nav.extras.state['a'];

      this.isUpdate = true;
    }
  }

  ngOnInit(){
     this.getAuthors(),this.getWarehouses()
  }

   getAuthors() {
    this.authorService.getAuthors().subscribe({
      next: (data) => {
        (this.authors = data);
        console.log(this.authors)
      },
      error: (err) => console.error('Failed to load teachers:', err),
    });
  }

 getWarehouses() {
    this.WarehouseService.getWarehouses().subscribe({
      next: (data) => {
        (this.warehouses = data);
        console.log(this.warehouses)
      },
      error: (err) => console.error('Failed to load teachers:', err),
    });
  }

  
  onSubmit(): void {
    if (this.isUpdate && this.book.bookId != null) {
      const index = this.books.findIndex(b => b.bookId === this.book.bookId);
      if (index > -1) {
        this.books[index] = { ...this.book };
      }
    } else {
      this.book.bookId = this.idCounter++;
      this.books.push({ ...this.book });
    }

    this.resetForm();
  }

  
  editBook(book: Books): void {
    this.book = { ...book };
    this.isUpdate = true;
  }

  
  deleteBook(bookId: number | undefined): void {
    if (bookId !== undefined) {
      this.books = this.books.filter(book => book.bookId !== bookId);
      this.resetForm();
    }
  }


 resetForm(): void {
  this.book = new Books();
  this.isUpdate = false;
  this.currentEditId = null;
}

 
 
  }
