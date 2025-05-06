import { Component, OnInit } from "@angular/core";
import { UserService } from "../../core/service/user.service";
import { User } from "../../models/user";
import { NgFor } from "@angular/common";

@Component({
  selector: 'app-customer-list',  // Corrected selector
  templateUrl: './customer-list.component.html',
  imports: [NgFor],  // Removed unnecessary imports
})
export class CustomerListComponent implements OnInit {  // Fixed the class name
  userList: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.userList = data;
        console.log('Fetched users:', this.userList);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}

