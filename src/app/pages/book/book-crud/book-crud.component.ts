import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../../core/service/book.service';
import { Book } from '../../../models/book.model';
import { FormsModule, NgModel } from '@angular/forms';


@Component({
  selector: 'app-book-list',
  imports: [FormsModule,],
  templateUrl: './book-crud.component.html',
  styleUrls: ['./book-crud.component.css'],
})
export class BookCRUDComponent implements OnInit {
  books: Book[] = [];
 isUpdate: boolean = false;
  constructor(private router: Router, private bookService: BookService) {}
  ngOnInit(): void {
  this.bookService.getBooks().subscribe((data) => {
    this.books = data;
  });
}

saveBook() {
  this.bookService.getBooks().subscribe((data) => {
    this.books = data;
  });
}
 
  Edit(b: Book){
    this.router.navigate(['/book-crud'], { state: { b } });
  }

  Delete(b: Book): void {
    if (b.id != null) {
      if (confirm('Are you sure you want to delete this book?')) {
        this.bookService.getBooks().subscribe(() => {
          this.saveBook();
        });
      }
    } else {
      alert('Invalid Book ID');
    }}

    
  }


