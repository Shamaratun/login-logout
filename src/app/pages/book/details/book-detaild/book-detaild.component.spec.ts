import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetaildComponent } from './book-detaild.component';

describe('BookDetaildComponent', () => {
  let component: BookDetaildComponent;
  let fixture: ComponentFixture<BookDetaildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDetaildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDetaildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
