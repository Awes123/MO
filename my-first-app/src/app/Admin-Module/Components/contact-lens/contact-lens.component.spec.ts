import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLensComponent } from './contact-lens.component';

describe('ContactLensComponent', () => {
  let component: ContactLensComponent;
  let fixture: ComponentFixture<ContactLensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactLensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactLensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
