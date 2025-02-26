import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isVisible = true;
  showForm = false;
  userName: string | null = null;
  name = '';
  email = '';
  password = '';
  lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > this.lastScrollTop) {
      // Scroll down
      this.isVisible = false;
    } else {
      // Scroll up
      this.isVisible = true;
    }
    this.lastScrollTop = st <= 0 ? 0 : st;
  }

  toggleForm(event: Event) {
    event.preventDefault();
    this.showForm = !this.showForm;
  }

  submitForm(event: Event) {
    event.preventDefault();
    this.userName = this.name;
    this.showForm = false;
  }

  updateUserName(name: string) {
    this.userName = name;
  }

  logout() {
    this.userName = null;
    this.name = '';
    this.email = '';
    this.password = '';
  }
}
