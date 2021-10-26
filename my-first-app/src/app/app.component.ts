import { Component } from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loggedinUser: string | undefined;
  loading = true;
  title = 'STUDUSTRY';
  role='2';
  constructor(private router: Router, config: NgbProgressbarConfig) {
    if (!this.loggedIn()) {
      router.navigate(['/']);
      this.loading = false;
    } else {
      router.events.subscribe((event: RouterEvent) => {
        this.navigationInterceptor(event);
      });
    }
    config.max = 1000;
    config.striped = true;
    config.animated = true;
    config.type = 'primary';
    config.height = '5px';
  }
  loggedIn() {
    this.loggedinUser = localStorage.getItem('userName')?.toString();
    this.role = localStorage.getItem('part')||'2';
    return this.loggedinUser;
  }
  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => {
        // here
        this.loading = false;
      }, 500);
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      setTimeout(() => {
        // here
        this.loading = false;
      }, 500);
    }
    if (event instanceof NavigationError) {
      setTimeout(() => {
        // here
        this.loading = false;
      }, 500);
    }
  }
}
