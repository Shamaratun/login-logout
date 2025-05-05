import { Component } from '@angular/core';

@Component({
  selector: 'app-reg-form',
  imports: [],
  templateUrl: './reg-form.component.html',
  styleUrl: './reg-form.component.css'
})
export class RegFormComponent {
admin: any;
Register(admin: any): void {
  if (confirm('Are you sure you want toregister as admin?')) {

}
alert(admin + " registered as admin");
}
}