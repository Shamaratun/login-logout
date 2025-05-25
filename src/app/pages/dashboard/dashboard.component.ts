import { Component } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "../common/sidebar/sidebar.component";

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
 role = '';

  constructor(private auth: AuthService) {
    this.role = auth.getUserRole();
  }

  logout() {
    this.auth.logout();
  }
}

