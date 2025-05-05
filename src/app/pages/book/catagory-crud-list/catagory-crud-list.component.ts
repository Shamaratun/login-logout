import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Catagory } from '../../app.component';
import { CustomerHeaderComponent } from "../../Customer/customer-header/customer-header.component";

@Component({
  selector: 'app-catagory-crud-list',
  imports: [FormsModule, CommonModule, NgFor, CustomerHeaderComponent],
  templateUrl: './catagory-crud-list.component.html',
  styleUrls: ['./catagory-crud-list.component.css']
})
export class CatagoryCrudListComponent implements OnInit {
  cartService = inject(CartService);
  cartItems: Catagory[] = [];
  catagories: Catagory[] = []; // Array to store category data
  catagory: Catagory = new Catagory(0, '', '', 0, 0, ''); // Object for form data
  isUpdate: boolean = false; // Flag to check if it's update mode
  currentIndex: number | null = null; // To store the index of the category being edited
  modalOpen: boolean = false; // Flag to control modal visibility
  imageUrl: string | ArrayBuffer | null = null; // For image preview

  constructor(private router: Router) {}

  ngOnInit(): void {
    const catagoriesFromStorage = localStorage.getItem('catagories');
    if (catagoriesFromStorage) {
      this.catagories = JSON.parse(catagoriesFromStorage) as Catagory[];
    }
    console.log('Loaded Categories:', this.catagories);

    let allCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    this.cartItems = allCartItems;
  }

  onSubmit(): void {
    if (this.isUpdate && this.currentIndex !== null) {
      this.catagories[this.currentIndex] = { ...this.catagory }; // Replace the category at the given index
    } else {
      this.catagory.id = this.catagories.length ? Math.max(...this.catagories.map(c => c.id)) + 1 : 1;
      this.catagories.push(this.catagory); // Add a new category
    }

    localStorage.setItem('catagories', JSON.stringify(this.catagories)); // Save updated list to localStorage
    console.log('Updated Categories:', this.catagories);
    this.resetForm(); // Reset form
    this.closeModal(); // Close modal after submitting
  }

  // Reset the form after submission
  resetForm(): void {
    this.catagory = { id: 0, name: '', description: '',price: 0, imageUrl: '' };
    this.isUpdate = false; // Reset update flag
    this.currentIndex = null; // Reset index
  }

  // Edit a category
  editCatagory(catagory: Catagory, index: number): void {
    this.catagory = { ...catagory }; // Copy the category's data into the form
    this.currentIndex = index; // Store the index for updating
    this.isUpdate = true; // Set the flag to indicate update mode
    this.openModal(); // Open modal for editing
  }

  // Delete a category
  deleteCatagory(catagoryToDelete: Catagory): void {
    if (confirm('Are you sure you want to delete this category?')) {
      this.catagories = this.catagories.filter(catagory => catagory !== catagoryToDelete);
      localStorage.setItem('catagories', JSON.stringify(this.catagories));
      alert('Category deleted successfully');
      console.log('Updated Categories after deletion:', this.catagories);
    }
  }

  // Handle image file selection
  onImageChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (allowedTypes.includes(file.type)) {
        this.catagory.imageUrl = file.name; // Store only file name
        const reader = new FileReader();
        reader.onload = () => {
          this.imageUrl = reader.result;
        };
        reader.readAsDataURL(file);
      } else {
        alert('Only image files are allowed!');
      }
    }
  }

  // Add category to cart
  addToCart(catagory: Catagory): void {
    this.cartItems.push(catagory);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    console.log('Category added to cart:', catagory);
  }

  // Track by function for *ngFor (helps with performance)
  trackCatagory(index: number, catagory: Catagory): number {
    return catagory.id;
  }

  // Open the modal
  openModal(): void {
    this.modalOpen = true;
  }

  // Close the modal
  closeModal(): void {
    this.modalOpen = false;
  }
}
