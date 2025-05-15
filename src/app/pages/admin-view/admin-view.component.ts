import { Component } from '@angular/core';
import { AdminComponent } from "../adminP/adminHeader/admin.component";
import { WritersCrudListComponent } from "../book/writers-crud-list/writers-crud-list.component";
import { CatagoryCrudListComponent } from "../book/catagory-crud-list/catagory-crud-list.component";
import { BookItemsComponent } from "../book/book-items/book-items.component";

import { CustomerListComponent } from "../customer-list/customer-list.component";

@Component({
  selector: 'app-admin-view',
  imports: [AdminComponent, WritersCrudListComponent, CatagoryCrudListComponent, BookItemsComponent, CustomerListComponent],
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.css'
})
export class AdminViewComponent {
userRole: any;

}
