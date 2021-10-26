import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLensFeatureComponent } from './product-lens-feature.component';

describe('ProductLensFeatureComponent', () => {
  let component: ProductLensFeatureComponent;
  let fixture: ComponentFixture<ProductLensFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLensFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLensFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
