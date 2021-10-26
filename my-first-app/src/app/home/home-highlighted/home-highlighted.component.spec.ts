import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHighlightedComponent } from './home-highlighted.component';

describe('HomeHighlightedComponent', () => {
  let component: HomeHighlightedComponent;
  let fixture: ComponentFixture<HomeHighlightedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHighlightedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHighlightedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
