import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLensFeatureFormComponent } from './product-lens-feature-form.component';

describe('ProductLensFeatureFormComponent', () => {
  let component: ProductLensFeatureFormComponent;
  let fixture: ComponentFixture<ProductLensFeatureFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLensFeatureFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLensFeatureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
