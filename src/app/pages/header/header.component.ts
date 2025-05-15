import { Component } from '@angular/core';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  role = '';
   constructor(private auth: AuthService) {
      this.role = auth.getUserRole();
    }
logout() {
    this.auth.logout();
  }
}
