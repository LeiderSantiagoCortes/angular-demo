import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  time: string = '';

  ngOnInit() {
    this.updateTime();
  }

  updateTime() {
    setInterval(() => {
      const now = new Date();
      this.time = now.toLocaleTimeString();
    }, 1000);
  }
}
