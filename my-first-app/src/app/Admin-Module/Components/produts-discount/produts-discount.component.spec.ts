import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutsDiscountComponent } from './produts-discount.component';

describe('ProdutsDiscountComponent', () => {
  let component: ProdutsDiscountComponent;
  let fixture: ComponentFixture<ProdutsDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutsDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutsDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
