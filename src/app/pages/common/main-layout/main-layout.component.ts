import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-main-layout',
  imports: [HeaderComponent, FooterComponent, SidebarComponent],
  
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
