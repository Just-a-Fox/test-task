import { Component } from '@angular/core';
import { PasswordComponent } from './password/password.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PasswordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test';
}
