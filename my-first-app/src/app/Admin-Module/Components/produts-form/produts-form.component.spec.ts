import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutsFormComponent } from './produts-form.component';

describe('ProdutsFormComponent', () => {
  let component: ProdutsFormComponent;
  let fixture: ComponentFixture<ProdutsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
