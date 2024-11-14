import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,  // Mark as standalone
  imports: [CommonModule, FormsModule],  // Import CommonModule and FormsModule
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  formData = { username: '', email: '' };
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
