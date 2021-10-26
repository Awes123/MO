import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutsInCartsComponent } from './produts-in-carts.component';

describe('ProdutsInCartsComponent', () => {
  let component: ProdutsInCartsComponent;
  let fixture: ComponentFixture<ProdutsInCartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutsInCartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutsInCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
