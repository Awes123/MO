import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductsContainerComponent } from './home-products-container.component';

describe('HomeProductsContainerComponent', () => {
  let component: HomeProductsContainerComponent;
  let fixture: ComponentFixture<HomeProductsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProductsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProductsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
