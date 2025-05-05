import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCRUDComponent } from './book-crud.component';

describe('BookCRUDComponent', () => {
  let component: BookCRUDComponent;
  let fixture: ComponentFixture<BookCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCRUDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
