import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BarberShop';
  windowScrolled = false;
  routeFlag!: boolean;

  constructor(private router: Router ) {}

  ngOnInit() {
    const url = window.location.href;
    url.includes('/login') || url.includes('/admin') ? this.routeFlag = true : this.routeFlag = false;

    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset !== 0;
    });
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
    this.router.navigate(['']);
  }
}
