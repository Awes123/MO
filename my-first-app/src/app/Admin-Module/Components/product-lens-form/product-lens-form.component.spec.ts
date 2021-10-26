import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLensFormComponent } from './product-lens-form.component';

describe('ProductLensFormComponent', () => {
  let component: ProductLensFormComponent;
  let fixture: ComponentFixture<ProductLensFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLensFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLensFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
