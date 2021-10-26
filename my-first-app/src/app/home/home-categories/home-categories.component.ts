import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-categories',
  templateUrl: './home-categories.component.html',
  styleUrls: ['./home-categories.component.css']
})
export class HomeCategoriesComponent implements OnInit {

  list:string[]=['eyeglasses','sunglasses'];
  constructor() { }

  ngOnInit(): void {
  }

}
