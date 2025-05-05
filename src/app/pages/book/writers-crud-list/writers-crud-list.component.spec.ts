import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WritersCrudListComponent } from './writers-crud-list.component';

describe('WritersCrudListComponent', () => {
  let component: WritersCrudListComponent;
  let fixture: ComponentFixture<WritersCrudListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WritersCrudListComponent] // Use declarations instead of imports
    })
    .compileComponents();

    fixture = TestBed.createComponent(WritersCrudListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
