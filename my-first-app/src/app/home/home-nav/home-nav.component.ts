import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AlertifyService } from 'src/app/services/alertify.service';
@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css'],
})
export class HomeNavComponent implements OnInit {
  closeResult = '';
  modal: boolean = false;
  signupFormDiv: boolean = false;
  signinFormDiv: boolean = false;
  userRole: string = 'Customer';
  modalReference: any;
  logoutmenu:boolean=false;
  loggedinUser: string | undefined;
  constructor(
    private alertify: AlertifyService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {}
  open(type: string) {
    this.modal=true;
    if (type == 'login') {
      this.signupFormDiv = false;
      this.signinFormDiv = true;
    } else {
      this.signupFormDiv = true;
      this.signinFormDiv = false;
    }
  }
  close(){
    this.modal=false;
    this.signupFormDiv = false;
    this.signinFormDiv = false;
  }
  btnOpenSignup() {
    this.signupFormDiv = true;
    this.signinFormDiv = false;
  }
  openLoginForm() {
    this.signupFormDiv = false;
    this.signinFormDiv = true;
  }
  loggedIn() {
    this.loggedinUser = localStorage.getItem('userName')?.toString();
    return this.loggedinUser;
  }
  // closeModal() {
  //   console.log('close Modal');
  //   this.modal.
  // }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  onLogout() {
    this.logoutmenu=!this.logoutmenu;
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('part');
    localStorage.removeItem('name');
    localStorage.removeItem('id');
    this.alertify.success('You are logged out !');
    this.router.navigate(['/']);
  }
}
