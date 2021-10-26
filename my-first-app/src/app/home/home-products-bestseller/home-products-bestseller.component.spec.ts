import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductsBestsellerComponent } from './home-products-bestseller.component';

describe('HomeProductsBestsellerComponent', () => {
  let component: HomeProductsBestsellerComponent;
  let fixture: ComponentFixture<HomeProductsBestsellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProductsBestsellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProductsBestsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
