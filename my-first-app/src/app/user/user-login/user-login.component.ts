import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserForLogin } from '../../model/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  @Output() close: EventEmitter<string> = new EventEmitter();
  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    this.authService
      .authUser(loginForm.value)
      .subscribe((response: UserForLogin) => {
        let user = response;

        localStorage.setItem('token', user.token);
        localStorage.setItem('userName', user.userName);
        localStorage.setItem('id', user.id.toString());
        localStorage.setItem('name', user.name);
        localStorage.setItem('part', user.role);
        this.alertify.success('Login Successfull');
        loginForm.reset();
        this.close.emit();
        if (user.role == '1') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/']);
        }
      });

    // if (token) {
    //   localStorage.setItem('token', token.userName);
    //   this.alertify.success('Login Successfull');
    //   loginForm.reset();
    //   this.router.navigate(['/']);
    // } else {
    //   this.alertify.error('Login Failed');
    // }
  }
}
function next(next: any, arg1: (response: UserForLogin) => void) {
  throw new Error('Function not implemented.');
}
