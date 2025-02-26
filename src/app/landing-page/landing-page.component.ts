import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  opacity1 = 1;
  opacity2 = 0;
  opacity3 = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScroll;

    if (scrollFraction < 0.5) {
      this.opacity1 = 1 - scrollFraction * 2;
      this.opacity2 = scrollFraction * 2;
      this.opacity3 = 0;
    } else {
      this.opacity1 = 0;
      this.opacity2 = 2 - scrollFraction * 2;
      this.opacity3 = scrollFraction * 2 - 1;
    }
  }
}
