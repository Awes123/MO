import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutsOnHomeComponent } from './produts-on-home.component';

describe('ProdutsOnHomeComponent', () => {
  let component: ProdutsOnHomeComponent;
  let fixture: ComponentFixture<ProdutsOnHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutsOnHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutsOnHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
