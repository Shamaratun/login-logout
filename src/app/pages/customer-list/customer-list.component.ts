import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/service/user.service';

import { NgFor } from '@angular/common';
import { User } from '../../models/user';

@Component({
  selector: 'app-customer-list',
  imports: [NgFor],
  templateUrl: './customer-list.component.html',
})
export class CustomerListComponent implements OnInit {
  users: User[] = [];
  user: User = new User();
  isUpdate: boolean = false;
  currentEditId: number | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();

    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        console.log('Loaded users:', this.users); // Optional for debugging
      },
      error: (err) => console.error('Error loading users:', err),
    });
  }

  onSubmit(): void {
    if (this.isUpdate && this.currentEditId !== null) {
      this.userService.updateUser(this.currentEditId, this.user).subscribe({
        next: () => {
          this.loadUsers();
          this.resetForm();
          alert('User updated successfully!');
        },
        error: (err) => console.error('Update failed:', err),
      });
    } else {
      this.userService.registerUser(this.user).subscribe({
        next: () => {
          this.loadUsers();
          this.resetForm();
          alert('User registered successfully!');
        },
        error: (err) => console.error('Registration failed:', err),
      });
    }
  }

  editUser(user: User): void {
    this.user = { ...user }; // Copy the selected user for editing
    this.currentEditId = user.id!; // Use the correct field for ID
    this.isUpdate = true;
  }

  deleteUser(user: User): void {
    if (user.id != null && confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(user.id).subscribe({
        next: () => {
          this.loadUsers();
          alert('User deleted successfully!');
        },
        error: (err) => console.error('Delete failed:', err),
      });
    }
  }

  resetForm(): void {
    this.user = new User(); // Reset the form to initial state
    this.isUpdate = false;
    this.currentEditId = null;
  }

  trackByUserId(index: number, user: User): number {
    return user.id!; // Track by the 'id' field
  }
}
