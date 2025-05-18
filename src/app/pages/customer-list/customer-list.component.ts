import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/service/user.service';

import { NgFor } from '@angular/common';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  imports: [NgFor],
  templateUrl: './customer-list.component.html',
})
export class CustomerListComponent implements OnInit {
  trackById(index: number, users: User): number {
      return users.id!;
    }
  users: User[] = [];

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.saveUser();
  }


  saveUser() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  updateUser(a: User) {
    this.router.navigate(['/registration'], { state: { a } });
  }

  deleteUser(a: User): void {
    if (a.id != null) {
      if (confirm('are you want to delete?')) {
        this.userService.deleteUser(a.id).subscribe(() => {
          this.saveUser();
        });
      }
    } else {
      alert('Id is Invalid?');
    }
  }



  addNewUser(): void {
    this.router.navigate(['/registration'], { state: { users: new User() } });
  }
   
}