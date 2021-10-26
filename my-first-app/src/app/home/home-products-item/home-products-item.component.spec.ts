import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductsItemComponent } from './home-products-item.component';

describe('HomeProductsItemComponent', () => {
  let component: HomeProductsItemComponent;
  let fixture: ComponentFixture<HomeProductsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProductsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProductsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
