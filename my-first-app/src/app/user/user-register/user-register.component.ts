import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User, UserForRegister, UserForLogin } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';
import * as uuid from 'uuid';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registerationForm!: FormGroup;
  user!: UserForRegister;
  userforLogin: UserForLogin = new UserForLogin();
  userSubmitted!: boolean;
  myId: string = '';
  referedperson: string = '';
  errorreferedperson: string = '';
  @Input() userRole: string | undefined;
  @Output() closeModal: EventEmitter<string> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    this.createRegisterationForm();
    this.myId = uuid.v4();
    this.myId = this.myId.split('-')[0];
  }
  createRegisterationForm() {
    this.registerationForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      mobile: [null, [Validators.required, Validators.minLength(10)]],
      referralCode: [null],
    });
  }
  get firstName() {
    return this.registerationForm.get('firstName') as FormControl;
  }
  get lastName() {
    return this.registerationForm.get('lastName') as FormControl;
  }
  get email() {
    return this.registerationForm.get('email') as FormControl;
  }
  get password() {
    return this.registerationForm.get('password') as FormControl;
  }
  get mobile() {
    return this.registerationForm.get('mobile') as FormControl;
  }
  get referralCode() {
    return this.registerationForm.get('referralCode') as FormControl;
  }
  onSubmit() {
    console.log(this.registerationForm);
    this.userforLogin.userName = this.email.value;
    this.userforLogin.password = this.password.value;
    this.userSubmitted = true;
    if (this.registerationForm.valid) {
      this.authService.registerUser(this.userData()).subscribe(() => {
        this.onLogin(this.userforLogin);
        this.registerationForm.reset();
        this.userSubmitted = false;
        this.alertify.success('Congrats, you are successfully registered');
      });
    } else {
      this.alertify.error('Kindly provide the required fields');
    }
  }
  onLogin(loginForm: UserForLogin) {
    this.authService.authUser(loginForm).subscribe((response: UserForLogin) => {
      let user = response;
      console.log(response);
      localStorage.setItem('token', user.token);
      localStorage.setItem('userName', user.userName);
      localStorage.setItem('id', user.id.toString());
      localStorage.setItem('name', user.name);
      localStorage.setItem('part', user.role);
      this.closeModal.emit();
      window.location.href = '/';
    });
  }
  userData(): UserForRegister {
    return (this.user = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value,
      role: 'Customer',
      referralCode: this.referralCode.value,
      myReferralCode: this.myId,
    });
  }
  referalout(e: any) {
    let referalcode = e.target.value;
    if (referalcode != '') {
      this.authService.getReferred(referalcode).subscribe((data) => {
        this.errorreferedperson = '';
        this.referedperson = '';
        if (data.name == 'Invalid referral code') {
          this.errorreferedperson = data.name;
        } else {
          this.referedperson = data.name;
        }
      });
    }
  }
}
