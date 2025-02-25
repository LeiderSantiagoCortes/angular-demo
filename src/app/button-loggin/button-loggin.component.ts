import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-loggin',
  standalone: true,
  templateUrl: './button-loggin.component.html',
  styleUrls: ['./button-loggin.component.css'],
  imports: [FormsModule, CommonModule]
})
export class ButtonLogginComponent {
  @Output() nameSubmitted = new EventEmitter<string>();
  showForm = false;
  name = '';
  email = '';
  password = '';

  toggleForm() {
    this.showForm = !this.showForm;
  }

  submitForm(event: Event) {
    event.preventDefault();
    this.nameSubmitted.emit(this.name);
    this.showForm = false;
  }
}