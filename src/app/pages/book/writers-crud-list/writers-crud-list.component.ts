
// import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { Component, inject, OnInit } from '@angular/core';
// import { CommonModule, NgFor } from '@angular/common';
// import { CartComponent } from "../../cart/cart.component";
// import { Writer } from '../../../app.component';






// @Component({
//   selector: 'app-writers-crud-list',
//   imports: [FormsModule, CommonModule, NgFor, ],
//   templateUrl: './writers-crud-list.component.html',
//   styleUrls: ['./writers-crud-list.component.css']
// })
// export class WritersCrudListComponent implements OnInit {
  
//   cartServeice = inject(CartService); 
//   carts: Writer[] = []; 
//   writers: Writer[] = []; // Array to store books data
//   writer: Writer = new Writer(0, '', '', 0, 0, ''); // Object for form data
//   isUpdate: boolean = false; // Flag to check if it’s update mode
//   currentIndex: number | null = null; // To store the index of the writer being edited
  

//   constructor(private router: Router) { }

//   ngOnInit(): void {
//     const writersFromStorage = localStorage.getItem('writers');
//     if (writersFromStorage) {
//       this.writers = JSON.parse(writersFromStorage) as Writer[];
//     }
//     console.log('Writers:', this.writers); // Check if writers are loaded
 
//     let allCarts = JSON.parse(localStorage.getItem('customers') || '[]');
//     this.carts =allCarts;
//   }

//   onSubmit(): void {
//     if (this.isUpdate && this.currentIndex !== null) {
//       this.writers[this.currentIndex] = { ...this.writer }; // Replace the writer at the given index
//     } else {
//       this.writers.push(this.writer); // Add a new writer/book
//     }
  
//     localStorage.setItem('writers', JSON.stringify(this.writers)); // Save updated list to localStorage
//     this.writer = new Writer(0, '', '', 0, 0, '');
//     this.isUpdate = false; // Reset update flag
//     this.currentIndex = null; // Reset index
//     alert("Successfull!")
//   }
  
//   // Reset the form after submission
//   resetForm(): void {
//     this.writer = new Writer(0, '', '', 0, 0, '');
//     this.isUpdate = false; // Reset update flag
//     this.currentIndex = null; // Reset index
//     alert("Successfull!")
//   }

//   // Method to handle the update action for a writer/book
  
  

//    editWriter(writer: Writer, index: number): void {
//     this.writer = { ...writer }; // Copy the writer's data into the form
//     this.currentIndex = index; // Store the index for updating
//     this.isUpdate = true; // Set the flag to indicate update mode
//   }

//   // Method to handle deleting a writer/book from the list
//   deleteWriter(i: number): void {
//     if (confirm('Are you sure you want to delete this book?')) {
//       this.writers.splice(i, 1); // Remove the writer
//       localStorage.setItem('writers', JSON.stringify(this.writers)); // Save the updated list
//       alert('Book deleted successfully'); 
//     }
//   }
  

//   // Method to display book details (this can be expanded as needed)
//   detailsOfBook(writer: Writer): void {
//     console.log('Book Details:', writer);
//     // You can add routing logic or additional functionality here
//   }

//   // Method to add book to the cart (you can expand functionality as needed)
//   addToCart(writer: Writer): void {

//     this.carts.push(writer);
//     localStorage.setItem('cart', JSON.stringify(this.carts));
//     // Add to cart functionality can be added here
//   }

//   // Track by function for *ngFor (helps with better performance)
//   trackWriter(index: number, writer: Writer): number {
//     return writer.id; // Using writer's name as a unique identifier
//   }
// }
