
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterRequest, UserService } from '../../core/service/user.service';
import { Role, User } from '../../models/user';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  imports: [CommonModule,FormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  users: User = new User();

  roles = Object.values(Role);

  isUpdate = false;

  user: RegisterRequest = {
    email: '',
    password: '',
    role: 'CUSTOMER',
    address: '',
    nid: 1,
    phoneNumber: '',
    fullName: '',
    username: '',
  };

  confirmPassword = '';
  registrationSuccess = false;
  registrationError = '';

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  /**
   * Handles registration or update submission.
   */
  onSubmit() {
    if (this.isUpdate) {
      this.updateUser();
    } else {
      this.registerNewUser();
    }
  }

  /**
   * Registers a new user.
   */
  private registerNewUser() {
    if (this.user.password !== this.confirmPassword) {
      this.registrationError = 'Passwords do not match.';
      this.registrationSuccess = false;
      alert('Passwords do not match.');
      return;
    }

    this.userService.registerUser(this.user).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        this.registrationSuccess = true;
        this.registrationError = '';
        alert('Registration successful! Please log in.');
        this.router.navigate(['/customer-list']);
      },
      error: (error) => {
        console.error('Registration error:', error.message);
        this.registrationError = error.message;
        this.registrationSuccess = false;
        alert(error.message);
      },
    });
  }

  /**
   * Updates an existing user by email.
   */
  private updateUser() {
    if (!this.users.email) {
      alert('Email is required to update the user.');
      return;
    }

    this.userService.updateUser(this.users.id, this.users).subscribe({
      next: () => {
        alert('User updated successfully.');
        this.router.navigate(['/customer-list']);
      },
      error: (err) => {
        alert('Failed to update user: ' + err.message);
        console.error(err);
      },
    });
  }
}


  // users: User = new User();

  //   roles = Object.values(Role);

  // isUpdate = false;


  // constructor(
  //   private router: Router,
  //   private userService: UserService
  // ) {
  // //   const nav = this.router.getCurrentNavigation();

  //   if (nav?.extras.state && nav.extras.state['a']) {
  //     this.users = nav.extras.state['a'];

  //     this.isUpdate = true;
  //   }
  // }

  // onSubmit(): void {
//   if (this.isUpdate) {
//     // Ensure email is present
//     if (!this.users.email) {
//       alert('Email is required to update the user.');
//       return;
//     }

//     // Update user by email
//     this.userService.updateUserByEmail(this.users.email, this.users).subscribe({
//       next: () => {
//         this.router.navigate(['/user-list']);
//       },
//       error: (err) => {
//         alert('Failed to update user: ' + err.message);
//         console.error(err);
//       },
//     });
//   } else {
//     // Logic for adding a new user
//     this.userService.createUser(this.users).subscribe({
//       next: () => {
//         this.router.navigate(['/user-list']);
//       },
//       error: (err) => {
//         alert('Failed to add user: ' + err.message);
//         console.error(err);
//       },
//     });
//   }
// }


