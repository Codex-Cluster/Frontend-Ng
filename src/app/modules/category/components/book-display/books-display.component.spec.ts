import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksdisplayComponent } from './books-display.component';

describe('BooksdisplayComponent', () => {
  let component: BooksdisplayComponent;
  let fixture: ComponentFixture<BooksdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
