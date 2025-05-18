import { Component, inject, OnInit } from "@angular/core";
import { BookService } from "../../../core/service/book.service";
import { Books } from "../../../models/book.model";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AuthService } from "../../../core/auth.service";
import { Author } from "../../../models/author";
import { Warehouse } from "../../../models/warehouse";
import { WarehouseService } from "../../../core/service/warehouse.service";
import { AuthorService } from "../../../core/service/author.service";
import { CartService } from "../../../core/service/cart.service";

@Component({
  selector: "app-book-items",
  imports: [FormsModule, CommonModule],
  templateUrl: "./book-items.component.html",
  styleUrls: ["./book-items.component.css"],
})
 export class BookItemsComponent{
//  implements OnInit {

//   author: any[] = [];
//   warehouse: any[] = [];

//   genres: string[] = ['Fantasy', 'Science Fiction', 'Romance', 'Mystery', 'Non-Fiction'];

//   cartServeice = inject(CartService);
//   carts: Books[] = [];
//   books: Books[] = []; // Arr
//   book: Books = new Books();
//   isUpdate: boolean = false; // Flag to check if it’s update mode
//   currentIndex: number | null = null;
//   // books: Books[] = [];
//   // book: Books = new Books();
//   // isUpdate: boolean = false;
//   // currentEditId: number | null = null;
//   userRole = '';

//   constructor(private bookService: BookService, private auth: AuthService, 
//     private authorService: AuthorService, private warehouseService: WarehouseService, 
//     private cartService: CartService) { }



//   ngOnInit(): void {
//     this.loadBooks(),
//       this.userRole = this.auth.getUserRole(),
//       this.getAuthors(),
//       this.getWarehouses();

//   }

//   loadBooks(): void {
//     this.bookService.getBooks().subscribe({
//       next: (data) => (this.books = data.map(b => new Books(b))),
//       error: (err) => console.error('Error loading books:', err),
//     });
//   }

// onSubmit(): void {
  
//   // this.book.author = { authorId: this.author?.authorId! };
//   // this.book.warehouse = { warehouseId: this.book.warehouse?.warehouseId! };

//   if (this.isUpdate && this.book.bookId != null) {
 
//     this.bookService.updateBook(this.book.bookId, this.book).subscribe({
//       next: (updatedBook) => {
//         this.loadBooks();
//         this.resetForm();
//         alert('Book updated successfully!');
//       },
//       error: (err) => console.error('Update failed:', err),
//     });
//   } else {
//     // ✅ Create new book
//     this.bookService.createBook(this.book).subscribe({
//       next: () => {
//         this.loadBooks();
//         this.resetForm();
//         alert('Book added successfully!');
//       },
//       error: (err) => console.error('Create failed:', err),
//     });
//   }
// }

// editBook(book: Books): void {
//   this.book = { ...book };  // copy the book's properties into this.book
//   this.currentIndex = book.bookId!;
//   this.isUpdate = true;
// }



  // getAuthors(): void {
  //   this.authorService.getAuthors().subscribe({
  //     next: (data) => {
  //       this.author = data;
  //       console.log('Authors:', this.author);
  //     },
  //     error: (err) => console.error('Failed to load authors:', err)
  //   });
  // }

  // getWarehouses(): void {
  //   this.warehouseService.getWarehouses().subscribe({
  //     next: (data) => {
  //       this.warehouse = data;
  //       console.log('Warehouses:', this.warehouse);
  //     },
  //     error: (err) => console.error('Failed to load warehouses:', err)
  //   });
  // }



//   deleteBook(book: Books ): void {
//     if (book.bookId != null && confirm('Are you sure you want to delete this book?')) {
//       this.bookService.deleteBook(book.bookId).subscribe({
//         next: () => {
//           this.loadBooks();
//           alert('Book deleted successfully!');
//         },
//         error: (err) => console.error('Delete failed:', err),
//       });
//     }
//   }

  // resetForm(): void {
  //   this.book = new Books();
  //   this.isUpdate = false;
  //   this.currentIndex = null;
  // }
  
//  addToCart(book: Books): void {
//   this.cartService.addToCart(book).subscribe({
//     next: (response) => {
//       alert('Book added to cart successfully!');
//       console.log('Cart response:', response);
//     },
//     error: (err) => {
//       console.error('Error adding book to cart:', err);
//       alert('Failed to add book to cart.');
//     }
//   });
// }
//   trackById(index: number, book: Books): number {
//     return book.bookId!;
//   }
 }
