import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/service/user.service';

import { NgFor } from '@angular/common';
import { User, UserInfo } from '../../models/user';
import { Router } from '@angular/router';
import { CustomerService } from '../customer-view/customer.service';

@Component({
  selector: 'app-customer-list',
  imports: [NgFor],
  templateUrl: './customer-list.component.html',
})
export class CustomerListComponent implements OnInit {
// updateUser(_t15: UserInfo) {
// throw new Error('Method not implemented.');
// }
// deleteUser(_t15: UserInfo) {
// throw new Error('Method not implemented.');
// }
 trackById(index: number, customer: UserInfo): number {
  return customer.id!;
}
  users: User[] = [];

  // constructor(private router: Router, private userService: UserService) {}

  // ngOnInit(): void {
  //   this.getCustomer()
  // }


  // getCustomer() {
  //   this.userService.().subscribe((data) => {
  //     this.users = data;
  //   });
  // }

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
saveUser(): void {
  this.getAllUser();
}


  addNewUser(): void {
    this.router.navigate(['/registration'], { state: { users: new User() } });
  }

   user: User = new User();

   isUpdate = false;
   customers: User[] = [];
   customerInfo: UserInfo[] = [];

   constructor(
     private router: Router,
   
     private userService: UserService,
     private customerService: CustomerService
   ) {
    
   }

   ngOnInit() {
 
     this.getAllUser();
   }

   getAllUser() {
     this.customerService.getAllUser().subscribe({
       next: (data: UserInfo[]) => {
         const customerInfo = data.filter(user => user.role === 'CUSTOMER');
         this.customerInfo = customerInfo;
       },
       error: (err) => {
        console.error('Failed to load customers:');
       }
     });
   }
   
}