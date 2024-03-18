import { Component, Input } from '@angular/core';
import { PasswordControlComponent } from './password-control/password-control.component';
import { TestTaskFormComponent } from './test-task-form/test-task-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PasswordControlComponent, TestTaskFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
