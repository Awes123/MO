import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLensOnHomeComponent } from './contact-lens-on-home.component';

describe('ContactLensOnHomeComponent', () => {
  let component: ContactLensOnHomeComponent;
  let fixture: ComponentFixture<ContactLensOnHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactLensOnHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactLensOnHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
