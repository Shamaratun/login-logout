import { Component } from '@angular/core';
import { AdminComponent } from "../adminP/adminHeader/admin.component";


@Component({
  selector: 'app-admin-view',
  imports: [AdminComponent],
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.css'
})
export class AdminViewComponent {
  userRole: any;

}
