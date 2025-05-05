import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Book } from '../../../app.component';


@Component({
  selector: 'app-book-crud',
  imports: [FormsModule],
  templateUrl: './book-crud.component.html',
  styleUrl: './book-crud.component.css'
})
export class BookCRUDComponent  implements OnInit {
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


