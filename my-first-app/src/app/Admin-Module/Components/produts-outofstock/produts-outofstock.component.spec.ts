import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutsOutofstockComponent } from './produts-outofstock.component';

describe('ProdutsOutofstockComponent', () => {
  let component: ProdutsOutofstockComponent;
  let fixture: ComponentFixture<ProdutsOutofstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutsOutofstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutsOutofstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
