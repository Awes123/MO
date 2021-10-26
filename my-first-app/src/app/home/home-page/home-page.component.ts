import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  loggedinUser: string | undefined;
  title = 'my-first-app';
  menu: string = 'ELP';
  constructor(private router: Router) {
    if (this.loggedIn()) {
      router.navigate(['/dashboard']);
    }
  }
  ngOnInit(): void {}
  loggedIn() {
    this.loggedinUser = localStorage.getItem('userName')?.toString();
    return this.loggedinUser;
  }
  menuClick(menu: string) {
    this.menu = menu;
  }
}
