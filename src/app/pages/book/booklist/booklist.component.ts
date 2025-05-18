import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { Books } from '../../../models/book.model';
import { NgFor } from '@angular/common';
import { BookService } from '../../../core/service/book.service';
import { WarehouseService } from '../../../core/service/warehouse.service';
import { AuthorService } from '../../../core/service/author.service';
import { Author } from '../../../models/author';
import { Warehouse } from '../../../models/warehouse';

// 
@Component({
  selector: 'app-booklist',
  imports: [FormsModule,NgFor],
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
})
export class BookListComponent implements OnInit {

 books: Books[] = []; 
 author: Author[] = []; 
  warehouse: Warehouse[] = [];
  trackByBook(index: number, books: Books): number {
     return books.bookId!;
  }
    constructor(
       private router:Router,
       private bookService: BookService,
        private warehouseService: WarehouseService,
       private authorService: AuthorService){  }

   ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((data) => {
      this.books = data;

    });
  }

  // this is the method to get all the data from the data base

  saveBook() {
    this.bookService.getAllBooks().subscribe((data) => {
      this.books = data;
      
    });
  }

  editBook(a: Books) {
    this.router.navigate(['/book-crud'], { state: { a } });
  }

  deleteBook(a: Books) {
    if (confirm('are you want to delete?')) {
      this.bookService.deleteBook(a.bookId).subscribe(() => {
        this.saveBook();
      });
    }
  }
//  courses: Course[] = [];

//   constructor(private router: Router, private courseService: CourseService) {}

//   ngOnInit(): void {
//     this.courseService.getCourses().subscribe((data) => {
//       this.courses = data;
//     });
//   }


//   saveCourse() {
//     this.courseService.getCourses().subscribe((data) => {
//       this.courses = data;
//     });
//   }

//   updateCourse(a: Course) {
//     this.router.navigate(['/add-course'], { state: { a } });
//   }

//   deleteCourse(a: Course): void {
//     if (a.id != null) {
//       if (confirm('are you want to delete?')) {
//         this.courseService.deleteCourse(a.id).subscribe(() => {
//           this.saveCourse();
//         });
//       }
//     } else {
//       alert('Id is Invalid?');
//     }
//   }
//   addNewCourse(): void {
//     this.router.navigate(['/add-course'], { state: { course: new Course() } });
 }
