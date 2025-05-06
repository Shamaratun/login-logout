import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookService, BookRequest, BookResponse } from '../../../core/service/book.service';
import Modal from 'bootstrap/js/dist/modal';
import { Book } from '../../../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './book-crud.component.html',
  styleUrls: ['./book-crud.component.css']
})
export class BookCRUDComponent implements OnInit {
//   books: BookResponse[] = [];
//   newBook: BookRequest = this.createEmptyBook();
//   private modal: Modal | null = null;

//   constructor(private bookService: BookService) {}

//   ngOnInit(): void {
//     this.fetchBooks();

//     const modalElement = document.getElementById('addBookModal');
//     if (modalElement) {
//       this.modal = new Modal(modalElement);
//     }
//   }

//   fetchBooks() {
//     this.bookService.getBooks().subscribe(
//       (data) => {
//         this.books = data;
//       },
//       (error) => {
//         console.error('Error fetching books:', error);
//       }
//     );
//   }

//   addBook() {
//     this.bookService.addBook(this.newBook).subscribe(
//       (response) => {
//         this.books.push(response);
//         this.modal?.hide();
//         this.newBook = this.createEmptyBook();
//       },
//       (error) => {
//         console.error('Error adding book:', error);
//       }
//     );
//   }

//   openModal() {
//     if (this.modal) this.modal.show();
//   }

//   createEmptyBook(): BookRequest {
//     return {
//       classId: 0,
//       title: '',
//       isbn: '',
//       price: 0,
//       stock: 0,
//       image: '',
//       genre: '',
//       rating: 0,
//       createdAt: new Date().toISOString(),
//       updatedAt: new Date().toISOString(),
//     };
//   }

//   trackByBook(index: number, book: BookResponse) {
//     return book.id;
//   }
// }
b: Book = new Book(0, '', '', '', '', new Date(),0,'');
isUpdate = false;
constructor(private router: Router) {
  const nav = this.router.getCurrentNavigation();
  if (nav?.extras?.state?.['books']) {
    this.b = nav.extras.state['books'];
    this.isUpdate = true;
  }
}

ngOnInit(): void {
  // // console.log('CreateComponent');
  // // console.error('CreateComponent');
  // localStorage.setItem('id', '0');
  // localStorage.setItem('title', 'kjb');
  // localStorage.setItem('author', 'uifgkj');
  // localStorage.setItem('genre', 'uigu');
  // localStorage.setItem('publisher', 'kajscg');
  // localStorage.setItem('publicationDate', '2022-12-12');
  // localStorage.setItem('price', '12000');
  // localStorage.setItem('targetAudience', '2022-12-12'); 
console.log(this.b);
}

onSubmit() {
  let books: Book[] = JSON.parse(localStorage.getItem('book') || '[]');
  if (this.isUpdate) {
    books = books.map((book) => (book.id == this.b.id ? this.b : book));
  } else {
    books.push(this.b);
  }
    localStorage.setItem('book', JSON.stringify(books));
    this.b = new Book(0, '', '', '', '', new Date(), 0, '');
    //  alert('book added successfully')
    this.router.navigate(['/booklist']);
  }
}

