import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductsNewarrivalComponent } from './home-products-newarrival.component';

describe('HomeProductsNewarrivalComponent', () => {
  let component: HomeProductsNewarrivalComponent;
  let fixture: ComponentFixture<HomeProductsNewarrivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProductsNewarrivalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProductsNewarrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
