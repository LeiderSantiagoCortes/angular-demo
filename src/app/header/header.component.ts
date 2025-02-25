import { Component, HostListener } from '@angular/core';
import { ButtonLogginComponent } from '../button-loggin/button-loggin.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [ButtonLogginComponent, CommonModule]
})
export class HeaderComponent {
  isVisible = true;
  userName: string | null = null;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > 100) {
      this.isVisible = false;
    } else {
      this.isVisible = true;
    }
  }

  updateUserName(name: string) {
    this.userName = name;
  }
}