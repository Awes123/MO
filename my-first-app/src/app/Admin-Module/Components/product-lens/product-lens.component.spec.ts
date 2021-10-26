import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLensComponent } from './product-lens.component';

describe('ProductLensComponent', () => {
  let component: ProductLensComponent;
  let fixture: ComponentFixture<ProductLensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
